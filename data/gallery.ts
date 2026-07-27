import type { GalleryImage } from "./types";

/**
 * Portfolio gallery. Drop client photos into /public/gallery and set `src`
 * (e.g. "/gallery/01.jpg") — entries without `src` render an elegant
 * placeholder so the layout always looks complete before real photos exist.
 */
export const gallery: GalleryImage[] = [
  { id: "g1", category: "Nail Art", title: "Hand-painted florals", span: "tall" },
  { id: "g2", category: "Manicure", title: "Russian manicure, nude", span: "normal" },
  { id: "g3", category: "Extensions", title: "Sculpted almond set", span: "wide" },
  { id: "g4", category: "Design", title: "French, reimagined", span: "normal" },
  { id: "g5", category: "Pedicure", title: "Luxury spa pedicure", span: "normal" },
  { id: "g6", category: "Nail Art", title: "Fine line abstract", span: "tall" },
  { id: "g7", category: "Manicure", title: "Glazed chrome finish", span: "normal" },
  { id: "g8", category: "Extensions", title: "Coffin shape, gel", span: "normal" },
  { id: "g9", category: "Design", title: "Cat eye shimmer", span: "wide" },
  { id: "g10", category: "Manicure", title: "Classic red, glossy", span: "normal" },
  { id: "g11", category: "Pedicure", title: "Soft pink gel pedicure", span: "tall" },
  { id: "g12", category: "Nail Art", title: "Minimalist line art", span: "normal" },
];

export const galleryCategories = [
  "All",
  ...Array.from(new Set(gallery.map((item) => item.category))),
];
