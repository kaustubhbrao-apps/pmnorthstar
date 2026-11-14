import { notFound } from "next/navigation";
import Link from "next/link";
import { marked } from "marked";
import { SidebarShell } from "@/components/SidebarShell";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { caseStudies, publishedCaseStudies } from "@/data/caseStudies";
import { getTopicBySlug, publishedTopics } from "@/data/topics";
import { publishedComparisons } from "@/data/comparisons";
import { publishedAnswers } from "@/data/answers";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SubscribeForm } from "@/components/SubscribeForm";
import { Footer } from "@/components/Footer";
import { ViewCounter } from "@/components/ViewCounter";
import { SmartSaveButton } from "@/components/SmartSaveButton";
import { CASE_STUDY_COUNT } from "@/data/inventory-counts";
import { BigDiv, Pill, EdCard, Tile, Cap, SectionHead, VsBox, FaqList, clip, splitVs, tintAt } from "@/components/Editorial";
import { photoFor } from "@/data/cardImages";

// 6h. Scheduled content normally goes live via /api/cron/revalidate just
// after UTC midnight, so this window is a fallback, not the mechanism.
// Kept at 6h rather than 24h so a missed cron run (or an unset
// CRON_SECRET) delays a publish by hours, not a full day.
export const revalidate = 21600;

export function generateStaticParams() {
  return publishedTopics().map((t) => ({ slug: t.slug }));
}

interface PageProps {
  params: { slug: string };
}

// No generateMetadata here. layout.tsx already builds the full set from the
// topic's own metaTitle/metaDescription/keywords, and page metadata wins over
// layout metadata — so this copy was overriding a hand-written 143-character
// description with topic.intro, the entire opening paragraph. Live topic pages
// were shipping descriptions with a median length of 699 characters against a
// ~160 limit, and the frontmatter written for the job was never used.

export default function TopicPage({ params }: PageProps) {
  const topic = getTopicBySlug(params.slug);
  if (!topic) notFound();

  const cases = topic.caseStudyIds
    .map((id) => publishedCaseStudies().find((c) => c.id === id))
    .filter(Boolean) as typeof caseStudies;

  const otherTopics = publishedTopics().filter((t) => t.slug !== topic.slug);

  // Reverse links: comparisons and answers that involve any of this topic's
  // case studies. Passes internal authority from topic hubs down to the
  // comparison/answer pages Google is slow to index.
  const topicCaseIds = new Set(topic.caseStudyIds);
  const relatedComparisons = publishedComparisons()
    .filter((c) => topicCaseIds.has(c.companyA) || topicCaseIds.has(c.companyB))
    .slice(0, 6);
  const relatedAnswers = publishedAnswers()
    .filter((a) => a.relatedCaseStudyIds.some((id) => topicCaseIds.has(id)))
    .slice(0, 8);

  return (
    <SidebarShell activeNav="explore">
      <div className="site-inner pb-16">
        <Breadcrumbs
          className="pt-6"
          items={[
            { label: "northstar", href: "/" },
            { label: "Topics", href: "/topics" },
            { label: topic.title },
          ]}
        />
        <BigDiv>
          Topic · {cases.length} case {cases.length === 1 ? "study" : "studies"}
        </BigDiv>

        {/* Header — reading-page title treatment, full width. */}
        <div className="read-wrap">
          <div className="flex flex-wrap items-center gap-3">
            <Pill>{topic.eyebrow}</Pill>
            <ViewCounter path={`/topics/${topic.slug}`} className="progress" />
          </div>
          <h1 className="t" style={{ maxWidth: "20ch" }}>
            {topic.title}
          </h1>
          <div
            className="lede prose-links"
            style={{ maxWidth: "70ch" }}
            dangerouslySetInnerHTML={{ __html: marked.parse(topic.intro) as string }}
          />
          <div className="flex items-center gap-3 mt-5">
            <SmartSaveButton
              resource={{
                id: topic.slug,
                title: topic.title,
                author: "northstar collections",
                category: "Topic",
                link: `/topics/${topic.slug}`,
              }}
            />
          </div>
        </div>

        {/* Case studies */}
        <SectionHead title="The cases" count={cases.length} className="mt-10" />
        <div className="grid3">
          {cases.map((study, idx) => (
            <CaseStudyCard key={study.id} study={study} index={idx} hideCategory />
          ))}
        </div>

        {/* Related comparisons + answers */}
        {relatedComparisons.length > 0 && (
          <>
            <SectionHead title="Head-to-Head" count={relatedComparisons.length} />
            <p className="shead-sub">Comparisons featuring these companies.</p>
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
            <p className="shead-sub">The ideas behind these case studies, answered straight.</p>
            <div className="max-w-3xl">
              {relatedAnswers.map((a) => (
                <Link key={a.slug} href={`/answers/${a.slug}`} className="rellink">
                  {a.question} →
                </Link>
              ))}
            </div>
          </>
        )}

        <div className="my-12 max-w-2xl">
          <SubscribeForm
            variant="card"
            surface="topic"
            headline={`More case studies on ${topic.title.toLowerCase()}, in your inbox.`}
            subhead="One product deep dive every few days. Free. No paywall."
          />
        </div>

        {topic.faqs && topic.faqs.length > 0 && <FaqList faqs={topic.faqs} />}

        {/* Other topics */}
        {otherTopics.length > 0 && (
          <>
            <SectionHead title="Other topics" count={otherTopics.length} more="All topics →" moreHref="/topics" right />
            <div className="grid3">
              {otherTopics.map((t, i) => (
                <EdCard key={t.slug} href={`/topics/${t.slug}`}>
                  <Tile
                    tint={tintAt(i)}
                    minH={260}
                    chip={`${t.caseStudyIds.length} ${t.caseStudyIds.length === 1 ? "case" : "cases"}`}
                    title={t.title}
                    size="m"
                    img={photoFor([t.eyebrow, t.title], t.slug)}
                  />
                  <Cap k={t.eyebrow} title={clip(t.intro, 90)} />
                </EdCard>
              ))}
            </div>
          </>
        )}

        <div className="mt-12 flex flex-wrap gap-2.5">
          <Link href="/#casestudies" className="btn-primary">
            Browse all {CASE_STUDY_COUNT} case studies →
          </Link>
          <Link href="/topics" className="btn-ghost">
            All topics
          </Link>
        </div>
      </div>
      <Footer />
    </SidebarShell>
  );
}
