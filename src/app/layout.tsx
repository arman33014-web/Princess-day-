import type { Metadata, Viewport } from "next";
import { Dancing_Script, Playfair_Display, Poppins } from "next/font/google";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_NAME,
  buildCanonicalUrl,
  getMetadataBase,
} from "@/lib/site";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-handwriting",
  display: "swap",
});

const canonicalHome = buildCanonicalUrl("/");

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: DEFAULT_TITLE,
    template: "%s",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Princess Dreamland",
    "Princess Misty",
    "International Princess Day",
    "18 November",
    "2D Fairytale Storybook",
    "Princess Day Gift",
  ],
  alternates: canonicalHome ? { canonical: canonicalHome } : undefined,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFF7FA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${poppins.variable} ${dancingScript.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#FFF7FA] text-[#68485A] antialiased selection:bg-[#FFE1EC] selection:text-[#68485A]">
        {children}
      </body>
    </html>
  );
}
