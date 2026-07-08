export type DraftQuestion = {
  id: number;
  text: string;
  options: {
    text: string;
    impact: { vision?: number; execution?: number; chaos?: number; defense?: number; flair?: number };
  }[];
};

export const DRAFT_QUESTIONS: DraftQuestion[] = [
  {
    id: 1,
    text: "A massive bug is found 10 minutes before the biggest launch of the year. What do you do?",
    options: [
      { text: "Fix it myself instantly on production. No time for PRs.", impact: { execution: +10, chaos: +15, defense: -5 } },
      { text: "Delay the launch. We do not ship broken software.", impact: { defense: +15, chaos: -10, flair: -5 } },
      { text: "Launch anyway and write a brilliant tweet making fun of the bug.", impact: { flair: +15, chaos: +10, execution: -5 } },
      { text: "Quickly delegate the fix and oversee the hotfix deployment calmly.", impact: { vision: +10, execution: +10, defense: +5 } }
    ]
  },
  {
    id: 2,
    text: "What is your primary motivation for building?",
    options: [
      { text: "Hitting the revenue target and crushing competitors.", impact: { execution: +15, defense: +5, flair: -5 } },
      { text: "Building an elegant, perfectly architected system.", impact: { vision: +15, defense: +10, chaos: -10 } },
      { text: "Having fun, experimenting, and hacking cool things together.", impact: { flair: +15, chaos: +10, defense: -10 } },
      { text: "Empowering the rest of my team to succeed.", impact: { defense: +15, vision: +5, flair: -5 } }
    ]
  },
  {
    id: 3,
    text: "How do you handle internal processes like Jira and daily standups?",
    options: [
      { text: "I enforce them strictly. Process prevents failure.", impact: { defense: +15, chaos: -15 } },
      { text: "I ignore them completely. Let me build in peace.", impact: { flair: +10, chaos: +15, defense: -15 } },
      { text: "I tolerate them, but I do my real work in the shadows.", impact: { vision: +10, chaos: +5 } },
      { text: "I optimized them so we spend 50% less time on them.", impact: { execution: +15, vision: +10 } }
    ]
  },
  {
    id: 4,
    text: "When you present your roadmap or pitch deck...",
    options: [
      { text: "It's a cinematic masterpiece with custom animations.", impact: { flair: +15, chaos: +5 } },
      { text: "It's just a raw spreadsheet of metrics and growth curves.", impact: { execution: +15, flair: -10 } },
      { text: "It's a deep, 10-page strategic memo.", impact: { vision: +15, defense: +5 } },
      { text: "I don't pitch. I just show the working prototype.", impact: { execution: +10, defense: +10 } }
    ]
  },
  {
    id: 5,
    text: "Your competitor just launched a copycat feature. Your reaction?",
    options: [
      { text: "Start a public Twitter war and call them out.", impact: { chaos: +15, flair: +10 } },
      { text: "Ignore them. We execute faster and better anyway.", impact: { execution: +15, defense: +5 } },
      { text: "Pivot slightly to a space they can't easily follow.", impact: { vision: +15, chaos: +5 } },
      { text: "Lock down our IP and aggressively protect our current clients.", impact: { defense: +15, chaos: -5 } }
    ]
  },
  { id: 6, text: "A top engineer wants to rewrite the entire codebase in Rust. You say:", options: [ { text: "Absolutely not. Ship features.", impact: { execution: +15, defense: +5 } }, { text: "Let's review the architectural tradeoffs.", impact: { vision: +15, defense: +10 } }, { text: "Yes! Sounds fun and blazingly fast.", impact: { chaos: +15, flair: +10 } }, { text: "Only if they can prove it improves reliability.", impact: { defense: +15, vision: +5 } } ] },
  { id: 7, text: "It's 2 AM on a Saturday and a minor server alert goes off.", options: [ { text: "I'm already online fixing it.", impact: { execution: +10, defense: +10 } }, { text: "Ignore it till Monday. Not critical.", impact: { chaos: +10, flair: +5 } }, { text: "I wrote an automated script that already resolved it.", impact: { vision: +15, defense: +15 } }, { text: "I wake up the on-call engineer.", impact: { execution: +5, defense: +5 } } ] },
  { id: 8, text: "How do you view technical debt?", options: [ { text: "A necessary evil to hit growth targets.", impact: { execution: +15, chaos: +5 } }, { text: "An existential threat that must be paid down immediately.", impact: { defense: +20, vision: +5 } }, { text: "What technical debt? I just ship new repos.", impact: { chaos: +20, flair: +10 } }, { text: "A strategic lever to be managed over time.", impact: { vision: +15, defense: +5 } } ] },
  { id: 9, text: "A key enterprise client demands a custom feature to close a $1M deal.", options: [ { text: "Build it immediately. We need the revenue.", impact: { execution: +20, chaos: +10 } }, { text: "Refuse. It breaks our product vision.", impact: { vision: +20, defense: +5 } }, { text: "Find a workaround using our existing API.", impact: { vision: +10, flair: +10 } }, { text: "Build it, but abstract it so others can use it.", impact: { vision: +15, defense: +10 } } ] },
  { id: 10, text: "Your team misses a major deadline.", options: [ { text: "I take full responsibility and shield the team.", impact: { defense: +20, vision: +5 } }, { text: "I fire the underperformers.", impact: { execution: +20, chaos: +10 } }, { text: "I cancel the project and start something new.", impact: { chaos: +20, flair: +10 } }, { text: "I calmly restructure the sprint to get us back on track.", impact: { vision: +10, defense: +10 } } ] },
  { id: 11, text: "What's your stance on remote work?", options: [ { text: "Everyone in the office, 5 days a week. Maximum intensity.", impact: { execution: +15, defense: +10 } }, { text: "Fully async, written memos only.", impact: { vision: +15, defense: +5 } }, { text: "I don't care where you are as long as you ship.", impact: { execution: +10, flair: +10 } }, { text: "Work from the beach, let's vibe.", impact: { chaos: +15, flair: +20 } } ] },
  { id: 12, text: "How do you celebrate a successful launch?", options: [ { text: "I don't. Onto the next milestone.", impact: { execution: +20, defense: +5 } }, { text: "Massive party for the team.", impact: { flair: +15, chaos: +5 } }, { text: "Quiet reflection on the metrics.", impact: { vision: +15, defense: +5 } }, { text: "I take a nap.", impact: { defense: +15 } } ] },
  { id: 13, text: "A VC offers you $10M at a massive valuation, but wants board control.", options: [ { text: "Take the money, we need to scale fast.", impact: { execution: +15, chaos: +10 } }, { text: "Reject it. I control the vision.", impact: { vision: +20, defense: +10 } }, { text: "Negotiate them down to a minority stake.", impact: { vision: +10, execution: +10 } }, { text: "Take it and use the money to throw a massive PR stunt.", impact: { flair: +20, chaos: +15 } } ] },
  { id: 14, text: "How do you handle customer support tickets?", options: [ { text: "I read every single one to understand the user.", impact: { vision: +15, defense: +10 } }, { text: "I automated it with AI.", impact: { execution: +15, vision: +10 } }, { text: "I ignore them unless they are Enterprise tier.", impact: { execution: +10, chaos: +10 } }, { text: "I randomly reply with memes.", impact: { flair: +20, chaos: +15 } } ] },
  { id: 15, text: "The product feels bloated and slow.", options: [ { text: "Freeze all new features. We are doing a performance month.", impact: { defense: +20, vision: +5 } }, { text: "Just throw more server compute at it.", impact: { execution: +15, chaos: +10 } }, { text: "Rewrite the frontend in a new framework.", impact: { chaos: +15, flair: +10 } }, { text: "Quietly optimize the database queries myself.", impact: { vision: +10, defense: +15 } } ] },
  { id: 16, text: "Your co-founder wants to pivot the company.", options: [ { text: "If the data supports it, we pivot today.", impact: { execution: +15, vision: +10 } }, { text: "Absolutely not, we must stick to the mission.", impact: { defense: +20, vision: +5 } }, { text: "I'm already building the MVP for the pivot.", impact: { chaos: +15, flair: +10 } }, { text: "Let's spend a month researching the market first.", impact: { vision: +15, defense: +5 } } ] },
  { id: 17, text: "What is your favorite metric?", options: [ { text: "Monthly Recurring Revenue (MRR).", impact: { execution: +20 } }, { text: "Daily Active Users (DAU).", impact: { flair: +10, vision: +5 } }, { text: "Server Uptime (99.99%).", impact: { defense: +20 } }, { text: "Lines of code deleted.", impact: { vision: +15, chaos: +5 } } ] },
  { id: 18, text: "A junior dev breaks production.", options: [ { text: "Fire them. We need A-players only.", impact: { execution: +15, chaos: +10 } }, { text: "Fix it for them, then explain what went wrong.", impact: { defense: +15, vision: +5 } }, { text: "Laugh, fix it, and tell them a story of when I did the same.", impact: { flair: +15, defense: +5 } }, { text: "Implement strict CI/CD so it never happens again.", impact: { vision: +15, defense: +15 } } ] },
  { id: 19, text: "How do you design a new feature?", options: [ { text: "I open Figma and pixel-push until it's perfect.", impact: { flair: +15, vision: +10 } }, { text: "I write a 6-page PRD.", impact: { vision: +15, defense: +10 } }, { text: "I just start coding and see where it goes.", impact: { chaos: +20, flair: +10 } }, { text: "I copy exactly what the competitor did, but make it faster.", impact: { execution: +20, defense: +5 } } ] },
  { id: 20, text: "What's your preferred tech stack?", options: [ { text: "Whatever lets me ship the fastest (Next.js/Supabase).", impact: { execution: +20, flair: +5 } }, { text: "Rock solid, enterprise-grade (Java/C#).", impact: { defense: +20, vision: +5 } }, { text: "The absolute bleeding edge beta frameworks.", impact: { chaos: +20, flair: +15 } }, { text: "Custom built, from-scratch architecture.", impact: { vision: +20, defense: +5 } } ] },
  { id: 21, text: "You have to cut costs by 20%.", options: [ { text: "Layoffs. Fast and deep.", impact: { execution: +20, chaos: +10 } }, { text: "Cut all marketing spend and rely on SEO.", impact: { vision: +15, defense: +10 } }, { text: "Cancel the office lease and go fully remote.", impact: { defense: +15, flair: +5 } }, { text: "Sell my own equity to keep the team intact.", impact: { defense: +20, vision: +10 } } ] },
  { id: 22, text: "A user leaves a brutal 1-star review on G2.", options: [ { text: "Reply aggressively defending the product.", impact: { chaos: +20, flair: +10 } }, { text: "Email them directly to solve the problem.", impact: { execution: +15, defense: +5 } }, { text: "Log it in Jira and prioritize it for next quarter.", impact: { defense: +15, vision: +5 } }, { text: "Ignore it. You can't please everyone.", impact: { vision: +10, flair: +5 } } ] },
  { id: 23, text: "How do you run meetings?", options: [ { text: "I don't. Meetings are a waste of time.", impact: { execution: +20, chaos: +5 } }, { text: "Strict agenda, 15 minutes, standing up.", impact: { defense: +15, execution: +10 } }, { text: "Whiteboarding sessions that last 3 hours.", impact: { vision: +20, flair: +10 } }, { text: "I let the team run them while I code.", impact: { chaos: +10, defense: +5 } } ] },
  { id: 24, text: "What's your strategy for marketing?", options: [ { text: "Cold calling and aggressive outbound.", impact: { execution: +20, defense: +5 } }, { text: "Viral stunts and Twitter threads.", impact: { flair: +20, chaos: +15 } }, { text: "Deep, high-quality content and SEO.", impact: { vision: +20, defense: +10 } }, { text: "Product-Led Growth. The product sells itself.", impact: { vision: +15, execution: +10 } } ] },
  { id: 25, text: "You discover a massive security vulnerability.", options: [ { text: "Shut down the servers immediately.", impact: { defense: +20, chaos: +10 } }, { text: "Quietly patch it overnight and tell no one.", impact: { execution: +15, chaos: +5 } }, { text: "Write a transparent post-mortem blog post.", impact: { vision: +15, defense: +10 } }, { text: "Hire a hacker to test the rest of the system.", impact: { flair: +15, chaos: +10 } } ] },
  { id: 26, text: "What is your superpower?", options: [ { text: "Seeing exactly what the market will want in 3 years.", impact: { vision: +25 } }, { text: "Shipping twice as fast as any other engineer.", impact: { execution: +25 } }, { text: "Making people fall in love with our brand.", impact: { flair: +25 } }, { text: "Ensuring the system absolutely never fails.", impact: { defense: +25 } } ] },
  { id: 27, text: "Your co-founder quits abruptly.", options: [ { text: "Good. Now I have full control.", impact: { chaos: +20, execution: +10 } }, { text: "Panic, but quickly hire a replacement.", impact: { execution: +15, defense: +5 } }, { text: "Absorb their role and work 100-hour weeks.", impact: { defense: +20, execution: +5 } }, { text: "Restructure the company to run without them.", impact: { vision: +20, defense: +10 } } ] },
  { id: 28, text: "How do you view your competitors?", options: [ { text: "I want to destroy them entirely.", impact: { execution: +20, chaos: +15 } }, { text: "I don't even look at them. We run our own race.", impact: { vision: +20, defense: +5 } }, { text: "I regularly steal their best features.", impact: { execution: +15, flair: +10 } }, { text: "I am friendly with them to explore partnerships.", impact: { defense: +15, vision: +10 } } ] },
  { id: 29, text: "What's the best way to scale a team?", options: [ { text: "Hire senior 10x engineers only.", impact: { execution: +15, defense: +10 } }, { text: "Hire hungry juniors and train them perfectly.", impact: { vision: +20, defense: +15 } }, { text: "Don't hire. Use AI and automation.", impact: { vision: +15, execution: +15 } }, { text: "Hire massive sales teams to drive revenue.", impact: { execution: +20, chaos: +10 } } ] },
  { id: 30, text: "If your startup fails, what will you do?", options: [ { text: "Start another one the very next day.", impact: { execution: +20, chaos: +10 } }, { text: "Retreat to the mountains to think for a year.", impact: { vision: +20, flair: +10 } }, { text: "Get a high-paying job at FAANG.", impact: { defense: +20, execution: +5 } }, { text: "Become a VC.", impact: { flair: +20, vision: +5 } } ] }
];

export const INITIAL_STATS = { vision: 50, execution: 50, chaos: 50, defense: 50, flair: 50 };
