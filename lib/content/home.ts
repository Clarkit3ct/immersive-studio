// The homepage in StoryBrand order: Jeremy's copy (Oct 30, 2026), word for word,
// with his bold phrases kept as `bold`. Our own sections (the session diagram, the
// studio, the location) keep their copy in site.ts.
import { consultationHref, audiences, audiencePath } from "@/lib/content/site";

export const cta = { label: "Schedule free consultation →", href: consultationHref };

export const problem = {
  light: "You shouldn't have to build your home",
  bold: "to find out if you like it!",
  subheading: "Don't Let Misunderstandings Drain Your Budget",
  image: {
    src: "/assets/home/floor-plan-markup-change-orders.webp",
    alt: "A project team marking up a floor plan with red pen changes",
  },
  intro: "What happens if you skip the walkthrough?",
  points: [
    "Unexpected construction costs can derail your plans.",
    "You might settle for less than your dream home.",
    "Design miscommunications lead to costly change orders.",
    "Last-minute changes can disrupt timelines.",
    "Stress and anxiety overshadow the joy of building.",
    "Risk losing money on unaligned expectations.",
  ],
};

export const solution = {
  light: "Why imagine what you’re building",
  bold: "when you can walk through it?",
  subheading: "Build Your Dream Home, Stress-Free",
  body: "Visualize your dream project without stress or unexpected costs, ensuring clarity and confidence before the first brick is laid.",
  points: [
    "Save money by visualizing before building",
    "Avoid costly change orders with clear plans",
    "Feel confident and excited about construction",
    "Experience stress-free decision-making with design walkthroughs",
  ],
  video: {
    src: "/assets/home/walking-full-scale-floor-plan-coeur-dalene.mp4",
    poster: "/assets/home/walking-full-scale-floor-plan-coeur-dalene-still.jpg",
    label: "Walking across a floor plan projected at full scale toward the home elevation on the wall",
  },
};

export const guide = {
  light: "We're Here to Help You",
  bold: "Build Confidently",
  intro: "With our immersive walkthroughs, you'll understand exactly what you are building.",
  image: {
    src: "/assets/home/clients-great-room-full-scale-projection.jpg",
    alt: "Clients standing on a projected floor plan's great room, facing the full-height interior rendering on the studio wall",
  },
  reviewsHref: "https://maps.app.goo.gl/Su5pVParq2Vb4e5QA",
  articleHref:
    "https://www.spokanejournal.com/articles/18758-studio-brings-immersive-projections-to-cda",
  review:
    "“It was invaluable to see our house design in real size. We were able to make changes that would have been very costly change orders during construction. It was so cool to see the design in real life. I can't recommend this enough; it will save time and money later. Jeremy was great at adding things like a couch or wall so we could get a real-life look at the design.”",
  reviewer: "T. S. · Google review",
};

export const plan = {
  light: "3 Simple Steps",
  bold: "to Clarity",
  intro: "Experience how easy planning your build can be.",
  steps: [
    {
      number: "01",
      title: "Schedule Your Free Consultation",
      body: "Reserve a time to discuss your project.",
      image: "/assets/home/step-1-book-free-consultation.jpg",
      alt: "Booking a free consultation with Immersive Studio CDA online",
      position: "50% 50%",
    },
    {
      number: "02",
      title: "Review Your Plans Together",
      body: "Walk through your design with our expert guide.",
      image: "/assets/home/step-2-review-plans-together-uptic-studios.jpg",
      alt: "A small group reviewing a full-scale floor plan projected across the studio floor, with the home's exterior on the wall",
      position: "60% 45%",
      credit: "Photo credit: Uptic Studios",
    },
    {
      number: "03",
      title: "Visualize Your Dream Project",
      body: "Ensure clarity and save money before you build.",
      image: "/assets/home/step-3-home-elevation-projected-full-height.jpg",
      alt: "A home's front elevation projected full height on the studio wall above its floor plan",
      position: "50% 44%",
    },
  ],
};

export const success = {
  light: "Save Money,",
  bold: "Build Better!",
  subheading: "Your Construction Journey Shouldn't Be Stressful",
  body: "Building your dream space is meant to be an exciting journey. Unfortunately, many people face hidden costs and misunderstandings that transform that joy into frustration. At Immersive Studio CDA, we provide immersive walkthroughs that give you the clarity you need to visualize your project accurately. Our goal is to eliminate uncertainties, letting you experience the thrill of creating your dream construction without the stress of unforeseen headaches. With us, you're investing in a successful and confident building journey.",
  image: {
    src: "/assets/hero/hero-image2.jpeg",
    alt: "A session in the studio: a floor plan projected at full scale with the home on the walls",
  },
};

export const pros = {
  eyebrow: "For Industry Professionals",
  headline: "Builders, architects, and real estate pros use the studio too.",
  body: "Bring your clients inside the plan before it's framed, while changes are still inexpensive.",
  links: audiences
    .filter((audience) => audience.slug !== "homeowners")
    .map((audience) => ({ label: audience.label, href: audiencePath(audience.slug) })),
  membership: { label: "Founding Studio Partners membership →", href: "/membership" },
};
