import type { Service } from "./types";

/**
 * Signature services shown as cards on the homepage.
 * For the full price breakdown, edit pricing.ts instead.
 */
export const services: Service[] = [
  {
    id: "classic-manicure",
    category: "manicure",
    title: "Classic Manicure",
    description:
      "A refined essential — cuticle care, shaping, and a flawless polish finish for effortlessly polished hands.",
    duration: "45 min",
    price: 120,
    icon: "Sparkles",
  },
  {
    id: "russian-manicure",
    category: "manicure",
    title: "Russian Manicure",
    description:
      "Precision dry technique for an impeccably clean, long-lasting result loved by nail connoisseurs.",
    duration: "60 min",
    price: 160,
    icon: "Gem",
    featured: true,
  },
  {
    id: "biab-nails",
    category: "extensions",
    title: "BIAB Nails",
    description:
      "Builder-in-a-bottle strengthening for natural nails — subtle, durable, and beautifully glossy.",
    duration: "75 min",
    price: 220,
    icon: "ShieldCheck",
  },
  {
    id: "gel-extensions",
    category: "extensions",
    title: "Gel Extensions",
    description:
      "Sculpted length and shape tailored to your hand, finished with a mirror-smooth gel overlay.",
    duration: "90 min",
    price: 260,
    icon: "Wand2",
    featured: true,
  },
  {
    id: "nail-art",
    category: "design",
    title: "Nail Art",
    description:
      "Bespoke hand-painted detail and fine art — from minimalist lines to intricate statement designs.",
    duration: "+30 min",
    price: 60,
    priceLabel: "from",
    icon: "Palette",
  },
  {
    id: "french-design",
    category: "design",
    title: "French Design",
    description:
      "The timeless silhouette, reimagined — crisp, soft, or colored tips for a modern take on a classic.",
    duration: "+20 min",
    price: 40,
    priceLabel: "from",
    icon: "Brush",
  },
  {
    id: "luxury-spa-manicure",
    category: "spa",
    title: "Luxury Spa Manicure",
    description:
      "An indulgent ritual of warm exfoliation, hydrating mask, and hand massage before your finish of choice.",
    duration: "80 min",
    price: 240,
    icon: "Flower2",
    featured: true,
  },
  {
    id: "luxury-pedicure",
    category: "pedicure",
    title: "Luxury Pedicure",
    description:
      "A restorative spa pedicure with warm soak, callus care, hydration ritual, and a flawless polish finish.",
    duration: "90 min",
    price: 280,
    icon: "Flower2",
  },
];
