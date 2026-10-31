import type { Metadata } from "next";
import { TermsPageSection } from "@/components/sections/terms-page";

export const metadata: Metadata = {
  title: "Terms",
  description: "Session terms for Immersive Studio CDA: booking, rescheduling, your files, memberships, and session bundles.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <TermsPageSection />;
}
