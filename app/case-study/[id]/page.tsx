import type { Metadata } from "next";
import { getCaseStudyById, getCaseStudyBySlug } from "@/data/caseStudies";
import { CaseStudyClient } from "./CaseStudyClient";

type PageProps = { params: { id: string } };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const study = getCaseStudyBySlug(params.id) || getCaseStudyById(params.id);
  if (!study) return {};
  const title = `${study.title} | ${study.company} Case Study`;
  const description = study.description.slice(0, 160);
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
      canonical: `/case-study/${params.id}`,
    },
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  return <CaseStudyClient params={params} />;
}
