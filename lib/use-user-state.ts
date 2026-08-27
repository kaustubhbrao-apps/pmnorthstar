"use client";

import { useUserStateContext } from "@/components/UserStateProvider";

interface UserState {
  loading: boolean;
  isLoggedIn: boolean;
  hasEngaged: boolean; // true if logged in AND saved/liked anything
  userName?: string;
  username?: string; // the @handle
}

// Thin read of the shared UserStateProvider (mounted in app/layout.tsx).
//
// This used to own the fetching itself and re-fetch on every mount. That was
// fine when one component used it; it became a problem once five did — and
// two of those (SmartSaveButton, NotificationToaster) mount per card and per
// page, so a single homepage view issued 55 requests to /api/auth/me. The
// provider fetches once and every consumer reads the same value.
//
// Auth state still changes mid-session (login/logout without a full reload);
// the provider exposes refresh() for that, and Google sign-in completes via a
// full-page redirect which remounts it anyway.
export function useUserState(): UserState {
  const { loading, isLoggedIn, hasEngaged, userName, username } = useUserStateContext();
  return { loading, isLoggedIn, hasEngaged, userName, username };
}
