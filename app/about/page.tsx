import Link from "next/link";
import { Mail, Twitter, LucideIcon } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SubscribeForm } from "@/components/SubscribeForm";
import { SidebarShell } from "@/components/SidebarShell";
import { SITE_INFO } from "@/lib/site";
import { BigDiv, Pill, SectionHead } from "@/components/Editorial";
import { CASE_STUDY_COUNT, BOOK_COUNT, PLAYLIST_COUNT } from "@/data/inventory-counts";

export default function AboutPage() {
  const socials: Array<{ href: string; label: string; icon: LucideIcon }> = [];
  if (SITE_INFO.twitter) socials.push({ href: SITE_INFO.twitter, label: "Twitter", icon: Twitter });
  if (SITE_INFO.email) socials.push({ href: `mailto:${SITE_INFO.email}`, label: "Email", icon: Mail });

  return (
    <SidebarShell activeNav="">
      <div className="site-inner pb-16">
        <Breadcrumbs
          className="pt-6"
          items={[
            { label: "northstar", href: "/" },
            { label: "About" },
          ]}
        />
        <BigDiv>About northstar</BigDiv>

        <div className="story-grid">
          <article className="read-wrap">
            <Pill>Free PM library · no paywall</Pill>
            <h1 className="t" style={{ maxWidth: "20ch" }}>
              A curated PM library. Free, hand-picked, opinionated.
            </h1>
            <p className="lede">
              {CASE_STUDY_COUNT} long-form case studies. {BOOK_COUNT} original book reviews with takeaways.{" "}
              {PLAYLIST_COUNT} hand-picked YouTube playlists. No paywall, no signup wall, no ads. Built and curated by
              Kaustubh Bhalerao.
            </p>

            <SectionHead title="Why this exists" className="mt-10" />
            <div className="serif" style={{ fontSize: "1.18rem", lineHeight: 1.72, color: "var(--text-primary)", display: "grid", gap: "1.3rem", maxWidth: "70ch" }}>
              <p>
                Most PM resources are either paywalled, ad-stuffed, or scattered. Serious PM content lives behind
                paywalls — Lenny&apos;s Newsletter at $150 a year, Reforge at $2,000+, Medium hiding articles after a few
                free reads.
              </p>
              <p>
                What&apos;s free is usually either ad-stuffed listicles ranking the same ten books on every site, or
                YouTube videos that turn out to be 20-minute ads. There&apos;s no single curated place where someone new
                to product can land and actually learn — for free, without trading an email up front.
              </p>
              <p>
                northstar is the resource we wished existed. The companies that built modern product, documented as case
                studies. The essential PM books, with takeaways pulled out and honest reads on who they&apos;re really
                for. Playlists curated by topic, not by algorithm. All free. All in one place.
              </p>
            </div>

            <SectionHead title="How the editorial works" />
            <p className="shead-sub">Curated by humans. AI-assisted prose. Edited line by line.</p>
            <div className="serif" style={{ fontSize: "1.18rem", lineHeight: 1.72, color: "var(--text-primary)", display: "grid", gap: "1.3rem", maxWidth: "70ch" }}>
              <p>
                Every book on northstar was chosen because it&apos;s worth a PM&apos;s time — not because an algorithm
                ranked it. Every case study is selected for the specific decision it documents: the pivot, the moat, the
                failure, the bet.
              </p>
              <p>
                The prose is AI-assisted (Claude does most of the heavy drafting). The angle, the take, the structure,
                and the editorial pass are human. We deliberately don&apos;t fake a personal byline on top of AI-assisted
                writing — that&apos;s the trust-theater every other content site is doing in 2026, and we don&apos;t want
                to add to it.
              </p>
              <p>
                Book reviews are deliberately not summaries. They&apos;re meta-commentary: what the book got right, who
                it&apos;s actually for, what gets commonly misread, and whether the assumptions hold for PMs working
                outside Silicon Valley. Case studies are 7-paragraph deep dives, not bullet listicles.
              </p>
            </div>

            <div className="my-10 max-w-2xl">
              <SubscribeForm
                variant="card"
                surface="about"
                headline="Want the newsletter?"
                subhead="One product deep dive every few days. Free. No paywall."
              />
            </div>

            <SectionHead title="What's not here" />
            <p className="shead-sub">Things northstar deliberately doesn&apos;t do.</p>
            <ul className="space-y-3" style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", lineHeight: 1.6, color: "var(--text-muted)" }}>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>No paywall.</strong> Every case study, every book
                review, every playlist is free.
              </li>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>No signup wall.</strong> Browsing requires no account.
                The newsletter is opt-in only.
              </li>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>No display ads.</strong> The only monetization is
                Amazon affiliate links on book pages, which help fund continued work.
              </li>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>No fake personal byline.</strong> Every piece is
                credited to &quot;northstar editorial&quot; — the brand, not a person. The prose is AI-assisted; the
                curation and editing is done by Kaustubh Bhalerao.
              </li>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>No SEO-stuffed listicles.</strong> The site
                doesn&apos;t chase &quot;top 10 PM books 2026&quot; ranking traffic. Each page exists because it&apos;s
                actually useful.
              </li>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>No reselling your data.</strong> We don&apos;t collect
                emails for resale. Analytics is privacy-friendly, with no third-party trackers.
              </li>
            </ul>

            {socials.length > 0 && (
              <>
                <SectionHead title="Get in touch" />
                <p className="shead-sub">Spotted something wrong? Have a case study to suggest?</p>
                <div className="flex flex-wrap gap-2.5">
                  {socials.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="btn-ghost"
                      >
                        <Icon size={14} strokeWidth={1.8} />
                        {s.label}
                      </a>
                    );
                  })}
                </div>
              </>
            )}

            <div className="mt-12 flex flex-wrap gap-2.5">
              <Link href="/#casestudies" className="btn-primary">
                Browse the library →
              </Link>
            </div>
          </article>

          <aside className="rail">
            <div className="railcard">
              <div className="railhead">By the numbers</div>
              <div className="statrow">
                <span className="sn">{CASE_STUDY_COUNT}</span>
                <span className="sl">Case studies</span>
              </div>
              <div className="statrow">
                <span className="sn">{BOOK_COUNT}</span>
                <span className="sl">Book reviews</span>
              </div>
              <div className="statrow">
                <span className="sn">{PLAYLIST_COUNT}</span>
                <span className="sl">Playlists</span>
              </div>
              <div className="statrow">
                <span className="sn">₹0</span>
                <span className="sl">Forever</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </SidebarShell>
  );
}
