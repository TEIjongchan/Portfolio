import styled from "styled-components";
import { motion } from "framer-motion";
import { forwardRef, useEffect, useRef } from "react";

const randomColors = (count) =>
  Array.from({ length: count }, () =>
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`
  );

function TubesCanvas({ tubesRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    let disposePerformanceControls = () => {};

    const initTubes = async () => {
      try {
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        if (prefersReducedMotion) return;

        const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
        const hardwareConcurrency = navigator.hardwareConcurrency || 4;
        const deviceMemory = navigator.deviceMemory || 4;
        const isLowPower = hardwareConcurrency <= 4 || deviceMemory <= 4;
        const isCompact = isCoarsePointer || window.innerWidth <= 768;
        const platform =
          navigator.userAgentData?.platform ||
          navigator.platform ||
          navigator.userAgent;
        const isWindows = /win/i.test(platform);
        const isLargeViewport =
          window.innerWidth * window.innerHeight >= 2560 * 1200;
        const shouldReduceQuality =
          isLowPower || isCompact || isWindows || isLargeViewport;
        const targetFps = isLowPower ? 24 : shouldReduceQuality ? 30 : 40;
        const maxRenderPixels = isCompact
          ? 900_000
          : shouldReduceQuality
          ? 1_600_000
          : 2_800_000;
        const maxPixelRatio = shouldReduceQuality ? 1 : 1.25;

        const tubesModule = await import(
          /* webpackIgnore: true */
          "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"
        );
        if (!mounted || !canvasRef.current) return;

        const tubes = tubesModule.default(canvasRef.current, {
          bloom: shouldReduceQuality
            ? false
            : { threshold: 0.05, strength: 1.1, radius: 0.35 },
          tubes: {
            count: isCompact ? 6 : shouldReduceQuality ? 7 : 10,
            colors: ["#f967fb", "#53bc28", "#6958d5"],
            minTubularSegments: shouldReduceQuality ? 20 : 24,
            maxTubularSegments: isCompact
              ? 36
              : shouldReduceQuality
              ? 48
              : 72,
            lights: {
              intensity: 200,
              colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"],
            },
          },
        });

        // Keep the GPU workload stable even on 1440p/4K Windows displays.
        // The canvas stays full-size in CSS while its internal resolution is
        // capped to a pixel budget that is still sharp enough for moving lines.
        const applyRenderBudget = () => {
          const viewportPixels = Math.max(
            1,
            window.innerWidth * window.innerHeight
          );
          const pixelRatio = Math.min(
            maxPixelRatio,
            Math.max(0.45, Math.sqrt(maxRenderPixels / viewportPixels))
          );

          tubes.three.minPixelRatio = pixelRatio;
          tubes.three.maxPixelRatio = pixelRatio;
          tubes.three.resize();
        };

        applyRenderBudget();

        // Cap the WebGL loop while keeping cursor movement visually smooth.
        const originalBeforeRender =
          tubes.three.onBeforeRender?.bind(tubes.three) || (() => {});
        const originalRender = tubes.three.render.bind(tubes.three);
        const frameInterval = 1000 / targetFps;
        let lastFrame = 0;
        let shouldRender = false;
        let canvasIsVisible = true;
        let resizeTimer;

        tubes.three.onBeforeRender = (...args) => {
          if (document.hidden || !canvasIsVisible) return;

          const now = performance.now();
          if (now - lastFrame < frameInterval) return;
          lastFrame = now;
          shouldRender = true;
          originalBeforeRender(...args);
        };
        tubes.three.render = () => {
          if (!shouldRender) return;
          shouldRender = false;
          originalRender();
        };

        const visibilityObserver = new IntersectionObserver(
          ([entry]) => {
            canvasIsVisible = entry.isIntersecting;
          },
          { threshold: 0.01 }
        );
        visibilityObserver.observe(canvasRef.current);

        const handleResize = () => {
          window.clearTimeout(resizeTimer);
          resizeTimer = window.setTimeout(applyRenderBudget, 120);
        };
        window.addEventListener("resize", handleResize, { passive: true });

        disposePerformanceControls = () => {
          visibilityObserver.disconnect();
          window.removeEventListener("resize", handleResize);
          window.clearTimeout(resizeTimer);
        };

        tubesRef.current = tubes;
      } catch (error) {
        console.error("Failed to load TubesCursor:", error);
      }
    };

    initTubes();

    return () => {
      mounted = false;
      disposePerformanceControls();
      tubesRef.current?.dispose?.();
      tubesRef.current = null;
    };
  }, [tubesRef]);

  return <S.Canvas ref={canvasRef} aria-hidden="true" />;
}

const SectionCover = forwardRef((props, ref) => {
  const tubesRef = useRef(null);

  const randomizeColor = () => {
    if (!tubesRef.current) return;
    tubesRef.current.tubes.setColors(randomColors(3));
    tubesRef.current.tubes.setLightsColors(randomColors(4));
  };

  return (
    <S.SectionCoverWrapper
      ref={ref}
      aria-label="이종찬 게임 UI/UX 디자이너 포트폴리오"
      onClick={randomizeColor}
    >
      <TubesCanvas tubesRef={tubesRef} />
      <S.HeroContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
      >
        <S.Eyebrow>GAME UI · UX DESIGNER</S.Eyebrow>
        <S.Title>
          JC <strong>PORTFOLIO</strong>
        </S.Title>
        <S.Description>
          재밌는 게임을 재밌게 플레이할 수 있게 노력합니다.
        </S.Description>
      </S.HeroContent>
      <S.InteractionHint>MOVE YOUR CURSOR · CLICK TO CHANGE COLOR</S.InteractionHint>
      <S.ArrowWrapper
        as="a"
        href="#profile"
        aria-label="프로필과 경력 보기"
        onClick={(event) => event.stopPropagation()}
        animate={{ y: 10 }}
        transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
      >
        <img src="/images/icon/mouse.svg" alt="" aria-hidden="true" />
      </S.ArrowWrapper>
    </S.SectionCoverWrapper>
  );
});

SectionCover.displayName = "sectionCover";

export default SectionCover;

const S = {
  SectionCoverWrapper: styled(motion.section)`
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 640px;
    overflow: hidden;
    cursor: crosshair;
    color: #fff;
    background: #030305;
    isolation: isolate;
  `,
  Canvas: styled.canvas`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
  `,
  HeroContent: styled(motion.div)`
    position: absolute;
    inset: 0;
    display: flex;
    width: min(1080px, calc(100% - 40px));
    height: 100%;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 7vh;
    text-align: center;
    pointer-events: none;
  `,
  Eyebrow: styled.p`
    margin: 0 0 14px;
    color: rgba(255, 255, 255, 0.62);
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.32em;
  `,
  Title: styled.h1`
    margin: 0;
    font-size: clamp(54px, 8.2vw, 132px);
    font-weight: 700;
    line-height: 0.9;
    letter-spacing: -0.065em;
    text-shadow: 0 0 45px rgba(0, 0, 0, 0.7);

    strong { font-weight: inherit; }

    @media (max-width: 768px) {
      strong { display: block; }
    }
  `,
  Description: styled.p`
    margin: 28px 0 0;
    color: rgba(255, 255, 255, 0.68);
    font-size: clamp(14px, 1.2vw, 18px);
    font-weight: 300;
    letter-spacing: 0.03em;
  `,
  InteractionHint: styled.p`
    position: absolute;
    left: 50%;
    bottom: 118px;
    margin: 0;
    transform: translateX(-50%);
    color: rgba(255, 255, 255, 0.36);
    font-size: 10px;
    letter-spacing: 0.2em;
    white-space: nowrap;
    pointer-events: none;

    @media (max-width: 768px) { display: none; }
  `,
  ArrowWrapper: styled(motion.div)`
    position: absolute;
    left: 50%;
    bottom: 68px;
    z-index: 2;
    width: 40px;
    height: 56px;
    transform: translateX(-50%);
    cursor: pointer;

    img {
      width: 40px;
      height: 56px;
      filter: brightness(0) invert(1);
      opacity: 0.78;
    }

    @media (max-width: 768px) { bottom: 42px; }
  `,
};
