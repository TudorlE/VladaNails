import type { MetadataRoute } from "next";
import { siteMeta } from "@/data/about";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteMeta.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
