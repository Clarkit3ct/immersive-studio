import Image from "next/image";
import Link from "next/link";

export type LandingContent = {
  eyebrow: string;
  headline: string;
  intro: string;
  image: { src: string; alt: string; credit?: string };
  sections: { title: string; body?: string; bullets?: string[] }[];
  faqs: { q: string; a: string }[];
  cta: { label: string; href: string };
  secondary?: { label: string; href: string };
};

const ctaClass =
  "cta text-label text-onyx/70 transition-colors hover:text-onyx";

export function LandingPage({ content }: { content: LandingContent }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-off-white px-site pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
          <p className="text-label text-dove">{content.eyebrow}</p>
          <h1 className="text-h1 font-secondary text-onyx">{content.headline}</h1>
          <p className="max-w-prose text-body font-primary text-onyx/80">{content.intro}</p>
          <div className="flex flex-wrap items-center gap-8">
            <a
              href={content.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaClass}
            >
              {content.cta.label}
            </a>
            {content.secondary ? (
              <Link href={content.secondary.href} className={ctaClass}>
                {content.secondary.label}
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <section className="bg-off-white px-site pb-16 md:pb-20">
        <div className="relative mx-auto aspect-[4/3] w-full max-w-6xl overflow-hidden bg-onyx/10">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            priority
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="object-cover"
          />
          {content.image.credit ? (
            <span className="absolute bottom-2 right-2 rounded-[2px] bg-[rgba(10,10,10,0.7)] px-2 py-[3px] text-[0.6875rem] text-off-white">
              {content.image.credit}
            </span>
          ) : null}
        </div>
      </section>

      <section className="bg-off-white px-site pb-24 md:pb-32">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
          {content.sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h2 className="text-h2 font-secondary text-onyx">{section.title}</h2>
              {section.body ? (
                <p className="max-w-prose text-body font-primary text-onyx/80">{section.body}</p>
              ) : null}
              {section.bullets ? (
                <ul className="flex max-w-prose flex-col gap-3 text-body font-primary text-onyx/80">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="border-l border-beige pl-4">
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}

          <div className="flex flex-col gap-6">
            <h2 className="text-h2 font-secondary text-onyx">Questions</h2>
            {content.faqs.map((faq) => (
              <div key={faq.q} className="flex flex-col gap-2 border-t border-beige pt-4">
                <h3 className="text-h3 font-primary text-onyx">{faq.q}</h3>
                <p className="max-w-prose text-body font-primary text-onyx/80">{faq.a}</p>
              </div>
            ))}
          </div>

          <div>
            <a
              href={content.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaClass}
            >
              {content.cta.label}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
