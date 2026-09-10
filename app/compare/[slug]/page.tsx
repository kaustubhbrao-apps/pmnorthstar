import { notFound } from "next/navigation";
import { getComparisonBySlug, publishedComparisons } from "@/data/comparisons";
import { getCaseStudyById } from "@/data/caseStudies";
import { getCompanyLogoUrl } from "@/data/companyDomains";
import { CompareClient } from "./CompareClient";
import type { OtherComparison } from "./CompareClient";

type PageProps = { params: { slug: string } };

// No generateMetadata here. layout.tsx owns it, and page metadata overrides
// layout metadata on merge — so this copy was replacing the hand-written
// metaTitle and metaDescription with cmp.title and cmp.intro.slice(0, 160),
// a raw cut through the middle of the opening paragraph.

// Resolved server-side so CompareClient never imports the comparison or
// case-study datasets. The two compared companies are narrowed to the id and
// company name the view actually renders, and the "other comparisons" grid to
// the four fields its cards use.
//
// notFound() also moved up here: it was previously called from the client
// component, so an unknown slug rendered through the client boundary instead
// of being resolved on the server.
export default function ComparePage({ params }: PageProps) {
  const cmp = getComparisonBySlug(params.slug);
  if (!cmp) notFound();

  const a = getCaseStudyById(cmp.companyA);
  const b = getCaseStudyById(cmp.companyB);
  if (!a || !b) notFound();

  const otherComps: OtherComparison[] = publishedComparisons()
    .filter((c) => c.slug !== cmp.slug)
    .map((c) => ({
      slug: c.slug,
      title: c.title,
      eyebrow: c.eyebrow,
      accentColor: c.accentColor,
    }));

  return (
    <CompareClient
      cmp={cmp}
      a={{ id: a.id, company: a.company, logo: a.logo }}
      b={{ id: b.id, company: b.company, logo: b.logo }}
      aLogo={getCompanyLogoUrl(a.company)}
      bLogo={getCompanyLogoUrl(b.company)}
      otherComps={otherComps}
    />
  );
}
