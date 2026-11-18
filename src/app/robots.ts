import type { MetadataRoute } from "next";
import { getConfiguredSiteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getConfiguredSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: siteUrl ? `${siteUrl}/sitemap.xml` : undefined,
  };
}
