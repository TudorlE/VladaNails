import type { PricingGroup } from "./types";

/**
 * Full price list grouped by category. All prices in RON (lei).
 * Edit freely — the pricing table renders directly from this file.
 */
export const pricing: PricingGroup[] = [
  {
    id: "manicure",
    title: "Manicure",
    description: "Precision shaping, cuticle care, and a flawless finish.",
    items: [
      { name: "Classic Manicure", price: 120, duration: "45 min" },
      { name: "Russian Manicure", price: 160, duration: "60 min" },
      { name: "Gel Polish", price: 140, duration: "50 min" },
      { name: "Luxury Spa Manicure", price: 240, duration: "80 min" },
      { name: "Polish Change", price: 60, duration: "20 min" },
    ],
  },
  {
    id: "pedicure",
    title: "Pedicure",
    description: "Restorative care and a lasting, elegant finish.",
    items: [
      { name: "Classic Pedicure", price: 150, duration: "50 min" },
      { name: "Gel Pedicure", price: 190, duration: "60 min" },
      { name: "Spa Pedicure", price: 240, duration: "75 min" },
      { name: "Luxury Pedicure", price: 280, duration: "90 min" },
    ],
  },
  {
    id: "extensions",
    title: "Nail Extensions",
    description: "Sculpted length and structure, built to last.",
    items: [
      { name: "BIAB Nails", price: 220, duration: "75 min" },
      { name: "Gel Extensions", price: 260, duration: "90 min" },
      { name: "Extension Refill", price: 190, duration: "60 min" },
      { name: "Full Set Removal", price: 50, duration: "30 min" },
    ],
  },
  {
    id: "design",
    title: "Design",
    description: "Bespoke detail, from subtle to statement.",
    items: [
      { name: "French Design", price: 40, priceLabel: "from", duration: "+20 min" },
      { name: "Nail Art (per nail)", price: 15, priceLabel: "from", duration: "+5 min" },
      { name: "Chrome / Cat Eye", price: 50, priceLabel: "from", duration: "+20 min" },
      { name: "Statement Set", price: 90, priceLabel: "from", duration: "+40 min" },
    ],
  },
  {
    id: "spa",
    title: "Spa Rituals",
    description: "Indulgent add-ons for the ultimate pampering.",
    items: [
      { name: "Paraffin Hand Treatment", price: 70, duration: "20 min" },
      { name: "Hand & Arm Massage", price: 80, duration: "25 min" },
      { name: "Hydrating Foot Mask", price: 60, duration: "20 min" },
      { name: "Express Refresh", price: 100, duration: "30 min" },
    ],
  },
];
