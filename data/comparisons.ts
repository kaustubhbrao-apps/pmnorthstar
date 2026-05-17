// Comparison pages — capture "X vs Y" search queries that individual
// case studies can't target. Each comparison is a side-by-side analysis
// with links to the underlying case studies.

export interface Comparison {
  slug: string;
  companyA: string; // case study ID
  companyB: string;
  title: string;
  eyebrow: string;
  intro: string;
  verdict: string; // 2-3 sentence summary of the key difference
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  accentColor: string;
  rows: Array<{ label: string; a: string; b: string }>;
}

export const comparisons: Comparison[] = [
  {
    slug: "zerodha-vs-groww",
    companyA: "cs-53",
    companyB: "cs-62",
    title: "Zerodha vs Groww — Two Paths to Indian Investing",
    eyebrow: "The discipline play vs the design play",
    intro:
      "India's two largest retail investing platforms are built on opposite philosophies. Zerodha bootstrapped its way to ₹4,700 crore profit by refusing VC money and serving serious traders. Groww raised aggressively to build the easiest first-time investor app, then took Zerodha's lead by user count. Same market, completely different product strategies — and arguably both winning.",
    verdict:
      "Zerodha wins if you trade actively or care about pricing discipline. Groww wins if you're starting out or prefer mobile-first design. The interesting part: both are right for their audiences, and the market is large enough for both to thrive.",
    metaTitle: "Zerodha vs Groww — Which Is Better for Indian Investors?",
    metaDescription:
      "Side-by-side comparison of Zerodha and Groww — pricing, product, user base, profitability. Which is better for Indian investors in 2026?",
    keywords: [
      "Zerodha vs Groww",
      "Groww or Zerodha",
      "best broker India",
      "Zerodha review",
      "Groww review",
      "Indian discount broker",
    ],
    accentColor: "#9B8FFF",
    rows: [
      { label: "Founded", a: "2010", b: "2017" },
      {
        label: "Funding",
        a: "Bootstrapped, zero VC",
        b: "VC-funded, ~$3B valuation",
      },
      {
        label: "Primary audience",
        a: "Serious traders, F&O users",
        b: "First-time investors, MF buyers",
      },
      { label: "Active users", a: "~1.6M", b: "13M+" },
      {
        label: "FY24 financials",
        a: "₹8,320cr rev / ₹4,700cr profit",
        b: "Recently profitable",
      },
      {
        label: "Default product",
        a: "Kite (stock trading)",
        b: "Mutual funds, then stocks",
      },
      {
        label: "Brokerage",
        a: "₹20 flat / 0 on delivery",
        b: "₹20 flat / 0 on delivery",
      },
      {
        label: "Education product",
        a: "Varsity (deep, free)",
        b: "In-app explainers",
      },
      {
        label: "Mobile experience",
        a: "Good but desktop-led",
        b: "Mobile-first from day 1",
      },
      { label: "IPO plans", a: "No IPO plans", b: "IPO prep 2025-26" },
    ],
  },
  {
    slug: "phonepe-vs-paytm",
    companyA: "cs-57",
    companyB: "cs-55",
    title: "PhonePe vs Paytm — How UPI Changed Everything",
    eyebrow: "The right bet at the right time",
    intro:
      "In 2015, Paytm was India's payments giant with 200M users. PhonePe was a new company betting that UPI would replace wallets. A decade later, PhonePe processes more than half of all UPI transactions in India and Paytm Payments Bank was shut down by RBI. The contrast is a textbook lesson in betting on technology shifts.",
    verdict:
      "PhonePe won by betting on UPI when Paytm was busy defending its wallet moat. The lesson: in technology shifts, the company that bets on the future rail beats the company optimizing the current rail — but the timing has to be right. Bet too early, you starve. Bet too late, you've already lost.",
    metaTitle: "PhonePe vs Paytm — Who Won the Indian Payments War?",
    metaDescription:
      "How PhonePe overtook Paytm in UPI: market share, valuation, regulatory history. Full comparison of India's two biggest payment apps.",
    keywords: [
      "PhonePe vs Paytm",
      "Paytm vs PhonePe",
      "UPI market share India",
      "best Indian payment app",
      "PhonePe valuation",
      "Paytm RBI",
    ],
    accentColor: "#F3123C",
    rows: [
      { label: "Founded", a: "2015", b: "2010" },
      { label: "Parent", a: "Walmart (100%)", b: "Independent" },
      { label: "Primary bet", a: "UPI-first", b: "Wallet-first → UPI later" },
      {
        label: "UPI market share (2024)",
        a: "~50%+",
        b: "Much smaller (single digits)",
      },
      { label: "Valuation", a: "$12B", b: "~$7-8B (post-recovery)" },
      {
        label: "Listed?",
        a: "IPO prep 2025-26",
        b: "Public since Nov 2021",
      },
      {
        label: "Key crisis",
        a: "None major",
        b: "RBI Payments Bank shutdown 2024",
      },
      {
        label: "Strategy",
        a: "Focused: payments + lending/insurance",
        b: "Super-app (Mall, Games, etc.)",
      },
      {
        label: "Reverse-flip tax",
        a: "~$1B (Singapore → India 2022)",
        b: "Already Indian",
      },
    ],
  },
  {
    slug: "razorpay-vs-stripe",
    companyA: "cs-52",
    companyB: "cs-27",
    title: "Razorpay vs Stripe — Two Continents, Same Playbook",
    eyebrow: "How an Indian fintech built the Stripe of Bharat",
    intro:
      "Stripe defined the developer-first payments category in the US. Razorpay built the same playbook for India — but had to expand much further to win, becoming a neo-banking infrastructure stack rather than just a payment gateway. Same starting thesis, very different end states because the market constraints were different.",
    verdict:
      "Stripe stayed focused on payments and went global. Razorpay couldn't stay focused because Indian fintech demanded a fuller stack — gateway alone was too commoditized. The lesson: developer-first GTM is the wedge; what you expand into after the wedge is determined by the market structure you operate in.",
    metaTitle:
      "Razorpay vs Stripe — How Indian Fintech Compares to the Global Standard",
    metaDescription:
      "Razorpay built India's Stripe — then expanded into a neo-banking platform. Detailed comparison of the two API-first fintech leaders.",
    keywords: [
      "Razorpay vs Stripe",
      "Stripe for India",
      "Indian Stripe",
      "Razorpay competitor",
      "fintech infrastructure",
      "payments gateway India",
    ],
    accentColor: "#26A69A",
    rows: [
      { label: "Founded", a: "2014", b: "2010" },
      { label: "HQ", a: "Bengaluru", b: "San Francisco / Dublin" },
      { label: "Founders", a: "Harshil Mathur, Shashank Kumar", b: "Patrick & John Collison" },
      {
        label: "Core wedge",
        a: "Developer-first payment gateway",
        b: "Developer-first payment gateway",
      },
      {
        label: "Expansion",
        a: "Banking, lending, payroll, POS",
        b: "Stayed focused on payments + climate/billing",
      },
      { label: "Valuation", a: "$7.5B", b: "~$95B (private)" },
      {
        label: "Annual TPV",
        a: "$150B+",
        b: "$1T+ (orders of magnitude larger)",
      },
      {
        label: "IPO",
        a: "Prep 2025-26 (reverse-flipped to India)",
        b: "Still private, IPO speculation ongoing",
      },
      {
        label: "Geographic focus",
        a: "India + SEA expansion",
        b: "Global from day 1",
      },
    ],
  },
  {
    slug: "cred-vs-monzo",
    companyA: "cs-51",
    companyB: "cs-34",
    title: "Cred vs Monzo — Two Models of Premium Fintech",
    eyebrow: "Design-led brand vs viral product wedge",
    intro:
      "Cred and Monzo took opposite approaches to building a premium consumer fintech brand. Cred gated users by credit score and made design the product. Monzo opened up to everyone and made a single design choice — the hot coral card — its viral wedge. Both worked. Both are now studying each other.",
    verdict:
      "Cred wins on brand prestige and design polish; Monzo wins on TAM and inclusivity. Cred is what premium-first looks like in India. Monzo is what mass-market disruption looks like in the UK. Both prove that design choices can be the moat.",
    metaTitle: "Cred vs Monzo — Premium Indian Fintech vs UK Challenger Bank",
    metaDescription:
      "Cred and Monzo took opposite paths to premium fintech. Compare their business models, design strategy, and growth playbooks.",
    keywords: [
      "Cred vs Monzo",
      "premium fintech",
      "challenger bank comparison",
      "Indian fintech",
      "UK challenger bank",
      "fintech design",
    ],
    accentColor: "#EC407A",
    rows: [
      { label: "Founded", a: "2018 (India)", b: "2015 (UK)" },
      {
        label: "Audience",
        a: "Credit score 750+ only",
        b: "Everyone (mass market)",
      },
      {
        label: "Core wedge",
        a: "Exclusivity + design",
        b: "Hot coral card + UX",
      },
      {
        label: "Brand vibe",
        a: "Premium / status",
        b: "Friendly / inclusive",
      },
      { label: "Members / users", a: "13M+ members", b: "9M+ customers" },
      {
        label: "Bank license",
        a: "Partner banks (no direct license)",
        b: "Full UK banking license",
      },
      {
        label: "Monetization",
        a: "Cred Cash, Cred Money, partners",
        b: "Interchange, FX, lending, premium tier",
      },
      {
        label: "Valuation",
        a: "$6.4B (flat 2024)",
        b: "$5.9B (2024 round)",
      },
    ],
  },
  {
    slug: "discord-vs-clubhouse",
    companyA: "cs-64",
    companyB: "cs-19",
    title: "Discord vs Clubhouse — Why One Survived and One Didn't",
    eyebrow: "Persistence vs ephemerality, in community products",
    intro:
      "Both Discord and Clubhouse were betting on a similar consumer behavior: people wanted to gather online around shared interests. Discord built for persistence — servers, channels, history. Clubhouse built for ephemerality — live rooms that disappeared when they ended. Five years later, Discord is at $15B and growing. Clubhouse pivoted, then faded. The architectural decision determined everything.",
    verdict:
      "Discord's bet on community persistence — servers, history, role hierarchies — created compounding value as communities formed and stayed. Clubhouse's ephemerality created FOMO at launch but no retention. Lesson: in community products, the persistence vs ephemerality choice is foundational, not a feature.",
    metaTitle: "Discord vs Clubhouse — Why One Survived the Audio Wars",
    metaDescription:
      "Discord and Clubhouse both bet on community audio. Discord won by building for persistence; Clubhouse fell because of ephemerality. Full comparison.",
    keywords: [
      "Discord vs Clubhouse",
      "Clubhouse failure",
      "Discord community",
      "community platforms",
      "audio chat apps",
      "Discord vs Twitter Spaces",
    ],
    accentColor: "#4FC3F7",
    rows: [
      { label: "Launched", a: "2015", b: "2020" },
      {
        label: "Audio model",
        a: "Persistent voice channels",
        b: "Ephemeral live rooms",
      },
      {
        label: "Text + persistence",
        a: "Full history, channels, files",
        b: "None (audio only)",
      },
      { label: "Peak MAU", a: "200M+ (still growing)", b: "~10M (declined fast)" },
      {
        label: "Original use case",
        a: "Gaming communities",
        b: "Tech conversations",
      },
      {
        label: "Evolution",
        a: "Gaming → all communities",
        b: "Audio rooms → recorded posts (pivoted)",
      },
      {
        label: "Valuation peak",
        a: "$15B (declined Microsoft's $12B offer)",
        b: "~$4B in 2021, much lower now",
      },
      {
        label: "Status",
        a: "IPO prep 2026-27",
        b: "Pivoted multiple times; sold most of team",
      },
    ],
  },
];

export const getComparisonBySlug = (slug: string): Comparison | undefined =>
  comparisons.find((c) => c.slug === slug);
