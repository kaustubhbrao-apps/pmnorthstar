"use client";

// Artifact-style top navigation (publication reskin): a sticky white bar with
// the pmnorthstar wordmark, horizontal nav, search + theme + mobile menu.
// Replaces the left Sidebar across the site. onNavChange lets the homepage
// switch its in-page views; everywhere else the links just route.

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const NAV = [
  { id: "casestudies", label: "Cases", href: "/" },
  { id: "india", label: "India", href: "/india" },
  { id: "explore", label: "Head-to-Head", href: "/compare" },
  { id: "ai-decoded", label: "AI Decoded", href: "/ai-decoded" },
  { id: "simulate", label: "SimulateIt", href: "/simulate" },
  { id: "checkit", label: "CheckIt", href: "/checkit" },
  { id: "learn", label: "Books", href: "/book" },
];

interface TopBarProps {
  activeNav?: string;
  isDark: boolean;
  onToggleTheme: () => void;
  /** Homepage passes its view setter so nav clicks switch in-page views. */
  onNavChange?: (id: string) => void;
  /** When provided, renders a live search box (homepage). */
  searchQuery?: string;
  onSearchChange?: (v: string) => void;
  /** When provided and signed-out, renders a Log in button. */
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
  const [open, setOpen] = useState(false);

  const linkStyle = (id: string): React.CSSProperties => ({
    fontFamily: "var(--font-display)",
    color: activeNav === id ? "var(--brand-primary)" : "var(--text-primary)",
    borderBottom: `2px solid ${activeNav === id ? "var(--brand-primary)" : "transparent"}`,
    paddingBottom: 2,
  });

  return (
    <header
      className="sticky top-0 z-40"
      style={{ background: "var(--nav-bg)", borderBottom: "2px solid var(--card-border)" }}
    >
      <div className="mx-auto max-w-[1500px] flex items-center gap-4 px-4 sm:px-6 py-3">
        <Link href="/" className="flex-shrink-0" onClick={() => onNavChange?.("home")}>
          <span
            className="text-xl font-extrabold italic tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)", letterSpacing: "-0.02em" }}
          >
            pm<span style={{ color: "var(--brand-primary)" }}>northstar</span>.
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-5 ml-2">
          {NAV.map((n) => (
            <Link
              key={n.id}
              href={n.href}
              onClick={() => onNavChange?.(n.id)}
              className="text-sm font-semibold whitespace-nowrap hover:opacity-70"
              style={linkStyle(n.id)}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 flex-shrink-0">
          {onSearchChange ? (
            <div
              className="hidden sm:flex items-center gap-2 rounded-full px-3 h-9"
              style={{ border: "1.5px solid var(--card-border)" }}
            >
              <Search size={15} strokeWidth={1.8} style={{ color: "var(--text-muted)" }} />
              <input
                value={searchQuery ?? ""}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search"
                aria-label="Search the library"
                className="bg-transparent outline-none text-sm w-28 lg:w-40"
                style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
              />
            </div>
          ) : (
            <Link
              href="/"
              aria-label="Search"
              onClick={() => onNavChange?.("home")}
              className="w-9 h-9 rounded-full grid place-items-center"
              style={{ border: "1.5px solid var(--card-border)", color: "var(--text-primary)" }}
            >
              <Search size={16} strokeWidth={1.8} />
            </Link>
          )}
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          {onLogin && !isLoggedIn && (
            <button
              onClick={onLogin}
              className="hidden sm:inline-flex items-center rounded-full px-3.5 h-9 text-sm font-bold"
              style={{ border: "1.5px solid var(--card-border)", color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
            >
              Log in
            </button>
          )}
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden w-9 h-9 rounded-full grid place-items-center"
            style={{ border: "1.5px solid var(--card-border)", color: "var(--text-primary)" }}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="lg:hidden px-4 sm:px-6 pb-3 flex flex-col"
          style={{ borderTop: "1.5px solid var(--card-border)" }}
        >
          {NAV.map((n) => (
            <Link
              key={n.id}
              href={n.href}
              onClick={() => {
                onNavChange?.(n.id);
                setOpen(false);
              }}
              className="py-2.5 text-sm font-semibold"
              style={{
                fontFamily: "var(--font-display)",
                color: activeNav === n.id ? "var(--brand-primary)" : "var(--text-primary)",
              }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
