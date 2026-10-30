import Link from "next/link";
import { HeroFilm } from "@/components/hero-film";
import { hero, primaryAction } from "@/lib/content/site";

// Jeremy's hero (Oct 30): his words and layout, over our background film
// (the wide Uptic cut on computers, the tall cut on phones).
export function Hero() {
  return (
    <section className="relative flex min-h-[620px] items-end overflow-hidden bg-[#0a0a0a] md:min-h-[820px]">
      <HeroFilm />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(10,10,10,0.6)_0%,rgba(10,10,10,0.25)_50%,rgba(10,10,10,0)_75%),linear-gradient(to_top,rgba(10,10,10,0.75)_0%,rgba(10,10,10,0.3)_40%,rgba(10,10,10,0)_70%,rgba(10,10,10,0.3)_100%)]"
      />
      <p className="absolute bottom-5 right-8 m-0 hidden text-[0.75rem] text-dove md:block">
        Video credit: Uptic Studios
      </p>

      <div className="relative mx-auto flex w-full max-w-[80rem] flex-col items-start gap-6 px-5 pb-[4.5rem] pt-40 [text-shadow:0_1px_16px_rgba(10,10,10,0.55)] animate-hero-copy motion-reduce:animate-none md:px-12 md:pb-32">
        <p className="m-0 text-[0.9375rem] font-medium uppercase tracking-[0.16em] text-off-white md:text-[1.125rem]">
          {hero.eyebrow}
        </p>
        <h1 className="m-0 max-w-[1000px] text-balance text-[3rem] font-light leading-[1.02] tracking-[-0.02em] text-off-white md:text-[5.5rem]">
          {hero.headlineLight} <span className="font-bold">{hero.headlineBold}</span>
        </h1>
        <p className="m-0 max-w-[900px] text-balance text-[1.125rem] leading-[1.55] text-off-white md:text-[1.375rem]">
          {hero.subhead}
        </p>
        <Link
          href={primaryAction.href}
          className="rounded-[2px] bg-off-white px-7 py-4 text-[0.9375rem] font-medium text-[#0a0a0a] [text-shadow:none] transition-colors hover:bg-white"
        >
          {primaryAction.label} →
        </Link>
      </div>
    </section>
  );
}
