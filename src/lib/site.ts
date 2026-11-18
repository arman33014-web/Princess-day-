export const SITE_NAME = "Princess Dreamland";
export const DEFAULT_TITLE = "Princess Dreamland | A Magical Fairytale For Misty";
export const DEFAULT_DESCRIPTION =
  "A cute, personal 2D illustrated Princess Day fairytale website thoughtfully created for Misty on 18 November.";
export const FALLBACK_PRODUCTION_ORIGIN = "https://princess-dreamland.vercel.app";

/**
 * Returns the configured production site URL (without trailing slash)
 * when NEXT_PUBLIC_SITE_URL or VERCEL_PROJECT_PRODUCTION_URL is set to a valid
 * non-localhost URL. Never exposes localhost in production metadata.
 */
export function getConfiguredSiteUrl(): string | undefined {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : undefined);

  if (!raw) return undefined;

  try {
    const url = new URL(raw.startsWith("http") ? raw : `https://${raw}`);
    const hostname = url.hostname.toLowerCase();
    if (
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname === "0.0.0.0"
    ) {
      return undefined;
    }
    return url.origin;
  } catch {
    return undefined;
  }
}

/**
 * Always returns a safe non-localhost URL for Next.js metadataBase so
 * Open Graph and Twitter image tags never fall back to http://localhost:3000.
 */
export function getMetadataBase(): URL {
  return new URL(getConfiguredSiteUrl() ?? FALLBACK_PRODUCTION_ORIGIN);
}

export function buildCanonicalUrl(pathname: string): string | undefined {
  const siteUrl = getConfiguredSiteUrl();
  if (!siteUrl) return undefined;
  const cleanPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${siteUrl}${cleanPath}`;
}
