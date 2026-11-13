"use client";

// Top navigation: wordmark, primary links (India in brand red, clear active
// underline), a labelled Search pill (circle on small screens), the theme
// circle and a Menu pill holding the secondary surfaces, the library counts
// and — when signed in — Saved / Favourites / Log out. Sticky over the white
// panel, no border. On the homepage the search toggles an inline search row;
// elsewhere it routes to /. onNavChange lets the homepage switch its in-page
// views; elsewhere links route.

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  CASE_STUDY_COUNT,
  COMPARISON_COUNT,
  DRILL_COUNT,
  BOOK_COUNT,
  INDIA_CASE_STUDY_COUNT,
} from "@/data/inventory-counts";

const NAV: { id: string; label: string; href: string; count?: number }[] = [
  { id: "casestudies", label: "Cases", href: "/#casestudies", count: CASE_STUDY_COUNT },
  { id: "india", label: "India", href: "/india", count: INDIA_CASE_STUDY_COUNT },
  { id: "explore", label: "Head-to-Head", href: "/compare", count: COMPARISON_COUNT },
  { id: "simulate", label: "SimulateIt", href: "/simulate", count: DRILL_COUNT },
  { id: "checkit", label: "CheckIt", href: "/checkit" },
  { id: "books", label: "Books", href: "/book", count: BOOK_COUNT },
];

// Surfaces that live behind the Menu pill rather than in the primary row.
const MENU_EXTRA: { label: string; href: string; external?: boolean }[] = [
  { label: "Topics", href: "/topics" },
  { label: "Answers", href: "/answers" },
  { label: "AI Decoded", href: "/ai-decoded" },
  { label: "Playlists", href: "/#learn" },
  { label: "Research · 496 YC homepages audited", href: "/reports/startup-website-audit-2026" },
  { label: "About", href: "/about" },
  { label: "Featured on Product Hunt ↗", href: "https://www.producthunt.com/products/northstar-3", external: true },
];

interface TopBarProps {
  activeNav?: string;
  isDark: boolean;
  onToggleTheme: () => void;
  onNavChange?: (id: string) => void;
  searchQuery?: string;
  onSearchChange?: (v: string) => void;
  onLogin?: () => void;
  onLogout?: () => void;
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
  onLogout,
  isLoggedIn,
}: TopBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // The homepage's default view is the cases front, so "Cases" reads as
  // current there too.
  const current = activeNav === "home" ? "casestudies" : activeNav;

  const go = (id: string) => {
    onNavChange?.(id);
    setMenuOpen(false);
  };

  const openSearch = () => {
    if (onSearchChange) setSearchOpen((o) => !o);
    else window.location.href = "/";
  };

  const navLink = (n: (typeof NAV)[number], withCount = false) => (
    <Link
      key={n.id}
      href={n.href}
      onClick={() => go(n.id)}
      aria-current={current === n.id ? "true" : undefined}
      className={n.id === "india" ? "india" : undefined}
    >
      {n.label}
      {withCount && typeof n.count === "number" && <sup>({n.count})</sup>}
    </Link>
  );

  return (
    <header className="sticky top-0 z-40" style={{ background: "var(--surface-bg)" }}>
      <div className="site-inner nav">
        <Link href="/" onClick={() => go("home")} className="brand" aria-label="pmnorthstar home">
          pm<b>northstar</b>.
        </Link>

        <nav className="navlinks hidden lg:flex items-center flex-wrap" aria-label="Primary">
          {NAV.map((n) => navLink(n))}
        </nav>

        <div className="ctrls">
          <button
            type="button"
            onClick={openSearch}
            aria-label="Search the library"
            aria-expanded={onSearchChange ? searchOpen : undefined}
            className="pillbtn solid hidden md:inline-flex items-center gap-2"
          >
            <Search size={15} strokeWidth={2.2} />
            Search
          </button>
          <button
            type="button"
            onClick={openSearch}
            aria-label="Search the library"
            className="circ solid grid place-items-center md:hidden"
          >
            <Search size={16} strokeWidth={2} />
          </button>
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="pillbtn hidden sm:inline-flex"
            aria-expanded={menuOpen}
          >
            Menu
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="circ grid place-items-center sm:hidden"
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {searchOpen && onSearchChange && (
        <div className="site-inner pb-4">
          <input
            autoFocus
            value={searchQuery ?? ""}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search cases, books, drills, topics…"
            aria-label="Search the library"
            className="w-full"
          />
        </div>
      )}

      {menuOpen && (
        <nav className="site-inner menu-drop" aria-label="More">
          {/* Primary links with their counts; the row above keeps labels only. */}
          <div className="flex flex-col">{NAV.map((n) => navLink(n, true))}</div>
          {MENU_EXTRA.map((m) =>
            m.external ? (
              <a key={m.href} href={m.href} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
                {m.label}
              </a>
            ) : (
              <Link key={m.href} href={m.href} onClick={() => setMenuOpen(false)}>
                {m.label}
              </Link>
            )
          )}
          {isLoggedIn ? (
            <>
              <Link href="/#saved" onClick={() => go("saved")}>
                Saved
              </Link>
              <Link href="/#favourites" onClick={() => go("favourites")}>
                Favourites
              </Link>
              {onLogout && (
                <button
                  type="button"
                  onClick={() => {
                    onLogout();
                    setMenuOpen(false);
                  }}
                  style={{ color: "var(--text-muted)" }}
                >
                  Log out
                </button>
              )}
            </>
          ) : (
            onLogin && (
              <button
                type="button"
                onClick={() => {
                  onLogin();
                  setMenuOpen(false);
                }}
                style={{ color: "var(--brand-primary)" }}
              >
                Log in — only needed to save things
              </button>
            )
          )}
        </nav>
      )}
    </header>
  );
}
