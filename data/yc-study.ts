// ⚠️  AUTO-GENERATED — DO NOT EDIT BY HAND.
// Produced by scripts/yc-audit-study.ts. Carries the aggregate stats plus one
// row per audited company (name, batch, domain, score, band, logo), sorted by
// score descending. Re-run the script to refresh; hand edits are lost.

export interface StudyCheck { id: string; label: string; passRate: number }
export interface StudyDimension { id: string; label: string; avgPct: number; maxPoints: number }
export interface StudyRow { name: string; slug: string; batch: string; domain: string; score: number; band: string; logo: boolean }

export const YC_STUDY = {
  "ranAt": "2026-09-07",
  "attempted": 500,
  "audited": 496,
  "unreachable": 4,
  "mean": 70.3,
  "median": 71,
  "p10": 56,
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
      "count": 15
    },
    {
      "range": "50-59",
      "count": 63
    },
    {
      "range": "60-69",
      "count": 146
    },
    {
      "range": "70-79",
      "count": 175
    },
    {
      "range": "80-89",
      "count": 92
    },
    {
      "range": "90-99",
      "count": 5
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
      "passRate": 55.2
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
      "passRate": 69.2
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
      "id": "twitter-card",
      "label": "Twitter card meta tags",
      "passRate": 70.8
    },
    {
      "id": "og-completeness",
      "label": "Open Graph link preview",
      "passRate": 71
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
      "passRate": 93.3
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
      "avgPct": 60.8,
      "maxPoints": 18
    },
    {
      "id": "standards",
      "label": "Modern Web Standards",
      "avgPct": 62.7,
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
      "avgPct": 90.9,
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
      "avg": 73
    },
    {
      "industry": "Healthcare",
      "count": 42,
      "avg": 70.5
    },
    {
      "industry": "Consumer",
      "count": 30,
      "avg": 69.6
    },
    {
      "industry": "Fintech",
      "count": 42,
      "avg": 68
    },
    {
      "industry": "Industrials",
      "count": 97,
      "avg": 64.4
    }
  ],
  "rows": [
    {
      "name": "Didit",
      "slug": "didit",
      "batch": "Winter 2026",
      "domain": "didit.me",
      "score": 94,
      "band": "stellar",
      "logo": true
    },
    {
      "name": "Insurf",
      "slug": "insurf",
      "batch": "Summer 2026",
      "domain": "insurf.io",
      "score": 93,
      "band": "stellar",
      "logo": true
    },
    {
      "name": "Agent FM",
      "slug": "agent-fm",
      "batch": "Summer 2026",
      "domain": "agentfm.ai",
      "score": 91,
      "band": "stellar",
      "logo": true
    },
    {
      "name": "Hedge",
      "slug": "hedge",
      "batch": "Spring 2026",
      "domain": "hedgespecialty.com",
      "score": 91,
      "band": "stellar",
      "logo": true
    },
    {
      "name": "Prescience, Inc.",
      "slug": "prescience-inc",
      "batch": "Summer 2026",
      "domain": "getprescience.com",
      "score": 90,
      "band": "stellar",
      "logo": true
    },
    {
      "name": "Experiential Labs",
      "slug": "experiential-labs",
      "batch": "Summer 2026",
      "domain": "experientiallabs.ai",
      "score": 89,
      "band": "ready",
      "logo": true
    },
    {
      "name": "OneCLI",
      "slug": "onecli",
      "batch": "Summer 2026",
      "domain": "onecli.sh",
      "score": 89,
      "band": "ready",
      "logo": true
    },
    {
      "name": "OpenTag",
      "slug": "opentag",
      "batch": "Summer 2026",
      "domain": "tryopentag.com",
      "score": 89,
      "band": "ready",
      "logo": true
    },
    {
      "name": "RightNow",
      "slug": "rightnow",
      "batch": "Fall 2026",
      "domain": "runinfra.ai",
      "score": 89,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Risklytics",
      "slug": "risklytics",
      "batch": "Summer 2026",
      "domain": "risklytics.ai",
      "score": 89,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Cosmic Robotics",
      "slug": "cosmic-robotics",
      "batch": "Summer 2026",
      "domain": "cosmicrobotics.com",
      "score": 88,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Harbor",
      "slug": "runharbor",
      "batch": "Spring 2026",
      "domain": "runharbor.com",
      "score": 88,
      "band": "ready",
      "logo": true
    },
    {
      "name": "IMPACT Drones",
      "slug": "impact-drones",
      "batch": "Summer 2026",
      "domain": "impact-drones.com",
      "score": 88,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Perceptron ML",
      "slug": "perceptron-ml",
      "batch": "Summer 2026",
      "domain": "perceptronml.com",
      "score": 88,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Poth Labs",
      "slug": "poth-labs",
      "batch": "Summer 2026",
      "domain": "pothlabs.com",
      "score": 88,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Rapidfolio",
      "slug": "rapidfolio",
      "batch": "Summer 2026",
      "domain": "rapidfolio.com",
      "score": 88,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Superset",
      "slug": "superset",
      "batch": "Spring 2026",
      "domain": "superset.sh",
      "score": 88,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Trident",
      "slug": "trident",
      "batch": "Summer 2026",
      "domain": "tridentsecurity.io",
      "score": 88,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Tsenta",
      "slug": "tsenta",
      "batch": "Summer 2026",
      "domain": "tsenta.com",
      "score": 88,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Pluto",
      "slug": "talentpluto",
      "batch": "Summer 2026",
      "domain": "talentpluto.com",
      "score": 87,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Framewise Health",
      "slug": "framewise-health",
      "batch": "Spring 2026",
      "domain": "framewisehealth.com",
      "score": 86,
      "band": "ready",
      "logo": true
    },
    {
      "name": "HEVN, inc",
      "slug": "hevn-inc",
      "batch": "Spring 2026",
      "domain": "gethevn.com",
      "score": 86,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Robocurve",
      "slug": "robocurve",
      "batch": "Summer 2026",
      "domain": "robocurve.org",
      "score": 86,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Stoa",
      "slug": "stoa",
      "batch": "Summer 2026",
      "domain": "stoaexchange.com",
      "score": 86,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Trope",
      "slug": "trope",
      "batch": "Summer 2026",
      "domain": "trope.ai",
      "score": 86,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Ardent",
      "slug": "ardent",
      "batch": "Spring 2026",
      "domain": "tryardent.com",
      "score": 85,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Bloomy",
      "slug": "bloomy",
      "batch": "Summer 2026",
      "domain": "bloomylearning.com",
      "score": 85,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Hubble",
      "slug": "hubble-ai",
      "batch": "Summer 2026",
      "domain": "hubble.ai",
      "score": 85,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Last Accounting Company",
      "slug": "last-accounting-company",
      "batch": "Summer 2026",
      "domain": "lastaccountingcompany.com",
      "score": 85,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Mireye",
      "slug": "mireye",
      "batch": "Summer 2026",
      "domain": "mireye.com",
      "score": 85,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Rindler",
      "slug": "rindler",
      "batch": "Summer 2026",
      "domain": "maxxwell.dev",
      "score": 85,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Traceforce",
      "slug": "traceforce",
      "batch": "Summer 2026",
      "domain": "traceforce.ai",
      "score": 85,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Zomma",
      "slug": "zomma",
      "batch": "Summer 2026",
      "domain": "zommalabs.com",
      "score": 85,
      "band": "ready",
      "logo": true
    },
    {
      "name": "AICE",
      "slug": "aice",
      "batch": "Spring 2026",
      "domain": "aicepower.com",
      "score": 84,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Almanac",
      "slug": "almanac",
      "batch": "Summer 2026",
      "domain": "usealmanac.com",
      "score": 84,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Arctic Health",
      "slug": "arctic-health",
      "batch": "Spring 2026",
      "domain": "arctic.health",
      "score": 84,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Avoca Systems",
      "slug": "avoca-systems",
      "batch": "Summer 2026",
      "domain": "avocasystems.com",
      "score": 84,
      "band": "ready",
      "logo": true
    },
    {
      "name": "CoArena",
      "slug": "coarena",
      "batch": "Summer 2026",
      "domain": "coarena.ai",
      "score": 84,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Decawork",
      "slug": "decawork",
      "batch": "Summer 2026",
      "domain": "decawork.ai",
      "score": 84,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Egoist Machines",
      "slug": "egoist-machines",
      "batch": "Summer 2026",
      "domain": "ego.ist",
      "score": 84,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Expanse",
      "slug": "expanse",
      "batch": "Spring 2026",
      "domain": "expanse.sh",
      "score": 84,
      "band": "ready",
      "logo": true
    },
    {
      "name": "FlowManual",
      "slug": "flowmanual",
      "batch": "Summer 2026",
      "domain": "flowmanual.com",
      "score": 84,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Oddpool",
      "slug": "oddpool",
      "batch": "Spring 2026",
      "domain": "oddpool.com",
      "score": 84,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Pacific",
      "slug": "pacific",
      "batch": "Summer 2026",
      "domain": "gopacific.ai",
      "score": 84,
      "band": "ready",
      "logo": true
    },
    {
      "name": "screenpipe",
      "slug": "screenpipe",
      "batch": "Summer 2026",
      "domain": "screenpipe.com",
      "score": 84,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Alkera AI",
      "slug": "alkera-ai",
      "batch": "Summer 2026",
      "domain": "alkera.ai",
      "score": 83,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Axelrod",
      "slug": "axelrod",
      "batch": "Summer 2026",
      "domain": "axelrod.live",
      "score": 83,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Complir",
      "slug": "complir",
      "batch": "Spring 2026",
      "domain": "complir.io",
      "score": 83,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Donkey",
      "slug": "donkey",
      "batch": "Summer 2026",
      "domain": "donkey.trade",
      "score": 83,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Hessian",
      "slug": "hessian",
      "batch": "Spring 2026",
      "domain": "hessian.sh",
      "score": 83,
      "band": "ready",
      "logo": true
    },
    {
      "name": "LemonLime",
      "slug": "lemonlime",
      "batch": "Summer 2026",
      "domain": "lemonlime.com",
      "score": 83,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Lyon",
      "slug": "lyon",
      "batch": "Summer 2026",
      "domain": "lyon.so",
      "score": 83,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Pavoot",
      "slug": "pavoot",
      "batch": "Spring 2026",
      "domain": "pavoot.com",
      "score": 83,
      "band": "ready",
      "logo": true
    },
    {
      "name": "primitive",
      "slug": "primitive",
      "batch": "Spring 2026",
      "domain": "primitive.dev",
      "score": 83,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Rational",
      "slug": "rational",
      "batch": "Summer 2026",
      "domain": "rational.to",
      "score": 83,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Revnu",
      "slug": "revnu",
      "batch": "Spring 2026",
      "domain": "revnu.com",
      "score": 83,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Button Computer",
      "slug": "button-computer",
      "batch": "Winter 2026",
      "domain": "buttoncomputer.com",
      "score": 82,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Codag",
      "slug": "codag",
      "batch": "Summer 2026",
      "domain": "codag.ai",
      "score": 82,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Context.dev",
      "slug": "contextdev",
      "batch": "Summer 2026",
      "domain": "context.dev",
      "score": 82,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Minicor",
      "slug": "minicor",
      "batch": "Spring 2026",
      "domain": "minicor.com",
      "score": 82,
      "band": "ready",
      "logo": true
    },
    {
      "name": "OneTriangle",
      "slug": "onetriangle",
      "batch": "Summer 2026",
      "domain": "onetriangle.ai",
      "score": 82,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Panta",
      "slug": "panta",
      "batch": "Winter 2026",
      "domain": "pantainsure.com",
      "score": 82,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Rex",
      "slug": "rex-inc",
      "batch": "Summer 2026",
      "domain": "rex.inc",
      "score": 82,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Tasklet",
      "slug": "tasklet-2",
      "batch": "Spring 2026",
      "domain": "tasklet.ai",
      "score": 82,
      "band": "ready",
      "logo": true
    },
    {
      "name": "TesterArmy",
      "slug": "testerarmy",
      "batch": "Spring 2026",
      "domain": "tester.army",
      "score": 82,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Userlens",
      "slug": "userlens",
      "batch": "Spring 2026",
      "domain": "userlens.io",
      "score": 82,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Vector Legal",
      "slug": "vector-legal",
      "batch": "Winter 2026",
      "domain": "vectorlegal.com",
      "score": 82,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Voquill",
      "slug": "voquill",
      "batch": "Spring 2026",
      "domain": "voquill.com",
      "score": 82,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Agency Tool Company",
      "slug": "agency-tool-company",
      "batch": "Summer 2026",
      "domain": "agencytool.com",
      "score": 81,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Archal",
      "slug": "archal",
      "batch": "Summer 2026",
      "domain": "archal.ai",
      "score": 81,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Bloom",
      "slug": "trybloom",
      "batch": "Spring 2026",
      "domain": "trybloom.ai",
      "score": 81,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Captain",
      "slug": "captain",
      "batch": "Winter 2026",
      "domain": "captain.dev",
      "score": 81,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Datoric",
      "slug": "datoric",
      "batch": "Summer 2026",
      "domain": "datoric.com",
      "score": 81,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Dreach",
      "slug": "dreach",
      "batch": "Spring 2026",
      "domain": "dreach.ai",
      "score": 81,
      "band": "ready",
      "logo": true
    },
    {
      "name": "hardware intelligence",
      "slug": "hardware-intelligence",
      "batch": "Summer 2026",
      "domain": "hardwareintelligence.ai",
      "score": 81,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Instaplay",
      "slug": "instaplay",
      "batch": "Summer 2026",
      "domain": "instaplay.ai",
      "score": 81,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Inth",
      "slug": "inth",
      "batch": "Spring 2026",
      "domain": "inth.com",
      "score": 81,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Marker",
      "slug": "marker",
      "batch": "Summer 2026",
      "domain": "onmarker.com",
      "score": 81,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Ontora",
      "slug": "ontora",
      "batch": "Spring 2026",
      "domain": "ontora.com",
      "score": 81,
      "band": "ready",
      "logo": true
    },
    {
      "name": "tday.com",
      "slug": "tdaycom",
      "batch": "Spring 2026",
      "domain": "tday.com",
      "score": 81,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Trellis",
      "slug": "trellistech",
      "batch": "Spring 2026",
      "domain": "trellistech.com",
      "score": 81,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Aktoria Robotics",
      "slug": "aktoria-robotics",
      "batch": "Summer 2026",
      "domain": "aktoria.com",
      "score": 80,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Allowance",
      "slug": "allowance",
      "batch": "Spring 2026",
      "domain": "useallowance.com",
      "score": 80,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Asendia AI",
      "slug": "asendia-ai",
      "batch": "Spring 2026",
      "domain": "asendia.ai",
      "score": 80,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Chert",
      "slug": "chert",
      "batch": "Spring 2026",
      "domain": "trychert.com",
      "score": 80,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Corvera",
      "slug": "corvera",
      "batch": "Winter 2026",
      "domain": "corvera.ai",
      "score": 80,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Lightfield",
      "slug": "lightfield",
      "batch": "Fall 2026",
      "domain": "trylightfield.ai",
      "score": 80,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Marble",
      "slug": "joinmarble",
      "batch": "Summer 2026",
      "domain": "joinmarble.ai",
      "score": 80,
      "band": "ready",
      "logo": true
    },
    {
      "name": "OpenWork",
      "slug": "openwork",
      "batch": "Spring 2026",
      "domain": "openworklabs.com",
      "score": 80,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Orchestra",
      "slug": "orchestra",
      "batch": "Summer 2026",
      "domain": "orchestra.ai",
      "score": 80,
      "band": "ready",
      "logo": false
    },
    {
      "name": "ProvenMetal",
      "slug": "provenmetal",
      "batch": "Summer 2026",
      "domain": "provenmetal.com",
      "score": 80,
      "band": "ready",
      "logo": true
    },
    {
      "name": "RentAHuman",
      "slug": "rentahuman",
      "batch": "Spring 2026",
      "domain": "rentahuman.ai",
      "score": 80,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Sazabi",
      "slug": "sazabi",
      "batch": "Spring 2026",
      "domain": "sazabi.com",
      "score": 80,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Sherpa",
      "slug": "sherpa",
      "batch": "Spring 2026",
      "domain": "withsherpa.ai",
      "score": 80,
      "band": "ready",
      "logo": true
    },
    {
      "name": "The Company Company",
      "slug": "the-company-company",
      "batch": "Spring 2026",
      "domain": "thecompany.company",
      "score": 80,
      "band": "ready",
      "logo": true
    },
    {
      "name": "transload",
      "slug": "transload",
      "batch": "Spring 2026",
      "domain": "transload.ai",
      "score": 80,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Vendo",
      "slug": "vendo",
      "batch": "Summer 2026",
      "domain": "vendo.run",
      "score": 80,
      "band": "ready",
      "logo": true
    },
    {
      "name": "Agentic Fabriq",
      "slug": "agentic-fabriq",
      "batch": "Winter 2026",
      "domain": "agenticfabriq.com",
      "score": 79,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Allia Health",
      "slug": "allia-health",
      "batch": "Summer 2026",
      "domain": "allia.health",
      "score": 79,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Astraea",
      "slug": "astraea",
      "batch": "Spring 2026",
      "domain": "tryastraea.com",
      "score": 79,
      "band": "almost",
      "logo": true
    },
    {
      "name": "BentoLabs AI",
      "slug": "bentolabs-ai",
      "batch": "Spring 2026",
      "domain": "bentolabs.ai",
      "score": 79,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Definite",
      "slug": "definite",
      "batch": "Summer 2026",
      "domain": "usedefinite.com",
      "score": 79,
      "band": "almost",
      "logo": true
    },
    {
      "name": "flowscope",
      "slug": "flowscope",
      "batch": "Spring 2026",
      "domain": "flowscope.com",
      "score": 79,
      "band": "almost",
      "logo": true
    },
    {
      "name": "FullSeam",
      "slug": "fullseam",
      "batch": "Winter 2026",
      "domain": "fullseam.com",
      "score": 79,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Glen",
      "slug": "glen",
      "batch": "Summer 2026",
      "domain": "tryglen.com",
      "score": 79,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Graphify Labs",
      "slug": "graphify-labs",
      "batch": "Summer 2026",
      "domain": "graphify.com",
      "score": 79,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Hexa",
      "slug": "hexa",
      "batch": "Spring 2026",
      "domain": "hexaagents.com",
      "score": 79,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Hoplite",
      "slug": "hoplite",
      "batch": "Summer 2026",
      "domain": "hoplite.sh",
      "score": 79,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Infera",
      "slug": "infera",
      "batch": "Spring 2026",
      "domain": "infera.bio",
      "score": 79,
      "band": "almost",
      "logo": true
    },
    {
      "name": "InsForge",
      "slug": "insforge",
      "batch": "Spring 2026",
      "domain": "insforge.dev",
      "score": 79,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Interfaze",
      "slug": "interfaze",
      "batch": "Spring 2026",
      "domain": "interfaze.ai",
      "score": 79,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Keyframe Labs",
      "slug": "keyframe-labs",
      "batch": "Spring 2026",
      "domain": "keyframelabs.com",
      "score": 79,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Klarify",
      "slug": "klarify",
      "batch": "Spring 2026",
      "domain": "klarify.ca",
      "score": 79,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Kuli",
      "slug": "kuli",
      "batch": "Spring 2026",
      "domain": "kuli.one",
      "score": 79,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Neuromorphic",
      "slug": "neuromorphic",
      "batch": "Summer 2026",
      "domain": "neuromorphic.vision",
      "score": 79,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Peer",
      "slug": "peer",
      "batch": "Summer 2026",
      "domain": "peer-freight.com",
      "score": 79,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Scope",
      "slug": "scope",
      "batch": "Spring 2026",
      "domain": "tryscope.app",
      "score": 79,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Studio",
      "slug": "studio",
      "batch": "Summer 2026",
      "domain": "trystudio.ai",
      "score": 79,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Tracer",
      "slug": "tracer",
      "batch": "Summer 2026",
      "domain": "tracerml.ai",
      "score": 79,
      "band": "almost",
      "logo": true
    },
    {
      "name": "6thSense",
      "slug": "6thsense",
      "batch": "Summer 2026",
      "domain": "6thsense.dev",
      "score": 78,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Agnost AI",
      "slug": "agnost-ai",
      "batch": "Summer 2026",
      "domain": "agnost.ai",
      "score": 78,
      "band": "almost",
      "logo": false
    },
    {
      "name": "Arden",
      "slug": "arden",
      "batch": "Spring 2026",
      "domain": "ardentech.ai",
      "score": 78,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Callab AI",
      "slug": "callab-ai",
      "batch": "Spring 2026",
      "domain": "callab.ai",
      "score": 78,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Dock",
      "slug": "dock",
      "batch": "Summer 2026",
      "domain": "trydock.ai",
      "score": 78,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Gigacatalyst",
      "slug": "gigacatalyst",
      "batch": "Spring 2026",
      "domain": "gigacatalyst.com",
      "score": 78,
      "band": "almost",
      "logo": true
    },
    {
      "name": "InstaAgent",
      "slug": "instaagent",
      "batch": "Spring 2026",
      "domain": "instaagent.com",
      "score": 78,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Nebula Security",
      "slug": "nebula-security",
      "batch": "Summer 2026",
      "domain": "nebusec.ai",
      "score": 78,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Nine Fives",
      "slug": "nine-fives",
      "batch": "Spring 2026",
      "domain": "ninefives.com",
      "score": 78,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Pollen",
      "slug": "pollen",
      "batch": "Winter 2026",
      "domain": "pollen.cx",
      "score": 78,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Pops",
      "slug": "pops",
      "batch": "Spring 2026",
      "domain": "pops.fyi",
      "score": 78,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Quippy",
      "slug": "quippy",
      "batch": "Fall 2026",
      "domain": "quippyapp.com",
      "score": 78,
      "band": "almost",
      "logo": true
    },
    {
      "name": "RonanRx Inc.",
      "slug": "ronanrx-inc",
      "batch": "Summer 2026",
      "domain": "ronanrx.com",
      "score": 78,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Sidekick",
      "slug": "textsidekick",
      "batch": "Summer 2026",
      "domain": "textsidekick.com",
      "score": 78,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Silmaril",
      "slug": "silmaril",
      "batch": "Spring 2026",
      "domain": "silmaril.dev",
      "score": 78,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Simulithic",
      "slug": "simulithic",
      "batch": "Fall 2026",
      "domain": "simulithic.com",
      "score": 78,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Velum Labs",
      "slug": "velum-labs",
      "batch": "Winter 2026",
      "domain": "velum-labs.com",
      "score": 78,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Arga Labs",
      "slug": "arga-labs",
      "batch": "Spring 2026",
      "domain": "argalabs.com",
      "score": 77,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Arlo Industries",
      "slug": "arlo-industries",
      "batch": "Spring 2026",
      "domain": "arlo1.com",
      "score": 77,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Bernard",
      "slug": "bernard",
      "batch": "Summer 2026",
      "domain": "bernardhq.com",
      "score": 77,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Buildbox",
      "slug": "buildbox",
      "batch": "Summer 2026",
      "domain": "heybuildbox.com",
      "score": 77,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Caution",
      "slug": "caution",
      "batch": "Summer 2026",
      "domain": "caution.co",
      "score": 77,
      "band": "almost",
      "logo": true
    },
    {
      "name": "CentralComs",
      "slug": "centralcoms",
      "batch": "Spring 2026",
      "domain": "centralcoms.com",
      "score": 77,
      "band": "almost",
      "logo": true
    },
    {
      "name": "CharacterQuilt",
      "slug": "characterquilt",
      "batch": "Spring 2026",
      "domain": "characterquilt.com",
      "score": 77,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Lamb Labs",
      "slug": "lamb-labs",
      "batch": "Summer 2026",
      "domain": "lamb-labs.com",
      "score": 77,
      "band": "almost",
      "logo": true
    },
    {
      "name": "LATO",
      "slug": "lato",
      "batch": "Summer 2026",
      "domain": "latolabs.io",
      "score": 77,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Manicule",
      "slug": "manicule",
      "batch": "Spring 2026",
      "domain": "manicule.com",
      "score": 77,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Meteoric",
      "slug": "meteoric",
      "batch": "Summer 2026",
      "domain": "meteoric.earth",
      "score": 77,
      "band": "almost",
      "logo": true
    },
    {
      "name": "OpenRelay",
      "slug": "openrelay",
      "batch": "Summer 2026",
      "domain": "openrelay.inc",
      "score": 77,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Oxus",
      "slug": "oxus",
      "batch": "Winter 2026",
      "domain": "oxus-ai.com",
      "score": 77,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Runtime",
      "slug": "runtime",
      "batch": "Spring 2026",
      "domain": "runtm.com",
      "score": 77,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Travo",
      "slug": "travo",
      "batch": "Winter 2026",
      "domain": "travoai.com",
      "score": 77,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Veeza AI",
      "slug": "veeza-ai",
      "batch": "Fall 2026",
      "domain": "veeza.ai",
      "score": 77,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Arzana",
      "slug": "arzana",
      "batch": "Spring 2026",
      "domain": "arzana.com",
      "score": 76,
      "band": "almost",
      "logo": true
    },
    {
      "name": "CarSignal",
      "slug": "carsignal",
      "batch": "Summer 2026",
      "domain": "trycarsignal.com",
      "score": 76,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Chronicle Labs",
      "slug": "chronicle-labs",
      "batch": "Spring 2026",
      "domain": "chronicle-labs.com",
      "score": 76,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Control Seat",
      "slug": "control-seat",
      "batch": "Summer 2026",
      "domain": "controlseat.com",
      "score": 76,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Denta",
      "slug": "denta",
      "batch": "Summer 2026",
      "domain": "denta.com",
      "score": 76,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Edviro",
      "slug": "edviro",
      "batch": "Summer 2026",
      "domain": "edviroenergy.com",
      "score": 76,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Elyra",
      "slug": "elyra",
      "batch": "Spring 2026",
      "domain": "elyrasystems.com",
      "score": 76,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Gutgutgoose",
      "slug": "gutgutgoose",
      "batch": "Summer 2026",
      "domain": "gutgutgoose.com",
      "score": 76,
      "band": "almost",
      "logo": true
    },
    {
      "name": "herdr",
      "slug": "herdr",
      "batch": "Fall 2026",
      "domain": "herdr.dev",
      "score": 76,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Hub",
      "slug": "hub",
      "batch": "Spring 2026",
      "domain": "hub.xyz",
      "score": 76,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Kinect",
      "slug": "kinect",
      "batch": "Spring 2026",
      "domain": "trykinect.ai",
      "score": 76,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Klaimee",
      "slug": "klaimee",
      "batch": "Spring 2026",
      "domain": "klaimee.ai",
      "score": 76,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Luca IQ",
      "slug": "luca-iq",
      "batch": "Summer 2026",
      "domain": "lucaiq.com",
      "score": 76,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Multiplier",
      "slug": "multiplier",
      "batch": "Spring 2026",
      "domain": "multiplier.ai",
      "score": 76,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Nex",
      "slug": "nex",
      "batch": "Summer 2026",
      "domain": "nex.ai",
      "score": 76,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Palette",
      "slug": "palette-2",
      "batch": "Summer 2026",
      "domain": "palettelabs.com",
      "score": 76,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Pango",
      "slug": "pango",
      "batch": "Summer 2026",
      "domain": "pango.ai",
      "score": 76,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Parasma",
      "slug": "parasma",
      "batch": "Summer 2026",
      "domain": "parasma.com",
      "score": 76,
      "band": "almost",
      "logo": true
    },
    {
      "name": "TareBio",
      "slug": "tarebio",
      "batch": "Summer 2026",
      "domain": "tarebio.com",
      "score": 76,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Wato",
      "slug": "wato",
      "batch": "Spring 2026",
      "domain": "watolabs.com",
      "score": 76,
      "band": "almost",
      "logo": true
    },
    {
      "name": "AgentPhone",
      "slug": "agentphone",
      "batch": "Spring 2026",
      "domain": "agentphone.ai",
      "score": 75,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Atlia",
      "slug": "atlia",
      "batch": "Summer 2026",
      "domain": "atlia.com",
      "score": 75,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Clara",
      "slug": "clara-2",
      "batch": "Spring 2026",
      "domain": "askclara.com",
      "score": 75,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Conifer",
      "slug": "conifer",
      "batch": "Summer 2026",
      "domain": "conifer.build",
      "score": 75,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Executor",
      "slug": "executor",
      "batch": "Summer 2026",
      "domain": "executor.sh",
      "score": 75,
      "band": "almost",
      "logo": true
    },
    {
      "name": "GovGuard",
      "slug": "govguard",
      "batch": "Spring 2026",
      "domain": "govguard.com",
      "score": 75,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Juno",
      "slug": "juno-chat",
      "batch": "Spring 2026",
      "domain": "junocompanion.com",
      "score": 75,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Kinro",
      "slug": "kinro",
      "batch": "Spring 2026",
      "domain": "kinro.com",
      "score": 75,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Litmus",
      "slug": "litmus-hiring",
      "batch": "Summer 2026",
      "domain": "litmushiring.com",
      "score": 75,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Miso Labs",
      "slug": "miso-labs",
      "batch": "Spring 2026",
      "domain": "misolabs.ai",
      "score": 75,
      "band": "almost",
      "logo": true
    },
    {
      "name": "OnePatch",
      "slug": "onepatch",
      "batch": "Fall 2026",
      "domain": "onepatch.dev",
      "score": 75,
      "band": "almost",
      "logo": true
    },
    {
      "name": "OpenTrade",
      "slug": "opentrade",
      "batch": "Summer 2026",
      "domain": "opentrade.live",
      "score": 75,
      "band": "almost",
      "logo": false
    },
    {
      "name": "Ploy",
      "slug": "ploy",
      "batch": "Spring 2026",
      "domain": "ploy.ai",
      "score": 75,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Sentient OS",
      "slug": "sentient-os",
      "batch": "Fall 2026",
      "domain": "sentient-os.ai",
      "score": 75,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Skymerse",
      "slug": "skymerse",
      "batch": "Summer 2026",
      "domain": "skymerse.com",
      "score": 75,
      "band": "almost",
      "logo": true
    },
    {
      "name": "BioStack Platforms",
      "slug": "biostack-platforms",
      "batch": "Spring 2026",
      "domain": "getbiostack.com",
      "score": 74,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Callbook AI",
      "slug": "callbook-ai",
      "batch": "Summer 2026",
      "domain": "callbook.ai",
      "score": 74,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Eden Robotics",
      "slug": "eden-robotics",
      "batch": "Spring 2026",
      "domain": "edenrobotics.ai",
      "score": 74,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Forward",
      "slug": "useforward",
      "batch": "Fall 2026",
      "domain": "useforward.co",
      "score": 74,
      "band": "almost",
      "logo": true
    },
    {
      "name": "MOCHI.TV",
      "slug": "mochitv",
      "batch": "Summer 2026",
      "domain": "mochi.tv",
      "score": 74,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Ooak Data",
      "slug": "ooak-data",
      "batch": "Summer 2026",
      "domain": "ooakdata.com",
      "score": 74,
      "band": "almost",
      "logo": true
    },
    {
      "name": "OpenProse",
      "slug": "openprose",
      "batch": "Spring 2026",
      "domain": "prose.md",
      "score": 74,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Pairio",
      "slug": "pairio",
      "batch": "Spring 2026",
      "domain": "pairio.com",
      "score": 74,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Payna",
      "slug": "payna",
      "batch": "Winter 2026",
      "domain": "payna.com",
      "score": 74,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Prized",
      "slug": "prized",
      "batch": "Summer 2026",
      "domain": "prized.dev",
      "score": 74,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Prototyping.io",
      "slug": "prototypingio",
      "batch": "Spring 2026",
      "domain": "prototyping.io",
      "score": 74,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Qlo",
      "slug": "qlo",
      "batch": "Summer 2026",
      "domain": "getqlo.com",
      "score": 74,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Redoubt Insurance",
      "slug": "redoubt-insurance",
      "batch": "Fall 2026",
      "domain": "redoubt.agency",
      "score": 74,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Signals",
      "slug": "signals",
      "batch": "Winter 2026",
      "domain": "returnsignals.com",
      "score": 74,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Speko",
      "slug": "speko",
      "batch": "Summer 2026",
      "domain": "speko.ai",
      "score": 74,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Stratum Industries",
      "slug": "stratum-industries",
      "batch": "Summer 2026",
      "domain": "stratumindustries.co",
      "score": 74,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Zaplar",
      "slug": "zaplar",
      "batch": "Summer 2026",
      "domain": "zaplar.com",
      "score": 74,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Cerenovus",
      "slug": "cerenovus",
      "batch": "Summer 2026",
      "domain": "cerenovus.ai",
      "score": 73,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Clawvisor",
      "slug": "clawvisor",
      "batch": "Spring 2026",
      "domain": "clawvisor.com",
      "score": 73,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Ekho Labs",
      "slug": "ekho-labs",
      "batch": "Summer 2026",
      "domain": "ekholabs.com",
      "score": 73,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Kimpton",
      "slug": "kimpton",
      "batch": "Spring 2026",
      "domain": "kimpton.ai",
      "score": 73,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Lab0",
      "slug": "lab0",
      "batch": "Spring 2026",
      "domain": "lab0.ai",
      "score": 73,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Lantern AI",
      "slug": "lantern-ai",
      "batch": "Fall 2026",
      "domain": "lantern.md",
      "score": 73,
      "band": "almost",
      "logo": true
    },
    {
      "name": "LightSprint",
      "slug": "lightsprint",
      "batch": "Spring 2026",
      "domain": "lightsprint.ai",
      "score": 73,
      "band": "almost",
      "logo": true
    },
    {
      "name": "machine0",
      "slug": "machine0",
      "batch": "Summer 2026",
      "domain": "machine0.io",
      "score": 73,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Palisade",
      "slug": "palisade",
      "batch": "Summer 2026",
      "domain": "palisade.run",
      "score": 73,
      "band": "almost",
      "logo": true
    },
    {
      "name": "RASPIRE",
      "slug": "raspire",
      "batch": "Spring 2026",
      "domain": "raspire.com",
      "score": 73,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Salesgraph",
      "slug": "salesgraph",
      "batch": "Spring 2026",
      "domain": "salesgraph.com",
      "score": 73,
      "band": "almost",
      "logo": true
    },
    {
      "name": "smol machines",
      "slug": "smol-machines",
      "batch": "Spring 2026",
      "domain": "smolmachines.com",
      "score": 73,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Sunflower",
      "slug": "sunflower",
      "batch": "Summer 2026",
      "domain": "sunflowerclinic.com",
      "score": 73,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Waybill",
      "slug": "waybill",
      "batch": "Summer 2026",
      "domain": "waybill.to",
      "score": 73,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Alloovium",
      "slug": "alloovium",
      "batch": "Summer 2026",
      "domain": "alloovium.com",
      "score": 72,
      "band": "almost",
      "logo": true
    },
    {
      "name": "antimattr",
      "slug": "antimattr",
      "batch": "Fall 2026",
      "domain": "antimattr.one",
      "score": 72,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Armature",
      "slug": "armature",
      "batch": "Spring 2026",
      "domain": "armature.tech",
      "score": 72,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Autumn AI",
      "slug": "autumn-ai",
      "batch": "Winter 2026",
      "domain": "autumn.ai",
      "score": 72,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Click",
      "slug": "click",
      "batch": "Summer 2026",
      "domain": "useclick.ai",
      "score": 72,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Degla Inc",
      "slug": "degla-inc",
      "batch": "Fall 2026",
      "domain": "degla.ai",
      "score": 72,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Fuchsia",
      "slug": "fuchsia",
      "batch": "Spring 2026",
      "domain": "getfuchsia.ai",
      "score": 72,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Greypoint Industries",
      "slug": "greypoint-industries",
      "batch": "Summer 2026",
      "domain": "greypointindustries.com",
      "score": 72,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Grocalo",
      "slug": "grocalo",
      "batch": "Summer 2026",
      "domain": "grocalo.com",
      "score": 72,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Hebbian Robotics",
      "slug": "hebbian-robotics",
      "batch": "Summer 2026",
      "domain": "hebbianrobotics.com",
      "score": 72,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Lattice Health",
      "slug": "lattice-health",
      "batch": "Spring 2026",
      "domain": "latticehealthai.com",
      "score": 72,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Libra Robotics",
      "slug": "libra-robotics",
      "batch": "Summer 2026",
      "domain": "librabots.com",
      "score": 72,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Lumeria",
      "slug": "lumeria",
      "batch": "Summer 2026",
      "domain": "lumeria.skin",
      "score": 72,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Mochatrade",
      "slug": "mochatrade",
      "batch": "Spring 2026",
      "domain": "mochatrade.com",
      "score": 72,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Mosaic",
      "slug": "mosaic-inc",
      "batch": "Summer 2026",
      "domain": "mosaic.inc",
      "score": 72,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Osmaura",
      "slug": "osmaura",
      "batch": "Summer 2026",
      "domain": "osmaura.com",
      "score": 72,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Radley",
      "slug": "radley",
      "batch": "Summer 2026",
      "domain": "radley.health",
      "score": 72,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Rasyn",
      "slug": "rasyn",
      "batch": "Summer 2026",
      "domain": "rasyn.ai",
      "score": 72,
      "band": "almost",
      "logo": true
    },
    {
      "name": "RealPact",
      "slug": "realpact",
      "batch": "Summer 2026",
      "domain": "realpact.ai",
      "score": 72,
      "band": "almost",
      "logo": true
    },
    {
      "name": "River Markets",
      "slug": "river-markets",
      "batch": "Spring 2026",
      "domain": "rivermarkets.com",
      "score": 72,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Totalis",
      "slug": "totalis",
      "batch": "Spring 2026",
      "domain": "totalis.trade",
      "score": 72,
      "band": "almost",
      "logo": true
    },
    {
      "name": "ARC Prize Foundation",
      "slug": "arc-prize-foundation",
      "batch": "Winter 2026",
      "domain": "arcprize.org",
      "score": 71,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Enjamb Labs",
      "slug": "enjamb-labs",
      "batch": "Spring 2026",
      "domain": "enjamb.ai",
      "score": 71,
      "band": "almost",
      "logo": true
    },
    {
      "name": "FinalDose",
      "slug": "finaldose",
      "batch": "Spring 2026",
      "domain": "finaldose.ai",
      "score": 71,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Foresight",
      "slug": "foresight",
      "batch": "Spring 2026",
      "domain": "foresight.tt",
      "score": 71,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Galactic Resource Utilization Space, Inc. (GRU Space)",
      "slug": "galactic-resource-utilization-space-inc-gru-space",
      "batch": "Winter 2026",
      "domain": "gru.space",
      "score": 71,
      "band": "almost",
      "logo": true
    },
    {
      "name": "GitCafe",
      "slug": "gitcafe",
      "batch": "Summer 2026",
      "domain": "git.cafe",
      "score": 71,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Kebra",
      "slug": "kebra",
      "batch": "Summer 2026",
      "domain": "kebra.com",
      "score": 71,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Memory Store",
      "slug": "memory-store",
      "batch": "Spring 2026",
      "domain": "memory.store",
      "score": 71,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Modern",
      "slug": "modern",
      "batch": "Spring 2026",
      "domain": "getmodern.ai",
      "score": 71,
      "band": "almost",
      "logo": true
    },
    {
      "name": "OS3",
      "slug": "os3",
      "batch": "Summer 2026",
      "domain": "os3robotics.com",
      "score": 71,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Parrot",
      "slug": "useparrot",
      "batch": "Spring 2026",
      "domain": "useparrot.com",
      "score": 71,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Petrarch",
      "slug": "petrarch",
      "batch": "Summer 2026",
      "domain": "petrarch.co",
      "score": 71,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Saudara AI",
      "slug": "saudara-ai",
      "batch": "Spring 2026",
      "domain": "saudara.ai",
      "score": 71,
      "band": "almost",
      "logo": true
    },
    {
      "name": "SpaceFlow Technologies, Inc.",
      "slug": "spaceflow-technologies-inc",
      "batch": "Summer 2026",
      "domain": "spaceflow.tech",
      "score": 71,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Tenor",
      "slug": "tenor",
      "batch": "Summer 2026",
      "domain": "heytenor.com",
      "score": 71,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Applied Electrodynamics, Inc.",
      "slug": "applied-electrodynamics-inc",
      "batch": "Summer 2026",
      "domain": "ae-dyn.com",
      "score": 70,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Billow AI Labs",
      "slug": "billow-ai-labs",
      "batch": "Summer 2026",
      "domain": "thebillow.ai",
      "score": 70,
      "band": "almost",
      "logo": true
    },
    {
      "name": "COACH",
      "slug": "ai-coach",
      "batch": "Summer 2026",
      "domain": "getcoach.com",
      "score": 70,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Dipole Labs",
      "slug": "dipole-labs",
      "batch": "Summer 2026",
      "domain": "dipolelabs.com",
      "score": 70,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Gravy",
      "slug": "gravy",
      "batch": "Spring 2026",
      "domain": "gravy.finance",
      "score": 70,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Hlabs",
      "slug": "hlabs",
      "batch": "Winter 2026",
      "domain": "hlaboratories.com",
      "score": 70,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Inkbox",
      "slug": "inkbox",
      "batch": "Summer 2026",
      "domain": "inkbox.ai",
      "score": 70,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Inviscid AI",
      "slug": "inviscid-ai",
      "batch": "Winter 2026",
      "domain": "inviscidai.com",
      "score": 70,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Magma",
      "slug": "magma",
      "batch": "Summer 2026",
      "domain": "magmahq.ai",
      "score": 70,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Origin",
      "slug": "origin-bio",
      "batch": "Winter 2026",
      "domain": "origin.bio",
      "score": 70,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Osseus",
      "slug": "osseus",
      "batch": "Summer 2026",
      "domain": "osseus.ai",
      "score": 70,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Overdrive Health",
      "slug": "overdrive-health",
      "batch": "Winter 2026",
      "domain": "overdrive.health",
      "score": 70,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Playabl.ai",
      "slug": "playablai",
      "batch": "Spring 2026",
      "domain": "playabl.ai",
      "score": 70,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Replicas",
      "slug": "replicas",
      "batch": "Spring 2026",
      "domain": "replicas.dev",
      "score": 70,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Result",
      "slug": "result",
      "batch": "Spring 2026",
      "domain": "result.dev",
      "score": 70,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Stage",
      "slug": "stage",
      "batch": "Spring 2026",
      "domain": "tryluke.dev",
      "score": 70,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Superlog",
      "slug": "superlog",
      "batch": "Spring 2026",
      "domain": "superlog.sh",
      "score": 70,
      "band": "almost",
      "logo": true
    },
    {
      "name": "Torus",
      "slug": "torus",
      "batch": "Summer 2026",
      "domain": "usetorus.com",
      "score": 70,
      "band": "almost",
      "logo": true
    },
    {
      "name": "9 Mothers",
      "slug": "9-mothers-corporation",
      "batch": "Spring 2026",
      "domain": "9mothers.com",
      "score": 69,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Alchemize",
      "slug": "alchemize",
      "batch": "Spring 2026",
      "domain": "tryalchemize.com",
      "score": 69,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Assemble",
      "slug": "assemble",
      "batch": "Summer 2026",
      "domain": "assemble.ai",
      "score": 69,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Async",
      "slug": "withasync",
      "batch": "Summer 2026",
      "domain": "withasync.com",
      "score": 69,
      "band": "polish",
      "logo": true
    },
    {
      "name": "jo",
      "slug": "jo",
      "batch": "Spring 2026",
      "domain": "askjo.ai",
      "score": 69,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Limrun",
      "slug": "limrun",
      "batch": "Spring 2026",
      "domain": "lim.run",
      "score": 69,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Mass Magnetics",
      "slug": "mass-magnetics",
      "batch": "Summer 2026",
      "domain": "massmagnetics.com",
      "score": 69,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Nodus Compute",
      "slug": "nodus-compute",
      "batch": "Fall 2026",
      "domain": "nodus-compute.ai",
      "score": 69,
      "band": "polish",
      "logo": true
    },
    {
      "name": "rekursiv.ai",
      "slug": "rekursivai",
      "batch": "Summer 2026",
      "domain": "rekursiv.ai",
      "score": 69,
      "band": "polish",
      "logo": true
    },
    {
      "name": "shotwell.ai",
      "slug": "shotwellai",
      "batch": "Spring 2026",
      "domain": "shotwell.ai",
      "score": 69,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Touchmark",
      "slug": "touchmark",
      "batch": "Summer 2026",
      "domain": "touchmark.ai",
      "score": 69,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Uno Wallet",
      "slug": "uno-wallet",
      "batch": "Spring 2026",
      "domain": "myunowallet.com",
      "score": 69,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Zolvo",
      "slug": "zolvo",
      "batch": "Spring 2026",
      "domain": "zolvo.com",
      "score": 69,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Akon Labs",
      "slug": "akon-labs",
      "batch": "Summer 2026",
      "domain": "akonlabs.com",
      "score": 68,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Amboras",
      "slug": "amboras",
      "batch": "Spring 2026",
      "domain": "amboras.com",
      "score": 68,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Arbital",
      "slug": "arbital",
      "batch": "Summer 2026",
      "domain": "arbital.xyz",
      "score": 68,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Discovered Materials",
      "slug": "discovered-materials",
      "batch": "Spring 2026",
      "domain": "discoveredmaterials.com",
      "score": 68,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Ekpa",
      "slug": "ekpa",
      "batch": "Summer 2026",
      "domain": "goekpa.com",
      "score": 68,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Fabraix",
      "slug": "fabraix",
      "batch": "Summer 2026",
      "domain": "fabraix.com",
      "score": 68,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Familiar",
      "slug": "familiar",
      "batch": "Summer 2026",
      "domain": "thefamiliarlab.com",
      "score": 68,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Financial Datasets",
      "slug": "financial-datasets",
      "batch": "Summer 2026",
      "domain": "financialdatasets.ai",
      "score": 68,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Gojiberry AI",
      "slug": "gojiberry-ai",
      "batch": "Spring 2026",
      "domain": "gojiberry.ai",
      "score": 68,
      "band": "polish",
      "logo": true
    },
    {
      "name": "GUILD",
      "slug": "guild",
      "batch": "Summer 2026",
      "domain": "guildai.co",
      "score": 68,
      "band": "polish",
      "logo": true
    },
    {
      "name": "HeyClicky",
      "slug": "heyclicky",
      "batch": "Spring 2026",
      "domain": "heyclicky.com",
      "score": 68,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Levocred AI",
      "slug": "levocred-ai",
      "batch": "Summer 2026",
      "domain": "levocred.com",
      "score": 68,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Markov",
      "slug": "markov",
      "batch": "Summer 2026",
      "domain": "markovstudios.com",
      "score": 68,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Olam Labs",
      "slug": "olam-labs",
      "batch": "Summer 2026",
      "domain": "olamlabs.ai",
      "score": 68,
      "band": "polish",
      "logo": true
    },
    {
      "name": "OpenVector",
      "slug": "openvector",
      "batch": "Summer 2026",
      "domain": "openvector.com",
      "score": 68,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Panacea",
      "slug": "panacea",
      "batch": "Spring 2026",
      "domain": "withpanacea.com",
      "score": 68,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Prodigy Research",
      "slug": "prodigy-research",
      "batch": "Summer 2026",
      "domain": "prodigy.markets",
      "score": 68,
      "band": "polish",
      "logo": true
    },
    {
      "name": "qomplement",
      "slug": "qomplement",
      "batch": "Spring 2026",
      "domain": "qomplement.com",
      "score": 68,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Shielded",
      "slug": "shielded",
      "batch": "Summer 2026",
      "domain": "shieldedglobal.com",
      "score": 68,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Shiraz AI",
      "slug": "shiraz-ai",
      "batch": "Summer 2026",
      "domain": "shiraz.ai",
      "score": 68,
      "band": "polish",
      "logo": true
    },
    {
      "name": "tash",
      "slug": "tash",
      "batch": "Summer 2026",
      "domain": "tash.cards",
      "score": 68,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Wondering",
      "slug": "wondering",
      "batch": "Summer 2026",
      "domain": "wondering.app",
      "score": 68,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Agentcard",
      "slug": "agentcard",
      "batch": "Summer 2026",
      "domain": "agentcard.sh",
      "score": 67,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Derya",
      "slug": "derya",
      "batch": "Summer 2026",
      "domain": "usederya.com",
      "score": 67,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Drafted",
      "slug": "drafted",
      "batch": "Spring 2026",
      "domain": "drafted.ai",
      "score": 67,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Hemlock",
      "slug": "hemlock",
      "batch": "Fall 2026",
      "domain": "hemlock.info",
      "score": 67,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Imperfect",
      "slug": "imperfect",
      "batch": "Spring 2026",
      "domain": "imperfect.co",
      "score": 67,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Lamina Labs",
      "slug": "lamina-labs",
      "batch": "Spring 2026",
      "domain": "laminalabs.ai",
      "score": 67,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Linzumi",
      "slug": "linzumi",
      "batch": "Spring 2026",
      "domain": "linzumi.com",
      "score": 67,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Mount",
      "slug": "mount",
      "batch": "Spring 2026",
      "domain": "mount.insure",
      "score": 67,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Omanta",
      "slug": "omanta",
      "batch": "Summer 2026",
      "domain": "omanta.com",
      "score": 67,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Orca Aerospace",
      "slug": "orca-aerospace",
      "batch": "Fall 2026",
      "domain": "orcaaerospace.com",
      "score": 67,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Savant",
      "slug": "savant",
      "batch": "Spring 2026",
      "domain": "heysavant.com",
      "score": 67,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Taiga",
      "slug": "taiga",
      "batch": "Spring 2026",
      "domain": "taigabilling.com",
      "score": 67,
      "band": "polish",
      "logo": true
    },
    {
      "name": "TakeCareOS",
      "slug": "takecareos",
      "batch": "Spring 2026",
      "domain": "takecareos.com",
      "score": 67,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Veltha",
      "slug": "veltha",
      "batch": "Fall 2026",
      "domain": "veltha.ai",
      "score": 67,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Wealor",
      "slug": "wealor",
      "batch": "Spring 2026",
      "domain": "wealor.ai",
      "score": 67,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Amorphic Labs",
      "slug": "amorphic-labs",
      "batch": "Summer 2026",
      "domain": "agentmuxer.com",
      "score": 66,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Cignara",
      "slug": "cignara",
      "batch": "Spring 2026",
      "domain": "cignara.com",
      "score": 66,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Haladir",
      "slug": "haladir",
      "batch": "Winter 2026",
      "domain": "haladir.com",
      "score": 66,
      "band": "polish",
      "logo": true
    },
    {
      "name": "hiloop",
      "slug": "hiloop",
      "batch": "Summer 2026",
      "domain": "hiloop.ai",
      "score": 66,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Humwork",
      "slug": "humwork",
      "batch": "Spring 2026",
      "domain": "humwork.ai",
      "score": 66,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Huscarl",
      "slug": "huscarl",
      "batch": "Spring 2026",
      "domain": "huscarl.io",
      "score": 66,
      "band": "polish",
      "logo": true
    },
    {
      "name": "KugelAudio",
      "slug": "kugelaudio",
      "batch": "Spring 2026",
      "domain": "kugelaudio.com",
      "score": 66,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Maritime",
      "slug": "maritime",
      "batch": "Fall 2026",
      "domain": "maritime.sh",
      "score": 66,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Saffron",
      "slug": "saffron",
      "batch": "Spring 2026",
      "domain": "trysaffron.ai",
      "score": 66,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Soria",
      "slug": "soria",
      "batch": "Spring 2026",
      "domain": "soriaanalytics.com",
      "score": 66,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Talos",
      "slug": "talos-us",
      "batch": "Fall 2026",
      "domain": "talos-us.com",
      "score": 66,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Vorelios",
      "slug": "vorelios",
      "batch": "Fall 2026",
      "domain": "vorelios.com",
      "score": 66,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Antropi Robotics",
      "slug": "antropi-robotics",
      "batch": "Fall 2026",
      "domain": "antropi.world",
      "score": 65,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Archer",
      "slug": "archer",
      "batch": "Spring 2026",
      "domain": "archermoney.com",
      "score": 65,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Ascii",
      "slug": "ascii",
      "batch": "Fall 2026",
      "domain": "box.ascii.dev",
      "score": 65,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Autostep",
      "slug": "autostep",
      "batch": "Spring 2026",
      "domain": "autostep.ai",
      "score": 65,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Collar",
      "slug": "collar",
      "batch": "Fall 2026",
      "domain": "usecollarai.com",
      "score": 65,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Computable",
      "slug": "computable",
      "batch": "Summer 2026",
      "domain": "getcomputable.com",
      "score": 65,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Edgerun",
      "slug": "edgerun",
      "batch": "Summer 2026",
      "domain": "edgerun.com",
      "score": 65,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Jcode",
      "slug": "jcode",
      "batch": "Summer 2026",
      "domain": "jcode.sh",
      "score": 65,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Marengo",
      "slug": "marengo",
      "batch": "Summer 2026",
      "domain": "marengox.com",
      "score": 65,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Napkin Math",
      "slug": "napkin-math",
      "batch": "Spring 2026",
      "domain": "napkinmath.club",
      "score": 65,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Neuron Industries",
      "slug": "neuron-industries",
      "batch": "Summer 2026",
      "domain": "neuronindustries.com",
      "score": 65,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Nori",
      "slug": "noril1",
      "batch": "Summer 2026",
      "domain": "norirobotics.com",
      "score": 65,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Pennant",
      "slug": "pennant",
      "batch": "Summer 2026",
      "domain": "getpennant.ai",
      "score": 65,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Qokedas",
      "slug": "qokedas",
      "batch": "Fall 2026",
      "domain": "qokedas.com",
      "score": 65,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Reason Machines",
      "slug": "reason-machines",
      "batch": "Spring 2026",
      "domain": "reasonmachines.ai",
      "score": 65,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Regbase",
      "slug": "regbase",
      "batch": "Spring 2026",
      "domain": "regbase.com",
      "score": 65,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Rote",
      "slug": "rote",
      "batch": "Winter 2027",
      "domain": "tryrote.com",
      "score": 65,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Touchy",
      "slug": "touchy",
      "batch": "Summer 2026",
      "domain": "touchyapp.com",
      "score": 65,
      "band": "polish",
      "logo": true
    },
    {
      "name": "ANORIA",
      "slug": "anoria",
      "batch": "Spring 2026",
      "domain": "anoria.com",
      "score": 64,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Avea Robotics",
      "slug": "avea-robotics",
      "batch": "Spring 2026",
      "domain": "avearobotics.com",
      "score": 64,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Daqstra",
      "slug": "daqstra",
      "batch": "Summer 2026",
      "domain": "daqstra.com",
      "score": 64,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Dayjob",
      "slug": "dayjob",
      "batch": "Spring 2026",
      "domain": "getdayjob.ai",
      "score": 64,
      "band": "polish",
      "logo": true
    },
    {
      "name": "ED1TH",
      "slug": "ed1th",
      "batch": "Spring 2026",
      "domain": "ed1th.com",
      "score": 64,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Evergrove",
      "slug": "evergrove",
      "batch": "Summer 2026",
      "domain": "evergrovelabs.com",
      "score": 64,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Exosat",
      "slug": "exosat",
      "batch": "Summer 2026",
      "domain": "exosat.com",
      "score": 64,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Gamgee",
      "slug": "gamgee",
      "batch": "Summer 2026",
      "domain": "gamgee.io",
      "score": 64,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Kara",
      "slug": "kara",
      "batch": "Summer 2026",
      "domain": "karalabs.ai",
      "score": 64,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Light Anchor",
      "slug": "light-anchor",
      "batch": "Spring 2026",
      "domain": "lightanchor.ai",
      "score": 64,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Pentagon",
      "slug": "pentagon",
      "batch": "Spring 2026",
      "domain": "pentagon.run",
      "score": 64,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Prism",
      "slug": "tryprism",
      "batch": "Spring 2026",
      "domain": "tryprism.com",
      "score": 64,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Simantic",
      "slug": "simantic",
      "batch": "Fall 2026",
      "domain": "simantic.dev",
      "score": 64,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Verdict Machine",
      "slug": "verdict-machine",
      "batch": "Summer 2026",
      "domain": "verdictmachine.com",
      "score": 64,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Voltair",
      "slug": "voltair",
      "batch": "Winter 2026",
      "domain": "voltairlabs.com",
      "score": 64,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Waddle Labs",
      "slug": "waddle-labs",
      "batch": "Summer 2026",
      "domain": "waddlelabs.ai",
      "score": 64,
      "band": "polish",
      "logo": true
    },
    {
      "name": "83 Sciences",
      "slug": "83-sciences",
      "batch": "Summer 2026",
      "domain": "83sciences.ai",
      "score": 63,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Adialante",
      "slug": "adialante",
      "batch": "Spring 2026",
      "domain": "adialante.com",
      "score": 63,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Atrisa",
      "slug": "atrisa",
      "batch": "Spring 2026",
      "domain": "atrisa.ai",
      "score": 63,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Bizmark",
      "slug": "bizmark",
      "batch": "Summer 2026",
      "domain": "bizmark.ai",
      "score": 63,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Most Robotic",
      "slug": "most-robotic",
      "batch": "Summer 2026",
      "domain": "mostrobotic.com",
      "score": 63,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Palisade",
      "slug": "palisade-2",
      "batch": "Summer 2026",
      "domain": "palisade-ai.com",
      "score": 63,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Standard Signal",
      "slug": "standard-signal",
      "batch": "Spring 2026",
      "domain": "standardsignal.com",
      "score": 63,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Tarifflo Inc.",
      "slug": "tarifflo-inc",
      "batch": "Summer 2026",
      "domain": "tarifflo.com",
      "score": 63,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Tenet Industries",
      "slug": "tenet-industries",
      "batch": "Spring 2026",
      "domain": "tenetindustries.com",
      "score": 63,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Thomas",
      "slug": "thomas",
      "batch": "Spring 2026",
      "domain": "madebythomas.ai",
      "score": 63,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Twolabs",
      "slug": "twolabs",
      "batch": "Spring 2026",
      "domain": "twolabs.ai",
      "score": 63,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Ultrasonium",
      "slug": "ultrasonium",
      "batch": "Summer 2026",
      "domain": "ultrasonium.com",
      "score": 63,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Valgo",
      "slug": "valgo",
      "batch": "Winter 2026",
      "domain": "valgo.ai",
      "score": 63,
      "band": "polish",
      "logo": true
    },
    {
      "name": "YouArt",
      "slug": "youart",
      "batch": "Spring 2026",
      "domain": "youart.ai",
      "score": 63,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Aerogen Systems",
      "slug": "aerogen-systems",
      "batch": "Summer 2026",
      "domain": "aerogensystems.com",
      "score": 62,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Apollo Atomics, Inc.",
      "slug": "apollo-atomics-inc",
      "batch": "Spring 2026",
      "domain": "apolloatomics.com",
      "score": 62,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Audun",
      "slug": "audun",
      "batch": "Summer 2026",
      "domain": "audun.co",
      "score": 62,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Capveon",
      "slug": "capveon",
      "batch": "Fall 2026",
      "domain": "capveon.ai",
      "score": 62,
      "band": "polish",
      "logo": true
    },
    {
      "name": "GodHands",
      "slug": "godhands",
      "batch": "Fall 2026",
      "domain": "godhands.dev",
      "score": 62,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Locke",
      "slug": "locke",
      "batch": "Summer 2026",
      "domain": "locke.inc",
      "score": 62,
      "band": "polish",
      "logo": true
    },
    {
      "name": "PerfectBit, Inc.",
      "slug": "perfectbit-inc",
      "batch": "Spring 2026",
      "domain": "perfectbit.ai",
      "score": 62,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Rise Reforming",
      "slug": "rise-reforming",
      "batch": "Summer 2026",
      "domain": "rise-reforming.com",
      "score": 62,
      "band": "polish",
      "logo": true
    },
    {
      "name": "StableBrowse",
      "slug": "stablebrowse",
      "batch": "Spring 2026",
      "domain": "stablebrowse.ai",
      "score": 62,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Synphony",
      "slug": "synphony",
      "batch": "Spring 2026",
      "domain": "synphony.co",
      "score": 62,
      "band": "polish",
      "logo": true
    },
    {
      "name": "TryNearby",
      "slug": "trynearby",
      "batch": "Summer 2026",
      "domain": "trynearby.com",
      "score": 62,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Verdant",
      "slug": "verdant",
      "batch": "Summer 2026",
      "domain": "verdantapp.com",
      "score": 62,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Whitespace",
      "slug": "whitespace",
      "batch": "Summer 2026",
      "domain": "whitespacehq.ai",
      "score": 62,
      "band": "polish",
      "logo": true
    },
    {
      "name": "AbInitio Bio",
      "slug": "abinitio-bio",
      "batch": "Spring 2026",
      "domain": "abinitio-bio.com",
      "score": 61,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Belvedir",
      "slug": "belvedir",
      "batch": "Summer 2026",
      "domain": "belvedir.ai",
      "score": 61,
      "band": "polish",
      "logo": false
    },
    {
      "name": "Chromie",
      "slug": "chromie",
      "batch": "Summer 2026",
      "domain": "chromie.dev",
      "score": 61,
      "band": "polish",
      "logo": true
    },
    {
      "name": "DeepReach Inc.",
      "slug": "deepreach-inc",
      "batch": "Summer 2026",
      "domain": "deepreach.ai",
      "score": 61,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Dream",
      "slug": "dream",
      "batch": "Summer 2026",
      "domain": "pingdream.com",
      "score": 61,
      "band": "polish",
      "logo": true
    },
    {
      "name": "General Instinct",
      "slug": "general-instinct",
      "batch": "Spring 2026",
      "domain": "general-instinct.com",
      "score": 61,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Isengard Industries Inc",
      "slug": "isengard-industries-inc",
      "batch": "Summer 2026",
      "domain": "isengardindustries.com",
      "score": 61,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Lumius",
      "slug": "lumius",
      "batch": "Spring 2026",
      "domain": "lumius-imaging.com",
      "score": 61,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Maingen",
      "slug": "maingen",
      "batch": "Summer 2026",
      "domain": "maingen.ai",
      "score": 61,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Ornadyne",
      "slug": "ornadyne",
      "batch": "Spring 2026",
      "domain": "ornadyne.com",
      "score": 61,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Salem Robotics Inc",
      "slug": "salem-robotics-inc",
      "batch": "Summer 2026",
      "domain": "salemroboticsinc.com",
      "score": 61,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Vernius Systems, Inc.",
      "slug": "vernius-systems-inc",
      "batch": "Summer 2026",
      "domain": "vernius.systems",
      "score": 61,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Asakana",
      "slug": "asakana",
      "batch": "Fall 2026",
      "domain": "asakana.co",
      "score": 60,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Aseon Labs",
      "slug": "aseon-labs",
      "batch": "Spring 2026",
      "domain": "aseonlabs.com",
      "score": 60,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Covera",
      "slug": "covera",
      "batch": "Fall 2026",
      "domain": "covera-agents.com",
      "score": 60,
      "band": "polish",
      "logo": true
    },
    {
      "name": "CueBench",
      "slug": "cuebench",
      "batch": "Summer 2026",
      "domain": "cuebench.dev",
      "score": 60,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Earendil Robotics",
      "slug": "earendil-robotics",
      "batch": "Summer 2026",
      "domain": "earendil.io",
      "score": 60,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Enact",
      "slug": "enact",
      "batch": "Summer 2026",
      "domain": "enact.company",
      "score": 60,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Grip",
      "slug": "grip",
      "batch": "Summer 2026",
      "domain": "griprobotics.ai",
      "score": 60,
      "band": "polish",
      "logo": true
    },
    {
      "name": "HyperProbe",
      "slug": "hyperprobe",
      "batch": "Summer 2026",
      "domain": "hyperprobe.co",
      "score": 60,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Molagri",
      "slug": "molagri",
      "batch": "Summer 2026",
      "domain": "molagri.com",
      "score": 60,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Walter",
      "slug": "walter",
      "batch": "Spring 2026",
      "domain": "walter.one",
      "score": 60,
      "band": "polish",
      "logo": true
    },
    {
      "name": "Zibra Labs",
      "slug": "zibra-labs",
      "batch": "Spring 2026",
      "domain": "zibralabs.ai",
      "score": 60,
      "band": "polish",
      "logo": true
    },
    {
      "name": "AquaShield",
      "slug": "aquashield",
      "batch": "Spring 2026",
      "domain": "aquashieldai.com",
      "score": 59,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Aster",
      "slug": "asterlab",
      "batch": "Spring 2026",
      "domain": "asterlab.ai",
      "score": 59,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Care GP",
      "slug": "care-gp",
      "batch": "Summer 2026",
      "domain": "caregp.com.au",
      "score": 59,
      "band": "rough",
      "logo": true
    },
    {
      "name": "CatchBack Cards",
      "slug": "catchback-cards",
      "batch": "Winter 2026",
      "domain": "catchbackcards.com",
      "score": 59,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Korso",
      "slug": "korso",
      "batch": "Spring 2026",
      "domain": "korsoai.com",
      "score": 59,
      "band": "rough",
      "logo": true
    },
    {
      "name": "PLAN0 AI",
      "slug": "plan0-ai",
      "batch": "Spring 2026",
      "domain": "plan0.ai",
      "score": 59,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Standout",
      "slug": "standout",
      "batch": "Spring 2026",
      "domain": "standout.work",
      "score": 59,
      "band": "rough",
      "logo": true
    },
    {
      "name": "SubVysion",
      "slug": "subvysion",
      "batch": "Summer 2026",
      "domain": "subvysion.com",
      "score": 59,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Synapse Semiconductor",
      "slug": "synapse-semiconductor",
      "batch": "Summer 2026",
      "domain": "synapsesemi.org",
      "score": 59,
      "band": "rough",
      "logo": true
    },
    {
      "name": "The Subvocal Company",
      "slug": "the-subvocal-company",
      "batch": "Fall 2026",
      "domain": "subvocal.company",
      "score": 59,
      "band": "rough",
      "logo": true
    },
    {
      "name": "TovenAI",
      "slug": "tovenai",
      "batch": "Summer 2026",
      "domain": "toven.ai",
      "score": 59,
      "band": "rough",
      "logo": true
    },
    {
      "name": "ValCtrl",
      "slug": "valctrl",
      "batch": "Spring 2026",
      "domain": "valctrl.com",
      "score": 59,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Auxos",
      "slug": "auxos",
      "batch": "Spring 2026",
      "domain": "useauxos.com",
      "score": 58,
      "band": "rough",
      "logo": true
    },
    {
      "name": "ClaimGlide",
      "slug": "claimglide",
      "batch": "Winter 2026",
      "domain": "claimglide.com",
      "score": 58,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Cova",
      "slug": "cova",
      "batch": "Summer 2026",
      "domain": "cova.care",
      "score": 58,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Crosslayer Labs",
      "slug": "crosslayer-labs",
      "batch": "Winter 2026",
      "domain": "crosslayerlabs.com",
      "score": 58,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Atomarine",
      "slug": "atomarine",
      "batch": "Summer 2026",
      "domain": "atomarine.co",
      "score": 57,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Bidflow",
      "slug": "bidflow",
      "batch": "Winter 2026",
      "domain": "usebidflow.com",
      "score": 57,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Dialogus",
      "slug": "dialogus",
      "batch": "Summer 2026",
      "domain": "dialoguslabs.com",
      "score": 57,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Erinys",
      "slug": "erinys",
      "batch": "Summer 2026",
      "domain": "erinys.ai",
      "score": 57,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Ethos Space Resources",
      "slug": "ethos-space-resources",
      "batch": "Summer 2026",
      "domain": "ethos-space.com",
      "score": 57,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Frontier Computing",
      "slug": "frontier-computing",
      "batch": "Summer 2026",
      "domain": "frontier.site",
      "score": 57,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Hilstart",
      "slug": "hilstart",
      "batch": "Summer 2026",
      "domain": "hilstart.io",
      "score": 57,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Moving Atoms",
      "slug": "moving-atoms",
      "batch": "Summer 2026",
      "domain": "movingatoms.ai",
      "score": 57,
      "band": "rough",
      "logo": true
    },
    {
      "name": "ProjectX",
      "slug": "projectx",
      "batch": "Spring 2026",
      "domain": "projectx.cloud",
      "score": 57,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Advanced Metal Research",
      "slug": "advanced-metal-research",
      "batch": "Spring 2026",
      "domain": "advancedmetalresearch.com",
      "score": 56,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Floracene",
      "slug": "floracene",
      "batch": "Summer 2026",
      "domain": "floracene.com",
      "score": 56,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Hyper",
      "slug": "hyper-4",
      "batch": "Spring 2026",
      "domain": "heyhyper.ai",
      "score": 56,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Mantis",
      "slug": "mantis",
      "batch": "Winter 2026",
      "domain": "mantisbiotech.com",
      "score": 56,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Memoir",
      "slug": "memoir",
      "batch": "Spring 2026",
      "domain": "trymemoir.ai",
      "score": 56,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Netter",
      "slug": "netter",
      "batch": "Spring 2026",
      "domain": "netter.ai",
      "score": 56,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Standard Machines",
      "slug": "standard-machines",
      "batch": "Summer 2026",
      "domain": "standardmachines.com",
      "score": 56,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Akkari",
      "slug": "akkari",
      "batch": "Spring 2026",
      "domain": "akkari.io",
      "score": 55,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Atlas Discovery",
      "slug": "atlas-discovery",
      "batch": "Summer 2026",
      "domain": "atlasdiscovery.bio",
      "score": 55,
      "band": "rough",
      "logo": true
    },
    {
      "name": "General Astronautics",
      "slug": "generalastro",
      "batch": "Winter 2026",
      "domain": "generalastro.com",
      "score": 55,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Hopper",
      "slug": "hopper",
      "batch": "Fall 2026",
      "domain": "withhopper.com",
      "score": 55,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Induction Labs",
      "slug": "induction-labs",
      "batch": "Summer 2026",
      "domain": "inductionlabs.com",
      "score": 55,
      "band": "rough",
      "logo": true
    },
    {
      "name": "InLoop Robotics",
      "slug": "inloop-robotics",
      "batch": "Spring 2026",
      "domain": "inloop-robotics.com",
      "score": 55,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Madrone",
      "slug": "madrone",
      "batch": "Spring 2026",
      "domain": "madrone.cool",
      "score": 55,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Maquoketa Research",
      "slug": "maquoketa-research",
      "batch": "Spring 2026",
      "domain": "maquoketa.net",
      "score": 55,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Ndea",
      "slug": "ndea-com",
      "batch": "Winter 2026",
      "domain": "ndea.com",
      "score": 55,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Proprio Robotics",
      "slug": "proprio-robotics",
      "batch": "Summer 2026",
      "domain": "propriorobotics.com",
      "score": 55,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Sinter",
      "slug": "sinter-systems",
      "batch": "Fall 2026",
      "domain": "sinter.systems",
      "score": 55,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Surtr Defense Systems",
      "slug": "surtr-defense-systems",
      "batch": "Spring 2026",
      "domain": "surtrdefense.com",
      "score": 55,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Tensr",
      "slug": "tensr",
      "batch": "Summer 2026",
      "domain": "tensr.com",
      "score": 55,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Vestris",
      "slug": "vestris",
      "batch": "Summer 2026",
      "domain": "vestris.ai",
      "score": 55,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Foaster",
      "slug": "foaster",
      "batch": "Spring 2026",
      "domain": "foaster.ai",
      "score": 54,
      "band": "rough",
      "logo": true
    },
    {
      "name": "KelAI",
      "slug": "kelai",
      "batch": "Spring 2026",
      "domain": "kelaitech.com",
      "score": 54,
      "band": "rough",
      "logo": true
    },
    {
      "name": "PokerClubHub",
      "slug": "pokerclubhub",
      "batch": "Summer 2026",
      "domain": "pokerclubhub.com",
      "score": 54,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Spectre Intelligence",
      "slug": "spectre-intelligence",
      "batch": "Summer 2026",
      "domain": "spectreintelligence.ai",
      "score": 54,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Cohesion",
      "slug": "cohesion",
      "batch": "Spring 2026",
      "domain": "cohesionplatform.com",
      "score": 53,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Deep Interactions",
      "slug": "deep-interactions",
      "batch": "Spring 2026",
      "domain": "deepinteractions.ai",
      "score": 53,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Eos AI",
      "slug": "eos-ai",
      "batch": "Winter 2026",
      "domain": "helloeos.ai",
      "score": 53,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Manifold",
      "slug": "manifold-2",
      "batch": "Summer 2026",
      "domain": "manifoldindustries.ai",
      "score": 53,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Dawn Industries",
      "slug": "dawn-industries",
      "batch": "Summer 2026",
      "domain": "dawnxr.com",
      "score": 52,
      "band": "rough",
      "logo": true
    },
    {
      "name": "WonderTx",
      "slug": "wondertx",
      "batch": "Summer 2026",
      "domain": "wondertx.ai",
      "score": 52,
      "band": "rough",
      "logo": true
    },
    {
      "name": "EdotEnv",
      "slug": "edotenv",
      "batch": "Summer 2026",
      "domain": "edotenv.com",
      "score": 51,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Mentlio",
      "slug": "mentlio",
      "batch": "Summer 2026",
      "domain": "mentlio.com",
      "score": 51,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Plena Health",
      "slug": "plena-health",
      "batch": "Spring 2026",
      "domain": "plena.health",
      "score": 51,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Praxis Robotics",
      "slug": "praxis-robotics",
      "batch": "Summer 2026",
      "domain": "praxisrobotics.io",
      "score": 51,
      "band": "rough",
      "logo": true
    },
    {
      "name": "PRINCEPS",
      "slug": "princeps",
      "batch": "Summer 2026",
      "domain": "princeps.dev",
      "score": 51,
      "band": "rough",
      "logo": true
    },
    {
      "name": "General Aviation",
      "slug": "general-aviation",
      "batch": "Spring 2026",
      "domain": "generalaviation.com",
      "score": 50,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Tolmo",
      "slug": "tolmo",
      "batch": "Spring 2026",
      "domain": "tolmo.com",
      "score": 50,
      "band": "rough",
      "logo": true
    },
    {
      "name": "Illume Labs",
      "slug": "illume-labs",
      "batch": "Summer 2026",
      "domain": "illumelabs.ai",
      "score": 49,
      "band": "vibe",
      "logo": true
    },
    {
      "name": "Intelligence Factory",
      "slug": "intelligence-factory",
      "batch": "Spring 2026",
      "domain": "intelligence-factory.com",
      "score": 49,
      "band": "vibe",
      "logo": true
    },
    {
      "name": "ReasonBlocks",
      "slug": "reasonblocks",
      "batch": "Spring 2026",
      "domain": "reasonblocks.com",
      "score": 49,
      "band": "vibe",
      "logo": true
    },
    {
      "name": "Riften",
      "slug": "riften",
      "batch": "Summer 2026",
      "domain": "riften.ai",
      "score": 49,
      "band": "vibe",
      "logo": true
    },
    {
      "name": "HERA",
      "slug": "manufacturingintelligence",
      "batch": "Summer 2026",
      "domain": "manufacturingintelligence.org",
      "score": 48,
      "band": "vibe",
      "logo": true
    },
    {
      "name": "Rudus",
      "slug": "rudus",
      "batch": "Spring 2026",
      "domain": "rudus.ai",
      "score": 48,
      "band": "vibe",
      "logo": true
    },
    {
      "name": "Zenbu",
      "slug": "zenbu-2",
      "batch": "Spring 2026",
      "domain": "zenbu.dev",
      "score": 48,
      "band": "vibe",
      "logo": true
    },
    {
      "name": "Florin",
      "slug": "florin",
      "batch": "Summer 2026",
      "domain": "florin.inc",
      "score": 47,
      "band": "vibe",
      "logo": true
    },
    {
      "name": "Alt-X",
      "slug": "alt-x",
      "batch": "Winter 2026",
      "domain": "alt-x.co",
      "score": 46,
      "band": "vibe",
      "logo": true
    },
    {
      "name": "Andustry",
      "slug": "andustry",
      "batch": "Spring 2026",
      "domain": "andustry.com",
      "score": 46,
      "band": "vibe",
      "logo": true
    },
    {
      "name": "Baud",
      "slug": "baud",
      "batch": "Summer 2026",
      "domain": "baudlabs.ai",
      "score": 46,
      "band": "vibe",
      "logo": true
    },
    {
      "name": "Dreamscale Labs",
      "slug": "dreamscale-labs",
      "batch": "Fall 2026",
      "domain": "dreamscalelabs.com",
      "score": 46,
      "band": "vibe",
      "logo": true
    },
    {
      "name": "Lambda Robotics",
      "slug": "lambda-robotics",
      "batch": "Fall 2026",
      "domain": "lambdarobotics.ai",
      "score": 46,
      "band": "vibe",
      "logo": true
    },
    {
      "name": "Dispatch",
      "slug": "dispatch",
      "batch": "Spring 2026",
      "domain": "dispatch.space",
      "score": 44,
      "band": "vibe",
      "logo": true
    },
    {
      "name": "Hop Aero",
      "slug": "hop-aero",
      "batch": "Summer 2026",
      "domain": "hopaero.com",
      "score": 44,
      "band": "vibe",
      "logo": true
    }
  ]
} as const;
