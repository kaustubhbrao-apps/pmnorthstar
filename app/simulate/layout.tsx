import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pmnorthstar.in";

export const metadata: Metadata = {
  title: "SimulateIt — Practice the decisions that built (and killed) every company you know",
  description:
    "Free decision-practice drills. Play through the real product, business, and founder calls that shaped every startup you know. Branching scenarios, dimensional scoring, no AI, no paywall.",
  openGraph: {
    title: "SimulateIt by northstar",
    description:
      "Practice the decisions that built every company you know. Free, hand-authored, branching scenarios.",
    url: `${SITE_URL}/simulate`,
    siteName: "northstar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SimulateIt by northstar",
    description:
      "Practice the decisions that built every company you know. Free.",
  },
  alternates: {
    canonical: `${SITE_URL}/simulate`,
  },
};

export default function SimulateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
