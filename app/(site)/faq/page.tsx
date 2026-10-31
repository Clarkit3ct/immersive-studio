import type { Metadata } from "next";
import { FaqPageSection } from "@/components/sections/faq-page";
import { faqPage, type FaqItem } from "@/lib/content/site";
import { faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: "/faq" },
  title: "FAQ: Sessions, Memberships and Events",
  description:
    "Common questions about Immersive Studio CDA: what the studio can show, how to plan a session, which files to send, who should attend, memberships and private events.",
};

// The markup is built from the same list the page renders, so the two never disagree.
const schema = faqSchema(
  faqPage.categories.flatMap((category): FaqItem[] => [...category.items]),
);

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <FaqPageSection />
    </>
  );
}
