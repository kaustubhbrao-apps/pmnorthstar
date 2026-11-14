"use client";

import { useEffect, useRef } from "react";
import { track } from "@/lib/track";

const SUBSTACK_EMBED_URL = "https://pmnorthstar.substack.com/embed";

interface SubscribeFormProps {
  variant?: "inline" | "card";
  headline?: string;
  subhead?: string;
  className?: string;
  // Identifies which page surface the signup form was on, for tracking.
  surface?: string;
}

export function SubscribeForm({
  variant = "card",
  headline = "Get the next case study in your inbox.",
  subhead = "One product deep dive every few days. Free. No paywall.",
  className = "",
  surface = "unknown",
}: SubscribeFormProps) {
  // Track click intent on the wrapper. The Substack iframe is opaque,
  // so we can't observe the actual signup completion from here — but
  // any click on the wrapper indicates the user is engaging with the
  // form area (intent signal). Cross-reference with Substack's own
  // dashboard for the actual signup conversion number.
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    let fired = false;
    const handler = () => {
      if (fired) return;
      fired = true;
      track({ name: "newsletter_signup_attempted", surface });
    };
    el.addEventListener("click", handler, { capture: true });
    return () => el.removeEventListener("click", handler, { capture: true });
  }, [surface]);

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={
        variant === "card"
          ? { padding: 24, borderRadius: 18, border: "1.5px solid var(--hair)", background: "var(--card-bg)" }
          : undefined
      }
    >
      <span className="pill">Newsletter</span>
      <h3
        className="text-xl sm:text-2xl font-extrabold mt-3 mb-1.5"
        style={{ color: "var(--text-primary)", letterSpacing: "-0.025em", lineHeight: 1.05, fontFamily: "var(--font-display)" }}
      >
        {headline}
      </h3>
      <p className="serif mb-5" style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.45 }}>
        {subhead}
      </p>

      {/* Substack's official embed — guarantees the signup reaches their
          backend and triggers the confirmation email. The iframe is
          server-rendered by Substack, so its internal styling is fixed
          (light background) but it sits inside our branded card. */}
      <div
        style={{
          borderRadius: 14,
          overflow: "hidden",
          border: "1.5px solid var(--hair)",
          background: "#ffffff",
        }}
      >
        <iframe
          src={SUBSTACK_EMBED_URL}
          width="100%"
          height="220"
          style={{
            border: "none",
            background: "#ffffff",
            display: "block",
          }}
          title="Subscribe to northstar"
          loading="lazy"
        />
      </div>

      <p
        className="text-sm mt-3"
        style={{ color: "var(--text-faint)" }}
      >
        Free forever. Unsubscribe anytime. No spam.
      </p>
    </div>
  );
}
