// In-memory sliding-window rate limiter for API routes.
// No external dependency (no Redis). Uses a Map of timestamps.
//
// Usage:
//   import { checkRateLimit } from "@/lib/rate-limit";
//   const { ok, retryAfterMs } = checkRateLimit(userId, 10, 60_000);
//   if (!ok) return NextResponse.json({ error: "Too many requests" }, { status: 429 });

const store = new Map<string, number[]>();

// Clean up stale entries every 5 minutes to prevent memory leaks.
const CLEANUP_INTERVAL = 5 * 60 * 1000;
let lastCleanup = Date.now();

function cleanup(windowMs: number) {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL) return;
  lastCleanup = now;
  const cutoff = now - windowMs * 2;
  store.forEach((timestamps, key) => {
    const filtered = timestamps.filter((t) => t > cutoff);
    if (filtered.length === 0) {
      store.delete(key);
    } else {
      store.set(key, filtered);
    }
  });
}

/**
 * Check if a request from `key` is within rate limits.
 *
 * @param key       Unique identifier (userId, IP, etc.)
 * @param max       Maximum requests allowed in the window
 * @param windowMs  Window size in milliseconds (default: 60_000 = 1 minute)
 * @returns         `{ ok: true }` if allowed, `{ ok: false, retryAfterMs }` if blocked
 */
export function checkRateLimit(
  key: string,
  max: number,
  windowMs: number = 60_000,
): { ok: true } | { ok: false; retryAfterMs: number } {
  cleanup(windowMs);

  const now = Date.now();
  const cutoff = now - windowMs;
  const timestamps = (store.get(key) ?? []).filter((t) => t > cutoff);

  if (timestamps.length >= max) {
    const oldestInWindow = timestamps[0];
    const retryAfterMs = oldestInWindow + windowMs - now;
    return { ok: false, retryAfterMs: Math.max(retryAfterMs, 1000) };
  }

  timestamps.push(now);
  store.set(key, timestamps);
  return { ok: true };
}
