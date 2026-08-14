import type { Service } from "./types";

/**
 * Serviciile semnătură afișate ca și carduri pe homepage — reflectă exact
 * meniul real al studioului. Pentru lista completă de prețuri, editează
 * pricing.ts.
 */
export const services: Service[] = [
  {
    id: "alungire-gel",
    category: "alungire",
    title: "Alungire Gel",
    description:
      "Extensie sculptată pe cartelă, adaptată formei mâinii tale — de la unghii scurte la seturi statement.",
    duration: "~2 ore",
    price: 350,
    priceLabel: "de la",
    icon: "Wand2",
    featured: true,
  },
  {
    id: "corectie",
    category: "corectie",
    title: "Corecție / Umplere",
    description:
      "Menține-ți setul impecabil — corecție și umplere pentru unghiile deja extinse, pe orice mărime.",
    duration: "~2 ore",
    price: 300,
    priceLabel: "de la",
    icon: "ShieldCheck",
  },
  {
    id: "gel-lac",
    category: "finisaje",
    title: "Acoperire cu Gel Lac",
    description: "Finisaj lucios, rezistent, într-o gamă largă de nuanțe — pentru unghia naturală.",
    duration: "~1.5 ore",
    price: 300,
    icon: "Sparkles",
  },
  {
    id: "french",
    category: "french",
    title: "French",
    description: "Silueta clasică, mereu la modă — inclusă gratuit la orice set de extensie.",
    duration: "inclus",
    price: 0,
    displayPrice: "Gratis",
    icon: "Brush",
  },
  {
    id: "design-nail-art",
    category: "design",
    title: "Design Nail Art",
    description:
      "Funde 3D, cristale, marmură, chrome, ombre — orice design complicat vine gratuit la fiecare set.",
    duration: "inclus",
    price: 0,
    displayPrice: "Gratis",
    icon: "Palette",
    featured: true,
  },
];
