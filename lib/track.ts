// Typed wrapper around Vercel Analytics custom events.
//
// Goals:
// - Centralized event name list so call sites can't typo
// - Typed props per event so optimization analysis is reliable
// - Single import line for any component that needs tracking
//
// Events appear in Vercel Dashboard → Analytics → Events tab.
// (Free tier shows event counts; Pro adds funnels/conversions.)

import { track as vercelTrack } from "@vercel/analytics";

// Discriminated union — adding a new event = adding here = type
// safety enforced at every call site.
export type AnalyticsEvent =
  // ── Reading depth ──────────────────────────────────────────────
  | { name: "case_study_completed"; slug: string; category: string }
  | { name: "book_completed"; slug: string; category: string }
  | { name: "ai_decoded_completed"; slug: string }
  // ── Conversion intent ───────────────────────────────────────────
  | { name: "book_long_route_clicked"; slug: string; title: string }
  | { name: "book_short_route_clicked"; slug: string }
  | { name: "newsletter_signup_attempted"; surface: string }
  // ── Engagement ──────────────────────────────────────────────────
  | {
      name: "share_clicked";
      surface: string; // 'book' | 'case-study' | 'ai-decoded' | 'topic' | 'compare'
      target?: string; // 'twitter' | 'linkedin' | 'whatsapp' | 'copy' | 'native'
    }
  | { name: "save_clicked"; resource_type: string; resource_id: string }
  | { name: "like_clicked"; resource_type: string; resource_id: string }
  | { name: "save_removed"; resource_type: string; resource_id: string }
  | { name: "like_removed"; resource_type: string; resource_id: string }
  // ── Discovery ───────────────────────────────────────────────────
  | { name: "search_query"; query: string; results: number }
  | {
      name: "search_result_clicked";
      query: string;
      result_type: string; // 'book' | 'case-study' | 'ai-decoded' | 'topic' | 'compare' | 'playlist'
      result_slug: string;
    }
  | {
      name: "related_content_clicked";
      from_type: string;
      from_slug: string;
      to_type: string;
      to_slug: string;
    }
  | { name: "nav_link_clicked"; destination: string; surface: string }
  // ── Auth funnel ─────────────────────────────────────────────────
  | { name: "auth_modal_opened"; trigger: string }
  | { name: "auth_signup_completed" }
  | { name: "auth_login_completed" }
  // ── CheckIt ─────────────────────────────────────────────────────
  // Url is hashed/truncated on intake to keep PII out of analytics; we
  // pass the host only so we can spot popular domains without leaking
  // private query strings.
  | { name: "checkit_audit_started"; host: string }
  | { name: "checkit_audit_completed"; host: string; score: number; band: string }
  | { name: "checkit_dimension_expanded"; dimension: string }
  | {
      name: "checkit_resource_clicked";
      dimension: string;
      resource_type: string; // 'case-study' | 'book'
      resource_slug: string;
    }
  | { name: "checkit_share_clicked"; host: string; score: number }
  | { name: "checkit_recheck_clicked"; host: string }
  // ── SimulateIt ──────────────────────────────────────────────────
  | { name: "simulateit_drill_started"; drill_slug: string }
  | {
      name: "simulateit_option_picked";
      drill_slug: string;
      node_id: string;
      option_index: number;
      points: number;
    }
  | {
      name: "simulateit_drill_completed";
      drill_slug: string;
      node_id: string;
      decisions: number;
    }
  | { name: "simulateit_drill_restarted"; drill_slug: string }
  | { name: "simulateit_shared"; drill_slug: string };

export function track(event: AnalyticsEvent) {
  // Vercel Analytics accepts (name, props). Strip the discriminator.
  const { name, ...props } = event as { name: string } & Record<string, unknown>;
  vercelTrack(name, props as Record<string, string | number | boolean | null>);
}
