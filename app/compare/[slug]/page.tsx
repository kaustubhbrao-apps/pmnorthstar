import type { Metadata } from "next";
import { getComparisonBySlug } from "@/data/comparisons";
import { CompareClient } from "./CompareClient";

type PageProps = { params: { slug: string } };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const cmp = getComparisonBySlug(params.slug);
  if (!cmp) return {};
  const title = cmp.title;
  const description = cmp.intro.slice(0, 160);
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `/compare/${params.slug}`,
    },
  };
}

export default function ComparePage({ params }: PageProps) {
  return <CompareClient params={params} />;
}
