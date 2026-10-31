import type { Metadata } from "next";
import { PrivateEventsPageSection } from "@/components/sections/private-events-page";

export const metadata: Metadata = {
  alternates: { canonical: "/private-events" },
  title: "Private Event Venue in Coeur d'Alene",
  description:
    "A private setting in downtown Coeur d'Alene for presentations, launches, dinners, team gatherings and celebrations, with projected light on the walls and the floor.",
};

export default function PrivateEventsPage() {
  return <PrivateEventsPageSection />;
}
