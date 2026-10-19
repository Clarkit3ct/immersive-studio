import type { Metadata } from "next";
import { ShowcasePageSection } from "@/components/sections/showcase-page";

export const metadata: Metadata = {
  alternates: { canonical: "/showcase" },
  title: "Vendor Showcase in Coeur d'Alene",
  description:
    "Materials, fixtures, finishes and lighting on display at Immersive Studio CDA, so design selections can be seen in full-scale context in downtown Coeur d'Alene.",
};

export default function ShowcasePage() {
  return <ShowcasePageSection />;
}
