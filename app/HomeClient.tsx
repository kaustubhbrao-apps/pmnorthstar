"use client";

import { useState, useMemo, useEffect } from "react";
import {
  books,
  categories,
  getFeaturedBooks,
} from "@/data/books";
import {
  publishedCaseStudiesLite as publishedCaseStudies,
  getCaseStudiesByCategoryLite as getCaseStudiesByCategory,
} from "@/data/caseStudiesLite";
import type { CaseStudyCategory } from "@/data/caseStudies";
import {
  playlists,
  northstarPlaylists,
  learnCategories,
  getPlaylistsByCategory,
  learnCategoryColors,
  LearnFilter,
} from "@/data/learn";
import { Sidebar } from "@/components/Sidebar";
import { TopNav } from "@/components/TopNav";
import { TopBar } from "@/components/TopBar";
import { SaveButton } from "@/components/SaveButton";
import { ResourceCard } from "@/components/ResourceCard";
import { SectionRow } from "@/components/SectionRow";
import { EditorialHome } from "@/components/EditorialHome";
import { EdCard, Tile, Cap, SectionHead, VsBox, fmtDate, clip, tintAt, splitVs } from "@/components/Editorial";
import { getCaseStudySlug } from "@/data/caseStudySlugs";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { PlaylistCard } from "@/components/PlaylistCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MobileNav } from "@/components/MobileNav";
import { SubscribeForm } from "@/components/SubscribeForm";
import { AuthModal } from "@/components/AuthModal";
import { useUserStateContext } from "@/components/UserStateProvider";
import { Footer } from "@/components/Footer";
import { publishedTopics } from "@/data/topics";
import { publishedComparisons } from "@/data/comparisons";
// Lite twin — the full answers.ts carries 40 pre-rendered bodyHtml blobs
// and this is a client component, so importing it here would ship them all.
import { publishedAnswersLite } from "@/data/answersLite";
import { YC_STUDY_SUMMARY as YC } from "@/data/yc-study-summary";
import { DRILL_COUNT } from "@/data/inventory-counts";
// Type-only: the search itself runs server-side via /api/search, so none of
// the corpora it matches against are imported here.
import type { SearchResults } from "@/lib/search";
import { publishedAIDecoded } from "@/data/aiDecodedManifest";
import Link from "next/link";
import {
  TrendingUp,
  TrendingDown,
  LogOut,
  Bookmark,
  Heart,
  Menu,
  Star,
  GraduationCap,
  ArrowUpRight,
  Sparkles,
  ArrowLeft,
} from "lucide-react";

const caseStudyCategoryColors: Record<string, string> = {
  Product: "#9B8FFF",
  Growth: "#FF6B35",
  Strategy: "#F5C842",
  Design: "#50C878",
  Failure: "#FF4B4B",
};

export default function HomeClient() {
  // Scheduled (future-dated) content is hidden from every home surface so we
  // never render a card or search hit that links to a still-gated page. No
  // publish date = always live. useMemo keeps array refs stable across
  // renders so downstream useMemos don't thrash.
  const caseStudies = useMemo(() => publishedCaseStudies(), []);
  const topics = useMemo(() => publishedTopics(), []);
  const comparisons = useMemo(() => publishedComparisons(), []);
  const aiDecodedManifest = useMemo(() => publishedAIDecoded(), []);
  const answers = useMemo(() => publishedAnswersLite(), []);

  // Lazy-init from localStorage so the home page doesn't flash light
  // when a user navigates here from a dark-mode page. SSR-safe: the
  // typeof check returns false on the server (initial HTML is light),
  // and the inline script in app/layout.tsx already sets data-theme on
  // the <html> tag before React hydrates, so there's no visible flash.
  // Init false so server and client first render match — reading localStorage
  // in the initializer makes the theme-toggle icon differ across the hydration
  // boundary (a <circle> in the Sun SVG), which throws a hydration error. The
  // inline script in app/layout.tsx already set data-theme pre-paint, so we
  // read the saved value after mount and only then start writing it back.
  const [isDark, setIsDark] = useState(false);
  const [themeReady, setThemeReady] = useState(false);

  useEffect(() => {
    setIsDark(localStorage.getItem("theme") === "dark");
    setThemeReady(true);
  }, []);

  useEffect(() => {
    if (!themeReady) return;
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark, themeReady]);
  // Auth + saved/liked come from the shared UserStateProvider (app/layout.tsx).
  // This component used to fetch /api/auth/me, /api/saved and /api/liked
  // itself, duplicating what all 53 SmartSaveButtons on this page were each
  // doing independently.
  //
  // The old localhost bypass that faked a signed-in user in development is
  // gone. It only ever applied here, so in dev the header thought you were
  // logged in while every card on the same page (doing a real auth check)
  // thought you were not. Dev now performs the same real check as production.
  const {
    user,
    loading: authLoading,
    savedIds,
    likedIds,
    markSaved: handleSavedChange,
    markLiked: handleLikedChange,
    logout: handleLogout,
    refresh: refreshUserState,
  } = useUserStateContext();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCsFilter, setActiveCsFilter] = useState<CaseStudyCategory>("All");
  const [activeLearnFilter, setActiveLearnFilter] = useState<LearnFilter>("All");
  const [activeBookFilter, setActiveBookFilter] = useState<string>("All");

  // Read ?q= query param on mount to instantly trigger search mode
  // (e.g. from tag clicks on detail pages).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    if (q) setSearchQuery(q);
  }, []);

  // When navigated in from another route (e.g. /india) with a hash like
  // #casestudies, set the active tab on mount so the right view loads.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const valid = ["home", "casestudies", "learn", "explore", "saved", "favourites"];
    const hash = window.location.hash.replace("#", "");
    if (hash && valid.includes(hash)) setActiveNav(hash);
  }, []);

  // Featured list, reordered so no two adjacent cards share an author.
  // Greedy: at each step, pick the first remaining item whose author
  // differs from the previously placed one.
  const featured = (() => {
    const items = getFeaturedBooks();
    const result: typeof items = [];
    const remaining = [...items];
    while (remaining.length > 0) {
      const lastAuthor = result[result.length - 1]?.author;
      const idx = remaining.findIndex((b) => b.author !== lastAuthor);
      result.push(remaining.splice(idx >= 0 ? idx : 0, 1)[0]);
    }
    return result;
  })();

  const bookCategories = useMemo(() => {
    return Array.from(new Set(books.map((b) => b.category))).sort();
  }, []);

  // ─── Search ───────────────────────────────────────────────────────────
  // Runs on the server (/api/search). The homepage previously filtered every
  // dataset in the browser, which meant the whole library — FAQ corpus and
  // build-time searchable blobs included — had to download before a visitor
  // could type. Debounced so a burst of keystrokes is one request, and
  // aborted on change so a slow response can't overwrite a newer one.
  const isSearching = searchQuery.trim() !== "";
  const [searchResults, setSearchResults] = useState<SearchResults | null>(null);
  const [searchPending, setSearchPending] = useState(false);

  useEffect(() => {
    const q = searchQuery.trim();
    if (!q) {
      setSearchResults(null);
      setSearchPending(false);
      return;
    }
    setSearchPending(true);
    const controller = new AbortController();
    const timer = setTimeout(() => {
      fetch(
        `/api/search?q=${encodeURIComponent(q)}&bookCategory=${encodeURIComponent(activeBookFilter)}`,
        { signal: controller.signal }
      )
        .then((r) => r.json())
        .then((data: SearchResults) => {
          setSearchResults(data);
          setSearchPending(false);
        })
        .catch((err) => {
          if (err?.name === "AbortError") return;
          setSearchResults(null);
          setSearchPending(false);
        });
    }, 300);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [searchQuery, activeBookFilter]);

  // Browsing (no query) still filters the local list by category — that data
  // is already here for the shelves. Searching defers to the server.
  const filteredBooks = useMemo(() => {
    if (isSearching) return searchResults?.books ?? [];
    return activeBookFilter === "All"
      ? books
      : books.filter((b) => b.category === activeBookFilter);
  }, [isSearching, searchResults, activeBookFilter]);

  const filteredCaseStudies = useMemo(
    () => getCaseStudiesByCategory(activeCsFilter),
    [activeCsFilter]
  );

  const filteredPlaylists = useMemo(
    () => getPlaylistsByCategory(activeLearnFilter),
    [activeLearnFilter]
  );

  // ── Cross-section search ──────────────────────────────────────────────








  // All five come from the same server response.
  const searchedCaseStudies = searchResults?.caseStudies ?? [];
  const searchedPlaylists = searchResults?.playlists ?? [];
  const searchedTopics = searchResults?.topics ?? [];
  const searchedAIDecoded = searchResults?.aiDecoded ?? [];
  const searchedComparisons = searchResults?.comparisons ?? [];

  const learnStats = useMemo(() => {
    const counts: Record<string, number> = {};
    playlists.forEach((p) => { counts[p.category] = (counts[p.category] || 0) + 1; });
    return counts;
  }, []);

  // heroBook/HeroBanner removed — the editorial magazine front replaced the
  // hero carousel (publication reskin).
  const isFiltered = searchQuery.trim() !== "";

  const csStats = useMemo(() => {
    const counts: Record<string, number> = {};
    caseStudies.forEach((c) => { counts[c.category] = (counts[c.category] || 0) + 1; });
    return counts;
  }, [caseStudies]);

  const shuffledCsCategories = useMemo(() => {
    return Object.entries(csStats).sort(() => Math.random() - 0.5);
  }, [csStats]);

  // ── Featured selection for Home Tab ────────────────────────────────────
  const homeFeaturedCaseStudies = useMemo(() => {
    const cats = Array.from(new Set(caseStudies.map(s => s.category)));
    return cats.map(cat => caseStudies.find(s => s.category === cat)!).filter(Boolean);
  }, [caseStudies]);

  // ── Derived lists (used across views + sidebar counts) ─────────────────
  const savedBooks = books.filter((b) => savedIds.has(b.id) && !likedIds.has(b.id));
  const savedStudies = caseStudies.filter((s) => savedIds.has(s.id) && !likedIds.has(s.id));
  const savedPlaylists = playlists.filter((p) => savedIds.has(p.id) && !likedIds.has(p.id));
  const favouriteBooks = books.filter((b) => likedIds.has(b.id));
  const favouriteStudies = caseStudies.filter((s) => likedIds.has(s.id));
  const favouritePlaylists = playlists.filter((p) => likedIds.has(p.id));

  const savedCount = savedBooks.length + savedStudies.length + savedPlaylists.length;
  const favouriteCount = favouriteBooks.length + favouriteStudies.length + favouritePlaylists.length;

  // ── Saved for Later View ───────────────────────────────────────────────
  if (activeNav === "saved") {
    return (
      <div className="min-h-screen" style={{ background: "var(--page-bg)" }}>
        <TopBar activeNav={activeNav} isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} onNavChange={setActiveNav} />

          <main className="scroll-container mx-auto w-full max-w-[1500px] p-4 sm:p-6 pb-12">
            {!user ? (
              <div className="flex flex-col items-center justify-center py-20">
                <p className="eyebrow mb-3">Sign in required</p>
                <p className="text-base font-semibold" style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}>Sign in to see your saved items</p>
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="btn-accent mt-5"
                >
                  Log In / Sign Up
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h1 className="text-3xl font-bold mb-6" style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}>Saved Items</h1>
                  <div className="flex items-baseline gap-3 mb-4">
                    <p className="eyebrow">Books</p>
                    <span className="text-sm" style={{ color: "var(--text-faint)" }}>{String(savedBooks.length)}</span>
                  </div>
                  {savedBooks.length === 0 ? (
                    <p className="text-sm" style={{ color: "var(--text-faint)" }}>No saved books yet.</p>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {savedBooks.map((book, idx) => (
                        <ResourceCard
                          key={book.id}
                          book={book}
                          index={idx}
                          variant="list"
                          isLoggedIn={!!user}
                          initialSaved={savedIds.has(book.id)}
                          initialLiked={likedIds.has(book.id)}
                          onAuthRequired={() => setShowAuthModal(true)}
                          onSavedChange={handleSavedChange}
                          onLikedChange={handleLikedChange}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-3 mb-4">
                    <p className="eyebrow">Case Studies</p>
                    <span className="text-sm" style={{ color: "var(--text-faint)" }}>{String(savedStudies.length)}</span>
                  </div>
                  {savedStudies.length === 0 ? (
                    <p className="text-sm" style={{ color: "var(--text-faint)" }}>No saved case studies yet.</p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {savedStudies.map((study, idx) => (
                        <CaseStudyCard
                          key={study.id}
                          study={study}
                          index={idx}
                          isLoggedIn={!!user}
                          initialSaved={savedIds.has(study.id)}
                          initialLiked={likedIds.has(study.id)}
                          onAuthRequired={() => setShowAuthModal(true)}
                          onSavedChange={handleSavedChange}
                          onLikedChange={handleLikedChange}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-baseline gap-3 mb-4">
                    <p className="eyebrow">Playlists</p>
                    <span className="text-sm" style={{ color: "var(--text-faint)" }}>{String(savedPlaylists.length)}</span>
                  </div>
                  {savedPlaylists.length === 0 ? (
                    <p className="text-sm" style={{ color: "var(--text-faint)" }}>No saved playlists yet.</p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                      {savedPlaylists.map((playlist, idx) => (
                        <PlaylistCard
                          key={playlist.id}
                          playlist={playlist}
                          index={idx}
                          isLoggedIn={!!user}
                          initialSaved={savedIds.has(playlist.id)}
                          initialLiked={likedIds.has(playlist.id)}
                          onAuthRequired={() => setShowAuthModal(true)}
                          onSavedChange={handleSavedChange}
                          onLikedChange={handleLikedChange}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </main>
        {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} onSuccess={() => refreshUserState()} />}
      </div>
    );
  }

  // ── Favourites View ────────────────────────────────────────────────────
  if (activeNav === "favourites") {
    return (
      <div className="min-h-screen" style={{ background: "var(--page-bg)" }}>
        <TopBar activeNav={activeNav} isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} onNavChange={setActiveNav} />

          <main className="scroll-container mx-auto w-full max-w-[1500px] p-4 sm:p-6 pb-12">
            {!user ? (
              <div className="flex flex-col items-center justify-center py-20">
                <p className="eyebrow mb-3">Sign in required</p>
                <p className="text-base font-semibold" style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}>Sign in to see your favourites</p>
                <button onClick={() => setShowAuthModal(true)} className="btn-accent mt-5">
                  Log In / Sign Up
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h1 className="text-3xl font-bold mb-6" style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}>Favourite Items</h1>
                  <div className="flex items-baseline gap-3 mb-4">
                    <p className="eyebrow">Books</p>
                    <span className="text-sm" style={{ color: "var(--text-faint)" }}>{String(favouriteBooks.length)}</span>
                  </div>
                  {favouriteBooks.length === 0 ? (
                    <p className="text-sm" style={{ color: "var(--text-faint)" }}>No favourite books yet.</p>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {favouriteBooks.map((book, idx) => (
                        <ResourceCard
                          key={book.id}
                          book={book}
                          index={idx}
                          variant="list"
                          isLoggedIn={!!user}
                          initialSaved={savedIds.has(book.id)}
                          initialLiked={likedIds.has(book.id)}
                          onAuthRequired={() => setShowAuthModal(true)}
                          onSavedChange={handleSavedChange}
                          onLikedChange={handleLikedChange}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-3 mb-4">
                    <p className="eyebrow">Case Studies</p>
                    <span className="text-sm" style={{ color: "var(--text-faint)" }}>{String(favouriteStudies.length)}</span>
                  </div>
                  {favouriteStudies.length === 0 ? (
                    <p className="text-sm" style={{ color: "var(--text-faint)" }}>No favourite case studies yet.</p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {favouriteStudies.map((study, idx) => (
                        <CaseStudyCard
                          key={study.id}
                          study={study}
                          index={idx}
                          isLoggedIn={!!user}
                          initialSaved={savedIds.has(study.id)}
                          initialLiked={likedIds.has(study.id)}
                          onAuthRequired={() => setShowAuthModal(true)}
                          onSavedChange={handleSavedChange}
                          onLikedChange={handleLikedChange}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-baseline gap-3 mb-4">
                    <p className="eyebrow">Playlists</p>
                    <span className="text-sm" style={{ color: "var(--text-faint)" }}>{String(favouritePlaylists.length)}</span>
                  </div>
                  {favouritePlaylists.length === 0 ? (
                    <p className="text-sm" style={{ color: "var(--text-faint)" }}>No favourite playlists yet.</p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                      {favouritePlaylists.map((playlist, idx) => (
                        <PlaylistCard
                          key={playlist.id}
                          playlist={playlist}
                          index={idx}
                          isLoggedIn={!!user}
                          initialSaved={savedIds.has(playlist.id)}
                          initialLiked={likedIds.has(playlist.id)}
                          onAuthRequired={() => setShowAuthModal(true)}
                          onSavedChange={handleSavedChange}
                          onLikedChange={handleLikedChange}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </main>
        {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} onSuccess={() => refreshUserState()} />}
      </div>
    );
  }

  // ── Case Studies View ──────────────────────────────────────────────────
  if (activeNav === "casestudies") {
    return (
      <div className="min-h-screen" style={{ background: "var(--page-bg)" }}>
        <TopBar activeNav={activeNav} isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} onNavChange={setActiveNav} />

          <main className="scroll-container">
              <>
                <div className="site-inner pb-16">
                  <SectionHead as="h1" title="All cases" count={filteredCaseStudies.length} />
                  <p className="shead-sub">
                    {caseStudies.length} deep-dives — pivots, growth loops, design bets, hard lessons. Real product wins,
                    and the failures behind them.
                  </p>
                  {/* Filter chips */}
                  <div className="filters">
                    <button onClick={() => setActiveCsFilter("All")} className={`chip ${activeCsFilter === "All" ? "active" : ""}`}>
                      All <span className="chip-count">{caseStudies.length}</span>
                    </button>
                    {shuffledCsCategories.map(([cat, count]) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCsFilter(cat as CaseStudyCategory)}
                        className={`chip ${activeCsFilter === cat ? "active" : ""}`}
                      >
                        {cat} <span className="chip-count">{count}</span>
                      </button>
                    ))}
                  </div>

                  <div className="grid3">
                    {filteredCaseStudies.map((study, idx) => (
                      <EdCard key={study.id} href={`/case-study/${getCaseStudySlug(study.id)}`}>
                        <Tile
                          tint={tintAt(idx)}
                          minH={300}
                          chip={fmtDate(study.publishedAt, study.year)}
                          title={study.title}
                          size="m"
                        />
                        <Cap
                          k={`${study.category} · ${study.region === "India" ? "India" : study.company}`}
                          title={clip(study.outcome, 80)}
                        />
                      </EdCard>
                    ))}
                  </div>
                </div>
                <Footer />
              </>
          </main>
        {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} onSuccess={() => refreshUserState()} />}
      </div>
    );
  }

  // ── Learn View ─────────────────────────────────────────────────────────
  if (activeNav === "learn") {
    return (
      <div className="min-h-screen" style={{ background: "var(--page-bg)" }}>
        <TopBar activeNav={activeNav} isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} onNavChange={setActiveNav} />

          <main className="scroll-container">
              <>
                <div className="site-inner">
                  <SectionHead as="h1" title="Playlists" count={playlists.length} />
                  <p className="shead-sub">
                    Curated YouTube playlists for builders who learn out loud — design, product, data, marketing,
                    branding, startups, finance. One shelf, hand-picked.
                  </p>
                </div>

                {/* ── Powered by northstar — our own interview-prep series ──── */}
                <div className="site-inner pt-2 pb-2">
                  <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                    <span
                      className="inline-block text-sm sm:text-base font-bold uppercase px-2.5 py-1 rounded-md"
                      style={{
                        background: "var(--brand-primary)",
                        color: "#ffffff",
                        letterSpacing: "0.12em",
                      }}
                    >
                      Powered by northstar
                    </span>
                    <span className="font-mono text-sm" style={{ color: "var(--text-faint)" }}>
                      {northstarPlaylists.length} {northstarPlaylists.length === 1 ? "series" : "series"}
                    </span>
                  </div>
                  <p className="text-sm mb-5 max-w-xl" style={{ color: "var(--text-muted)" }}>
                    Original series we make ourselves, on the pmnorthstar YouTube channel — not curated outside playlists.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {northstarPlaylists.map((playlist, idx) => (
                      <PlaylistCard
                        key={playlist.id}
                        playlist={playlist}
                        index={idx}
                        isLoggedIn={!!user}
                        initialSaved={savedIds.has(playlist.id)}
                        initialLiked={likedIds.has(playlist.id)}
                        onAuthRequired={() => setShowAuthModal(true)}
                        onSavedChange={handleSavedChange}
                        onLikedChange={handleLikedChange}
                      />
                    ))}
                  </div>
                </div>

                <div className="site-inner">
                  <div className="mt-6 mb-1" style={{ borderTop: "1.5px solid var(--hair)" }} />
                </div>

                <div className="site-inner py-6">
                  {/* Filter chips */}
                  <div className="filters">
                    <button
                      onClick={() => setActiveLearnFilter("All")}
                      className={`chip ${activeLearnFilter === "All" ? "active" : ""}`}
                    >
                      All <span className="chip-count">{playlists.length}</span>
                    </button>
                    {learnCategories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveLearnFilter(cat)}
                        className={`chip ${activeLearnFilter === cat ? "active" : ""}`}
                      >
                        {cat} <span className="chip-count">{learnStats[cat] || 0}</span>
                      </button>
                    ))}
                  </div>

                  {/* Section heading */}
                  {(() => {
                    const lnColor =
                      activeLearnFilter === "All"
                        ? "var(--brand-primary)"
                        : learnCategoryColors[activeLearnFilter];
                    const lnLabel =
                      activeLearnFilter === "All" ? "All Topics" : activeLearnFilter;
                    return (
                      <div className="flex items-center mb-5">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <span
                            className="inline-block text-sm sm:text-base font-bold uppercase px-2.5 py-1 rounded-md"
                            style={{
                              background: lnColor,
                              color: "#ffffff",
                              letterSpacing: "0.12em",
                            }}
                          >
                            {lnLabel}
                          </span>
                          <span
                            className="font-mono text-sm"
                            style={{ color: "var(--text-faint)" }}
                          >
                            {filteredPlaylists.length} {filteredPlaylists.length === 1 ? "playlist" : "playlists"}
                          </span>
                        </div>
                      </div>
                    );
                  })()}

                  {filteredPlaylists.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                      <GraduationCap size={40} style={{ color: "var(--text-faint)" }} />
                      <p className="text-base font-semibold mt-4" style={{ color: "var(--text-muted)" }}>No playlists yet in this topic</p>
                      <p className="text-sm mt-1" style={{ color: "var(--text-faint)" }}>Check back soon!</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                      {filteredPlaylists.map((playlist, idx) => (
                        <PlaylistCard
                          key={playlist.id}
                          playlist={playlist}
                          index={idx}
                          isLoggedIn={!!user}
                          initialSaved={savedIds.has(playlist.id)}
                          initialLiked={likedIds.has(playlist.id)}
                          onAuthRequired={() => setShowAuthModal(true)}
                          onSavedChange={handleSavedChange}
                          onLikedChange={handleLikedChange}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </>
          </main>
        {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} onSuccess={() => refreshUserState()} />}
      </div>
    );
  }

  // ── Explore View — topics + comparisons aggregator ────────────────────
  if (activeNav === "explore") {
    return (
      <div className="min-h-screen" style={{ background: "var(--page-bg)" }}>
        <TopBar activeNav={activeNav} isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} onNavChange={setActiveNav} />

          <main className="scroll-container">
            <div className="site-inner pb-16">
              <SectionHead as="h1" title="Explore" />
              <p className="shead-sub">
                <strong style={{ color: "var(--text-primary)" }}>Topics</strong> group case studies by theme (Indian
                fintech, super-app failures). <strong style={{ color: "var(--text-primary)" }}>Head-to-heads</strong>{" "}
                put two companies against each other when they share a market.
              </p>

              <SectionHead title="Topics" count={topics.length} more="See all →" moreHref="/topics" />
              <div className="heads">
                {topics.map((t) => (
                  <VsBox
                    key={t.slug}
                    a={t.title}
                    b=""
                    m={`${t.eyebrow} · ${t.caseStudyIds.length} case studies`}
                    href={`/topics/${t.slug}`}
                  />
                ))}
              </div>

              <SectionHead title="Head-to-Head" count={comparisons.length} more="See all →" moreHref="/compare" />
              <div className="heads">
                {comparisons.map((c) => {
                  const { a, b } = splitVs(c.title, c.companyA, c.companyB);
                  return <VsBox key={c.slug} a={a} b={b} m={c.eyebrow} href={`/compare/${c.slug}`} />;
                })}
              </div>
            </div>
            <Footer />
          </main>
        {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} onSuccess={() => refreshUserState()} />}
      </div>
    );
  }

  // ── Main Home View ─────────────────────────────────────────────────────
  return (
    <div className="min-h-screen" style={{ background: "var(--page-bg)" }}>
      <TopBar
        activeNav={activeNav}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        onNavChange={setActiveNav}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onLogin={() => setShowAuthModal(true)}
        isLoggedIn={!!user}
      />

        {/* User bar — hidden on mobile when not logged in (microcopy
            adds a clutter row on small screens for no real value).
            Stays visible on mobile when logged in (saved/fav shortcuts
            are useful). */}
        <div
          className={`${user ? "flex" : "hidden"} site-inner flex-wrap items-center justify-between gap-2 py-2`}
          style={{ borderBottom: "1.5px solid var(--hair)" }}
        >
          <p className="text-sm sm:text-xs truncate flex-shrink min-w-0" style={{ color: "var(--text-muted)" }}>
            {user ? `Welcome back, ${user.name}` : "Browse freely. Sign in only if you want to save."}
          </p>
          {user ? (
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              <button
                onClick={() => setActiveNav("saved")}
                className="text-sm font-medium inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg"
                style={{ background: "transparent", border: "1.5px solid var(--card-border)", color: "var(--text-muted)" }}
              >
                <Bookmark size={10} strokeWidth={1.6} />
                <span className="hidden sm:inline">Saved </span><span style={{ color: "var(--text-faint)" }}>{savedCount}</span>
              </button>
              <button
                onClick={() => setActiveNav("favourites")}
                className="text-sm font-medium inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg"
                style={{ background: "transparent", border: "1.5px solid var(--card-border)", color: "var(--text-muted)" }}
              >
                <Heart size={10} strokeWidth={1.6} />
                <span className="hidden sm:inline">Fav </span><span style={{ color: "var(--text-faint)" }}>{favouriteCount}</span>
              </button>
              <button
                onClick={handleLogout}
                className="text-sm font-medium inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg"
                style={{ background: "transparent", border: "1.5px solid var(--card-border)", color: "var(--text-muted)" }}
              >
                <LogOut size={10} strokeWidth={1.6} />
                <span className="hidden sm:inline">Log out</span>
              </button>
            </div>
          ) : (
            <a
              href="https://www.producthunt.com/products/northstar-3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-opacity hover:opacity-80"
              style={{ background: "#DA552F", color: "#ffffff" }}
            >
              Featured on Product Hunt
              <ArrowUpRight size={11} strokeWidth={2.5} />
            </a>
          )}
        </div>

        <main className="scroll-container mx-auto w-full max-w-[1500px]">
          {/* Render the library view immediately so the H1 + content reach
              SSR HTML (good for SEO crawlers and CheckIt) — auth state
              still resolves async but only changes save/like button
              interactivity, not page structure. */}
          {!isFiltered ? (
            <div className="pb-12">
              {/* The homepage's primary heading. The design opens straight
                  into the hero carousel with no room for a marketing
                  headline, so the only h1 in the markup used to be the
                  carousel's lead slide — whichever drill shipped most
                  recently. Google reads the h1 as what the page is about,
                  and it was being told the homepage was about Lego.

                  Visually hidden, not hidden from crawlers: this is the
                  honest heading for the page and it matches the <title>
                  and the wordmark in the nav. Counts come from the same
                  published* arrays the page renders, so it can't drift. */}
              <h1 className="sr-only">
                northstar — a free product management library of {caseStudies.length} case
                studies, {books.length} book reviews, {answers.length} answers and{" "}
                {playlists.length} playlists
              </h1>
              {/* ── Editorial magazine front (publication reskin) ──── */}
              <EditorialHome
                caseStudies={caseStudies}
                featured={homeFeaturedCaseStudies}
                comparisons={comparisons}
                aiDecoded={aiDecodedManifest}
                onSeeAllCases={() => setActiveNav("casestudies")}
              />

              {/* ── Explore the Library — every surface as a vsbox ──── */}
              <div className="site-inner mt-2 mb-10">
                <SectionHead title="Explore the library" />
                <div className="heads">
                  {([
                    { label: "Books",       value: String(books.length),       hook: "Opinionated reviews for PM readers",         color: "#EA580C", href: "/book" },
                    { label: "Answers",     value: String(answers.length),     hook: "Direct answers to PM questions",             color: "#2563EB", href: "/answers" },
                    { label: "AI Decoded",  value: String(aiDecodedManifest.length), hook: "AI commentary for product people",     color: "#DB2777", href: "/ai-decoded" },
                    { label: "Topics",      value: String(topics.length),      hook: "Case studies grouped by theme",              color: "#26A69A", href: "/topics" },
                    { label: "Compare",     value: String(comparisons.length), hook: "Head-to-head company verdicts",              color: "#7C3AED", href: "/compare" },
                    { label: "SimulateIt",  value: String(DRILL_COUNT),                      hook: "Interactive product decision drills",        color: "#0891B2", href: "/simulate" },
                    { label: "CheckIt",     value: "",                         hook: "Audit any URL in 30 seconds",                color: "#1D4ED8", href: "/checkit" },
                    { label: "Learn",       value: String(playlists.length),   hook: "Curated YouTube playlists",                  color: "#9B8FFF", href: undefined as string | undefined, action: () => setActiveNav("learn") },
                    { label: "India",       value: "",                         hook: "Indian company deep dives",                  color: "#FF6B35", href: "/india" },
                    { label: "Research",    value: String(YC.audited),         hook: "YC startup homepages audited",               color: "#0F9D58", href: "/reports/startup-website-audit-2026" },
                  ] as Array<{ label: string; value: string; hook: string; color: string; href?: string; action?: () => void }>).map(({ label, value, hook, href, action }) => {
                    const inner = (
                      <>
                        <div className="vs">
                          {label}
                          {value && (
                            <em style={{ fontStyle: "normal", fontSize: "0.72em", marginLeft: "0.3em" }}>{value}</em>
                          )}
                        </div>
                        <div className="m">{hook}</div>
                      </>
                    );
                    return href ? (
                      <Link key={label} href={href} className="vsbox">
                        {inner}
                      </Link>
                    ) : (
                      <button key={label} type="button" className="vsbox text-left w-full" onClick={action}>
                        {inner}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ── Original research ─────────────────────────────── */}
              <div className="site-inner mb-10">
                <EdCard href="/reports/startup-website-audit-2026">
                  <Tile
                    tint="ink"
                    minH={220}
                    pill="Original research"
                    title={`We audited ${YC.audited} YC startup homepages`}
                    dek={`35 technical checks each. Median ${YC.median}/100, top score ${YC.topScore}. Every company named and ranked.`}
                    size="2xl"
                  />
                </EdCard>
              </div>

              {/* Newsletter signup */}
              <div className="site-inner mb-12">
                <div className="max-w-2xl mx-auto">
                  <SubscribeForm variant="card" />
                </div>
              </div>
            </div>
          ) : (
            <div className="site-inner py-6 pb-12">
              {searchQuery.trim() ? (
                <>
                  {/* Search header */}
                  <div className="mb-6">
                    <p className="eyebrow mb-1.5">Search results</p>
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h1 className="text-xl font-bold" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                        “{searchQuery}”
                      </h1>
                      <span className="font-mono text-xs" style={{ color: "var(--text-faint)" }}>
                        {searchPending
                          ? "…"
                          : String(filteredBooks.length + searchedCaseStudies.length + searchedPlaylists.length + searchedAIDecoded.length + searchedTopics.length + searchedComparisons.length)}
                      </span>
                    </div>
                  </div>

                  {/* Results arrive from /api/search, so there is a beat between
                      typing and results. Showing "Nothing matched" during that
                      window would call every in-flight query a dead end. */}
                  {searchPending ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                      <p className="eyebrow mb-3">Searching</p>
                      <p className="text-sm" style={{ color: "var(--text-muted)" }}>Looking through the library…</p>
                    </div>
                  ) : filteredBooks.length + searchedCaseStudies.length + searchedPlaylists.length + searchedAIDecoded.length + searchedTopics.length + searchedComparisons.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                      <p className="eyebrow mb-3">No results</p>
                      <p className="text-base font-semibold" style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}>Nothing matched</p>
                      <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>Try a different keyword</p>
                    </div>
                  ) : (
                    <>
                      {/* Books group */}
                      {filteredBooks.length > 0 && (
                        <div className="mb-10">
                          <div className="flex items-baseline gap-3 mb-4">
                            <p className="eyebrow">Books</p>
                            <span className="text-sm" style={{ color: "var(--text-faint)" }}>
                              {String(filteredBooks.length)}
                            </span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {filteredBooks.map((book, index) => (
                              <ResourceCard
                                key={book.id}
                                book={book}
                                index={index}
                                variant="list"
                                isLoggedIn={!!user}
                                initialSaved={savedIds.has(book.id)}
                                initialLiked={likedIds.has(book.id)}
                                onAuthRequired={() => setShowAuthModal(true)}
                                onSavedChange={handleSavedChange}
                                onLikedChange={handleLikedChange}
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Case studies group */}
                      {searchedCaseStudies.length > 0 && (
                        <div className="mb-10">
                          <div className="flex items-baseline gap-3 mb-4">
                            <p className="eyebrow">Case Studies</p>
                            <span className="text-sm" style={{ color: "var(--text-faint)" }}>
                              {String(searchedCaseStudies.length)}
                            </span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                            {searchedCaseStudies.map((study, idx) => (
                              <CaseStudyCard
                                key={study.id}
                                study={study}
                                index={idx}
                                isLoggedIn={!!user}
                                initialSaved={savedIds.has(study.id)}
                                initialLiked={likedIds.has(study.id)}
                                onAuthRequired={() => setShowAuthModal(true)}
                                onSavedChange={handleSavedChange}
                                onLikedChange={handleLikedChange}
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      {/* AI Decoded group — brand-tinted to match the
                          section's prominent slot in nav */}
                      {searchedAIDecoded.length > 0 && (
                        <div className="mb-10">
                          <div className="flex items-baseline gap-3 mb-4">
                            <p className="eyebrow" style={{ color: "var(--brand-primary)" }}>
                              AI Decoded
                            </p>
                            <span className="text-sm" style={{ color: "var(--text-faint)" }}>
                              {String(searchedAIDecoded.length)}
                            </span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {searchedAIDecoded.map((a) => (
                              <Link
                                key={a.slug}
                                href={`/ai-decoded/${a.slug}`}
                                className="surface p-4 group transition-colors"
                                style={{
                                  borderRadius: 12,
                                  borderColor: "rgba(243, 18, 60, 0.30)",
                                }}
                              >
                                <p
                                  className="text-sm font-medium uppercase tracking-wider mb-1.5 inline-flex items-center gap-1"
                                  style={{ color: "var(--brand-primary)" }}
                                >
                                  <Sparkles size={10} strokeWidth={1.8} />
                                  {a.category}
                                </p>
                                <p
                                  className="text-sm font-semibold leading-snug mb-1.5 line-clamp-2"
                                  style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}
                                >
                                  {a.title}
                                </p>
                                <p
                                  className="text-sm leading-relaxed line-clamp-2"
                                  style={{ color: "var(--text-muted)" }}
                                >
                                  {a.excerpt}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Playlists group */}
                      {searchedPlaylists.length > 0 && (
                        <div className="mb-10">
                          <div className="flex items-baseline gap-3 mb-4">
                            <p className="eyebrow">Playlists</p>
                            <span className="text-sm" style={{ color: "var(--text-faint)" }}>
                              {String(searchedPlaylists.length)}
                            </span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                            {searchedPlaylists.map((playlist, idx) => (
                              <PlaylistCard
                                key={playlist.id}
                                playlist={playlist}
                                index={idx}
                                isLoggedIn={!!user}
                                initialSaved={savedIds.has(playlist.id)}
                                initialLiked={likedIds.has(playlist.id)}
                                onAuthRequired={() => setShowAuthModal(true)}
                                onSavedChange={handleSavedChange}
                                onLikedChange={handleLikedChange}
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Topics group — clickable cards link to /topics/[slug] */}
                      {searchedTopics.length > 0 && (
                        <div className="mb-10">
                          <div className="flex items-baseline gap-3 mb-4">
                            <p className="eyebrow">Topics</p>
                            <span className="text-sm" style={{ color: "var(--text-faint)" }}>
                              {String(searchedTopics.length)}
                            </span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {searchedTopics.map((t) => (
                              <Link
                                key={t.slug}
                                href={`/topics/${t.slug}`}
                                className="surface p-4 group transition-colors"
                                style={{ borderRadius: 12 }}
                              >
                                <p
                                  className="text-sm font-medium uppercase tracking-wider mb-1.5"
                                  style={{ color: t.accentColor }}
                                >
                                  Topic
                                </p>
                                <p
                                  className="text-sm font-semibold leading-snug group-hover:underline"
                                  style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}
                                >
                                  {t.title}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Comparisons group — clickable cards link to /compare/[slug] */}
                      {searchedComparisons.length > 0 && (
                        <div>
                          <div className="flex items-baseline gap-3 mb-4">
                            <p className="eyebrow">Comparisons</p>
                            <span className="text-sm" style={{ color: "var(--text-faint)" }}>
                              {String(searchedComparisons.length)}
                            </span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {searchedComparisons.map((c) => (
                              <Link
                                key={c.slug}
                                href={`/compare/${c.slug}`}
                                className="surface p-4 group transition-colors"
                                style={{ borderRadius: 12 }}
                              >
                                <p
                                  className="text-sm font-medium uppercase tracking-wider mb-1.5"
                                  style={{ color: c.accentColor }}
                                >
                                  Comparison
                                </p>
                                <p
                                  className="text-sm font-semibold leading-snug group-hover:underline"
                                  style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}
                                >
                                  {c.title}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </>
              ) : (
                <>
                  <div className="mb-6">
                    <p className="eyebrow mb-1.5">Search</p>
                    <div className="flex items-baseline gap-3">
                      <h2 className="text-xl font-bold" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                        Results for &ldquo;{searchQuery.trim()}&rdquo;
                      </h2>
                      <span className="font-mono text-xs" style={{ color: "var(--text-faint)" }}>
                        {String(filteredBooks.length)}
                      </span>
                    </div>
                  </div>
                  {filteredBooks.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                      <p className="eyebrow mb-3">No results</p>
                      <p className="text-base font-semibold" style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}>No books found</p>
                      <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>Try a different category</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {filteredBooks.map((book, index) => (
                        <ResourceCard
                          key={book.id}
                          book={book}
                          index={index}
                          variant="list"
                          isLoggedIn={!!user}
                          initialSaved={savedIds.has(book.id)}
                          initialLiked={likedIds.has(book.id)}
                          onAuthRequired={() => setShowAuthModal(true)}
                          onSavedChange={handleSavedChange}
                          onLikedChange={handleLikedChange}
                        />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          )}
          <Footer />
        </main>

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} onSuccess={() => refreshUserState()} />}
    </div>
  );
}
