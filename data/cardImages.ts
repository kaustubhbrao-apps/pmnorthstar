// Themed editorial photography for tiles.
//
// Every photo here is CC0 / public domain (sourced through the Openverse API
// from rawpixel, StockSnap, Flickr Commons, Wikimedia Commons and the
// WordPress Photo Directory) and is hotlinked from its host at ~1000px. The
// tiles render them as a desaturated duotone in the tile's colour (see
// .vis-img in globals.css), so the pictures set mood and texture rather than
// literal illustration — which is also why a modest, well-chosen set covers
// 200+ cards without reading as repetitive.
//
// photoFor() picks the theme by whole-word matching the card's tags, title,
// category, region and company against each theme's keys (first match wins,
// so THEMES is ordered specific → generic; the last entry matches anything),
// then picks the photo by a stable hash of the card's id — a card always
// shows the same picture while its neighbours vary.

type Theme = { keys: string[]; urls: string[] };

const RP = (p: string) => `https://images.rawpixel.com/editor_1024/${p}.jpg`;
const SS = (id: string) => `https://cdn.stocksnap.io/img-thumbs/960w/${id}.jpg`;
const FL = (p: string) => `https://live.staticflickr.com/${p}_b.jpg`;

const VISA = RP("czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvc3YxNjYwNTAtaW1hZ2Uta3oyZTJ2b2suanBn");
const COINS_A = RP("czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvc3YxMjM3MzUtaW1hZ2Uta3d5bmZ1YTYuanBn");
const COINS_B = RP("cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL3N2MjM1MDEzLWltYWdlLWt3dnU4Z3BuLmpwZw");
const POUNDS = RP("cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL2ZyY2FzaF9tb25leV9maW5hbmNlX2N1cnJlbmN5LWltYWdlLWt5YmJ5ZDA2LmpwZw");
const MACBOOK = SS("6UHHE19YG7");
const SKETCH = SS("BUX1AZWHVI");
const TEAM_A = SS("VQXYE2ZEHC");
const CITY = SS("KDOIQSH4ZW");
const DARK_SKY = SS("EITG86ZLPT");
const ROCKET_A = FL("65535/51914580910_fb56973b91");
const ROCKET_B = FL("4834/31058703407_a7da903143");

export const THEMES: Theme[] = [
  {
    keys: ["fintech", "payments", "payment", "upi", "credit card", "cards", "banking", "bank", "neobank", "lending", "credit", "insurance", "broking", "brokerage", "trading", "investing", "wallet", "bnpl", "remittance"],
    urls: [VISA, COINS_A, COINS_B],
  },
  {
    keys: ["edtech", "education", "learning", "students", "student", "exam", "exams", "coaching", "course", "courses", "tutors", "tutor", "teacher", "school", "university", "test prep"],
    urls: [FL("4704/39678919994_8c9e5dca55"), FL("8246/8541326761_b23db231f4"), FL("4618/40344754692_1ef6470b79")],
  },
  {
    keys: ["grocery", "groceries", "quick commerce", "quick-commerce", "q-commerce", "supermarket", "kirana", "instamart", "10-minute", "dark store", "dark stores"],
    urls: [
      RP("cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL2ZsNDk4MTE1NjcwODItaW1hZ2Uta3liZWg0cW8uanBn"),
      RP("czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZmw0OTgxMTU5NjQwNy1pbWFnZS1reWNpc2tqeC5qcGc"),
      RP("czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZmwyMzIyMjM4MDU2NC1pbWFnZS1reWNqcXdzeC5qcGc"),
    ],
  },
  {
    keys: ["food", "restaurant", "restaurants", "kitchen", "meal", "meals", "dining", "food delivery", "cloud kitchen"],
    urls: [FL("6231/6231890399_5dffc6cb81"), FL("6049/6231888661_d46943d836"), SS("0HCMIT272C")],
  },
  {
    keys: ["logistics", "delivery", "supply chain", "warehouse", "shipping", "parcel", "parcels", "fulfilment", "fulfillment", "last-mile", "last mile", "courier", "freight"],
    urls: [
      RP("czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZnJsb2dpc3RpY3NfODUyOTM3LWltYWdlLWt5Y2dmZGM0LmpwZw"),
      RP("cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA3L3Vwd2s2MjI2OTY3Ni13aWtpbWVkaWEtaW1hZ2UuanBn"),
      RP("cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL2ZyY29udGFpbmVyX2xpZnRlcl9jb250YWluZXJfcG9ydC1pbWFnZS1reWJidGJmNy5qcGc"),
    ],
  },
  {
    keys: ["ride-hailing", "ride hailing", "ridesharing", "mobility", "cab", "cabs", "taxi", "rides", "transport", "commute", "traffic", "urban"],
    urls: [CITY, SS("RG8KA41GN8"), SS("A98A7B869A")],
  },
  {
    keys: ["travel", "hotel", "hotels", "hospitality", "stays", "booking", "bookings", "tourism", "vacation", "rental", "rentals", "homes"],
    urls: [
      "https://pd.w.org/2025/09/48068d22bbde35881.19485045-2048x1536.jpg",
      FL("2520/4298937304_e3e3b58666"),
      FL("5505/10560383496_977360f0eb"),
    ],
  },
  {
    keys: ["ev", "evs", "electric vehicle", "electric vehicles", "electric", "automotive", "car", "cars", "scooter", "scooters", "vehicle", "vehicles", "battery", "charging"],
    urls: [FL("953/28116443488_4ac4502e7f"), FL("977/28116443138_0cf33c8ed0"), FL("4492/37431767936_3de2f318dc")],
  },
  {
    keys: ["ai", "artificial intelligence", "llm", "llms", "ai agents", "agentic", "machine learning", "ml", "gpt", "automation", "robotics", "robot", "robots", "autonomy", "autonomous", "copilot", "chatbot"],
    urls: [
      RP("cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL3B4MTI0MTMyNS1pbWFnZS1rd3Z3NGFoMC5qcGc"),
      RP("cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL3B4NzE4NTktaW1hZ2Uta3d2djc0czIuanBn"),
      SS("WUBMLJRYEK"),
      FL("5775/29841969793_868a0d385a"),
    ],
  },
  {
    keys: ["saas", "developer", "developers", "api", "apis", "software", "cloud", "devtools", "b2b", "enterprise", "infrastructure", "data", "analytics", "productivity", "workflow", "collaboration", "crm", "open source", "open-source", "code", "engineering"],
    urls: [MACBOOK, SS("PBTF1NEBCG"), SS("F164KBFZ95")],
  },
  {
    keys: ["music", "audio", "headphones", "earphones", "podcast", "podcasts", "songs", "sound", "speakers"],
    urls: [SS("UXKE7VWPCY"), SS("QS3FJYL99Z"), SS("3YOVALG5DX")],
  },
  {
    keys: ["hardware", "device", "devices", "chip", "chips", "semiconductor", "iot", "wearable", "wearables", "gadget", "gadgets", "electronics", "manufacturing", "factory"],
    urls: [
      RP("czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvc2s0NTY0LWltYWdlLWt3dnhhdzQwLmpwZw"),
      RP("czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvbnMxOTEzMi1pbWFnZS1rd3lyd3J3MC5qcGc"),
      RP("czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvbnMyMTA2MS1pbWFnZS1rd3lydjF1ei5qcGc"),
    ],
  },
  {
    keys: ["gaming", "game", "games", "gamers", "esports", "console", "consoles", "fantasy sports", "play"],
    urls: [
      RP("czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYyMDU2Mzk2LXdpa2ltZWRpYS1pbWFnZS1rb3dvMmg1Zy5qcGc"),
      RP("cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL2ZyY29yZGxlc3NfZjcxMF9nYW1lcGFkX2dhbWVzLWltYWdlLWt5YmJ0ZnFrLmpwZw"),
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Mahjong_video_game_control_panel_2023-04-13.jpg/1200px-Mahjong_video_game_control_panel_2023-04-13.jpg",
    ],
  },
  {
    keys: ["streaming", "ott", "tv", "television", "entertainment", "film", "films", "cinema", "shows", "video streaming", "broadcast", "sports rights"],
    urls: [FL("5528/9203580846_d0cc50142e"), FL("3656/4080324377_9d952041d9")],
  },
  {
    keys: ["media", "news", "publishing", "publisher", "publishers", "newsletter", "newsletters", "journalism", "newspaper", "magazine", "blog", "blogging", "writers", "writing"],
    urls: [
      RP("czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHgxMTczODYxLWltYWdlLWt3dnk0djVlLmpwZw"),
      RP("czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHgxMDg3NzIxLWltYWdlLWt3dnk0cGp2LmpwZw"),
      RP("cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL3B4OTgyMTg2LWltYWdlLWt3dnVxY3hnLmpwZw"),
    ],
  },
  {
    keys: ["fitness", "health", "healthtech", "healthcare", "wellness", "meditation", "mindfulness", "sleep", "gym", "workout", "running", "sports", "medical", "clinic"],
    urls: [
      RP("cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL2ZycnVubmluZ19zcG9ydF9maXRfZml0bmVzcy1pbWFnZS1reWJjdmo3aS5qcGc"),
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/2025-09-21_Moscow_marathon%2C_runners_wide_05.jpg/1200px-2025-09-21_Moscow_marathon%2C_runners_wide_05.jpg",
      FL("2807/12778998224_29ceb287ef"),
    ],
  },
  {
    keys: ["ecommerce", "e-commerce", "retail", "d2c", "dtc", "marketplace", "marketplaces", "shopping", "brand", "brands", "consumer", "fashion", "beauty", "eyewear", "store", "stores", "commerce", "sellers", "resellers"],
    urls: [
      RP("czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHg4NjI0NzctaW1hZ2Uta3d5bzlqcXUuanBn"),
      RP("czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHg5NDA3MDUtaW1hZ2Uta3d5bzBjMTkuanBn"),
      RP("czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHgxMjg1NDAyLWltYWdlLWt3eXFzajNvLmpwZw"),
    ],
  },
  {
    keys: ["failure", "failures", "blowup", "collapse", "collapsed", "shutdown", "shut down", "bankrupt", "bankruptcy", "fraud", "scandal", "crash", "decline", "lost everything", "burned out", "burnout", "dead", "died", "downfall", "fall"],
    urls: [FL("4507/37358574294_491bf5c802"), FL("2831/33538110983_f218997bf5"), DARK_SKY],
  },
  {
    keys: ["crisis", "crises", "recall", "outage", "regulation", "regulatory", "ban", "banned", "lawsuit", "antitrust", "risk", "backlash", "controversy", "scrutiny", "rbi", "sebi"],
    urls: [SS("3EPA01FY99"), SS("XM2BU5FAKM"), DARK_SKY],
  },
  {
    keys: ["pricing", "price", "prices", "freemium", "monetization", "monetisation", "revenue", "unit economics", "margins", "margin", "profit", "profitable", "profitability", "cheap", "discount", "discounts", "fees", "subscription", "subscriptions", "paywall"],
    urls: [POUNDS, COINS_B, COINS_A],
  },
  {
    keys: ["design", "designer", "designers", "ux", "ui", "aesthetic", "aesthetics", "typography", "craft", "redesign", "prototype", "prototyping", "interface"],
    urls: [SKETCH, FL("5645/23097631532_577fab6bbb"), FL("65535/40748562823_717199cb2f")],
  },
  {
    keys: ["growth", "marketing", "acquisition", "referral", "referrals", "virality", "viral", "retention", "funnel", "seo", "ads", "advertising", "campaign", "campaigns", "distribution", "go-to-market", "gtm", "scale", "scaling", "expansion"],
    urls: [ROCKET_A, FL("65535/49193797316_0a30da9f55"), ROCKET_B],
  },
  {
    keys: ["space", "satellite", "satellites", "rocket", "rockets", "aerospace", "drone", "drones", "nasa"],
    urls: [ROCKET_A, ROCKET_B, FL("3847/14652220774_4178c153c4")],
  },
  {
    keys: ["strategy", "strategic", "positioning", "moat", "moats", "competition", "competitive", "bet", "bets", "pivot", "pivots", "turnaround", "decision", "decisions", "platform", "platforms", "monopoly", "duopoly", "rivalry"],
    urls: [
      RP("cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL3B4MTAyNTQ2MS1pbWFnZS1rd3Z3ZXRoNy5qcGc"),
      RP("cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL3B4NTk3NDgxLWltYWdlLWt3dnZiMXU3LmpwZw"),
      RP("czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHg2MjA2ODQtaW1hZ2Uta3d2eG1kcG4uanBn"),
    ],
  },
  {
    keys: ["founder", "founders", "leadership", "culture", "team", "teams", "hiring", "management", "ceo", "operations", "product management", "pm", "org", "people", "work", "remote", "meetings"],
    urls: [TEAM_A, SS("JBW2PXDOL6"), SS("69TMH4ITIE")],
  },
  {
    keys: ["social", "social media", "creator", "creators", "community", "communities", "network", "network effects", "messaging", "chat", "dating", "video", "influencer", "influencers", "friends", "feed", "sharing"],
    urls: [SS("4CNNMKE9IQ"), FL("1651/24247914670_5f4527487c"), FL("4424/37199750111_3757b76a50")],
  },
  {
    keys: ["india", "indian", "bharat", "mumbai", "delhi", "bengaluru", "bangalore", "tier-2", "tier 2", "vernacular"],
    urls: [FL("7501/27838170755_e58cfd7d2d"), FL("65535/54915915507_72278a5be5"), "https://pd.w.org/2024/06/720667d0b48c91d43.89632712-2048x1536.jpg"],
  },
  {
    keys: ["app", "apps", "mobile", "smartphone", "smartphones", "ios", "android", "iphone", "phone", "phones"],
    urls: [FL("1493/23724266304_69e482b611"), FL("1498/23745887894_bbc995dd99"), FL("1593/24265835812_915ae441cc")],
  },
  {
    keys: ["product", "products", "feature", "features", "launch", "launches", "mvp", "roadmap", "users", "onboarding", "experience", "innovation"],
    urls: [MACBOOK, SKETCH, TEAM_A],
  },
  // Generic fallback — matches everything, so every card gets a picture.
  {
    keys: [""],
    urls: ["https://pd.w.org/2024/12/611675adf80343767.76808110-2048x1365.jpg", SS("GID9EW0L7Z"), SS("CRXV0EN5I8"), CITY],
  },
];

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Whole-word match so "ai" can't hit "retail" or "Airbnb". Multi-word keys
// ("quick commerce") match as a phrase.
const hasWord = (hay: string, key: string) => new RegExp(`\\b${escapeRe(key)}\\b`, "i").test(hay);

export function photoFor(keys: Array<string | undefined | null>, seed = ""): string | null {
  const hay = keys.filter(Boolean).map((k) => String(k).toLowerCase()).join(" | ");
  for (const t of THEMES) {
    if (t.urls.length === 0) continue;
    if (t.keys.some((k) => k === "" || hasWord(hay, k))) {
      return t.urls[hash(seed || hay) % t.urls.length];
    }
  }
  return null;
}
