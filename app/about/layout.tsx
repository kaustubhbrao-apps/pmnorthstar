import type { Metadata } from "next";
import { SITE_INFO } from "@/lib/site";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pmnorthstar.in";

export const metadata: Metadata = {
  title: "About",
  description:
    "northstar is a free, opinionated library for product managers and builders — case studies, book reviews, and simulations. No paywall, no fluff.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/about`,
    title: "About — northstar",
    description: SITE_INFO.shortDescription,
    siteName: "northstar",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // AboutPage + Organization schema — credits the brand, not a person.
  // We deliberately avoid Person schema here because the editorial is
  // AI-assisted; a fake personal author would be dishonest E-E-A-T.
  const sameAs = [SITE_INFO.twitter].filter(Boolean);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "northstar", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            url: `${SITE_URL}/about`,
            mainEntity: {
              "@type": "Organization",
              name: SITE_INFO.brand,
              alternateName: "northstar PM",
              url: SITE_URL,
              description: SITE_INFO.shortDescription,
              ...(sameAs.length > 0 ? { sameAs } : {}),
              ...(SITE_INFO.email ? { email: SITE_INFO.email } : {}),
            },
          }),
        }}
      />
      {children}
    </>
  );
}
