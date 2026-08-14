import type { PricingGroup } from "./types";

/**
 * Lista de prețuri reală a studioului, în lei. Editează liber — tabelul de
 * prețuri se generează direct din acest fișier.
 */
export const pricing: PricingGroup[] = [
  {
    id: "alungire",
    title: "Alungire",
    description: "Extensie gel pe cartelă, în funcție de mărimea unghiei.",
    items: [
      { name: "Mărimea 1", price: 350 },
      { name: "Mărimea 2-3", price: 400 },
      { name: "Mărimea 4-5", price: 450 },
      { name: "Mărimea 6-7", price: 500 },
    ],
  },
  {
    id: "corectie",
    title: "Corecție",
    description: "Corecție / umplere pentru seturile existente, pe mărime.",
    items: [
      { name: "Mărimea 1", price: 300 },
      { name: "Mărimea 2-3", price: 350 },
      { name: "Mărimea 4-5", price: 400 },
    ],
  },
  {
    id: "design",
    title: "Design & Finisaje",
    description: "Adăugări la orice set — designul complicat este mereu inclus gratuit.",
    items: [
      { name: "Design complicat", price: 0, displayPrice: "Gratis" },
      { name: "French", price: 0, displayPrice: "Gratis" },
      { name: "Acoperire cu gel lac", price: 300 },
    ],
  },
];
