"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Check, X, ArrowRight, Loader2 } from "lucide-react";
import { useUserState } from "@/lib/use-user-state";

function PickUsernameContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = searchParams?.get("next") || "/simulate";
  const { isLoggedIn, loading: userLoading, username: existingUsername } = useUserState();

  const [username, setUsername] = useState("");
  const [status, setStatus] = useState<"idle" | "checking" | "available" | "unavailable">("idle");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Redirect logic
  useEffect(() => {
    if (!userLoading) {
      if (!isLoggedIn) {
        router.replace(`/login?next=/pick-username?next=${encodeURIComponent(nextPath)}`);
      } else if (existingUsername) {
        router.replace(nextPath);
      }
    }
  }, [userLoading, isLoggedIn, existingUsername, router, nextPath]);

  // Debounced availability check
  useEffect(() => {
    if (!username) {
      setStatus("idle");
      setMessage("");
      return;
    }

    // Basic client-side validation before hitting API
    if (username.length < 3) {
      setStatus("unavailable");
      setMessage("Username must be at least 3 characters");
      return;
    }
    if (!/^[a-z0-9_]+$/.test(username)) {
      setStatus("unavailable");
      setMessage("Lowercase letters, numbers, and underscores only");
      return;
    }

    setStatus("checking");
    setMessage("");

    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`/api/auth/username?q=${encodeURIComponent(username)}`);
        const data = await res.json();
        
        if (data.available) {
          setStatus("available");
          setMessage("Username is available!");
        } else {
          setStatus("unavailable");
          setMessage(data.reason || "Username is not available");
        }
      } catch (err) {
        setStatus("idle");
        setMessage("Could not verify availability");
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [username]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status !== "available" || submitting) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/auth/username", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        // Force a hard reload of the target page so useUserState picks up the new username
        window.location.href = nextPath;
      } else {
        setStatus("unavailable");
        setMessage(data.error || "Something went wrong");
        setSubmitting(false);
      }
    } catch (err) {
      setStatus("unavailable");
      setMessage("Network error. Please try again.");
      setSubmitting(false);
    }
  };

  if (userLoading || (!isLoggedIn && !userLoading) || (existingUsername && !userLoading)) {
    return (
      <div className="min-h-screen bg-[var(--card-bg)] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[var(--brand-primary)] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link href="/" className="inline-block text-2xl font-display font-bold text-white tracking-tighter hover:opacity-80 transition-opacity">
            north<span className="text-[var(--brand-primary)]">star</span>
          </Link>
        </div>

        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8 shadow-2xl">
          <h1 className="text-2xl font-display font-bold text-white mb-2 text-center">
            Pick your username
          </h1>
          <p className="text-[var(--text-muted)] text-center mb-8 text-sm">
            This will be your identity on the Simulation League leaderboard.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-mono text-[var(--text-muted)] mb-2">
                USERNAME
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-[var(--text-faint)] font-mono text-lg">@</span>
                </div>
                <input
                  type="text"
                  id="username"
                  name="username"
                  autoComplete="off"
                  autoFocus
                  value={username}
                  onChange={(e) => setUsername(e.target.value.toLowerCase())}
                  className={`w-full bg-[#222] text-white font-mono text-lg pl-10 pr-12 py-3 rounded-lg border focus:outline-none transition-colors ${
                    status === "unavailable" 
                      ? "border-red-500 focus:border-red-500" 
                      : status === "available"
                      ? "border-green-500 focus:border-green-500"
                      : "border-[#333] focus:border-[var(--brand-primary)]"
                  }`}
                  placeholder="player_one"
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  {status === "checking" && <Loader2 className="w-5 h-5 text-[var(--text-muted)] animate-spin" />}
                  {status === "available" && <Check className="w-5 h-5 text-green-500" />}
                  {status === "unavailable" && <X className="w-5 h-5 text-red-500" />}
                </div>
              </div>
              
              <div className="mt-2 min-h-[20px]">
                {message && (
                  <p className={`text-sm ${status === "available" ? "text-green-500" : "text-red-500"}`}>
                    {message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={status !== "available" || submitting}
              className="w-full flex items-center justify-center gap-2 bg-[var(--brand-primary)] hover:bg-[#d4102f] text-white font-bold py-4 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Claiming..." : "Claim this username"}
              {!submitting && <ArrowRight className="w-5 h-5" />}
            </button>
          </form>
          
          <p className="mt-6 text-xs text-center text-[var(--text-faint)]">
            You can change this once every 30 days.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PickUsernamePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#111] flex flex-col items-center justify-center p-4">
        <Loader2 className="w-8 h-8 text-[var(--brand-primary)] animate-spin" />
      </div>
    }>
      <PickUsernameContent />
    </Suspense>
  );
}
