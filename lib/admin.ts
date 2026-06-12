// Admin / feature-flag gate for Simulation League UI.
// League features are visible when:
// 1. The global feature flag is enabled (NEXT_PUBLIC_ENABLE_LEAGUE=true), OR
// 2. The current user has admin privileges (isAdmin=true in DB).
//
// This lets the founder preview league features on production
// without exposing them to all users.

export function isLeagueVisible(user?: { isAdmin?: boolean } | null): boolean {
  if (process.env.NEXT_PUBLIC_ENABLE_LEAGUE === "true") return true;
  return !!user?.isAdmin;
}
