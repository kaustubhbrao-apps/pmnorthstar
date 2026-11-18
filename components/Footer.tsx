"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const navLinks: Array<{ label: string; href: string }> = [
  { label: "Books", href: "/book" },
  { label: "Case studies", href: "/#casestudies" },
  { label: "Answers", href: "/answers" },
  { label: "Topics", href: "/topics" },
  { label: "Compare", href: "/compare" },
  { label: "Playlists", href: "/#playlists" },
  { label: "AI Decoded", href: "/ai-decoded" },
  { label: "SimulateIt", href: "/simulate" },
  { label: "CheckIt", href: "/checkit" },
  { label: "Research", href: "/reports/startup-website-audit-2026" },
  { label: "India", href: "/india" },
  { label: "About", href: "/about" },
];

const metaLinks: Array<{ label: string; href: string }> = [
  { label: "Newsletter", href: "https://pmnorthstar.substack.com" },
  { label: "Privacy", href: "/privacy" },
  { label: "Sitemap", href: "/sitemap.xml" },
  { label: "Robots", href: "/robots.txt" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="pt-10 sm:pt-14 pb-8 mt-10"
      style={{ borderTop: "1.5px solid var(--hair)" }}
    >
      <div className="site-inner">
        {/* Top row: wordmark + nav */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-sm">
            <span className="brand" style={{ fontSize: "1.25rem" }}>
              pm<b>northstar</b>.
            </span>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              Free, curated library for product managers, founders, and operators. Hand-picked. No paywall.
            </p>
            <a
              href="https://practicearea.co.in"
              target="_blank"
              rel="noopener"
              className="text-sm inline-flex items-center gap-1 transition-colors hover:opacity-80"
              style={{ color: "var(--text-muted)" }}
            >
              Also by the maker: PracticeArea — free CBSE Class 10 practice
              <ArrowUpRight size={11} strokeWidth={1.8} />
            </a>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-2 sm:gap-y-3">
            <div className="flex flex-col gap-2">
              <p
                className="text-sm font-semibold uppercase tracking-wider mb-1"
                style={{ color: "var(--text-faint)" }}
              >
                Browse
              </p>
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-sm transition-colors hover:opacity-80"
                  style={{ color: "var(--text-muted)" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <p
                className="text-sm font-semibold uppercase tracking-wider mb-1"
                style={{ color: "var(--text-faint)" }}
              >
                More
              </p>
              {metaLinks.map((l) => {
                const isExternal = l.href.startsWith("http");
                return isExternal ? (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm inline-flex items-center gap-1 transition-colors hover:opacity-80"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {l.label}
                    <ArrowUpRight size={11} strokeWidth={1.8} />
                  </a>
                ) : (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="text-sm transition-colors hover:opacity-80"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom: small print */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-6"
          style={{ borderTop: "1.5px solid var(--card-border)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-faint)" }}>
            © {year} northstar · curated by Kaustubh Bhalerao for the product community
          </p>
          <p className="text-xs" style={{ color: "var(--text-faint)" }}>
            Amazon affiliate links help fund the work. No paywall, ever.
          </p>
        </div>
      </div>
    </footer>
  );
}
