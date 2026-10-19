import type { Metadata } from "next";
import { WhoItsFor } from "@/components/sections/who-its-for";
import { whoItsForPage } from "@/lib/content/site";

export const metadata: Metadata = {
  alternates: { canonical: "/who-its-for" },
  title: "Who Uses Full-Scale Floor Plan Projection",
  description: whoItsForPage.body,
};

export default function WhoItsForPage() {
  return <WhoItsFor />;
}
