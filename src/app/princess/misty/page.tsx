import React from "react";
import type { Metadata } from "next";
import { MISTY_PRINCESS } from "@/config/princesses";
import { SITE_NAME, buildCanonicalUrl } from "@/lib/site";
import { PrincessFairytaleExperience } from "@/components/PrincessFairytaleExperience";

const canonicalUrl = buildCanonicalUrl(MISTY_PRINCESS.route);

export const metadata: Metadata = {
  title: MISTY_PRINCESS.metadata.title,
  description: MISTY_PRINCESS.metadata.description,
  alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: MISTY_PRINCESS.metadata.title,
    description: MISTY_PRINCESS.metadata.description,
    url: canonicalUrl,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: MISTY_PRINCESS.metadata.title,
    description: MISTY_PRINCESS.metadata.description,
  },
};

export default function PrincessMistyPage() {
  return <PrincessFairytaleExperience princess={MISTY_PRINCESS} />;
}
