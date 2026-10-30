// The free consultation page (Roger 10/30): say plainly how it goes, then book it
// right on the page. The appointment line is Jeremy's own Acuity description.
export const consultationEmbed =
  "https://app.acuityscheduling.com/schedule.php?owner=40283262&appointmentType=99617075&ref=embedded_csp";
export const allSessionsHref = "https://immersivestudiocda-book.as.me/";

export const freeConsultation = {
  eyebrow: "Free Project Consultation",
  light: "Start with a",
  bold: "free 15-minute call.",
  intro:
    "A quick call to learn about your project, answer your questions, and recommend the right session for you. No pressure, no obligation.",
  stepsTitle: "How it goes",
  steps: [
    { number: "01", title: "Pick a time below", body: "Choose a 15-minute slot that works for you. Your confirmation comes by email." },
    { number: "02", title: "Talk through your project", body: "What you're building or remodeling, where the design stands, and who's involved." },
    { number: "03", title: "Get a recommendation", body: "Jeremy suggests the session that fits your project. Booking it is up to you." },
  ],
  readyTitle: "Helpful to have in mind",
  ready: [
    "The kind of project: a new home, a remodel, or a commercial or multi-unit build",
    "Where the design stands right now",
    "Who else is involved: your architect, builder or designer",
    "Drawings, if you have them. They aren't needed for the call.",
  ],
  bookTitle: "Pick a time",
  phone: { label: "208-755-2696", href: "tel:+12087552696" },
} as const;
