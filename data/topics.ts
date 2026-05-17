// Topic hubs — thematic pages that aggregate related case studies.
// Captures category-level search queries (e.g. "Indian fintech case studies")
// that individual case studies can't target on their own.

export interface Topic {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  accentColor: string;
  caseStudyIds: string[];
}

export const topics: Topic[] = [
  {
    slug: "indian-fintech",
    title: "Indian Fintech Case Studies",
    eyebrow: "The companies redefining money in India",
    intro:
      "From Razorpay's API-first wedge to Paytm's super-app collapse and recovery, Indian fintech has produced more product strategy lessons in the last decade than almost any other category globally. These are the long-form deep dives on the companies that built it.",
    metaTitle: "Indian Fintech Case Studies — northstar",
    metaDescription:
      "Long-form case studies on India's biggest fintech companies: Razorpay, Cred, Zerodha, PhonePe, Paytm, Slice, Groww. Free, in-depth, no paywall.",
    keywords: [
      "Indian fintech case studies",
      "Razorpay case study",
      "Cred business model",
      "Zerodha bootstrapping",
      "PhonePe UPI",
      "Paytm super app",
      "Slice credit card",
      "Indian fintech 2026",
    ],
    accentColor: "#9B8FFF",
    caseStudyIds: ["cs-51", "cs-52", "cs-53", "cs-55", "cs-57", "cs-61", "cs-62"],
  },
  {
    slug: "super-app-failures",
    title: "When Super-Apps Break",
    eyebrow: "The bundle-everything thesis, autopsied",
    intro:
      "WeChat made super-apps look easy in China; every other market has discovered they aren't. Indian super-app bets — Paytm, Cult.fit, the broader Tata Neu story — each broke for the same structural reason: adjacent verticals have different unit economics, and bundling them creates more management complexity than customer value. These are the deep dives.",
    metaTitle: "Super-App Failures — Case Studies on the Bundle Trap",
    metaDescription:
      "Why super-apps break outside China: long-form case studies on Paytm, Cult.fit, BYJU'S, and other multi-vertical bets that nearly collapsed.",
    keywords: [
      "super app failures",
      "Paytm super app strategy",
      "Cult.fit wellness app",
      "BYJU'S downfall",
      "super app India",
      "multi-vertical strategy",
    ],
    accentColor: "#FF6B35",
    caseStudyIds: ["cs-55", "cs-59", "cs-54", "cs-39"],
  },
  {
    slug: "bootstrapped-companies",
    title: "Bootstrapped to Billion",
    eyebrow: "Companies that refused VC money — and won",
    intro:
      "Most billion-dollar companies are built on hundreds of millions in VC funding. A small set ignored the playbook entirely: Zerodha never took outside capital and made ₹4,700 crore profit in FY24. Atlassian skipped the enterprise sales team and built a $50B+ business on product-led growth. These are the deep dives on the companies that built durable scale without the venture machine.",
    metaTitle: "Bootstrapped Billion-Dollar Companies — Case Studies",
    metaDescription:
      "How Zerodha, Atlassian, and other bootstrapped companies built billion-dollar businesses without raising VC. Long-form case studies, no paywall.",
    keywords: [
      "bootstrapped companies",
      "Zerodha case study",
      "Atlassian no sales team",
      "bootstrapped to billion",
      "no VC funding",
      "product-led growth",
    ],
    accentColor: "#26A69A",
    caseStudyIds: ["cs-53", "cs-50", "cs-49"],
  },
  {
    slug: "product-design",
    title: "Design as a Moat",
    eyebrow: "When product design is the competitive advantage",
    intro:
      "Most companies treat design as decoration. The companies in this collection treated it as product strategy — building moats that competitors couldn't replicate even with bigger budgets. From Cred's exclusivity-as-design to Figma's browser-first bet, Headspace's approachable meditation interface to Monzo's hot coral card, these are the deep dives where design itself was the wedge.",
    metaTitle: "Product Design Case Studies — When Design Is the Strategy",
    metaDescription:
      "Long-form case studies on companies where design was the competitive moat: Figma, Cred, Headspace, Monzo, Superhuman. Free, in-depth analysis.",
    keywords: [
      "product design case studies",
      "design as moat",
      "Figma case study",
      "Cred design strategy",
      "Headspace design",
      "Monzo branding",
    ],
    accentColor: "#50C878",
    caseStudyIds: ["cs-6", "cs-51", "cs-33", "cs-34", "cs-35", "cs-58"],
  },
];

export const getTopicBySlug = (slug: string): Topic | undefined =>
  topics.find((t) => t.slug === slug);
