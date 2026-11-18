import React from "react";
import type { Metadata } from "next";
import { ANIKA_PRINCESS } from "@/config/princesses";
import { SITE_NAME, buildCanonicalUrl } from "@/lib/site";
import { PrincessFairytaleExperience } from "@/components/PrincessFairytaleExperience";

const canonicalUrl = buildCanonicalUrl(ANIKA_PRINCESS.route);

export const metadata: Metadata = {
  title: ANIKA_PRINCESS.metadata.title,
  description: ANIKA_PRINCESS.metadata.description,
  alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: ANIKA_PRINCESS.metadata.title,
    description: ANIKA_PRINCESS.metadata.description,
    url: canonicalUrl,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: ANIKA_PRINCESS.metadata.title,
    description: ANIKA_PRINCESS.metadata.description,
  },
};

export default function PrincessAnikaPage() {
  return <PrincessFairytaleExperience princess={ANIKA_PRINCESS} />;
}
