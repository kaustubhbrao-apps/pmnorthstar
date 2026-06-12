"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AuthModal } from "@/components/AuthModal";

// Safe-redirect allowlist: only same-origin relative paths starting
// with "/" are honored. Prevents open-redirect via crafted ?next=
// links to external sites.
function safeNext(nextRaw: string | null): string {
  if (!nextRaw) return "/";
  try {
    const next = decodeURIComponent(nextRaw);
    if (!next.startsWith("/") || next.startsWith("//")) return "/";
    return next;
  } catch {
    return "/";
  }
}

export default function LoginPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = safeNext(searchParams.get("next"));

  // If the user is already authenticated, skip the page entirely
  // and bounce to ?next= immediately. Saves a click for users who
  // arrived here from a stale link.
  useEffect(() => {
    let cancelled = false;
    fetch("/api/auth/me", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (cancelled) return;
        if (d?.user) router.replace(next);
      })
      .catch(() => {
        /* ignore — user just stays on the form */
      });
    return () => {
      cancelled = true;
    };
  }, [next, router]);

  return (
    <AuthModal
      onClose={() => router.push("/")}
      onSuccess={() => router.replace(next)}
    />
  );
}
