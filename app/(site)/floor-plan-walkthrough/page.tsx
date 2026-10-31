import type { Metadata } from "next";
import { LandingPage, type LandingContent } from "@/components/sections/landing-page";

export const metadata: Metadata = {
  title: "Walk Through Your Floor Plans at Full Scale",
  description: "Immersive Studio CDA projects floor plans at true 1:1 scale on a 3,500 sq ft floor in downtown Coeur d'Alene. Walk the rooms before construction begins.",
  alternates: { canonical: "/floor-plan-walkthrough" },
};

const content: LandingContent = {
  "eyebrow": "The Experience",
  "headline": "Walk through your floor plans at full scale",
  "intro": "Immersive Studio CDA projects architectural floor plans at true 1:1 scale on a 3,500± sq ft floor, with elevations on the walls at full height. Walk the rooms before construction begins, with the people who have to live with the decisions.",
  "image": {
    "src": "/assets/real/studio-session-walkthrough.jpg",
    "alt": "A studio session in progress: clients walking a floor plan projected at full scale, with elevations and a rendering on the walls",
    "credit": "Photo credit: Uptic Studios"
  },
  "sections": [
    {
      "title": "What you see at real size",
      "bullets": [
        "Room sizes and clearances, walked rather than measured.",
        "Sight lines and circulation from one room to the next.",
        "Ceiling heights and elevations, lit on the wall at full height.",
        "Furniture, appliances, and fixtures at true scale, so the island that looked fine on paper gets moved before it is built."
      ]
    },
    {
      "title": "How a session works",
      "body": "Upload your drawings. We prepare them for projection. The plan goes on the floor and the elevations take the wall. You walk it, mark changes while they are still inexpensive, and leave with decisions made."
    },
    {
      "title": "Who books a walkthrough",
      "body": "Architects and designers reviewing with clients. Builders locking decisions before framing. Real estate professionals showing pre-construction listings. Homeowners who want to stand in their kitchen before it exists."
    }
  ],
  "faqs": [
    {
      "q": "What file format do you need?",
      "a": "PDF plans at any drawing scale. Send them at least 48 hours ahead through the private folder link in your confirmation email and the floor is ready when you walk in."
    },
    {
      "q": "How long is a session?",
      "a": "Quick sessions run 30 minutes for one room or one decision. Studio sessions run 60 minutes. Extended sessions run two hours for a full set."
    },
    {
      "q": "Can I bring my client?",
      "a": "That is the point. Bring the whole decision-making group. The studio has a lounge for the conversation afterward."
    },
    {
      "q": "Where is the studio?",
      "a": "216 E Coeur d'Alene Ave in downtown Coeur d'Alene, Idaho, steps from Sherman Avenue and about 30 minutes from Spokane."
    }
  ],
  "cta": {
    "label": "Book a Session",
    "href": "https://immersivestudiocda-book.as.me/"
  },
  "secondary": {
    "label": "Who it's for",
    "href": "/who-its-for"
  }
};

export default function Page() {
  return <LandingPage content={content} />;
}
