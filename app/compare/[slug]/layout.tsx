import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { comparisons, getComparisonBySlug } from "@/data/comparisons";
import { getCaseStudyById } from "@/data/caseStudies";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pmnorthstar.in";

export async function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const cmp = getComparisonBySlug(params.slug);
  if (!cmp) return { title: "Comparison not found" };
  const url = `${SITE_URL}/compare/${cmp.slug}`;
  return {
    title: cmp.metaTitle,
    description: cmp.metaDescription,
    keywords: cmp.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: cmp.metaTitle,
      description: cmp.metaDescription,
      siteName: "northstar",
    },
    twitter: {
      card: "summary_large_image",
      title: cmp.metaTitle,
      description: cmp.metaDescription,
    },
  };
}

export default function CompareLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const cmp = getComparisonBySlug(params.slug);
  if (!cmp) notFound();
  const a = getCaseStudyById(cmp.companyA);
  const b = getCaseStudyById(cmp.companyB);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: cmp.metaTitle,
            description: cmp.metaDescription,
            author: { "@type": "Organization", name: "northstar" },
            publisher: {
              "@type": "Organization",
              name: "northstar",
              url: SITE_URL,
            },
            about: [a?.company, b?.company].filter(Boolean).join(" and "),
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${SITE_URL}/compare/${cmp.slug}`,
            },
          }),
        }}
      />
      {children}
    </>
  );
}
