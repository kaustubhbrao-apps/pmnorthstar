"use client";

// Case study reading page in the editorial vocabulary (artifact "Story"
// view): a "Case study" divider, then a two-column story grid — the article
// (pill, big italic title, serif lede, red "The result" block, prose) beside
// a sticky rail with at-a-glance stats, "More like this" and head-to-heads.

import { useState, useEffect } from "react";
import { marked } from "marked";
// Type-only — erased at compile time.
import type { CaseStudy } from "@/data/caseStudies";
import type { FAQ } from "@/data/caseStudyFaqs";
// getCaseStudySlug comes from the slug leaf module (~7 KB of static maps).
// Importing it from @/data/caseStudies would pull in the whole corpus.
import { getCaseStudySlug } from "@/data/caseStudySlugs";
import { CaseStudyFaqs } from "@/components/CaseStudyFaqs";
import { TopBar } from "@/components/TopBar";
import { ShareButton } from "@/components/ShareButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Byline } from "@/components/Byline";
// From the counts leaf module, not data/caseStudies.ts: this is a client
// component and that module is ~830 KB. Same value, emitted by sync into both.
import { CASE_STUDIES_LAST_UPDATED } from "@/data/inventory-counts";
import { SmartEngagementBlock } from "@/components/SmartEngagementBlock";
import { Footer } from "@/components/Footer";
import { ViewCounter } from "@/components/ViewCounter";
import { SmartSaveButton } from "@/components/SmartSaveButton";
import { BigDiv, Pill, VsBox, SectionHead, splitVs } from "@/components/Editorial";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// Narrowed shapes for the surrounding-navigation entries. The page resolves
// these server-side; only the fields rendered below travel to the browser.
export type AdjacentStudy = Pick<CaseStudy, "id" | "title">;
export type RelatedStudy = Pick<
  CaseStudy,
  "id" | "title" | "category" | "company" | "logo" | "year"
>;

export type RelatedAnswer = {
  slug: string;
  question: string;
  accentColor: string;
};

export type RelatedComparison = {
  slug: string;
  title: string;
  eyebrow: string;
  accentColor: string;
};

interface CaseStudyClientProps {
  study: CaseStudy | null;
  prevStudy: AdjacentStudy | null;
  nextStudy: AdjacentStudy | null;
  related: RelatedStudy[];
  relatedAnswers: RelatedAnswer[];
  relatedComparisons: RelatedComparison[];
  faqs: FAQ[];
  /** 1-based position of this study among published ones, for the "N of M" label. */
  position: number;
  /** Total published studies, for the "N of M" label. */
  total: number;
}

export function CaseStudyClient({
  study,
  prevStudy,
  nextStudy,
  related,
  relatedAnswers,
  relatedComparisons,
  faqs,
  position,
  total,
}: CaseStudyClientProps) {
  // Init false so server and client first render match (avoids a hydration
  // mismatch on the theme-toggle icon); read the saved theme after mount and
  // only then start writing data-theme (the inline script set it pre-paint).
  const [isDark, setIsDark] = useState(false);
  const [themeReady, setThemeReady] = useState(false);

  useEffect(() => {
    setIsDark(localStorage.getItem("theme") === "dark");
    setThemeReady(true);
  }, []);

  useEffect(() => {
    if (!themeReady) return;
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark, themeReady]);

  if (!study) {
    return (
      <div className="h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <p className="eyebrow mb-2">404</p>
          <p className="text-lg font-bold mb-3" style={{ letterSpacing: "-0.02em" }}>
            Case study not found
          </p>
          <Link href="/" className="btn-ghost">
            <ArrowLeft size={12} strokeWidth={1.6} /> Back home
          </Link>
        </div>
      </div>
    );
  }

  const isFailure = study.category === "Failure";
  const paragraphs = study.content.split("\n\n").filter(Boolean);
  const readTime = Math.max(3, Math.ceil(study.content.split(" ").length / 200));
  const indexLabel = String(position).padStart(2, "0");
  const slug = getCaseStudySlug(study.id);

  // ─── Structured Data (JSON-LD) ──────────────────────────────────────────
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pmnorthstar.in";
  const studyUrl = `${SITE_URL}/case-study/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.description,
    // The 1200×630 OG card, not the 128px company favicon — Google rich
    // results and Discover want a large image. The hashless path resolves to
    // the same generated PNG.
    image: [`${studyUrl}/opengraph-image`],
    author: {
      "@type": "Organization",
      name: "northstar editorial",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "northstar",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo-icon.svg`,
      },
    },
    // Both derive from the study's own date, falling back to the corpus date
    // sync computes. dateModified deliberately mirrors datePublished rather
    // than reporting a site-wide "last reviewed" constant: we do not track
    // per-study edits, and claiming every study was revised on the same day
    // is a freshness signal that is simply not true.
    datePublished: study.publishedAt || CASE_STUDIES_LAST_UPDATED,
    dateModified: study.publishedAt || CASE_STUDIES_LAST_UPDATED,
    // The entity the study is about, stated as a thing rather than left for a
    // reader to infer from prose.
    about: {
      "@type": "Organization",
      name: study.company,
    },
    abstract: study.description,
    keywords: study.tags.join(", "),
    articleSection: study.category,
    wordCount: study.content.split(/\s+/).filter(Boolean).length,
    timeRequired: `PT${readTime}M`,
    // The whole site is free and paywall-less — a recognized trust/GEO signal
    // and simply true for every page here.
    isAccessibleForFree: true,
    inLanguage: "en",
    // The answer-ready passages: the headline, the one-line summary, and the
    // red result block — what a voice assistant or AI engine should lift.
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".t", ".lede", ".play p"],
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": studyUrl,
    },
  };

  const injectAfter = Math.max(2, Math.floor(paragraphs.length * 0.4));

  return (
    <div className="min-h-screen">
      {/* SEO / AI Metadata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <TopBar activeNav="casestudies" isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />

      <main>
        <div className="site-inner pb-16">
          <Breadcrumbs
            className="pt-6"
            items={[
              { label: "northstar", href: "/" },
              { label: "Case studies", href: "/#casestudies" },
              { label: study.category },
              { label: study.title },
            ]}
          />
          <BigDiv>
            Case study · {indexLabel} of {total}
          </BigDiv>

          <div className="story-grid">
            {/* ── Article ─────────────────────────────────────────────── */}
            <article className="read-wrap">
              <div className="flex flex-wrap items-center gap-3">
                <Pill>
                  {study.category} · {study.company}
                  {study.region === "India" ? " · India" : ""}
                </Pill>
                <span className="progress">
                  {readTime} min · {study.year}
                </span>
                <ViewCounter path={`/case-study/${study.id}`} className="progress" />
              </div>

              <h1 className="t">{study.title}</h1>
              <p className="lede">{study.description}</p>

              <div className="flex items-center justify-between flex-wrap gap-4 mt-6">
                <Byline label="Written" date={study.publishedAt || CASE_STUDIES_LAST_UPDATED} />
                <div className="flex items-center gap-3">
                  <SmartSaveButton
                    resource={{
                      id: study.id,
                      title: study.title,
                      author: study.company,
                      category: study.category,
                      link: `/case-study/${slug}`,
                    }}
                  />
                  <ShareButton
                    title={`${study.title} — northstar case study`}
                    text={`${study.title}: ${study.description} — via @pmnorthstar`}
                    label="Share"
                    variant="prominent"
                  />
                </div>
              </div>

              {/* The outcome, up front — the artifact's red "play" block. */}
              <div className="play">
                <div className="lab">{isFailure ? "The outcome" : "The result"}</div>
                <p>{study.outcome}</p>
              </div>

              {/* Article body — engagement block injected after ~40% of
                  paragraphs so the reader hits it when invested but not
                  done. Anonymous users see newsletter; engaged logged-in
                  users see related-content recommendations instead. */}
              {paragraphs.map((p, i) => {
                // A paragraph that is just a markdown image renders as a figure.
                const imgMatch = p.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
                return (
                  <div key={i}>
                    {imgMatch ? (
                      <img
                        src={imgMatch[2]}
                        alt={imgMatch[1]}
                        className="w-full rounded-[18px] my-10 object-cover"
                        style={{ border: "1.5px solid var(--hair)" }}
                      />
                    ) : (
                      <div
                        className="markdown-prose case-para"
                        style={{ fontSize: "1.18rem", lineHeight: 1.72, color: "var(--text-primary)" }}
                        dangerouslySetInnerHTML={{ __html: marked.parse(p) as string }}
                      />
                    )}
                    {i === injectAfter && (
                      <div className="my-8">
                        <SmartEngagementBlock
                          fromType="case-study"
                          fromSlug={slug}
                          newsletterHeadline="Reading northstar? Get the next case study in your inbox."
                          newsletterSubhead="One product deep dive every few days — Apple, Cred, Razorpay, Slack, Zerodha and more. Free."
                          recommendations={related.slice(0, 3).map((c) => ({
                            type: "case-study",
                            slug: getCaseStudySlug(c.id),
                            title: c.title,
                            eyebrow: `${c.category} · ${c.company}`,
                            href: `/case-study/${getCaseStudySlug(c.id)}`,
                          }))}
                        />
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-6 mt-6" style={{ borderTop: "1.5px solid var(--hair)" }}>
                <span className="progress mr-1">Tags</span>
                {study.tags.map((tag) => (
                  <Link key={tag} href={`/?q=${encodeURIComponent(tag)}`} className="pill hover:opacity-70">
                    {tag}
                  </Link>
                ))}
              </div>

              {/* Prev / Next */}
              {(prevStudy || nextStudy) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                  {prevStudy ? (
                    <Link href={`/case-study/${getCaseStudySlug(prevStudy.id)}`} className="vsbox">
                      <div className="m" style={{ marginTop: 0, marginBottom: 6 }}>
                        ← Previous
                      </div>
                      <div className="vs" style={{ fontSize: "1.15rem" }}>
                        {prevStudy.title}
                      </div>
                    </Link>
                  ) : (
                    <div />
                  )}
                  {nextStudy ? (
                    <Link href={`/case-study/${getCaseStudySlug(nextStudy.id)}`} className="vsbox sm:text-right">
                      <div className="m" style={{ marginTop: 0, marginBottom: 6 }}>
                        Next →
                      </div>
                      <div className="vs" style={{ fontSize: "1.15rem" }}>
                        {nextStudy.title}
                      </div>
                    </Link>
                  ) : (
                    <div />
                  )}
                </div>
              )}

              {/* Frequently asked — long-tail SEO + reader engagement */}
              <CaseStudyFaqs faqs={faqs} />

              {relatedComparisons.length > 0 && (
                <>
                  <SectionHead title="Head-to-Head" />
                  <p className="shead-sub">Comparisons featuring {study.company}.</p>
                  <div className="heads">
                    {relatedComparisons.map((c) => {
                      const { a, b } = splitVs(c.title);
                      return <VsBox key={c.slug} a={a} b={b} m={c.eyebrow} href={`/compare/${c.slug}`} />;
                    })}
                  </div>
                </>
              )}

              {relatedAnswers.length > 0 && (
                <>
                  <SectionHead title="Concepts explained" />
                  <p className="shead-sub">Answers that reference this case study.</p>
                  <div className="max-w-3xl">
                    {relatedAnswers.map((a) => (
                      <Link key={a.slug} href={`/answers/${a.slug}`} className="rellink">
                        {a.question} →
                      </Link>
                    ))}
                  </div>
                </>
              )}

              <div className="mt-12">
                <Link href="/#casestudies" className="btn-ghost">
                  Browse all cases ↗
                </Link>
              </div>
            </article>

            {/* ── Rail ────────────────────────────────────────────────── */}
            <aside className="rail">
              <div className="railcard">
                <div className="railhead">At a glance</div>
                <div className="statrow">
                  <span className="sn">{study.year}</span>
                  <span className="sl">{study.company}</span>
                </div>
                <div className="statrow">
                  <span className="sn">{readTime} min</span>
                  <span className="sl">Read time</span>
                </div>
                <div className="statrow">
                  <span className="sn">{study.category}</span>
                  <span className="sl">Lens</span>
                </div>
                <div className="statrow">
                  <span className="sn">{indexLabel}</span>
                  <span className="sl">of {total} case studies</span>
                </div>
              </div>

              {related.length > 0 && (
                <div className="railcard">
                  <div className="railhead">More like this</div>
                  {related.slice(0, 5).map((r) => (
                    <Link key={r.id} href={`/case-study/${getCaseStudySlug(r.id)}`} className="rellink">
                      {r.title} →
                    </Link>
                  ))}
                </div>
              )}

              {relatedComparisons.length > 0 && (
                <div className="railcard">
                  <div className="railhead">Head-to-head</div>
                  {relatedComparisons.slice(0, 4).map((c) => (
                    <Link key={c.slug} href={`/compare/${c.slug}`} className="rellink">
                      {splitVs(c.title).b ? `${splitVs(c.title).a} vs ${splitVs(c.title).b}` : c.title} →
                    </Link>
                  ))}
                </div>
              )}
            </aside>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
