"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const SUBSTACK_HANDLE = "pmnorthstar";

interface SubscribeFormProps {
  variant?: "inline" | "card";
  headline?: string;
  subhead?: string;
  className?: string;
}

export function SubscribeForm({
  variant = "card",
  headline = "Get the next case study in your inbox.",
  subhead = "One product deep dive every few days. Free. No paywall.",
  className = "",
}: SubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || status === "loading") return;
    setStatus("loading");
    setErrorMsg("");

    try {
      // Substack accepts free signups via this endpoint.
      // No-cors mode because Substack doesn't return CORS headers; we can't
      // read the response, but the signup still goes through. Substack will
      // then send a confirmation email which the user must click.
      await fetch(`https://${SUBSTACK_HANDLE}.substack.com/api/v1/free`, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong. Try again.");
    }
  };

  if (status === "success") {
    return (
      <div
        className={`surface ${className}`}
        style={{
          padding: variant === "card" ? "24px" : "20px",
          borderRadius: 12,
          textAlign: "center",
        }}
      >
        <div
          className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-3"
          style={{ background: "var(--brand-soft)" }}
        >
          <Check size={20} strokeWidth={2} style={{ color: "var(--brand-primary)" }} />
        </div>
        <p
          className="text-base font-semibold mb-1"
          style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}
        >
          Almost there.
        </p>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          Check your inbox and click the confirmation link to subscribe.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`${variant === "card" ? "surface" : ""} ${className}`}
      style={{
        padding: variant === "card" ? "24px" : 0,
        borderRadius: variant === "card" ? 12 : 0,
      }}
    >
      <p
        className="eyebrow mb-2"
        style={{ color: "var(--brand-primary)", opacity: 0.85 }}
      >
        Newsletter
      </p>
      <h3
        className="text-lg sm:text-xl font-semibold mb-1.5"
        style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
      >
        {headline}
      </h3>
      <p
        className="text-sm mb-4 leading-relaxed"
        style={{ color: "var(--text-muted)" }}
      >
        {subhead}
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-2"
      >
        <input
          type="email"
          required
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="flex-1 px-3.5 py-2.5 rounded-lg text-sm outline-none transition-colors"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            color: "var(--text-primary)",
          }}
          onFocus={(e) =>
            ((e.target as HTMLInputElement).style.borderColor = "var(--text-muted)")
          }
          onBlur={(e) =>
            ((e.target as HTMLInputElement).style.borderColor = "var(--card-border)")
          }
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors group flex-shrink-0"
          style={{
            background: "var(--brand-primary)",
            color: "#fff",
            opacity: status === "loading" ? 0.6 : 1,
          }}
        >
          {status === "loading" ? (
            "Subscribing..."
          ) : (
            <>
              Subscribe
              <ArrowRight
                size={14}
                strokeWidth={2}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </>
          )}
        </button>
      </form>
      {errorMsg && (
        <p
          className="text-xs mt-2"
          style={{ color: "var(--brand-primary)" }}
        >
          {errorMsg}
        </p>
      )}
      <p
        className="text-[11px] mt-3"
        style={{ color: "var(--text-faint)" }}
      >
        Free forever. Unsubscribe anytime. No spam.
      </p>
    </div>
  );
}
