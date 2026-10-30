// Jeremy's StoryBrand homepage sections (Oct 30, 2026), ported from his preview:
// one dark ground, Hanken Grotesk, headlines light with the last phrase bold,
// hairline rules instead of boxes, the solid button for the main action.
import Image from "next/image";
import Link from "next/link";
import { cta, guide, phone, plan, problem, pros, solution, success } from "@/lib/content/home";

const wrap = "mx-auto w-full max-w-[80rem] px-5 md:px-12";
const solidBtn =
  "inline-block rounded-[2px] bg-off-white px-7 py-4 text-[0.9375rem] font-medium text-[#0a0a0a] no-underline transition-colors hover:bg-white";
const hair = "border-[#262626]";

function Headline({
  light,
  bold,
  as: Tag = "h2",
  className,
}: {
  light: string;
  bold: string;
  as?: "h1" | "h2";
  className: string;
}) {
  return (
    <Tag className={`m-0 font-light text-balance ${className}`}>
      {light} <span className="font-bold">{bold}</span>
    </Tag>
  );
}

// Every consultation button is the solid one: it must always read clearly (Roger 10/30).
function ButtonLink() {
  return (
    <Link href={cta.href} className={solidBtn}>
      {cta.label}
    </Link>
  );
}

export function Problem() {
  return (
    <section className="bg-[#0a0a0a] text-off-white">
      <div className={`${wrap} grid grid-cols-1 gap-8 py-[4.5rem] md:grid-cols-12 md:py-32`}>
        <div className={`border-b ${hair} pb-10 md:col-span-12 md:mb-6 md:pb-14`}>
          <Headline
            light={problem.light}
            bold={problem.bold}
            className="max-w-[1100px] text-[2.125rem] leading-[1.08] tracking-[-0.01em] md:text-[4rem]"
          />
        </div>
        <div className="flex flex-col items-start gap-5 md:col-span-5">
          <h3 className="m-0 text-[1.5rem] font-light leading-[1.15] md:text-[2.25rem]">
            {problem.subheading}
          </h3>
          <div className={`relative mt-3 aspect-[3/2] w-full overflow-hidden rounded border ${hair}`}>
            <Image
              src={problem.image.src}
              alt={problem.image.alt}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 md:col-span-6 md:col-start-7">
          <div className="flex flex-col gap-4">
            <p className="m-0 text-[1.25rem] text-dove">{problem.intro}</p>
            <ul className="m-0 grid list-none grid-cols-1 p-0 sm:grid-cols-2 sm:gap-x-8">
              {problem.points.map((point) => (
                <li key={point} className={`border-t ${hair} py-[1.125rem] text-[1.0625rem] leading-[1.55] last:border-b sm:[&:nth-last-child(2)]:border-b`}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ButtonLink />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Solution() {
  return (
    <section id="the-experience" className={`scroll-mt-28 border-y ${hair} bg-[#141414] text-off-white`}>
      <div className={`${wrap} grid grid-cols-1 items-center gap-10 py-[4.5rem] md:grid-cols-2 md:gap-16 md:py-32`}>
        <div className="flex flex-col items-start gap-6">
          <Headline
            light={solution.light}
            bold={solution.bold}
            className="text-[2.125rem] leading-[1.1] md:text-[3.25rem]"
          />
          <h3 className="m-0 text-[1.5rem] font-normal leading-[1.2] md:text-[1.75rem]">
            {solution.subheading}
          </h3>
          <ul className="m-0 flex w-full list-none flex-col gap-3 p-0">
            {solution.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[1.0625rem] leading-[1.5]">
                <span aria-hidden className="mt-[0.6em] block h-1.5 w-1.5 shrink-0 rounded-full bg-off-white" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <ButtonLink />
        </div>
        <figure className="m-0">
          <video
            src={solution.video.src}
            poster={solution.video.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={solution.video.label}
            className={`block h-[440px] w-full rounded border ${hair} bg-[#0a0a0a] object-cover md:h-[620px] motion-reduce:hidden`}
          />
          <Image
            src={solution.video.poster}
            alt={solution.video.label}
            width={720}
            height={1000}
            className={`hidden h-[440px] w-full rounded border ${hair} object-cover md:h-[620px] motion-reduce:block`}
          />
        </figure>
      </div>
    </section>
  );
}

export function Guide() {
  return (
    <section className="bg-[#0a0a0a] text-off-white">
      <div className={`${wrap} flex flex-col gap-14 py-[4.5rem] md:py-32`}>
        <div className="flex max-w-[760px] flex-col gap-4">
          <Headline light={guide.light} bold={guide.bold} className="text-[2.125rem] leading-[1.1] md:text-[3rem]" />
          <p className="m-0 text-[1.25rem] text-dove">{guide.intro}</p>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-12">
          <div className={`relative h-[320px] overflow-hidden rounded border ${hair} md:col-span-4 md:h-[420px]`}>
            <Image
              src={guide.image.src}
              alt={guide.image.alt}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover object-[center_40%]"
            />
          </div>
          <div className="flex flex-col justify-between gap-8 md:col-span-8">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className={`flex flex-col gap-2.5 rounded border ${hair} bg-[#141414] p-8`}>
                <div className="text-[3.5rem] font-light leading-none">25 yrs</div>
                <h3 className="m-0 text-[1.25rem] font-medium">25 Years in Construction</h3>
                <p className="m-0 text-[0.9375rem] text-dove">
                  Our extensive experience helps you avoid costly pitfalls.
                </p>
              </div>
              <div className={`flex flex-col gap-2.5 rounded border ${hair} bg-[#141414] p-8`}>
                <div className="text-[3.5rem] font-light leading-none">
                  5.0{" "}
                  <span className="text-[1.75rem] tracking-[0.05em]" aria-label="5 out of 5 stars">
                    ★★★★★
                  </span>
                </div>
                <h3 className="m-0 text-[1.25rem] font-medium">Top-Rated on Google</h3>
                <p className="m-0 text-[0.9375rem] text-dove">5.0-star rating on Google.</p>
                <a
                  href={guide.reviewsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.9375rem] font-medium text-off-white no-underline hover:text-white"
                >
                  Read our reviews →
                </a>
              </div>
              <div className={`flex flex-col gap-2.5 rounded border ${hair} bg-[#141414] p-8`}>
                <div className="flex min-h-14 flex-col justify-center leading-[1.1]">
                  <span className="text-[0.8125rem] font-medium uppercase tracking-[0.18em] text-dove">
                    Spokane
                  </span>
                  <span className="text-[1.625rem] font-bold tracking-[-0.01em]">Journal of Business</span>
                </div>
                <h3 className="m-0 text-[1.25rem] font-medium">In the News</h3>
                <p className="m-0 text-[0.9375rem] text-dove">
                  We&apos;ve been featured in the Spokane Journal of Business · October 8, 2026.
                </p>
                <a
                  href={guide.articleHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.9375rem] font-medium text-off-white no-underline hover:text-white"
                >
                  Read the article →
                </a>
              </div>
            </div>
            <figure className={`m-0 flex flex-col gap-3 border-t ${hair} pt-7`}>
              <blockquote className="m-0 text-[1.25rem] font-light leading-[1.45] md:text-[1.375rem]">
                {guide.review}
              </blockquote>
              <figcaption className="text-[0.875rem] text-dove">
                {guide.reviewer} ·{" "}
                <a href={guide.reviewsHref} target="_blank" rel="noopener noreferrer" className="text-dove">
                  Read on Google →
                </a>
              </figcaption>
            </figure>
            <div>
              <ButtonLink />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Plan() {
  return (
    <section className={`border-t ${hair} bg-[#0a0a0a] text-off-white`}>
      <div className={`${wrap} flex flex-col items-start gap-12 py-[4.5rem] md:py-32`}>
        <div className="flex flex-col gap-4">
          <Headline light={plan.light} bold={plan.bold} className="text-[2.125rem] md:text-[3rem]" />
          <p className="m-0 text-[1.25rem] text-dove">{plan.intro}</p>
        </div>
        <ol className="m-0 grid w-full list-none grid-cols-1 gap-4 p-0 md:grid-cols-3">
          {plan.steps.map((step) => (
            <li key={step.number} className={`flex flex-col overflow-hidden rounded border ${hair} bg-[#141414]`}>
              <div className="relative h-[220px]">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: step.position }}
                />
                {step.credit ? (
                  <span className="absolute bottom-2 right-2 rounded-[2px] bg-[rgba(10,10,10,0.7)] px-2 py-[3px] text-[0.6875rem] text-off-white">
                    {step.credit}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-col gap-2.5 p-7">
                <div className="text-[2.75rem] font-light text-dove">{step.number}</div>
                <h3 className="m-0 text-[1.375rem] font-medium">{step.title}</h3>
                <p className="m-0 text-[0.9375rem] text-dove">{step.body}</p>
                {step.number === "01" ? (
                  <div className="mt-3 flex flex-col items-start gap-3">
                    <ButtonLink />
                    <p className="m-0 text-[0.9375rem] text-dove">
                      Or call Jeremy:{" "}
                      <a href={phone.href} className="font-medium text-off-white no-underline hover:text-white">
                        {phone.label}
                      </a>
                    </p>
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
        <ButtonLink />
      </div>
    </section>
  );
}

export function Success() {
  return (
    <section className={`relative overflow-hidden border-t ${hair} bg-[#0a0a0a] text-off-white`}>
      <Image
        src={success.image.src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-[0.22]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/50" />
      <div className={`${wrap} relative grid grid-cols-1 gap-8 py-[4.5rem] md:grid-cols-12 md:py-40`}>
        <div className="flex flex-col gap-4 md:col-span-5">
          <Headline
            light={success.light}
            bold={success.bold}
            className="text-[2.125rem] leading-[1.05] tracking-[-0.01em] md:text-[4rem]"
          />
          <h3 className="m-0 text-[1.5rem] font-normal leading-[1.2] md:text-[1.75rem]">{success.subheading}</h3>
        </div>
        <div className="flex flex-col items-start gap-7 md:col-span-6 md:col-start-7">
          <p className="m-0 text-[1.125rem] leading-[1.65] text-dove">{success.body}</p>
          <ButtonLink />
        </div>
      </div>
    </section>
  );
}

export function ProsBand() {
  return (
    <section className={`border-t ${hair} bg-[#141414] text-off-white`}>
      <div className={`${wrap} grid grid-cols-1 items-center gap-8 py-[4.5rem] md:grid-cols-12`}>
        <div className="flex flex-col gap-3 md:col-span-5">
          <p className="m-0 text-[0.75rem] font-medium uppercase tracking-[0.18em] text-dove">{pros.eyebrow}</p>
          <h2 className="m-0 text-[1.75rem] font-light leading-[1.25]">{pros.headline}</h2>
          <p className="m-0 text-[0.9375rem] text-dove">{pros.body}</p>
        </div>
        <div className="flex flex-col gap-4 md:col-span-6 md:col-start-7">
          <ul className="m-0 grid list-none grid-cols-1 p-0 sm:grid-cols-2 sm:gap-x-6">
            {pros.links.map((link) => (
              <li key={link.href} className={`border-t ${hair}`}>
                <Link href={link.href} className="block py-3.5 text-[1rem] text-off-white no-underline hover:text-white">
                  {link.label} →
                </Link>
              </li>
            ))}
          </ul>
          <Link href={pros.membership.href} className="text-[0.9375rem] font-medium text-dove no-underline hover:text-off-white">
            {pros.membership.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
