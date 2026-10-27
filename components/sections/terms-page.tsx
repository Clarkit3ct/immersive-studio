import { ScrollToTop } from "@/components/scroll-to-top";
import { termsPage as copy } from "@/lib/content/terms";

export function TermsPageSection() {
  return (
    <section className="scroll-mt-28 bg-off-white px-site pb-24 pt-52 md:pb-32 md:pt-64">
      <ScrollToTop />
      <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-16 lg:gap-24">
        <div className="flex max-w-4xl flex-col gap-8">
          <p className="text-label text-dove">{copy.eyebrow}</p>
          <h1 className="text-display font-secondary text-onyx">{copy.headline}</h1>
          <p className="text-body font-primary text-onyx/60">{copy.updated}</p>
        </div>

        <div className="flex max-w-4xl flex-col divide-y divide-beige border-t border-beige">
          {copy.sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-3 py-8">
              <h2 className="text-h3 font-primary text-onyx">{section.title}</h2>
              <p className="max-w-prose text-body font-primary text-onyx/80">{section.body}</p>
            </div>
          ))}
        </div>

        <address className="flex max-w-4xl flex-col gap-1 border-t border-beige pt-12 not-italic text-body font-primary text-onyx/60">
          {copy.contact.map((line) =>
            line.includes("@") ? (
              <a key={line} href={`mailto:${line}`} className="w-fit transition-colors hover:text-onyx">
                {line}
              </a>
            ) : (
              <span key={line}>{line}</span>
            ),
          )}
        </address>
      </div>
    </section>
  );
}
