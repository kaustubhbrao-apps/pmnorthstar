import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAIDecodedArticleBySlug, getAllAIDecodedArticles } from "@/lib/ai-decoded";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Byline } from "@/components/Byline";
import { SubscribeForm } from "@/components/SubscribeForm";
import { SidebarShell } from "@/components/SidebarShell";
import { ViewCounter } from "@/components/ViewCounter";
import { SmartSaveButton } from "@/components/SmartSaveButton";
import { BigDiv, Pill, FaqList, fmtDate } from "@/components/Editorial";

// ISR: re-render hourly so a scheduled (future-dated) article goes live on
// its publishedAt date without a redeploy.
// 6h. Scheduled content normally goes live via /api/cron/revalidate just
// after UTC midnight, so this window is a fallback, not the mechanism.
// Kept at 6h rather than 24h so a missed cron run (or an unset
// CRON_SECRET) delays a publish by hours, not a full day.
export const revalidate = 21600;

// No generateMetadata here. layout.tsx owns it. This copy returned the title
// as a plain string, so the root template appended " | northstar" and the
// layout's length-aware { absolute } switch never got to run; it also declared
// a relative canonical, overriding the absolute one the layout emits.

// Split rendered HTML at the </p> tag closest to `ratio` through the
// article so we can inject a CTA mid-read. Keeps both halves valid HTML.
function splitHtmlAtParagraph(html: string, ratio: number): [string, string] {
  const positions: number[] = [];
  const closeTag = "</p>";
  let idx = html.indexOf(closeTag);
  while (idx !== -1) {
    positions.push(idx + closeTag.length);
    idx = html.indexOf(closeTag, idx + closeTag.length);
  }
  if (positions.length < 3) return [html, ""];
  const splitIdx = positions[Math.max(1, Math.floor(positions.length * ratio))];
  return [html.slice(0, splitIdx), html.slice(splitIdx)];
}

export default function AIDecodedArticlePage({ params }: { params: { slug: string } }) {
  const article = getAIDecodedArticleBySlug(params.slug);
  if (!article) notFound();
  const fm = article.frontmatter;

  // Neighbours for the rail: other published pieces, newest first.
  const more = getAllAIDecodedArticles()
    .filter((a) => a.frontmatter.slug !== fm.slug)
    .slice(0, 6);

  const [firstHalf, secondHalf] = splitHtmlAtParagraph(article.htmlContent, 0.4);

  return (
    <SidebarShell>
      <div className="site-inner read-page pb-16">
        <Breadcrumbs
          className="pt-6"
          items={[
            { label: "northstar", href: "/" },
            { label: "AI Decoded", href: "/ai-decoded" },
            { label: fm.title },
          ]}
        />
        <BigDiv>AI Decoded · {article.readTime} min read</BigDiv>

        <div className="story-grid">
          <article className="read-wrap">
            <div className="flex flex-wrap items-center gap-3">
              <Pill>AI Decoded · {fm.category}</Pill>
              <span className="progress">
                {article.readTime} min · {fmtDate(fm.publishedAt)}
              </span>
              <ViewCounter path={`/ai-decoded/${params.slug}`} className="progress" />
            </div>

            <h1 className="t">{fm.title}</h1>
            <p className="lede">{fm.excerpt}</p>

            <div className="flex items-center justify-between flex-wrap gap-4 mt-6">
              <Byline label="Written" date={fm.updatedAt ?? fm.publishedAt} />
              <SmartSaveButton
                resource={{
                  id: fm.slug,
                  title: fm.title,
                  author: "northstar editorial",
                  category: fm.category,
                  link: `/ai-decoded/${fm.slug}`,
                }}
              />
            </div>

            {fm.heroImage && (
              <figure className="mt-8">
                <Image
                  src={fm.heroImage.src}
                  alt={fm.heroImage.alt}
                  width={1200}
                  height={675}
                  priority
                  className="w-full h-auto"
                  style={{ aspectRatio: "16 / 9", objectFit: "cover", borderRadius: 18, border: "1.5px solid var(--hair)" }}
                />
                {fm.heroImage.credit && (
                  <figcaption className="progress mt-2" style={{ textTransform: "none", letterSpacing: 0 }}>
                    {fm.heroImage.credit}
                  </figcaption>
                )}
              </figure>
            )}

            <div className="article-prose mt-8" dangerouslySetInnerHTML={{ __html: firstHalf }} />
            {secondHalf && (
              <>
                <div className="my-10 max-w-2xl">
                  <SubscribeForm
                    variant="card"
                    surface="ai-decoded-article"
                    headline="Like this decoded read? Get the next one in your inbox."
                    subhead="One sharp take on the latest in AI for PMs, founders and operators. Every few days. Free."
                  />
                </div>
                <div className="article-prose" dangerouslySetInnerHTML={{ __html: secondHalf }} />
              </>
            )}

            {fm.faqs && fm.faqs.length > 0 && <FaqList faqs={fm.faqs} className="mt-6" />}

            <div className="mt-12 flex flex-wrap gap-2.5">
              <Link href="/ai-decoded" className="btn-primary">
                More AI Decoded →
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
                <span className="sn">{article.readTime} min</span>
                <span className="sl">Read time</span>
              </div>
              <div className="statrow">
                <span className="sn">{fmtDate(fm.publishedAt)}</span>
                <span className="sl">Published</span>
              </div>
              <div className="statrow">
                <span className="sn">{fm.category}</span>
                <span className="sl">Lens</span>
              </div>
            </div>

            {more.length > 0 && (
              <div className="railcard">
                <div className="railhead">More decoded</div>
                {more.map((a) => (
                  <Link key={a.frontmatter.slug} href={`/ai-decoded/${a.frontmatter.slug}`} className="rellink">
                    {a.frontmatter.title} →
                  </Link>
                ))}
              </div>
            )}
          </aside>
        </div>
      </div>

      <Footer />
    </SidebarShell>
  );
}
