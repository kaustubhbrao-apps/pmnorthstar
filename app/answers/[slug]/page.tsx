import type { Metadata } from "next";
import { clampDescription } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { answers, getAnswerBySlug, publishedAnswers } from "@/data/answers";
import { getCaseStudyById, getCaseStudySlug } from "@/data/caseStudies";
import { SidebarShell } from "@/components/SidebarShell";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";

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

  return (
    <SidebarShell
      activeNav="answers"
      backHref="/answers"
      backLabelDesktop="All answers"
      backLabelMobile="Answers"
      shareTitle={answer.question}
      shareText={answer.shortAnswer}
    >
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

      <article className="px-4 sm:px-8 lg:px-12 py-10 sm:py-14 flex justify-center">
        <div className="w-full max-w-3xl">
          <Breadcrumbs
            className="mb-6"
            items={[
              { label: "northstar", href: "/" },
              { label: "Answers", href: "/answers" },
              { label: answer.question },
            ]}
          />

          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px" style={{ background: answer.accentColor }} />
            <span
              className="text-sm font-mono uppercase"
              style={{ color: answer.accentColor, letterSpacing: "0.16em" }}
            >
              {answer.category}
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.06] mb-7"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
          >
            {answer.question}
          </h1>

          {/* The citable unit. Visually distinct and first in the DOM after
              the H1, so it's the passage a model lifts. */}
          <div
            className="p-5 sm:p-6 rounded-lg mb-9"
            style={{
              background: "var(--card-bg)",
              border: "1.5px solid var(--card-border)",
              borderLeftWidth: "3px",
              borderLeftColor: answer.accentColor,
            }}
          >
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: "var(--text-primary)" }}
            >
              {answer.shortAnswer}
            </p>
          </div>

          <div
            className="answer-prose text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: answer.bodyHtml }}
          />

          {related.length > 0 && (
            <section className="mt-12 pt-8" style={{ borderTop: "1.5px solid var(--card-border)" }}>
              <h2
                className="text-xl font-semibold mb-1"
                style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
              >
                Seen in practice
              </h2>
              <p className="text-sm mb-5" style={{ color: "var(--text-muted)" }}>
                Case studies where this shows up as a real decision, not a definition.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {related.map((c) => (
                  <Link
                    key={c.id}
                    href={`/case-study/${getCaseStudySlug(c.id)}`}
                    className="playlist-card surface p-4 group"
                  >
                    <p
                      className="text-xs font-mono uppercase tracking-wider mb-1.5"
                      style={{ color: "var(--text-faint)" }}
                    >
                      {c.company}
                    </p>
                    <p
                      className="text-sm font-semibold leading-snug group-hover:underline"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {c.title}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {answer.faqs && answer.faqs.length > 0 && (
            <section className="mt-12 pt-8" style={{ borderTop: "1.5px solid var(--card-border)" }}>
              <h2
                className="text-xl font-semibold mb-5"
                style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
              >
                Related questions
              </h2>
              <div className="flex flex-col gap-4">
                {answer.faqs.map((f) => (
                  <div key={f.question}>
                    <h3 className="text-base font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>
                      {f.question}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {f.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {siblings.length > 0 && (
            <section className="mt-12 pt-8" style={{ borderTop: "1.5px solid var(--card-border)" }}>
              <h2
                className="text-xl font-semibold mb-5"
                style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
              >
                More on {answer.category.toLowerCase()}
              </h2>
              <div className="flex flex-col gap-2">
                {siblings.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/answers/${s.slug}`}
                    className="text-sm hover:underline"
                    style={{ color: s.accentColor }}
                  >
                    {s.question} →
                  </Link>
                ))}
              </div>
            </section>
          )}

          <p className="mt-10 text-xs font-mono" style={{ color: "var(--text-faint)" }}>
            Last reviewed {answer.updatedAt}
          </p>
        </div>
      </article>

      <Footer />
    </SidebarShell>
  );
}
