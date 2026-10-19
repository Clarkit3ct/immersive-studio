import type { Metadata } from "next";
import { MembershipPageSection } from "@/components/sections/membership-page";

export const metadata: Metadata = {
  alternates: { canonical: "/membership" },
  title: "Studio Membership in Coeur d'Alene",
  description:
    "Recurring studio access for builders, architects, designers and creative firms: sessions each month at Immersive Studio CDA in downtown Coeur d'Alene.",
};

export default function MembershipPage() {
  return <MembershipPageSection />;
}
