import type { GalleryImage } from "./types";

/**
 * Portofoliu real — lucrări foto ale studioului. Pentru a adăuga poze noi,
 * pune fișierul în /public/gallery și adaugă o intrare aici.
 */
export const gallery: GalleryImage[] = [
  {
    id: "g1",
    category: "Design",
    title: "French cu accent leopard & cristale",
    src: "/gallery/design-leopard-funda.jpg",
    span: "wide",
  },
  {
    id: "g2",
    category: "Alungire",
    title: "Alungire cartelă, albastru oțel",
    src: "/gallery/alungire-albastru.jpg",
    span: "normal",
  },
  {
    id: "g3",
    category: "Alungire",
    title: "Alungire cartelă, nude glossy",
    src: "/gallery/alungire-nude.jpg",
    span: "tall",
  },
  {
    id: "g4",
    category: "Ombre",
    title: "Ombre mentol",
    src: "/gallery/ombre-mentol.jpg",
    span: "normal",
  },
  {
    id: "g5",
    category: "French",
    title: "French lung, bază nude",
    src: "/gallery/french-nude-lung.jpg",
    span: "tall",
  },
  {
    id: "g6",
    category: "Design",
    title: "Marmură neagră & funde 3D",
    src: "/gallery/design-funda-marmura.jpg",
    span: "normal",
  },
  {
    id: "g7",
    category: "Alungire",
    title: "Roșu clasic, glossy",
    src: "/gallery/alungire-rosu.jpg",
    span: "tall",
  },
  {
    id: "g8",
    category: "Design",
    title: "Vârf glitter roz, bază nude",
    src: "/gallery/design-glitter-roz.jpg",
    span: "wide",
  },
  {
    id: "g9",
    category: "French",
    title: "French clasic",
    src: "/gallery/french-clasic.jpg",
    span: "normal",
  },
];

export const galleryCategories = [
  "Toate",
  ...Array.from(new Set(gallery.map((item) => item.category))),
];
