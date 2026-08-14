/**
 * Fiecare categorie (serviciu/galerie) primește o nuanță proprie din paleta
 * „piele de jaguar" — folosită consecvent la iconițe, borduri de carduri,
 * tab-uri de preț și filtre din galerie. Păstrează denumirile de clase
 * complet literale — scanner-ul Tailwind are nevoie de ele așa.
 */
export const categoryColors: Record<
  string,
  { hex: string; bgSoft: string; text: string; ring: string; bgSolid: string }
> = {
  alungire: {
    hex: "#b8894a",
    bgSoft: "bg-gold/15",
    text: "text-gold",
    ring: "ring-gold/40",
    bgSolid: "bg-gold",
  },
  corectie: {
    hex: "#5a4128",
    bgSoft: "bg-espresso/12",
    text: "text-espresso",
    ring: "ring-espresso/30",
    bgSolid: "bg-espresso",
  },
  design: {
    hex: "#7c3048",
    bgSoft: "bg-wine/12",
    text: "text-wine",
    ring: "ring-wine/30",
    bgSolid: "bg-wine",
  },
  french: {
    hex: "#c67a2e",
    bgSoft: "bg-amber/15",
    text: "text-amber",
    ring: "ring-amber/40",
    bgSolid: "bg-amber",
  },
  finisaje: {
    hex: "#9c4620",
    bgSoft: "bg-rust/15",
    text: "text-rust",
    ring: "ring-rust/40",
    bgSolid: "bg-rust",
  },
  ombre: {
    hex: "#f0876f",
    bgSoft: "bg-coral/20",
    text: "text-coral",
    ring: "ring-coral/40",
    bgSolid: "bg-coral",
  },
};

export const defaultCategoryColor = categoryColors.alungire;

export function getCategoryColor(category: string) {
  return categoryColors[category.toLowerCase()] ?? defaultCategoryColor;
}
