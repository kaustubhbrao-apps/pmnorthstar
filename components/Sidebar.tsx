"use client";

import Link from "next/link";
import { Home, BookMarked, Star, FlameIcon, GraduationCap, MapPin, Layers, X, Sparkles, Gauge, Brain, Trophy, ArrowUpRight, Users } from "lucide-react";
import {
  CASE_STUDY_COUNT,
  BOOK_COUNT,
  PLAYLIST_COUNT,
  TOPIC_COUNT,
  COMPARISON_COUNT,
} from "@/data/inventory-counts";

interface SidebarProps {
  activeNav: string;
  onNavChange: (nav: string) => void;
  savedCount?: number;
  favouriteCount?: number;
  isOpen?: boolean;
  onClose?: () => void;
}

const primaryNav = [
  { id: "home",         label: "Home",         icon: Home,           count: BOOK_COUNT },
  { id: "casestudies",  label: "Case Studies", icon: FlameIcon,      count: CASE_STUDY_COUNT },
  { id: "learn",        label: "Learn",        icon: GraduationCap,  count: PLAYLIST_COUNT },
  { id: "explore",      label: "Explore",      icon: Layers,         count: TOPIC_COUNT + COMPARISON_COUNT },
];

export function Sidebar({
  activeNav,
  onNavChange,
  savedCount = 0,
  favouriteCount = 0,
  isOpen = false,
  onClose,
}: SidebarProps) {
  const handleNavClick = (nav: string) => {
    onNavChange(nav);
    onClose?.();
  };

  const NavLink = ({
    id,
    label,
    icon: Icon,
    count,
  }: {
    id: string;
    label: string;
    icon: any;
    count: number | null;
  }) => {
    const active = activeNav === id;
    // Map internal nav IDs to the hash fragments used on the home page
    const href = id === "home" ? "/" : `/#${id}`;
    
    return (
      <Link
        href={href}
        onClick={(e) => {
          // If we're already on the home page, let the standard hash 
          // navigation / onNavChange handle it. If not, the Link will 
          // navigate to /#id and onNavChange will fire after mount.
          onNavChange(id);
          onClose?.();
        }}
        className={`nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm ${active ? "active" : ""}`}
      >
        <Icon size={15} strokeWidth={1.6} />
        <span style={{ letterSpacing: "-0.005em" }}>{label}</span>
        {count !== null && count > 0 && (
          <span
            className="ml-auto font-mono"
            style={{
              fontSize: "10px",
              letterSpacing: "0.06em",
              color: active ? "rgba(255,255,255,0.7)" : "var(--text-faint)",
            }}
          >
            {String(count).padStart(2, "0")}
          </span>
        )}
      </Link>
    );
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-[150] bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`flex flex-col h-full w-56 flex-shrink-0 py-6 px-3 fixed top-0 left-0 lg:static z-[200] transition-transform duration-200 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        style={{ background: "var(--sidebar-bg)", borderRight: "1.5px solid var(--sidebar-border)" }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-3 p-1.5 rounded-lg lg:hidden"
          style={{ color: "var(--text-muted)" }}
        >
          <X size={18} />
        </button>

        {/* Logo */}
        <div className="px-3 mb-8">
          <div className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "var(--brand-primary)" }}
            >
              <Star size={13} className="text-white fill-white" strokeWidth={1.5} />
            </div>
            <div className="flex items-baseline gap-0.5">
              <span className="font-display text-[16px] font-bold tracking-tight" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>north</span>
              <span className="font-display text-[16px] font-bold tracking-tight" style={{ color: "var(--brand-primary)", letterSpacing: "-0.02em" }}>star</span>
            </div>
          </div>
          <p className="text-sm mt-2 ml-0.5" style={{ color: "var(--text-faint)" }}>PM resources, curated</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-0.5 overflow-y-auto scroll-container">
          <p className="text-sm font-medium px-3 mb-2 uppercase tracking-wider" style={{ color: "var(--text-faint)" }}>Navigate</p>

          {primaryNav.map((item) => (
            <NavLink key={item.id} {...item} />
          ))}

          {/* India — separate Link because it's a different route (not a tab) */}
          <Link
            href="/india"
            onClick={onClose}
            className={`nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm ${activeNav === "india" ? "active" : ""}`}
          >
            <MapPin size={15} strokeWidth={1.6} />
            <span style={{ letterSpacing: "-0.005em" }}>India</span>
          </Link>

          {/* AI Decoded — editorial section on AI launches + tools */}
          <Link
            href="/ai-decoded"
            onClick={onClose}
            className={`nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm ${activeNav === "ai-decoded" ? "active" : ""}`}
          >
            <Sparkles size={15} strokeWidth={1.6} />
            <span style={{ letterSpacing: "-0.005em" }}>AI Decoded</span>
          </Link>

          {/* CheckIt — site readiness scorecard. Its own destination
              since it's a tool, not a library section. */}
          <Link
            href="/checkit"
            onClick={onClose}
            className={`nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm ${activeNav === "checkit" ? "active" : ""}`}
          >
            <Gauge size={15} strokeWidth={1.6} />
            <span style={{ letterSpacing: "-0.005em" }}>CheckIt</span>
          </Link>

          {/* SimulateIt — decision-practice drills. NEW badge while it's
              the newest tool in the family. */}
          <Link
            href="/simulate"
            onClick={onClose}
            className={`nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm ${activeNav === "simulate" ? "active" : ""}`}
          >
            <Brain size={15} strokeWidth={1.6} />
            <span style={{ letterSpacing: "-0.005em" }}>SimulateIt</span>
            <span
              className="ml-auto text-xs font-semibold px-1.5 py-0.5 rounded"
              style={{
                background: activeNav === "simulate" ? "rgba(255, 255, 255, 0.25)" : "rgba(219, 39, 119, 0.18)",
                color: activeNav === "simulate" ? "#ffffff" : "#DB2777",
              }}
            >
              NEW
            </span>
          </Link>

          {/* Simulation League — The Hype Page */}
          <Link
            href="/league"
            onClick={onClose}
            className={`nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm ${activeNav === "league" ? "active" : ""}`}
            style={{
              background: activeNav === "league" ? "rgba(250, 204, 21, 0.1)" : "transparent",
            }}
          >
            <Trophy size={15} strokeWidth={1.8} style={{ color: "#FACC15" }} />
            <span style={{ letterSpacing: "-0.005em", color: activeNav === "league" ? "#FACC15" : "inherit" }}>
              Simulation League
            </span>
          </Link>

          <div className="pt-5">
            <p className="text-sm font-medium px-3 mb-2 uppercase tracking-wider" style={{ color: "var(--text-faint)" }}>Collections</p>
            
            <Link href="/for/product-managers" onClick={onClose} className={`nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm ${activeNav === "product-managers" ? "active" : ""}`}>
              <Users size={15} strokeWidth={1.6} />
              <span style={{ letterSpacing: "-0.005em" }}>Product Managers</span>
            </Link>
            <Link href="/for/founders" onClick={onClose} className={`nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm ${activeNav === "founders" ? "active" : ""}`}>
              <Users size={15} strokeWidth={1.6} />
              <span style={{ letterSpacing: "-0.005em" }}>Founders</span>
            </Link>
          </div>

          <div className="pt-5">
            <p className="text-sm font-medium px-3 mb-2 uppercase tracking-wider" style={{ color: "var(--text-faint)" }}>Library</p>

            <NavLink
              id="saved"
              label="Saved"
              icon={BookMarked}
              count={savedCount > 0 ? savedCount : null}
            />
            <NavLink
              id="favourites"
              label="Favourites"
              icon={Star}
              count={favouriteCount > 0 ? favouriteCount : null}
            />
          </div>
        </nav>

        {/* Footer mark & Product Hunt Backlink */}
        <div className="px-3 pt-4 pb-2" style={{ borderTop: "1.5px solid var(--sidebar-border)" }}>
          <a
            href="https://www.producthunt.com/products/northstar-3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mb-3 px-2.5 py-2 rounded-lg transition-transform hover:-translate-y-0.5 shadow-sm"
            style={{ background: "#DA552F", color: "#ffffff" }}
          >
            <div className="flex flex-col flex-1">
              <span className="text-[9px] font-bold uppercase tracking-widest opacity-90 leading-none mb-1">Featured on</span>
              <span className="text-[13px] font-bold leading-none tracking-tight">Product Hunt</span>
            </div>
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0" style={{ color: "#DA552F" }}>
              <ArrowUpRight size={12} strokeWidth={3} />
            </div>
          </a>
          <p className="text-xs" style={{ color: "var(--text-faint)" }}>v3 public beta</p>
        </div>
      </aside>
    </>
  );
}
