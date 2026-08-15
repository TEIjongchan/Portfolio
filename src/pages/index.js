import { useEffect, useRef } from "react";
import SectionBio from "../feature/home/SectionBio";
import History from "../feature/home/SectionBio/History";
import SectionCover from "../feature/home/SectionCover";

export default function Home() {
  const isScrolling = useRef(false);

  useEffect(() => {
    let resetTimer;

    const handleWheel = (event) => {
      if (
        window.innerWidth <= 768 ||
        event.deltaY <= 0 ||
        window.scrollY > 4 ||
        isScrolling.current
      ) {
        return;
      }

      const profile = document.getElementById("profile");
      if (!profile) return;

      event.preventDefault();
      isScrolling.current = true;
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      profile.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      resetTimer = window.setTimeout(() => {
        isScrolling.current = false;
      }, reduceMotion ? 0 : 900);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.clearTimeout(resetTimer);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <SectionCover />
      <SectionBio />
      <History />
    </>
  );
}
