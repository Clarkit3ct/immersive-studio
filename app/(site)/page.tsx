import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { OurLocation } from "@/components/sections/our-location";
import { Guide, Plan, Problem, ProsBand, Solution, Success } from "@/components/sections/storybrand-home";
import { Preloader } from "@/components/ui/preloader";
import { StudioZones } from "@/components/sections/studio-zones";
import { HOME_TITLE, SITE_DESCRIPTION, localBusinessSchema } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: HOME_TITLE },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Preloader />
      {/* Jeremy's StoryBrand order down to the plan; our diagram after his solution;
          from his closing line down, our sections and imagery (Roger 10/30). */}
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks filmLink />
      <Guide />
      <Plan />
      <Success />
      <StudioZones />
      <OurLocation />
      <ProsBand />
    </>
  );
}
