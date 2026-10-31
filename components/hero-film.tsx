"use client";

// The homepage background film. A still frame paints first (it is the page's
// largest image, so it loads with priority); the film only loads after the page
// is up, picks the wide or tall cut for the screen, and fades in once it plays.
// Visitors who ask for less motion keep the still.
import { useEffect, useRef, useState } from "react";
import { getImageProps } from "next/image";
import { heroFilm } from "@/lib/content/site";

export function HeroFilm() {
  const [cut, setCut] = useState<"wide" | "tall" | null>(null);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const wide = window.matchMedia("(min-width: 768px)");
    const pick = () => setCut(wide.matches ? "wide" : "tall");
    pick();
    wide.addEventListener("change", pick);
    return () => wide.removeEventListener("change", pick);
  }, []);

  useEffect(() => {
    setPlaying(false);
    videoRef.current?.load();
  }, [cut]);

  const common = { alt: heroFilm.alt, fill: true, sizes: "100vw" } as const;
  const {
    props: { srcSet: wideSet },
  } = getImageProps({ ...common, src: heroFilm.wide.poster, quality: 75 });
  const {
    props: { srcSet: tallSet, ...rest },
  } = getImageProps({ ...common, src: heroFilm.tall.poster, quality: 75, priority: true });

  const source = cut ? heroFilm[cut] : null;

  return (
    <div className="absolute inset-0">
      <picture>
        <source media="(min-width: 768px)" srcSet={wideSet} />
        <source srcSet={tallSet} />
        <img {...rest} className="h-full w-full object-cover brightness-[0.82] contrast-[1.12]" />
      </picture>

      {source && (
        <video
          ref={videoRef}
          key={cut}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          onPlaying={() => setPlaying(true)}
          className={`absolute inset-0 h-full w-full object-cover brightness-[0.82] contrast-[1.12] transition-opacity duration-1000 ease-out ${
            playing ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={source.webm} type="video/webm" />
          <source src={source.mp4} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
