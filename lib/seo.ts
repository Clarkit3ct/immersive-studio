// One place for the site-wide search facts: the address, the description Google
// and AI tools read, the share image, and the structured-data blocks. Pages
// import from here so the name, address and phone never drift between the
// footer, the schema and the share cards.
import { founder } from "@/lib/content/site";

export const SITE_URL = "https://www.immersivestudiocda.com";
export const SITE_NAME = "Immersive Studio CDA";

export const HOME_TITLE = "Floor Plan Projection in Coeur d'Alene | Immersive Studio CDA";

export const SITE_DESCRIPTION =
  "Stand inside your home before it's built: your floor plan at full size, in downtown Coeur d'Alene. Decide every room before anything is framed.";

/** A real session in the room, 1200 × 630, the size every share card expects. */
export const OG_IMAGE = {
  url: "/assets/real/og-studio-session.jpg",
  width: 1200,
  height: 630,
  alt: "A studio session at Immersive Studio CDA: a floor plan projected at full scale with people standing in the rooms",
};

const STUDIO_ID = `${SITE_URL}/#studio`;
const FOUNDER_ID = `${SITE_URL}/founder-story#jeremy-decker`;

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": STUDIO_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  telephone: "+1-208-755-2696",
  email: "contact@immersivestudiocda.com",
  image: `${SITE_URL}${OG_IMAGE.url}`,
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    streetAddress: "216 E Coeur d'Alene Ave",
    addressLocality: "Coeur d'Alene",
    addressRegion: "ID",
    postalCode: "83814",
    addressCountry: "US",
  },
  hasMap:
    "https://www.google.com/maps/search/?api=1&query=216+E+Coeur+d'Alene+Ave,+Coeur+d'Alene,+ID+83814",
  areaServed: ["Coeur d'Alene", "Spokane", "North Idaho", "Eastern Washington"],
  sameAs: ["https://www.instagram.com/immersivestudiocda/"],
  founder: { "@type": "Person", "@id": FOUNDER_ID, name: founder.name, jobTitle: founder.title },
  potentialAction: {
    "@type": "ReserveAction",
    target: "https://immersivestudiocda-book.as.me/",
    name: "Book a Session",
  },
};

export const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": FOUNDER_ID,
  name: founder.name,
  jobTitle: founder.title,
  description: founder.paragraphs[0],
  image: `${SITE_URL}${founder.media.src}`,
  url: `${SITE_URL}/founder-story`,
  worksFor: { "@type": "LocalBusiness", "@id": STUDIO_ID, name: SITE_NAME },
};

/** FAQPage markup built from the same questions a page shows, so the two never disagree. */
export function faqSchema(items: ReadonlyArray<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
