import type { Metadata } from "next";
import { FounderIntroduction } from "@/components/sections/founder-introduction";
import { founderSchema } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: "/founder-story" },
  title: "Founder Story: Jeremy Decker",
  description:
    "Jeremy Decker founded Immersive Studio CDA after more than 25 years in construction and design, bringing projects from concept to completion in North Idaho.",
};

export default function FounderStoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
      />
      <FounderIntroduction />
    </>
  );
}
