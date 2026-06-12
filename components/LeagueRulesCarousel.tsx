"use client";

import { useRef, useEffect, useState, useCallback } from "react";

export function LeagueRulesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const updateActiveSlide = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    setActiveSlide(Math.round(scrollLeft / clientWidth));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateActiveSlide, { passive: true });
    return () => el.removeEventListener("scroll", updateActiveSlide);
  }, [updateActiveSlide]);

  return (
    <div className="relative w-full rounded-lg overflow-hidden group">
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-container"
      >
        <div className="flex-shrink-0 w-full snap-center px-1">
          <EditorialCard num="01" title="The Matchday" desc="A high-stakes drill drops every Wednesday and Sunday. You have until the next drop to lock in your score." />
        </div>
        <div className="flex-shrink-0 w-full snap-center px-1">
          <EditorialCard num="02" title="One Shot Only" desc="No do-overs in a crisis. You must log in. Only your absolute first attempt counts for leaderboard points." />
        </div>
        <div className="flex-shrink-0 w-full snap-center px-1">
          <EditorialCard num="03" title="The Standings" desc="It's all about scoring points. We track your cumulative total across 50 matchdays. Prove you're the absolute best." />
        </div>
      </div>
      
      {/* Floating Indicators Overlay */}
      <div className="absolute top-4 right-4 flex justify-center gap-1.5 z-10 bg-black/5 px-2 py-1.5 rounded-full backdrop-blur-md">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              scrollRef.current?.scrollTo({
                left: i * (scrollRef.current?.clientWidth ?? 0),
                behavior: "smooth",
              });
            }}
            className="rounded-full transition-all"
            style={{
              width: activeSlide === i ? 16 : 4,
              height: 4,
              background: activeSlide === i ? "var(--brand-primary)" : "var(--text-faint)",
            }}
            aria-label={`Rule ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function EditorialCard({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <div 
      className="p-6 h-full border rounded transition-colors relative group"
      style={{ borderColor: "var(--border-subtle)", background: "var(--card-bg)" }}
    >
      <div className="absolute top-0 left-0 w-1 h-0 bg-[var(--brand-primary)] group-hover:h-full transition-all duration-300 rounded-l" />
      <div className="flex items-baseline gap-4 mb-3">
        <span className="font-mono text-xs font-bold" style={{ color: "var(--brand-primary)" }}>{num}</span>
        <h3 className="text-lg font-bold uppercase tracking-tight" style={{ color: "var(--text-primary)" }}>{title}</h3>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
    </div>
  );
}
