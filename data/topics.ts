// ⚠️  AUTO-GENERATED — DO NOT EDIT BY HAND.
// Source of truth is content/. Run `npx tsx scripts/sync-content.ts`
// to regenerate after editing markdown files.

export interface TopicFAQ {
  question: string;
  answer: string;
}

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
  // ISO date. Optional: a topic with no publishedAt is always live
  // (legacy entries predate scheduling). A future date keeps the topic
  // hidden until then in production. Dev sees everything.
  publishedAt?: string;
  faqs?: TopicFAQ[];
}

export const topics: Topic[] = [
  {
    slug: "bootstrapped-companies",
    title: "Bootstrapped to Billion",
    eyebrow: "Companies that refused VC money — and won",
    intro: "Most billion-dollar companies are built on hundreds of millions in VC funding. A small set ignored the playbook entirely: Zerodha never took outside capital and made ₹4,700 crore profit in FY24. Atlassian skipped the enterprise sales team and built a $50B+ business on product-led growth. These are the deep dives on the companies that built durable scale without the venture machine.",
    metaTitle: "Bootstrapped Billion-Dollar Companies — Case Studies",
    metaDescription: "How Zerodha, Atlassian, and other bootstrapped companies built billion-dollar businesses without raising VC. Long-form case studies, no paywall.",
    keywords: [
      "bootstrapped companies",
      "Zerodha case study",
      "Atlassian no sales team",
      "bootstrapped to billion",
      "no VC funding",
      "product-led growth"
    ],
    accentColor: "#26A69A",
    caseStudyIds: [
      "cs-53",
      "cs-50",
      "cs-49"
    ],
    faqs: [
      {
        question: "Can you really build a billion-dollar company without VC funding?",
        answer: "Yes, but the path is narrower. Zerodha did it in fintech, Atlassian in B2B SaaS, GitHub in developer tools (pre-Microsoft). The pattern: a product so well-fitted to a market that distribution costs are near-zero, plus the discipline to delay every shiny adjacency. The reason it's rare isn't capital — it's the founder personality required to refuse capital when it's offered."
      },
      {
        question: "Why did Zerodha refuse VC money?",
        answer: "Founders Nithin and Nikhil Kamath believed VC funding would force growth-at-all-costs behavior that erodes customer trust over the long run. Bootstrapping let them prioritize retention over acquisition, refuse to launch products they didn't believe in (no crypto, no IPO push), and keep founder optionality intact. The 2024 SEBI F&O restrictions hit Zerodha less than VC-funded competitors because they had no investor pressure to maintain growth rates."
      },
      {
        question: "How did Atlassian build a $50B company without sales?",
        answer: "Atlassian replaced outbound sales with product + content + community. Free trials with transparent pricing eliminated evaluation friction. Bottom-up adoption (developers chose Jira/Confluence) bypassed traditional B2B procurement. Eventually they added enterprise sales — but only after the bottom-up motion saturated, which took over a decade. The early bootstrap discipline became the muscle memory that compounded."
      }
    ],
  },
  {
    slug: "comeback-stories",
    title: "Back From the Brink",
    eyebrow: "The turnarounds nobody saw coming",
    intro: "Every company in this collection was, at some point, written off. Airbnb was burning cash with listings nobody wanted until its founders flew out to reshoot the photos themselves. Lego was weeks from bankruptcy, drowning in product lines that had nothing to do with the brick. Microsoft was the lumbering giant everyone assumed had missed mobile and cloud both. Zomato cratered 75% after its IPO. Paytm collapsed and clawed its way back. What turned each of them around wasn't a flashy new bet — it was a brutal diagnosis, a return to the core, and a culture willing to admit what wasn't working. These are the deep dives on the companies that came back from the brink.",
    metaTitle: "Comeback Stories — Case Studies on Corporate Turnarounds",
    metaDescription: "Long-form case studies on companies that came back from the edge: Airbnb's near-death survival, Lego's bankruptcy escape, Microsoft's cloud reinvention, and more.",
    keywords: [
      "corporate turnaround case studies",
      "Airbnb near death",
      "Lego bankruptcy comeback",
      "Microsoft turnaround Nadella",
      "company comeback stories",
      "business turnaround strategy"
    ],
    accentColor: "#FBBF24",
    caseStudyIds: [
      "cs-3",
      "cs-28",
      "cs-22",
      "cs-66",
      "cs-55"
    ],
    publishedAt: "2026-07-03",
    faqs: [
      {
        question: "What do successful turnarounds have in common?",
        answer: "They start with a brutally honest diagnosis and a return to the core. Lego cut hundreds of products to refocus on the brick. Microsoft under Nadella abandoned its Windows-first religion for a cloud-first culture. Airbnb survived by getting close enough to hosts to literally reshoot their listing photos. Turnarounds aren't about a clever new bet — they're about subtracting distractions and recommitting to what made the company matter."
      },
      {
        question: "How did Airbnb survive its near-death period?",
        answer: "Early Airbnb was nearly out of money with listings nobody booked. The founders flew to New York, met hosts in person, and discovered the photos were terrible — so they took professional photos themselves. Revenue doubled. The lesson became Airbnb canon: do things that don't scale to find what's actually broken. Survival came from founder-level proximity to the problem, not a strategy deck."
      },
      {
        question: "Why did Microsoft's turnaround work when so many fail?",
        answer: "Satya Nadella changed the culture before the strategy. He replaced a 'know-it-all' internal posture with a 'learn-it-all' mindset, embraced platforms Microsoft once fought (Linux, open source), and made the cloud the company's center of gravity. The financial turnaround followed the cultural one. Most failed turnarounds reorganize the org chart but leave the culture untouched."
      },
      {
        question: "Is a comeback the same as a pivot?",
        answer: "Not quite. A pivot changes what the company does; a comeback restores the company's ability to execute on what it already does. Lego didn't stop selling bricks — it stopped diluting the brick. Zomato didn't abandon food delivery after its IPO crash — it tightened economics and rebuilt market confidence. Comebacks are about regaining health, not changing identity."
      }
    ],
  },
  {
    slug: "d2c-brands",
    title: "Skipping the Middleman",
    eyebrow: "Brands that owned the customer relationship end to end",
    intro: "The traditional path put layers between the brand and the buyer — distributors, retailers, dealers — each taking margin and owning the customer data the brand should have had. The companies in this collection cut them out. Boat became India's #1 audio brand with no factory, no stores, and no celebrity, by owning the brand and customer while staying asset-light. Nykaa built a beauty empire on a direct relationship with its shoppers over nine patient years. Tesla turned selling cars without dealers from a liability into a signature advantage. And Meesho reinvented the last mile entirely, reaching Bharat through a social network of resellers. Owning the customer end to end isn't just a margin play — it's a speed and data advantage. These are the deep dives on skipping the middleman.",
    metaTitle: "D2C Brands — Case Studies on Direct-to-Consumer Strategy",
    metaDescription: "Long-form case studies on direct-to-consumer brands: Boat, Nykaa, Tesla, and Meesho. How owning distribution and the customer became the strategy.",
    keywords: [
      "direct-to-consumer case studies",
      "Boat brand strategy",
      "Nykaa D2C",
      "Tesla direct sales",
      "Meesho social commerce",
      "D2C brand building"
    ],
    accentColor: "#FB923C",
    caseStudyIds: [
      "cs-69",
      "cs-58",
      "cs-23",
      "cs-60"
    ],
    publishedAt: "2026-08-07",
    faqs: [
      {
        question: "What is the core advantage of a direct-to-consumer model?",
        answer: "Owning the customer relationship. By skipping distributors and retailers, D2C brands control pricing, capture full margin, and — most importantly — own the data on who buys, why, and what they want next. Tesla controls the showroom experience; Nykaa knows exactly what its customers browse and buy. That direct line lets the brand iterate on product and marketing far faster than a brand selling through middlemen ever could."
      },
      {
        question: "How did Boat build a top audio brand without a factory or stores?",
        answer: "Boat owned the brand and the customer, not the manufacturing or retail. It outsourced production, sold through online marketplaces and its own channels, and poured its energy into design, pricing, and culturally tuned marketing for young Indians. By controlling the brand layer while staying asset-light, it became India's #1 audio brand without the costs that usually anchor a hardware company."
      },
      {
        question: "Why did Tesla sell directly instead of through dealers?",
        answer: "Dealers had every incentive to upsell gas cars they understood and service revenue they relied on — a structural conflict with selling EVs. By going direct, Tesla controlled the pitch, the price, and the entire customer experience, and captured the margin dealers would have taken. It turned a regulatory and logistical headache into a defining brand advantage."
      },
      {
        question: "Is social commerce a form of D2C?",
        answer: "It's a distinctive variant. Meesho built direct reach into Bharat by turning individual resellers into the distribution layer, reaching customers that traditional retail and even standard e-commerce couldn't. The brand still owns the relationship and the platform, but the last mile runs through a social network of sellers — D2C adapted to a market where trust travels through people, not ads."
      }
    ],
  },
  {
    slug: "developer-first-gtm",
    title: "Sell to the Developer First",
    eyebrow: "How bottom-up adoption beat the enterprise sales motion",
    intro: "The old playbook said you reach the buyer: pitch the CIO, run the demo, negotiate the contract. The companies here flipped it. They sold to the developer first — the person who would actually use the thing — and let adoption climb upward to the buyer. Stripe won with seven lines of code and documentation engineers loved. Atlassian built a $50B company with effectively no sales team, letting transparent pricing and self-serve onboarding do the work. Vercel made deployment so easy that frontend developers adopted it on instinct. Cloudflare turned security defaults into an enterprise wedge. And MySpace stands as the warning: ignore developers, and the platform layer goes to whoever welcomes them. These are the deep dives on winning from the bottom up.",
    metaTitle: "Developer-First GTM — Case Studies on Bottom-Up Growth",
    metaDescription: "Long-form case studies on companies that won by selling to developers first: Stripe, Atlassian, Vercel, Cloudflare, and the cautionary tale of MySpace.",
    keywords: [
      "developer-first GTM",
      "Stripe developer strategy",
      "Atlassian no sales team",
      "bottom-up SaaS adoption",
      "Vercel growth",
      "developer marketing"
    ],
    accentColor: "#34D399",
    caseStudyIds: [
      "cs-27",
      "cs-50",
      "cs-65",
      "cs-74",
      "cs-44"
    ],
    publishedAt: "2026-06-19",
    faqs: [
      {
        question: "What is developer-first go-to-market?",
        answer: "It's a strategy where the product wins the individual engineer before it ever reaches a procurement department. Instead of a sales team pitching executives, the documentation, the free tier, and the seven-line code snippet do the selling. Developers adopt it for a side project, bring it into their team, and the company grows from the bottom up — by the time a manager hears about it, it's already in production."
      },
      {
        question: "How did Atlassian build a $50B company with no sales team?",
        answer: "Atlassian made the product cheap enough and good enough to buy without a conversation. Transparent pricing, free trials, and a download-and-go motion meant teams could adopt Jira and Confluence without ever talking to a salesperson. The savings on sales got reinvested into product and word of mouth. The lesson: if your product is self-serve, the sales team is friction, not leverage."
      },
      {
        question: "Why is documentation a growth channel for developer tools?",
        answer: "For a developer evaluating a tool, the docs are the product. Stripe's docs were so good that engineers chose Stripe over incumbents purely on the integration experience. Great documentation lowers the cost of the first success — and the first success is what converts a curious developer into an advocate who brings the tool to their whole team."
      },
      {
        question: "What happens when you ignore developers?",
        answer: "MySpace is the cautionary tale in this collection. It had the audience but treated its platform as a walled garden, while Facebook opened an API and let developers build on top of it. The developer ecosystem became Facebook's moat. Ignoring developers doesn't just cost you a channel — it hands the platform layer to a competitor who welcomes them."
      }
    ],
  },
  {
    slug: "distribution-wins",
    title: "Distribution Eats Product",
    eyebrow: "When getting found was the whole game",
    intro: "The best product doesn't win — the one people actually find and finish buying does. This collection studies companies that turned distribution itself into a competitive advantage. Airbnb built the largest programmatic SEO machine in travel, generating pages for millions of locations and capturing demand at the moment of search. Booking.com ran thousands of simultaneous A/B tests, compounding tiny conversion wins into an unbeatable funnel. Walmart proved that every fraction of a second of load time was a revenue lever. GitHub turned even its 404 pages and Easter eggs into a recruiting and brand funnel. None of these are product features in the usual sense — they're the unglamorous mechanics of being found, loading fast, and converting. These are the deep dives on winning through distribution.",
    metaTitle: "Distribution Wins — Case Studies on Programmatic SEO and Performance",
    metaDescription: "Long-form case studies on companies that won through distribution: Airbnb's programmatic SEO, Booking.com's A/B testing, Walmart's web performance, and GitHub.",
    keywords: [
      "distribution strategy case studies",
      "Airbnb programmatic SEO",
      "Booking.com A/B testing",
      "Walmart web performance",
      "growth through distribution",
      "conversion optimization"
    ],
    accentColor: "#2DD4BF",
    caseStudyIds: [
      "cs-71",
      "cs-72",
      "cs-70",
      "cs-75"
    ],
    publishedAt: "2026-08-14",
    faqs: [
      {
        question: "Why does distribution often beat a better product?",
        answer: "Because a product nobody can find loses to a worse one everybody encounters. The companies here treated distribution — being discoverable, loading fast, converting visitors — as a core competency, not an afterthought. Airbnb built a programmatic SEO machine that ranked for millions of location queries; the better-product startups it beat simply never showed up in the search results where demand lived."
      },
      {
        question: "What is programmatic SEO?",
        answer: "Programmatic SEO generates thousands or millions of landing pages from structured data, each targeting a specific long-tail search. Airbnb created pages for essentially every destination and neighborhood, capturing travelers searching for specific places. Done well, it turns a database into an organic acquisition engine that compounds over time at near-zero marginal cost per page."
      },
      {
        question: "How is web performance a growth lever?",
        answer: "Speed converts. Walmart found that every fraction of a second shaved off load time measurably lifted conversion and revenue. A faster page isn't a technical nicety — it's a distribution advantage, because slow pages lose users before they ever see the offer. Performance work is some of the highest-ROI growth work available, and it compounds across every visitor."
      },
      {
        question: "Why does Booking.com test so obsessively?",
        answer: "Booking.com runs thousands of concurrent A/B tests because at its scale, a fraction-of-a-percent lift in conversion is worth enormous revenue. It treats the funnel as something to be relentlessly optimized through experimentation rather than opinion. The result is a conversion machine that out-converts competitors not through one big idea but through a compounding accumulation of tiny, proven wins."
      }
    ],
  },
  {
    slug: "freemium-plg",
    title: "Let the Product Sell Itself",
    eyebrow: "Freemium and product-led growth, done right",
    intro: "The cheapest salesperson is a product people can try in one click. The companies in this collection grew by letting the experience do the selling — a free tier, a frictionless first session, a habit that quietly expands into a paid plan. Canva let anyone design for free and charged for scale. Notion made itself indispensable solo, then monetized teams. Duolingo turned a free language app into a profitable habit. Zoom won by making a video call join in a single click while incumbents demanded downloads and logins. Even Superhuman's premium, invite-only model is product-led at its core — the product, not a sales rep, sets the terms. These are the deep dives on letting the product sell itself.",
    metaTitle: "Freemium & PLG — Case Studies on Product-Led Growth",
    metaDescription: "Long-form case studies on freemium and product-led growth: Canva, Notion, Duolingo, Superhuman, and Zoom. How the free tier became the funnel.",
    keywords: [
      "product-led growth case studies",
      "freemium model strategy",
      "Canva freemium",
      "Notion growth",
      "Duolingo monetization",
      "PLG SaaS"
    ],
    accentColor: "#A78BFA",
    caseStudyIds: [
      "cs-30",
      "cs-7",
      "cs-9",
      "cs-35",
      "cs-8"
    ],
    publishedAt: "2026-07-24",
    faqs: [
      {
        question: "What is product-led growth?",
        answer: "Product-led growth makes the product itself the primary driver of acquisition, conversion, and expansion. Instead of a sales team convincing buyers, users try a free or frictionless version, get value immediately, and upgrade or invite others on their own. The product does the work that marketing and sales used to — Zoom's one-click join and Canva's instant design are the pitch."
      },
      {
        question: "How do you design a freemium tier that converts?",
        answer: "The free tier has to deliver real, repeated value while leaving a natural reason to upgrade. Canva lets anyone design for free but gates premium assets and team features. Notion is fully usable solo but monetizes teams. The mistake is making the free tier either too crippled to love or too generous to leave — the art is giving away the habit and charging for the scale."
      },
      {
        question: "Does freemium work for every product?",
        answer: "No. Freemium works when the marginal cost of a free user is low and the product creates a habit that naturally expands. Superhuman went the opposite direction — premium-only and invite-gated — because its value was concentrated and its costs per user were high. PLG is the broader idea; freemium is just one of its pricing expressions, and the right one depends on cost structure and how value grows."
      },
      {
        question: "Why did Zoom win on frictionless onboarding?",
        answer: "Zoom obsessed over the first ten seconds: join a meeting in one click, no account, no download friction, video that just worked. In a category full of clunky enterprise tools, that frictionless first experience was the entire growth engine. Every smooth meeting was a demo for every participant, who then started their own meetings — the product was the funnel."
      }
    ],
  },
  {
    slug: "great-pivots",
    title: "The Pivot That Saved the Company",
    eyebrow: "When abandoning the original idea was the whole strategy",
    intro: "Most startups die clinging to their first idea. The companies in this collection did the opposite — they noticed the original plan wasn't working, found the one feature or behavior users actually loved, and bet everything on it. Slack was the internal chat tool of a failed game studio. Instagram was a photo filter buried inside a bloated check-in app called Burbn. Discord was voice chat for gamers that communities of every kind colonized. Slice rebuilt itself from a credit-card startup into a bank — twice. Razorpay turned a payment gateway into a banking empire. A great pivot isn't a fresh start; it's the courage to subtract everything except the part that was already winning. These are the deep dives on the turns that made the companies.",
    metaTitle: "Great Pivots — Case Studies on Companies That Changed Everything",
    metaDescription: "Long-form case studies on the pivots that built billion-dollar companies: Slack from a failed game, Instagram from Burbn, Discord from gaming chat, and more.",
    keywords: [
      "startup pivot case studies",
      "Slack pivot from gaming",
      "Instagram Burbn pivot",
      "Discord pivot",
      "famous startup pivots",
      "product pivot strategy"
    ],
    accentColor: "#9B8FFF",
    caseStudyIds: [
      "cs-2",
      "cs-10",
      "cs-64",
      "cs-61",
      "cs-52"
    ],
    publishedAt: "2026-06-12",
    faqs: [
      {
        question: "What makes a pivot successful instead of just desperate?",
        answer: "The best pivots keep the one thing that was working and throw away everything else. Slack kept the internal chat tool its game studio had built and discarded the game. Instagram kept the photo-filter feature buried inside Burbn and cut the rest. A successful pivot is subtraction with conviction, not a fresh start — the team already had signal on what users actually loved, and bet the company on amplifying it."
      },
      {
        question: "Why did Slack's pivot from gaming work?",
        answer: "Tiny Speck spent years building Glitch, a game that never found an audience. But internally the team had built a messaging tool to coordinate their distributed work — and they couldn't imagine working without it. When the game died, that internal tool became Slack. The pivot worked because the product had already proven itself on the hardest possible user: the team that built it."
      },
      {
        question: "Is pivoting a sign of failure?",
        answer: "Almost every iconic company pivoted at least once — the original idea is rarely the one that scales. What separates a great pivot from a flailing one is whether the team is following real usage signal versus chasing the next trend. Discord noticed gamers using its voice chat for non-gaming communities; Razorpay noticed customers needed banking, not just payments. They followed where users already were."
      },
      {
        question: "How do you know when it's time to pivot?",
        answer: "The clearest signal is when a small, unintended part of your product gets disproportionate love while the core stalls. That's the market telling you where the real demand is. The hardest part isn't spotting it — it's having the discipline to kill the thing you spent years building and commit fully to the corner that's actually working."
      }
    ],
  },
  {
    slug: "hardware-bets",
    title: "Betting on Atoms",
    eyebrow: "When the product is a physical thing — and timing is everything",
    intro: "Software forgives. Hardware doesn't. When your product is a physical object, you ship it once, you can't patch it, and timing becomes destiny. This collection puts the era-defining wins next to the cautionary failures. The iPhone reinvented the phone by solving problems people already felt; the iPod's scroll wheel turned a thousand songs into a single intuitive gesture. Google Glass was brilliant engineering launched years before the world had a use for it. The Zune arrived too late to a category Apple already owned. And BlackBerry rode its beloved keyboard straight into denial about the touchscreen. The difference between a legendary device and a write-off often comes down to timing and a real problem. These are the deep dives on betting the company on atoms.",
    metaTitle: "Hardware Bets — Case Studies on the Devices That Won and Lost",
    metaDescription: "Long-form case studies on the hardware gambles that defined eras: the iPhone, the iPod's scroll wheel, Google Glass, the Zune, and BlackBerry's touchscreen denial.",
    keywords: [
      "hardware product case studies",
      "iPhone launch strategy",
      "Google Glass failure",
      "Microsoft Zune",
      "BlackBerry decline",
      "consumer hardware bets"
    ],
    accentColor: "#60A5FA",
    caseStudyIds: [
      "cs-1",
      "cs-31",
      "cs-38",
      "cs-41",
      "cs-37"
    ],
    publishedAt: "2026-07-10",
    faqs: [
      {
        question: "Why is hardware so much harder than software?",
        answer: "Hardware has no patch on launch day — the product you ship is the product people judge. It carries inventory risk, manufacturing lead times, and razor-thin margins, and a single timing miss can sink years of work. Software lets you iterate after release; hardware makes you bet everything on getting the first version close to right."
      },
      {
        question: "Why did Google Glass fail when the iPhone succeeded?",
        answer: "The iPhone solved a problem people already had — a better phone, music player, and browser in one device — with a clear use case from day one. Google Glass was a remarkable piece of engineering in search of a reason to exist, launched before the social norms and use cases were ready. Great hardware fails when it's a solution looking for a problem, no matter how impressive."
      },
      {
        question: "What killed BlackBerry?",
        answer: "Denial. BlackBerry was convinced its physical keyboard and enterprise security were unassailable, so it dismissed the touchscreen as a fad. By the time it accepted the iPhone had redefined the category, the platform war was over. The case is a study in how a hardware leader's greatest strength — its beloved keyboard — became the anchor that drowned it."
      },
      {
        question: "Was the Zune a bad product?",
        answer: "The Zune wasn't bad — it was late. By the time Microsoft shipped a credible iPod competitor, Apple owned the hardware, the music store, and the cultural mindshare. The Zune shows that in hardware, being second with a comparable product usually isn't enough; you have to either be first or be dramatically better, and the Zune was neither."
      }
    ],
  },
  {
    slug: "indian-fintech",
    title: "Indian Fintech Case Studies",
    eyebrow: "The companies redefining money in India",
    intro: "From Razorpay's API-first wedge to Paytm's super-app collapse and recovery, Indian fintech has produced more product strategy lessons in the last decade than almost any other category globally. These are the long-form deep dives on the companies that built it.",
    metaTitle: "Indian Fintech Case Studies — northstar",
    metaDescription: "Long-form case studies on India's biggest fintech companies: Razorpay, Cred, Zerodha, PhonePe, Paytm, Slice, Groww. Free, in-depth, no paywall.",
    keywords: [
      "Indian fintech case studies",
      "Razorpay case study",
      "Cred business model",
      "Zerodha bootstrapping",
      "PhonePe UPI",
      "Paytm super app",
      "Slice credit card",
      "Indian fintech 2026"
    ],
    accentColor: "#9B8FFF",
    caseStudyIds: [
      "cs-51",
      "cs-52",
      "cs-53",
      "cs-55",
      "cs-57",
      "cs-61",
      "cs-62"
    ],
    faqs: [
      {
        question: "What are the most important Indian fintech case studies in 2026?",
        answer: "Cred, Razorpay, Zerodha, PhonePe, Paytm, Slice, and Groww are the seven companies that defined Indian fintech in the 2020s. Cred for design-as-moat, Razorpay for infrastructure, Zerodha for bootstrap profitability, PhonePe for UPI dominance, Paytm for the super-app trap and recovery, Slice for surviving two regulatory shocks, and Groww for serving the underserved."
      },
      {
        question: "Which Indian fintech is most profitable?",
        answer: "Zerodha is the standout. ₹4,700 crore net profit on ₹8,320 crore revenue in FY24 — a 56% margin, higher than most banks. Achieved without raising a single rupee of VC money. Razorpay is profitable on a smaller margin but with much bigger TPV. Cred is finally monetizing after years of brand-first investment."
      },
      {
        question: "Why did some Indian fintechs fail while others succeeded?",
        answer: "Three patterns separate winners from losers. Winners (Zerodha, Razorpay, PhonePe) bet on a single core product and went deep. Losers (Paytm's pre-2024 super-app, BYJU'S adjacencies) tried to bundle too many verticals and lost focus. Regulatory readiness also mattered — Slice and Groww survived RBI shocks; others didn't adapt fast enough."
      },
      {
        question: "What is the future of Indian fintech in 2026?",
        answer: "Three trends defining 2026: reverse-flips back to India for IPO listings (Razorpay, others to follow), UPI-led product expansion across categories beyond payments, and tighter RBI regulation forcing wallet-led companies to evolve into bank-backed infrastructure. The era of US-domiciled Indian fintech IPOs is closing; the Indian capital market era is opening."
      }
    ],
  },
  {
    slug: "network-effects-moats",
    title: "The Moat That Compounds",
    eyebrow: "When every new user makes the product harder to leave",
    intro: "The strongest moats aren't features — they're populations. The companies in this collection are defended not by what they built but by who already uses it. Google Maps gets more accurate every time someone drives with it open. Figma becomes harder to leave with every file and teammate added to a workspace. Spotify's playlists and social layer turn a music catalog into a network. TikTok's algorithm sharpens with every swipe, and WhatsApp is impossible to abandon until your entire contact list does. A competitor can clone the interface, but they can't clone the network — and that's the point. These are the deep dives on the moats that compound with every new user.",
    metaTitle: "Network Effects — Case Studies on Self-Reinforcing Moats",
    metaDescription: "Long-form case studies on companies defended by network effects: Google Maps, Figma, Spotify, TikTok, and WhatsApp. How usage itself became the moat.",
    keywords: [
      "network effects case studies",
      "Google Maps data moat",
      "Figma network effect",
      "WhatsApp growth",
      "competitive moat strategy",
      "data network effects"
    ],
    accentColor: "#22D3EE",
    caseStudyIds: [
      "cs-26",
      "cs-6",
      "cs-5",
      "cs-17",
      "cs-49"
    ],
    publishedAt: "2026-07-17",
    faqs: [
      {
        question: "What is a network effect?",
        answer: "A network effect exists when each additional user makes the product more valuable to every other user. WhatsApp is more useful the more of your contacts are on it; Google Maps gets more accurate the more people use it. Unlike a feature, a network effect can't be copied — a competitor would have to replicate not just the product but the entire population already using it."
      },
      {
        question: "How is a data network effect different from a social one?",
        answer: "A social network effect comes from people connecting to other people, like WhatsApp's contact graph. A data network effect comes from usage generating data that improves the product for everyone — Google Maps gets better traffic predictions as more drivers contribute location data. TikTok blends both: more users mean more content and more signal to train its recommendation algorithm."
      },
      {
        question: "Why are network-effect moats so durable?",
        answer: "Because the cost of switching isn't individual, it's collective. You can't leave WhatsApp until your friends do; a design team can't leave Figma until everyone's files and workflows move. The product's value is locked inside the network, so a competitor with a better feature still loses — they can match the software but not the population of people already there."
      },
      {
        question: "Can a startup build a network-effect moat from scratch?",
        answer: "Yes, but it has to survive the cold-start problem first — the period when the network is too small to be valuable. Figma seeded multiplayer collaboration among teams; Spotify built playlists and social sharing on top of catalog. The key is delivering enough standalone value early that users stay until the network grows large enough to defend itself."
      }
    ],
  },
  {
    slug: "product-design",
    title: "Design as a Moat",
    eyebrow: "When product design is the competitive advantage",
    intro: "Most companies treat design as decoration. The companies in this collection treated it as product strategy — building moats that competitors couldn't replicate even with bigger budgets. From Cred's exclusivity-as-design to Figma's browser-first bet, Headspace's approachable meditation interface to Monzo's hot coral card, these are the deep dives where design itself was the wedge.",
    metaTitle: "Product Design Case Studies — When Design Is the Strategy",
    metaDescription: "Long-form case studies on companies where design was the competitive moat: Figma, Cred, Headspace, Monzo, Superhuman. Free, in-depth analysis.",
    keywords: [
      "product design case studies",
      "design as moat",
      "Figma case study",
      "Cred design strategy",
      "Headspace design",
      "Monzo branding"
    ],
    accentColor: "#50C878",
    caseStudyIds: [
      "cs-6",
      "cs-51",
      "cs-33",
      "cs-34",
      "cs-35",
      "cs-58"
    ],
    faqs: [
      {
        question: "Can product design be a real competitive moat?",
        answer: "Yes, in two specific ways. First, when design solves a problem the category has accepted as unsolvable — Figma's real-time multiplayer in design tools, Linear's keyboard-driven UI for issue trackers. Second, when design becomes brand asset — Cred's exclusivity-as-design, Monzo's hot coral card. In both cases, design isn't decoration; it's the strategic difference competitors can't replicate without rebuilding from scratch."
      },
      {
        question: "Why is design Figma's moat against Adobe?",
        answer: "Adobe built XD as a Figma clone with more features. Figma still won because the moat wasn't features — it was the browser-first multiplayer architecture and the ecosystem of plugins + community files. Replacing Figma at a company isn't a tool switch; it's a multi-month migration of files, workflows, and team habits. The moat is switching cost, not feature count."
      },
      {
        question: "How does Cred use design as a moat in fintech?",
        answer: "Cred treats design as the entire product layer that competitors can't replicate without 5 years of brand investment. Rahul Dravid in traffic ads, ex-Apple designers, motion-first interactions, exclusive premium framing. The 750+ credit score gate and the rejection messages are design choices that became viral marketing. The moat is brand-as-design, not UI-as-design."
      }
    ],
  },
  {
    slug: "spectacular-flameouts",
    title: "Hype Meets Reality",
    eyebrow: "The crashes that came with the loudest launches",
    intro: "A loud launch is a loan against future performance — and these companies couldn't pay it back. This collection studies the flameouts that arrived with maximum hype and minimum staying power. Quibi torched $1.75B on a short-video problem nobody had and folded in six months. WeWork's $47B story unraveled into an $8B reckoning the moment the world looked closely. Clubhouse mistook a lockdown spike for a permanent behavior. Facebook Home turned a feature into a prison users rejected. And Theranos stands apart as the line where optimistic hype curdled into outright fraud. The common thread: attention and capital outran product-market fit, and reality always collects. These are the deep dives on the crashes the world watched in real time.",
    metaTitle: "Spectacular Flameouts — Case Studies on High-Profile Failures",
    metaDescription: "Long-form case studies on the companies that flamed out under their own hype: Quibi, WeWork, Theranos, Clubhouse, and Facebook Home.",
    keywords: [
      "startup failure case studies",
      "Quibi shutdown",
      "WeWork collapse",
      "Theranos fraud",
      "Clubhouse decline",
      "overhyped product failures"
    ],
    accentColor: "#F87171",
    caseStudyIds: [
      "cs-40",
      "cs-39",
      "cs-43",
      "cs-19",
      "cs-42"
    ],
    publishedAt: "2026-07-31",
    faqs: [
      {
        question: "What do these flameouts have in common?",
        answer: "Hype outran the product. Each company raised enormous money or attention on a story before proving anyone actually wanted the thing. Quibi spent $1.75B on a problem viewers didn't have; Clubhouse mistook a lockdown spike for permanent demand. The pattern is funding or fame arriving before product-market fit — and the bigger the launch, the harder the reckoning when reality catches up."
      },
      {
        question: "Why did Quibi fail so fast?",
        answer: "Quibi bet $1.75B that people wanted premium, short-form, mobile-only video — and launched into a pandemic when everyone was home on big screens. But the deeper flaw was assuming a problem existed: people already had YouTube and TikTok for short video and Netflix for premium content. Quibi had a massive budget and no clear reason for users to switch. It shut down in six months."
      },
      {
        question: "Is Theranos a failure or a fraud?",
        answer: "It's both, and that's the distinction worth drawing. Most flameouts in this collection are honest bets that didn't pan out — the founders believed the story. Theranos crossed into criminal fraud: the technology never worked and leadership knew it while telling investors and patients otherwise. It's the cautionary extreme of what happens when hype isn't just optimistic but deliberately false."
      },
      {
        question: "Why do products with huge launches still flame out?",
        answer: "A big launch buys attention, not retention. Clubhouse and Facebook Home both arrived to enormous buzz, then discovered that novelty fades fast when the underlying value is thin. A loud launch actually raises the risk: it sets expectations the product can't sustain, and it pulls in users who churn the moment the hype cools, leaving a metrics cliff in plain view."
      }
    ],
  },
  {
    slug: "super-app-failures",
    title: "When Super-Apps Break",
    eyebrow: "The bundle-everything thesis, autopsied",
    intro: "WeChat made super-apps look easy in China; every other market has discovered they aren't. Indian super-app bets — Paytm, Cult.fit, the broader Tata Neu story — each broke for the same structural reason: adjacent verticals have different unit economics, and bundling them creates more management complexity than customer value. These are the deep dives.",
    metaTitle: "Super-App Failures — Case Studies on the Bundle Trap",
    metaDescription: "Why super-apps break outside China: long-form case studies on Paytm, Cult.fit, BYJU'S, and other multi-vertical bets that nearly collapsed.",
    keywords: [
      "super app failures",
      "Paytm super app strategy",
      "Cult.fit wellness app",
      "BYJU'S downfall",
      "super app India",
      "multi-vertical strategy"
    ],
    accentColor: "#FF6B35",
    caseStudyIds: [
      "cs-55",
      "cs-59",
      "cs-54",
      "cs-39"
    ],
    faqs: [
      {
        question: "Why do super-apps fail outside China?",
        answer: "Three structural reasons. First, adjacent verticals have different unit economics — group fitness margins don't transfer to meal delivery. Second, customer trust doesn't bundle — winning payments doesn't pre-qualify you for lending. Third, management complexity compounds — each vertical needs its own product, marketing, and operations attention, diluting the focus that made any vertical work in the first place."
      },
      {
        question: "Why did Paytm's super-app strategy fail?",
        answer: "Paytm tried to be India's WeChat — bundling payments, e-commerce (Paytm Mall), gaming, banking, brokerage, insurance, lending. The strategy failed because payments users in India didn't have the social-graph lock-in that made WeChat's bundle work in China. Each vertical had different unit economics; combined, they produced bigger losses, not synergy."
      },
      {
        question: "Did BYJU'S fail because of acquisitions?",
        answer: "The 12+ acquisitions for $2.5B+ were the symptom, not the cause. The root cause was treating acquisitions as a growth lever instead of building integrated product. None of the acquired companies (WhiteHat Jr, Aakash, Great Learning) integrated into a coherent edtech offering — they remained loosely connected entities with their own unit economics that never compounded."
      },
      {
        question: "Are super-apps still a viable strategy in India?",
        answer: "Mostly no, with one exception. Pure consumer super-apps (one app for everything) have failed repeatedly in India. The only viable variant is when one vertical produces such high engagement that adjacent verticals get a real distribution edge — like PhonePe layering financial products onto a UPI base. Even then, the core has to be dominant, not just present."
      }
    ],
  },
  {
    slug: "viral-growth-loops",
    title: "Built-In Virality",
    eyebrow: "When the product grows itself",
    intro: "The most efficient growth never shows up as a line item. The companies in this collection built the act of acquisition directly into the act of using the product — so every user, just by using it, recruited the next. Dropbox handed out free storage for invites and grew signups 3900%. Hotmail stapled a one-line ad to the bottom of every email its users sent. PayPal paid $20 a head to prime a network that eventually grew itself. LinkedIn turned profile completeness into a nudge that pulled your contacts in, and Twitter cracked retention by suggesting who to follow on day one. These aren't gimmicks bolted on after launch — they're loops engineered into the core experience. These are the deep dives on products that grew themselves.",
    metaTitle: "Viral Growth Loops — Case Studies on Self-Propelling Products",
    metaDescription: "Long-form case studies on engineered virality: Dropbox's referral loop, Hotmail's email signature, PayPal's $20 referral, LinkedIn, and Twitter's retention fix.",
    keywords: [
      "viral growth loops",
      "Dropbox referral program",
      "Hotmail viral hack",
      "PayPal referral strategy",
      "growth hacking case studies",
      "product-led virality"
    ],
    accentColor: "#F472B6",
    caseStudyIds: [
      "cs-11",
      "cs-12",
      "cs-20",
      "cs-14",
      "cs-13"
    ],
    publishedAt: "2026-06-26",
    faqs: [
      {
        question: "What is a viral growth loop?",
        answer: "It's a mechanism where using the product naturally exposes it to new users, who then become users themselves and repeat the cycle. Dropbox gave you free storage for inviting friends, and the friends did the same. Hotmail appended 'Get your free email' to every message a user sent. The loop is built into the core action, so growth compounds without proportional ad spend."
      },
      {
        question: "Why was Dropbox's referral loop so effective?",
        answer: "Dropbox rewarded both sides with the one thing users wanted most — more storage — at near-zero marginal cost to Dropbox. Referrals grew signups by 3900% because the incentive was perfectly aligned with the product's value, and the act of sharing a folder was already part of how people used it. The growth lever and the product were the same thing."
      },
      {
        question: "Can you engineer virality, or is it luck?",
        answer: "You can engineer the loop, but it only fires if the underlying product is worth sharing. Hotmail's signature trick, PayPal's $20 referral, and LinkedIn's profile-completeness nudge all worked because the products delivered real value first. Virality is an amplifier — it multiplies a product people already want, and multiplies nothing if they don't."
      },
      {
        question: "What's the difference between virality and paid growth?",
        answer: "Paid growth costs more as you scale; viral growth gets cheaper per user because existing users do the acquiring. PayPal famously paid $20 per referral early on — expensive, but it bought a self-sustaining network that eventually grew on its own. The goal of paid spend in a viral company is to prime the loop, then let the loop take over."
      }
    ],
  },
];

export const isTopicPublished = (t: Topic, now: Date = new Date()): boolean =>
  !t.publishedAt || new Date(t.publishedAt) <= now;

export const publishedTopics = (now: Date = new Date()): Topic[] =>
  topics.filter((t) => isTopicPublished(t, now));

export const getTopicBySlug = (slug: string): Topic | undefined => {
  const t = topics.find((x) => x.slug === slug);
  return t && isTopicPublished(t) ? t : undefined;
};
