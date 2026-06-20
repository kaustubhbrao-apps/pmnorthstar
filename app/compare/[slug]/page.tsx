"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { SidebarShell } from "@/components/SidebarShell";
import { Footer } from "@/components/Footer";
import { getCaseStudyById, getCaseStudySlug } from "@/data/caseStudies";
import { getCompanyLogoUrl } from "@/data/companyDomains";
import { getComparisonBySlug, publishedComparisons } from "@/data/comparisons";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SubscribeForm } from "@/components/SubscribeForm";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { ViewCounter } from "@/components/ViewCounter";
import { SmartSaveButton } from "@/components/SmartSaveButton";

export default function ComparePage({ params }: { params: { slug: string } }) {
  const cmp = getComparisonBySlug(params.slug);
  const [aLogoFailed, setALogoFailed] = useState(false);
  const [bLogoFailed, setBLogoFailed] = useState(false);

  if (!cmp) notFound();

  const a = getCaseStudyById(cmp.companyA);
  const b = getCaseStudyById(cmp.companyB);
  if (!a || !b) notFound();

  const aLogo = getCompanyLogoUrl(a.company);
  const bLogo = getCompanyLogoUrl(b.company);

  const otherComps = publishedComparisons().filter((c) => c.slug !== cmp.slug);

  return (
    <SidebarShell
      activeNav="explore"
      backHref="/"
      backLabelDesktop="Back to the library"
      backLabelMobile="Home"
      shareTitle={`${cmp.title} on northstar`}
      shareText={`${cmp.title}: ${cmp.intro}`}
    >
      <div className="flex flex-col min-w-0">
        {/* Hero — neutral with comparison-color eyebrow accent */}
        <section
          className="px-4 sm:px-8 lg:px-12 py-10 sm:py-16 flex justify-center"
          style={{ borderBottom: "1.5px solid var(--card-border)" }}
        >
          <div className="w-full max-w-4xl">
            <Breadcrumbs
              className="mb-6"
              items={[
                { label: "northstar", href: "/" },
                { label: "Compare" },
                { label: cmp.title },
              ]}
            />
            <div className="flex items-center gap-4 mb-4 sm:mb-5">
              <span
                className="inline-block text-sm sm:text-base font-bold uppercase px-2.5 py-1 rounded-md"
                style={{
                  background: cmp.accentColor,
                  color: "#ffffff",
                  letterSpacing: "0.12em",
                }}
              >
                {cmp.eyebrow}
              </span>
              <div className="flex items-center gap-3">
                <ViewCounter path={`/compare/${cmp.slug}`} className="meta-mono text-sm text-[var(--text-faint)]" />
                <SmartSaveButton resource={{
                  id: cmp.slug,
                  title: cmp.title,
                  author: "northstar comparisons",
                  category: "Comparison",
                  link: `/compare/${cmp.slug}`
                }} />
              </div>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-8xl font-bold leading-[1.05] mb-5 sm:mb-6"
              style={{
                color: "var(--text-primary)",
                letterSpacing: "-0.04em",
              }}
            >
              {cmp.title}
            </h1>
            <p
              className="text-base sm:text-lg lg:text-xl leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {cmp.intro}
            </p>
          </div>
        </section>

        {/* Two-column header — A vs B */}
        <section
          className="px-4 sm:px-8 lg:px-12 py-8 sm:py-10 flex justify-center"
          style={{ borderBottom: "1.5px solid var(--card-border)" }}
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-6 w-full max-w-5xl">
            {[
              { study: a, logo: aLogo, failed: aLogoFailed, setFailed: setALogoFailed },
              { study: b, logo: bLogo, failed: bLogoFailed, setFailed: setBLogoFailed },
            ].map(({ study, logo, failed, setFailed }, i) => (
              <Link
                key={i}
                href={`/case-study/${getCaseStudySlug(study.id)}`}
                className="surface p-4 sm:p-6 group"
                style={{ borderRadius: 12 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {logo && !failed ? (
                    <span
                      className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex-shrink-0 overflow-hidden"
                      style={{
                        background: "#fff",
                        border: "1.5px solid var(--card-border)",
                      }}
                    >
                      <img
                        src={logo}
                        alt={`${study.company} logo`}
                        loading="lazy"
                        onError={() => setFailed(true)}
                        className="max-w-full max-h-full object-contain"
                        style={{ padding: "4px" }}
                      />
                    </span>
                  ) : (
                    <span className="text-2xl sm:text-3xl">{study.logo}</span>
                  )}
                  <h2
                    className="text-lg sm:text-2xl font-semibold"
                    style={{
                      color: "var(--text-primary)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {study.company}
                  </h2>
                </div>
                <p
                  className="text-sm mt-3 font-medium uppercase tracking-wider inline-flex items-center gap-1"
                  style={{ color: cmp.accentColor }}
                >
                  Read full case study
                  <ArrowUpRight
                    size={11}
                    strokeWidth={1.8}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Comparison table */}
        <section
          className="px-4 sm:px-8 lg:px-12 py-10 sm:py-12 flex justify-center"
          style={{ borderBottom: "1.5px solid var(--card-border)" }}
        >
          <div className="w-full max-w-5xl">
            <p
              className="eyebrow mb-3"
              style={{ color: cmp.accentColor }}
            >
              Side by side
            </p>
            <h2
              className="text-xl sm:text-2xl font-semibold mb-6"
              style={{
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
              }}
            >
              {a.company} vs {b.company}
            </h2>

            <div
              className="surface overflow-hidden"
              style={{ borderRadius: 12 }}
            >
              {/* Header row */}
              <div
                className="grid grid-cols-3 gap-2 sm:gap-4 px-3 sm:px-5 py-3 sm:py-4 text-sm font-semibold uppercase tracking-wider"
                style={{
                  color: "var(--text-muted)",
                  borderBottom: "1.5px solid var(--card-border)",
                  background: "var(--tag-bg)",
                }}
              >
                <div></div>
                <div>{a.company}</div>
                <div>{b.company}</div>
              </div>

              {/* Rows */}
              {cmp.rows.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 gap-2 sm:gap-4 px-3 sm:px-5 py-3 sm:py-4 text-sm sm:text-base items-start"
                  style={{
                    borderBottom:
                      i < cmp.rows.length - 1
                        ? "1.5px solid var(--card-border)"
                        : "none",
                  }}
                >
                  <div
                    className="font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {row.label}
                  </div>
                  <div
                    className="leading-relaxed"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {row.a}
                  </div>
                  <div
                    className="leading-relaxed"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {row.b}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section
          className="px-4 sm:px-8 lg:px-12 py-8 sm:py-10"
          style={{ borderBottom: "1.5px solid var(--card-border)" }}
        >
          <div className="max-w-2xl mx-auto">
            <SubscribeForm
              variant="card"
              surface="compare-mid"
              headline="More head-to-head product breakdowns, in your inbox."
              subhead="One sharp comparison every few days. Free."
            />
          </div>
        </section>

        {/* Verdict */}
        <section
          className="px-4 sm:px-8 lg:px-12 py-10 sm:py-14 flex justify-center"
          style={{ borderBottom: "1.5px solid var(--card-border)" }}
        >
          <div className="w-full max-w-4xl">
            <p
              className="eyebrow mb-3"
              style={{ color: cmp.accentColor }}
            >
              Verdict
            </p>
            <h2
              className="text-2xl sm:text-3xl font-semibold mb-4"
              style={{
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
              }}
            >
              Which one wins?
            </h2>
            <p
              className="text-base sm:text-lg lg:text-xl leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {cmp.verdict}
            </p>
          </div>
        </section>

        {/* FAQ */}
        {cmp.faqs && cmp.faqs.length > 0 && (
          <section
            className="px-4 sm:px-8 lg:px-12 py-10 sm:py-14 flex justify-center"
            style={{ borderBottom: "1.5px solid var(--card-border)" }}
          >
            <div className="w-full max-w-4xl">
              <h2
                className="text-2xl sm:text-3xl font-semibold mb-6"
                style={{
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                Frequently asked
              </h2>
              <div className="space-y-5">
                {cmp.faqs.map((faq, i) => (
                  <div key={i}>
                    <h3
                      className="text-base sm:text-lg font-semibold mb-2"
                      style={{
                        color: "var(--text-primary)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {faq.question}
                    </h3>
                    <p
                      className="text-base sm:text-lg leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other comparisons */}
        <section className="px-4 sm:px-8 lg:px-12 py-10 sm:py-14 flex justify-center">
          <div className="w-full max-w-5xl">
            <p
              className="eyebrow mb-3"
              style={{ color: "var(--text-muted)" }}
            >
              More comparisons
            </p>
            <h2
              className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6"
              style={{
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
              }}
            >
              Explore more head-to-heads
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {otherComps.map((c) => (
                <div key={c.slug} className="playlist-card surface flex flex-col overflow-hidden" style={{ ["--accent-color" as any]: c.accentColor } as React.CSSProperties}>
                  <Link
                    href={`/compare/${c.slug}`}
                    className="p-4 group flex-1"
                  >
                    <span
                      className="inline-block text-sm font-bold uppercase px-2 py-0.5 rounded-md mb-2"
                      style={{ background: c.accentColor, color: "#ffffff", letterSpacing: "0.12em" }}
                    >
                      {c.eyebrow}
                    </span>
                    <p className="text-base font-semibold leading-snug mb-3 group-hover:underline" style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
                      {c.title.split(" — ")[0]}
                    </p>
                  </Link>
                  <div className="px-4 py-3 flex items-center justify-between" style={{ borderTop: "1.5px solid var(--card-border)" }}>
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>Read comparison</span>
                    <SmartSaveButton resource={{
                      id: c.slug,
                      title: c.title,
                      author: "northstar comparisons",
                      category: "Comparison",
                      link: `/compare/${c.slug}`
                    }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link href="/" className="btn-ghost inline-flex">
                Browse the full library
                <ArrowUpRight size={12} strokeWidth={1.6} />
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </SidebarShell>
  );
}
