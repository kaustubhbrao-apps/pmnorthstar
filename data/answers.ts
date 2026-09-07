// ⚠️  AUTO-GENERATED — DO NOT EDIT BY HAND.
// Source of truth is content/. Run `npx tsx scripts/sync-content.ts`
// to regenerate after editing markdown files.

export interface AnswerFAQ {
  question: string;
  answer: string;
}

export interface Answer {
  slug: string;
  // The literal question, phrased the way a person asks it.
  question: string;
  // 40-60 words, self-contained. This is the unit that gets quoted, so it
  // must make sense with zero surrounding context.
  shortAnswer: string;
  // Pre-rendered at sync time from the markdown body.
  bodyHtml: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  accentColor: string;
  // Case studies that demonstrate the concept in practice. Every answer
  // links out to at least two, which is how these pages pass authority
  // down into the corpus.
  relatedCaseStudyIds: string[];
  updatedAt: string;
  // ISO date. No publishedAt = always live; a future date hides it in
  // production until then.
  publishedAt?: string;
  faqs?: AnswerFAQ[];
}

export const answers: Answer[] = [
  {
    slug: "aarrr-pirate-metrics",
    question: "What are AARRR (pirate) metrics?",
    shortAnswer: "AARRR is a five-stage funnel framework — Acquisition, Activation, Retention, Referral, Revenue — coined by Dave McClure. It gives a startup one metric per stage so problems can be located rather than guessed at. The order matters: fixing acquisition while retention leaks is the classic misuse.",
    bodyHtml: "<h2>The five stages</h2>\n<p><strong>Acquisition</strong> — how people find you. Measured by traffic and signups by channel, not in aggregate; a blended number hides that one channel works and four don&#39;t.</p>\n<p><strong>Activation</strong> — whether they reach first value. The most commonly skipped stage and usually the most broken.</p>\n<p><strong>Retention</strong> — whether they come back. The stage that determines whether the other four are worth anything.</p>\n<p><strong>Referral</strong> — whether they bring others. Dropbox&#39;s two-sided storage referral and PayPal&#39;s $20 signup bonus are the canonical examples, and both worked because the product was already retaining; a referral programme on a leaky product just distributes disappointment faster.</p>\n<p><strong>Revenue</strong> — whether they pay. Deliberately last, which is the framework&#39;s actual argument.</p>\n<h2>The order is the insight</h2>\n<p>Almost every team that &quot;uses AARRR&quot; reads it as a list and works on the first item, because acquisition is the stage you can buy. Uber&#39;s city-by-city playbook is often cited as blitzscaled acquisition, but the reason it worked is that the underlying product retained — a rider who got a car in four minutes came back without persuasion. Blitzscaling a product that doesn&#39;t retain, as Dunzo eventually demonstrated, converts funding into churn at speed.</p>\n<h2>Where it breaks down</h2>\n<p>AARRR assumes a single linear funnel. Marketplaces have two — supply and demand acquire, activate and retain differently, and a marketplace with great demand-side retention and broken supply looks healthy in a blended AARRR dashboard right up until it isn&#39;t.</p>\n<p>Use it as a diagnostic that tells you <em>where</em> to look, then throw it away and study the specific stage properly. It is a map, not a strategy.</p>\n",
    category: "Metrics",
    metaTitle: "AARRR Pirate Metrics Explained — The Five Stages, In Order",
    metaDescription: "Acquisition, Activation, Retention, Referral, Revenue. What each stage measures, why the order matters more than the list, and how Dropbox and PayPal used the referral stage.",
    keywords: [
      "AARRR metrics",
      "pirate metrics",
      "AARRR framework",
      "startup metrics framework"
    ],
    accentColor: "#EA580C",
    relatedCaseStudyIds: [
      "cs-11",
      "cs-20",
      "cs-16"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "Why is it called pirate metrics?",
        answer: "Because the initials spell AARRR. Dave McClure introduced the framework at a 2007 startup conference and the name stuck, which is most of the reason people still remember the five stages a decade and a half later."
      },
      {
        question: "Is AARRR still relevant?",
        answer: "As a diagnostic checklist, yes. As a growth strategy, it has a known weakness: it treats the funnel as linear and one-directional, which fits a transactional product better than a network or marketplace where supply and demand have separate funnels."
      },
      {
        question: "What is the difference between AARRR and the RARRA model?",
        answer: "RARRA reorders the same stages to put Retention first, on the argument that acquiring users into a leaky product wastes money. It is less a different framework than a corrective to how AARRR is usually misread."
      }
    ],
  },
  {
    slug: "activation-vs-retention",
    question: "What is the difference between activation and retention?",
    shortAnswer: "Activation is a user reaching first value — the moment your product proves it works for them. Retention is them coming back after that. Activation is a one-time event you can design, retention is an ongoing verdict on whether the value holds. Fixing retention with an activation problem underneath never works.",
    bodyHtml: "<h2>The distinction that matters</h2>\n<p>A user who signs up, pokes around and leaves never activated. A user who uploaded a file, shared it with a colleague, saw the colleague open it — and then left three weeks later — churned. These are completely different problems with completely different fixes, and blended retention numbers hide which one you have.</p>\n<p>Twitter&#39;s early growth was stuck on exactly this. New users arrived to an empty feed, saw nothing worth returning for, and left. No retention feature would have helped, because the product had never worked for them once. Suggested Users fixed the activation event — a populated feed on day one — and the retention curve moved as a consequence.</p>\n<h2>Activation is designed, retention is earned</h2>\n<p>Activation is largely an onboarding and product-design problem. You know what the valuable action is; the work is removing everything between the user and it. Dropbox&#39;s referral loop is usually filed under growth, but its quiet achievement was activation: installing the desktop client and putting a file in the folder, which is the moment Dropbox becomes obvious.</p>\n<p>Retention is harder because it isn&#39;t a moment you can engineer. It&#39;s the accumulated verdict on whether the product keeps being worth opening. Superhuman&#39;s approach — refusing to onboard users at scale, running a personal setup session for each one — looks absurdly unscalable until you realise they were treating activation as the thing worth spending a founder&#39;s hour on.</p>\n<h2>How to tell which one you have</h2>\n<p>Split your cohort at the activation event and plot both retention curves. If activated users retain well and unactivated users don&#39;t, you have an activation problem, and your job is onboarding. If activated users also decay, you have a retention problem, and no amount of onboarding polish will save you — the product isn&#39;t delivering repeat value yet.</p>\n<p>Teams get this backwards constantly, shipping re-engagement emails to people who never understood the product in the first place.</p>\n",
    category: "Metrics",
    metaTitle: "Activation vs Retention — What's the Difference? (With Examples)",
    metaDescription: "Activation is first value; retention is repeat value. How to tell which one is actually broken, why fixing them in the wrong order wastes quarters, and what Dropbox and Superhuman did.",
    keywords: [
      "activation vs retention",
      "what is activation rate",
      "product activation metric",
      "retention metrics"
    ],
    accentColor: "#EA580C",
    relatedCaseStudyIds: [
      "cs-11",
      "cs-35",
      "cs-13"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "Which should you fix first, activation or retention?",
        answer: "Activation, almost always. Retention numbers are polluted by users who never reached first value — they were never really customers, so their churn tells you nothing about whether your product keeps people. Fix activation and your retention curve often improves without a single retention feature."
      },
      {
        question: "What is a good activation rate?",
        answer: "There is no universal benchmark, because activation is defined per product. The useful comparison is internal: the retention curve of activated users versus non-activated ones. If those two curves look the same, your activation event is defined wrong."
      },
      {
        question: "How do you define the activation moment?",
        answer: "Find the action that separates users who stay from users who leave. Look at cohorts that retained, identify what they did in week one that churned users did not, and test whether pushing new users toward that action improves their retention."
      }
    ],
  },
  {
    slug: "bottom-up-vs-top-down-sales",
    question: "What is the difference between bottom-up and top-down sales?",
    shortAnswer: "Bottom-up starts with individual users adopting a product and spreading it inside the company until a purchase becomes formality. Top-down starts with an executive buying for the organisation and rolling it out. Bottom-up needs a product one person can love; top-down needs a business case one executive can defend.",
    bodyHtml: "<h2>They demand different products</h2>\n<p>A bottom-up product must be immediately useful to one person with no permission, no configuration and no training. That constraint shapes everything — onboarding, pricing page, even the depth of the feature set, because complexity that requires explanation kills the motion.</p>\n<p>A top-down product must satisfy a buyer who will never use it daily: security posture, compliance, admin controls, reporting, integration with systems of record. Those requirements are invisible to individual users and decisive to procurement.</p>\n<p>Building for both simultaneously from day one usually produces something that does neither well.</p>\n<h2>Where each wins</h2>\n<p>Stripe is the reference bottom-up case. Developers integrated it because the documentation and API were better than the alternatives, and by the time anyone senior was asked to approve a payments provider, it was already processing transactions. The decision had been made by the people who&#39;d done the work.</p>\n<p>Jira arrived through the opposite door — an organisational decision about process, configured centrally, rolled out to teams. That&#39;s why its history is one of accumulating configurability: the buyer was the person who wanted it to model their process, not the person who used it every day.</p>\n<h2>The collision point</h2>\n<p>Bottom-up companies hit a wall around the enterprise boundary. Usage has spread, IT notices, and suddenly there&#39;s a security review, an SSO requirement and a procurement process the self-serve motion has no answer for.</p>\n<p>This isn&#39;t a failure of the model — it&#39;s the moment to add the top-down motion on top of the demand the product created. The companies that struggle are the ones that treat it as an interruption rather than a stage, and try to solve an enterprise buying process with a better pricing page.</p>\n",
    category: "Growth",
    metaTitle: "Bottom-Up vs Top-Down Sales — Which Motion Fits Your Product",
    metaDescription: "Two go-to-market motions, two entirely different products. What each requires, how they collide at the enterprise boundary, and why most companies eventually run both.",
    keywords: [
      "bottom up vs top down sales",
      "bottom up SaaS motion",
      "enterprise sales motion",
      "land and expand"
    ],
    accentColor: "#0F9D58",
    relatedCaseStudyIds: [
      "cs-27",
      "cs-50"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "Can you run both motions at once?",
        answer: "Yes, and most successful companies eventually do — self-serve for individuals and small teams, sales-assisted above a threshold. The difficulty is organisational: the two motions want different metrics, different pricing and different roadmap priorities, and the tension is permanent."
      },
      {
        question: "What is land and expand?",
        answer: "Landing a small initial footprint — one team, one use case — then growing usage and spend within the account over time. It's the commercial expression of a bottom-up motion, and it depends on the product creating pull from adjacent teams."
      },
      {
        question: "Which motion has better unit economics?",
        answer: "Bottom-up usually has lower customer acquisition cost but smaller initial contracts; top-down has higher CAC and larger contracts. Neither dominates — what matters is whether your contract value can support the acquisition cost of the motion you've chosen."
      }
    ],
  },
  {
    slug: "build-vs-buy-decision",
    question: "How do you make a build vs buy decision?",
    shortAnswer: "Build what differentiates you, buy what doesn't. The test isn't cost — it's whether customers would ever choose you because of this component. Teams get burned by underestimating the permanent maintenance cost of building, and by buying the one thing that was actually their edge.",
    bodyHtml: "<h2>The differentiation test</h2>\n<p>Ask whether a customer would ever pick you over a competitor because of this piece. Auth, billing, email delivery, error tracking — almost never. Your matching algorithm, your pricing engine, your core editing experience — possibly yes.</p>\n<p>Buying a commodity frees engineers for the parts that matter. Building a commodity spends your scarcest resource proving you can rebuild something that already exists.</p>\n<h2>When building the hard thing is the strategy</h2>\n<p>Figma&#39;s decision to render a design tool in the browser using WebGL was a build decision on the highest-difficulty setting. No vendor solution existed, and the browser wasn&#39;t obviously capable. It took years before the bet looked sane.</p>\n<p>It was correct because the component <em>was</em> the product. Browser-native collaborative design wasn&#39;t a feature of Figma; it was the entire reason Figma could exist against incumbents. Nobody outsources that.</p>\n<p>Vercel&#39;s business is the mirror image — it exists because deployment infrastructure is something most teams should buy rather than build, and it made buying dramatically easier than the DIY alternative.</p>\n<h2>The questions worth actually asking</h2>\n<p>How long until value, on each path? Buying is usually weeks, building is usually quarters, and the gap is often decisive on its own.</p>\n<p>What&#39;s the exit cost if you buy and the vendor disappoints you? Shallow integration is cheap to leave; a vendor woven through your data model is not.</p>\n<p>And who owns it in two years? Built components need a permanent owner. If you can&#39;t name the team that maintains this after the people who built it have moved on, you&#39;re accumulating orphaned infrastructure — the most expensive category there is.</p>\n",
    category: "Strategy",
    metaTitle: "Build vs Buy — A Practical Framework for the Decision",
    metaDescription: "Build what differentiates, buy what doesn't. How to weigh maintenance cost, switching risk and control, and what Figma's WebGL bet says about building the hard thing.",
    keywords: [
      "build vs buy",
      "build or buy decision",
      "build vs buy software",
      "vendor vs in-house"
    ],
    accentColor: "#F3123C",
    relatedCaseStudyIds: [
      "cs-figma-web-15",
      "cs-65"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "What costs do teams forget when they decide to build?",
        answer: "Maintenance, on-call, security patching, compliance, documentation, and the opportunity cost of the engineers who now own it forever. The build estimate usually covers version one only, which is the smallest part of the total cost."
      },
      {
        question: "What's the risk of buying?",
        answer: "Dependence. Pricing changes, roadmap divergence, acquisitions and shutdowns are all outside your control, and switching cost rises with integration depth. Buying is right for commodities precisely because commodities have alternatives."
      },
      {
        question: "Is buying and then replacing later a valid strategy?",
        answer: "Often the best one. Buy to reach the market and learn what you actually need, then build once the requirements are known and the component has proven to be differentiating. The failure is never revisiting the decision."
      }
    ],
  },
  {
    slug: "dau-mau-ratio-explained",
    question: "What is the DAU/MAU ratio and what is a good one?",
    shortAnswer: "DAU/MAU divides daily active users by monthly active users to estimate how many days a month the average user shows up. 20% is a common baseline, 50%+ is exceptional. It only means something for products people should use daily — applying it to a tax product or a job board produces nonsense.",
    bodyHtml: "<h2>What it actually estimates</h2>\n<p>If 200,000 people used your product yesterday and 1,000,000 used it in the last 30 days, your ratio is 20% — meaning the average monthly user shows up roughly six days a month. It&#39;s a rough proxy for habit.</p>\n<p>The reference points people quote: 20% is a reasonable consumer baseline, 50%+ puts you in the company of messaging and social products, and the very top of the market sits higher still. TikTok&#39;s early ratios were extraordinary precisely because the recommendation feed removed the need to have a reason to open the app.</p>\n<h2>Where the metric lies</h2>\n<p><strong>Products with legitimate low frequency.</strong> A hiring tool, a tax filer, a travel booking product — nobody should use these daily, and a 5% ratio is not a failure. Measuring them this way creates pressure to add engagement mechanics that make the product worse.</p>\n<p><strong>Averages hiding bimodality.</strong> A 20% ratio can mean everyone uses it six days a month, or that 20% use it every day and 80% never return. Those are completely different companies. Always look at the distribution.</p>\n<p><strong>Spikes driven by scarcity.</strong> Clubhouse posted remarkable engagement while invitations were scarce and the format was novel. Both were temporary conditions, and the ratio measured the moment rather than the habit — which is exactly the mistake the metric invites when it&#39;s read as a verdict rather than a signal.</p>\n<h2>How to use it well</h2>\n<p>Track it as a trend against your own history, segmented by cohort and platform. A ratio moving from 18% to 24% over two quarters tells you something real about whether recent work built habit. The absolute number compared to somebody else&#39;s absolute number usually tells you nothing at all.</p>\n",
    category: "Metrics",
    metaTitle: "DAU/MAU Ratio Explained — Benchmarks and When Not to Use It",
    metaDescription: "What DAU/MAU measures, what counts as a good ratio, why 20% and 50% are the reference points, and the products where the metric is actively misleading.",
    keywords: [
      "DAU MAU ratio",
      "what is a good DAU MAU ratio",
      "stickiness metric",
      "daily active users"
    ],
    accentColor: "#EA580C",
    relatedCaseStudyIds: [
      "cs-17",
      "cs-19"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "What counts as an 'active' user?",
        answer: "Whatever you define, which is the metric's weakness. An app that counts a push notification open as active will report a far better ratio than one requiring a meaningful action. Define it as the action that represents value, and never change the definition quietly."
      },
      {
        question: "Is a high DAU/MAU always good?",
        answer: "Not necessarily. It measures frequency, not value or satisfaction, and products that engineer compulsion can score extremely well while producing users who resent the habit. Read it next to retention and qualitative feedback, not alone."
      },
      {
        question: "What is a good ratio for B2B software?",
        answer: "It varies enormously by category. A team chat or ticketing tool used in daily workflow can exceed 50%; an analytics dashboard checked weekly might sit at 15% and be perfectly healthy. Compare against your category and your own trend, never against a universal benchmark."
      }
    ],
  },
  {
    slug: "freemium-vs-free-trial",
    question: "Freemium vs free trial — which should you choose?",
    shortAnswer: "A free trial gives full access for a limited time; freemium gives limited access forever. Trials suit products with fast, obvious value and a clear buying moment. Freemium suits products with network effects or slow-building value, and only works if the free tier costs you little to serve.",
    bodyHtml: "<h2>Choosing the model</h2>\n<p><strong>Free trial</strong> fits when value is obvious quickly and there&#39;s a natural moment of decision. The clock creates urgency, and full access means the evaluation is honest.</p>\n<p><strong>Freemium</strong> fits when value compounds slowly, when free users create value for paid ones, or when the product spreads by being used in public. Canva&#39;s free tier is a distribution engine — millions of people making things, sharing them, and pulling in others, with paid conversion arriving whenever a user&#39;s needs outgrow the limits.</p>\n<p>Spotify&#39;s free tier does something different again: it undercuts piracy. The strategic job of that tier was never conversion rate alone; it was making the legal option the easiest one, in a market where the alternative was free and illegal.</p>\n<h2>The cost question nobody asks early</h2>\n<p>Freemium&#39;s hidden bill is serving free users forever. If each one costs you storage, bandwidth, model inference or support, the free tier is a permanent operating expense that scales with your success. Products with near-zero marginal cost per free user can absorb it; products with real per-user costs frequently cannot, and discover this at scale.</p>\n<h2>Getting the limit right</h2>\n<p>The limit should hurt exactly when the user is getting real value, and not before. Too generous and nobody upgrades — you&#39;ve built a free product with a paid tier nobody needs. Too tight and users never experience enough to want more.</p>\n<p>The signal to watch: are free users hitting the limit <em>while succeeding</em>? That&#39;s a good limit. Are they hitting it during setup, before anything works? That&#39;s a limit that generates churn and resentment rather than revenue.</p>\n",
    category: "Growth",
    metaTitle: "Freemium vs Free Trial — How to Choose Your Model",
    metaDescription: "Trial versus freemium: which fits your product, what each costs to run, how to pick the limit that converts, and what Canva and Spotify got right.",
    keywords: [
      "freemium vs free trial",
      "freemium model",
      "free trial conversion",
      "SaaS pricing model"
    ],
    accentColor: "#0F9D58",
    relatedCaseStudyIds: [
      "cs-30",
      "cs-5"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "What conversion rate should you expect?",
        answer: "Free trials typically convert in the low double digits; freemium conversion is usually low single digits. The comparison is misleading on its own — freemium funnels are far larger at the top, so a 2% conversion can produce more customers than a 15% one."
      },
      {
        question: "Should a free trial require a credit card?",
        answer: "Requiring one raises conversion rate and lowers trial volume, because it filters for intent. Not requiring one fills the top of the funnel with people who may never have intended to buy. Which is better depends on whether your bottleneck is volume or sales capacity."
      },
      {
        question: "How do you choose what to limit in freemium?",
        answer: "Limit on a dimension that grows with the value received — seats, projects, storage, volume. Limiting a feature people need to understand the product at all just prevents them from ever seeing why it's worth paying for."
      }
    ],
  },
  {
    slug: "horizontal-vs-vertical-saas",
    question: "What is the difference between horizontal and vertical SaaS?",
    shortAnswer: "Horizontal SaaS solves one function across every industry — CRM, payroll, ticketing. Vertical SaaS solves many functions for one industry, like software for dental practices or construction firms. Horizontal has a larger market and fiercer competition; vertical has a smaller ceiling and far better retention.",
    bodyHtml: "<h2>The structural trade-off</h2>\n<p>Horizontal products have enormous addressable markets and correspondingly brutal competition, because everyone can see the same opportunity. Differentiation is hard and acquisition is expensive.</p>\n<p>Vertical products have a defined ceiling, but within it: less competition, a customer who feels understood, workflows the generalist can&#39;t match, and word of mouth that travels quickly through a small industry. Retention is typically far better, because switching means giving up domain-specific depth for something generic.</p>\n<h2>Depth is a moat, size is a ceiling</h2>\n<p>Retool built a business on the unglamorous internal-tooling layer — a horizontal problem approached with unusual depth, which is a third path. The insight was that the market for boring internal software was much larger than anyone was treating it as.</p>\n<p>Rippling&#39;s compound approach ran the other way: rather than perfecting one function, it built several integrated ones on a shared employee data model, arguing that the integration itself was the product. That bet only works with capital and execution depth most companies don&#39;t have, but it illustrates the real question — where does your advantage compound, across functions or across industries?</p>\n<h2>Choosing</h2>\n<p>Pick vertical if you have genuine domain knowledge, if the industry has specialised workflows generalists handle badly, and if you can reach buyers through a concentrated channel like a trade association or conference.</p>\n<p>Pick horizontal if the problem is genuinely universal, if you have a distribution advantage, and if you can survive competing against well-funded companies solving the same thing.</p>\n<p>The most common failure is a horizontal product with a vertical sales motion — selling one industry at a time on custom promises, accumulating industry-specific code in a general product, and ending up with neither depth nor breadth.</p>\n",
    category: "Strategy",
    metaTitle: "Horizontal vs Vertical SaaS — Trade-offs and Examples",
    metaDescription: "Horizontal SaaS goes wide across industries, vertical goes deep into one. Market size versus retention, the compound startup pattern, and which suits a small team.",
    keywords: [
      "horizontal vs vertical SaaS",
      "vertical SaaS",
      "compound startup",
      "SaaS go to market"
    ],
    accentColor: "#F3123C",
    relatedCaseStudyIds: [
      "cs-144",
      "cs-143"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "Which is better for a small startup?",
        answer: "Vertical is usually easier to start, because a narrow industry lets a small team out-specialise generalist incumbents and reach customers through a small number of channels. The trade-off is a hard ceiling that eventually forces expansion into adjacent verticals or functions."
      },
      {
        question: "What is a compound startup?",
        answer: "A company that deliberately builds several integrated products at once rather than sequencing them, betting that the integration between them is the differentiator. It contradicts conventional focus advice and demands unusual execution capacity."
      },
      {
        question: "Can a vertical SaaS company become horizontal?",
        answer: "It happens, usually by generalising a component that turned out to be valuable everywhere. It's a difficult transition because the original product's advantage was industry-specific depth, which is exactly what a horizontal product must shed."
      }
    ],
  },
  {
    slug: "how-many-users-for-user-research",
    question: "How many users do you need for user research?",
    shortAnswer: "Five to eight users per segment for qualitative usability work — that range surfaces most severe issues, and returns drop sharply after. Quantitative claims need hundreds. The mistake isn't sample size, it's using five interviews to justify a number instead of a direction.",
    bodyHtml: "<h2>The two questions are different</h2>\n<p><strong>Qualitative</strong> asks why and how — where people get stuck, what they misunderstand, what they were actually trying to do. Small samples work because obstacles are shared: if three of five people can&#39;t find the export button, the sixth won&#39;t change your mind.</p>\n<p><strong>Quantitative</strong> asks how many and how much. &quot;Does variant B convert better?&quot; needs enough traffic for the difference to be distinguishable from noise, which is usually thousands of sessions, not five.</p>\n<p>Most research arguments are really an unstated disagreement about which question is being asked.</p>\n<h2>Segment first, then count</h2>\n<p>Five per segment, not five total. If your product serves both a solo practitioner and an enterprise admin, five sessions split across both tells you little about either — you have two-and-a-half users per group, which is anecdote.</p>\n<p>Intercom&#39;s discovery practice reflects this: the job people were hiring the product for varied sharply between segments, so blending them would have averaged away the very distinction that mattered.</p>\n<h2>Recruit for the situation, not the demographic</h2>\n<p>The most common recruiting error is screening on job title. What determines behaviour is whether someone is currently in the situation your product addresses — someone who tried to solve this problem in the last month will tell you more than someone with the right title who has never had the problem.</p>\n<p>Headspace&#39;s early design work leaned heavily on a specific struggle: people who wanted to meditate and found existing tools intimidating. That&#39;s a situation, not a demographic, and it&#39;s a far better recruiting screen.</p>\n<h2>Small samples, honest claims</h2>\n<p>Five interviews justify &quot;we saw people struggle here, let&#39;s fix it.&quot; They don&#39;t justify &quot;62% of users prefer this.&quot; Use the evidence at the strength you gathered it, and the sample-size argument mostly disappears.</p>\n",
    category: "Discovery",
    metaTitle: "How Many Users Do You Need for User Research? (5 Is Usually Enough)",
    metaDescription: "Why five users find most usability problems, when five is badly insufficient, and how to tell whether your question is qualitative or quantitative before you recruit.",
    keywords: [
      "how many users for usability testing",
      "user research sample size",
      "5 users usability",
      "qualitative vs quantitative research"
    ],
    accentColor: "#9B8FFF",
    relatedCaseStudyIds: [
      "cs-46",
      "cs-33"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "Where does the five-user rule come from?",
        answer: "From Jakob Nielsen and Tom Landauer's work in the early 1990s, modelling problem discovery against participant count. Five users typically surface around 80% of usability issues in a single interface for a single user type — a figure that assumes one segment and one task flow."
      },
      {
        question: "When is five users not enough?",
        answer: "When you have distinct segments, when the flows diverge substantially, or when the question is about preference or magnitude rather than obstacles. Five users cannot tell you which of two designs converts better; that requires a test with statistical power."
      },
      {
        question: "Should you keep interviewing after you stop hearing new things?",
        answer: "No — saturation is the practical stopping rule. When two or three consecutive sessions produce nothing you haven't already heard, additional sessions are confirming rather than discovering, and the time is better spent acting on what you found."
      }
    ],
  },
  {
    slug: "how-to-become-a-product-manager",
    question: "How do you become a product manager without prior PM experience?",
    shortAnswer: "Do the job before you have the title. Find product-shaped work in your current role — a problem you can research, define and get shipped — and build a track record of decisions with outcomes. Internal transfers are by far the most common route in, and the least discussed.",
    bodyHtml: "<h2>The route that works</h2>\n<p>Almost nobody gets hired into a first PM role from outside. Companies hire for the role internally because the risk is lower — they&#39;ve seen your judgment.</p>\n<p>So the practical path is to be inside a company with product teams, in any function, and start doing the work. Take a problem nobody owns. Talk to the customers who have it. Write up what you found and what you&#39;d do. Get one thing shipped and measure whether it worked.</p>\n<p>That artefact — a decision, an argument, an outcome — is what an interview is trying to find out about, and it doesn&#39;t require a title.</p>\n<h2>What each background carries</h2>\n<p><strong>Engineers</strong> bring feasibility judgment and credibility with the team; the gap is usually customer contact and comfort with ambiguous, non-technical trade-offs.</p>\n<p><strong>Designers</strong> bring user empathy and craft; the gap is typically commercial reasoning and data.</p>\n<p><strong>Support and customer success</strong> bring the deepest knowledge of what customers actually struggle with, which is enormously undervalued; the gap is strategy and technical fluency.</p>\n<p><strong>Analysts</strong> bring rigour; the gap is qualitative research and the tolerance for deciding without a clean number.</p>\n<p>Name your gap honestly and close it visibly. That&#39;s a better interview answer than pretending the gap isn&#39;t there.</p>\n<h2>In the interview</h2>\n<p>You&#39;ll be asked how you&#39;d improve some product, and the answer that fails is a list of features. The answer that works establishes who the user is, what problem you&#39;re solving, why it matters, how you&#39;d know it worked, and what you&#39;d deliberately not do.</p>\n<p>Superhuman&#39;s product process is a useful thing to have studied for this reason: it&#39;s a public example of someone deciding what evidence would change their mind, then acting on it. That&#39;s the mode of thinking the interview is looking for — not familiarity with a framework, but a habit of turning vague questions into answerable ones.</p>\n",
    category: "Role",
    metaTitle: "How to Become a Product Manager Without PM Experience",
    metaDescription: "The internal transfer route, how to do product work before you have the title, what actually matters in interviews, and why certifications rarely move the needle.",
    keywords: [
      "how to become a product manager",
      "product manager without experience",
      "breaking into product management",
      "PM career transition"
    ],
    accentColor: "#DB2777",
    relatedCaseStudyIds: [
      "cs-35",
      "cs-73"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "Do you need a PM certification?",
        answer: "Rarely. Hiring managers weigh demonstrated judgment far above credentials, and a certificate signals study rather than practice. Time spent shipping something real is worth considerably more in an interview."
      },
      {
        question: "Do you need to be technical?",
        answer: "For most roles you need to be technically conversant, not technical — able to discuss trade-offs, understand what's expensive, and not be managed by whoever explains things most confidently. Infrastructure and developer-tool roles are the genuine exceptions."
      },
      {
        question: "What's the most common route into product?",
        answer: "Internal transfer. Engineers, designers, support leads, analysts and customer success managers move into PM roles constantly, because the company already trusts their judgment and they already understand the product and customers."
      }
    ],
  },
  {
    slug: "how-to-say-no-to-stakeholders",
    question: "How do you say no to stakeholders without damaging the relationship?",
    shortAnswer: "Say no to the solution while taking the problem seriously. Most stakeholder requests are a proposed fix wrapped around a real pain — rejecting the fix while visibly capturing the pain preserves the relationship. Saying no to both is what makes people route around you.",
    bodyHtml: "<h2>Separate the request from the problem</h2>\n<p>&quot;We need a bulk export button&quot; is a proposed solution. The problem underneath might be a monthly report that takes four hours, and there may be three better fixes. Asking what they&#39;re trying to accomplish isn&#39;t a deflection technique; it frequently produces a smaller, faster answer that makes them happier than the original ask.</p>\n<p>It also converts the conversation from yes/no into a shared investigation, which is where relationships survive.</p>\n<h2>Make the trade-off visible</h2>\n<p>No is unpersuasive in the abstract and obvious in the concrete. &quot;We can&#39;t do that&quot; invites argument. &quot;We can, and it would push the billing migration to Q3 — do you want to make that trade?&quot; hands over the actual decision.</p>\n<p>Most stakeholders, given a real trade-off, choose reasonably. They push hard because they assume there&#39;s slack somewhere, and the only way to disprove that is to show the queue.</p>\n<h2>Say no in public, honour it in private</h2>\n<p>Record the decision and the reasoning somewhere the person can see it. A written &quot;not now, because X, revisit when Y&quot; does two things: it proves you listened, and it stops the same request arriving every six weeks with fresh urgency.</p>\n<p>WhatsApp&#39;s decade of refusing ads, games and gimmicks is the extreme version — a product identity maintained by saying no far more often than yes, at real short-term revenue cost. Linear&#39;s refusal to become configurable is the same discipline at a smaller scale.</p>\n<p>The pattern in both: the no was principled and consistent, so it read as strategy rather than obstruction. A no that changes based on who&#39;s asking is just politics, and people learn to escalate instead of asking.</p>\n",
    category: "Prioritisation",
    metaTitle: "How to Say No to Stakeholders (Without Becoming the Blocker)",
    metaDescription: "Separate the request from the problem, make the trade-off visible, and give the decision back. Practical scripts for declining feature requests while keeping stakeholders on side.",
    keywords: [
      "saying no to stakeholders",
      "stakeholder management product",
      "handling feature requests",
      "product manager influence"
    ],
    accentColor: "#26A69A",
    relatedCaseStudyIds: [
      "cs-49",
      "cs-73"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "What if the stakeholder outranks you?",
        answer: "Then you're not deciding, you're informing. State the trade-off in terms of what gets dropped, get the decision on record, and execute properly. An escalation you lose cleanly costs far less than one you lose slowly through passive resistance."
      },
      {
        question: "How do you handle a request from a large customer?",
        answer: "Ask how many other customers have the same underlying problem. One large customer's specific solution built into the core product is how enterprise software becomes unmaintainable; the same customer's underlying need, solved generally, is often a good roadmap item."
      },
      {
        question: "Should you ever say yes to a bad idea to keep the peace?",
        answer: "Occasionally, and deliberately — a small cheap concession can buy the credibility to refuse something larger. What ruins teams is doing it by default, because the cost compounds in the codebase long after the goodwill has been spent."
      }
    ],
  },
  {
    slug: "jobs-to-be-done-explained",
    question: "What is jobs-to-be-done (JTBD)?",
    shortAnswer: "Jobs-to-be-done says people don't buy products, they hire them to make progress in a situation. The unit of analysis is the job, not the customer — which is why demographic personas often mislead and why your real competitor is frequently a spreadsheet, a habit, or doing nothing at all.",
    bodyHtml: "<h2>The reframe</h2>\n<p>Products get hired and fired. A customer has a situation, feels a struggle, and reaches for something that will make progress. That thing might be your software, a competitor, a manual workaround, or nothing.</p>\n<p>The practical consequence is that your competitive set is defined by the job, not the category. Intercom built its early product thinking explicitly in these terms, which is how a messaging product ended up competing with email, helpdesks and internal tooling simultaneously — all things people had hired for the same job.</p>\n<h2>Why it beats feature requests</h2>\n<p>Ask what customers want and you get solutions shaped by what they&#39;ve already seen. Ask what they were trying to do, what they tried first, and what made them give up, and you get the job.</p>\n<p>The second question is the valuable one. Customers are reliable reporters of their own struggles and unreliable designers of their own solutions.</p>\n<h2>Forces that decide the switch</h2>\n<p>JTBD frames every adoption decision as four competing pressures: the push of the current situation, the pull of the new solution, the anxiety about switching, and the habit of what exists today. Most product teams over-invest in pull — more features, better demos — and ignore anxiety and habit, which are usually what actually block the switch.</p>\n<p>Lego&#39;s turnaround has a version of this in it. The company nearly died building products designed around what it thought children should want, and recovered partly by re-examining what building sets were actually hired for: absorbed, sustained, tangible progress that a video game was also competing for.</p>\n<h2>Where it gets misused</h2>\n<p>JTBD is a discovery lens, not a planning system. Teams that convert it into a rigid taxonomy of hundreds of micro-jobs end up with a documentation exercise. The value is in the interview and the reframe — in noticing that you&#39;re not competing with who you thought.</p>\n",
    category: "Discovery",
    metaTitle: "Jobs-to-be-Done Explained — The Framework, and How to Use It",
    metaDescription: "JTBD reframes products as things people hire to make progress. The milkshake example, how to write a job statement, and why it changes who you think your competitors are.",
    keywords: [
      "jobs to be done",
      "JTBD framework",
      "jobs to be done examples",
      "customer jobs"
    ],
    accentColor: "#9B8FFF",
    relatedCaseStudyIds: [
      "cs-46",
      "cs-28"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "What is the milkshake example?",
        answer: "Clayton Christensen's research found a fast-food chain sold most milkshakes early in the morning to solo commuters. The job wasn't 'be a tasty dessert' — it was 'make a boring commute less dull and keep me full until lunch', which put the milkshake in competition with bagels and bananas rather than other desserts."
      },
      {
        question: "How is JTBD different from a user persona?",
        answer: "Personas describe who someone is; jobs describe what they're trying to accomplish. Two people with nothing demographically in common can share a job, and one person has different jobs in different situations — which is why job-based segmentation often predicts behaviour better."
      },
      {
        question: "How do you write a job statement?",
        answer: "The common format is 'When [situation], I want to [motivation], so I can [expected outcome].' The situation matters most and gets dropped most often; a motivation without a triggering context is just a feature request in disguise."
      }
    ],
  },
  {
    slug: "okrs-vs-kpis",
    question: "What is the difference between OKRs and KPIs?",
    shortAnswer: "KPIs are the numbers you watch continuously to know whether the business is healthy. OKRs are the ambitious, time-boxed changes you commit to this quarter. A KPI can run flat forever and still be doing its job; an OKR that doesn't move has failed. Most confusion comes from writing KPIs and calling them OKRs.",
    bodyHtml: "<h2>The practical difference</h2>\n<p>A KPI is a <strong>thermometer</strong>. Monthly active users, gross margin, p95 latency, support ticket volume — you watch them permanently, and a flat line is often good news.</p>\n<p>An OKR is a <strong>destination</strong>. An Objective states what changes and why it matters; Key Results state how you&#39;ll know it happened. It exists for one quarter and then it&#39;s over.</p>\n<p>The test: if the number would still be worth reporting when nobody is actively working on it, it&#39;s a KPI.</p>\n<h2>Why the confusion is expensive</h2>\n<p>The most common failure is converting the whole KPI dashboard into OKRs. Twelve metrics become twelve objectives, every team owns a number, and the quarter is spent nudging things that were already fine. The framework&#39;s entire value — forcing a choice about what actually changes — is thrown away in the setup.</p>\n<p>The second failure is the opposite: objectives so aspirational they can&#39;t be evidenced. &quot;Delight our customers&quot; is not an objective, because no key result honestly attaches to it.</p>\n<h2>What good looks like</h2>\n<p>Satya Nadella&#39;s cloud-first turnaround at Microsoft is a useful illustration of scale. The objective was a genuine change of direction, and the key results were unambiguous and countable — Azure revenue, commercial cloud run rate — not &quot;improve cloud perception&quot;. People could tell whether it was working.</p>\n<p>Amazon&#39;s working-backwards method solves the same problem from the other end: writing the press release first forces you to state the outcome in a way that can later be checked. Whatever the framework, the discipline is identical — commit to a number that can embarrass you.</p>\n",
    category: "Metrics",
    metaTitle: "OKRs vs KPIs — The Difference, and Why Teams Confuse Them",
    metaDescription: "KPIs monitor health, OKRs drive change. The practical difference, the test for telling them apart, and why turning every KPI into an OKR produces a quarter of busywork.",
    keywords: [
      "OKRs vs KPIs",
      "difference between OKR and KPI",
      "what are OKRs",
      "goal setting frameworks"
    ],
    accentColor: "#EA580C",
    relatedCaseStudyIds: [
      "cs-22",
      "cs-21"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "Can a KPI be a key result?",
        answer: "Yes, and this is the normal relationship. A key result is usually a target movement in an existing KPI — 'reduce p95 load time from 4.1s to 2.0s' takes a metric you already monitor and commits to changing it this quarter."
      },
      {
        question: "How many OKRs should a team have?",
        answer: "Three objectives with three key results each is the common ceiling, and most teams should be closer to one or two objectives. The point of the framework is forced prioritisation; a list of nine objectives is the thing OKRs were invented to prevent."
      },
      {
        question: "Should OKRs be tied to performance reviews?",
        answer: "Generally no. OKRs are meant to be ambitious enough that hitting 70% is a good outcome, and tying them to compensation reliably produces conservative targets that everyone hits — which destroys the signal the framework exists to create."
      }
    ],
  },
  {
    slug: "product-manager-vs-product-owner",
    question: "What is the difference between a product manager and a product owner?",
    shortAnswer: "Product manager is a role covering strategy, discovery and outcomes. Product owner is a specific title from Scrum, responsible for the backlog and for representing requirements to the development team. In many companies one person does both; where they're split, the PO's scope is deliberately narrower.",
    bodyHtml: "<h2>Different kinds of thing</h2>\n<p>Product manager describes a job that exists independently of any process framework: understand the market, choose the problems, define success, ship, learn.</p>\n<p>Product owner is a Scrum accountability. It exists because Scrum needed a single named person to own the backlog and be available to the development team, replacing the committee-of-stakeholders arrangement that made requirements incoherent.</p>\n<p>Comparing them is slightly category-confused, which is why the debate never resolves. One is a profession; the other is a seat in a specific meeting structure.</p>\n<h2>How companies actually split them</h2>\n<p>Where both exist, the usual division is: PM owns why and what, PO owns the ordered how. The PM does discovery, talks to customers, defines outcomes; the PO turns that into stories, grooms the backlog, and answers the team&#39;s questions during the sprint.</p>\n<p>This works when the two are genuinely joined at the hip. It fails when the split becomes a handoff — the PM does research the PO never sees, and the PO manages a backlog whose purpose they can&#39;t explain. You get a team executing accurately against requirements nobody can justify.</p>\n<p>Jira&#39;s history is instructive here: a tool built to serve process compliance, configured centrally, gradually optimising for tracking work rather than understanding why the work exists. Linear&#39;s opinionated stance is a direct reaction to that drift.</p>\n<h2>What to ask in an interview</h2>\n<p>Titles vary too much to trust. The useful questions: who decides what goes on the roadmap, who talks to customers, and who is accountable for the outcome after launch. Whatever the title, if the answer to all three is someone else, the role is delivery coordination, and it&#39;s better to know that before accepting.</p>\n",
    category: "Role",
    metaTitle: "Product Manager vs Product Owner — The Actual Difference",
    metaDescription: "One is a role, the other is a Scrum accountability. What each covers, why companies split them, and the dysfunction that follows when the split is done badly.",
    keywords: [
      "product manager vs product owner",
      "product owner role",
      "scrum product owner",
      "PM vs PO"
    ],
    accentColor: "#DB2777",
    relatedCaseStudyIds: [
      "cs-50",
      "cs-73"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "Is product owner a junior product manager?",
        answer: "Not by definition — in Scrum it's an accountability, not a seniority level. In practice many organisations treat it as a more junior, execution-focused role, which is a local convention rather than what the framework says."
      },
      {
        question: "Can one person be both?",
        answer: "Yes, and in most companies below a few hundred people that's normal. Splitting them adds a handoff, which is only worth it when the scope genuinely exceeds one person's capacity."
      },
      {
        question: "Which role owns the roadmap?",
        answer: "The product manager, in the sense of deciding direction and outcomes. Where the roles are split, the product owner typically owns the backlog that implements that direction — the sequencing of work rather than the choice of destination."
      }
    ],
  },
  {
    slug: "product-manager-vs-project-manager",
    question: "What is the difference between a product manager and a project manager?",
    shortAnswer: "A product manager is accountable for what gets built and whether it works for customers. A project manager is accountable for delivery — scope, schedule, dependencies and risk. One optimises for outcome, the other for predictable execution, and confusing them produces teams that ship on time to no effect.",
    bodyHtml: "<h2>The accountability line</h2>\n<p>Ask what each person fails at. A product manager fails when the team ships something customers don&#39;t want. A project manager fails when a committed delivery slips without warning or mitigation.</p>\n<p>Those are different failures with different skills attached, and they can occur independently. Shipping precisely on schedule something nobody needed is a product failure and a project success.</p>\n<h2>Quibi as the illustration</h2>\n<p>Quibi executed. The app was built, the content slate was produced, the launch happened on time with enormous funding behind it. By project standards it was a success.</p>\n<p>What was missing was the product question — whether anyone wanted premium short-form video on a phone-only app with no sharing. Excellent delivery of an unvalidated bet produces an expensive, well-run failure, and the schedule can look green throughout.</p>\n<h2>Where they overlap in practice</h2>\n<p>At small scale the same person does both, and that&#39;s fine — coordination for one team is a few hours a week. The trouble starts when scale grows and the delivery load quietly consumes the discovery time. The calendar fills with status, dependencies and unblocking, all urgent, all visible, while the customer conversations quietly stop happening.</p>\n<p>That&#39;s the moment to add a delivery role, not because the PM can&#39;t run a schedule, but because the two jobs compete for the same hours and only one of them has a deadline attached.</p>\n<h2>Choosing which you want to be</h2>\n<p>If you&#39;re energised by shipping complex things reliably, project management is a real craft and undersold. If you&#39;re energised by deciding what&#39;s worth shipping and living with being wrong, that&#39;s product. Neither is a stepping stone to the other.</p>\n",
    category: "Role",
    metaTitle: "Product Manager vs Project Manager — Outcome vs Delivery",
    metaDescription: "Product owns what and why; project owns when and how it lands. How the roles differ, where they overlap, and why conflating them produces on-time irrelevance.",
    keywords: [
      "product manager vs project manager",
      "product vs project management",
      "PM vs PjM",
      "delivery manager role"
    ],
    accentColor: "#DB2777",
    relatedCaseStudyIds: [
      "cs-21",
      "cs-40"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "Do you need both roles?",
        answer: "Depends on complexity. A single team shipping continuously usually doesn't — the PM absorbs the coordination. A programme spanning eight teams, a hardware dependency and a regulatory deadline absolutely does, and expecting a PM to carry both is how discovery stops happening."
      },
      {
        question: "Can a project manager become a product manager?",
        answer: "Often, and the delivery background helps. The transition that has to happen is from optimising for predictability to accepting uncertainty — from 'is this on schedule' to 'is this the right thing', which is a genuinely different instinct."
      },
      {
        question: "Is technical program manager the same as project manager?",
        answer: "Close, with more technical depth and usually broader scope across multiple teams and systems. TPMs typically own cross-team dependencies and technical execution risk, which is project management applied to engineering complexity."
      }
    ],
  },
  {
    slug: "product-technical-debt",
    question: "How should product managers think about technical debt?",
    shortAnswer: "Technical debt is deliberate or accidental shortcutting that makes future changes slower. PMs should treat it as a tax on delivery speed rather than an engineering hobby — the question is never 'should we pay it down' but 'which debt is charging us the most interest right now'.",
    bodyHtml: "<h2>The metaphor is load-bearing</h2>\n<p>Debt has principal and interest. The principal is the shortcut; the interest is every future change that costs more because of it. Debt nobody touches charges no interest and can be safely ignored forever — which is why a blanket &quot;let&#39;s clean up the codebase&quot; quarter is usually a bad trade. It pays down principal on loans that weren&#39;t charging anything.</p>\n<p>The right question is narrower: where is the interest actually being paid? That&#39;s identifiable — the modules where estimates are consistently wrong, where bugs cluster, where engineers negotiate about who has to go in.</p>\n<h2>Facebook&#39;s version of the bill</h2>\n<p>Facebook&#39;s mobile app was built on HTML5 to ship once across platforms — a completely rational trade at the time. The interest came due when mobile became the entire business and the performance ceiling of that choice became an existential constraint. The rewrite to native wasn&#39;t a refactor; it was a company-level bet made under duress.</p>\n<p>The lesson isn&#39;t that the original choice was wrong. It&#39;s that the interest rate on a platform decision rises with the platform&#39;s importance, and nobody re-evaluated the loan as mobile went from side channel to main channel.</p>\n<h2>What a PM can actually do</h2>\n<p>Keep the debt on the same list as the features. Separate lists guarantee the debt list loses, because it&#39;s judged on different criteria by people with less power in the room.</p>\n<p>Ask engineers for the specific delivery consequence rather than a severity rating. And when you deliberately take on debt to hit a date — which is often correct — write down what you took and what would trigger repaying it. Most debt becomes dangerous through forgetting, not through the original decision.</p>\n",
    category: "Prioritisation",
    metaTitle: "Technical Debt for Product Managers — How to Prioritise It",
    metaDescription: "Technical debt is a tax on future delivery. How PMs should evaluate it, why blanket refactoring quarters fail, and what Facebook's HTML5-to-native pivot cost.",
    keywords: [
      "technical debt product manager",
      "prioritising technical debt",
      "tech debt product roadmap",
      "refactoring vs features"
    ],
    accentColor: "#26A69A",
    relatedCaseStudyIds: [
      "cs-fb-mobile-12",
      "cs-50"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "What percentage of capacity should go to technical debt?",
        answer: "Common practice is 15-25% ongoing, but a fixed percentage is a substitute for judgment. What matters is whether the debt is currently slowing delivery of things you care about; if lead times are climbing, the number is too low regardless of what the policy says."
      },
      {
        question: "How do you convince leadership to fund debt work?",
        answer: "Translate it into delivery terms. 'This module takes three weeks for what should be three days, and four of the next quarter's items touch it' is a business case. 'The code is bad' is not."
      },
      {
        question: "Is all technical debt bad?",
        answer: "No. Deliberate debt taken to reach a market window can be an excellent trade, in the same way business debt is. The failure is taking it without recording it, so nobody remembers the shortcut existed until it breaks something unrelated."
      }
    ],
  },
  {
    slug: "rice-vs-ice-prioritization",
    question: "RICE vs ICE — which prioritisation framework should you use?",
    shortAnswer: "ICE scores Impact, Confidence and Ease; RICE adds Reach and swaps Ease for Effort, giving a value-per-unit-of-work score. Use ICE when you need to rank a backlog in an afternoon. Use RICE when reach genuinely varies between items and you need to defend the order to someone else.",
    bodyHtml: "<h2>The two formulas</h2>\n<p><strong>ICE</strong> = Impact × Confidence × Ease. Three numbers, usually 1-10, multiplied. Fast enough to do live in a room.</p>\n<p><strong>RICE</strong> = (Reach × Impact × Confidence) ÷ Effort. Reach is how many users are affected in a period; Effort is person-months. The division is the real difference — RICE gives you value per unit of work, which is the question a resource-constrained team is actually asking.</p>\n<h2>When the extra rigour earns its keep</h2>\n<p>Reach only helps when it varies. If you&#39;re comparing a change to the signup flow that touches every new user against a settings-page fix that touches 2%, RICE separates them and ICE doesn&#39;t. If you&#39;re comparing five features that all sit in the same core flow, Reach is a constant and you&#39;ve added a step for nothing.</p>\n<p>Effort as a divisor matters most when your list mixes two-day fixes with two-quarter projects. It&#39;s what stops a marginally higher-impact epic from perpetually outranking a week of cheap wins.</p>\n<h2>The failure mode both share</h2>\n<p>Scoring converts judgment into arithmetic, and arithmetic looks objective. It isn&#39;t — Impact and Confidence are guesses, and the person who wants their project prioritised will guess generously. The number&#39;s real value is that it forces those guesses to be stated where colleagues can argue with them.</p>\n<p>Linear&#39;s product decisions are a useful counterexample to score-driven roadmaps: a deliberately opinionated tool that says no to configurability would score poorly on any framework weighting reach and requests. Jira&#39;s history shows the other end — years of accommodating every high-scoring customer request, producing a product nobody would design on purpose.</p>\n<p>Use the score to surface disagreement about assumptions. Then make the call as a human being, and be willing to override the sheet when the sheet is wrong.</p>\n",
    category: "Prioritisation",
    metaTitle: "RICE vs ICE Prioritisation — Which One to Use and When",
    metaDescription: "RICE adds Reach and divides by Effort; ICE is faster and rougher. The formulas, the honest limitations of both, and why the score is a conversation starter rather than a decision.",
    keywords: [
      "RICE vs ICE",
      "RICE prioritisation framework",
      "ICE score",
      "product prioritisation frameworks"
    ],
    accentColor: "#26A69A",
    relatedCaseStudyIds: [
      "cs-73",
      "cs-50"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "What does RICE stand for?",
        answer: "Reach, Impact, Confidence, Effort. The score is Reach × Impact × Confidence ÷ Effort, which produces a rough estimate of value delivered per unit of work. It was developed at Intercom to compare ideas that were otherwise being argued about on instinct."
      },
      {
        question: "Is RICE better than ICE?",
        answer: "It's more rigorous, not automatically better. RICE takes longer and adds two more estimates to get wrong. If everything on your list reaches roughly the same number of users, Reach adds no discriminating power and you've bought precision you can't use."
      },
      {
        question: "What are the weaknesses of scoring frameworks?",
        answer: "They flatten strategy into arithmetic. A framework will rank ten incremental improvements above one bet that changes the company, because the bet scores badly on Confidence and Effort by definition. Nothing that ever mattered scored well on RICE beforehand."
      }
    ],
  },
  {
    slug: "should-you-build-on-a-foundation-model",
    question: "Should you build your product on a foundation model API?",
    shortAnswer: "Almost always yes for the intelligence layer — training your own model rarely beats an API on cost or quality. The real question is what you own besides the model call, because that's the only part a provider shipping your feature natively can't take from you.",
    bodyHtml: "<h2>The easy half of the decision</h2>\n<p>Use the API. The capability gap between a frontier model and anything a startup can train is enormous, the cost curve keeps falling, and improvements arrive without you doing anything. Building your own intelligence layer to avoid dependency is a way of spending two years arriving somewhere worse.</p>\n<h2>The hard half</h2>\n<p>Every company building on the same APIs has access to the same capability. So the differentiation question is what you have that they don&#39;t, and &quot;we prompt it better&quot; is not a durable answer — prompts are copyable in an afternoon.</p>\n<p>The categories that hold up:</p>\n<p><strong>Proprietary data</strong> the model doesn&#39;t have and can&#39;t get. Your customers&#39; history, your industry&#39;s documents, your accumulated corrections.</p>\n<p><strong>Workflow ownership</strong> — being the system where the work actually happens, so the model output lands in context rather than in a chat window the user has to copy from.</p>\n<p><strong>Integrations and permissions</strong> — the unglamorous plumbing into systems of record, which is slow to build and slower to displace.</p>\n<p><strong>Distribution and trust</strong> — particularly in regulated domains where being the approved vendor is worth more than being the cleverest one.</p>\n<h2>The lesson from the wrapper wave</h2>\n<p>When foundation model providers shipped features natively, the companies that evaporated were the ones whose entire product was a thin layer over a prompt. The ones that survived had the model as an input to something larger — the workflow, the data, the integrations were theirs, and swapping the model underneath was a Tuesday.</p>\n<h2>The question to answer before you start</h2>\n<p>Write down what remains if your provider ships your headline feature next month. If the honest answer is &quot;nothing&quot;, you don&#39;t have a product yet — you have a demonstration, and the clock started when you launched it.</p>\n",
    category: "AI",
    metaTitle: "Should You Build on a Foundation Model API? The Real Trade-offs",
    metaDescription: "Building on an LLM API is usually right; depending on it for differentiation is not. Where defensibility actually comes from, and what happened to thin wrappers.",
    keywords: [
      "building on LLM API",
      "foundation model API",
      "AI wrapper startup",
      "LLM product defensibility"
    ],
    accentColor: "#2563EB",
    relatedCaseStudyIds: [
      "cs-fm-shipped-26",
      "cs-autonomy-26"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "Is 'just a wrapper' a fair criticism?",
        answer: "It's fair when the product is a prompt and a text box, because the provider can ship that natively at any time. It's unfair when the model is one component inside a workflow, dataset and set of integrations that took years to build — most valuable software sits on infrastructure it didn't build."
      },
      {
        question: "Should you use multiple model providers?",
        answer: "An abstraction layer over providers is cheap insurance against pricing changes, deprecations and capability shifts, and it lets you route different tasks to different models. The cost is losing provider-specific features, which is usually a fair trade."
      },
      {
        question: "When does training your own model make sense?",
        answer: "Rarely, and usually only with proprietary data that general models handle badly, strict latency or cost constraints at high volume, or regulatory requirements about where inference happens. For most products, fine-tuning a strong base model covers the same ground far more cheaply."
      }
    ],
  },
  {
    slug: "what-does-a-product-manager-actually-do",
    question: "What does a product manager actually do?",
    shortAnswer: "A product manager decides what gets built and why, then makes sure it happens. Day to day that means research, prioritisation, writing, and a lot of alignment across engineering, design and the business. The role has no authority attached — influence comes from judgment and evidence.",
    bodyHtml: "<h2>The job in one sentence</h2>\n<p>Figure out which problem is most worth solving, make sure it&#39;s solved well, and keep everyone pointed in the same direction while it happens.</p>\n<p>Everything on a PM&#39;s calendar is downstream of that. Research exists to find the problem. Writing exists to make the decision legible. The meetings exist because a decision that only lives in your head hasn&#39;t been made.</p>\n<h2>What a week actually contains</h2>\n<p><strong>Talking to customers</strong> — support tickets, sales calls, scheduled interviews. Cut first when things get busy, and consistently regretted.</p>\n<p><strong>Deciding and defending</strong> — what&#39;s next, what&#39;s not, and why. This produces the documents.</p>\n<p><strong>Unblocking</strong> — the ambiguity that surfaces mid-build. Should this edge case error or degrade? Is this scope creep or the actual requirement? Someone has to answer within hours, not days.</p>\n<p><strong>Communicating outward</strong> — sales, support and leadership all need to know what&#39;s coming and what changed.</p>\n<p><strong>Looking at data</strong> — did the last thing work, and is the current thing working.</p>\n<h2>What it isn&#39;t</h2>\n<p>Not project management, though there&#39;s scheduling in it. Not design, though there&#39;s judgment about experience. Not a mini-CEO — the phrase does real damage, because it implies authority the job doesn&#39;t have and rarely survives contact with an engineering team.</p>\n<p>The Amazon working-backwards method captures the actual core: the PM&#39;s distinctive contribution is deciding what&#39;s worth building and articulating it clearly enough that others can build it well. Linear&#39;s team demonstrates the same thing through what they refuse — a coherent product is mostly a record of decisions not taken.</p>\n<h2>The uncomfortable truth</h2>\n<p>Most of the role is judgment under uncertainty, and judgment can&#39;t be delegated to a framework. The frameworks organise the thinking; they don&#39;t do it. That&#39;s why the job is hard to teach and why two PMs with identical processes produce completely different products.</p>\n",
    category: "Role",
    metaTitle: "What Does a Product Manager Actually Do? An Honest Description",
    metaDescription: "The real job behind the title: deciding what to build, why, and getting it shipped. What a week looks like, what the role is not, and where the difficulty actually lies.",
    keywords: [
      "what does a product manager do",
      "product manager responsibilities",
      "product manager day to day",
      "PM role"
    ],
    accentColor: "#DB2777",
    relatedCaseStudyIds: [
      "cs-21",
      "cs-73"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "Do product managers write code?",
        answer: "Almost never as part of the job. Technical understanding matters — enough to have credible conversations about trade-offs and feasibility — but writing production code is not the role, and a PM who spends their time coding is usually neglecting the part nobody else covers."
      },
      {
        question: "Who does a product manager manage?",
        answer: "Usually nobody. It's a leadership role without reporting lines, which is why the job is often described as influence without authority. Engineers and designers are peers, not reports."
      },
      {
        question: "What's the hardest part of the job?",
        answer: "Deciding with incomplete information and living with it. Most of the visible work — meetings, documents, tickets — is downstream of a small number of judgment calls made without enough data, and those calls are what the role is actually accountable for."
      }
    ],
  },
  {
    slug: "what-is-a-moat",
    question: "What is a competitive moat?",
    shortAnswer: "A moat is a structural advantage that makes your position harder to attack over time — network effects, switching costs, proprietary data, economies of scale, or brand. Features are not moats. If a well-funded competitor could copy it in a quarter, it's a lead, not a moat.",
    bodyHtml: "<h2>The five that hold up</h2>\n<p><strong>Network effects</strong> — the product improves as more people use it. Strongest when the network is global rather than local.</p>\n<p><strong>Switching costs</strong> — leaving is expensive in data, retraining, integration or risk. This is what makes unglamorous enterprise software so durable.</p>\n<p><strong>Proprietary data</strong> — usage generates data that makes the product better, which attracts usage. Google Maps is the definitive version: years of corrections, traffic patterns and Street View imagery that a competitor cannot simply buy.</p>\n<p><strong>Scale economics</strong> — unit costs fall as you grow, so you can price where entrants can&#39;t follow.</p>\n<p><strong>Brand</strong> — when a category name and a product name converge, acquisition gets structurally cheaper.</p>\n<h2>Distribution counts too</h2>\n<p>Stripe&#39;s advantage is often described as developer experience, which is a feature and copyable. The durable part is what that experience produced: default status in a generation of developers&#39; mental toolkit, plus the integration depth that follows once payments run through your code. That&#39;s brand and switching cost compounding out of what began as a documentation advantage.</p>\n<p>The pattern generalises. Features aren&#39;t moats, but features can be the mechanism that builds one, if you&#39;re deliberate about which structural asset they accumulate into.</p>\n<h2>The test to run on your own product</h2>\n<p>Imagine a competitor with three times your funding and a copy of your product. What still stops them? If the honest answer is &quot;nothing, we&#39;d just have to be faster&quot;, you don&#39;t have a moat yet — and knowing that is more useful than the flattering answer.</p>\n",
    category: "Strategy",
    metaTitle: "What Is a Competitive Moat? The Five Types That Actually Hold",
    metaDescription: "Network effects, switching costs, data, scale and brand — the moats that compound, why features never qualify, and how Google Maps and Stripe built theirs.",
    keywords: [
      "competitive moat",
      "types of moats",
      "defensibility startup",
      "sustainable competitive advantage"
    ],
    accentColor: "#F3123C",
    relatedCaseStudyIds: [
      "cs-26",
      "cs-27"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "Is being first to market a moat?",
        answer: "No, on its own. First-mover advantage only becomes a moat if you convert the head start into something structural — a network, accumulated data, or switching costs. Plenty of first movers were overtaken by a better-funded second mover who arrived eighteen months later."
      },
      {
        question: "Are network effects always the strongest moat?",
        answer: "They're the most celebrated, but they can be local and fragile. Network effects that operate city-by-city or team-by-team can be attacked market-by-market, which is how challengers beat incumbents that looked networked and were actually a hundred small networks."
      },
      {
        question: "Can a startup have a moat early?",
        answer: "Rarely a mature one, but it can be building toward one deliberately. The useful early question is which of the five categories your work compounds into — if none of them, you're competing on execution speed alone, which is a real strategy but an exhausting one."
      }
    ],
  },
  {
    slug: "what-is-a-north-star-metric",
    question: "What is a north star metric?",
    shortAnswer: "A north star metric is the single number that best captures the value your product delivers to customers. Good ones measure realised value, not activity — Spotify tracks time spent listening, not signups. It exists to align teams on one outcome, and there should only ever be one.",
    bodyHtml: "<h2>What makes a metric a north star, and not just a KPI</h2>\n<p>Three tests. It has to measure <strong>value the customer actually received</strong>, not activity they performed. It has to be something your team can <strong>move through product work</strong> rather than through a discount or an ad spend. And it has to be <strong>leading</strong> — if it only moves after the customer has already churned, it can&#39;t guide a roadmap.</p>\n<p>Spotify&#39;s monthly active users would fail the first test. Time spent listening passes: nobody listens for six hours a month by accident, and it rises only when discovery, playlists and catalogue genuinely improve.</p>\n<h2>The three ways teams pick the wrong one</h2>\n<p><strong>Choosing an activity metric.</strong> Signups, logins and page views all go up when marketing spends more. They tell you about acquisition, not about whether the product works. Duolingo&#39;s obsession with daily active learners rather than downloads is the difference between a metric you can buy and one you have to earn.</p>\n<p><strong>Choosing a metric nobody can influence.</strong> If the metric only moves when the CEO closes an enterprise deal, the product team will quietly ignore it and optimise something else.</p>\n<p><strong>Choosing a metric that rewards the wrong behaviour.</strong> This is the dangerous one. TikTok&#39;s early focus on watch time built an extraordinary recommendation engine and, simultaneously, a product accused of being engineered for compulsion. A north star is an instruction to a hundred people about what to optimise, and they will optimise it literally.</p>\n<h2>What to do with it once you have one</h2>\n<p>The metric itself is too blunt to work on directly. Break it into inputs — for time spent listening, that&#39;s sessions per week, session length, and share of sessions with a completed track — and give each team one input. The north star aligns; the inputs are what people actually ship against.</p>\n<p>Then leave it alone. A north star metric that changes every two quarters is a strategy that changes every two quarters, which is the real problem the metric was supposed to expose.</p>\n",
    category: "Metrics",
    metaTitle: "What Is a North Star Metric? Definition, Examples, Common Mistakes",
    metaDescription: "A north star metric is the single number that captures the value your product delivers. Definition, real examples from Spotify and Duolingo, and the three ways teams pick the wrong one.",
    keywords: [
      "north star metric",
      "north star metric examples",
      "what is a north star metric",
      "product metrics"
    ],
    accentColor: "#EA580C",
    relatedCaseStudyIds: [
      "cs-5",
      "cs-9",
      "cs-17"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "Can a company have more than one north star metric?",
        answer: "No — that defeats the purpose. The metric exists to settle arguments about what to build, and two north stars means the argument just moves up a level. Large companies often give each product team its own north star, but any single team should have exactly one."
      },
      {
        question: "What is the difference between a north star metric and an OKR?",
        answer: "A north star metric is a permanent measure of value; OKRs are quarterly targets. The north star rarely changes, while OKRs change every quarter and frequently target inputs to the north star rather than the metric itself."
      },
      {
        question: "Is revenue a good north star metric?",
        answer: "Usually not. Revenue measures value captured by the business, not value delivered to the customer, so it can rise while the product gets worse — through price increases, aggressive upsells, or harder cancellation. Most teams pick a usage metric and treat revenue as the lagging result."
      }
    ],
  },
  {
    slug: "what-is-a-prd",
    question: "What is a PRD and what goes in one?",
    shortAnswer: "A product requirements document states the problem, who has it, what success looks like, and what's in and out of scope. Its purpose is alignment before building, not documentation after. A PRD nobody argues with in review is usually too vague to be useful.",
    bodyHtml: "<h2>A structure that works</h2>\n<p><strong>Problem</strong> — what&#39;s broken, for whom, with evidence. If this section cites no data or research, stop here; the rest is decoration.</p>\n<p><strong>Why now</strong> — what changed. Competitive move, platform shift, a support queue that&#39;s grown 40%. This is the section that gets cut and the one that most often exposes that the answer is &quot;someone senior asked&quot;.</p>\n<p><strong>Success criteria</strong> — the metric and the target. Stated before building, so the result can&#39;t be reinterpreted afterwards.</p>\n<p><strong>Scope</strong> — in and, more importantly, out. The out-of-scope list prevents the slow expansion that turns a two-week feature into a quarter.</p>\n<p><strong>Open questions</strong> — what you don&#39;t know yet, named. A PRD with no open questions is usually hiding them.</p>\n<p>Notably absent: solution detail. The PRD frames the problem; design and engineering own the shape of the answer.</p>\n<h2>Amazon&#39;s inversion</h2>\n<p>Amazon&#39;s working-backwards method replaces the requirements doc with a press release and FAQ written as if the product already shipped. It&#39;s a forcing function — if the press release is boring, the product is boring, and you&#39;ve learned that before spending a quarter rather than after.</p>\n<p>The mechanism transfers even if the format doesn&#39;t: write the outcome first, in language a customer would recognise, and check whether it&#39;s worth wanting.</p>\n<h2>The test of a good one</h2>\n<p>Hand it to an engineer and a designer who weren&#39;t in the discovery. If they can independently explain who this is for, what problem it solves, and how you&#39;ll know it worked, it&#39;s doing its job. If they come back asking what it&#39;s actually for, no amount of additional requirements will fix it.</p>\n",
    category: "Discovery",
    metaTitle: "What Is a PRD? Structure, Length and What to Leave Out",
    metaDescription: "What a product requirements document should contain, how long it should be, and why Amazon writes the press release first. A practical structure you can copy.",
    keywords: [
      "what is a PRD",
      "product requirements document",
      "PRD template",
      "how to write a PRD"
    ],
    accentColor: "#9B8FFF",
    relatedCaseStudyIds: [
      "cs-21",
      "cs-25"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "How long should a PRD be?",
        answer: "One to three pages for most features. Length correlates with unread, and a document nobody finishes cannot align anyone. If it needs to be longer, the scope is probably too large to be one PRD."
      },
      {
        question: "Do agile teams still write PRDs?",
        answer: "Most do, under various names — one-pager, brief, spec, RFC. The artefact survives because the underlying need survives: several people have to agree on the problem before work starts. What's changed is length and rigidity, not existence."
      },
      {
        question: "What is the difference between a PRD and a user story?",
        answer: "A PRD frames a whole problem and its success criteria; a user story is one slice of implementable work. A single PRD usually produces many stories, and stories without a PRD tend to accumulate into features nobody can explain the purpose of."
      }
    ],
  },
  {
    slug: "what-is-a-product-roadmap",
    question: "What is a product roadmap and how detailed should it be?",
    shortAnswer: "A product roadmap communicates what you intend to build and why, over time. The useful version states problems and outcomes rather than dated features — because dated feature lists become promises, and promises made twelve months out are wrong in ways that damage trust when they change.",
    bodyHtml: "<h2>What it&#39;s for</h2>\n<p>Not scheduling. A roadmap exists so that people outside the team — sales, support, leadership, sometimes customers — can make their own decisions with an accurate picture of yours. That framing settles most format arguments: include what those people need to act on, exclude what they don&#39;t.</p>\n<h2>Detail should decay with distance</h2>\n<p>The current quarter can be specific because you&#39;ve done the discovery. Two quarters out you know the problem but not the solution. Four quarters out you have a theme and a hypothesis.</p>\n<p>A roadmap that shows the same fidelity across all four is lying about at least three of them. Now/Next/Later formalises this, which is most of why it spread — it makes uncertainty visible rather than papering over it with equally-sized boxes.</p>\n<h2>Outcomes over features</h2>\n<p>&quot;Reduce time-to-first-invoice from 3 days to 1 hour&quot; survives being wrong about the solution. &quot;Ship invoice wizard v2&quot; does not. When discovery reveals the wizard was the wrong answer, the outcome roadmap absorbs it and the feature roadmap turns into a credibility problem.</p>\n<p>This matters even more when a competitor moves. A roadmap built on outcomes can respond to a rival shipping your Q3 plan on a Tuesday by rerouting to the same outcome. A roadmap built on features has to either abandon a public commitment or ship something that no longer differentiates.</p>\n<h2>The uncomfortable part</h2>\n<p>Someone will always ask for dates, and often for legitimate reasons — a contract, a conference, a hiring plan. Give dates where you have real confidence, refuse them where you don&#39;t, and be explicit about which is which. The team that dates everything and misses half is trusted less than the team that dates three things and hits them.</p>\n",
    category: "Prioritisation",
    metaTitle: "What Is a Product Roadmap? Formats, Timeframes and What to Avoid",
    metaDescription: "Roadmaps communicate intent, not commitment. Now/Next/Later versus quarterly plans, how much detail each horizon deserves, and why dated feature lists reliably backfire.",
    keywords: [
      "product roadmap",
      "now next later roadmap",
      "outcome based roadmap",
      "roadmap vs backlog"
    ],
    accentColor: "#26A69A",
    relatedCaseStudyIds: [
      "cs-competitor-roadmap-26",
      "cs-73"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "What is a Now/Next/Later roadmap?",
        answer: "A format that replaces dates with confidence horizons. Now is in progress and specific; Next is committed but loosely scoped; Later is directional. Detail decreases with distance, which matches how certainty actually behaves."
      },
      {
        question: "How far out should a roadmap go?",
        answer: "Far enough to show direction, not so far that it implies precision you don't have. Two to four quarters is typical, with only the current quarter specified at feature level."
      },
      {
        question: "What's the difference between a roadmap and a backlog?",
        answer: "A roadmap is a communication artefact about direction, aimed at stakeholders. A backlog is an execution artefact about the next units of work, aimed at the team. Presenting a backlog as a roadmap is how stakeholders end up tracking ticket titles."
      }
    ],
  },
  {
    slug: "what-is-a-technical-product-manager",
    question: "What is a technical product manager?",
    shortAnswer: "A technical product manager works on products whose users or building blocks are technical — APIs, infrastructure, developer tools, platforms. The difference isn't seniority or coding ability; it's that the customer is an engineer, so understanding their workflow requires real technical depth.",
    bodyHtml: "<h2>What changes when the customer is an engineer</h2>\n<p>Developers evaluate products by trying them, not by taking a demo. That inverts the entire go-to-market: documentation is the sales page, the first API call is the pitch, and a confusing error message is a lost customer.</p>\n<p>Stripe&#39;s advantage came from taking this seriously earlier than anyone else. Docs, error messages and the quality of the first integration experience were treated as core product surface rather than support material, and developers made the buying decision before any salesperson was involved.</p>\n<p>Vercel&#39;s position comes from the same recognition applied to deployment — that the workflow friction engineers tolerated was itself the opportunity.</p>\n<h2>The extra depth required</h2>\n<p>You need to hold a conversation about architecture without being carried. Not to design the system, but to distinguish a genuine constraint from a preference, understand why one approach costs three weeks and another costs three months, and notice when a technical answer is really a scoping decision in disguise.</p>\n<p>This is also what makes discovery different. Engineers describe problems in terms of their current workaround, and interpreting that requires understanding the workaround.</p>\n<h2>Where the title gets misused</h2>\n<p>Two common misuses. Some companies apply it to any PM working with an engineering team, which is all of them. Others use it to mean a project manager for technical work, which is a different job entirely — closer to technical programme management.</p>\n<p>Before taking a role with the title, ask who the customer is. If the answer is developers, platform teams or systems, it&#39;s a genuine technical PM role. If the answer is &quot;the engineering team, and I&#39;d coordinate their delivery&quot;, the title is doing something else.</p>\n",
    category: "Role",
    metaTitle: "What Is a Technical Product Manager? How the Role Differs",
    metaDescription: "TPM roles serve technical users and technical systems. What extra depth is required, how discovery differs when your customer is an engineer, and where the title gets misused.",
    keywords: [
      "technical product manager",
      "TPM role",
      "API product manager",
      "platform product manager"
    ],
    accentColor: "#DB2777",
    relatedCaseStudyIds: [
      "cs-27",
      "cs-65"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "Does a technical PM need to code?",
        answer: "Enough to use your own product credibly — read the docs, call the API, run the example. Shipping production code isn't expected, but a developer-tool PM who has never integrated their own product will miss the things that make it painful."
      },
      {
        question: "Is technical PM more senior than product manager?",
        answer: "No, though companies sometimes use it that way. It denotes a domain, not a level. A consumer PM at scale is not less senior than a platform PM; they're solving different problems."
      },
      {
        question: "What does a platform PM do differently?",
        answer: "Their customers are usually internal teams, and success is measured in adoption and leverage rather than end-user metrics. The hard part is prioritising between teams with competing needs, none of whom can go elsewhere."
      }
    ],
  },
  {
    slug: "what-is-a-viral-loop",
    question: "What is a viral loop?",
    shortAnswer: "A viral loop is a cycle where using the product causes existing users to bring new ones, who then repeat the cycle. It's measured by the viral coefficient (K) — new users generated per existing user per cycle. K above 1 compounds; below 1, it usefully lowers acquisition cost but doesn't grow on its own.",
    bodyHtml: "<h2>The three canonical shapes</h2>\n<p><strong>Incentivised referral.</strong> Dropbox gave storage to both the referrer and the invitee. The incentive was the product itself, which meant it cost Dropbox marginal storage rather than cash, and it selected for people who actually wanted more Dropbox.</p>\n<p><strong>Embedded distribution.</strong> Hotmail appended a signup link to every outgoing message. Nobody chose to refer anyone — using the product broadcast it, which is the cheapest loop that exists.</p>\n<p><strong>Paid referral.</strong> PayPal&#39;s $20 for signup and $20 for referring was expensive and blunt, and it bought a payments network in a market where the network was the entire product. It worked because the lifetime value of an early network node justified it; the same tactic bankrupts a business with weaker economics.</p>\n<h2>The maths people skip</h2>\n<p>K = invites sent per user × conversion rate of those invites. Both halves are addressable, and the second is usually where the leverage is — teams obsess over prompting more invites while the invite landing page converts at 8%.</p>\n<p>Cycle time then determines whether K matters. Compounding is a function of how many cycles fit in a period, so a loop that completes in days is worth far more than the same K completing in months.</p>\n<h2>Where it goes wrong</h2>\n<p>A viral loop on a product that doesn&#39;t retain accelerates failure. You spend acquisition budget to introduce more people to something they&#39;ll abandon, and you burn the goodwill of everyone who was referred.</p>\n<p>The sequencing that works: retention first, then activation, then the loop. Dropbox&#39;s referral programme is famous because the product underneath it was genuinely sticky — the loop distributed something worth having.</p>\n",
    category: "Growth",
    metaTitle: "What Is a Viral Loop? K-Factor, Cycle Time and Real Examples",
    metaDescription: "How viral loops work, what the viral coefficient means, why cycle time matters as much as K, and how Dropbox, Hotmail and PayPal built the canonical examples.",
    keywords: [
      "viral loop",
      "viral coefficient",
      "k factor growth",
      "referral loop"
    ],
    accentColor: "#0F9D58",
    relatedCaseStudyIds: [
      "cs-11",
      "cs-12",
      "cs-20"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "What is a good viral coefficient?",
        answer: "Anything above 1 means self-sustaining growth, which is rare and usually temporary. Most durable products run well below 1 and treat virality as a discount on paid acquisition rather than a growth engine on its own."
      },
      {
        question: "Why does cycle time matter?",
        answer: "Because compounding depends on frequency as much as rate. A K of 1.2 with a two-day cycle grows explosively; the same K with a two-month cycle is nearly flat over the same period. Shortening the loop is often easier than raising K."
      },
      {
        question: "What's the difference between a viral loop and word of mouth?",
        answer: "A viral loop is built into product usage — sharing is how the product works. Word of mouth is people choosing to recommend you separately. Both are valuable; only the loop can be engineered and measured directly."
      }
    ],
  },
  {
    slug: "what-is-an-ai-agent",
    question: "What is an AI agent?",
    shortAnswer: "An AI agent is a system that pursues a goal over multiple steps, choosing its own actions and using tools, rather than answering a single prompt. The distinguishing feature is autonomy over the sequence — the model decides what to do next, which is also where most of the product risk lives.",
    bodyHtml: "<h2>The definitional line</h2>\n<p>Three things distinguish an agent: a <strong>goal</strong> rather than an instruction, <strong>tool use</strong> to act on the world rather than only produce text, and <strong>autonomy over sequencing</strong> — the model chooses the next step based on what happened in the last one.</p>\n<p>That third property is the whole thing. It&#39;s what makes agents able to handle situations nobody scripted, and it&#39;s what makes their failures hard to predict.</p>\n<h2>Where autonomy earns its cost</h2>\n<p>Agents are worth it when the space of situations is too large to enumerate. Debugging an unfamiliar codebase, researching across sources whose structure you don&#39;t know in advance, handling support requests whose resolution path varies — these are genuinely hard to express as workflows.</p>\n<p>They&#39;re a poor trade when the sequence is known. If your process has six steps that never change, an agent adds latency, cost and non-determinism to something a workflow does reliably.</p>\n<h2>The cost of premature autonomy</h2>\n<p>The recurring failure pattern in early agent deployments is granting autonomy before reliability justifies it. Each step in a chain has an error rate, and those errors compound — a sequence of ten steps at 95% reliability succeeds around 60% of the time. Add the ability to take irreversible actions and the tail risk becomes the product&#39;s defining characteristic.</p>\n<p>The teams that shipped successfully generally did the unglamorous thing: constrained the action space, put a human at the points of no return, and expanded autonomy as evidence accumulated. That&#39;s slower than a demo and considerably cheaper than an incident.</p>\n<h2>The product question underneath</h2>\n<p>Not &quot;can the model do this&quot; but &quot;what happens when it does it wrong&quot;. If the answer is a wasted minute, ship it. If the answer is a deleted database or a sent email, the design problem is containment, not capability.</p>\n",
    category: "AI",
    metaTitle: "What Is an AI Agent? Definition, Capabilities and Risk",
    metaDescription: "An agent chooses its own next step toward a goal. How agents differ from chatbots and workflows, where autonomy pays off, and why premature autonomy is expensive.",
    keywords: [
      "what is an AI agent",
      "AI agents explained",
      "agentic AI",
      "autonomous agents"
    ],
    accentColor: "#2563EB",
    relatedCaseStudyIds: [
      "cs-autonomy-26",
      "cs-claude-5-26"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "What's the difference between an agent and a chatbot?",
        answer: "A chatbot responds turn by turn to what a person asks. An agent is given an objective and works toward it across multiple steps, deciding which actions to take and when it's finished — the human sets the goal rather than each instruction."
      },
      {
        question: "What is the difference between an agent and a workflow?",
        answer: "A workflow has a predetermined sequence of steps, some of which may call a model. An agent determines the sequence itself at runtime. Workflows are more predictable and easier to debug; agents handle situations you couldn't enumerate in advance."
      },
      {
        question: "Where do agents fail most often?",
        answer: "In compounding errors across long chains, and in taking irreversible actions on a wrong premise. Reliability degrades with the number of steps, so the practical design question is usually how to shorten the chain or add checkpoints, not how to make each step smarter."
      }
    ],
  },
  {
    slug: "what-is-an-mvp",
    question: "What is an MVP (minimum viable product)?",
    shortAnswer: "An MVP is the smallest thing that generates a real learning about whether people want what you're building. Viable means it delivers actual value to someone, not that it's technically functional — which is why a manual, unscalable process often makes a better MVP than a thin version of the full product.",
    bodyHtml: "<h2>Viable is the word that matters</h2>\n<p>Minimum is easy to over-index on. Teams strip a product until it&#39;s a skeleton, ship it, watch it fail, and conclude the market doesn&#39;t want it — when what the market rejected was something that didn&#39;t work.</p>\n<p>The MVP has to actually do a job for someone. Everything else — scale, polish, automation, edge cases — is negotiable.</p>\n<h2>Manual beats thin</h2>\n<p>The best MVPs are frequently not software. Airbnb&#39;s founders photographed apartments themselves and handled bookings by hand; the learning they needed was whether strangers would sleep in each other&#39;s homes, and no amount of platform engineering would have answered that faster.</p>\n<p>This is the concierge pattern: deliver the outcome manually, learn what the workflow really is, automate afterwards. It feels wrong to engineers and it consistently produces better information than a scaled-down v1.</p>\n<h2>Cut features, not quality</h2>\n<p>The other common error is treating MVP as licence to ship something broken. Instagram launched with a tiny feature set — photos, filters, a feed — and those few things worked beautifully. The pivot away from Burbn&#39;s bloated check-in app worked precisely because the remaining slice was excellent, not because it was small.</p>\n<p>A minimal product that&#39;s good tells you whether people want the thing. A minimal product that&#39;s buggy tells you nothing except that people don&#39;t like bugs.</p>\n<h2>Know what you&#39;re testing</h2>\n<p>Write the question down before you build. &quot;Will small businesses pay for automated invoice reminders?&quot; is answerable. &quot;Is our product good?&quot; is not. Once the question is explicit, the minimum thing that answers it is usually much smaller than the thing you were about to build — and occasionally isn&#39;t software at all.</p>\n",
    category: "Discovery",
    metaTitle: "What Is an MVP? The Definition Most Teams Get Wrong",
    metaDescription: "An MVP is a learning instrument, not version one. Why 'viable' is the load-bearing word, the concierge and Wizard-of-Oz patterns, and what Airbnb and Instagram actually launched.",
    keywords: [
      "what is an MVP",
      "minimum viable product",
      "MVP examples",
      "MVP vs prototype"
    ],
    accentColor: "#9B8FFF",
    relatedCaseStudyIds: [
      "cs-3",
      "cs-10"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "What is the difference between an MVP and a prototype?",
        answer: "A prototype tests whether something can work or how it feels, usually with no real users and no real value exchanged. An MVP is used by real people to do a real job, which is what makes its evidence trustworthy."
      },
      {
        question: "What is a concierge MVP?",
        answer: "One where the service is delivered manually behind the scenes while looking automated to the customer. It tests demand and workflow without building the automation, and it's usually the fastest way to find out that your assumed workflow is wrong."
      },
      {
        question: "Can an MVP be too minimal?",
        answer: "Yes. If it's so limited that nobody gets value, its failure tells you nothing — you learn that a bad product didn't sell, which you already knew. Viability is the floor, and cutting below it wastes the experiment."
      }
    ],
  },
  {
    slug: "what-is-blitzscaling",
    question: "What is blitzscaling?",
    shortAnswer: "Blitzscaling is prioritising speed over efficiency in conditions of uncertainty, deliberately accepting waste and organisational chaos to win a market before competitors can. It's rational only when the market is genuinely winner-take-most and you have the capital to survive the burn.",
    bodyHtml: "<h2>The trade being made</h2>\n<p>Ordinary scaling optimises for efficiency: hire when you need someone, expand when the market is proven, build systems before you need them. Blitzscaling inverts all three, accepting that a lot of money will be wasted in exchange for occupying the market first.</p>\n<p>The justification is market structure. If a market ends with one dominant player, second place is worth a fraction of first, and the expected value of moving fast exceeds the certain cost of the waste.</p>\n<h2>Uber&#39;s version, and what it required</h2>\n<p>Uber&#39;s city-by-city expansion is the canonical example — enter, subsidise both sides until liquidity is reached, tolerate regulatory conflict, move to the next city before competitors organise. The core insight is that ride-hailing liquidity is local, so the race was a hundred separate races and speed compounded in each one.</p>\n<p>It also required a functioning underlying product. A rider who got a car in four minutes returned unprompted. Subsidy bought the first ride; the product kept it.</p>\n<h2>Where it goes wrong</h2>\n<p>Dunzo&#39;s trajectory shows the failure pattern: aggressive expansion and category-broadening in a market where unit economics didn&#39;t improve with scale and no winner-take-most dynamic materialised. Growth spending bought volume that never converted into a defensible position, and each expansion made the underlying economics harder rather than easier.</p>\n<p>The diagnostic question isn&#39;t &quot;can we grow fast&quot; — most companies can, given money. It&#39;s whether scale makes your economics better. If each new city, customer or category costs the same or more to serve, speed is just an expensive way to reach the same place.</p>\n<h2>The part that gets omitted</h2>\n<p>Blitzscaling assumes a later phase where you fix everything you broke. Companies that never plan that phase, or never reach the market position that funded the breakage, end up with the organisational damage and none of the prize.</p>\n",
    category: "Growth",
    metaTitle: "What Is Blitzscaling? When Speed Over Efficiency Makes Sense",
    metaDescription: "Blitzscaling trades efficiency for speed to capture a winner-take-most market. The conditions that justify it, the costs it guarantees, and what Uber and Dunzo showed.",
    keywords: [
      "blitzscaling",
      "blitzscaling meaning",
      "growth at all costs",
      "winner take all market"
    ],
    accentColor: "#0F9D58",
    relatedCaseStudyIds: [
      "cs-16",
      "cs-85"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "When is blitzscaling the wrong choice?",
        answer: "When the market isn't winner-take-most, when unit economics don't improve with scale, or when you don't have the capital to reach the far side. In those conditions it converts funding into churn faster than a disciplined competitor converts it into a business."
      },
      {
        question: "What does blitzscaling cost?",
        answer: "Deliberate inefficiency: overhiring, duplicated work, weak processes, technical debt and cultural strain. The bet is that market position acquired now is worth more than the cleanup later, which is true sometimes and catastrophic when the market never consolidates."
      },
      {
        question: "Is blitzscaling still viable in a tighter funding market?",
        answer: "It requires capital that's patient about losses, so it becomes rarer when funding tightens. The underlying logic doesn't change — it was always a bet on a specific market structure — but fewer companies can afford to make it."
      }
    ],
  },
  {
    slug: "what-is-blue-ocean-strategy",
    question: "What is blue ocean strategy?",
    shortAnswer: "Blue ocean strategy means competing where competition doesn't exist yet — creating new demand rather than fighting for share in a saturated market. The mechanism is deliberately dropping attributes the industry treats as mandatory, and adding ones it ignores, so you're no longer comparable.",
    bodyHtml: "<h2>The core move: subtract, then add</h2>\n<p>Most strategy work is additive — match competitors&#39; features, then add a few. Blue ocean strategy insists on subtraction first. Which attributes does everyone in the industry compete on, and which of those could you drop entirely?</p>\n<p>Nintendo&#39;s Wii is the textbook case. The console industry competed on processing power and graphics; the Wii conceded both, decisively, and added motion control and a price point that put it in living rooms belonging to people who had never bought a console. Against a spec sheet it lost. Against the market it had invented, it had no competitor.</p>\n<h2>Why it&#39;s hard to actually do</h2>\n<p>Dropping an industry-standard attribute feels like shipping a worse product, because by the incumbent scorecard it is. Every internal incentive pushes back — sales will report losing deals on the missing feature, reviewers will mark it down, and the comparison table will look bad.</p>\n<p>Tesla&#39;s direct-to-consumer model met exactly this resistance. Dealership networks were treated as a structural requirement of selling cars, and eliminating them looked like a handicap rather than a strategy until the economics and the customer experience proved otherwise.</p>\n<h2>The honest limitations</h2>\n<p>The framework is much better at explaining successes than generating them. Its examples are chosen retrospectively, and the four actions framework will happily produce a list of eliminations that just makes your product worse. There is no test inside the framework for distinguishing a bold subtraction from a stupid one.</p>\n<p>The useful discipline it does provide: write down what your entire industry assumes is mandatory. Most of those assumptions have never been tested, and one of them is occasionally wrong in a way that&#39;s worth a company.</p>\n",
    category: "Strategy",
    metaTitle: "What Is Blue Ocean Strategy? The Idea and Its Limits",
    metaDescription: "Blue ocean strategy creates uncontested market space by dropping industry-standard attributes and adding ignored ones. The Nintendo Wii example, and why most blue oceans turn red.",
    keywords: [
      "blue ocean strategy",
      "blue ocean vs red ocean",
      "value innovation",
      "uncontested market space"
    ],
    accentColor: "#F3123C",
    relatedCaseStudyIds: [
      "cs-24",
      "cs-23"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "What is a red ocean?",
        answer: "An existing market where the boundaries and competitive rules are established, and companies fight for share of known demand. Competition is on the same attributes, so it tends to compress margins for everyone in it."
      },
      {
        question: "What is the four actions framework?",
        answer: "Eliminate, Reduce, Raise, Create. You ask which factors the industry takes for granted should be eliminated, which reduced well below standard, which raised well above, and which should be created that the industry has never offered."
      },
      {
        question: "Do blue oceans stay blue?",
        answer: "Rarely for long. Success invites imitation, and a genuinely new market becomes contested within a few years. The strategy is a way to open a lead, not a permanent condition — which is why the follow-through matters as much as the initial move."
      }
    ],
  },
  {
    slug: "what-is-churn-rate",
    question: "What is churn rate and what counts as good?",
    shortAnswer: "Churn rate is the share of customers or revenue lost in a period. Below roughly 1% monthly is strong for B2B SaaS; consumer subscription churn is routinely 5-8%. But the headline number matters far less than its shape — churn concentrated in month one is an onboarding problem, not a retention one.",
    bodyHtml: "<h2>Calculating it</h2>\n<p>Customers lost during a period divided by customers at the start of that period. Simple, and easy to accidentally flatter: exclude trials, exclude involuntary churn from expired cards, and pick a long enough window and almost any number can be made presentable.</p>\n<p>Report voluntary and involuntary churn separately. Failed payments are a billing problem with a technical fix; cancellations are a product problem.</p>\n<h2>What &quot;good&quot; means depends entirely on the model</h2>\n<p>For B2B SaaS with annual contracts, monthly logo churn under 1% is healthy. For consumer subscriptions, 5-8% monthly is normal and the entire business is built around it — which is why consumer subscription companies spend so heavily on acquisition. A number that would be an emergency in one model is the operating assumption in the other.</p>\n<h2>The shape matters more than the number</h2>\n<p>Segment churn by tenure. Heavy churn in the first 30 days means users never reached value — that&#39;s an activation problem, and no win-back campaign will fix it. Churn that&#39;s flat across tenure means the product&#39;s value genuinely expires for a segment. Churn that rises at month 12 usually means an annual renewal decision, not a product decision.</p>\n<p>Peloton is the cautionary case. Churn stayed low through the pandemic, when a locked-down customer base had no alternatives, and the company read a temporary market condition as a durable product truth — building supply chain, staffing and forecasts on it. Cult.fit ran into a version of the same problem in its super-app phase, where breadth diluted the core habit that kept people renewing.</p>\n<p>A churn rate is a lagging indicator of a decision you made months earlier. By the time it moves, the thing that caused it is already shipped.</p>\n",
    category: "Metrics",
    metaTitle: "What Is Churn Rate? Benchmarks, Formula and What It Hides",
    metaDescription: "How to calculate churn, what counts as good in B2B and consumer, the difference between customer and revenue churn, and why Peloton's churn told the real story late.",
    keywords: [
      "churn rate",
      "what is a good churn rate",
      "customer churn vs revenue churn",
      "SaaS churn benchmarks"
    ],
    accentColor: "#EA580C",
    relatedCaseStudyIds: [
      "cs-79",
      "cs-59"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "What is negative churn?",
        answer: "Negative net revenue churn happens when expansion revenue from existing customers exceeds the revenue lost to cancellations and downgrades. The customer base shrinks in count but grows in value, which is why it's a strong signal in B2B — it means growth continues even if you stop acquiring."
      },
      {
        question: "What is the difference between customer churn and revenue churn?",
        answer: "Customer churn counts accounts lost; revenue churn counts money lost. They diverge sharply when customer sizes vary — losing forty small accounts and one enterprise account produce very different revenue outcomes from the same customer churn number."
      },
      {
        question: "Why does churn spike after a pricing change?",
        answer: "Because a price change forces every customer to re-evaluate, including ones who would otherwise have renewed passively. The spike is usually one-off; the number to watch is whether the post-change baseline settles higher than the old one."
      }
    ],
  },
  {
    slug: "what-is-cohort-analysis",
    question: "What is cohort analysis?",
    shortAnswer: "Cohort analysis groups users by when they joined and tracks each group separately over time. It exists because aggregate metrics hide direction: total usage can grow while every individual cohort retains worse than the last. Cohorts are how you tell growth from churn masked by acquisition.",
    bodyHtml: "<h2>Why the aggregate lies</h2>\n<p>A product adding 10,000 users a month can show rising total actives for a year while every cohort retains worse than the one before. New arrivals mask the leak. The moment acquisition slows, the whole thing deflates — and by then the underlying decay has been running for four quarters.</p>\n<p>Cohorts are the correction. Group users by their join month, then measure each group&#39;s retention at month 1, 2, 3 and so on. Now improvement and decay are visible as changes between rows.</p>\n<h2>Reading the table</h2>\n<p>Rows are cohorts, columns are periods since joining. Three things to look for:</p>\n<p><strong>Down a column</strong> — are newer cohorts retaining better than older ones at the same age? This is the only clean read on whether your product work is landing.</p>\n<p><strong>Across a row</strong> — where does each cohort fall off? A cliff between period 0 and 1 is activation. A steady slide is value that doesn&#39;t compound.</p>\n<p><strong>The floor</strong> — does the curve flatten? A cohort that stabilises at 30% has 30% of users for whom the product became infrastructure. A curve heading to zero has no such group, which is the signal that no amount of acquisition will build a business.</p>\n<h2>Cohorts as a testing discipline</h2>\n<p>Booking.com&#39;s culture of relentless experimentation is really a cohort discipline — every change is judged on what it does to a group of users over time, not on what it does to a dashboard on the day it ships. Duolingo&#39;s streak mechanics are similarly evaluated: the question isn&#39;t whether streaks are used, it&#39;s whether cohorts exposed to them retain measurably longer.</p>\n<p>The habit worth building: never report a metric to your team without asking which cohort it came from.</p>\n",
    category: "Metrics",
    metaTitle: "What Is Cohort Analysis? How to Read a Retention Table",
    metaDescription: "Cohort analysis groups users by join date so you can see whether the product is actually improving. How to read the table, the three curve shapes, and what aggregate numbers hide.",
    keywords: [
      "cohort analysis",
      "retention cohort",
      "how to read cohort table",
      "cohort retention curve"
    ],
    accentColor: "#EA580C",
    relatedCaseStudyIds: [
      "cs-72",
      "cs-9"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "What size does a cohort need to be?",
        answer: "Large enough that a handful of users leaving doesn't swing the percentage. For most products that means at least a few hundred per cohort; below that, widen the window from weekly to monthly rather than reading noise as signal."
      },
      {
        question: "Should cohorts be grouped by week or month?",
        answer: "By whichever period matches your natural usage cycle and gives you enough volume. Weekly cohorts show the effect of a specific release faster; monthly cohorts are more stable and easier to read for slower products."
      },
      {
        question: "What is the difference between cohort analysis and segmentation?",
        answer: "Cohorts group by time of joining and track forward; segments group by a shared attribute like plan, channel or geography. They combine well — comparing retention curves across acquisition channels usually reveals that one channel brings users who never retain."
      }
    ],
  },
  {
    slug: "what-is-continuous-discovery",
    question: "What is continuous discovery?",
    shortAnswer: "Continuous discovery is the practice of talking to customers every week, as an ongoing habit, rather than in project-shaped research phases. The premise is that a small weekly touchpoint compounds into judgment, while a research sprint every six months produces a report that ages before it's used.",
    bodyHtml: "<h2>The problem it solves</h2>\n<p>Project-based research has a structural flaw: you learn a great deal at the start, then spend months building on knowledge that decays. By launch, the assumptions are old and nobody re-checked them, because re-checking would require another project.</p>\n<p>Continuous discovery flattens that. A little contact every week means assumptions are challenged while they&#39;re still cheap to change.</p>\n<h2>What the cadence actually is</h2>\n<p>One interview a week, ideally with the trio present. That&#39;s it. Not a research programme, not a quarterly initiative — a recurring calendar entry.</p>\n<p>The scale is deliberately small because sustainability is the whole point. Teams that plan five interviews a week do it for a fortnight and stop. Teams that do one a week are still doing it two years later, and the accumulated context is the real asset.</p>\n<h2>Pair it with a way to decide</h2>\n<p>Interviews without a decision structure produce a pile of anecdotes and a team that quotes whichever customer supports their preference. The common pairing is an opportunity solution tree: a desired outcome at the top, discovered opportunities beneath it, candidate solutions beneath those. It makes the reasoning from evidence to bet visible and arguable.</p>\n<p>Booking.com&#39;s experimentation culture is the quantitative sibling of the same principle — a permanent mechanism for being told you&#39;re wrong, running constantly rather than in phases. Intercom&#39;s early practice was the qualitative version. Both organisations built a habit rather than a project, which is why the learning compounded.</p>\n<h2>The failure to watch for</h2>\n<p>Discovery becoming theatre — the meeting happens, notes are taken, nothing changes. If you can&#39;t point to a decision in the last month that went differently because of a customer conversation, you don&#39;t have continuous discovery. You have a standing meeting.</p>\n",
    category: "Discovery",
    metaTitle: "What Is Continuous Discovery? The Weekly Habit Explained",
    metaDescription: "Continuous discovery replaces research phases with a weekly customer touchpoint. What the cadence looks like, who should attend, and why the trio matters more than the interview.",
    keywords: [
      "continuous discovery",
      "continuous discovery habits",
      "weekly customer interviews",
      "product discovery"
    ],
    accentColor: "#9B8FFF",
    relatedCaseStudyIds: [
      "cs-46",
      "cs-72"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "What is a product trio?",
        answer: "The product manager, a designer and an engineer doing discovery together. The point is shared context — decisions get made faster and with fewer misunderstandings when all three heard the same customer say the same thing, rather than reading a summary of it."
      },
      {
        question: "How often is 'continuous'?",
        answer: "Weekly is the standard target. The specific number matters less than the rhythm: research that happens on a schedule survives busy quarters, and research that happens when someone has time does not."
      },
      {
        question: "Isn't this a lot of overhead for a small team?",
        answer: "One thirty-minute conversation a week is less overhead than a quarter spent building the wrong thing. Small teams usually find it cheaper than research phases, because there's no ramp-up cost each time."
      }
    ],
  },
  {
    slug: "what-is-generative-engine-optimization",
    question: "What is generative engine optimisation (GEO)?",
    shortAnswer: "Generative engine optimisation is the practice of making your content likely to be surfaced and cited by AI assistants rather than ranked in a list of links. It overlaps heavily with good SEO, but optimises for being quotable and verifiable rather than for click-through.",
    bodyHtml: "<h2>Why it emerged</h2>\n<p>When a question is answered directly in a chat interface, the traditional funnel changes shape. Fewer people click through, and the ones who do arrive with the answer already in hand. Sites that depended on ranking for informational queries have watched referral traffic decline while their content continues to be used.</p>\n<p>That shift is the entire reason GEO exists as a distinct practice.</p>\n<h2>What actually influences citation</h2>\n<p><strong>Extractability.</strong> Models quote passages that stand alone. A definition in the first paragraph, phrased so it makes sense with no surrounding context, is far more likely to be lifted than the same information distributed across four paragraphs of build-up.</p>\n<p><strong>Structure.</strong> Clear headings, question-shaped H2s, tables and lists all make content easier to parse and section.</p>\n<p><strong>Verifiability.</strong> Specific numbers, named sources and dates are quoted more readily than general claims, because they&#39;re checkable.</p>\n<p><strong>Presence in the retrieval path.</strong> Being crawlable, being in the index, and — for assistants that fetch live — being fast and not blocked at the edge.</p>\n<h2>The practical starting list</h2>\n<p>Answer the literal question in the heading, then answer it immediately in the text. Add structured data where it fits, particularly FAQ and QA schema. Keep a machine-readable summary of your corpus. Make sure AI crawlers and live fetchers aren&#39;t being rate-limited or geo-blocked by infrastructure that was configured for a different threat model.</p>\n<h2>The honest caveat</h2>\n<p>None of this is a ranking algorithm you can reverse-engineer. There&#39;s no equivalent of a link graph to manipulate, and the systems change without notice. What holds is the underlying property: being the clearest, most quotable, most verifiable answer to a specific question is useful regardless of which system is doing the reading.</p>\n",
    category: "AI",
    metaTitle: "What Is Generative Engine Optimisation (GEO)? A Practical Guide",
    metaDescription: "GEO optimises for citation by AI assistants rather than ranking. What actually influences whether a model quotes you, how it differs from SEO, and what to do first.",
    keywords: [
      "generative engine optimization",
      "GEO SEO",
      "AEO answer engine optimization",
      "AI search optimization"
    ],
    accentColor: "#2563EB",
    relatedCaseStudyIds: [
      "cs-geo-aeo-2026",
      "cs-ai-search-referral-2026"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "Is GEO different from SEO?",
        answer: "It's an extension rather than a replacement. Crawlability, structure and authority still matter because assistants draw on indexed content. What's new is optimising for extraction — being the source whose sentence can be lifted cleanly and attributed."
      },
      {
        question: "What is llms.txt?",
        answer: "A proposed convention: a markdown file at your domain root that describes your site's content and structure for AI systems, similar in spirit to robots.txt. Adoption is not universal and it is not a ranking mechanism, but it's cheap and makes your corpus legible."
      },
      {
        question: "Does blocking AI crawlers protect your content?",
        answer: "It reduces ingestion, and it also removes you from the answers those systems give. That's a genuine strategic trade-off — publishers dependent on ad-supported pageviews often choose differently from businesses that benefit from being cited as an authority."
      }
    ],
  },
  {
    slug: "what-is-moscow-prioritization",
    question: "What is MoSCoW prioritisation?",
    shortAnswer: "MoSCoW sorts requirements into Must have, Should have, Could have and Won't have. It's a scoping tool for a fixed deadline, not a roadmap tool — its job is to establish what can be dropped when time runs short, which is why the Won't-have list is the most valuable part.",
    bodyHtml: "<h2>The four buckets</h2>\n<p><strong>Must have</strong> — the release is not viable without it. The honest test: would you delay the launch rather than ship without this? If not, it isn&#39;t a Must.</p>\n<p><strong>Should have</strong> — painful to omit, but the release still works. These are the first things to go when the date holds and the estimate doesn&#39;t.</p>\n<p><strong>Could have</strong> — nice, low cost, cut without ceremony.</p>\n<p><strong>Won&#39;t have (this time)</strong> — explicitly out of scope, and explicitly <em>this time</em>. This is the category that does the actual work, because it converts an unspoken assumption into a written decision that stakeholders have seen.</p>\n<h2>Why it belongs to fixed deadlines</h2>\n<p>MoSCoW comes from timeboxed delivery. The assumption is that the date is immovable and scope is the variable, so the framework&#39;s purpose is to agree the order of sacrifice <em>before</em> you&#39;re under pressure. Deciding what to cut at 11pm two days before a launch is how teams cut the wrong thing.</p>\n<p>That also explains why it&#39;s a poor roadmap tool. It has no notion of value per effort and no way to compare two Must-haves, so a backlog sorted into MoSCoW is barely sorted at all.</p>\n<h2>The failure everyone hits</h2>\n<p>Everything becomes a Must have. It happens because Should-have reads as &quot;unimportant&quot; to whoever requested it, and nobody wants their feature demoted in a room. Two defences: cap Musts by effort share, and require a named consequence for each — what specifically breaks if this ships without it. Requirements that can&#39;t produce a concrete consequence aren&#39;t Musts.</p>\n<p>Jira&#39;s long accumulation of configurability is what a decade of unchecked Must-haves looks like: every one defensible in isolation, and collectively a product that needs a consultant. Linear&#39;s constraint is the same lesson run in reverse.</p>\n",
    category: "Prioritisation",
    metaTitle: "What Is MoSCoW Prioritisation? The Four Categories Explained",
    metaDescription: "Must, Should, Could, Won't. How MoSCoW works, why it suits fixed deadlines rather than roadmaps, and the failure mode where everything becomes a Must have.",
    keywords: [
      "MoSCoW prioritisation",
      "MoSCoW method",
      "must should could wont",
      "requirements prioritisation"
    ],
    accentColor: "#26A69A",
    relatedCaseStudyIds: [
      "cs-50",
      "cs-73"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "What does the 'o' in MoSCoW stand for?",
        answer: "Nothing — the lowercase o's are filler to make the acronym pronounceable. The four real categories are Must have, Should have, Could have and Won't have this time."
      },
      {
        question: "How many requirements should be Must haves?",
        answer: "A common guideline is no more than 60% of total effort. Beyond that the categorisation has stopped discriminating, and you've relabelled the backlog rather than prioritised it."
      },
      {
        question: "Is MoSCoW better than story points or RICE?",
        answer: "They answer different questions. MoSCoW asks what's droppable within one fixed release; RICE asks what's most valuable across an open-ended backlog. Teams shipping to a hard date use MoSCoW; teams choosing what to work on next quarter use something else."
      }
    ],
  },
  {
    slug: "what-is-network-effects",
    question: "What are network effects?",
    shortAnswer: "A network effect exists when a product becomes more valuable to each user as more people use it. It's the strongest form of defensibility because the advantage grows with scale, but many claimed network effects are actually local, weak, or just economies of scale wearing a better name.",
    bodyHtml: "<h2>The types</h2>\n<p><strong>Direct</strong> — each additional user makes the product better for existing ones. Messaging and social products.</p>\n<p><strong>Indirect (two-sided)</strong> — more users on one side attract the other. Marketplaces, app stores, payment networks.</p>\n<p><strong>Data</strong> — usage produces data that improves the experience for everyone. Google Maps is the canonical version: reports, corrections and traffic patterns accumulated over years into something no competitor can replicate by spending money.</p>\n<h2>Density beats size</h2>\n<p>A network of ten million users spread thinly across the world can be weaker than one hundred thousand concentrated in a single city or profession. Value comes from overlap with the people you actually want to reach.</p>\n<p>This is why local networks get attacked successfully. A ride-hailing incumbent with global scale still competes city by city, because a rider in one city gains nothing from drivers in another. Challengers who understood this beat incumbents that looked unassailable on aggregate numbers.</p>\n<h2>Roblox and the developer side</h2>\n<p>Roblox&#39;s network is indirect and unusually strong: creators build the games, players attract creators, creators attract players, and the company builds almost none of the content itself. The platform&#39;s job is tooling and economics, and the flywheel does the rest.</p>\n<p>The lesson generalises to the cold start problem — Roblox had to make creation worthwhile before the audience existed, which is the standard sequencing for two-sided networks. Solve the harder side first, usually with subsidy or manual effort.</p>\n<h2>The honest test</h2>\n<p>If you claim a network effect, name the specific mechanism by which user 1,001 makes the product better for user 12. If you can&#39;t state it in one sentence, you probably have scale advantages — real, useful, and much easier to compete with.</p>\n",
    category: "Growth",
    metaTitle: "What Are Network Effects? Types, Strength and False Claims",
    metaDescription: "Direct, indirect and data network effects explained, why local networks are attackable, and how to tell a genuine network effect from ordinary scale advantages.",
    keywords: [
      "network effects",
      "types of network effects",
      "direct vs indirect network effects",
      "marketplace network effects"
    ],
    accentColor: "#0F9D58",
    relatedCaseStudyIds: [
      "cs-26",
      "cs-78"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "What is a data network effect?",
        answer: "Usage generates data that improves the product, which attracts more usage. It's real but often weaker than claimed, because most models hit diminishing returns — the thousandth data point matters far less than the tenth, and a competitor doesn't need parity to be good enough."
      },
      {
        question: "What is the cold start problem?",
        answer: "A product with network effects has little value at zero users, so early adopters have no reason to join. Solutions usually involve narrowing to a single dense segment, providing standalone value before the network exists, or seeding one side of a marketplace manually."
      },
      {
        question: "Are network effects always defensible?",
        answer: "No. Local networks can be attacked market by market, multi-homing lets users belong to several networks at once, and networks with low switching costs can tip quickly to a rival. Strength depends on density, switching cost and geography, not on the label."
      }
    ],
  },
  {
    slug: "what-is-platform-risk",
    question: "What is platform risk?",
    shortAnswer: "Platform risk is the exposure a business carries when a critical part of its product, distribution or economics depends on a platform it doesn't control. The platform can change terms, absorb your feature, or cut access — and historically all three happen, usually at the worst moment.",
    bodyHtml: "<h2>Three ways it materialises</h2>\n<p><strong>Terms change.</strong> Pricing, rate limits or data access shift, and margins that worked stop working. You have no vote.</p>\n<p><strong>The platform absorbs you.</strong> Your product becomes a feature of theirs. This is the most common outcome for successful add-ons: succeeding visibly on someone else&#39;s platform is a demonstration that the capability is worth building natively.</p>\n<p><strong>Access is cut.</strong> Rare, sudden, and terminal for anyone without an alternative channel.</p>\n<h2>The AI-era version</h2>\n<p>Companies built as a thin layer over a foundation model have run into all three at speed. When the model provider ships the capability natively, the wrapper&#39;s differentiation evaporates in a single release note — and the customers were never really the wrapper&#39;s to keep.</p>\n<p>The teams that survived it generally had something the platform didn&#39;t: proprietary workflow, industry-specific data, deep integrations into systems the platform had no interest in touching. The model was an input to their product rather than the product.</p>\n<h2>The other direction</h2>\n<p>Myspace&#39;s decline is usually told as a design story, but the platform dimension matters: Facebook opened to developers and let others build on top, accumulating an ecosystem with reasons to stay, while Myspace kept the surface closed. Being the platform is the structural answer to platform risk, and it&#39;s available to fewer companies than would like it.</p>\n<h2>What to do about it</h2>\n<p>Assume the platform will eventually compete with you, and ask what remains when it does. If the answer is &quot;our brand and our speed&quot;, that&#39;s thin. If it&#39;s &quot;the data we&#39;ve accumulated and the workflow we own end to end&quot;, the platform becomes a supplier rather than a landlord.</p>\n",
    category: "Strategy",
    metaTitle: "What Is Platform Risk? How to Recognise and Reduce It",
    metaDescription: "When your product depends on a platform you don't own, its roadmap becomes your risk. How to assess exposure, and what happened to companies built on someone else's layer.",
    keywords: [
      "platform risk",
      "API dependency risk",
      "building on someone else's platform",
      "wrapper startup risk"
    ],
    accentColor: "#F3123C",
    relatedCaseStudyIds: [
      "cs-fm-shipped-26",
      "cs-44"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "How do you reduce platform risk?",
        answer: "Own the customer relationship and the data, keep an abstraction layer between your product and the platform's API, and build at least one distribution channel that doesn't depend on it. None of these eliminate the risk; they shorten your recovery time."
      },
      {
        question: "Is building on an LLM API platform risk?",
        answer: "Yes, and a particularly sharp version — the model provider can ship your core feature as a native capability, and often does. The defensible layer tends to be the workflow, the proprietary data and the integrations around the model, not the model call itself."
      },
      {
        question: "Does platform risk apply to app stores?",
        answer: "Very much so. Store policy changes, fee structures and review decisions can alter unit economics or remove distribution outright, with no negotiation and limited appeal."
      }
    ],
  },
  {
    slug: "what-is-product-led-growth",
    question: "What is product-led growth (PLG)?",
    shortAnswer: "Product-led growth is a go-to-market model where the product itself drives acquisition, conversion and expansion — users try it before talking to anyone, and often before their employer knows. It works when time-to-value is short enough that a person can succeed alone, and fails badly when it isn't.",
    bodyHtml: "<h2>The mechanism</h2>\n<p>In a sales-led motion, a buyer is convinced and then the product is deployed. In PLG the order reverses: a user succeeds with the product, and the purchase ratifies something that already happened.</p>\n<p>That inversion has consequences everywhere. Onboarding becomes the sales pitch. Documentation becomes marketing. The free tier is a customer acquisition channel with a real cost, not a discount.</p>\n<h2>What it requires</h2>\n<p><strong>Fast time-to-value.</strong> Figma&#39;s decisive advantage was opening a design file from a link, in a browser, with no install and no licence. That removed the entire evaluation apparatus that competitors depended on.</p>\n<p><strong>Individual utility.</strong> The product must be useful to one person before it&#39;s useful to a team. Calendly is the pure case — a single user gets full value immediately, and every meeting they book exposes the product to someone new.</p>\n<p><strong>Natural expansion.</strong> Slack spread by being more useful with each colleague added, so growth within an account happened without anyone selling it.</p>\n<h2>Where it breaks</h2>\n<p>PLG fails when value is gated behind setup. If a customer needs data migrated, permissions modelled and three teams trained before anything works, no free trial will demonstrate value — the trial expires during configuration, and the buyer concludes the product doesn&#39;t work.</p>\n<p>It also strains at the enterprise boundary. Bottom-up adoption creates security reviews, procurement and compliance requirements that a self-serve motion isn&#39;t built for, which is why nearly every PLG company eventually builds a sales team it once claimed not to need.</p>\n<h2>The honest framing</h2>\n<p>PLG isn&#39;t a superior strategy, it&#39;s a fit question. The right test: can one person, alone, get real value in a single sitting? If yes, PLG is probably cheaper than sales. If no, adopting it anyway just means acquiring users who never activate.</p>\n",
    category: "Growth",
    metaTitle: "What Is Product-Led Growth? How PLG Works and When It Doesn't",
    metaDescription: "PLG makes the product the primary go-to-market channel. The conditions it requires, why bottom-up adoption beats demos for some products, and where sales-led still wins.",
    keywords: [
      "product led growth",
      "what is PLG",
      "bottom up SaaS",
      "PLG vs sales led"
    ],
    accentColor: "#0F9D58",
    relatedCaseStudyIds: [
      "cs-6",
      "cs-2",
      "cs-82"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "Does PLG mean you don't need a sales team?",
        answer: "No. Most successful PLG companies add sales for larger accounts — the product creates qualified demand and sales converts it into enterprise contracts. What changes is the sequence: the product does the convincing before a salesperson is involved."
      },
      {
        question: "What kinds of product don't suit PLG?",
        answer: "Products where value requires configuration, data migration, procurement approval or several people cooperating before anything works. If a single user can't get a meaningful outcome in one session alone, the model's core assumption is broken."
      },
      {
        question: "What metrics matter most in PLG?",
        answer: "Time-to-value, activation rate, free-to-paid conversion, and expansion within accounts. Traditional pipeline metrics arrive too late to steer anything, because the important part of the funnel happened before any human contact."
      }
    ],
  },
  {
    slug: "what-is-product-market-fit",
    question: "What is product-market fit?",
    shortAnswer: "Product-market fit is the point where a market pulls your product out of you faster than you can supply it. It shows up as retention that flattens instead of decaying, users who complain when it breaks, and sales that get easier. It is a state you observe, not a milestone you declare.",
    bodyHtml: "<h2>What it actually feels like</h2>\n<p>Marc Andreessen&#39;s original description is still the best one: you can always feel when it isn&#39;t happening — customers aren&#39;t getting value, word of mouth isn&#39;t spreading, sales cycles take forever. And you can always feel when it is: usage grows faster than you can add servers, money piles up, you&#39;re hiring as fast as you can.</p>\n<p>The reason this matters is that fit is not subtle. Teams debating whether they have it almost never do.</p>\n<h2>Measure it, don&#39;t sense it</h2>\n<p><strong>The retention curve.</strong> Plot each cohort&#39;s usage over months. Three shapes exist: decay to zero (no fit), decay then flatten (fit within a segment), and the smile curve where usage climbs back (strong fit and expanding value). A flattening curve means a stable set of people for whom the product is now infrastructure.</p>\n<p><strong>The 40% test.</strong> Ask users how they&#39;d feel if they could no longer use the product. Superhuman built an entire product process around this question — segmenting to the users who said &quot;very disappointed&quot;, ignoring the rest, and building exclusively for the segment that already loved it. That is the useful move: fit is found in a segment first, not in an average.</p>\n<h2>Why teams fake it</h2>\n<p>Because the alternative is admitting a year was wrong. Quibi launched with $1.75 billion, a full content slate and a fully-built product, and no evidence that anyone wanted premium short-form video on a phone-only app. Fit was assumed at the funding stage and tested at the launch stage, which is the most expensive possible ordering.</p>\n<p>Slack, by contrast, found fit sideways — the internal chat tool built for a failing game company turned out to be the product. That only happens if you&#39;re watching what people actually use rather than what you planned to sell.</p>\n",
    category: "Metrics",
    metaTitle: "What Is Product-Market Fit? How to Measure It and Know You Have It",
    metaDescription: "Product-market fit is a market pulling product out of you. How to measure it with retention curves and the 40% test, why teams fake it, and what Slack, Superhuman and Quibi show.",
    keywords: [
      "product market fit",
      "what is product market fit",
      "how to measure product market fit",
      "PMF"
    ],
    accentColor: "#EA580C",
    relatedCaseStudyIds: [
      "cs-35",
      "cs-2",
      "cs-40"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "How do you measure product-market fit?",
        answer: "Two common methods. The retention curve test: plot cohort retention over time and look for it flattening rather than decaying to zero — a flat line means a durable set of users. The Sean Ellis survey: ask users how they would feel if they could no longer use the product; above roughly 40% answering 'very disappointed' is the usual threshold."
      },
      {
        question: "Can you lose product-market fit?",
        answer: "Yes, and it happens more often than teams expect. The market moves, a competitor resets expectations, or a platform shift changes how people work. BlackBerry had extraordinary fit with enterprise email and lost it in about three years without changing its product at all."
      },
      {
        question: "Is product-market fit binary?",
        answer: "In practice it's closer to a gradient, but treating it as binary is more useful. Teams that describe themselves as having 'some' fit are usually rationalising weak retention, and the honest question is whether a specific segment loves it enough to be upset if it disappeared."
      }
    ],
  },
  {
    slug: "what-is-programmatic-seo",
    question: "What is programmatic SEO?",
    shortAnswer: "Programmatic SEO generates large numbers of landing pages from a structured dataset, each targeting a specific long-tail query. It works when you own data that genuinely answers those queries, and fails as thin-content spam when the pages are templates with the nouns swapped.",
    bodyHtml: "<h2>The pattern</h2>\n<p>Take a dataset with two or three dimensions — city × property type, app × app, role × skill — and generate a page per meaningful combination. Each targets a query too specific for anyone to write by hand, and collectively they capture enormous long-tail volume.</p>\n<p>Airbnb&#39;s version covers destinations, neighbourhoods and property types. Each page is backed by real listings, real prices and real availability, which is what separates it from a template farm: the data is the product, and the page is a view onto it.</p>\n<p>Zapier&#39;s integration pages follow the same logic — one page per app pairing, each answering a question somebody genuinely typed, with the actual connection available at the end of it.</p>\n<h2>What makes it work</h2>\n<p><strong>Unique data per page.</strong> If the only difference between two pages is a city name in the heading, you&#39;ve built a doorway page.</p>\n<p><strong>Real search demand.</strong> Validate that people search these combinations before generating them. Most dimension crosses produce combinations nobody has ever looked for.</p>\n<p><strong>Something to do on arrival.</strong> The page should complete the user&#39;s task, not funnel them into a search box to start over.</p>\n<p><strong>Quality gates.</strong> Suppress combinations with insufficient data. A page for a city with two listings is worse than no page — it teaches Google your pages are unreliable.</p>\n<h2>The failure mode</h2>\n<p>Sites generate the full cross product, publish 50,000 near-identical pages, watch indexing collapse, and conclude programmatic SEO doesn&#39;t work. What didn&#39;t work was publishing pages with nothing on them.</p>\n<p>The discipline is subtractive: generate everything you can, then aggressively suppress the pages that don&#39;t stand alone. What&#39;s left is smaller, better, and actually gets indexed.</p>\n",
    category: "Growth",
    metaTitle: "What Is Programmatic SEO? When It Works and When It's Spam",
    metaDescription: "Generating thousands of pages from structured data. The conditions that make it work, the thin-content line, and how Airbnb and Zapier built enormous programmatic footprints.",
    keywords: [
      "programmatic SEO",
      "pSEO",
      "scaled content SEO",
      "long tail SEO strategy"
    ],
    accentColor: "#0F9D58",
    relatedCaseStudyIds: [
      "cs-71",
      "cs-145"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "Is programmatic SEO against Google's guidelines?",
        answer: "Not inherently. Google's policies target scaled content produced primarily to manipulate rankings without adding value. Pages generated from real data that genuinely answer a query are fine; templates with substituted keywords and no substance are precisely what the policies address."
      },
      {
        question: "How many pages do you need?",
        answer: "However many real query variations your data supports. The number is an output of the dataset, not a target — deciding to publish 10,000 pages and then finding data to fill them is how sites end up penalised."
      },
      {
        question: "What makes a programmatic page thin?",
        answer: "If a user landing on it can't get their answer without going elsewhere, it's thin regardless of word count. The test is utility on arrival, not length."
      }
    ],
  },
  {
    slug: "what-is-rag",
    question: "What is RAG (retrieval-augmented generation)?",
    shortAnswer: "RAG retrieves relevant documents from your own data and puts them in the model's context before it answers, so responses are grounded in your sources rather than only in training data. It's the standard way to make a general model answer accurately about specific, private or recent information.",
    bodyHtml: "<h2>The pipeline in plain terms</h2>\n<p>Documents are split into chunks and converted into embeddings — numeric representations of meaning — then stored in a vector index. At query time, the question is embedded too, the closest chunks are retrieved, and those chunks are inserted into the prompt with an instruction to answer using them.</p>\n<p>The model doesn&#39;t learn anything. It&#39;s being handed the reference material at the moment it answers.</p>\n<h2>Why it became the default</h2>\n<p>Three practical reasons. <strong>Freshness</strong> — update a document and the next answer reflects it, with no retraining. <strong>Attribution</strong> — you know which sources were used, so the answer can cite them, which matters enormously for trust. <strong>Access control</strong> — retrieval can respect permissions, so users only get answers from documents they&#39;re allowed to see.</p>\n<p>That last one is why RAG dominates enterprise deployments. A fine-tuned model has no notion of who is asking.</p>\n<h2>Where it actually breaks</h2>\n<p>Retrieval quality, almost always. If chunks are too small, the answer is split across several and none looks relevant. If too large, the useful sentence is diluted. Pure semantic search misses exact identifiers — part numbers, error codes, names — which is why hybrid search combining keyword and vector retrieval outperforms either alone in most production systems.</p>\n<p>The second failure is confident synthesis from partial context. Given three chunks that don&#39;t contain the answer, a model will often produce a plausible one anyway. Instructing it to say when the sources are insufficient helps, and evaluating on questions your corpus can&#39;t answer is the only way to know whether it&#39;s working.</p>\n<h2>The product framing</h2>\n<p>RAG is a search product with a language model on the end. Teams that treat it as a model problem tune prompts for weeks; teams that treat it as a search problem fix retrieval and watch the answers improve.</p>\n",
    category: "AI",
    metaTitle: "What Is RAG? Retrieval-Augmented Generation Explained",
    metaDescription: "How RAG grounds model output in your own documents, the retrieval pipeline in plain terms, where it fails, and how it compares to fine-tuning and long context.",
    keywords: [
      "what is RAG",
      "retrieval augmented generation",
      "RAG vs fine tuning",
      "grounding LLM"
    ],
    accentColor: "#2563EB",
    relatedCaseStudyIds: [
      "cs-claude-5-26",
      "cs-fm-shipped-26"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "Is RAG better than fine-tuning?",
        answer: "They solve different problems. RAG supplies knowledge the model doesn't have and can be updated instantly by changing the documents. Fine-tuning shapes behaviour, format and style. Teams needing current or private facts usually want RAG; teams needing consistent output shape usually want fine-tuning."
      },
      {
        question: "Does a long context window make RAG unnecessary?",
        answer: "Not for most real corpora. Large context windows reduce the need for aggressive chunking, but stuffing a million documents into every request is slow and expensive, and models still attend unevenly across very long inputs. Retrieval remains the way to send the right ten pages instead of all of them."
      },
      {
        question: "Why does RAG return wrong answers even with the right documents available?",
        answer: "Usually retrieval, not generation. If the chunk containing the answer never enters the context, the model cannot use it. Most RAG debugging is really search debugging — chunking strategy, embeddings, and whether keyword and semantic search are combined."
      }
    ],
  },
  {
    slug: "what-is-the-innovators-dilemma",
    question: "What is the innovator's dilemma?",
    shortAnswer: "The innovator's dilemma is that well-run companies fail by doing exactly what good management prescribes — listening to their best customers, protecting margins, and investing in proven markets. Those behaviours make disruptive entrants look unattractive right up until they're unbeatable.",
    bodyHtml: "<h2>The uncomfortable part</h2>\n<p>The dilemma isn&#39;t that incumbents are complacent. It&#39;s that they&#39;re disciplined. A disruptive product arrives with worse performance, lower margins and a tiny market. Every serious framework a good company uses — customer research, margin analysis, portfolio management — correctly recommends ignoring it.</p>\n<p>Then the entrant improves along the dimension the incumbent&#39;s customers care about, and the decision that was right at every step turns out to have been fatal in aggregate.</p>\n<h2>What Kodak and BlackBerry actually show</h2>\n<p>The popular version of Kodak — the company that missed digital — is wrong. Kodak built one of the first digital cameras and spent heavily on the technology. What it couldn&#39;t do was escape a model where film and processing generated the margins, and a retail network organised entirely around that flow. Structure, not foresight, was the trap.</p>\n<p>BlackBerry is the cleaner case of customer-listening as a failure mode. Its enterprise customers genuinely preferred the physical keyboard, security and battery life. Listening to them was correct by every conventional measure, and it produced a several-year delay in accepting the touchscreen era, by which point the platform advantage had moved to app ecosystems the company couldn&#39;t rebuild.</p>\n<h2>What it means for a product team</h2>\n<p>Watch the low end you&#39;ve chosen to ignore, and be specific about why you&#39;re ignoring it. &quot;It&#39;s not good enough for our customers&quot; is the exact sentence that precedes every case in the book.</p>\n<p>And notice when your reason for not building something is margin structure rather than customer value. Apple&#39;s willingness to cannibalise the iPod with the iPhone is the counterexample — the decision was available to everyone and taken by almost no one, because it required accepting a worse P&amp;L on purpose.</p>\n",
    category: "Strategy",
    metaTitle: "What Is the Innovator's Dilemma? Why Good Companies Fail",
    metaDescription: "Clayton Christensen's argument that sound management causes incumbent failure. How disruption actually works, and what Kodak and BlackBerry really got wrong.",
    keywords: [
      "innovator's dilemma",
      "disruptive innovation",
      "Clayton Christensen",
      "why incumbents fail"
    ],
    accentColor: "#F3123C",
    relatedCaseStudyIds: [
      "cs-36",
      "cs-bb-touch-4821",
      "cs-37"
    ],
    updatedAt: "2026-09-07",
    faqs: [
      {
        question: "What makes an innovation disruptive rather than just new?",
        answer: "Disruptive innovations start worse on the attributes mainstream customers value, but better on something a fringe segment cares about — usually price, simplicity or accessibility. They improve until they satisfy the mainstream, at which point the incumbent's advantages stop mattering."
      },
      {
        question: "Was Kodak really disrupted by digital?",
        answer: "Not in the simple way it's told. Kodak invented an early digital camera and invested heavily in digital imaging. It was trapped by a business model built on film margins and a distribution network that digital destroyed — a structural problem, not a blindness problem."
      },
      {
        question: "How can an incumbent escape the dilemma?",
        answer: "Usually by giving the disruptive business genuine independence — separate P&L, separate targets, permission to cannibalise. Inside the core business it will always lose resource allocation to higher-margin work, and that allocation logic is the dilemma."
      }
    ],
  },
];

export const isAnswerPublished = (a: Answer, now: Date = new Date()): boolean =>
  !a.publishedAt || new Date(a.publishedAt) <= now;

export const publishedAnswers = (now: Date = new Date()): Answer[] =>
  answers.filter((a) => isAnswerPublished(a, now));

export const getAnswerBySlug = (slug: string): Answer | undefined => {
  const a = answers.find((x) => x.slug === slug);
  return a && isAnswerPublished(a) ? a : undefined;
};

export const answerCategories = (now: Date = new Date()): string[] =>
  Array.from(new Set(publishedAnswers(now).map((a) => a.category))).sort();
