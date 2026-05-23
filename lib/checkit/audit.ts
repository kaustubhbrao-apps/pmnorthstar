// CheckIt orchestrator. Fetches the page once + PageSpeed Insights in
// parallel, then runs all 20 checks and assembles the scorecard.
//
// Time budget: ~30s worst-case. PSI dominates (can be 20s+ for a cold
// audit). The HTML fetch is bounded to 12s; per-check sub-fetches
// (robots, sitemap, favicon, og image, 404 probe) to 5-6s each. If a
// check times out it returns pass:false with a "couldn't measure"
// detail — the audit always completes.

import * as Checks from "./checks";
import type { FetchCtx, PsiData } from "./checks";
import { DIMENSIONS } from "./dimensions";
import type { AuditResult, DimensionResult } from "./types";
import { bandFor } from "./types";
import { fetchWithTimeout, normalizeUrl } from "./util";

const HTML_TIMEOUT_MS = 12_000;
const PSI_TIMEOUT_MS = 22_000;

export async function runAudit(rawUrl: string): Promise<AuditResult> {
  const url = normalizeUrl(rawUrl);
  if (!url) {
    return fatalResult(rawUrl, `"${rawUrl}" isn't a valid URL.`);
  }

  // 1. Fetch the page HTML (the source for 14 of the 20 checks).
  let html = "";
  let finalUrl = url;
  let status = 0;
  let headers = new Headers();

  try {
    const res = await fetchWithTimeout(url.toString(), {}, HTML_TIMEOUT_MS);
    status = res.status;
    headers = res.headers;
    finalUrl = new URL(res.url);
    html = await res.text();
  } catch (e) {
    const msg = e instanceof Error ? e.message : "fetch failed";
    return fatalResult(url.toString(), `Could not load the URL (${msg}).`);
  }

  if (status >= 400 || !html) {
    return fatalResult(url.toString(), `Site returned HTTP ${status}. Audit needs a page that loads.`);
  }

  // 2. Kick off PSI in parallel with the per-check sub-fetches.
  const psi = await fetchPsi(finalUrl.toString());

  const ctx: FetchCtx = {
    inputUrl: url,
    finalUrl,
    status,
    html,
    headers,
    psi,
  };

  // 3. Run all 20 checks in parallel.
  const results = await Promise.all([
    Checks.customDomain(ctx),
    Checks.realFavicon(ctx),
    Checks.ogImage(ctx),
    Checks.realTitle(ctx),
    Checks.lcp(ctx),
    Checks.cls(ctx),
    Checks.pageWeight(ctx),
    Checks.modernImages(ctx),
    Checks.metaDescription(ctx),
    Checks.robotsTxt(ctx),
    Checks.sitemapXml(ctx),
    Checks.singleH1(ctx),
    Checks.viewportMeta(ctx),
    Checks.primaryCta(ctx),
    Checks.h1ValueProp(ctx),
    Checks.navigation(ctx),
    Checks.httpsEnforced(ctx),
    Checks.privacyLink(ctx),
    Checks.custom404(ctx),
    Checks.identitySignal(ctx),
  ]);

  const byId = new Map(results.map((r) => [r.id, r]));

  const dimensions: DimensionResult[] = DIMENSIONS.map((d) => {
    const checks = d.checkIds.map((id) => {
      const r = byId.get(id);
      if (!r) {
        // Should be impossible — checkIds are typed against the audit set.
        throw new Error(`Missing check result for "${id}"`);
      }
      return r;
    });
    const passed = checks.filter((c) => c.pass).length;
    return {
      id: d.id,
      label: d.label,
      score: passed * 5, // 4 × 5 = 20 max
      checks,
    };
  });

  const total = dimensions.reduce((sum, d) => sum + d.score, 0);

  return {
    url: rawUrl,
    finalUrl: finalUrl.toString(),
    fetchedAt: new Date().toISOString(),
    totalScore: total,
    band: bandFor(total),
    dimensions,
  };
}

async function fetchPsi(targetUrl: string): Promise<PsiData | undefined> {
  // Google PageSpeed Insights v5. Anonymous calls are allowed but rate
  // limited; for production scale add a key via GOOGLE_API_KEY env var.
  const params = new URLSearchParams({
    url: targetUrl,
    strategy: "mobile",
    category: "performance",
  });
  if (process.env.GOOGLE_API_KEY) {
    params.set("key", process.env.GOOGLE_API_KEY);
  }
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params}`;

  try {
    const res = await fetchWithTimeout(apiUrl, {}, PSI_TIMEOUT_MS);
    if (!res.ok) return undefined;
    const data = (await res.json()) as {
      lighthouseResult?: { audits?: Record<string, { numericValue?: number }> };
    };
    const audits = data?.lighthouseResult?.audits ?? {};
    return {
      lcpMs: audits["largest-contentful-paint"]?.numericValue,
      cls: audits["cumulative-layout-shift"]?.numericValue,
      totalByteWeight: audits["total-byte-weight"]?.numericValue,
    };
  } catch {
    return undefined;
  }
}

function fatalResult(url: string, message: string): AuditResult {
  return {
    url,
    finalUrl: url,
    fetchedAt: new Date().toISOString(),
    totalScore: 0,
    band: "vibe",
    dimensions: [],
    fatalError: message,
  };
}
