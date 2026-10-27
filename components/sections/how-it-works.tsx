import { howItWorks as copy } from "@/lib/content/site";

/*
 * How a Session Works: the five steps, each one's drawing sitting directly above its own words.
 * The drawings are light line-work made for a dark ground, so this band is dark and the drawings
 * have no frame of their own: they belong to the section, not dropped into it.
 * Hover or focus a step: its room grows and brightens, the others step back.
 */
export function HowItWorks() {
  return (
    <>
      <section
        id="how-it-works"
        aria-labelledby="how-it-works-title"
        className="scroll-mt-28 bg-[#0a0a0a] px-site pt-20 pb-16 md:pt-28 md:pb-24"
      >
        <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-12 md:gap-16">
          <h2
            id="how-it-works-title"
            className="mx-auto w-full max-w-6xl text-center text-h2 font-secondary text-off-white lg:px-8"
          >
            {copy.eyebrow}
          </h2>

          <ol className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-5 md:gap-y-0 [&:hover>li]:md:opacity-55 [&:focus-within>li]:md:opacity-55">
            {copy.steps.map((step) => (
              <li
                key={step.number}
                tabIndex={0}
                className="group flex flex-row items-center gap-4 text-left outline-none md:flex-col md:gap-0 md:text-center transition-opacity duration-500 ease-out md:hover:!opacity-100 md:focus:!opacity-100 motion-reduce:transition-none"
              >
                <div className="w-[42%] shrink-0 md:w-full md:max-w-[16rem] origin-bottom transition-[transform,filter] duration-500 ease-out group-hover:scale-[1.12] group-hover:brightness-125 group-focus:scale-[1.12] group-focus:brightness-125 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={step.image}
                    alt={step.alt}
                    width={285}
                    height={252}
                    loading="lazy"
                    className="block h-auto w-full"
                  />
                </div>
                <div className="flex flex-col gap-1.5 md:mt-4 md:max-w-[15rem] md:gap-2 md:px-2">
                  <p className="text-label text-dove">{step.number}</p>
                  <h3 className="text-h3 font-primary text-off-white">{step.title}</h3>
                  <p className="text-body font-primary text-off-white/65">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-off-white px-site pt-14 pb-24 md:pt-16 md:pb-32">
        <div className="mx-auto grid w-full max-w-[110rem] gap-4 md:grid-cols-3 md:gap-6">
          {copy.highlights.map((highlight) => (
            <article
              key={highlight.value}
              className="flex flex-col items-center gap-4 rounded-lg bg-beige/35 px-8 py-10 text-center"
            >
              <p className="text-h2 font-secondary text-onyx">{highlight.value}</p>
              <p className="text-label text-dove">{highlight.label}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
