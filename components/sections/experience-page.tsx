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
      <HowItWorks />
      <StudioZones />
    </>
  );
}
