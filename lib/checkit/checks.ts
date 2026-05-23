// The 20 CheckIt checks. Each is a pure async function that takes a
// FetchCtx (the page we already fetched, plus any precomputed PSI data)
// and returns a CheckResult. The orchestrator in audit.ts runs them all
// in parallel and assembles the per-dimension scorecard.
//
// Why regex over a real HTML parser: keeps the dependency surface zero
// (we don't ship cheerio) and the misses we'd catch with a real parser
// — malformed tags, weird quoting — also tell us a site is broken.

import { fetchWithTimeout, stripTags, truncate } from "./util";
import type { CheckResult } from "./types";

export interface PsiData {
  lcpMs?: number;
  cls?: number;
  totalByteWeight?: number;
}

export interface FetchCtx {
  inputUrl: URL;
  finalUrl: URL;
  status: number;
  html: string;
  headers: Headers;
  psi?: PsiData;
}

// Subdomains that scream "vibe-coded side project." Order matters for
// matching — we use endsWith so longer matches naturally win.
const PLATFORM_HOSTS = [
  ".vercel.app",
  ".netlify.app",
  ".netlify.com",
  ".github.io",
  ".gitlab.io",
  ".pages.dev",
  ".workers.dev",
  ".herokuapp.com",
  ".firebaseapp.com",
  ".web.app",
  ".replit.dev",
  ".repl.co",
  ".lovable.app",
  ".bolt.new",
  ".bolt.diy",
  ".onrender.com",
  ".fly.dev",
  ".railway.app",
  ".surge.sh",
  ".wixsite.com",
  ".weebly.com",
  ".webflow.io",
  ".framer.app",
  ".framer.website",
  ".carrd.co",
  ".typedream.com",
];

const TITLE_BLOCKLIST = new Set([
  "",
  "create next app",
  "vite + react",
  "vite + react + ts",
  "vite + vue",
  "vite app",
  "react app",
  "document",
  "untitled",
  "home",
  "page",
  "index",
  "next.js",
  "new project",
  "my app",
  "hello world",
]);

// ── Brand & Identity ──────────────────────────────────────────────────────

export async function customDomain(ctx: FetchCtx): Promise<CheckResult> {
  const host = ctx.finalUrl.hostname.toLowerCase();
  const platform = PLATFORM_HOSTS.find((p) => host.endsWith(p));
  return {
    id: "custom-domain",
    label: "Custom domain",
    pass: !platform,
    detail: platform
      ? `Your URL ends in ${platform} — users read this as "side project, not yet a product."`
      : `Custom domain ${host} — reads as a real product.`,
  };
}

export async function realFavicon(ctx: FetchCtx): Promise<CheckResult> {
  // Look for any <link rel="icon" ...> (also matches "shortcut icon").
  let faviconUrl: URL | null = null;
  const linkRe = /<link\b[^>]*rel=["'][^"']*\bicon\b[^"']*["'][^>]*>/gi;
  let m: RegExpExecArray | null;
  while ((m = linkRe.exec(ctx.html))) {
    const href = m[0].match(/href=["']([^"']+)["']/i)?.[1];
    if (href) {
      try {
        faviconUrl = new URL(href, ctx.finalUrl);
        break;
      } catch {
        /* keep looking */
      }
    }
  }
  if (!faviconUrl) {
    faviconUrl = new URL("/favicon.ico", ctx.finalUrl);
  }

  try {
    const res = await fetchWithTimeout(faviconUrl.toString(), { method: "HEAD" }, 5000);
    if (res.ok) {
      return {
        id: "real-favicon",
        label: "Favicon present",
        pass: true,
        detail: `Favicon loads from ${faviconUrl.pathname}.`,
      };
    }
    return {
      id: "real-favicon",
      label: "Favicon present",
      pass: false,
      detail: `Favicon at ${faviconUrl.pathname} returned ${res.status}.`,
    };
  } catch {
    return {
      id: "real-favicon",
      label: "Favicon present",
      pass: false,
      detail: `Could not load favicon from ${faviconUrl.pathname}.`,
    };
  }
}

export async function ogImage(ctx: FetchCtx): Promise<CheckResult> {
  // og:image meta — try both attribute orders.
  const match =
    ctx.html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i) ||
    ctx.html.match(/<meta\s+content=["']([^"']+)["']\s+property=["']og:image["']/i) ||
    ctx.html.match(/<meta\s+name=["']og:image["']\s+content=["']([^"']+)["']/i);

  if (!match) {
    return {
      id: "og-image",
      label: "OG image set",
      pass: false,
      detail: `No og:image meta tag — links to this page render as a blank box on Slack, Twitter, WhatsApp.`,
    };
  }

  let imgUrl: URL;
  try {
    imgUrl = new URL(match[1], ctx.finalUrl);
  } catch {
    return {
      id: "og-image",
      label: "OG image set",
      pass: false,
      detail: `og:image points to "${truncate(match[1], 40)}" — not a valid URL.`,
    };
  }

  try {
    const res = await fetchWithTimeout(imgUrl.toString(), { method: "HEAD" }, 5000);
    return {
      id: "og-image",
      label: "OG image set",
      pass: res.ok,
      detail: res.ok
        ? `og:image loads from ${imgUrl.host}.`
        : `og:image URL returned ${res.status} — link previews render blank.`,
    };
  } catch {
    return {
      id: "og-image",
      label: "OG image set",
      pass: false,
      detail: `Could not reach og:image at ${imgUrl.host}.`,
    };
  }
}

export async function realTitle(ctx: FetchCtx): Promise<CheckResult> {
  const match = ctx.html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = match ? stripTags(match[1]).trim() : "";
  const lower = title.toLowerCase();
  const isDefault = TITLE_BLOCKLIST.has(lower) || !title || title.length < 5;
  return {
    id: "real-title",
    label: "Descriptive page title",
    pass: !isDefault,
    detail: !title
      ? `No <title> tag — Google and browser tabs show your URL instead.`
      : isDefault
      ? `Title is "${title}" — looks like a framework default.`
      : `Title is "${truncate(title, 60)}".`,
  };
}

// ── Performance (needs PSI) ───────────────────────────────────────────────

export async function lcp(ctx: FetchCtx): Promise<CheckResult> {
  const lcpMs = ctx.psi?.lcpMs;
  if (lcpMs === undefined) {
    return {
      id: "lcp",
      label: "Largest Contentful Paint < 2.5s",
      pass: false,
      detail: `Could not measure — Google PageSpeed didn't return data for this URL.`,
    };
  }
  const sec = (lcpMs / 1000).toFixed(1);
  const pass = lcpMs < 2500;
  return {
    id: "lcp",
    label: "Largest Contentful Paint < 2.5s",
    pass,
    detail: pass
      ? `LCP is ${sec}s — users see your content fast.`
      : `LCP is ${sec}s — most visitors give up before the page paints.`,
  };
}

export async function cls(ctx: FetchCtx): Promise<CheckResult> {
  const v = ctx.psi?.cls;
  if (v === undefined) {
    return {
      id: "cls",
      label: "Cumulative Layout Shift < 0.1",
      pass: false,
      detail: `Could not measure layout shift.`,
    };
  }
  const pass = v < 0.1;
  return {
    id: "cls",
    label: "Cumulative Layout Shift < 0.1",
    pass,
    detail: pass
      ? `CLS is ${v.toFixed(3)} — layout stays put as the page loads.`
      : `CLS is ${v.toFixed(3)} — elements jump around. Feels janky.`,
  };
}

export async function pageWeight(ctx: FetchCtx): Promise<CheckResult> {
  const bytes = ctx.psi?.totalByteWeight;
  if (bytes === undefined) {
    // Fall back to HTML-only size — incomplete but better than nothing.
    const htmlBytes = new TextEncoder().encode(ctx.html).length;
    return {
      id: "page-weight",
      label: "Total page weight < 2MB",
      pass: htmlBytes < 2_000_000,
      detail: `Only measured HTML (${(htmlBytes / 1024).toFixed(0)}KB) — PSI total unavailable.`,
    };
  }
  const mb = (bytes / 1_048_576).toFixed(2);
  const pass = bytes < 2_000_000;
  return {
    id: "page-weight",
    label: "Total page weight < 2MB",
    pass,
    detail: pass
      ? `Page weighs ${mb}MB — light enough for mobile 4G.`
      : `Page weighs ${mb}MB — too heavy for the average mobile connection.`,
  };
}

export async function modernImages(ctx: FetchCtx): Promise<CheckResult> {
  const tags = Array.from(ctx.html.matchAll(/<img\b[^>]*>/gi)).map((m) => m[0]);
  if (tags.length === 0) {
    return {
      id: "modern-images",
      label: "Modern image formats or lazy loading",
      pass: true,
      detail: `No <img> tags on the page — nothing to optimize.`,
    };
  }
  let good = 0;
  for (const tag of tags) {
    const src = tag.match(/src=["']([^"']+)["']/i)?.[1] ?? "";
    const isModern = /\.(webp|avif)(\?|#|$)/i.test(src);
    const isLazy = /loading=["']?lazy["']?/i.test(tag);
    const isInline = /^data:/i.test(src);
    if (isModern || isLazy || isInline) good++;
  }
  const ratio = good / tags.length;
  const pass = ratio >= 0.8;
  return {
    id: "modern-images",
    label: "Modern image formats or lazy loading",
    pass,
    detail: pass
      ? `${good}/${tags.length} images use webp/avif or lazy-load.`
      : `Only ${good}/${tags.length} images optimized — the rest block initial paint.`,
  };
}

// ── SEO & Discoverability ─────────────────────────────────────────────────

export async function metaDescription(ctx: FetchCtx): Promise<CheckResult> {
  const match =
    ctx.html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i) ||
    ctx.html.match(/<meta\s+content=["']([^"']*)["']\s+name=["']description["']/i);
  const desc = match ? match[1].trim() : "";
  const pass = desc.length >= 50 && desc.length <= 160;
  return {
    id: "meta-description",
    label: "Meta description (50–160 chars)",
    pass,
    detail: !desc
      ? `No meta description — Google guesses what your page is about.`
      : desc.length < 50
      ? `Meta description is only ${desc.length} chars — too short to be useful.`
      : desc.length > 160
      ? `Meta description is ${desc.length} chars — Google truncates after ~160.`
      : `Meta description is ${desc.length} chars and sets clear expectations.`,
  };
}

export async function robotsTxt(ctx: FetchCtx): Promise<CheckResult> {
  const url = new URL("/robots.txt", ctx.finalUrl).toString();
  try {
    const res = await fetchWithTimeout(url, {}, 5000);
    if (!res.ok) {
      return {
        id: "robots-txt",
        label: "robots.txt accessible",
        pass: false,
        detail: `/robots.txt returned ${res.status} — crawlers don't know what to do.`,
      };
    }
    const body = await res.text();
    const hasSitemap = /sitemap\s*:/i.test(body);
    return {
      id: "robots-txt",
      label: "robots.txt accessible",
      pass: true,
      detail: hasSitemap
        ? `robots.txt found and points crawlers to your sitemap.`
        : `robots.txt found — consider adding a "Sitemap:" line.`,
    };
  } catch {
    return {
      id: "robots-txt",
      label: "robots.txt accessible",
      pass: false,
      detail: `Could not reach /robots.txt.`,
    };
  }
}

export async function sitemapXml(ctx: FetchCtx): Promise<CheckResult> {
  const candidates = ["/sitemap.xml", "/sitemap_index.xml", "/sitemap-index.xml"];
  for (const path of candidates) {
    try {
      const url = new URL(path, ctx.finalUrl).toString();
      const res = await fetchWithTimeout(url, {}, 5000);
      if (!res.ok) continue;
      const body = await res.text();
      const count = (body.match(/<loc>/g) || []).length;
      return {
        id: "sitemap-xml",
        label: "sitemap.xml present",
        pass: count > 0,
        detail:
          count > 0
            ? `Found ${path} with ${count} URLs.`
            : `${path} loads but is empty.`,
      };
    } catch {
      /* try next */
    }
  }
  return {
    id: "sitemap-xml",
    label: "sitemap.xml present",
    pass: false,
    detail: `No sitemap found — Google has to guess which pages exist.`,
  };
}

export async function singleH1(ctx: FetchCtx): Promise<CheckResult> {
  const matches = Array.from(ctx.html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi));
  if (matches.length === 0) {
    return {
      id: "single-h1",
      label: "Exactly one descriptive H1",
      pass: false,
      detail: `No <h1> tag — search engines can't identify the page's main topic.`,
    };
  }
  if (matches.length > 1) {
    return {
      id: "single-h1",
      label: "Exactly one descriptive H1",
      pass: false,
      detail: `Found ${matches.length} <h1> tags — should be exactly one per page.`,
    };
  }
  const text = stripTags(matches[0][1]).trim();
  const pass = text.length >= 5;
  return {
    id: "single-h1",
    label: "Exactly one descriptive H1",
    pass,
    detail: pass
      ? `Single H1: "${truncate(text, 60)}"`
      : `H1 is "${text}" — too short to convey the page's purpose.`,
  };
}

// ── UX & Conversion ───────────────────────────────────────────────────────

export async function viewportMeta(ctx: FetchCtx): Promise<CheckResult> {
  const match = ctx.html.match(/<meta\s+name=["']viewport["']\s+content=["']([^"']+)["']/i);
  const content = match ? match[1] : "";
  const pass = /width=device-width/i.test(content);
  return {
    id: "viewport-meta",
    label: "Mobile viewport configured",
    pass,
    detail: !match
      ? `No <meta name="viewport"> — page renders zoomed-out on phones.`
      : pass
      ? `Viewport tag set for mobile.`
      : `Viewport tag exists but is missing width=device-width.`,
  };
}

export async function primaryCta(ctx: FetchCtx): Promise<CheckResult> {
  const buttonCount = (ctx.html.match(/<button\b/gi) || []).length;
  const ctaLinkCount = (
    ctx.html.match(/<a\b[^>]*class=["'][^"']*(?:btn|button|cta)[^"']*["'][^>]*>/gi) || []
  ).length;
  const total = buttonCount + ctaLinkCount;
  const pass = total >= 2;
  return {
    id: "primary-cta",
    label: "Clear call-to-action",
    pass,
    detail: pass
      ? `Found ${total} button-like elements — users have clear actions.`
      : `Only ${total} clear CTA${total === 1 ? "" : "s"} — visitors don't know what to do next.`,
  };
}

export async function h1ValueProp(ctx: FetchCtx): Promise<CheckResult> {
  const match = ctx.html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
  if (!match) {
    return {
      id: "h1-value-prop",
      label: "H1 names the value proposition",
      pass: false,
      detail: `No <h1> — visitors have to read the whole page to learn what this is.`,
    };
  }
  const text = stripTags(match[1]).trim();
  const words = text.split(/\s+/).filter(Boolean).length;
  const pass = words >= 4 && words <= 20;
  return {
    id: "h1-value-prop",
    label: "H1 names the value proposition",
    pass,
    detail: words < 4
      ? `H1 "${text}" is only ${words} word${words === 1 ? "" : "s"} — not enough to explain the product.`
      : words > 20
      ? `H1 has ${words} words — too long to scan in 5 seconds.`
      : `H1 is "${truncate(text, 80)}".`,
  };
}

export async function navigation(ctx: FetchCtx): Promise<CheckResult> {
  const hasNav = /<nav\b/i.test(ctx.html);
  const linkCount = (ctx.html.match(/<a\b[^>]+href=/gi) || []).length;
  const pass = hasNav || linkCount >= 4;
  return {
    id: "navigation",
    label: "Navigation present",
    pass,
    detail: hasNav
      ? `<nav> element found — visitors have somewhere to go.`
      : linkCount >= 4
      ? `${linkCount} links on the page — visitors can explore.`
      : `Only ${linkCount} link${linkCount === 1 ? "" : "s"} — page is a dead end.`,
  };
}

// ── Trust & Compliance ────────────────────────────────────────────────────

export async function httpsEnforced(ctx: FetchCtx): Promise<CheckResult> {
  const pass = ctx.finalUrl.protocol === "https:";
  return {
    id: "https-enforced",
    label: "HTTPS enforced",
    pass,
    detail: pass
      ? `Site loads over HTTPS.`
      : `Site loads over ${ctx.finalUrl.protocol} — browsers show a "Not Secure" warning.`,
  };
}

export async function privacyLink(ctx: FetchCtx): Promise<CheckResult> {
  const links = Array.from(ctx.html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi));
  const re = /privacy|terms|legal|policy|tos/i;
  const found = links.find(([, href, inner]) => re.test(href) || re.test(stripTags(inner)));
  return {
    id: "privacy-link",
    label: "Privacy / Terms link",
    pass: !!found,
    detail: found
      ? `Found link to "${truncate(stripTags(found[2]).trim() || found[1], 40)}".`
      : `No privacy or terms link on the page — required once you collect any user data.`,
  };
}

export async function custom404(ctx: FetchCtx): Promise<CheckResult> {
  const randomPath = `/checkit-probe-${Math.random().toString(36).slice(2, 10)}`;
  const url = new URL(randomPath, ctx.finalUrl).toString();
  try {
    const res = await fetchWithTimeout(url, {}, 6000);
    // 200 → SPA serving a catch-all shell (Next.js, Vite SPA, etc.)
    if (res.status === 200) {
      return {
        id: "custom-404",
        label: "Custom 404 handling",
        pass: true,
        detail: `Unknown path returns 200 — handled by your client-side router.`,
      };
    }
    if (res.status === 404) {
      const body = await res.text();
      const visible = stripTags(body).replace(/\s+/g, " ").trim();
      const pass = visible.length > 80;
      return {
        id: "custom-404",
        label: "Custom 404 handling",
        pass,
        detail: pass
          ? `404 page returns ${visible.length} chars of content — looks custom.`
          : `404 returns ${visible.length} chars — looks like the framework default.`,
      };
    }
    return {
      id: "custom-404",
      label: "Custom 404 handling",
      pass: false,
      detail: `Unknown path returned ${res.status} instead of 404.`,
    };
  } catch {
    return {
      id: "custom-404",
      label: "Custom 404 handling",
      pass: false,
      detail: `Could not test 404 behavior.`,
    };
  }
}

const SOCIAL_HOSTS = [
  "twitter.com",
  "x.com",
  "linkedin.com",
  "github.com",
  "instagram.com",
  "facebook.com",
  "youtube.com",
  "threads.net",
  "mastodon.social",
  "bsky.app",
];

export async function identitySignal(ctx: FetchCtx): Promise<CheckResult> {
  const html = ctx.html;
  const hasAboutContact = /<a\b[^>]*href=["'][^"']*(?:\/about|\/contact|mailto:)/i.test(html);
  const hasSocial = SOCIAL_HOSTS.some((h) =>
    new RegExp(`href=["'][^"']*${h.replace(/\./g, "\\.")}`, "i").test(html),
  );
  const pass = hasAboutContact || hasSocial;
  return {
    id: "identity-signal",
    label: "Identity or contact signal",
    pass,
    detail: pass
      ? hasAboutContact
        ? `Found About, Contact, or email link.`
        : `Found social media link in the page.`
      : `No About / Contact / social link — visitors can't tell who's behind this.`,
  };
}
