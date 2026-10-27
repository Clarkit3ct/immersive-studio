import { HeroFilm } from "@/components/hero-film";
import { hero } from "@/lib/content/site";

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-end overflow-hidden bg-onyx">
      <HeroFilm />

      <div className="pointer-events-none absolute inset-0 bg-onyx/30 md:bg-onyx/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-onyx/90 from-[5%] via-onyx/60 via-55% to-transparent md:via-onyx/40 md:via-45%" />

      <div className="relative mx-auto flex w-full max-w-[110rem] flex-col gap-6 px-site pb-16 pt-40 animate-hero-copy motion-reduce:animate-none md:pb-24">
        <p className="text-label text-off-white/60">{hero.eyebrow}</p>
        <h1 className="text-display font-secondary text-off-white">
          {hero.headline}
        </h1>
        <p className="max-w-xl text-body font-primary text-off-white/75">
          {hero.subhead}
        </p>

        <a
          href="https://immersivestudiocda-book.as.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="cta mt-8 text-label text-off-white transition-colors hover:bg-off-white hover:text-onyx"
        >
          Book a Session
        </a>
      </div>
    </section>
  );
}
