"use client";

import { useEffect, useState } from "react";

// Wikipedia author thumbnails, fetched once per author per page load.
//
// This used to live inside ResourceCard and fetch per component instance.
// localStorage was the only cache, and it is only written once a response
// lands — but every card mounts before any response arrives, so duplicate
// authors all missed. One homepage render issued 36 requests to Wikipedia,
// with Marty Cagan fetched 4 times and several others twice.
//
// Two layers now sit in front of the network: `resolved` (answers for this
// page load) and `inFlight` (so N cards sharing an author await one request).
// localStorage still carries results across visits.

const CACHE_PREFIX = "pmnorthstar:author-photo-v2:";

const resolved = new Map<string, string | null>();
const inFlight = new Map<string, Promise<string | null>>();

// undefined = not cached; null = cached miss ("none" sentinel).
function readCache(author: string): string | null | undefined {
  try {
    const v = window.localStorage.getItem(CACHE_PREFIX + author);
    if (v === null) return undefined;
    return v === "none" ? null : v;
  } catch {
    // Private mode / disabled storage — treat as a miss.
    return undefined;
  }
}

function writeCache(author: string, value: string | null) {
  try {
    window.localStorage.setItem(CACHE_PREFIX + author, value ?? "none");
  } catch {
    // Quota or private mode; the in-memory caches still hold for this load.
  }
}

function loadAuthorPhoto(author: string): Promise<string | null> {
  const known = resolved.get(author);
  if (known !== undefined || resolved.has(author)) {
    return Promise.resolve(known ?? null);
  }

  const cached = readCache(author);
  if (cached !== undefined) {
    resolved.set(author, cached);
    return Promise.resolve(cached);
  }

  const pending = inFlight.get(author);
  if (pending) return pending;

  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(author)}`;
  const request = fetch(url, { headers: { Accept: "application/json" } })
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`wikipedia ${r.status}`))))
    .then((data) => (data?.thumbnail?.source as string | undefined) ?? null)
    .catch(() => null)
    .then((src) => {
      resolved.set(author, src);
      // Matches the previous behaviour: a failed lookup is cached as a miss.
      // The v2 key prefix exists to flush those when it matters.
      writeCache(author, src);
      inFlight.delete(author);
      return src;
    });

  inFlight.set(author, request);
  return request;
}

/**
 * Wikipedia thumbnail URL for `author`, or null while loading / if there
 * isn't one. Callers fall back to an initials avatar on null.
 */
export function useAuthorPhoto(author: string): string | null {
  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let cancelled = false;
    loadAuthorPhoto(author).then((src) => {
      if (!cancelled) setPhoto(src);
    });
    return () => {
      cancelled = true;
    };
  }, [author]);

  return photo;
}
