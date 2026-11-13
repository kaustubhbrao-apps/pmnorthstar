"use client";

// CheckIt in the editorial vocabulary (artifact "CheckIt" view): tool hero,
// pill URL input + red "Grade it" button, a scorecard with the big numeral,
// band grade and per-dimension bars, a "Top fixes" tile row, then the full
// per-check breakdown. All audit logic is unchanged.

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { Loader2, Check, X, ChevronDown, Share2 } from "lucide-react";
import { SidebarShell } from "@/components/SidebarShell";
import { SubscribeForm } from "@/components/SubscribeForm";
import { Footer } from "@/components/Footer";
import { EdCard, Tile, Cap, SectionHead, ToolHero, clip, tintAt } from "@/components/Editorial";
import { CASE_STUDY_COUNT } from "@/data/inventory-counts";
import { CHECKIT_WAR_LEADERBOARD, type LeaderboardEntry } from "@/data/checkit-leaderboard";
import { YC_STUDY_SUMMARY as YC } from "@/data/yc-study-summary";
import { DIMENSIONS } from "@/lib/checkit/dimensions";
import { BAND_COPY } from "@/lib/checkit/types";
import type { AuditResult, DimensionResult } from "@/lib/checkit/types";
import { track } from "@/lib/track";

type ViewState =
  | { kind: "idle" }
  | { kind: "loading"; url: string }
  | { kind: "error"; message: string }
  | { kind: "ready"; result: AuditResult };

const EXAMPLE_URLS = ["stripe.com", "linear.app", "vercel.com"];

function safeHost(url: string): string {
  try {
    return new URL(/^https?:\/\//i.test(url) ? url : `https://${url}`).host;
  } catch {
    return url;
  }
}

interface CheckitStats {
  total: number;
  week: number;
  today: number;
}

export default function CheckItClient() {
  const [input, setInput] = useState("");
  const [view, setView] = useState<ViewState>({ kind: "idle" });
  const [stats, setStats] = useState<CheckitStats | null>(null);
  const reqIdRef = useRef(0);

  useEffect(() => {
    fetch("/api/checkit/stats")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => d && setStats(d))
      .catch(() => {
        /* swallow */
      });
  }, []);

  const runAudit = useCallback(async (url: string) => {
    const reqId = ++reqIdRef.current;
    setView({ kind: "loading", url });
    const params = new URLSearchParams({ url });
    window.history.replaceState(null, "", `/checkit?${params}`);

    const host = safeHost(url);
    track({ name: "checkit_audit_started", host });

    try {
      const res = await fetch(`/api/checkit/audit?url=${encodeURIComponent(url)}`);
      const data = await res.json();
      if (reqId !== reqIdRef.current) return;
      if (!res.ok || data.error) {
        setView({ kind: "error", message: data.error || "Audit failed." });
        return;
      }
      const result: AuditResult = data.result;
      if (result.fatalError) {
        setView({ kind: "error", message: result.fatalError });
        return;
      }
      setView({ kind: "ready", result });
      track({
        name: "checkit_audit_completed",
        host,
        score: result.totalScore,
        band: result.band,
      });
    } catch {
      if (reqId !== reqIdRef.current) return;
      setView({ kind: "error", message: "Network error. Try again." });
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialUrl = params.get("url");
    if (initialUrl) {
      setInput(initialUrl);
      runAudit(initialUrl);
    }
  }, [runAudit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    runAudit(trimmed);
  };

  const handleReset = () => {
    setView({ kind: "idle" });
    setInput("");
    window.history.replaceState(null, "", "/checkit");
  };

  const pick = (url: string) => {
    setInput(url);
    runAudit(url);
  };

  const isLoading = view.kind === "loading";

  return (
    <SidebarShell activeNav="checkit">
      <div className="site-inner pt-8 pb-16">
        <ToolHero pill="Free tool" title="CheckIt">
          Paste a product or landing page. Get a brutal, instant grade across the 35 things that actually decide
          whether users treat you as a product or a project — performance, SEO, UX, brand, trust, polish, standards.
        </ToolHero>

        <form onSubmit={handleSubmit} className="toolbar-in">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="https://yourproduct.com"
            disabled={isLoading}
            autoFocus
            spellCheck={false}
            autoCorrect="off"
            autoCapitalize="off"
            aria-label="Page URL"
          />
          <button type="submit" disabled={isLoading || !input.trim()} className="btn-red disabled:opacity-50">
            {isLoading ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Checking
              </>
            ) : (
              "Grade it →"
            )}
          </button>
        </form>

        <p className="progress -mt-4 mb-10 flex flex-wrap items-center gap-x-2 gap-y-1">
          <span>Try:</span>
          {EXAMPLE_URLS.map((url) => (
            <button
              key={url}
              type="button"
              onClick={() => pick(url)}
              disabled={isLoading}
              className="underline underline-offset-2 disabled:opacity-40"
              style={{ color: "var(--brand-primary)", textTransform: "none", letterSpacing: 0 }}
            >
              {url}
            </button>
          ))}
          <span>· Free · no signup · the result URL is shareable</span>
          {stats && stats.week > 0 && (
            <span>
              · {stats.week.toLocaleString()} {stats.week === 1 ? "site" : "sites"} scored this week
            </span>
          )}
        </p>

        {view.kind === "loading" && <LoadingState url={view.url} />}
        {view.kind === "error" && <ErrorState message={view.message} onReset={handleReset} />}
        {view.kind === "ready" && <ResultView result={view.result} />}
        {view.kind === "idle" && <IdleProof onPickExample={pick} />}
      </div>
      <Footer />
    </SidebarShell>
  );
}

// ── Idle: proof points, the research, the leaderboard ─────────────────────

function IdleProof({ onPickExample }: { onPickExample: (url: string) => void }) {
  const [liveLeaderboard, setLiveLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    fetch("/api/checkit/leaderboard")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (d && d.leaderboard && d.leaderboard.length > 0) {
          setLiveLeaderboard(d.leaderboard);
        } else {
          setLiveLeaderboard(CHECKIT_WAR_LEADERBOARD); // Fallback to static
        }
      })
      .catch(() => {
        setLiveLeaderboard(CHECKIT_WAR_LEADERBOARD); // Fallback to static on error
      });
  }, []);

  // Use live data if available, otherwise show the static "war" data initially
  const displayBoard = liveLeaderboard.length > 0 ? liveLeaderboard : CHECKIT_WAR_LEADERBOARD.slice(0, 5);

  const items = [
    { num: "35", label: "weighted checks across 7 dimensions" },
    { num: "<30s", label: "to a full audit" },
    { num: "0", label: "signups, paywalls, accounts" },
  ];

  return (
    <div>
      <div className="heads">
        {items.map((p) => (
          <div key={p.label} className="vsbox" style={{ cursor: "default" }}>
            <div className="vs">{p.num}</div>
            <div className="m">{p.label}</div>
          </div>
        ))}
      </div>

      {/* The study ran these same 35 checks over the YC homepages — the one
          page here carrying data that exists nowhere else. */}
      <SectionHead title="Original research" more="Read the report →" moreHref="/reports/startup-website-audit-2026" />
      <EdCard href="/reports/startup-website-audit-2026">
        <Tile
          tint="ink"
          minH={230}
          pill="Research"
          title={`We ran ${YC.audited} YC startup homepages through CheckIt`}
          dek={`Median ${YC.median}/100. Every company named and ranked, plus per-check pass rates and the full method.`}
          size="xl"
        />
      </EdCard>

      <SectionHead title="Highest scores yet" />
      <div className="max-w-3xl">
        {displayBoard.map((entry, i) => (
          <button
            key={`${entry.url}-${i}`}
            type="button"
            onClick={() => onPickExample(entry.url)}
            className="rellink row w-full text-left"
          >
            <span className="min-w-0 truncate">
              <span style={{ color: "var(--text-muted)" }}>{i + 1}. </span>
              {entry.company}
              <span className="ml-2 text-sm font-medium" style={{ color: "var(--text-muted)" }}>
                {entry.url}
              </span>
            </span>
            <span className="font-extrabold tabular-nums flex-shrink-0" style={{ color: "var(--brand-primary)" }}>
              {entry.score}
            </span>
          </button>
        ))}
      </div>
      <p className="serif text-lg mt-6" style={{ color: "var(--text-muted)" }}>
        Think your landing page can beat these? Paste your URL above — no signup required.
      </p>
    </div>
  );
}

function LoadingState({ url }: { url: string }) {
  return (
    <div className="drillcard">
      <div className="flex items-center gap-3">
        <Loader2 className="animate-spin" size={24} style={{ color: "var(--brand-primary)" }} />
        <div>
          <p className="font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Running 35 checks on {safeHost(url)}
          </p>
          <p className="serif" style={{ color: "var(--text-muted)" }}>
            Fetching the page and probing its surface — can take up to 30 seconds.
          </p>
        </div>
      </div>
    </div>
  );
}

function ErrorState({ message, onReset }: { message: string; onReset: () => void }) {
  return (
    <div className="drillcard">
      <div className="flex items-center gap-2 mb-2">
        <X size={20} style={{ color: "var(--brand-primary)" }} />
        <p className="font-bold" style={{ fontFamily: "var(--font-display)" }}>
          Couldn&apos;t audit this URL
        </p>
      </div>
      <p className="serif mb-5" style={{ color: "var(--text-muted)" }}>
        {message}
      </p>
      <button onClick={onReset} className="btn-red">
        Try a different URL
      </button>
    </div>
  );
}

// ── Result: scorecard + bars, top fixes, every check ──────────────────────

function ResultView({ result }: { result: AuditResult }) {
  const band = BAND_COPY[result.band];
  const host = safeHost(result.finalUrl || result.url);

  const handleShare = async () => {
    const shareUrl = window.location.href;
    track({
      name: "checkit_share_clicked",
      host,
      score: result.totalScore,
    });
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: `CheckIt: ${host} scored ${result.totalScore}/100`,
          text: `${band.label}, ${band.tagline}`,
          url: shareUrl,
        });
        return;
      } catch {
        /* fall through to clipboard */
      }
    }
    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch {
      /* no-op */
    }
  };

  // The three failed checks worth the most points, across all dimensions.
  const fixes = result.dimensions
    .flatMap((d) => d.checks.filter((c) => !c.pass).map((c) => ({ ...c, dim: d.label })))
    .sort((a, b) => b.points - a.points)
    .slice(0, 3);

  return (
    <div>
      <div className="resultcard">
        <div>
          <div className="score">
            {result.totalScore}
            <small>out of 100</small>
          </div>
          <span className="grade">{band.label}</span>
          <p className="serif mt-4 text-lg leading-snug" style={{ color: "var(--text-muted)" }}>
            {band.tagline}
          </p>
          <p className="progress mt-3" style={{ textTransform: "none", letterSpacing: 0 }}>
            {host}
          </p>
          <button onClick={handleShare} className="btn-ghost mt-4" style={{ padding: "0.6rem 1.1rem", fontSize: "0.9rem" }}>
            <Share2 size={14} /> Share result
          </button>
        </div>
        <div className="bars">
          {result.dimensions.map((d) => {
            const pct = d.maxScore > 0 ? Math.round((d.score / d.maxScore) * 100) : 0;
            return (
              <div key={d.id} className="brow">
                <span className="bl">{d.label}</span>
                <div className="track">
                  <div className="fill" style={{ width: `${pct}%` }} />
                </div>
                <span className="bv">{pct}</span>
              </div>
            );
          })}
        </div>
      </div>

      {fixes.length > 0 && (
        <>
          <SectionHead title="Top fixes" className="mt-10" />
          <div className="grid3">
            {fixes.map((f, i) => (
              <div key={f.id} className="card">
                <Tile tint={tintAt(i)} minH={160} bare title={f.label} size="s" />
                <Cap k={`${f.dim} · ${f.points} ${f.points === 1 ? "pt" : "pts"} · high impact`} title={clip(f.detail, 90)} />
              </div>
            ))}
          </div>
        </>
      )}

      <SectionHead title="Every check" className="mt-10" />
      <div className="space-y-3">
        {result.dimensions.map((d) => (
          <DimensionCard key={d.id} dimension={d} />
        ))}
      </div>

      <div className="play mt-10 max-w-3xl">
        <div className="lab">Next</div>
        <p>
          Want to see how the best products got the basics right? northstar has {CASE_STUDY_COUNT}+ case studies on how
          Razorpay, Stripe, Notion and others built products that converted from day one.{" "}
          <Link href="/" className="underline underline-offset-2 font-semibold">
            Browse the library →
          </Link>
        </p>
      </div>

      <div className="mt-8 max-w-2xl">
        <SubscribeForm
          variant="card"
          surface="checkit_result"
          headline="Get a teardown like this every week."
          subhead="Product deep dives on how the best sites get the basics right. Free. No paywall."
        />
      </div>
    </div>
  );
}

function DimensionCard({ dimension }: { dimension: DimensionResult }) {
  const [open, setOpen] = useState(false);
  const config = DIMENSIONS.find((d) => d.id === dimension.id)!;
  const passed = dimension.checks.filter((c) => c.pass).length;
  const total = dimension.checks.length;

  const handleToggle = () => {
    const next = !open;
    setOpen(next);
    if (next) {
      track({ name: "checkit_dimension_expanded", dimension: dimension.id });
    }
  };

  return (
    <div className="vsbox" style={{ cursor: "default", padding: 0 }}>
      <button onClick={handleToggle} className="w-full px-5 py-4 sm:px-6 flex items-center gap-4 text-left" aria-expanded={open}>
        <span className="vs tabular-nums flex-shrink-0" style={{ fontSize: "1.6rem" }}>
          {dimension.score}
          <span style={{ fontSize: "0.55em", color: "var(--text-muted)", fontWeight: 600 }}>/{dimension.maxScore}</span>
        </span>
        <span className="flex-1 min-w-0">
          <span className="block font-bold" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
            {dimension.label}
          </span>
          <span className="m block" style={{ marginTop: 2 }}>
            {config.oneLiner}
          </span>
        </span>
        <span className="progress hidden sm:inline" title="Passed / total checks">
          {passed}/{total}
        </span>
        <ChevronDown
          size={18}
          style={{
            color: "var(--text-muted)",
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform 0.2s",
            flexShrink: 0,
          }}
        />
      </button>

      {open && (
        <div className="px-5 pb-5 sm:px-6 sm:pb-6" style={{ borderTop: "1.5px solid var(--hair)" }}>
          <Section title="Why this matters">
            <p className="serif leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {config.whyItMatters}
            </p>
          </Section>

          <Section title="What we checked">
            <ul className="space-y-3">
              {dimension.checks.map((c) => (
                <li key={c.id} className="flex gap-3">
                  <span
                    className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full grid place-items-center"
                    style={{ background: c.pass ? "var(--tint-mint)" : "var(--brand-soft)" }}
                  >
                    {c.pass ? (
                      <Check size={12} strokeWidth={3} style={{ color: "var(--text-primary)" }} />
                    ) : (
                      <X size={12} strokeWidth={3} style={{ color: "var(--brand-primary)" }} />
                    )}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-sm font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                        {c.label}
                      </span>
                      <span className="progress" title="Points this check is worth">
                        {c.points} {c.points === 1 ? "pt" : "pts"}
                      </span>
                    </span>
                    <span className="serif block text-sm mt-0.5 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {c.detail}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Learn how to fix this">
            <div>
              {config.linkedResources.map((r) => (
                <Link
                  key={r.slug}
                  href={`/${r.type}/${r.slug}`}
                  onClick={() =>
                    track({
                      name: "checkit_resource_clicked",
                      dimension: dimension.id,
                      resource_type: r.type,
                      resource_slug: r.slug,
                    })
                  }
                  className="rellink"
                >
                  {r.title} →
                  <span className="block text-sm font-medium mt-0.5" style={{ color: "var(--text-muted)" }}>
                    {r.hook}
                  </span>
                </Link>
              ))}
            </div>
          </Section>
        </div>
      )}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="pt-5">
      <p className="railhead">{title}</p>
      {children}
    </div>
  );
}
