import type { Metadata } from "next";
import { FreeConsultationPage } from "@/components/sections/free-consultation-page";

export const metadata: Metadata = {
  title: "Free Project Consultation",
  description:
    "Book a free 15-minute call with Immersive Studio CDA: talk through your project and get a recommendation for the right session. No pressure, no obligation.",
  alternates: { canonical: "/free-consultation" },
};

export default function FreeConsultation() {
  return <FreeConsultationPage />;
}
