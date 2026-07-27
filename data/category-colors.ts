/**
 * Maps each service/gallery category to a signature "polish shade" so the
 * site reads as a nail-color menu, not a uniform beige wall. Add new
 * categories here — keep class names fully literal so Tailwind's scanner
 * picks them up.
 */
export const categoryColors: Record<
  string,
  { hex: string; bgSoft: string; text: string; ring: string; bgSolid: string }
> = {
  manicure: {
    hex: "#b8894a",
    bgSoft: "bg-gold/15",
    text: "text-gold",
    ring: "ring-gold/40",
    bgSolid: "bg-gold",
  },
  pedicure: {
    hex: "#f0876f",
    bgSoft: "bg-coral/20",
    text: "text-coral",
    ring: "ring-coral/40",
    bgSolid: "bg-coral",
  },
  extensions: {
    hex: "#5a4128",
    bgSoft: "bg-espresso/12",
    text: "text-espresso",
    ring: "ring-espresso/30",
    bgSolid: "bg-espresso",
  },
  design: {
    hex: "#f7bfa8",
    bgSoft: "bg-peach/25",
    text: "text-[#c96a4e]",
    ring: "ring-peach/40",
    bgSolid: "bg-peach",
  },
  "nail art": {
    hex: "#7c3048",
    bgSoft: "bg-wine/12",
    text: "text-wine",
    ring: "ring-wine/30",
    bgSolid: "bg-wine",
  },
  spa: {
    hex: "#eccf9a",
    bgSoft: "bg-gold-light/25",
    text: "text-gold-dark",
    ring: "ring-gold-light/40",
    bgSolid: "bg-gold-light",
  },
};

export const defaultCategoryColor = categoryColors.manicure;

export function getCategoryColor(category: string) {
  return categoryColors[category.toLowerCase()] ?? defaultCategoryColor;
}
