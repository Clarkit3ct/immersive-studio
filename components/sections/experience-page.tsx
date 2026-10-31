import Image from "next/image";
import Link from "next/link";
import { ScrollToTop } from "@/components/scroll-to-top";
import { HowItWorks } from "@/components/sections/how-it-works";
import { StudioZones } from "@/components/sections/studio-zones";
import { primaryAction } from "@/lib/content/site";

// The Experience: Roger's overview film of the studio, then the session diagram
// and the studio drawing. Roger 10/30.
export const experienceFilm = {
  src: "/assets/experience/the-experience-film.mp4",
  poster: "/assets/experience/the-experience-film-poster.webp",
  label: "A film of Immersive Studio CDA",
};

// AR rendering: Jeremy's clips from 10/29 (a tablet held up to the projected
// kitchen plan, the rendered kitchen on its screen). Stand-in until his AR
// walkthrough video lands. Headline is Roger's line to Jeremy, 10/30.
export const arFeature = {
  eyebrow: "New in the studio",
  light: "AR rendering,",
  bold: "now available.",
  body: "Walk the projected plan with a tablet in hand and see the rendered rooms on screen as you go.",
  ask: "Ask about AR rendering when you book.",
  video: {
    src: "/assets/experience/ar-rendering-walkthrough.mp4",
    poster: "/assets/experience/ar-rendering-walkthrough-poster.webp",
    label: "A tablet held up to the projected kitchen plan, showing the rendered kitchen on its screen",
  },
};

export function ExperiencePage() {
  return (
    <>
      <section className="scroll-mt-28 bg-off-white px-site pb-20 pt-52 text-onyx md:pb-28 md:pt-64">
        <ScrollToTop />
        <div className="mx-auto flex w-full max-w-[80rem] flex-col gap-10">
          <div className="flex max-w-3xl flex-col gap-5">
            <p className="m-0 text-label text-dove">The Experience</p>
            <h1 className="m-0 text-balance text-[2.75rem] font-light leading-[1.05] tracking-[-0.02em] md:text-[4rem]">
              Come experience <span className="font-bold">the Immersive Studio.</span>
            </h1>
          </div>
          <figure className="m-0 overflow-hidden rounded border border-beige bg-[#0a0a0a]">
            <video
              src={experienceFilm.src}
              poster={experienceFilm.poster}
              controls
              playsInline
              preload="none"
              aria-label={experienceFilm.label}
              className="block aspect-video w-full"
            />
          </figure>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href={primaryAction.href}
              className="inline-block rounded-[2px] bg-onyx px-7 py-4 text-[0.9375rem] font-medium text-off-white no-underline transition-colors hover:bg-black"
            >
              {primaryAction.label} →
            </Link>
          </div>
        </div>
      </section>
      <section id="ar-rendering" className="scroll-mt-28 bg-onyx px-site py-20 text-off-white md:py-28">
        <div className="mx-auto grid w-full max-w-[80rem] items-center gap-12 md:grid-cols-12 md:gap-8">
          <div className="flex flex-col gap-5 md:col-span-6">
            <p className="m-0 text-label text-dove">{arFeature.eyebrow}</p>
            <h2 className="m-0 text-balance text-[2.25rem] font-light leading-[1.08] md:text-[3.25rem]">
              {arFeature.light} <span className="font-bold">{arFeature.bold}</span>
            </h2>
            <p className="m-0 max-w-xl text-[1.0625rem] leading-[1.55] text-off-white/85">{arFeature.body}</p>
            <p className="m-0 max-w-xl text-[1.0625rem] leading-[1.55] text-dove">{arFeature.ask}</p>
            <div className="pt-3">
              <Link
                href={primaryAction.href}
                className="inline-block rounded-[2px] bg-off-white px-7 py-4 text-[0.9375rem] font-medium text-onyx no-underline transition-colors hover:bg-white"
              >
                {primaryAction.label} →
              </Link>
            </div>
          </div>
          <figure className="relative m-0 mx-auto w-full max-w-[22rem] md:col-span-5 md:col-start-8">
            <video
              src={arFeature.video.src}
              poster={arFeature.video.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={arFeature.video.label}
              className="block aspect-[9/16] w-full rounded border border-[#262626] bg-[#0a0a0a] object-cover motion-reduce:hidden"
            />
            <Image
              src={arFeature.video.poster}
              alt={arFeature.video.label}
              width={720}
              height={1280}
              className="hidden aspect-[9/16] w-full rounded border border-[#262626] object-cover motion-reduce:block"
            />
          </figure>
        </div>
      </section>
      <HowItWorks />
      <StudioZones />
    </>
  );
}
