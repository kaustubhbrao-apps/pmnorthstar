// Editorial UI primitives — the card / pill / section vocabulary from the
// approved artifact, shared by every listing page. Styles live in
// globals.css (.card .vis .cap .pill .datechip .arrow .shead .vsbox …) so
// server and client pages render the same markup. No hooks here, so server
// components can import this directly; pass `onMore` only from client code.

import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { TileImg, TileMark } from "@/components/TileImg";
import { getCompanyLogoUrl } from "@/data/companyDomains";

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

// Open Library serves -S/-M/-L renditions; the data stores -M (180px). Tiles
// are wider than that, so ask for the large one.
export const bookCover = (url?: string | null): string | null =>
  url ? url.replace(/-M\.jpg(\?.*)?$/, "-L.jpg") : null;

// "Physics Wallah" → "PW", "Adyen" → "A", "The Honest Company" → "HC".
// The monogram is the brand-mark fallback on case-study tiles, so every
// case carries an identity the way every book carries its cover.
const STOP = new Set(["the", "a", "an", "of", "and", "&", "inc", "inc.", "ltd", "co", "co."]);
export function monogramOf(name: string): string {
  const words = name
    .replace(/[()]/g, " ")
    .split(/[\s/\-–—]+/)
    .filter((w) => w && !STOP.has(w.toLowerCase()));
  if (words.length === 0) return name.slice(0, 2).toUpperCase();
  if (words.length === 1) {
    const w = words[0];
    // CamelCase brands keep both humps: "PhonePe" → "PP", "DoorDash" → "DD".
    const humps = w.match(/[A-Z]/g);
    return humps && humps.length >= 2 ? humps.slice(0, 2).join("") : w.slice(0, 1).toUpperCase();
  }
  return words
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
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
  // Optional image, blended into the tint as a duotone (see .vis-img).
  // "cover" fills the tile (photos, covers, thumbnails); "mark" sets a big
  // brand mark bleeding off the right edge.
  img?: string | null;
  imgMode?: "cover" | "mark";
  // Company name → brand-mark sticker (logo, or monogram fallback). The
  // case-study equivalent of a book tile showing its cover.
  brand?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export function Tile({ tint, minH, chip, glyph, pill, title, dek, size, bare, img, imgMode = "cover", brand, className = "", style, children }: TileProps) {
  const merged: CSSProperties = {
    ...(minH ? { minHeight: minH } : {}),
    ...(bare ? { paddingTop: 16 } : {}),
    ...style,
  };
  return (
    <div className={`vis ${tint} ${size ? `sz-${size}` : ""} ${img ? "has-img" : ""} ${brand ? "has-mark" : ""} ${className}`.trim()} style={merged}>
      {img && <TileImg src={img} mode={imgMode} />}
      {brand && <TileMark src={getCompanyLogoUrl(brand)} monogram={monogramOf(brand)} label={brand} />}
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

// ── FAQ list: native <details> accordions, no JS, first one open ─────────

export function FaqList({
  faqs,
  title = "Frequently asked",
  sub,
  openFirst = true,
  className = "",
}: {
  faqs: { question: string; answer: string }[];
  title?: ReactNode;
  sub?: ReactNode;
  openFirst?: boolean;
  className?: string;
}) {
  if (!faqs || faqs.length === 0) return null;
  return (
    <section className={className}>
      <SectionHead title={title} count={faqs.length} />
      {sub && <p className="shead-sub">{sub}</p>}
      {faqs.map((f, i) => (
        <details key={i} className="faq" open={openFirst && i === 0}>
          <summary>
            <span>{f.question}</span>
            <span className="faq-x" aria-hidden="true" />
          </summary>
          <div className="a">{f.answer}</div>
        </details>
      ))}
    </section>
  );
}

// ── Comparison table (Head-to-Head reading page) ──────────────────────────

export function CmpTable({ a, b, rows }: { a: string; b: string; rows: { label: string; a: string; b: string }[] }) {
  return (
    <div className="cmp" role="table" aria-label={`${a} versus ${b}, side by side`}>
      <div className="row head" role="row">
        <div role="columnheader" />
        <div role="columnheader">{a}</div>
        <div role="columnheader">{b}</div>
      </div>
      {rows.map((r, i) => (
        <div key={i} className="row" role="row">
          <div className="lab" role="rowheader">
            {r.label}
          </div>
          <div role="cell" data-h={a}>
            {r.a}
          </div>
          <div role="cell" data-h={b}>
            {r.b}
          </div>
        </div>
      ))}
    </div>
  );
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
