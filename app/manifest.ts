import type { MetadataRoute } from "next";
import { business } from "@/data/business";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${business.name} — ${business.tagline}`,
    short_name: business.name,
    description: "A boutique luxury nail studio.",
    start_url: "/",
    display: "standalone",
    background_color: "#F9F6F2",
    theme_color: "#C6A15B",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
