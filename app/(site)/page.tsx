import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { OurLocation } from "@/components/sections/our-location";
import { PrivateEvents } from "@/components/sections/private-events";
import { FoundingStudioPartners } from "@/components/sections/founding-studio-partners";
import { WhatHappensHere } from "@/components/sections/what-happens-here";
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
      <Hero />
      <WhatHappensHere />
      <HowItWorks />
      <StudioZones />
      <FoundingStudioPartners />
      <OurLocation />
      <PrivateEvents />
    </>
  );
}
