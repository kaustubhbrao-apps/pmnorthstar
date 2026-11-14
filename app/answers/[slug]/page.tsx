import type { Metadata } from "next";
import { clampDescription } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { answers, getAnswerBySlug, publishedAnswers } from "@/data/answers";
import { getCaseStudyById, getCaseStudySlug } from "@/data/caseStudies";
import { publishedComparisons } from "@/data/comparisons";
import { SidebarShell } from "@/components/SidebarShell";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { BigDiv, Pill, EdCard, Tile, Cap, SectionHead, VsBox, FaqList, clip, splitVs, tintAt, fmtDate } from "@/components/Editorial";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pmnorthstar.in";

// 6h. Scheduled content normally goes live via /api/cron/revalidate just
// after UTC midnight, so this window is a fallback, not the mechanism.
export const revalidate = 21600;

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return answers.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const answer = getAnswerBySlug(params.slug);
  if (!answer) return { title: "Answer not found" };
  const url = `${SITE_URL}/answers/${answer.slug}`;
  return {
    title: { absolute: answer.metaTitle },
    description: clampDescription(answer.metaDescription),
    keywords: answer.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: answer.metaTitle,
      description: clampDescription(answer.metaDescription),
      siteName: "northstar",
      modifiedTime: answer.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: answer.metaTitle,
      description: clampDescription(answer.metaDescription),
    },
  };
}

export default function AnswerPage({ params }: PageProps) {
  const answer = getAnswerBySlug(params.slug);
  if (!answer) notFound();

  const url = `${SITE_URL}/answers/${answer.slug}`;

  const related = answer.relatedCaseStudyIds
    .map((id) => getCaseStudyById(id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  // Same-category answers, minus this one — keeps the cluster interlinked
  // so no answer page is a dead end.
  const siblings = publishedAnswers()
    .filter((a) => a.category === answer.category && a.slug !== answer.slug)
    .slice(0, 5);

  // Comparisons featuring any company this answer points to — another
  // crawl path into the comparison corpus.
  const relatedCompare = publishedComparisons()
    .filter(
      (c) =>
        answer.relatedCaseStudyIds.includes(c.companyA) ||
        answer.relatedCaseStudyIds.includes(c.companyB)
    )
    .slice(0, 4);

  return (
    <SidebarShell activeNav="answers">
      {/* Structured data.
          This was QAPage, which is the wrong type: Google defines it as a
          page carrying one question with *user-submitted* answers — a
          community forum thread. These are single-author editorial, so the
          page was declaring a format it does not have and was not eligible
          for the rich result it was asking for. Article is the honest type,
          with the question as the headline and the short answer as the
          description — which is also the passage a model lifts. FAQPage
          below still covers the follow-ups, which is its correct use. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: answer.question,
            description: answer.shortAnswer,
            url,
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            datePublished: answer.publishedAt ?? answer.updatedAt,
            dateModified: answer.updatedAt,
            author: { "@type": "Organization", name: "northstar", url: SITE_URL },
            publisher: { "@type": "Organization", name: "northstar", url: SITE_URL },
            articleSection: answer.category,
            inLanguage: "en",
            isPartOf: {
              "@type": "CollectionPage",
              name: "Answers",
              url: `${SITE_URL}/answers`,
            },
          }),
        }}
      />
      {answer.faqs && answer.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: answer.faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            }),
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "northstar", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Answers", item: `${SITE_URL}/answers` },
              { "@type": "ListItem", position: 3, name: answer.question, item: url },
            ],
          }),
        }}
      />

      <div className="site-inner pb-16">
        <Breadcrumbs
          className="pt-6"
          items={[
            { label: "northstar", href: "/" },
            { label: "Answers", href: "/answers" },
            { label: answer.question },
          ]}
        />
        <BigDiv>Straight answer · {answer.category}</BigDiv>

        <div className="story-grid">
          <article className="read-wrap">
            <div className="flex flex-wrap items-center gap-3">
              <Pill>{answer.category}</Pill>
              <span className="progress">Reviewed {fmtDate(answer.updatedAt)}</span>
            </div>

            <h1 className="t">{answer.question}</h1>

            {/* The citable unit. Visually distinct and first in the DOM after
                the H1, so it's the passage a model lifts. */}
            <div className="play">
              <div className="lab">Short answer</div>
              <p>{answer.shortAnswer}</p>
            </div>

            <div className="answer-prose text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: answer.bodyHtml }} />

            {related.length > 0 && (
              <>
                <SectionHead title="Seen in practice" count={related.length} />
                <p className="shead-sub">Case studies where this shows up as a real decision, not a definition.</p>
                <div className="grid3">
                  {related.map((c, i) => (
                    <EdCard key={c.id} href={`/case-study/${getCaseStudySlug(c.id)}`}>
                      <Tile tint={tintAt(i)} minH={240} chip={String(c.year)} title={c.title} size="m" brand={c.company} />
                      <Cap k={`${c.category} · ${c.company}`} title={clip(c.outcome, 80)} />
                    </EdCard>
                  ))}
                </div>
              </>
            )}

            {answer.faqs && answer.faqs.length > 0 && <FaqList faqs={answer.faqs} title="Related questions" />}

            {relatedCompare.length > 0 && (
              <>
                <SectionHead title="Head-to-Head" />
                <div className="heads">
                  {relatedCompare.map((c) => {
                    const { a, b } = splitVs(c.title);
                    return <VsBox key={c.slug} a={a} b={b} m={c.eyebrow} href={`/compare/${c.slug}`} />;
                  })}
                </div>
              </>
            )}

            <div className="mt-12 flex flex-wrap gap-2.5">
              <Link href="/answers" className="btn-primary">
                All answers →
              </Link>
              <Link href="/#casestudies" className="btn-ghost">
                Browse case studies
              </Link>
            </div>
          </article>

          <aside className="rail">
            <div className="railcard">
              <div className="railhead">At a glance</div>
              <div className="statrow">
                <span className="sn">{answer.category}</span>
                <span className="sl">Category</span>
              </div>
              <div className="statrow">
                <span className="sn">{related.length}</span>
                <span className="sl">Case studies cited</span>
              </div>
              <div className="statrow">
                <span className="sn">{fmtDate(answer.updatedAt)}</span>
                <span className="sl">Last reviewed</span>
              </div>
            </div>

            {siblings.length > 0 && (
              <div className="railcard">
                <div className="railhead">More on {answer.category.toLowerCase()}</div>
                {siblings.map((s) => (
                  <Link key={s.slug} href={`/answers/${s.slug}`} className="rellink">
                    {s.question} →
                  </Link>
                ))}
              </div>
            )}

            {relatedCompare.length > 0 && (
              <div className="railcard">
                <div className="railhead">Head-to-head</div>
                {relatedCompare.map((c) => {
                  const { a, b } = splitVs(c.title);
                  return (
                    <Link key={c.slug} href={`/compare/${c.slug}`} className="rellink">
                      {b ? `${a} vs ${b}` : a} →
                    </Link>
                  );
                })}
              </div>
            )}
          </aside>
        </div>
      </div>

      <Footer />
    </SidebarShell>
  );
}
