"use client";

// Head-to-Head reading page in the editorial vocabulary (the artifact's
// "Story" view): a divider, then the story grid — article (pill, big italic
// "A vs B" title, lede, the two company tiles, side-by-side table, red
// verdict block, FAQs, related answers, more head-to-heads) beside a sticky
// rail with at-a-glance stats and quick links.

import Link from "next/link";
import { marked } from "marked";
import { SidebarShell } from "@/components/SidebarShell";
import { Footer } from "@/components/Footer";
// Type-only — erased at compile time.
import type { CaseStudy } from "@/data/caseStudies";
import type { Comparison } from "@/data/comparisons";
// Value import from the slug leaf module, not the dataset.
import { getCaseStudySlug } from "@/data/caseStudySlugs";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SubscribeForm } from "@/components/SubscribeForm";
import { ViewCounter } from "@/components/ViewCounter";
import { SmartSaveButton } from "@/components/SmartSaveButton";
import { ShareButton } from "@/components/ShareButton";
import { BigDiv, Pill, EdCard, Tile, Cap, SectionHead, VsBox, FaqList, CmpTable, splitVs } from "@/components/Editorial";

// Only the fields this view renders. The page resolves these server-side so
// the browser never receives the case-study or comparison datasets.
export type ComparedCompany = Pick<CaseStudy, "id" | "company" | "logo" | "year" | "category">;
export type OtherComparison = Pick<Comparison, "slug" | "title" | "eyebrow" | "accentColor">;

export type CompareAnswer = {
  slug: string;
  question: string;
  accentColor: string;
};

interface CompareClientProps {
  cmp: Comparison;
  a: ComparedCompany;
  b: ComparedCompany;
  otherComps: OtherComparison[];
  relatedAnswers: CompareAnswer[];
}

const MORE_SHOWN = 9;

export function CompareClient({ cmp, a, b, otherComps, relatedAnswers }: CompareClientProps) {
  // "Airbnb vs Booking.com — Two ways to solve…" → the part after the dash
  // becomes the lede; the pair itself is the title.
  const subtitle = cmp.title.split(/\s[—–-]\s|:\s/).slice(1).join(" ").trim();
  const aHref = `/case-study/${getCaseStudySlug(a.id)}`;
  const bHref = `/case-study/${getCaseStudySlug(b.id)}`;

  return (
    <SidebarShell activeNav="explore">
      <div className="site-inner pb-16">
        <Breadcrumbs
          className="pt-6"
          items={[
            { label: "northstar", href: "/" },
            { label: "Head-to-Head", href: "/compare" },
            { label: `${a.company} vs ${b.company}` },
          ]}
        />
        <BigDiv>Head-to-Head · {cmp.rows.length} dimensions</BigDiv>

        <div className="story-grid">
          {/* ── Article ─────────────────────────────────────────────────── */}
          <article className="read-wrap">
            <div className="flex flex-wrap items-center gap-3">
              <Pill>{cmp.eyebrow}</Pill>
              <ViewCounter path={`/compare/${cmp.slug}`} className="progress" />
            </div>

            <h1 className="t">
              {a.company} <em>vs</em> {b.company}
            </h1>
            {subtitle && <p className="lede">{subtitle}</p>}

            <div className="flex items-center justify-between flex-wrap gap-4 mt-6">
              <span className="progress">Updated regularly · {cmp.rows.length} dimensions compared</span>
              <div className="flex items-center gap-3">
                <SmartSaveButton
                  resource={{
                    id: cmp.slug,
                    title: cmp.title,
                    author: "northstar comparisons",
                    category: "Comparison",
                    link: `/compare/${cmp.slug}`,
                  }}
                />
                <ShareButton
                  title={`${cmp.title} on northstar`}
                  text={`${cmp.title}: ${cmp.metaDescription}`}
                  label="Share"
                  variant="prominent"
                />
              </div>
            </div>

            {/* The two companies, as tiles with their marks. */}
            <div className="pair">
              <EdCard href={aHref}>
                <Tile tint="ink" minH={210} chip={String(a.year)} title={a.company} size="l" brand={a.company} />
                <Cap k={`${a.category} · case study`} title="Read the full case →" />
              </EdCard>
              <EdCard href={bHref}>
                <Tile tint="mint" minH={210} chip={String(b.year)} title={b.company} size="l" brand={b.company} />
                <Cap k={`${b.category} · case study`} title="Read the full case →" />
              </EdCard>
            </div>

            {/* Intro — serif prose at reading measure. */}
            <div
              className="markdown-prose case-para mt-8 prose-links"
              style={{ fontSize: "1.18rem", lineHeight: 1.72, color: "var(--text-primary)" }}
              dangerouslySetInnerHTML={{ __html: marked.parse(cmp.intro) as string }}
            />

            <SectionHead title="Side by side" className="mt-10" />
            <CmpTable a={a.company} b={b.company} rows={cmp.rows} />

            {/* Verdict — the artifact's red "play" block. */}
            <div className="play mt-10">
              <div className="lab">Verdict · which one wins?</div>
              <p>{cmp.verdict}</p>
            </div>

            <div className="my-10 max-w-2xl">
              <SubscribeForm
                variant="card"
                surface="compare-mid"
                headline="More head-to-head product breakdowns, in your inbox."
                subhead="One sharp comparison every few days. Free."
              />
            </div>

            {cmp.faqs && cmp.faqs.length > 0 && <FaqList faqs={cmp.faqs} />}

            {relatedAnswers.length > 0 && (
              <>
                <SectionHead title="The concepts behind this" />
                <p className="shead-sub">Direct answers to the ideas these two companies illustrate.</p>
                <div className="max-w-3xl">
                  {relatedAnswers.map((ans) => (
                    <Link key={ans.slug} href={`/answers/${ans.slug}`} className="rellink">
                      {ans.question} →
                    </Link>
                  ))}
                </div>
              </>
            )}

            {otherComps.length > 0 && (
              <>
                <SectionHead title="More head-to-heads" count={otherComps.length} more="All head-to-heads →" moreHref="/compare" right />
                <div className="heads">
                  {otherComps.slice(0, MORE_SHOWN).map((c) => {
                    const { a: ca, b: cb } = splitVs(c.title);
                    return <VsBox key={c.slug} a={ca} b={cb} m={c.eyebrow} href={`/compare/${c.slug}`} />;
                  })}
                </div>
              </>
            )}

            <div className="mt-12 flex flex-wrap gap-2.5">
              <Link href="/compare" className="btn-primary">
                Browse all head-to-heads →
              </Link>
              <Link href="/#casestudies" className="btn-ghost">
                All case studies
              </Link>
            </div>
          </article>

          {/* ── Rail ────────────────────────────────────────────────────── */}
          <aside className="rail">
            <div className="railcard">
              <div className="railhead">At a glance</div>
              <div className="statrow">
                <span className="sn">{cmp.rows.length}</span>
                <span className="sl">Dimensions compared</span>
              </div>
              <div className="statrow">
                <span className="sn">{a.year}</span>
                <span className="sl">{a.company} founded</span>
              </div>
              <div className="statrow">
                <span className="sn">{b.year}</span>
                <span className="sl">{b.company} founded</span>
              </div>
              {cmp.faqs && cmp.faqs.length > 0 && (
                <div className="statrow">
                  <span className="sn">{cmp.faqs.length}</span>
                  <span className="sl">Questions answered</span>
                </div>
              )}
            </div>

            <div className="railcard">
              <div className="railhead">Read the cases</div>
              <Link href={aHref} className="rellink">
                {a.company} →
              </Link>
              <Link href={bHref} className="rellink">
                {b.company} →
              </Link>
            </div>

            {otherComps.length > 0 && (
              <div className="railcard">
                <div className="railhead">More head-to-heads</div>
                {otherComps.slice(0, 5).map((c) => {
                  const { a: ca, b: cb } = splitVs(c.title);
                  return (
                    <Link key={c.slug} href={`/compare/${c.slug}`} className="rellink">
                      {cb ? `${ca} vs ${cb}` : ca} →
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
