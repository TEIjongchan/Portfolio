from pathlib import Path

from PIL import Image, ImageSequence


PUBLIC_DIR = Path(__file__).resolve().parents[1] / "public"


def mobile_path(path: Path) -> Path:
    return path.with_name(f"{path.stem}.mobile.webp")


def optimize(path: Path) -> None:
    output = mobile_path(path)
    if output.exists():
        return

    image = Image.open(path)
    max_width = 360 if image.height > image.width else 720
    scale = min(1, max_width / image.width)
    size = (round(image.width * scale), round(image.height * scale))
    frames = []
    durations = []

    for frame in ImageSequence.Iterator(image):
        rendered = frame.convert("RGB")
        if rendered.size != size:
            rendered = rendered.resize(size, Image.Resampling.LANCZOS)
        frames.append(rendered)
        durations.append(frame.info.get("duration", image.info.get("duration", 40)))

    frames[0].save(
        output,
        format="WEBP",
        save_all=True,
        append_images=frames[1:],
        duration=durations,
        loop=image.info.get("loop", 0),
        quality=60,
        method=4,
    )
    before = path.stat().st_size / 1024 / 1024
    after = output.stat().st_size / 1024 / 1024
    print(f"{path.relative_to(PUBLIC_DIR)}: {before:.1f}MB -> {after:.1f}MB", flush=True)


for webp in sorted(PUBLIC_DIR.rglob("*.webp")):
    if not webp.name.endswith(".mobile.webp"):
        optimize(webp)
