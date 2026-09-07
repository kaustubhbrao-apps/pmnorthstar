import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getCaseStudyById,
  getCaseStudyBySlug,
  publishedCaseStudies,
} from "@/data/caseStudies";
import { getCaseStudyFaqs } from "@/data/caseStudyFaqs";
import { CaseStudyClient } from "./CaseStudyClient";
import type { AdjacentStudy, RelatedStudy } from "./CaseStudyClient";

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
    // No canonical here: layout.tsx emits the absolute, slug-based canonical.
    // This one echoed whatever form was requested (slug *or* legacy cs-N id),
    // so an id-form URL declared itself canonical instead of deferring to the
    // slug — and page metadata overrides the layout's on merge.
  };
}

// Everything the page needs from the dataset is resolved here, on the server,
// and handed to the client component as props. CaseStudyClient used to import
// @/data/caseStudies directly, which pulled the entire ~800 KB corpus into the
// browser bundle of all 143 case-study URLs just to compute prev/next links
// and four related cards. The related/adjacent entries are deliberately
// narrowed to the fields the UI renders — passing whole records would put
// every study's full `content` into the RSC payload instead.
export default function CaseStudyPage({ params }: PageProps) {
  const study = getCaseStudyBySlug(params.id) || getCaseStudyById(params.id);

  // An unknown or not-yet-published slug must be a real 404. Rendering the
  // client's empty state here returned HTTP 200 with no content, which Google
  // reports as a Soft 404 — and it also served an empty page for scheduled
  // case studies before their publishedAt date.
  if (!study) {
    notFound();
  }

  const liveStudies = publishedCaseStudies();
  const currentIndex = liveStudies.findIndex((c) => c.id === study.id);

  const toAdjacent = (c: (typeof liveStudies)[number]): AdjacentStudy => ({
    id: c.id,
    title: c.title,
  });

  const prevStudy =
    currentIndex > 0 ? toAdjacent(liveStudies[currentIndex - 1]) : null;
  const nextStudy =
    currentIndex >= 0 && currentIndex < liveStudies.length - 1
      ? toAdjacent(liveStudies[currentIndex + 1])
      : null;

  // Same category, excluding the current study. Up to 4, closest by tag
  // overlap. Identical ranking to what the client used to compute.
  const related: RelatedStudy[] = liveStudies
    .filter((c) => c.id !== study.id && c.category === study.category)
    .map((c) => ({
      study: c,
      overlap: c.tags.filter((t) => study.tags.includes(t)).length,
    }))
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, 4)
    .map(({ study: c }) => ({
      id: c.id,
      title: c.title,
      category: c.category,
      company: c.company,
      logo: c.logo,
      year: c.year,
    }));

  return (
    <CaseStudyClient
      study={study}
      prevStudy={prevStudy}
      nextStudy={nextStudy}
      related={related}
      faqs={getCaseStudyFaqs(study.id)}
      position={currentIndex + 1}
      total={liveStudies.length}
    />
  );
}
