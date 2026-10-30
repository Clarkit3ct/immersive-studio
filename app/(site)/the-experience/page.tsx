import type { Metadata } from "next";
import { ExperiencePage } from "@/components/sections/experience-page";

export const metadata: Metadata = {
  title: "The Experience",
  description:
    "Come experience Immersive Studio CDA in downtown Coeur d'Alene, where your floor plan is projected at full size.",
  alternates: { canonical: "/the-experience" },
};

export default function TheExperience() {
  return <ExperiencePage />;
}
