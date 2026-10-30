import type { Metadata } from "next";
import { ExperiencePage } from "@/components/sections/experience-page";

export const metadata: Metadata = {
  title: "See a Session",
  description:
    "Watch a one-minute film of a session at Immersive Studio CDA: your floor plan at full size in downtown Coeur d'Alene, and every room decided before anything is framed.",
  alternates: { canonical: "/the-experience" },
};

export default function TheExperience() {
  return <ExperiencePage />;
}
