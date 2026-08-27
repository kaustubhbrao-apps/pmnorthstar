"use client";

// Single source of truth for auth + saved/liked state.
//
// This replaces a per-component fetch pattern that fanned out badly: every
// SmartSaveButton called useUserState(), which independently hit
// /api/auth/me with `cache: "no-store"` (so the browser could not dedupe
// them). The homepage renders 53 save buttons, so one homepage view fired
// 55 requests to /api/auth/me — and, for a signed-in visitor, another 212 to
// /api/saved and /api/liked, since each button re-fetched both *whole* lists
// twice just to test one resource id for membership. That is ~53 Prisma
// user lookups (lib/auth.ts getSession) per page load.
//
// Everything is fetched once here and read from context.

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  username?: string | null;
}

export interface UserStateValue {
  /** Auth check in flight. Resolves as soon as /api/auth/me answers. */
  loading: boolean;
  /** Saved/liked lists have landed. Only meaningful when isLoggedIn. */
  listsReady: boolean;
  isLoggedIn: boolean;
  /** Signed in AND has saved or liked at least one thing. */
  hasEngaged: boolean;
  user: AuthUser | null;
  userName?: string;
  username?: string;
  savedIds: ReadonlySet<string>;
  likedIds: ReadonlySet<string>;
  markSaved: (resourceId: string, saved: boolean) => void;
  markLiked: (resourceId: string, liked: boolean) => void;
  /** Re-read auth + lists. For login/logout that don't do a full reload. */
  refresh: () => void;
  logout: () => Promise<void>;
}

const EMPTY_SET: ReadonlySet<string> = new Set<string>();

// Used when a component renders outside the provider. Reports "resolved and
// logged out" rather than a permanent spinner.
const FALLBACK: UserStateValue = {
  loading: false,
  listsReady: true,
  isLoggedIn: false,
  hasEngaged: false,
  user: null,
  savedIds: EMPTY_SET,
  likedIds: EMPTY_SET,
  markSaved: () => {},
  markLiked: () => {},
  refresh: () => {},
  logout: async () => {},
};

const UserStateContext = createContext<UserStateValue>(FALLBACK);

function toIdSet(rows: unknown): Set<string> {
  if (!Array.isArray(rows)) return new Set<string>();
  return new Set<string>(
    rows
      .map((r) => (r as { resourceId?: unknown })?.resourceId)
      .filter((id): id is string => typeof id === "string"),
  );
}

export function UserStateProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [listsReady, setListsReady] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [savedIds, setSavedIds] = useState<ReadonlySet<string>>(EMPTY_SET);
  const [likedIds, setLikedIds] = useState<ReadonlySet<string>>(EMPTY_SET);
  // Bumping this re-runs the effect below; that is what refresh() does.
  const [version, setVersion] = useState(0);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      setLoading(true);
      setListsReady(false);

      let nextUser: AuthUser | null = null;
      try {
        const res = await fetch("/api/auth/me", {
          credentials: "include",
          cache: "no-store",
        });
        if (res.ok) {
          const data = await res.json();
          nextUser = (data?.user as AuthUser | undefined) ?? null;
        }
      } catch {
        nextUser = null;
      }

      if (cancelled) return;
      setUser(nextUser);
      // Unblock the UI on auth alone — the lists are only needed by save
      // buttons, which have their own listsReady gate.
      setLoading(false);

      if (!nextUser) {
        setSavedIds(EMPTY_SET);
        setLikedIds(EMPTY_SET);
        setListsReady(true);
        return;
      }

      // These endpoints return { saved } and { liked }. The previous callers
      // read `.items`, which never existed on either response — so hasEngaged
      // was permanently false and cards never restored their saved/liked
      // state on load.
      try {
        const [savedRes, likedRes] = await Promise.all([
          fetch("/api/saved", { credentials: "include", cache: "no-store" }).catch(() => null),
          fetch("/api/liked", { credentials: "include", cache: "no-store" }).catch(() => null),
        ]);
        const savedJson = savedRes?.ok ? await savedRes.json() : null;
        const likedJson = likedRes?.ok ? await likedRes.json() : null;
        if (cancelled) return;
        setSavedIds(toIdSet(savedJson?.saved));
        setLikedIds(toIdSet(likedJson?.liked));
      } catch {
        if (cancelled) return;
        setSavedIds(EMPTY_SET);
        setLikedIds(EMPTY_SET);
      } finally {
        if (!cancelled) setListsReady(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [version]);

  const markSaved = useCallback((resourceId: string, saved: boolean) => {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (saved) next.add(resourceId);
      else next.delete(resourceId);
      return next;
    });
  }, []);

  const markLiked = useCallback((resourceId: string, liked: boolean) => {
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (liked) next.add(resourceId);
      else next.delete(resourceId);
      return next;
    });
  }, []);

  const refresh = useCallback(() => setVersion((v) => v + 1), []);

  const logout = useCallback(async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } finally {
      setUser(null);
      setSavedIds(EMPTY_SET);
      setLikedIds(EMPTY_SET);
      setListsReady(true);
    }
  }, []);

  const value = useMemo<UserStateValue>(
    () => ({
      loading,
      listsReady,
      isLoggedIn: !!user,
      hasEngaged: savedIds.size > 0 || likedIds.size > 0,
      user,
      userName: user?.name,
      username: user?.username ?? undefined,
      savedIds,
      likedIds,
      markSaved,
      markLiked,
      refresh,
      logout,
    }),
    [loading, listsReady, user, savedIds, likedIds, markSaved, markLiked, refresh, logout],
  );

  return <UserStateContext.Provider value={value}>{children}</UserStateContext.Provider>;
}

export function useUserStateContext(): UserStateValue {
  return useContext(UserStateContext);
}
