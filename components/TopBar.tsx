"use client";

// Artifact-style top navigation (publication reskin): sticky bar with the
// pmnorthstar wordmark, nav with superscript counts, a solid circle search,
// the theme toggle and a Menu pill. Replaces the left sidebar site-wide.
// onNavChange lets the homepage switch its in-page views; elsewhere links route.

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CASE_STUDY_COUNT, COMPARISON_COUNT, DRILL_COUNT, BOOK_COUNT } from "@/data/inventory-counts";

const NAV: { id: string; label: string; href: string; count?: number }[] = [
  { id: "casestudies", label: "Cases", href: "/", count: CASE_STUDY_COUNT },
  { id: "india", label: "India", href: "/india" },
  { id: "explore", label: "Head-to-Head", href: "/compare", count: COMPARISON_COUNT },
  { id: "simulate", label: "SimulateIt", href: "/simulate", count: DRILL_COUNT },
  { id: "checkit", label: "CheckIt", href: "/checkit" },
  { id: "learn", label: "Books", href: "/book", count: BOOK_COUNT },
];

interface TopBarProps {
  activeNav?: string;
  isDark: boolean;
  onToggleTheme: () => void;
  onNavChange?: (id: string) => void;
  searchQuery?: string;
  onSearchChange?: (v: string) => void;
  onLogin?: () => void;
  isLoggedIn?: boolean;
}

export function TopBar({
  activeNav = "",
  isDark,
  onToggleTheme,
  onNavChange,
  searchQuery,
  onSearchChange,
  onLogin,
  isLoggedIn,
}: TopBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const linkStyle = (id: string): React.CSSProperties => ({
    fontFamily: "var(--font-display)",
    color: activeNav === id ? "var(--brand-primary)" : "var(--text-primary)",
  });

  return (
    <header
      className="sticky top-0 z-40"
      style={{ background: "var(--nav-bg)", borderBottom: "2px solid var(--card-border)" }}
    >
      <div className="mx-auto max-w-[1500px] flex items-center gap-4 px-4 sm:px-6 py-3.5">
        <Link href="/" onClick={() => onNavChange?.("home")} className="flex-shrink-0">
          <span
            className="text-2xl font-extrabold italic tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)", letterSpacing: "-0.03em" }}
          >
            pm<span style={{ color: "var(--brand-primary)" }}>northstar</span>.
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 ml-4">
          {NAV.map((n) => (
            <Link
              key={n.id}
              href={n.href}
              onClick={() => onNavChange?.(n.id)}
              className="relative text-[0.95rem] font-semibold whitespace-nowrap hover:opacity-70"
              style={linkStyle(n.id)}
            >
              {n.label}
              {typeof n.count === "number" && (
                <sup className="ml-0.5 text-[0.62em] font-semibold" style={{ color: "var(--text-muted)" }}>
                  ({n.count})
                </sup>
              )}
              {activeNav === n.id && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px]" style={{ background: "var(--brand-primary)" }} />
              )}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2.5 flex-shrink-0">
          <button
            onClick={() => {
              if (onSearchChange) setSearchOpen((o) => !o);
              else window.location.href = "/";
            }}
            aria-label="Search"
            className="w-11 h-11 rounded-full grid place-items-center"
            style={{ background: "var(--text-primary)", color: "var(--nav-bg)" }}
          >
            <Search size={17} strokeWidth={2} />
          </button>
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="rounded-full px-4 h-11 text-sm font-semibold hidden sm:inline-flex items-center"
            style={{ border: "1.5px solid var(--card-border)", color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
            aria-expanded={menuOpen}
          >
            Menu
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="sm:hidden w-11 h-11 rounded-full grid place-items-center"
            style={{ border: "1.5px solid var(--card-border)", color: "var(--text-primary)" }}
            aria-label="Menu"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {searchOpen && onSearchChange && (
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 pb-3">
          <input
            autoFocus
            value={searchQuery ?? ""}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search books, authors, topics…"
            aria-label="Search the library"
            className="w-full rounded-full px-5 py-2.5 text-base outline-none"
            style={{ border: "1.5px solid var(--card-border)", background: "var(--card-bg)", color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
          />
        </div>
      )}

      {menuOpen && (
        <nav className="px-4 sm:px-6 pb-3 flex flex-col" style={{ borderTop: "1.5px solid var(--card-border)" }}>
          {NAV.map((n) => (
            <Link
              key={n.id}
              href={n.href}
              onClick={() => {
                onNavChange?.(n.id);
                setMenuOpen(false);
              }}
              className="py-2.5 text-sm font-semibold"
              style={linkStyle(n.id)}
            >
              {n.label}
              {typeof n.count === "number" && (
                <sup className="ml-0.5 text-[0.62em]" style={{ color: "var(--text-muted)" }}>({n.count})</sup>
              )}
            </Link>
          ))}
          {onLogin && !isLoggedIn && (
            <button
              onClick={() => {
                onLogin();
                setMenuOpen(false);
              }}
              className="py-2.5 text-sm font-semibold text-left"
              style={{ fontFamily: "var(--font-display)", color: "var(--brand-primary)" }}
            >
              Log in
            </button>
          )}
        </nav>
      )}
    </header>
  );
}
