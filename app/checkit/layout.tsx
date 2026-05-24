import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pmnorthstar.in";
const DEFAULT_OG = `${SITE_URL}/api/checkit/og`;

export const metadata: Metadata = {
  title: "CheckIt: Is your vibe-coded site ready for the business world?",
  description:
    "Free site readiness scorecard. We run 20 checks across brand, performance, SEO, UX, and trust, the basics that decide whether users treat you as a product or a project.",
  openGraph: {
    title: "CheckIt by northstar",
    description:
      "Paste your URL. Get scored on 20 things across 5 dimensions. Free, no signup.",
    url: `${SITE_URL}/checkit`,
    siteName: "northstar",
    type: "website",
    images: [{ url: DEFAULT_OG, width: 1200, height: 630, alt: "CheckIt by northstar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CheckIt by northstar",
    description:
      "Is your vibe-coded site ready for the business world? Free 20-check scorecard.",
    images: [DEFAULT_OG],
  },
  alternates: {
    canonical: `${SITE_URL}/checkit`,
  },
};

export default function CheckItLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
