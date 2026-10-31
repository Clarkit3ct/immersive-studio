import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WhoItsForCategory } from "@/components/sections/who-its-for-category";
import { audiences, getAudience, whoItsForPage } from "@/lib/content/site";

type AudiencePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return audiences.map((audience) => ({ slug: audience.slug }));
}

// Browser-tab and search-result titles: the service first, then who it serves.
// The page headings themselves are unchanged.
const searchTitles: Record<string, string> = {
  builders: "Floor Plan Projection for Builders",
  architects: "Floor Plan Projection for Architects",
  "real-estate-professionals": "Floor Plan Projection for Real Estate Professionals",
  "experience-creators": "Projection Studio for Experience Creators",
  homeowners: "Floor Plan Projection for Homeowners",
};

export async function generateMetadata({
  params,
}: AudiencePageProps): Promise<Metadata> {
  const { slug } = await params;
  const audience = getAudience(slug);

  if (!audience) {
    return { title: whoItsForPage.eyebrow };
  }

  return {
    title: searchTitles[slug] ?? audience.label,
    description: audience.subheading ?? audience.body,
    alternates: { canonical: `/who-its-for/${slug}` },
  };
}

export default async function AudiencePage({ params }: AudiencePageProps) {
  const { slug } = await params;
  const audience = getAudience(slug);

  if (!audience) {
    notFound();
  }

  return <WhoItsForCategory audience={audience} />;
}
