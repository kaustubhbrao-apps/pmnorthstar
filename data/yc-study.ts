// ⚠️  AUTO-GENERATED — DO NOT EDIT BY HAND.
// Produced by scripts/yc-audit-study.ts. Aggregate only: no per-company
// scores are recorded, by design.

export interface StudyCheck { id: string; label: string; passRate: number }
export interface StudyDimension { id: string; label: string; avgPct: number; maxPoints: number }

export const YC_STUDY = {
  "ranAt": "2026-09-07",
  "attempted": 500,
  "audited": 496,
  "unreachable": 4,
  "mean": 70,
  "median": 71,
  "p10": 55,
  "p90": 83,
  "buckets": [
    {
      "range": "0-9",
      "count": 0
    },
    {
      "range": "10-19",
      "count": 0
    },
    {
      "range": "20-29",
      "count": 0
    },
    {
      "range": "30-39",
      "count": 0
    },
    {
      "range": "40-49",
      "count": 16
    },
    {
      "range": "50-59",
      "count": 65
    },
    {
      "range": "60-69",
      "count": 138
    },
    {
      "range": "70-79",
      "count": 180
    },
    {
      "range": "80-89",
      "count": 91
    },
    {
      "range": "90-99",
      "count": 6
    }
  ],
  "checks": [
    {
      "id": "hsts-preload",
      "label": "HSTS preload eligible",
      "passRate": 12.9
    },
    {
      "id": "manifest-json",
      "label": "Web App Manifest present",
      "passRate": 18.1
    },
    {
      "id": "csp-header",
      "label": "Content-Security-Policy set",
      "passRate": 19.6
    },
    {
      "id": "layout-shift-prevention",
      "label": "Layout shift prevention",
      "passRate": 24.6
    },
    {
      "id": "structured-data",
      "label": "Structured data (JSON-LD)",
      "passRate": 31.9
    },
    {
      "id": "theme-color",
      "label": "Theme color meta tag",
      "passRate": 34.5
    },
    {
      "id": "secure-transport",
      "label": "Secure transport (HTTPS + headers)",
      "passRate": 35.5
    },
    {
      "id": "modern-images",
      "label": "Modern image formats or lazy loading",
      "passRate": 41.9
    },
    {
      "id": "alt-text-coverage",
      "label": "Image alt text coverage",
      "passRate": 49
    },
    {
      "id": "ttfb",
      "label": "Server responds in under 600ms",
      "passRate": 50.6
    },
    {
      "id": "privacy-link",
      "label": "Privacy / Terms link",
      "passRate": 58.3
    },
    {
      "id": "apple-touch-icon",
      "label": "Apple touch icon present",
      "passRate": 59.1
    },
    {
      "id": "meta-description",
      "label": "Meta description (50 to 160 chars)",
      "passRate": 60.7
    },
    {
      "id": "canonical-url",
      "label": "Canonical URL set",
      "passRate": 66.9
    },
    {
      "id": "sitemap-xml",
      "label": "sitemap.xml present",
      "passRate": 67.7
    },
    {
      "id": "title-length",
      "label": "Title length 30-60 chars",
      "passRate": 69.4
    },
    {
      "id": "h1-value-prop",
      "label": "H1 names the value proposition",
      "passRate": 69.6
    },
    {
      "id": "aria-landmarks",
      "label": "ARIA landmarks present",
      "passRate": 70
    },
    {
      "id": "heading-hierarchy",
      "label": "Heading hierarchy valid",
      "passRate": 70.4
    },
    {
      "id": "og-completeness",
      "label": "Open Graph link preview",
      "passRate": 70.6
    },
    {
      "id": "twitter-card",
      "label": "Twitter card meta tags",
      "passRate": 70.8
    },
    {
      "id": "primary-cta",
      "label": "Clear call-to-action",
      "passRate": 73.8
    },
    {
      "id": "html-payload",
      "label": "Initial HTML under 200KB",
      "passRate": 79
    },
    {
      "id": "identity-signal",
      "label": "Identity or contact signal",
      "passRate": 80.2
    },
    {
      "id": "robots-txt",
      "label": "robots.txt accessible",
      "passRate": 81.3
    },
    {
      "id": "form-labels",
      "label": "Form inputs are labeled",
      "passRate": 85.5
    },
    {
      "id": "custom-404",
      "label": "Custom 404 handling",
      "passRate": 93.1
    },
    {
      "id": "compression",
      "label": "HTTP compression enabled",
      "passRate": 97.4
    },
    {
      "id": "real-favicon",
      "label": "Favicon present",
      "passRate": 98
    },
    {
      "id": "lang-attribute",
      "label": "Language declared on <html>",
      "passRate": 99
    },
    {
      "id": "placeholder-text",
      "label": "No placeholder text",
      "passRate": 99.2
    },
    {
      "id": "real-title",
      "label": "Descriptive page title",
      "passRate": 99.2
    },
    {
      "id": "render-blocking-scripts",
      "label": "Render-blocking scripts ≤ 2",
      "passRate": 99.6
    },
    {
      "id": "viewport-meta",
      "label": "Mobile viewport configured",
      "passRate": 99.8
    },
    {
      "id": "custom-domain",
      "label": "Custom domain",
      "passRate": 100
    }
  ],
  "dimensions": [
    {
      "id": "trust",
      "label": "Trust & Compliance",
      "avgPct": 56.3,
      "maxPoints": 17
    },
    {
      "id": "seo",
      "label": "SEO & Discoverability",
      "avgPct": 58,
      "maxPoints": 15
    },
    {
      "id": "performance",
      "label": "Performance",
      "avgPct": 59.5,
      "maxPoints": 18
    },
    {
      "id": "standards",
      "label": "Modern Web Standards",
      "avgPct": 62.8,
      "maxPoints": 7
    },
    {
      "id": "polish",
      "label": "Polish & Foundations",
      "avgPct": 75.6,
      "maxPoints": 8
    },
    {
      "id": "ux",
      "label": "UX & Conversion",
      "avgPct": 85,
      "maxPoints": 20
    },
    {
      "id": "brand",
      "label": "Brand & Identity",
      "avgPct": 90.8,
      "maxPoints": 15
    }
  ],
  "batches": [
    {
      "batch": "Winter 2027",
      "count": 1
    },
    {
      "batch": "Fall 2026",
      "count": 34
    },
    {
      "batch": "Summer 2026",
      "count": 235
    },
    {
      "batch": "Spring 2026",
      "count": 193
    },
    {
      "batch": "Winter 2026",
      "count": 33
    }
  ],
  "industries": [
    {
      "industry": "B2B",
      "count": 268,
      "avg": 72.7
    },
    {
      "industry": "Healthcare",
      "count": 42,
      "avg": 70.3
    },
    {
      "industry": "Consumer",
      "count": 30,
      "avg": 69.4
    },
    {
      "industry": "Fintech",
      "count": 42,
      "avg": 67.7
    },
    {
      "industry": "Industrials",
      "count": 97,
      "avg": 64.2
    }
  ]
} as const;
