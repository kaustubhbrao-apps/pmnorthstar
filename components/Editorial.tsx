// Editorial UI primitives — the card / pill / section vocabulary from the
// approved artifact, shared by every listing page. Styles live in
// globals.css (.card .vis .cap .pill .datechip .arrow .shead .vsbox …) so
// server and client pages render the same markup. No hooks here, so server
// components can import this directly; pass `onMore` only from client code.

import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

export type Tint = "feature" | "ink" | "mint" | "blush";

// Grid rhythm from the artifact: ink → blush → mint, repeating. `feature`
// (brand red) is reserved for the lead/featured item and placed explicitly.
const TINT_CYCLE: Tint[] = ["ink", "blush", "mint"];
export const tintAt = (i: number): Tint => TINT_CYCLE[((i % 3) + 3) % 3];
export const isDarkTint = (t: Tint) => t === "feature" || t === "ink";

// ── Helpers ───────────────────────────────────────────────────────────────

export function fmtDate(d?: string, year?: number): string {
  if (d) {
    const dt = new Date(d);
    if (!isNaN(dt.getTime())) {
      return dt.toLocaleDateString("en-US", { month: "short", year: "numeric" });
    }
  }
  return year ? String(year) : "";
}

// Word-boundary clip with an ellipsis.
export function clip(s: string | undefined, n = 90): string {
  if (!s) return "";
  if (s.length <= n) return s;
  const cut = s.slice(0, n);
  const at = cut.lastIndexOf(" ");
  return `${(at > n * 0.6 ? cut.slice(0, at) : cut).replace(/[,;:\s]+$/, "")}…`;
}

// "PhonePe vs Paytm — who won UPI" → { a: "PhonePe", b: "Paytm" }.
// Comparisons carry companyA/companyB, but those hold case-study ids
// ("cs-3"), not names — so they're only trusted when they read as names;
// otherwise the pair is parsed out of the title.
const looksLikeId = (s: string) => /^cs-/i.test(s.trim());
export function splitVs(title: string, a?: string, b?: string): { a: string; b: string } {
  if (a && b && !looksLikeId(a) && !looksLikeId(b)) return { a, b };
  const head = title.split(/\s[—–-]\s|:\s/)[0].trim();
  const m = head.match(/^(.+?)\s+vs\.?\s+(.+)$/i);
  return m ? { a: m[1].trim(), b: m[2].trim() } : { a: head, b: "" };
}

// ── Atoms ─────────────────────────────────────────────────────────────────

export function Pill({ children, light, className = "" }: { children: ReactNode; light?: boolean; className?: string }) {
  return <span className={`pill ${light ? "light" : ""} ${className}`.trim()}>{children}</span>;
}

export function DateChip({ children }: { children: ReactNode }) {
  return <span className="datechip">{children}</span>;
}

export function Arrow({ glyph = "↗" }: { glyph?: string }) {
  return (
    <span className="arrow" aria-hidden="true">
      {glyph}
    </span>
  );
}

// ── Card = tinted tile (.vis) + optional caption below (.cap) ─────────────

interface TileProps {
  tint: Tint;
  minH?: number;
  chip?: ReactNode;
  glyph?: string;
  pill?: ReactNode;
  title?: ReactNode;
  dek?: ReactNode;
  size?: "s" | "m" | "l" | "xl" | "2xl";
  // No top row (chip + arrow) — the artifact's "Top fixes" tiles are bare.
  bare?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export function Tile({ tint, minH, chip, glyph, pill, title, dek, size, bare, className = "", style, children }: TileProps) {
  const merged: CSSProperties = {
    ...(minH ? { minHeight: minH } : {}),
    ...(bare ? { paddingTop: 16 } : {}),
    ...style,
  };
  return (
    <div className={`vis ${tint} ${size ? `sz-${size}` : ""} ${className}`.trim()} style={merged}>
      {!bare && (
        <div className="toprow">
          {chip ? <DateChip>{chip}</DateChip> : <span />}
          <Arrow glyph={glyph} />
        </div>
      )}
      {pill && <Pill light={isDarkTint(tint)}>{pill}</Pill>}
      {title && <h3>{title}</h3>}
      {dek && <p className="dek">{dek}</p>}
      {children}
    </div>
  );
}

export function Cap({ k, title }: { k?: ReactNode; title?: ReactNode }) {
  if (!k && !title) return null;
  return (
    <div className="cap">
      {k && <span className="k">{k}</span>}
      {title && <h4>{title}</h4>}
    </div>
  );
}

export function EdCard({
  href,
  children,
  className = "",
  external,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}) {
  const cls = `card ${className}`.trim();
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

// ── Section head: giant italic title + optional count + "more" link ───────

export function SectionHead({
  title,
  count,
  more,
  moreHref,
  onMore,
  right,
  as: As = "h2",
  className = "",
}: {
  title: ReactNode;
  count?: number;
  more?: ReactNode;
  moreHref?: string;
  onMore?: () => void;
  right?: boolean;
  as?: "h1" | "h2";
  className?: string;
}) {
  const moreCls = `more ${right ? "right" : ""}`.trim();
  return (
    <div className={`shead ${className}`.trim()}>
      <As>{title}</As>
      {typeof count === "number" && <span className="count">({count})</span>}
      {more &&
        (moreHref ? (
          <Link href={moreHref} className={moreCls}>
            {more}
          </Link>
        ) : (
          <button type="button" onClick={onMore} className={moreCls}>
            {more}
          </button>
        ))}
    </div>
  );
}

// ── Head-to-Head box ──────────────────────────────────────────────────────

export function VsBox({ a, b, m, href }: { a: string; b: string; m?: ReactNode; href: string }) {
  return (
    <Link href={href} className="vsbox">
      <div className="vs">
        {a}
        {b && (
          <>
            {" "}
            <em>vs</em> {b}
          </>
        )}
      </div>
      {m && <div className="m">{m}</div>}
    </Link>
  );
}

// ── Tool hero (SimulateIt / CheckIt) ──────────────────────────────────────

export function ToolHero({ pill, title, children }: { pill: ReactNode; title: ReactNode; children?: ReactNode }) {
  return (
    <div className="toolhero">
      <Pill>{pill}</Pill>
      <h1>{title}</h1>
      {children && <p>{children}</p>}
    </div>
  );
}

export function BigDiv({ children }: { children: ReactNode }) {
  return <div className="bigdiv">{children}</div>;
}

// ── Physics Wallah exhibit (the artifact's "exhibit-hosting" card) ────────
// FY24 → FY25: revenue ₹1,938cr → ₹2,887cr (+49%); net loss ₹1,131cr → ₹243cr.
// Figures verified against the FY25 financials reported around the Nov 2025 IPO.

export function PwExhibit() {
  return (
    <div className="exwrap">
      <div className="ex-h">Exhibit · Physics Wallah</div>
      <svg
        viewBox="0 0 640 300"
        style={{ width: "100%", height: "auto", fontFamily: "inherit" }}
        role="img"
        aria-label="Revenue grew from 1,938 to 2,887 crore rupees; net loss shrank from 1,131 to 243 crore."
      >
        <line x1="90" y1="250" x2="610" y2="250" stroke="var(--ink-border)" strokeWidth="3" />
        <rect x="150" y="110" width="72" height="140" fill="var(--text-primary)" />
        <text x="186" y="100" textAnchor="middle" fontSize="14" fontWeight="800" fill="var(--text-primary)">₹1,938cr</text>
        <rect x="230" y="168" width="72" height="82" fill="var(--brand-primary)" />
        <text x="266" y="158" textAnchor="middle" fontSize="14" fontWeight="800" fill="var(--brand-primary)">₹1,131cr</text>
        <text x="226" y="274" textAnchor="middle" fontSize="15" fontWeight="800" fill="var(--text-primary)">FY24</text>
        <rect x="370" y="40" width="72" height="210" fill="var(--text-primary)" />
        <text x="406" y="30" textAnchor="middle" fontSize="14" fontWeight="800" fill="var(--text-primary)">₹2,887cr</text>
        <rect x="450" y="232" width="72" height="18" fill="var(--brand-primary)" />
        <text x="486" y="224" textAnchor="middle" fontSize="14" fontWeight="800" fill="var(--brand-primary)">₹243cr</text>
        <text x="446" y="274" textAnchor="middle" fontSize="15" fontWeight="800" fill="var(--text-primary)">FY25</text>
      </svg>
    </div>
  );
}

export const PW_ID = "cs-197";
