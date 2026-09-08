import type { Metadata } from "next";
import Link from "next/link";
import { YC_STUDY } from "@/data/yc-study";
import { SidebarShell } from "@/components/SidebarShell";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pmnorthstar.in";
const URL_PATH = "/reports/startup-website-audit-2026";

const S = YC_STUDY;

export const metadata: Metadata = {
  title: {
    absolute: `We Audited ${S.audited} YC Startup Websites — What They Get Wrong (${S.ranAt.slice(0, 4)})`,
  },
  description: `Original data: ${S.audited} Y Combinator startup homepages scored against 35 technical checks. Median ${S.median}/100. Every company named and ranked, plus per-check pass rates, the score distribution and the full method.`,
  keywords: [
    "startup website audit",
    "YC startup websites",
    "website fundamentals study",
    "SEO audit data",
    "startup website benchmarks",
  ],
  alternates: { canonical: `${SITE_URL}${URL_PATH}` },
  openGraph: {
    type: "article",
    url: `${SITE_URL}${URL_PATH}`,
    title: `We audited ${S.audited} YC startup websites`,
    description: `Median ${S.median}/100 across 35 technical checks. Every company named and ranked. Original data, full method.`,
    siteName: "northstar",
    publishedTime: S.ranAt,
  },
};

// Single-series magnitude charts throughout, so one hue and no legend —
// the heading names the series. Values are direct-labelled rather than
// carried by colour alone.
const BAR = "#F3123C";

function pct(n: number) {
  return `${n.toFixed(1)}%`;
}

// Look a check up by id so the prose can't silently drift if the ordering
// of the sorted list changes on the next run.
function rate(id: string): string {
  const c = S.checks.find((x) => x.id === id);
  return c ? String(Math.round(c.passRate * 10) / 10) : "—";
}

export default function StartupWebsiteAuditReport() {
  const maxBucket = Math.max(...S.buckets.map((b) => b.count));
  const worst = S.checks.slice(0, 10);
  const best = [...S.checks].reverse().slice(0, 5);

  return (
    <SidebarShell
      activeNav="checkit"
      backHref="/checkit"
      backLabelDesktop="Back to CheckIt"
      shareTitle={`We audited ${S.audited} YC startup websites`}
      shareText={`Median score ${S.median}/100 across 35 technical checks. Original data.`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Report",
            headline: `We audited ${S.audited} YC startup websites`,
            datePublished: S.ranAt,
            dateModified: S.ranAt,
            url: `${SITE_URL}${URL_PATH}`,
            author: { "@type": "Organization", name: "northstar" },
            publisher: { "@type": "Organization", name: "northstar", url: SITE_URL },
            about: "Technical quality of startup company websites",
            variableMeasured: [
              "CheckIt score (0-100)",
              "Per-check pass rate",
              "Dimension score",
            ],
          }),
        }}
      />

      {/* Every audited company as structured data.
          The names are already in the rendered table, but as table cells
          they carry no machine-readable relationship to their score. This
          emits the full ranked list as a Dataset + ItemList, so a crawler
          or an assistant answering "how did <company> score" can read the
          company, its domain, its rank and its number without parsing
          layout — and can cite the row anchor for that company directly.
          ~496 entries, which is the point: the value of this page is the
          completeness of the list. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dataset",
            name: `CheckIt scores for ${S.audited} Y Combinator startup homepages (${S.ranAt})`,
            description: `Every audited company, named and ranked. Each homepage was fetched once on ${S.ranAt} and scored 0-100 across 35 technical checks in seven weighted dimensions. Median ${S.median}, mean ${S.mean}.`,
            url: `${SITE_URL}${URL_PATH}`,
            dateCreated: S.ranAt,
            creator: { "@type": "Organization", name: "northstar", url: SITE_URL },
            license: `${SITE_URL}/about`,
            measurementTechnique: "Automated static analysis of the public homepage",
            variableMeasured: {
              "@type": "PropertyValue",
              name: "CheckIt score",
              minValue: 0,
              maxValue: 100,
              description: "Weighted total across 35 technical checks",
            },
            hasPart: {
              "@type": "ItemList",
              name: "Ranked scores",
              numberOfItems: S.rows.length,
              itemListOrder: "https://schema.org/ItemListOrderDescending",
              itemListElement: S.rows.map((r, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: `${SITE_URL}${URL_PATH}#${r.slug}`,
                item: {
                  "@type": "Organization",
                  name: r.name,
                  url: `https://${r.domain}`,
                  identifier: r.batch,
                  subjectOf: {
                    "@type": "Rating",
                    ratingValue: r.score,
                    bestRating: 100,
                    worstRating: 0,
                    ratingExplanation: `CheckIt score for ${r.domain}, ${S.ranAt}`,
                  },
                },
              })),
            },
          }),
        }}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="px-4 sm:px-8 lg:px-12 py-12 sm:py-16 flex justify-center"
        style={{ borderBottom: "1.5px solid var(--card-border)" }}
      >
        <div className="w-full max-w-4xl">
          <Breadcrumbs
            className="mb-6"
            items={[
              { label: "northstar", href: "/" },
              { label: "CheckIt", href: "/checkit" },
              { label: "Startup website audit" },
            ]}
          />
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-5 h-px" style={{ background: BAR }} />
            <span
              className="text-sm font-mono uppercase"
              style={{ color: BAR, letterSpacing: "0.16em" }}
            >
              Original research · {S.ranAt}
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.04] mb-6"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
          >
            Startups ship what you
            <br />
            can see. Not what you can&apos;t.
          </h1>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-2xl mb-6"
            style={{ color: "var(--text-muted)" }}
          >
            We ran {S.attempted} recent Y Combinator startup homepages through
            CheckIt&apos;s 35 technical checks. The median scored {S.median}/100, and
            not one site fell below 40 — the floor is much higher than the
            &ldquo;startups don&apos;t care about their websites&rdquo; story suggests.
          </p>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-2xl mb-8"
            style={{ color: "var(--text-muted)" }}
          >
            But the failures are strikingly consistent, and they share a property.
            Every check a visitor would notice is nearly universal: {rate("custom-domain")}%
            have a custom domain, {rate("viewport-meta")}% configure a mobile viewport,{" "}
            {rate("real-title")}% write a descriptive title. Every check only a crawler or a
            security scanner would notice is a coin flip or worse — structured data at{" "}
            {rate("structured-data")}%, a content security policy at {rate("csp-header")}%,
            HSTS preload at {rate("hsts-preload")}%. Startups optimise for the demo, not
            the crawler. Every company is named and ranked further down.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { n: String(S.audited), l: "sites audited" },
              { n: `${S.median}`, l: "median score /100" },
              { n: `${S.p10}–${S.p90}`, l: "10th–90th percentile" },
              { n: String(S.unreachable), l: "didn't respond" },
            ].map((t) => (
              <div
                key={t.l}
                className="p-4 rounded-lg"
                style={{ background: "var(--card-bg)", border: "1.5px solid var(--card-border)" }}
              >
                <div
                  className="text-2xl sm:text-3xl font-bold"
                  style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
                >
                  {t.n}
                </div>
                <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                  {t.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Distribution ─────────────────────────────────────── */}
      <section
        className="px-4 sm:px-8 lg:px-12 py-10 sm:py-14 flex justify-center"
        style={{ borderBottom: "1.5px solid var(--card-border)" }}
      >
        <div className="w-full max-w-4xl">
          <h2
            className="text-2xl font-semibold mb-1"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
          >
            How the scores spread
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
            Number of sites in each 10-point band. Mean {S.mean}, median {S.median}.
          </p>

          <div className="flex items-end gap-1.5 sm:gap-2" style={{ height: 220 }}>
            {S.buckets.map((b) => {
              const h = maxBucket > 0 ? (b.count / maxBucket) * 100 : 0;
              return (
                <div key={b.range} className="flex-1 flex flex-col items-center justify-end h-full">
                  <span
                    className="text-xs font-mono mb-1.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {b.count}
                  </span>
                  <div
                    title={`${b.range}: ${b.count} sites`}
                    style={{
                      width: "100%",
                      height: `${Math.max(h, b.count > 0 ? 2 : 0)}%`,
                      background: BAR,
                      borderRadius: "4px 4px 0 0",
                      minHeight: b.count > 0 ? 3 : 0,
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex gap-1.5 sm:gap-2 mt-2">
            {S.buckets.map((b) => (
              <div
                key={b.range}
                className="flex-1 text-center text-[10px] sm:text-xs font-mono"
                style={{ color: "var(--text-faint)" }}
              >
                {b.range.split("-")[0]}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Worst checks ─────────────────────────────────────── */}
      <section
        className="px-4 sm:px-8 lg:px-12 py-10 sm:py-14 flex justify-center"
        style={{ borderBottom: "1.5px solid var(--card-border)" }}
      >
        <div className="w-full max-w-4xl">
          <h2
            className="text-2xl font-semibold mb-1"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
          >
            The ten checks startups fail most
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
            Share of the {S.audited} sites that passed each check, lowest first. Every
            one of these is invisible to a visitor and visible to a machine.
          </p>

          <div className="flex flex-col gap-3.5">
            {worst.map((c) => (
              <div key={c.id}>
                <div className="flex items-baseline justify-between gap-4 mb-1.5">
                  <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    {c.label}
                  </span>
                  <span className="text-sm font-mono" style={{ color: "var(--text-muted)" }}>
                    {pct(c.passRate)}
                  </span>
                </div>
                <div
                  style={{
                    height: 8,
                    background: "var(--card-border)",
                    borderRadius: 4,
                    overflow: "hidden",
                  }}
                >
                  <div
                    title={`${c.label}: ${pct(c.passRate)} passed`}
                    style={{
                      width: `${c.passRate}%`,
                      height: "100%",
                      background: BAR,
                      borderRadius: 4,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8" style={{ borderTop: "1.5px solid var(--card-border)" }}>
            <h3
              className="text-base font-semibold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              And what nearly everyone gets right
            </h3>
            <div className="flex flex-col gap-2">
              {best.map((c) => (
                <div key={c.id} className="flex items-baseline justify-between gap-4 text-sm">
                  <span style={{ color: "var(--text-muted)" }}>{c.label}</span>
                  <span className="font-mono" style={{ color: "var(--text-muted)" }}>
                    {pct(c.passRate)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Dimensions ───────────────────────────────────────── */}
      <section
        className="px-4 sm:px-8 lg:px-12 py-10 sm:py-14 flex justify-center"
        style={{ borderBottom: "1.5px solid var(--card-border)" }}
      >
        <div className="w-full max-w-4xl">
          <h2
            className="text-2xl font-semibold mb-1"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
          >
            Where the points are lost
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
            Average share of available points earned in each dimension. Weakest first.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ minWidth: 420 }}>
              <thead>
                <tr>
                  <th
                    className="text-left font-mono text-xs uppercase pb-3 pr-4"
                    style={{ color: "var(--text-faint)", letterSpacing: "0.1em", borderBottom: "1.5px solid var(--text-primary)" }}
                  >
                    Dimension
                  </th>
                  <th
                    className="text-left font-mono text-xs uppercase pb-3"
                    style={{ color: "var(--text-faint)", letterSpacing: "0.1em", borderBottom: "1.5px solid var(--text-primary)", width: "55%" }}
                  >
                    Average earned
                  </th>
                </tr>
              </thead>
              <tbody>
                {S.dimensions.map((d) => (
                  <tr key={d.id}>
                    <td
                      className="py-3 pr-4 align-middle"
                      style={{ borderBottom: "1px solid var(--card-border)", color: "var(--text-primary)" }}
                    >
                      {d.label}
                    </td>
                    <td
                      className="py-3 align-middle"
                      style={{ borderBottom: "1px solid var(--card-border)" }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          style={{
                            flex: 1,
                            height: 8,
                            background: "var(--card-border)",
                            borderRadius: 4,
                            overflow: "hidden",
                          }}
                        >
                          <div
                            title={`${d.label}: ${pct(d.avgPct)} of available points`}
                            style={{ width: `${d.avgPct}%`, height: "100%", background: BAR, borderRadius: 4 }}
                          />
                        </div>
                        <span className="font-mono text-xs" style={{ color: "var(--text-muted)", minWidth: 44 }}>
                          {pct(d.avgPct)}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Every site, named ────────────────────────────────── */}
      <section
        className="px-4 sm:px-8 lg:px-12 py-10 sm:py-14 flex justify-center"
        style={{ borderBottom: "1.5px solid var(--card-border)" }}
      >
        <div className="w-full max-w-4xl">
          <h2
            className="text-2xl font-semibold mb-1"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
          >
            Every site we scored
          </h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
            All {S.rows.length} companies, ranked. Scores are out of 100 across the same 35
            checks, measured on {S.ranAt}. Run your own site through{" "}
            <Link href="/checkit" style={{ color: BAR }}>CheckIt</Link> to compare on the
            same scale.
          </p>

          <div
            className="rounded-lg overflow-hidden"
            style={{ border: "1.5px solid var(--card-border)" }}
          >
            <div className="overflow-y-auto" style={{ maxHeight: 620 }}>
              <table className="w-full text-sm">
                <thead className="sticky top-0" style={{ background: "var(--page-bg)" }}>
                  <tr>
                    <th
                      className="text-left font-mono text-[11px] uppercase py-3 px-4"
                      style={{ color: "var(--text-faint)", letterSpacing: "0.1em", borderBottom: "1.5px solid var(--card-border)", width: 56 }}
                    >
                      #
                    </th>
                    <th
                      className="text-left font-mono text-[11px] uppercase py-3 px-2"
                      style={{ color: "var(--text-faint)", letterSpacing: "0.1em", borderBottom: "1.5px solid var(--card-border)" }}
                    >
                      Company
                    </th>
                    <th
                      className="text-left font-mono text-[11px] uppercase py-3 px-2 hidden sm:table-cell"
                      style={{ color: "var(--text-faint)", letterSpacing: "0.1em", borderBottom: "1.5px solid var(--card-border)" }}
                    >
                      Batch
                    </th>
                    <th
                      className="text-right font-mono text-[11px] uppercase py-3 px-4"
                      style={{ color: "var(--text-faint)", letterSpacing: "0.1em", borderBottom: "1.5px solid var(--card-border)", width: 80 }}
                    >
                      Score
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {S.rows.map((r, i) => (
                    /* id per row so a single company is deep-linkable —
                       /reports/startup-website-audit-2026#didit — which is
                       what a citation of one company's score can point at. */
                    <tr key={r.slug} id={r.slug}>
                      <td
                        className="py-2.5 px-4 font-mono text-xs align-middle"
                        style={{ color: "var(--text-faint)", borderBottom: "1px solid var(--card-border)" }}
                      >
                        {i + 1}
                      </td>
                      <td
                        className="py-2.5 px-2 align-middle"
                        style={{ borderBottom: "1px solid var(--card-border)" }}
                      >
                        <div className="flex items-center gap-2.5">
                          {r.logo ? (
                            /* Plain img, not next/image: 496 lazy-loaded 2KB files
                               cost nothing and stay off the optimisation quota. */
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={`/yc-logos/${r.slug}.webp`}
                              alt=""
                              width={20}
                              height={20}
                              loading="lazy"
                              decoding="async"
                              style={{ width: 20, height: 20, objectFit: "contain", flexShrink: 0, borderRadius: 3 }}
                            />
                          ) : (
                            <span
                              aria-hidden
                              style={{ width: 20, height: 20, flexShrink: 0, borderRadius: 3, background: "var(--card-border)" }}
                            />
                          )}
                          <span style={{ color: "var(--text-primary)" }}>{r.name}</span>
                          <span className="hidden sm:inline text-xs font-mono" style={{ color: "var(--text-faint)" }}>
                            {r.domain}
                          </span>
                        </div>
                      </td>
                      <td
                        className="py-2.5 px-2 text-xs font-mono align-middle hidden sm:table-cell"
                        style={{ color: "var(--text-muted)", borderBottom: "1px solid var(--card-border)" }}
                      >
                        {r.batch}
                      </td>
                      <td
                        className="py-2.5 px-4 text-right align-middle"
                        style={{ borderBottom: "1px solid var(--card-border)" }}
                      >
                        <span
                          className="font-mono text-sm font-semibold"
                          style={{ color: r.score >= S.median ? "var(--text-primary)" : "var(--text-muted)" }}
                        >
                          {r.score}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Method ───────────────────────────────────────────── */}
      <section
        className="px-4 sm:px-8 lg:px-12 py-10 sm:py-14 flex justify-center"
        style={{ borderBottom: "1.5px solid var(--card-border)" }}
      >
        <div className="w-full max-w-3xl">
          <h2
            className="text-2xl font-semibold mb-5"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
          >
            Method
          </h2>
          <div className="flex flex-col gap-4 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
            <p>
              <strong style={{ color: "var(--text-primary)" }}>Sample.</strong>{" "}
              {S.attempted} active Y Combinator companies with a public website, taken
              from the most recent batches in the public{" "}
              <a href="https://github.com/yc-oss/api" style={{ color: BAR }} rel="nofollow noopener" target="_blank">
                yc-oss/api
              </a>{" "}
              mirror of YC&apos;s company directory. Recency is deliberate: the question
              is what a site built recently looks like, not what a 2012 company has since
              fixed. {S.unreachable} did not return a usable homepage and are excluded
              rather than scored zero, which would have distorted the distribution.
            </p>
            <p>
              <strong style={{ color: "var(--text-primary)" }}>Measurement.</strong> Each
              homepage was fetched once on {S.ranAt} and scored by{" "}
              <Link href="/checkit" style={{ color: BAR }}>CheckIt</Link>, which runs 35
              deterministic checks across seven weighted dimensions summing to 100 points.
              No third-party APIs, no field data, no rendering — every check reads the
              HTML, the response headers, and a small number of well-known URLs such as
              robots.txt and sitemap.xml.
            </p>
            <p>
              <strong style={{ color: "var(--text-primary)" }}>Limitations.</strong> This
              measures the homepage only, at one moment, without executing JavaScript — so
              a site that renders its content client-side will score worse here than a
              browser would suggest, which is itself part of what the SEO checks are
              detecting. A score here is a measurement of one page&apos;s technical
              fundamentals on one day — not a judgment of the company, the product, or
              the team behind it. Several of the lowest-scoring sites in this table
              belong to companies doing extremely well.
            </p>
            <p>
              <strong style={{ color: "var(--text-primary)" }}>Reproducing it.</strong> The
              runner is <code style={{ color: "var(--text-primary)" }}>scripts/yc-audit-study.ts</code>{" "}
              in this site&apos;s repository, and the checks are the same ones any visitor
              gets from CheckIt.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="px-4 sm:px-8 lg:px-12 py-12 flex justify-center">
        <div className="w-full max-w-3xl">
          <div
            className="p-6 sm:p-8 rounded-lg"
            style={{ background: "var(--card-bg)", border: "1.5px solid var(--card-border)", borderLeftWidth: "3px", borderLeftColor: BAR }}
          >
            <h2
              className="text-xl sm:text-2xl font-semibold mb-2"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
            >
              Score your own site against this
            </h2>
            <p className="text-sm mb-5" style={{ color: "var(--text-muted)" }}>
              Same 35 checks, same scoring, one URL. Free, no signup, results in
              about ten seconds.
            </p>
            <Link
              href="/checkit"
              className="inline-block px-5 py-2.5 rounded-lg text-sm font-semibold"
              style={{ background: BAR, color: "#fff" }}
            >
              Run CheckIt →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </SidebarShell>
  );
}
