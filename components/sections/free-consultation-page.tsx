import Script from "next/script";
import { ScrollToTop } from "@/components/scroll-to-top";
import {
  allSessionsHref,
  consultationEmbed,
  freeConsultation as copy,
} from "@/lib/content/free-consultation";

export function FreeConsultationPage() {
  return (
    <section className="scroll-mt-28 bg-off-white px-site pb-24 pt-52 text-onyx md:pb-32 md:pt-64">
      <ScrollToTop />
      <div className="mx-auto grid w-full max-w-[80rem] gap-16 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col gap-10 lg:col-span-5">
          <div className="flex flex-col gap-6">
            <p className="m-0 text-label text-dove">{copy.eyebrow}</p>
            <h1 className="m-0 text-balance text-[2.75rem] font-light leading-[1.05] tracking-[-0.02em] md:text-[3.5rem]">
              {copy.light} <span className="font-bold">{copy.bold}</span>
            </h1>
            <p className="m-0 max-w-prose text-[1.125rem] leading-[1.6] text-onyx/75">{copy.intro}</p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="m-0 text-[1.25rem] font-medium">{copy.stepsTitle}</h2>
            <ol className="m-0 flex list-none flex-col border-t border-beige p-0">
              {copy.steps.map((step) => (
                <li key={step.number} className="flex gap-5 border-b border-beige py-5">
                  <span className="text-[1.75rem] font-light leading-none text-dove">{step.number}</span>
                  <div className="flex flex-col gap-1">
                    <span className="text-[1.0625rem] font-medium">{step.title}</span>
                    <span className="text-[0.9375rem] leading-[1.55] text-onyx/70">{step.body}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="m-0 text-[1.25rem] font-medium">{copy.readyTitle}</h2>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              {copy.ready.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.9375rem] leading-[1.55] text-onyx/80">
                  <span aria-hidden className="mt-[0.6em] block h-1.5 w-1.5 shrink-0 rounded-full bg-onyx" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="m-0 text-[0.9375rem] text-onyx/70">
            Rather talk now? Call or text Jeremy at{" "}
            <a href={copy.phone.href} className="font-medium text-onyx underline-offset-4 hover:underline">
              {copy.phone.label}
            </a>
            .
          </p>
        </div>

        <div id="book" className="flex scroll-mt-28 flex-col gap-4 lg:col-span-7">
          <h2 className="m-0 text-[1.25rem] font-medium">{copy.bookTitle}</h2>
          <div className="overflow-hidden rounded border border-beige bg-[#0a0a0a]">
            <iframe
              src={consultationEmbed}
              title="Schedule a free project consultation"
              width="100%"
              frameBorder="0"
              allow="payment"
              scrolling="no"
              // Acuity's page is ~2,050 px tall on desktop, ~2,460 px on a phone; show all of it.
              className="block h-[2500px] w-full md:h-[2100px]"
            />
          </div>
          <p className="m-0 text-[0.875rem] text-onyx/60">
            Looking for a studio session or the 3-Session Bundle?{" "}
            <a
              href={allSessionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-onyx underline-offset-4 hover:underline"
            >
              See every session type
            </a>
            .
          </p>
          <Script src="https://embed.acuityscheduling.com/js/embed.js" strategy="lazyOnload" />
        </div>
      </div>
    </section>
  );
}
