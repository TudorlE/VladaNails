import type { Certification } from "./types";

/**
 * Content for the "Meet Vlada" section. Edit freely — plain text/strings only.
 */
export const vladaProfile = {
  name: "Vlada",
  role: "Founder & Lead Nail Artist",
  portraitSrc: undefined as string | undefined, // e.g. "/vlada/portrait.jpg"
  intro:
    "A meticulous eye, a steady hand, and a decade-long devotion to the craft of beautiful nails.",
  paragraphs: [
    "Vlada founded this studio on a simple belief: nail care should feel like a luxury ritual, not a rushed errand. What began as a small home studio has grown into a destination for women who refuse to compromise on quality.",
    "Her journey started over eight years ago, training under master technicians across Europe before specializing in Russian manicure and long-lasting extension systems. Every technique in the studio has been refined through thousands of hours of hands-on practice.",
    "Vlada's mission is simple — healthy natural nails, impeccable finish, and an experience that leaves every client feeling cared for. Her vision is to set a new standard for what a nail studio can be: elegant, precise, and deeply personal.",
  ],
  philosophy:
    "\"Every set of hands tells a story. My job is to make sure yours tells it beautifully.\"",
};

export const certifications: Certification[] = [
  { id: "c1", title: "Certified Russian Manicure Specialist", year: "2019" },
  { id: "c2", title: "Advanced BIAB & Gel Extension Systems", year: "2021" },
  { id: "c3", title: "Sanitation & Sterilization Standards", year: "2022" },
  { id: "c4", title: "Nail Art & Design Masterclass", year: "2023" },
];

export const stats = [
  { id: "s1", value: "8+", label: "Years of Experience" },
  { id: "s2", value: "3,000+", label: "Happy Clients" },
  { id: "s3", value: "12", label: "Signature Services" },
  { id: "s4", value: "5.0", label: "Average Rating" },
];
