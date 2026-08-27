// The closed set of analytics event names the site is allowed to record.
//
// This lives apart from lib/track.ts on purpose: the API route needs the list
// at runtime on the server, and importing lib/track.ts would drag
// @vercel/analytics (a browser library) into a Node route for no reason.
//
// /api/track is an unauthenticated POST that upserts into AnalyticsCount,
// whose primary key is the event key itself. Without an allowlist, anyone can
// mint unlimited distinct keys and grow that table without bound. The union in
// lib/track.ts is a *type* and is erased at build time, so it cannot do this
// job — the server needs a value.
export const ANALYTICS_EVENT_NAMES = [
  // ── Reading depth ──
  "case_study_completed",
  "book_completed",
  "ai_decoded_completed",
  // ── Conversion intent ──
  "book_long_route_clicked",
  "book_short_route_clicked",
  "newsletter_signup_attempted",
  // ── Engagement ──
  "share_clicked",
  "save_clicked",
  "like_clicked",
  "save_removed",
  "like_removed",
  // ── Discovery ──
  "search_query",
  "search_result_clicked",
  "related_content_clicked",
  "nav_link_clicked",
  // ── Auth funnel ──
  "auth_modal_opened",
  "auth_signup_completed",
  "auth_login_completed",
  // ── CheckIt ──
  "checkit_audit_started",
  "checkit_audit_completed",
  "checkit_dimension_expanded",
  "checkit_resource_clicked",
  "checkit_share_clicked",
  "checkit_recheck_clicked",
  // ── SimulateIt ──
  "simulateit_drill_started",
  "simulateit_option_picked",
  "simulateit_drill_completed",
  "simulateit_drill_restarted",
  "simulateit_shared",
  "simulateit_challenge_created",
] as const;

export type AnalyticsEventName = (typeof ANALYTICS_EVENT_NAMES)[number];

const NAME_SET: ReadonlySet<string> = new Set(ANALYTICS_EVENT_NAMES);

export function isKnownEventName(name: string): name is AnalyticsEventName {
  return NAME_SET.has(name);
}
