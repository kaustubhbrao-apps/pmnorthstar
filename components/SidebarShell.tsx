"use client";

import { useState, useEffect } from "react";
import { TopBar } from "@/components/TopBar";

interface SidebarShellProps {
  children: React.ReactNode;
  // Active nav highlight. Pass "" if this route isn't a main nav target.
  activeNav?: string;
  // Kept for call-site compatibility; the top-nav shell no longer renders a
  // back link or a header share control (the wordmark links home, and pages
  // surface their own share where needed).
  backHref?: string;
  backLabelDesktop?: string;
  backLabelMobile?: string;
  shareTitle?: string;
  shareText?: string;
}

// Shared chrome for content pages. Reskinned from the left Sidebar to the
// artifact-style TopBar (publication reskin): a sticky top nav over a
// normally-scrolling document.
export function SidebarShell({ children, activeNav = "" }: SidebarShellProps) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen" style={{ background: "var(--page-bg)" }}>
      <TopBar activeNav={activeNav} isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />
      <main className="scroll-container">{children}</main>
    </div>
  );
}
