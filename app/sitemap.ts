import type { MetadataRoute } from "next";
import { siteMeta } from "@/data/about";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteMeta.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...["despre", "servicii", "preturi", "galerie"].map((path) => ({
      url: `${siteMeta.url}/${path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
