import type { Metadata } from "next";
import { LandingPage, type LandingContent } from "@/components/sections/landing-page";

export const metadata: Metadata = {
  title: "Plan Projection Studio in Coeur d'Alene",
  description: "Coeur d'Alene's full-scale plan projection studio. Floor plans at 1:1, elevations at full height, private sessions for architects, builders, and homeowners.",
  alternates: { canonical: "/plan-projection-coeur-dalene" },
};

const content: LandingContent = {
  "eyebrow": "Coeur d'Alene",
  "headline": "Coeur d'Alene's full-scale plan projection studio",
  "intro": "Floor plans at 1:1 scale on a 3,500± sq ft projection floor, wall elevations at full height, and private sessions for architects, builders, designers, real estate professionals, and homeowners. Downtown at 216 E Coeur d'Alene Ave.",
  "image": {
    "src": "/assets/real/studio-session-walkthrough.jpg",
    "alt": "A studio session in progress: clients walking a floor plan projected at full scale, with elevations and a rendering on the walls",
    "credit": "Photo credit: Uptic Studios"
  },
  "sections": [
    {
      "title": "The room",
      "body": "An industrial warehouse building in the heart of downtown. The projection floor runs the length of the hall, two 50' × 13' walls carry the elevations, and a decision lounge on two levels holds the conversation after the walk."
    },
    {
      "title": "Sessions",
      "bullets": [
        "Quick Session, 30 minutes, one room or one decision.",
        "Studio Session, 60 minutes, a full plan with your client.",
        "Extended Session, 120 minutes, a complete set walked room by room.",
        "Memberships and a three-session bundle for firms that come often."
      ]
    },
    {
      "title": "Getting here",
      "body": "Steps from Sherman Avenue, four blocks to the lake, 30± minutes from downtown Spokane on I-90."
    }
  ],
  "faqs": [
    {
      "q": "Do I need to be an architect to book?",
      "a": "No. Homeowners book directly. Bring your plans, or ask your designer to send them."
    },
    {
      "q": "Can I bring plans for a property in another state?",
      "a": "Yes. Real estate professionals use the studio to walk listings anywhere at full scale, instead of putting a client on a plane."
    },
    {
      "q": "How do I get my plans to you?",
      "a": "After booking you receive a private folder link by email. Drop in PDF plans, renderings, or anything else you want ready, at least 48 hours ahead."
    },
    {
      "q": "Is the studio available for events?",
      "a": "Yes, for private presentations, launches, and gatherings. Those are arranged through the contact page rather than the booking calendar."
    }
  ],
  "cta": {
    "label": "Book a Session",
    "href": "https://immersivestudiocda-book.as.me/"
  },
  "secondary": {
    "label": "Private events",
    "href": "https://events.immersivestudiocda.com"
  }
};

export default function Page() {
  return <LandingPage content={content} />;
}
