import type { MetadataRoute } from "next";
import { ANIKA_PRINCESS, MISTY_PRINCESS } from "@/config/princesses";
import {
  FALLBACK_PRODUCTION_ORIGIN,
  getConfiguredSiteUrl,
} from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getConfiguredSiteUrl() ?? FALLBACK_PRODUCTION_ORIGIN;
  const lastModified = new Date("2026-11-18");

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}${MISTY_PRINCESS.route}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}${ANIKA_PRINCESS.route}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
