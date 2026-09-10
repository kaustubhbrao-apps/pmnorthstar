import type { Metadata } from "next";
import { clampDescription, titleField } from "@/lib/seo";
import { permanentRedirect } from "next/navigation";
import {
  CASE_STUDIES_LAST_UPDATED,
  caseStudies,
  getCaseStudyById,
  getCaseStudyBySlug,
  getCaseStudySlug,
  isLegacyId,
} from "@/data/caseStudies";
import { getCaseStudyFaqs } from "@/data/caseStudyFaqs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pmnorthstar.in";

// ISR: refresh hourly so a scheduled (future-dated) case study's page +
// metadata go live on its publishedAt date without a redeploy.
// 6h. Scheduled content normally goes live via /api/cron/revalidate just
// after UTC midnight, so this window is a fallback, not the mechanism.
// Kept at 6h rather than 24h so a missed cron run (or an unset
// CRON_SECRET) delays a publish by hours, not a full day.
export const revalidate = 21600;

// Prerender every case study at its slug URL (not cs-X).
// The [id] route param now holds a slug; legacy cs-X params are
// 301-redirected by the layout component below.
export async function generateStaticParams() {
  return caseStudies.map((c) => ({ id: getCaseStudySlug(c.id) }));
}

export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  // Resolve the study by slug first; fall back to ID for legacy URLs.
  const study =
    getCaseStudyBySlug(params.id) ||
    (isLegacyId(params.id) ? getCaseStudyById(params.id) : undefined);

  if (!study) {
    return { title: "Case study not found" };
  }
  const slug = getCaseStudySlug(study.id);
  const url = `${SITE_URL}/case-study/${slug}`;

  return {
    title: titleField(study.title),
    description: clampDescription(study.description),
    keywords: [
      study.company,
      ...study.tags,
      "case study",
      "product management",
      "product strategy",
      `${study.company} product strategy`,
      `${study.company} growth hack`,
      `${study.company} case study`,
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: study.title,
      description: clampDescription(study.description),
      siteName: "northstar",
      // The study's publish date, not study.year — that is when the events
      // described happened, which is not when this article went up.
      publishedTime: study.publishedAt ?? CASE_STUDIES_LAST_UPDATED,
      tags: study.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description: clampDescription(study.description),
    },
  };
}

export default function CaseStudyLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  // Legacy cs-X URL? 301-redirect to the slug URL for SEO equity transfer.
  if (isLegacyId(params.id)) {
    const study = getCaseStudyById(params.id);
    if (study) {
      const slug = getCaseStudySlug(study.id);
      // permanentRedirect issues a 308 (which Google treats as 301 equivalent).
      permanentRedirect(`/case-study/${slug}`);
    }
  }

  const study = getCaseStudyBySlug(params.id);
  const slug = study ? getCaseStudySlug(study.id) : params.id;
  const faqs = study ? getCaseStudyFaqs(study.id) : [];

  return (
    <>
      {study && (
        <>
          {/* No Article schema here. CaseStudyClient emits one for this
              same URL, and two Article nodes sharing a mainEntityOfPage @id
              is a conflict, not a reinforcement — this copy also dated the
              page to `${study.year}-01-01`, the year the events happened, so
              a 2008 case study advertised itself to crawlers as an 18-year-old
              article. The client copy carries the real publish date, the
              company as an Organization, and dateModified. */}
          {/* Only emit FAQPage when the study actually has FAQs. An
              empty mainEntity[] is malformed JSON-LD and Google was
              flagging case studies as "Duplicate field FAQPage". Stable
              id lets Google dedupe if React's RSC stream surfaces the
              same content twice during hydration. */}
          {faqs.length > 0 && (
            <script
              key="faq-schema"
              id="ld-faq"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: faqs.map((f) => ({
                    "@type": "Question",
                    name: f.question,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: f.answer,
                    },
                  })),
                }),
              }}
            />
          )}
          <script
            id="ld-breadcrumbs"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "northstar",
                    item: SITE_URL,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Case Studies",
                    item: `${SITE_URL}/#casestudies`,
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: study.title,
                    item: `${SITE_URL}/case-study/${slug}`,
                  },
                ],
              }),
            }}
          />
        </>
      )}
      {children}
    </>
  );
}
