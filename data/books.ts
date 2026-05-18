export type Category = "Product Management" | "Startups" | "Management";

// Amazon Associates India affiliate tag. Update once you get your tag
// from affiliate-program.amazon.in. All book links flow through here.
export const AMAZON_AFFILIATE_TAG = "pmnorthstar-21";

export interface BookSummary {
  // Multi-paragraph original commentary — northstar's perspective on the book,
  // its position in the PM reading landscape, audience, and limitations.
  // Stays at the "book review" level; does not reproduce book content.
  analysis: string[];
  keyConcepts: string[];           // Named ideas / frameworks the book is known for
  whoShouldRead: string;           // Who this book is genuinely useful for
  pairsWith?: string[];            // IDs of related books on northstar
  relatedCaseStudies?: string[];   // IDs of case studies that demonstrate the book's ideas
}

export interface Book {
  id: string;
  title: string;
  author: string;
  category: Category;
  thumbnailURL: string;
  link: string;
  description: string;
  rating: number;
  pages: number;
  year: number;
  tags: string[];
  featured?: boolean;
  summary?: BookSummary;           // Optional. Books without a summary show "Coming soon" on /book/[slug].
}

// Slug for /book/[slug] URLs. Generated from title (with author last name as
// disambiguator if needed). Kept as a helper so we don't duplicate per-book.
function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getBookSlug(book: Book): string {
  return slugify(`${book.title} ${book.author.split(" ").pop()}`);
}

export function getBookBySlug(slug: string, books: Book[]): Book | undefined {
  return books.find((b) => getBookSlug(b) === slug);
}

export function getAmazonAffiliateUrl(book: Book): string {
  const query = encodeURIComponent(`${book.title} ${book.author}`);
  return `https://www.amazon.in/s?k=${query}&tag=${AMAZON_AFFILIATE_TAG}`;
}

export const books: Book[] = [
  // ─── PRODUCT MANAGEMENT ──────────────────────────────────────────────────
  {
    id: "pm-1",
    title: "Inspired",
    author: "Marty Cagan",
    category: "Product Management",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9781119387503-M.jpg",
    link: "https://drive.google.com/file/d/1lOaG8UuAHjHuVKHXmOaO50YcwZyID8cS/view?usp=drive_link",
    description: "How to create tech products customers love. The definitive guide to modern product management.",
    rating: 4.8,
    pages: 368,
    year: 2017,
    tags: ["product", "strategy", "teams"],
    featured: true,
    summary: {
      analysis: [
        "Inspired is the closest thing the PM craft has to a canonical text. The second edition (2017) is the one most teams cite — it pulled together two decades of Cagan's observations working with Silicon Valley product teams into a single argument about why most product orgs underperform.",
        "What makes Inspired stick isn't novelty — most of its ideas existed in scattered form. It's the framing: a clear distinction between feature factories and outcome-driven teams, and language that hiring managers, founders, and PMs can all use in the same conversation. That shared vocabulary is the reason it became required reading at SV Product Group, Reforge, and most PM bootcamps.",
        "It serves senior PMs and PM-curious founders better than junior PMs. The book assumes you've already worked inside a product team and now want a model for why some of those teams felt right and others didn't. First-time PMs often find it abstract on first read; it tends to land in year 2-3 of the career when the patterns Cagan describes start matching personal experience.",
        "Its main limitation in 2026 is its starting point: late-stage SaaS companies with venture funding and engineering-heavy teams. The advice doesn't always transfer to Indian B2C companies, government tech, agencies, or anywhere with constrained autonomy. Read it as the SV ideal, not the universal model — and pair it with Empowered for the management-side companion.",
      ],
      keyConcepts: [
        "Product discovery vs delivery",
        "Outcome-based teams (vs feature teams)",
        "The product trio (PM, designer, engineer)",
        "Discovery prototypes",
        "Continuous risk assessment (value, usability, feasibility, viability)",
      ],
      whoShouldRead: "Mid-career PMs at SaaS / consumer tech companies who want a coherent model for why some teams ship great products and others ship roadmaps. Senior PMs, founders, and PM-curious engineers will also get value. New PMs in their first 6 months should probably read it after Escaping the Build Trap.",
      pairsWith: ["pm-4", "pm-10"],
      relatedCaseStudies: ["cs-2", "cs-7", "cs-27"],
    },
  },
  {
    id: "pm-2",
    title: "Continuous Discovery Habits",
    author: "Teresa Torres",
    category: "Product Management",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9781736633304-M.jpg",
    link: "https://www.youtube.com/watch?v=l7-5x0ra2tc",
    description: "Discover products that create customer value and business value using a structured continuous discovery framework.",
    rating: 4.7,
    pages: 258,
    year: 2021,
    tags: ["discovery", "research", "habits"],
    summary: {
      analysis: [
        "Continuous Discovery Habits is the book that took user research out of the hands of dedicated researchers and put it back on PM desks. Teresa Torres argues — and now most modern teams agree — that talking to users is too important to outsource to a sprint or a quarterly study. It needs to be a habit.",
        "The Opportunity Solution Tree is the artifact most teams remember from this book, and it has become standard practice at companies that run continuous discovery seriously. The framework is genuinely useful, but its real value is forcing PMs to articulate the chain between desired outcome, customer opportunity, and proposed solution — a discipline most roadmaps skip entirely.",
        "Read this if you're a PM who has the title but feels disconnected from your users. It's most useful when you have authority over the discovery process and want to convince stakeholders that a customer interview a week beats a quarterly research sprint. It's less useful at companies where research is already a separate function — though many such companies probably should question that structure.",
        "Pair it with The Mom Test for the actual mechanics of customer conversations. Continuous Discovery Habits is strong on process and weak on the moment-to-moment craft of asking better questions; The Mom Test is the reverse.",
      ],
      keyConcepts: [
        "Opportunity Solution Tree",
        "Continuous discovery (weekly customer touchpoints)",
        "Outcome over outputs",
        "Assumption tests vs. customer interviews",
        "The discovery trio (PM, designer, engineer in research)",
      ],
      whoShouldRead: "PMs who feel disconnected from their users and want a structured habit (not just a project) to fix it. Especially useful for teams transitioning from feature-factory to outcome-driven work.",
      pairsWith: ["pm-1", "pm-8"],
      relatedCaseStudies: ["cs-3", "cs-5"],
    },
  },
  {
    id: "pm-3",
    title: "The Lean Product Playbook",
    author: "Dan Olsen",
    category: "Product Management",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9781118960875-M.jpg",
    link: "https://drive.google.com/file/d/1eEwZQ2_CzA29ls0R3PPn78XWemCuE6JI/view?usp=drive_link",
    description: "How to innovate with minimum viable products and rapid customer feedback using a proven lean framework.",
    rating: 4.6,
    pages: 336,
    year: 2015,
    tags: ["lean", "mvp", "feedback"],
    summary: {
      analysis: [
        "The Lean Product Playbook is the operational companion to The Lean Startup. Where Eric Ries gave the philosophy, Dan Olsen gave the worksheet. It's the book PMs reach for when they need a structured exercise to run with their team next Tuesday, not a thesis to debate at a leadership offsite.",
        "Its strength is the step-by-step framing of how to take a vague hypothesis to a testable artifact. The Product-Market Fit Pyramid that the book popularized has shown up in countless product strategy docs since 2015 — the structure of breaking PMF into target customer, underserved needs, value proposition, feature set, and UX is a clean mental model that most product teams now use implicitly.",
        "It's most useful for early-stage PMs and founders pre-PMF. By Series B or beyond, when you're optimizing existing products with real users, the playbook's lean-startup framing starts feeling too 0-to-1. Mid-to-late-stage teams should treat it as a refresher on first-principles thinking, not a daily handbook.",
        "Pair with Continuous Discovery Habits for the modern update: Olsen's book was written before continuous discovery was standard practice, and Torres extends the same impulse into a sustainable cadence rather than a one-time lean experiment.",
      ],
      keyConcepts: [
        "Product-Market Fit Pyramid",
        "Target customer hypothesis",
        "Underserved customer needs",
        "MVP as hypothesis test",
        "Iterating value proposition",
      ],
      whoShouldRead: "Early-stage PMs and pre-PMF founders looking for a structured exercise to take a product hypothesis to a testable artifact. Useful as a refresher for later-stage PMs who've drifted into feature-shipping mode.",
      pairsWith: ["pm-2", "st-2"],
      relatedCaseStudies: ["cs-3", "cs-10"],
    },
  },
  {
    id: "pm-4",
    title: "Empowered",
    author: "Marty Cagan",
    category: "Product Management",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9781119691297-M.jpg",
    link: "https://www.youtube.com/watch?v=TYqHz2mPhjQ",
    description: "Ordinary people, extraordinary products. The follow-up to Inspired on building empowered product teams.",
    rating: 4.7,
    pages: 368,
    year: 2020,
    tags: ["leadership", "teams", "culture"],
    featured: true,
  },
  {
    id: "pm-5",
    title: "Shape Up",
    author: "Ryan Singer",
    category: "Product Management",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9781736633311-M.jpg",
    link: "https://drive.google.com/file/d/1o5R8yZz2N3QiD4IGaA8DCA3Ymu9eXN75/view?usp=drive_link",
    description: "Stop running in circles and ship work that matters. Basecamp's revolutionary product development framework.",
    rating: 4.5,
    pages: 220,
    year: 2019,
    tags: ["process", "shipping", "cycles"],
  },
  {
    id: "pm-6",
    title: "Product-Led Growth",
    author: "Wes Bush",
    category: "Product Management",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9781777119317-M.jpg",
    link: "https://drive.google.com/file/d/1ImTZbDn6pjHq9CFfLc4GLYS94gXpK_bP/view?usp=drive_link",
    description: "How to build a product that sells itself. The definitive guide to PLG strategy and execution.",
    rating: 4.4,
    pages: 276,
    year: 2019,
    tags: ["growth", "PLG", "strategy"],
  },
  {
    id: "pm-7",
    title: "Obviously Awesome",
    author: "April Dunford",
    category: "Product Management",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9780578515960-M.jpg",
    link: "https://www.youtube.com/watch?v=hdjlCLb9Hl8",
    description: "How to nail product positioning so customers get it, buy it, love it.",
    rating: 4.7,
    pages: 198,
    year: 2019,
    tags: ["positioning", "marketing", "messaging"],
  },
  {
    id: "pm-8",
    title: "The Mom Test",
    author: "Rob Fitzpatrick",
    category: "Product Management",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9781492180746-M.jpg",
    link: "https://www.youtube.com/watch?v=uxTjE8TZugw",
    description: "How to talk to customers and learn if your business is a good idea even when everyone is lying to you.",
    rating: 4.8,
    pages: 130,
    year: 2013,
    tags: ["customer", "validation", "interviews"],
    featured: true,
  },
  {
    id: "pm-9",
    title: "Hooked",
    author: "Nir Eyal",
    category: "Product Management",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9781591847786-M.jpg",
    link: "https://drive.google.com/file/d/1R2JUi6KHLRx2BJsmDr_HGXvC1etM9bYY/view?usp=drive_link",
    description: "How to build habit-forming products using the Hook Model.",
    rating: 4.5,
    pages: 256,
    year: 2014,
    tags: ["habits", "engagement", "psychology"],
  },
  {
    id: "pm-10",
    title: "Escaping the Build Trap",
    author: "Melissa Perri",
    category: "Product Management",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9781491973790-M.jpg",
    link: "https://drive.google.com/file/d/1TBcnOCA86ND7YuXzrR2fgZjiTgLuASQo/view?usp=drive_link",
    description: "How effective product management creates real value. Stop building and start solving real problems.",
    rating: 4.6,
    pages: 200,
    year: 2018,
    tags: ["strategy", "outcomes", "process"],
  },

  // ─── STARTUPS ────────────────────────────────────────────────────────────
  {
    id: "st-1",
    title: "Zero to One",
    author: "Peter Thiel",
    category: "Startups",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9780804139021-M.jpg",
    link: "https://drive.google.com/file/d/1Na8frwb8aH6BJZkwENV6smSii0g5nx7s/view?usp=drive_link",
    description: "Notes on startups, or how to build the future. The contrarian's guide to building billion-dollar companies.",
    rating: 4.6,
    pages: 224,
    year: 2014,
    tags: ["monopoly", "future", "venture"],
    featured: true,
  },
  {
    id: "st-2",
    title: "The Lean Startup",
    author: "Eric Ries",
    category: "Startups",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9780307887894-M.jpg",
    link: "https://www.youtube.com/watch?v=fEvKo90qBns",
    description: "How today's entrepreneurs use continuous innovation to create radically successful businesses.",
    rating: 4.5,
    pages: 336,
    year: 2011,
    tags: ["lean", "mvp", "iteration"],
  },
  {
    id: "st-3",
    title: "The Hard Thing About Hard Things",
    author: "Ben Horowitz",
    category: "Startups",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9780062273208-M.jpg",
    link: "https://www.youtube.com/watch?v=F2e3RqL4VWs",
    description: "Building a business when there are no easy answers. Raw, unfiltered startup wisdom.",
    rating: 4.8,
    pages: 304,
    year: 2014,
    tags: ["leadership", "crisis", "culture"],
    featured: true,
  },
  {
    id: "st-4",
    title: "Blitzscaling",
    author: "Reid Hoffman",
    category: "Startups",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9780008339548-M.jpg",
    link: "https://drive.google.com/file/d/1zI9fxv5euHrjNeAAyp4PQVmw0Zei-tA6/view?usp=drive_link",
    description: "The lightning-fast path to building massively valuable companies.",
    rating: 4.3,
    pages: 336,
    year: 2018,
    tags: ["scaling", "growth", "network"],
  },
  {
    id: "st-5",
    title: "Traction",
    author: "Gabriel Weinberg",
    category: "Startups",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9780241242551-M.jpg",
    link: "https://drive.google.com/file/d/1aIvWHwFGXP0XXEu5uPaMBJCL8eqy8wMT/view?usp=drive_link",
    description: "How any startup can achieve explosive customer growth using the Bullseye Framework.",
    rating: 4.5,
    pages: 256,
    year: 2014,
    tags: ["growth", "channels", "marketing"],
  },
  {
    id: "st-6",
    title: "The Startup Owner's Manual",
    author: "Steve Blank",
    category: "Startups",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9780984999309-M.jpg",
    link: "https://drive.google.com/file/d/1MsXVdkpyhzprE8sON0hY2ZJlwCeguN6M/view?usp=drive_link",
    description: "The step-by-step guide for building a great company. The customer development bible.",
    rating: 4.4,
    pages: 608,
    year: 2012,
    tags: ["customer dev", "business model", "validation"],
  },
  {
    id: "st-7",
    title: "Venture Deals",
    author: "Brad Feld",
    category: "Startups",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9781119594826-M.jpg",
    link: "https://drive.google.com/file/d/1eklyaw58nN5T0RlsrhEFnL-RFe9U3gew/view?usp=drive_link",
    description: "Be smarter than your lawyer and venture capitalist. Essential reading for founders raising money.",
    rating: 4.6,
    pages: 272,
    year: 2019,
    tags: ["funding", "VC", "terms"],
  },
  {
    id: "st-8",
    title: "Hacking Growth",
    author: "Sean Ellis",
    category: "Startups",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9780385348690-M.jpg",
    link: "https://drive.google.com/file/d/1f90ZnKeGBNfAzHduVwAYxfHrhp40m5kh/view?usp=drive_link",
    description: "How today's fastest-growing companies drive breakout success.",
    rating: 4.4,
    pages: 320,
    year: 2017,
    tags: ["growth hacking", "experiments", "retention"],
  },
  {
    id: "st-9",
    title: "Lost and Founder",
    author: "Rand Fishkin",
    category: "Startups",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9780735213326-M.jpg",
    link: "https://drive.google.com/file/d/1RCmiJPWnYNFxAz4FIpOj2ZQNPy1MokZd/view?usp=drive_link",
    description: "A painfully honest field guide to the startup world.",
    rating: 4.5,
    pages: 336,
    year: 2018,
    tags: ["honest", "founder", "lessons"],
  },
  {
    id: "st-10",
    title: "The $100 Startup",
    author: "Chris Guillebeau",
    category: "Startups",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9780307951526-M.jpg",
    link: "https://drive.google.com/file/d/1Tr9dyrpiYN8mAAy-pxtIRhfAtBfCWI--/view?usp=drive_link",
    description: "Reinvent the way you make a living, do what you love, and create a new future.",
    rating: 4.3,
    pages: 304,
    year: 2012,
    tags: ["bootstrapping", "lifestyle", "independence"],
  },

  // ─── MANAGEMENT ──────────────────────────────────────────────────────────
  {
    id: "mg-1",
    title: "High Output Management",
    author: "Andrew Grove",
    category: "Management",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9780679762881-M.jpg",
    link: "https://drive.google.com/file/d/1jRZZv0DSoN0wHlzzZ4Np1BJOXVUvLVUs/view?usp=drive_link",
    description: "The legendary Intel CEO's definitive guide to running any organization.",
    rating: 4.8,
    pages: 272,
    year: 1995,
    tags: ["operations", "OKRs", "leadership"],
    featured: true,
  },
  {
    id: "mg-2",
    title: "Measure What Matters",
    author: "John Doerr",
    category: "Management",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9780525536222-M.jpg",
    link: "https://drive.google.com/file/d/12wCzGZpiJtIZNzR4TFbP8qOL7zm2u9F-/view?usp=drive_link",
    description: "How Google, Bono, and the Gates Foundation rock the world with OKRs.",
    rating: 4.5,
    pages: 320,
    year: 2018,
    tags: ["OKRs", "goals", "performance"],
  },
  {
    id: "mg-3",
    title: "Good to Great",
    author: "Jim Collins",
    category: "Management",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9780066620992-M.jpg",
    link: "https://drive.google.com/file/d/1tbu663LbJLW9sqJjzpGIxh8Ix2dJ-3v2/view?usp=drive_link",
    description: "Why some companies make the leap and others don't.",
    rating: 4.5,
    pages: 320,
    year: 2001,
    tags: ["leadership", "culture", "discipline"],
  },
  {
    id: "mg-4",
    title: "Principles",
    author: "Ray Dalio",
    category: "Management",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9781501124020-M.jpg",
    link: "https://www.youtube.com/watch?v=B9XGUpQZY38",
    description: "Life and work principles from the founder of Bridgewater Associates.",
    rating: 4.4,
    pages: 592,
    year: 2017,
    tags: ["principles", "culture", "finance"],
    featured: true,
  },
  {
    id: "mg-5",
    title: "The Innovator's Dilemma",
    author: "Clayton Christensen",
    category: "Management",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9781633691780-M.jpg",
    link: "https://drive.google.com/file/d/1fcRecZO-EioBHo7I1_Kby_UqGc2kB5yr/view?usp=drive_link",
    description: "When new technologies cause great firms to fail.",
    rating: 4.5,
    pages: 336,
    year: 1997,
    tags: ["disruption", "innovation", "strategy"],
  },
  {
    id: "mg-6",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    category: "Management",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9780374533557-M.jpg",
    link: "https://www.youtube.com/watch?v=CjVQJdIrDJ0",
    description: "The Nobel laureate's landmark work on behavioral economics and decision-making.",
    rating: 4.6,
    pages: 512,
    year: 2011,
    tags: ["psychology", "decisions", "economics"],
  },
  {
    id: "mg-7",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Management",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9780857197689-M.jpg",
    link: "https://drive.google.com/file/d/1p2VM5_FSryAxmKx4OWlYihhHjxxBSJqB/view?usp=drive_link",
    description: "Timeless lessons on wealth, greed, and happiness.",
    rating: 4.8,
    pages: 256,
    year: 2020,
    tags: ["finance", "behavior", "wealth"],
    featured: true,
  },
  {
    id: "mg-8",
    title: "This Is Marketing",
    author: "Seth Godin",
    category: "Management",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9780525540830-M.jpg",
    link: "https://www.youtube.com/watch?v=BPK_qzeH_yk",
    description: "You can't be seen until you learn to see. Seth Godin on modern marketing.",
    rating: 4.4,
    pages: 288,
    year: 2018,
    tags: ["marketing", "brand", "empathy"],
  },
  {
    id: "mg-9",
    title: "No Rules Rules",
    author: "Reed Hastings",
    category: "Management",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9781984877864-M.jpg",
    link: "https://drive.google.com/file/d/1r5y89w_1sWtZViYYZ72z-tZVxdWTgi0l/view?usp=drive_link",
    description: "Netflix and the culture of reinvention.",
    rating: 4.5,
    pages: 336,
    year: 2020,
    tags: ["culture", "freedom", "netflix"],
  },
  {
    id: "mg-10",
    title: "The E-Myth Revisited",
    author: "Michael E. Gerber",
    category: "Management",
    thumbnailURL: "https://covers.openlibrary.org/b/isbn/9780887307287-M.jpg",
    link: "https://drive.google.com/file/d/1eQ8bnJraiIDRdri3Y75mpeKABhKj_7dB/view?usp=drive_link",
    description: "Why most small businesses don't work and what to do about it.",
    rating: 4.4,
    pages: 288,
    year: 1995,
    tags: ["systems", "operations", "entrepreneurship"],
  },
];

export const categories: Category[] = [
  "Product Management",
  "Startups",
  "Management",
];

export const getBooksByCategory = (category: Category) =>
  books.filter((b) => b.category === category);

export const getFeaturedBooks = () => books.filter((b) => b.featured);