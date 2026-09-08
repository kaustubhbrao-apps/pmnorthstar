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
    slug: "arr-vs-mrr",
    question: "What is the difference between ARR and MRR?",
    shortAnswer: "MRR is monthly recurring revenue — the predictable subscription revenue you bill in a month. ARR is annual recurring revenue, usually just MRR multiplied by twelve. The distinction that matters is not the timeframe but the word recurring: one-off fees, services and usage overages belong in neither, and including them is the most common way these numbers get inflated.",
    bodyHtml: "<h2>The mechanical difference</h2>\n<p>MRR is the sum of recurring subscription revenue normalised to a month. An annual contract of 12,000 contributes 1,000 of MRR, not 12,000 in the month it was signed. ARR is that MRR times twelve.</p>\n<p>Because ARR is derived, the two never disagree. Choosing between them is a matter of contract length: monthly-billing businesses talk in MRR because that is the rhythm of the business, and businesses selling annual enterprise contracts talk in ARR because a single deal would make MRR lurch.</p>\n<h2>What does not belong in either</h2>\n<p>This is the whole game. Recurring means contractually repeating without a new sales decision.</p>\n<ul>\n<li><strong>One-time setup and implementation fees</strong> are not recurring, however reliably new customers pay them.</li>\n<li><strong>Professional services</strong> are not recurring. A services line can be a healthy business — it is just not the thing a revenue multiple is being applied to.</li>\n<li><strong>Hardware</strong> sold alongside a subscription is a one-time sale.</li>\n<li><strong>Usage overages above a committed minimum</strong> are not recurring until they are contracted.</li>\n</ul>\n<p>Every one of these gets quietly folded in when a number needs to look larger, and each makes the resulting figure less predictive of next year.</p>\n<h2>Movement is the informative part</h2>\n<p>A single ARR figure tells you size. The decomposition tells you health, and it has four components: <strong>new</strong> from new customers, <strong>expansion</strong> from existing customers buying more, <strong>contraction</strong> from downgrades, and <strong>churn</strong> from departures.</p>\n<p>Two companies at 10M ARR can be entirely different businesses. One added 4M new and lost 1M — growing but leaking. The other added 1M new and 2M expansion with almost no churn, which is the profile of a product that gets more valuable the longer it is used. Rippling&#39;s compound-startup strategy is essentially a bet on the second shape: sell one product, expand into the rest of the payroll and IT stack inside the same customer.</p>\n<h2>Why the run rate misleads at the edges</h2>\n<p>ARR assumes today&#39;s book repeats. That assumption is weakest exactly when it matters most — right after a large deal lands, right before a large renewal, and in any business with concentrated customers. A company at 10M ARR where one customer is 3M of it does not have 10M of predictable revenue; it has a renewal conversation that decides a third of the company.</p>\n<p>Zoho&#39;s decades of profitable growth without outside capital came from treating recurring revenue as something to be earned every year rather than a number to be maximised for a fundraise.</p>\n",
    category: "Metrics",
    metaTitle: "ARR vs MRR: The Difference and What Belongs in Each",
    metaDescription: "ARR and MRR explained — how each is calculated, why ARR is normally just MRR times twelve, and the revenue types that should never be counted in either.",
    keywords: [
      "ARR vs MRR",
      "annual recurring revenue",
      "monthly recurring revenue",
      "SaaS metrics"
    ],
    accentColor: "#EA580C",
    relatedCaseStudyIds: [
      "cs-68",
      "cs-143",
      "cs-144"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "Is ARR just MRR times 12?",
        answer: "In practice, yes, and that is the standard definition. It is a run rate — what you would earn over the next year if nothing changed — not a forecast and not last year's revenue. Companies that instead sum trailing twelve-month billings are reporting something different and should say so."
      },
      {
        question: "Should usage-based revenue count as ARR?",
        answer: "Only the committed portion. A contract with a guaranteed minimum has a recurring floor that belongs in ARR; consumption above it does not, because it is not contracted to repeat. Counting a peak month of overage as recurring is how a business surprises itself a quarter later."
      },
      {
        question: "What is net revenue retention and why is it quoted alongside ARR?",
        answer: "Net revenue retention measures what happened to a cohort's recurring revenue over a year including expansion, contraction and churn. It is quoted alongside ARR because ARR alone cannot distinguish a company growing through new logos from one growing inside its existing base — and above 100% NRR means the base grows even with no new customers."
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
    slug: "bundling-vs-unbundling",
    question: "What is bundling and unbundling in product strategy?",
    shortAnswer: "Bundling combines several capabilities into one offering; unbundling splits a capability out of an incumbent bundle and does it much better alone. Startups typically unbundle to get a wedge, then re-bundle as they grow — the cycle is real, but the failure mode is unbundling your own product for internal reasons and calling it strategy.",
    bodyHtml: "<h2>The cycle</h2>\n<p>An incumbent assembles many capabilities into a bundle. Because it must serve all of them, none is outstanding. A new entrant picks one, makes it dramatically better, and wins the customers for whom that capability is the point. As the entrant grows, it adds adjacent capabilities and becomes a bundle. Somebody unbundles it.</p>\n<p>This is not a law, but it recurs often enough to be a useful lens on where a market is in its life.</p>\n<h2>Why unbundling works as a wedge</h2>\n<p>Bundles defend with switching costs and integration, not with quality of any single part. That is the seam. A focused product only needs to be better at one thing than a bundle can afford to be — and it usually can be, because the bundle&#39;s roadmap is split across a dozen priorities.</p>\n<p>The entrant&#39;s advantage is not being smarter. It is having a narrower obligation.</p>\n<p>Zoom entered a market with many well-funded conferencing products by being obsessively good at one thing: joining a call working, every time, quickly. Everything else was secondary, and the incumbents could not match the focus because their conferencing was one module inside a suite.</p>\n<h2>Why re-bundling follows</h2>\n<p>Focus that wins a wedge eventually caps it. Once you have most of the customers who care intensely about that one capability, growth means either raising prices or selling more to the same people.</p>\n<p>Rippling&#39;s compound-startup approach makes the re-bundling explicit — payroll, devices, identity and benefits sold as one because the same underlying employee record powers all of them. That is the strong form: the pieces share a substrate and each addition makes the others better.</p>\n<p>The weak form is a set of products sharing only a brand and a bill. Customers detect this quickly, and the bundle discount becomes the only argument for it.</p>\n<h2>The trap: unbundling yourself</h2>\n<p>The cycle describes what a <strong>new entrant</strong> does to an <strong>incumbent&#39;s</strong> bundle. It is not advice to split your own product.</p>\n<p>Foursquare separating check-ins into Swarm is the standard illustration: internally the two use cases were distinct, and to users it meant one habit now required two apps, with the friction landing entirely on the people who liked the product most. The reasoning was sound and the outcome was still bad, because users experience a split as a subtraction.</p>\n<p>Before splitting, ask whether the problem is genuinely that two audiences want different things — or that your own teams want clearer ownership. Only the first is a product reason.</p>\n<h2>Reading a market with the lens</h2>\n<p>Ask what the dominant bundle is, and which part of it customers complain about while continuing to pay. That gap is where a wedge exists. Then ask what makes the bundle sticky — data, workflow, procurement, compliance — because that is what you will eventually have to overcome, and being better at one feature has never been sufficient on its own.</p>\n",
    category: "Strategy",
    metaTitle: "Bundling vs Unbundling: The Strategy Cycle Explained",
    metaDescription: "Bundling and unbundling explained — why startups unbundle to win a wedge, why they re-bundle later, and the difference between market unbundling and splitting your own app.",
    keywords: [
      "bundling vs unbundling",
      "unbundling strategy",
      "product strategy",
      "compound startup"
    ],
    accentColor: "#F3123C",
    relatedCaseStudyIds: [
      "cs-fsq-swarm-14",
      "cs-144",
      "cs-50"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "Why do startups unbundle incumbents?",
        answer: "Because a bundle is a compromise. An incumbent serving many needs cannot make any single one excellent, so a focused entrant can be dramatically better at one part while the incumbent's switching costs and integration are their defence. The wedge is depth in a place the bundle is shallow."
      },
      {
        question: "Why do successful unbundlers re-bundle?",
        answer: "Growth. A single excellent capability eventually saturates its market, and the obvious expansion is adjacent capabilities the same customer already buys. Whether this is genuine value or empire-building depends on whether the pieces reinforce each other or merely share a login."
      },
      {
        question: "Is splitting my app into two apps unbundling?",
        answer: "Rarely in a useful sense. Splitting your own product usually imposes a cost on users who liked the combination in exchange for internal clarity. Foursquare's split into Foursquare and Swarm is the well-known cautionary version."
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
    slug: "fine-tuning-vs-rag",
    question: "Should you fine-tune a model or use RAG?",
    shortAnswer: "Use RAG when the model needs knowledge it does not have — documents, current data, anything that changes. Fine-tune when it needs a behaviour it will not follow reliably from a prompt — a format, a style, a narrow classification task. Knowledge problems are almost always RAG problems, and most teams reach for fine-tuning to solve one and are disappointed.",
    bodyHtml: "<h2>The distinction that decides it</h2>\n<p><strong>RAG adds knowledge.</strong> At request time you retrieve relevant documents and put them in the context, and the model answers from them. Knowledge is external, updatable and citable.</p>\n<p><strong>Fine-tuning adjusts behaviour.</strong> You train on examples so the model reliably produces a particular shape of output — a format, a tone, a classification, a domain convention.</p>\n<p>Almost every question reduces to: is the problem that the model does not know something, or that it does not behave how you want?</p>\n<h2>When RAG is right</h2>\n<ul>\n<li>The information changes. Policies, prices, inventory, docs.</li>\n<li>The information is private and per-customer.</li>\n<li>You need citations. Users need to see where an answer came from, and a fine-tuned model cannot tell you.</li>\n<li>The corpus is large. Retrieval scales with a vector store; training does not scale with corpus size the same way.</li>\n<li>You need to remove something. Deleting a document removes its influence immediately, which matters for correction and for compliance.</li>\n</ul>\n<p>That last point is underrated. A fine-tuned model that learned something wrong requires retraining to unlearn it.</p>\n<h2>When fine-tuning is right</h2>\n<ul>\n<li><strong>Format compliance.</strong> You need exact structured output every time and prompting gets you to 95%.</li>\n<li><strong>A narrow, high-volume classification.</strong> A small fine-tuned model can be far cheaper and faster than a large model with a long prompt.</li>\n<li><strong>A style or voice</strong> that is tedious to specify and easy to demonstrate.</li>\n<li><strong>Latency and cost pressure</strong> where a smaller model, tuned, matches a bigger one prompted.</li>\n<li><strong>Domain convention</strong> — a specialist register that prompting keeps drifting away from.</li>\n</ul>\n<h2>Try prompting properly first</h2>\n<p>A significant share of fine-tuning projects are solving a prompt problem. Before training anything: give clear instructions, provide several examples in context, constrain the output format explicitly, and break the task into steps.</p>\n<p>This is not a fallback — it is the cheapest experiment available, it takes hours instead of weeks, and the resulting prompt is a better specification of what you wanted than the fine-tune would have been.</p>\n<h2>The maintenance difference</h2>\n<p>RAG&#39;s ongoing cost is retrieval quality: chunking, embeddings, ranking, and keeping the index fresh. It is real work, and it is the usual cause of a RAG system that answers fluently and wrongly.</p>\n<p>Fine-tuning&#39;s ongoing cost is that the artefact ages. Base models improve, and a fine-tune on last year&#39;s base is a decision you have to periodically remake. Products that fine-tuned heavily on early foundation models found the ground shifting under them as the base models absorbed the capability they had trained for.</p>\n<p>Start with RAG plus a well-built prompt. Fine-tune when you have a specific, measured behaviour problem that prompting demonstrably cannot fix — and keep evals running either way, because both approaches fail quietly.</p>\n",
    category: "AI",
    metaTitle: "Fine-Tuning vs RAG: Which One and When",
    metaDescription: "Fine-tuning vs retrieval-augmented generation — the knowledge-versus-behaviour distinction, cost and maintenance differences, and when to use both together.",
    keywords: [
      "fine tuning vs RAG",
      "when to fine tune",
      "retrieval augmented generation",
      "LLM application architecture"
    ],
    accentColor: "#2563EB",
    relatedCaseStudyIds: [
      "cs-fm-shipped-26",
      "cs-claude-5-26",
      "cs-mcp-decision-2026"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "Can fine-tuning teach a model new facts?",
        answer: "Poorly and expensively. Fine-tuning adjusts behaviour far more reliably than it installs retrievable knowledge, and facts learned this way cannot be updated without retraining, cannot be cited, and are hard to verify. If the answer depends on a document, retrieve the document."
      },
      {
        question: "Is RAG always cheaper than fine-tuning?",
        answer: "Cheaper to build and to change, but not always cheaper per request — retrieved context makes prompts longer, and long prompts cost tokens and latency on every call. A high-volume, narrow task can be cheaper fine-tuned onto a smaller model."
      },
      {
        question: "Should you use both?",
        answer: "Often, and it is the strongest configuration for mature products: fine-tune a smaller model for the format and behaviour you need, then retrieve the facts at request time. Each mechanism handles what it is good at."
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
    slug: "how-to-build-a-referral-program",
    question: "How do you build a referral program that works?",
    shortAnswer: "Reward both sides, make the reward something that makes your product better rather than cash where possible, and place the ask at the moment of realised value rather than at signup. Most referral programmes fail because they ask too early, reward only the referrer, or attract people motivated by the incentive rather than the product.",
    bodyHtml: "<h2>Reward both sides</h2>\n<p>A one-sided reward asks your user to spend social capital so that you and they benefit and their friend gets nothing. That framing is uncomfortable, and it shows in conversion.</p>\n<p>Two-sided changes the message from I get something if you sign up to here is something for both of us. Dropbox gave storage to referrer and referred alike; PayPal paid both. In both cases the invitation became a gift rather than a solicitation.</p>\n<h2>Make the reward native to the product</h2>\n<p>Cash and gift cards work, in the narrow sense that they produce signups. They also select for people whose motivation is the cash, and those users churn quickly and refer more people like themselves. The programme grows a population that is expensive and worthless at the same time.</p>\n<p>Product-native rewards — more storage, an extra seat, an unlocked capability, extended access — filter for people who want the product. They are usually cheaper for you, and they make the referred user&#39;s first experience better, which raises the chance they refer someone in turn.</p>\n<h2>Time the ask to realised value</h2>\n<p>The single most common design error is asking at signup. The user has not yet decided whether they like the thing you are asking them to recommend.</p>\n<p>Place the ask immediately after a success: a project completed, a file shared, a first payment received, a milestone reached. Calendly&#39;s growth works partly because the ask is structural rather than prompted — every meeting link sent is an exposure at exactly the moment the tool has just been useful.</p>\n<h2>Reward on activation, not on signup</h2>\n<p>Whatever action triggers the payout will be optimised by people who want the payout. Pay on account creation and you will get farmed accounts. Pay on a meaningful action — activation, first transaction, thirty days retained — and the incentive points at the outcome you actually want.</p>\n<p>This also protects the referrer relationship. Nobody wants to be told their friend signed up but the reward is withheld; state the condition plainly up front.</p>\n<h2>Measure the right things</h2>\n<ul>\n<li><strong>Share of new users from referral</strong>, not the raw referral count.</li>\n<li><strong>Retention of referred users versus other channels.</strong> Referred users often retain better; if yours retain worse, the incentive is attracting the wrong people.</li>\n<li><strong>Cost per activated referred user</strong>, compared against your other channels. A referral programme is an acquisition channel and should be judged against the alternatives.</li>\n<li><strong>Participation rate.</strong> If 2% of users ever refer anyone, the problem is the ask or the timing, not the reward size.</li>\n</ul>\n<h2>When not to build one</h2>\n<p>If your retention curve does not flatten, a referral programme accelerates the leak. Referral amplifies whatever the product already does — it makes a good product spread and a mediocre one reach its ceiling faster while burning goodwill.</p>\n<p>Fix retention first. A programme launched on a product people quietly abandon converts the most valuable thing you have, your users&#39; willingness to vouch for you, into nothing.</p>\n",
    category: "Growth",
    metaTitle: "How to Build a Referral Program That Actually Works",
    metaDescription: "Referral programme design — two-sided rewards, product-native incentives, timing the ask, and the fraud and quality problems that sink programmes that grow too fast.",
    keywords: [
      "referral program",
      "how to build a referral program",
      "two sided referral",
      "growth"
    ],
    accentColor: "#0F9D58",
    relatedCaseStudyIds: [
      "cs-11",
      "cs-20",
      "cs-82"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "Should the reward be cash or product credit?",
        answer: "Product credit where it plausibly can be. Cash attracts people motivated by cash, who churn at high rates and refer more of the same. Credit or expanded product capability selects for people who want more of the product, and it makes the referred user's experience better too."
      },
      {
        question: "When should you ask for a referral?",
        answer: "Right after the user has experienced value — a completed project, a successful transaction, a milestone. Asking during onboarding asks someone to vouch for something they have not yet judged, which both converts badly and slightly damages the onboarding."
      },
      {
        question: "How do you stop referral fraud?",
        answer: "Reward on a meaningful action by the referred user rather than on signup — activation, first transaction, or a paid conversion. Anything that pays out on account creation will be farmed, and the incentive will find every gap you left."
      }
    ],
  },
  {
    slug: "how-to-prepare-for-a-pm-interview",
    question: "How do you prepare for a product manager interview?",
    shortAnswer: "Prepare four things: a structured approach to product-sense questions, a way to reason about metrics out loud, two or three of your own stories told in detail, and genuine knowledge of the company's product. Most candidates over-prepare frameworks and under-prepare their own examples, and the examples are what actually differentiate.",
    bodyHtml: "<h2>The question types</h2>\n<p><strong>Product sense.</strong> Design something for someone, improve an existing product, decide between options. Testing whether you think about users before features.</p>\n<p><strong>Analytical / metrics.</strong> A number moved, work out why. Or: what would you measure for this feature. Testing whether you can decompose a metric and reason about causes.</p>\n<p><strong>Execution.</strong> Prioritisation, tradeoffs, what you would cut. Testing judgment under constraint.</p>\n<p><strong>Behavioural.</strong> Your actual past. Testing whether the answers above describe things you have really done.</p>\n<p><strong>Strategy</strong>, at senior levels. Should the company enter this market, how should it respond to a competitor.</p>\n<h2>Structure without recitation</h2>\n<p>You need enough structure to stay organised out loud and not so much that you sound like you are filling in a form. A workable spine for product sense:</p>\n<ol>\n<li>Clarify the goal and constraints. Ask one or two real questions, not five stalling ones.</li>\n<li>Pick a user segment and say why that one.</li>\n<li>Name their problems, then pick the one worth solving.</li>\n<li>Propose two or three genuinely different solutions.</li>\n<li>Choose, with a stated reason.</li>\n<li>Say how you would measure it, and what would tell you that you were wrong.</li>\n</ol>\n<p>Step six is the differentiator. Almost nobody volunteers the conditions under which their idea fails, and it is the most senior thing you can do in an interview.</p>\n<h2>Your stories matter more than your frameworks</h2>\n<p>Prepare two or three situations in genuine detail: the context, what you actually decided, what the tradeoff was, what happened, what you would do differently. Interviewers probe, and stories rehearsed at headline level collapse on the second follow-up question.</p>\n<p>Include one where you were wrong. Candidates avoid these and the avoidance is obvious; a well-told failure with a real lesson is more convincing than another success.</p>\n<p>The most useful preparation is to write the stories out and then delete the parts where you sound blameless.</p>\n<h2>Know the product properly</h2>\n<p>Use it. Sign up, complete the core flow, hit a rough edge. Then form an opinion you can defend about one thing you would change and why — including who it would be worse for, since every change has a loser.</p>\n<p>Candidates who have clearly not used the product are memorable in the wrong way, and the bar here is low enough that clearing it is genuinely differentiating.</p>\n<h2>Reason out loud on metrics questions</h2>\n<p>When asked why a number dropped, resist guessing. Segment it: is it all users or one group, one platform, one geography, one channel. Is it a measurement change or a behaviour change. Is it seasonal.</p>\n<p>Working through the decomposition audibly is the answer. Intercom&#39;s jobs-to-be-done thinking is useful background here — the strongest candidates keep returning to what the user was trying to accomplish rather than to the feature under discussion.</p>\n",
    category: "Role",
    metaTitle: "How to Prepare for a Product Manager Interview",
    metaDescription: "PM interview preparation — the question types you will face, how to structure an answer without sounding robotic, and why your own stories matter more than any framework.",
    keywords: [
      "product manager interview",
      "PM interview preparation",
      "product sense interview",
      "PM interview questions"
    ],
    accentColor: "#DB2777",
    relatedCaseStudyIds: [
      "cs-71",
      "cs-35",
      "cs-46"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "Do I need to memorise frameworks like CIRCLES?",
        answer: "No. Interviewers hear recited frameworks constantly and they signal preparation rather than thinking. Know one structure well enough to keep yourself organised, then let the specific question shape the answer — the structure should be invisible."
      },
      {
        question: "How do I answer product sense questions without a real answer?",
        answer: "There is no right answer; there is visible reasoning. State who you are designing for, what problem they have, two or three options, and why you would pick one — then say what would make you wrong. Interviewers are grading the path, not the destination."
      },
      {
        question: "What if I have no formal PM experience?",
        answer: "Use real situations where you owned an outcome under ambiguity, whatever your title was. A migration you led, a process you changed, a product decision you influenced. Specificity beats title — a vague story from a PM role loses to a detailed one from an engineering role."
      }
    ],
  },
  {
    slug: "how-to-price-a-product",
    question: "How do you price a product?",
    shortAnswer: "Price against the value the customer receives, not against your costs and not against a competitor's list price. Pick a value metric that grows as the customer gets more out of the product, then set the level by testing willingness to pay in the segment you actually want. Most products are underpriced, and the usual cause is founders projecting their own price sensitivity onto buyers.",
    bodyHtml: "<h2>Three approaches, only one of which is usually right</h2>\n<p><strong>Cost-plus</strong> — compute your costs, add a margin. Defensible for commodities and almost meaningless for software, where marginal cost approaches zero and the price would be arbitrary anyway.</p>\n<p><strong>Competitive</strong> — anchor to what similar products charge. Fast, and it hands the most powerful lever in your business to a company whose costs, customers and strategy you do not know.</p>\n<p><strong>Value-based</strong> — price against the value the customer receives. Harder, requires actually understanding your buyer, and is the only one of the three that can capture what you are worth.</p>\n<h2>Structure before level</h2>\n<p>Two decisions, in order.</p>\n<p><strong>The value metric.</strong> What you charge by. The test is whether it rises as the customer gets more value. Seats work when value scales with team size. Transactions work when value scales with volume. A flat monthly fee works when neither varies much, and it caps you at the value of your smallest customer.</p>\n<p>Stripe&#39;s percentage-of-transaction model is the clean case: a customer processing more money is getting more value, and pays proportionally, with no renegotiation and no tier cliff.</p>\n<p><strong>The level.</strong> Once the metric is right, the number is a narrower question — and one you can test.</p>\n<h2>Packaging is where segments get separated</h2>\n<p>Tiers exist to let different segments self-select. The mistake is building tiers around arbitrary feature groupings rather than around what distinct segments actually need.</p>\n<p>Canva&#39;s freemium split works because the free tier delivers genuine value to individuals, and the paid tier is organised around things teams and businesses need — brand consistency, collaboration, asset management. The line falls where the segments naturally divide, so upgrading feels like outgrowing rather than being blocked.</p>\n<p>The failing version withholds something the free tier obviously ought to have. Users experience that as hostility, and it poisons the upgrade rather than motivating it.</p>\n<h2>Why most products are underpriced</h2>\n<p>Founders and PMs anchor on their own willingness to pay, which is systematically lower than that of a business buyer solving an expensive problem. A tool saving a team twenty hours a month is not competing with other tools&#39; prices; it is competing with the cost of twenty hours.</p>\n<p>Zerodha ran the opposite play deliberately — a flat, radically low fee that was a strategic weapon rather than an underestimation, aimed at a segment incumbents could not profitably serve. That works when low price is the strategy. It is very different from a low price arrived at through nervousness.</p>\n<h2>Testing before committing</h2>\n<p>Ask existing customers what they would do at a higher price and you will get a hypothetical. Better signals:</p>\n<ul>\n<li>Raise the price for new customers only and watch conversion, not opinion.</li>\n<li>Offer an annual prepay discount and see who takes it — a proxy for confidence in the product.</li>\n<li>Run price differences by segment or geography where legitimate.</li>\n<li>Watch which tier people actually pick when the middle option changes.</li>\n</ul>\n<p>And revisit it. Pricing set at launch and never touched is pricing set by a company that no longer exists, for a product that has since become more valuable.</p>\n",
    category: "Strategy",
    metaTitle: "How to Price a Product: Value Metric, Level and Packaging",
    metaDescription: "Product pricing explained — cost-plus vs competitive vs value-based, how to choose a value metric that scales with customer value, and why most products are priced too low.",
    keywords: [
      "how to price a product",
      "product pricing strategy",
      "value based pricing",
      "SaaS pricing"
    ],
    accentColor: "#F3123C",
    relatedCaseStudyIds: [
      "cs-53",
      "cs-30",
      "cs-27"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "What is a value metric?",
        answer: "The unit you charge by — seats, transactions, gigabytes, active contacts. A good one rises as the customer gets more value, so their bill grows with their success rather than with an arbitrary tier boundary. Choosing it well matters more than choosing the number."
      },
      {
        question: "Should I match my competitor's price?",
        answer: "Only if you are genuinely interchangeable, in which case you have a positioning problem to fix first. Competitive pricing anchors you to someone else's cost structure and someone else's customers, and it cedes the most important strategic lever you have."
      },
      {
        question: "How do I know if I am underpriced?",
        answer: "Almost nobody objects to price, sales cycles are suspiciously short, and you win deals you expected to lose. A healthy price generates some friction — if no prospect ever pushes back, you are leaving money on the table and probably signalling less value than you deliver."
      }
    ],
  },
  {
    slug: "how-to-run-customer-interviews",
    question: "How do you run a good customer interview?",
    shortAnswer: "Ask about specific past behaviour, not hypothetical futures. Tell me about the last time you had this problem produces evidence; would you use a feature that does X produces politeness. Keep the interview to one story told in detail, resist pitching your idea, and stop talking — the useful material is almost always in the pause you were tempted to fill.",
    bodyHtml: "<h2>The one rule that carries most of the value</h2>\n<p><strong>Ask about the past, not the future.</strong></p>\n<p>Would you use a tool that automatically categorised your expenses? Almost everyone says yes. It costs nothing to agree, the described product sounds pleasant, and the respondent would like to be helpful.</p>\n<p>Tell me about the last time you categorised expenses. Now you get a real story: when it happened, what triggered it, what they used, where they gave up, whether they finished. Buried in that story is whether the problem is frequent enough and painful enough to be worth solving — which is the thing you came to find out and the thing no hypothetical can tell you.</p>\n<h2>Questions that work</h2>\n<ul>\n<li><strong>Tell me about the last time you…</strong> — the opener for almost every interview.</li>\n<li><strong>Walk me through what you did.</strong> Step by step, in order.</li>\n<li><strong>What did you do before that? And after?</strong> The surrounding steps are where unmet needs hide.</li>\n<li><strong>What were you using instead?</strong> Everyone has a current solution, even if it is a spreadsheet, a colleague, or doing nothing.</li>\n<li><strong>How often does that happen?</strong> Frequency separates an annoyance from a business.</li>\n<li><strong>What did you do when that went wrong?</strong> Workarounds are the most reliable signal of real pain — people only build them for problems that matter.</li>\n</ul>\n<h2>Questions to cut</h2>\n<ul>\n<li>Would you use…? and Do you think…? — both are hypotheticals.</li>\n<li>How much would you pay for this? People cannot answer this accurately about a product that does not exist.</li>\n<li>Do you like this idea? Nobody tells a stranger their idea is bad.</li>\n<li>Any question naming your feature before they have described their problem.</li>\n</ul>\n<h2>Recruit for the situation, not the title</h2>\n<p>The most common recruiting mistake is screening on job title. What predicts a useful interview is whether the person is currently in the situation your product addresses. Somebody who wrestled with this problem last month is worth ten people with the right title who have never encountered it.</p>\n<p>Headspace&#39;s early design work targeted a specific struggle — people who wanted to meditate and found existing tools intimidating and faintly embarrassing. That is a situation, and it made a far better screen than any demographic.</p>\n<h2>Handling the urge to pitch</h2>\n<p>You will want to explain what you are building. The moment you do, the interview is over — everything after it is feedback on your idea from someone being nice to you.</p>\n<p>If you must, save it for the last five minutes and mark it in your notes as a separate mode. Everything said after the demo goes in a different bucket from everything said before.</p>\n<h2>Telling a useful interview from a pleasant one</h2>\n<p>A useful interview contains at least one thing you did not expect and did not want to hear. If every conversation confirms your plan, you are either asking leading questions or talking to people who like you. Intercom&#39;s jobs-to-be-done practice earned its reputation by producing exactly those uncomfortable findings — customers repeatedly described hiring the product for a job the team had not designed for.</p>\n",
    category: "Discovery",
    metaTitle: "How to Run a Customer Interview: Questions That Produce Evidence",
    metaDescription: "A practical guide to customer interviews — the past-behaviour rule, questions to avoid, how to handle the urge to pitch, and how to tell a useful interview from a pleasant one.",
    keywords: [
      "customer interviews",
      "how to run customer interviews",
      "user interview questions",
      "product discovery"
    ],
    accentColor: "#9B8FFF",
    relatedCaseStudyIds: [
      "cs-46",
      "cs-33",
      "cs-35"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "How many customer interviews are enough?",
        answer: "For finding obstacles within one segment, five to eight usually surfaces the repeated problems, because obstacles are shared. That number is per segment, not in total — five interviews split across two very different user types is two or three per type, which is anecdote."
      },
      {
        question: "Should I show my product during the interview?",
        answer: "Not in the first half. Once you demo, every subsequent answer is a reaction to your solution rather than a description of their problem, and you lose the part you came for. Ask about their world first, show the product at the end if at all."
      },
      {
        question: "What is the single most common mistake?",
        answer: "Asking would you. Any question about a hypothetical future gets an answer shaped by politeness and optimism, and people are genuinely bad at predicting their own behaviour. Convert every would you into a tell me about the last time you."
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
    slug: "ic-vs-manager-track-for-pms",
    question: "Should a product manager go into management or stay an individual contributor?",
    shortAnswer: "They are different jobs at the same level, not a ladder. Management means your output is your team's output — hiring, coaching, unblocking, allocating. The senior IC track means you keep doing product work on the hardest problems. Choose on which set of daily activities you find energising, not on which sounds more senior.",
    bodyHtml: "<h2>They are different jobs, not sequential ones</h2>\n<p>The framing of management as promotion is a leftover from organisations with no other way to increase someone&#39;s scope. In a company with a genuine principal track, both are ways to have more impact and they require almost disjoint skills.</p>\n<p><strong>Management:</strong> hiring, developing people, allocating work, resolving conflict, representing the team upward, and building the conditions in which other people do good product work. Your output is what your team produces.</p>\n<p><strong>Senior IC:</strong> the hardest, most ambiguous, most cross-cutting product problems. The ones spanning teams, or that nobody has been able to make progress on. Your output is still your own thinking.</p>\n<h2>The honest daily comparison</h2>\n<p>A manager&#39;s day is largely conversations: one-to-ones, hiring loops, calibration, unblocking, stakeholder alignment. Progress is measured in weeks and is mostly other people&#39;s.</p>\n<p>A principal&#39;s day still contains research, analysis, writing and product decisions. The problems are harder and slower, but the feedback loop is direct.</p>\n<p>The choice reduces to something quite personal: does it satisfy you when someone on your team ships something good, roughly as much as when you ship something good yourself? Genuine yes points to management. Reluctant yes usually does not survive contact with the job.</p>\n<h2>What each requires that people underestimate</h2>\n<p><strong>Management</strong> requires tolerating being one step removed, and the specific discomfort of watching someone solve a problem differently — and often more slowly — than you would have, and not taking it back. The instinct to take it back is what makes strong ICs into weak managers.</p>\n<p><strong>Senior IC</strong> requires influence without authority, permanently. You have no reporting line and must move an organisation by argument, evidence and relationships. Reddit&#39;s reliance on volunteer moderators is a structural analogue: enormous influence, no authority, and it works only through credibility.</p>\n<h2>The company question comes first</h2>\n<p>Before choosing, find out whether the IC track is real where you are. Ask what levels exist above principal, who currently holds them, what they work on, and how their compensation compares to directors.</p>\n<p>If the answer is thin, the IC track is aspirational rather than actual, and choosing it means choosing to plateau or to move. That is a legitimate choice, but make it knowingly.</p>\n<h2>Switching is normal</h2>\n<p>People move between the tracks more often than the ladder diagram suggests, and doing so is not a demotion. The version that goes badly is switching by attrition — staying in management long past the point of disliking it because leaving looks like failure.</p>\n<p>Deciding deliberately, and saying plainly that the other work suits you better, costs very little and is generally respected.</p>\n",
    category: "Role",
    metaTitle: "PM Career: IC Track vs Management Track",
    metaDescription: "Choosing between the principal PM track and people management — what each day actually looks like, the honest tradeoffs, and why switching back is easier than people assume.",
    keywords: [
      "IC vs manager track",
      "principal product manager",
      "product management career",
      "should I become a manager"
    ],
    accentColor: "#DB2777",
    relatedCaseStudyIds: [
      "cs-73",
      "cs-22",
      "cs-86"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "Does the IC track cap out lower than management?",
        answer: "At companies with a real principal and distinguished track, no — the levels are matched, and compensation broadly follows. At companies where the senior IC track is a single vaguely defined title, yes in practice. Check what titles actually exist above principal before assuming the track is real."
      },
      {
        question: "Can you switch back from management to IC?",
        answer: "Yes, more easily than most people expect, and it is common enough not to be remarkable. It is worth doing deliberately rather than after burning out, because the framing when you choose it is very different from the framing when it happens to you."
      },
      {
        question: "What is the biggest surprise for new managers?",
        answer: "How little product work is left. The satisfaction of deciding and shipping is replaced by the much slower satisfaction of other people deciding and shipping — sometimes differently from how you would have. People who need the first kind of feedback loop find the change harder than they anticipated."
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
    slug: "ltv-to-cac-ratio",
    question: "What is a good LTV to CAC ratio?",
    shortAnswer: "LTV:CAC compares the gross profit a customer generates over their lifetime to what it cost to acquire them. Around 3:1 is the common benchmark — below 1:1 you lose money on every customer, and far above 3:1 usually means you are underspending on growth rather than winning. The ratio is only as honest as the retention assumption inside LTV.",
    bodyHtml: "<h2>The calculation, and the part everyone fudges</h2>\n<p><strong>CAC</strong> is total sales and marketing spend in a period divided by new customers acquired in that period. Include salaries, not just ad spend — a team of five running content is a real acquisition cost.</p>\n<p><strong>LTV</strong> is average gross profit per customer per period, divided by the churn rate for that period. The division is where the fiction enters. If you have twelve months of data and you divide by a 2% monthly churn rate, you are asserting the average customer stays fifty months — thirty-eight months longer than your product has existed. Early-stage LTV is a projection wearing the costume of a measurement.</p>\n<h2>Why 3:1</h2>\n<p>It is a heuristic, not a law. The logic: at 1:1 you have exactly recovered acquisition cost and funded none of the engineering, overhead or support that made the product exist. Roughly three times gives room for those costs plus margin. Below about 1.5:1 most businesses cannot grow without continuously raising money to fund the gap.</p>\n<p>MoviePass is the cautionary version. Ten dollars a month against customers who saw several twenty-dollar films made the ratio permanently negative, and volume made it worse rather than better — every new subscriber deepened the loss. No amount of growth fixes an inverted ratio, because growth is the thing multiplying it.</p>\n<h2>Ratios lie in three specific ways</h2>\n<p><strong>Blended CAC hides a broken channel.</strong> Averaging cheap organic signups with expensive paid ones produces a comfortable number that conceals a paid channel losing money. Segment by channel or the ratio tells you nothing you can act on.</p>\n<p><strong>Cohort effects get averaged away.</strong> Your first customers were enthusiasts who retained well. Later cohorts, acquired through broader channels, often churn faster. A blended LTV built on early cohorts overstates every customer you will acquire next year.</p>\n<p><strong>A pandemic or a spike gets extrapolated.</strong> Peloton read an extraordinary demand surge as the new baseline, which flattered every forward-looking unit economic it had. The ratio was accurate about a moment and wrong about the future.</p>\n<h2>Using it well</h2>\n<p>Compute it by channel and by cohort, use gross profit, and pair it with payback period. Then treat the number as a decision aid for how much to spend, not as a score. The ratio&#39;s real job is answering one question — should we put more money into this channel — and it answers that well as long as you refuse to average away the segments where the answer is no.</p>\n",
    category: "Metrics",
    metaTitle: "What Is a Good LTV to CAC Ratio? The 3:1 Rule and Its Limits",
    metaDescription: "LTV:CAC explained — how to calculate it, why 3:1 became the benchmark, why a very high ratio is a warning sign, and the assumption that makes most LTV numbers fiction.",
    keywords: [
      "LTV CAC ratio",
      "what is a good LTV to CAC ratio",
      "customer acquisition cost",
      "unit economics"
    ],
    accentColor: "#EA580C",
    relatedCaseStudyIds: [
      "cs-moviepass-17",
      "cs-56",
      "cs-79"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "Should LTV use revenue or gross profit?",
        answer: "Gross profit. Using revenue ignores the cost of serving the customer, which for anything with delivery, hardware, support or heavy infrastructure is the majority of the money. A revenue-based LTV:CAC of 4:1 can be a loss-making business once cost of goods is subtracted."
      },
      {
        question: "Is a 10:1 LTV to CAC ratio good?",
        answer: "Usually it means you are leaving growth on the table. A very high ratio says acquisition is cheap relative to value, and the rational response is to spend more until the ratio compresses toward 3:1. The exception is a company deliberately conserving cash."
      },
      {
        question: "How long should CAC payback take?",
        answer: "Twelve months is the usual target for B2B SaaS, shorter for consumer. Payback period matters more than the ratio when cash is tight, because a 3:1 ratio with a 30-month payback still means you fund every customer for two and a half years before you see the money."
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
    slug: "paid-vs-organic-acquisition",
    question: "Should you focus on paid or organic acquisition?",
    shortAnswer: "Paid buys immediate, controllable volume and stops the moment you stop paying. Organic compounds and cannot be switched on quickly. The honest answer for most companies is paid to learn and organic to grow — use paid channels to find which message and segment works, then build the compounding channel around what you learned.",
    bodyHtml: "<h2>Rent versus own</h2>\n<p><strong>Paid</strong> is rented distribution. You buy attention, and it arrives fast, predictably and in whatever quantity you can afford. You can target precisely and turn it up or down this afternoon. When you stop, it stops entirely — nothing accumulates.</p>\n<p><strong>Organic</strong> is owned distribution. Content, SEO, community, word of mouth, product-led loops. Slow to start, hard to control, and each unit of work keeps returning value long after it was done.</p>\n<p>The comparison is not which is better. It is what each is for.</p>\n<h2>Paid is a research instrument</h2>\n<p>The most valuable use of a small paid budget early on is not the customers it brings. It is what it tells you.</p>\n<p>You control who sees which message, so you can test positioning, segments, price framing and offers in days rather than quarters. Which headline converts, which audience is cheapest to reach, which objection kills the click — all of it is learnable for a few thousand in spend and is exactly what organic channels take six months to reveal.</p>\n<p>Then take the winning message and build the compounding channel around it.</p>\n<h2>Organic compounds and cannot be rushed</h2>\n<p>HubSpot&#39;s inbound approach is the long-form version: build a library that answers what your buyers are searching for, and each article keeps working indefinitely. Zapier&#39;s integration pages and Airbnb&#39;s location pages are the programmatic version, where the content grows with the business rather than with a writing team.</p>\n<p>The catch is timeline. These take months to accumulate authority and traffic, which means the decision to invest has to be made well before the need is urgent. Companies routinely reach for paid precisely at the moment when a channel started a year earlier would be carrying them.</p>\n<h2>The economics diverge over time</h2>\n<p>Paid has a floor set by auction dynamics, and the floor rises as more competitors bid. Your cost per acquisition generally gets worse with scale, not better, because you exhaust the cheapest audiences first.</p>\n<p>Organic has a high fixed cost and a marginal cost that falls. The tenth article is cheaper to produce than the first and benefits from the authority the first nine built.</p>\n<p>This is why paid-only businesses hit a wall: growth requires more spend, spend gets less efficient, and the ratio compresses until it inverts.</p>\n<h2>A workable sequence</h2>\n<ol>\n<li><strong>Learn with paid.</strong> Small budget, structured tests, focused on message and segment.</li>\n<li><strong>Build the owned asset around what worked.</strong> Content, product loops, community.</li>\n<li><strong>Keep paid running where the maths works</strong>, by channel and cohort — not blended.</li>\n<li><strong>Watch the share of new users from owned channels.</strong> If it is not rising over quarters, the compounding asset is not compounding.</li>\n</ol>\n<p>The failure mode on each side is symmetrical. Paid-only businesses have no asset and pay more each year for the same growth. Organic-only businesses are slow and frequently learn the wrong lesson slowly, because they never ran a controlled test of anything.</p>\n",
    category: "Growth",
    metaTitle: "Paid vs Organic Acquisition: How to Choose and Sequence",
    metaDescription: "Paid vs organic acquisition compared — the rent-versus-own distinction, using paid spend as a learning instrument, and the timelines organic channels realistically need.",
    keywords: [
      "paid vs organic acquisition",
      "growth channels",
      "customer acquisition",
      "content marketing vs ads"
    ],
    accentColor: "#0F9D58",
    relatedCaseStudyIds: [
      "cs-18",
      "cs-145",
      "cs-71"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "Is paid acquisition a bad idea for early-stage startups?",
        answer: "Not as a learning instrument. A small, deliberately structured paid budget is the fastest way to test messages and segments, because you control who sees what. It becomes a problem when it is the growth strategy rather than the research method, since it produces no asset."
      },
      {
        question: "How long does organic acquisition take to work?",
        answer: "Months, and often six to twelve before it is a meaningful share of new users. That timeline is the real cost — it has to be started well before you need it, which is why companies reach for paid at exactly the moment organic would have been most valuable."
      },
      {
        question: "Does AI-assistant traffic change this?",
        answer: "It reinforces the organic case and changes the tactics. Assistants cite sources they can read and verify, so structured, self-contained, factually clear content is what gets surfaced. There is no paid slot in that channel yet, which makes the compounding asset harder to substitute for."
      }
    ],
  },
  {
    slug: "pm-career-levels",
    question: "What are the product manager career levels?",
    shortAnswer: "The common ladder runs associate PM, PM, senior PM, then a split into group PM or principal PM, and above that director, VP and CPO. What changes across levels is not the amount of work but the size and ambiguity of the problem you are handed — juniors are given a defined problem, seniors are given an outcome, and leaders are given a market.",
    bodyHtml: "<h2>The ladder</h2>\n<p><strong>Associate PM.</strong> Given a defined problem and often a defined solution. Learning the mechanics — writing specs, running rituals, working with engineering and design. Success is reliable execution.</p>\n<p><strong>Product manager.</strong> Owns a feature area. Given a problem, expected to find the solution. Success is shipping things that move a metric.</p>\n<p><strong>Senior PM.</strong> Owns a substantial area with real business consequences. Given an outcome, expected to work out which problems are worth solving to reach it. Success is judgment — including the things they decided not to build.</p>\n<p><strong>Group PM / principal PM.</strong> The fork. Group PMs manage PMs and own several areas. Principals stay individual contributors and take the hardest, most cross-cutting problems. Same level, different work.</p>\n<p><strong>Director, VP, CPO.</strong> Increasingly about strategy, organisational design and allocation. At this level you are deciding what the product organisation is for, and how many people work on what.</p>\n<h2>What actually changes</h2>\n<p>Not workload. <strong>Ambiguity.</strong></p>\n<p>A junior PM is told the problem. A PM is told the outcome. A senior PM is told the goal and works out which outcomes matter. A director decides which goals the organisation should have.</p>\n<p>This is why the most common promotion failure is doing more of the previous level&#39;s work exceptionally well. Being the fastest executor does not demonstrate you can handle a vaguer brief, and vague briefs are the entire content of the next rung.</p>\n<h2>The IC and management split</h2>\n<p>Linear&#39;s product culture is a useful illustration of the principal archetype at company scale — sustained, opinionated product judgment applied over years, which is a different skill from running a team.</p>\n<p>The two tracks diverge more than titles suggest. A group PM&#39;s output is their team&#39;s output, and their day is spent on hiring, unblocking, coaching and prioritising across people. A principal&#39;s output is still their own thinking, applied to problems nobody else can make progress on. People who are excellent at one are often mediocre at the other, and the ladder exists so that neither is forced into the wrong one to keep progressing.</p>\n<p>Satya Nadella&#39;s turnaround at Microsoft is a leadership-level version: the substantive work was changing what the organisation believed and rewarded, which is not product management in any recognisable form.</p>\n<h2>The uncomfortable part</h2>\n<p>Promotion is gated by available scope. If your company has no larger ambiguous problem to hand you, you can perform perfectly and not be promoted — not unfairness, just an absence of room.</p>\n<p>That is worth knowing early, because the honest options are to create scope where none was assigned, wait for the company to grow into it, or move. The one that does not work is doing the current job harder.</p>\n",
    category: "Role",
    metaTitle: "Product Manager Career Levels Explained",
    metaDescription: "The PM career ladder from APM to CPO — what actually changes at each level, the IC and management split, and why promotion tracks scope of ambiguity rather than output.",
    keywords: [
      "product manager career levels",
      "PM career path",
      "senior product manager",
      "group product manager"
    ],
    accentColor: "#DB2777",
    relatedCaseStudyIds: [
      "cs-22",
      "cs-73",
      "cs-25"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "What is the difference between a senior PM and a group PM?",
        answer: "A senior PM owns a significant product area and is measured on its outcomes. A group PM owns several areas and usually manages other PMs, so their output becomes the team's output rather than their own. It is the first level where the job stops being product work."
      },
      {
        question: "What is a principal PM?",
        answer: "The senior individual-contributor track — equivalent in level to a director but without direct reports. Principals take on the hardest, most ambiguous or most cross-cutting problems, and the role exists so that companies do not force their best product thinkers into management to get promoted."
      },
      {
        question: "How long does each level take?",
        answer: "Two to three years per level is common early on and slows further up, but the honest answer is that it depends far more on whether the company has scope available. You cannot be promoted for handling more ambiguity if nobody has more ambiguity to hand you."
      }
    ],
  },
  {
    slug: "pm-first-90-days",
    question: "What should a product manager do in their first 90 days?",
    shortAnswer: "Spend the first month learning rather than proposing — talk to customers, read support tickets, use the product until you hit its rough edges, and find out how decisions actually get made. Then ship one small useful thing to establish credibility, and only after that propose a direction. New PMs who arrive with a strategy in week two are usually wrong and always resented.",
    bodyHtml: "<h2>Days 1-30: learn, and resist proposing</h2>\n<p><strong>Talk to customers.</strong> Ten conversations in the first month. Not demos — ask about their work and where the product fails them.</p>\n<p><strong>Read support tickets.</strong> A few hundred. It is the least glamorous and highest-yield activity available, and it will contradict at least one thing you were told in onboarding.</p>\n<p><strong>Use the product as a customer.</strong> Sign up fresh, pay if you can, go through the whole flow. Note every point of friction, because in three months you will have stopped noticing them.</p>\n<p><strong>Learn how decisions actually get made.</strong> Not the documented process — the real one. Who has to be convinced, what evidence moves them, where things quietly die.</p>\n<p><strong>Read the graveyard.</strong> Ask what has been tried and abandoned, and why. This is the single best defence against proposing something that failed for a reason still true.</p>\n<h2>Days 31-60: one small useful thing</h2>\n<p>Pick something small, visible and genuinely useful, and ship it. Not a strategic initiative — a fix, a clarification, a piece of friction removed.</p>\n<p>The purpose is credibility. You want the team&#39;s first experience of you to be that things get slightly better, not that there is a new person with opinions. This is also where you learn how the machine actually works: how long a change really takes, where it gets stuck, who has to sign off.</p>\n<p>Choose something the engineers already wanted to do. You get the win and they get the thing they have been asking for.</p>\n<h2>Days 61-90: form a view and say it</h2>\n<p>Now you have earned the right to a direction. Write it down: what you believe the biggest opportunity is, what evidence you have, what you would stop doing to pursue it.</p>\n<p>Include the second part. A proposal that only adds is not a strategy, and the willingness to name what you would drop is what distinguishes a plan from a wish.</p>\n<p>Then socialise it before presenting it. The people who will have to support it should have seen it and had a chance to argue with it in private first.</p>\n<h2>The mistakes that cost the most</h2>\n<p><strong>Arriving with the answer.</strong> Every product has obvious improvements that were tried. Digg&#39;s v4 is the cautionary tale about changing something users depended on without understanding why it was as it was.</p>\n<p><strong>Ignoring the graveyard.</strong> Repeating a failed initiative with fresh enthusiasm is the fastest way to spend all your credibility at once.</p>\n<p><strong>Overcorrecting into pure listening.</strong> Ninety days of learning with nothing shipped reads as passivity. The small win in month two exists to prevent this.</p>\n<p><strong>Rewriting process first.</strong> New PMs often reach for rituals because process is the thing you can change without domain knowledge. It is also the change teams resent most from someone who has not yet been useful.</p>\n",
    category: "Role",
    metaTitle: "A Product Manager's First 90 Days: What to Actually Do",
    metaDescription: "A practical first-90-days plan for product managers — what to learn in month one, why an early small win matters, and the mistakes that cost new PMs their credibility.",
    keywords: [
      "product manager first 90 days",
      "new PM onboarding",
      "first 30 60 90 days PM",
      "starting a new PM role"
    ],
    accentColor: "#DB2777",
    relatedCaseStudyIds: [
      "cs-22",
      "cs-46",
      "cs-36"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "Should I propose changes in my first month?",
        answer: "Rarely. Almost every obvious improvement has been considered and rejected for a reason you do not yet know. Ask why it is this way before proposing it be otherwise — the answer is sometimes a good reason and sometimes an opening, and you cannot tell which without asking."
      },
      {
        question: "What is the fastest way to understand a product I did not build?",
        answer: "Use it as a customer, all the way through, including signup and payment. Then read a few hundred support tickets. Tickets are the cheapest concentrated source of truth about where a product actually fails, and almost nobody reads them."
      },
      {
        question: "How do I build credibility with engineers quickly?",
        answer: "Remove something annoying. Find a piece of process, an ambiguity, or a long-standing small bug that irritates the team and clear it. Credibility with engineering is earned by being useful, not by having a vision."
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
    slug: "surveys-vs-interviews",
    question: "When should you use a survey instead of interviews?",
    shortAnswer: "Interviews tell you what is happening and why; surveys tell you how many. Use interviews when you do not yet know what the options are, and surveys once you do — a survey can only measure the answers you already thought to offer. Running the survey first is the most common and most expensive ordering mistake in product research.",
    bodyHtml: "<h2>The two methods answer different questions</h2>\n<p><strong>Interviews</strong> answer what and why. Where do people get stuck, what were they actually trying to do, what did they try before you. Small samples work because obstacles are shared — if four of six people cannot find the export button, the seventh will not change your mind.</p>\n<p><strong>Surveys</strong> answer how many and how much. What share of users hit this problem, which of these three options is most preferred, how does this differ by segment. They need enough respondents for the differences to exceed the noise.</p>\n<h2>Why the order is nearly always discover, then measure</h2>\n<p>A closed survey question can only return the options you wrote. If you ask why did you cancel and list price, missing features, switched to a competitor and other, you will get a tidy distribution — even when the real answer is that the onboarding email went to spam and half of them never activated. That reason was not on the list, so it appears nowhere, and other is the box people tick on the way out.</p>\n<p>Interviews first tell you what the options are. The survey then tells you how big each one is. Reversed, the survey manufactures a finding out of your own assumptions and hands it back to you with a percentage attached, which is far more persuasive than it deserves to be.</p>\n<h2>When a survey genuinely is the right first move</h2>\n<ul>\n<li>You need to <strong>size</strong> something you already understand well.</li>\n<li>You need to <strong>segment</strong> — the same known question across enough respondents to compare groups.</li>\n<li>You need a <strong>tracked measure</strong> over time, asked identically each period.</li>\n<li>The population is large and geographically spread and you need coverage, not depth.</li>\n</ul>\n<p>Superhuman&#39;s product-market-fit survey is a good example of the format used correctly: one question, asked at scale, tracked over time, on a topic the team already understood qualitatively. The number was a thermometer, not a discovery tool.</p>\n<h2>Writing a survey that does not lie to you</h2>\n<p><strong>Ask about behaviour, not intent.</strong> How many times did you do X last week beats how likely are you to do X.</p>\n<p><strong>One idea per question.</strong> Was the setup fast and easy is two questions and gets one confused answer.</p>\n<p><strong>Avoid leading framings.</strong> How much did our new dashboard improve your workflow assumes the answer.</p>\n<p><strong>Always include an open-text box.</strong> It is the only part of the instrument that can surprise you.</p>\n<p><strong>Watch who answers.</strong> Surveys are answered disproportionately by your most engaged and most annoyed users. The quiet middle, which is usually the majority, is systematically underrepresented, and a survey that ignores this will overstate both enthusiasm and outrage.</p>\n<h2>The combination that works</h2>\n<p>Interview six to eight people in a segment until the same obstacles repeat. Turn those obstacles into survey options. Field the survey to size them. Then go back and interview the group whose answer surprised you.</p>\n<p>That loop is what continuous discovery looks like in practice, and neither method does the job alone.</p>\n",
    category: "Discovery",
    metaTitle: "Surveys vs Interviews: Which Research Method and When",
    metaDescription: "When to use a survey and when to interview — the discover-then-measure sequence, the questions surveys answer badly, and how to write a survey that does not manufacture its own findings.",
    keywords: [
      "surveys vs interviews",
      "qualitative vs quantitative research",
      "user research methods",
      "product research"
    ],
    accentColor: "#9B8FFF",
    relatedCaseStudyIds: [
      "cs-46",
      "cs-35",
      "cs-38"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "Can a survey tell me why users churn?",
        answer: "Only among reasons you listed. If the real cause is not an option, respondents pick the closest available answer and you get a confident, wrong distribution. Interview a handful of churned users first to learn the actual reasons, then survey to size them."
      },
      {
        question: "How many responses does a survey need?",
        answer: "Enough that the differences you care about are larger than the noise, which for most product questions means hundreds rather than dozens. If you only expect thirty responses, you are running an expensive, low-quality interview and should just do interviews."
      },
      {
        question: "Are open-text survey questions a substitute for interviews?",
        answer: "No, but they are the most valuable part of most surveys. They catch the options you failed to anticipate, which is exactly the blind spot closed questions have — treat a surprising open-text theme as a prompt to go interview, not as a finding."
      }
    ],
  },
  {
    slug: "vanity-metrics",
    question: "What are vanity metrics?",
    shortAnswer: "A vanity metric is a number that reliably goes up, looks impressive, and changes no decision. Total registered users, cumulative downloads and pageviews are the classic examples — they only ever increase, so they can never tell you something is wrong. The test is simple: if a metric moving could not change what you do next week, it is vanity.",
    bodyHtml: "<h2>The defining property</h2>\n<p>Vanity metrics are not simply metrics that are wrong. They are metrics that are structurally incapable of delivering bad news.</p>\n<p>Cumulative totals are the purest form. Total downloads since launch, total accounts created, total documents ever uploaded — each rises monotonically regardless of whether the product is thriving or dying. A team watching one of these has built a dashboard that cannot alarm them.</p>\n<p>The second form is the impressive-but-disconnected number: raw traffic for a product with no conversion path, social followers for a business with no acquisition from social, press mentions. Real numbers, genuinely large, attached to nothing.</p>\n<h2>The replacement, metric by metric</h2>\n<table>\n<thead>\n<tr>\n<th>Vanity</th>\n<th>Actionable replacement</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>Total registered users</td>\n<td>Weekly active users, by cohort</td>\n</tr>\n<tr>\n<td>Cumulative downloads</td>\n<td>Activation rate — share reaching first value</td>\n</tr>\n<tr>\n<td>Pageviews</td>\n<td>Conversion rate on the path that matters</td>\n</tr>\n<tr>\n<td>Total revenue to date</td>\n<td>Net revenue retention</td>\n</tr>\n<tr>\n<td>Social followers</td>\n<td>Referral traffic that converts</td>\n</tr>\n<tr>\n<td>Number of features shipped</td>\n<td>Share of users touching each feature</td>\n</tr>\n</tbody></table>\n<p>The pattern: replace a total with a rate, and an aggregate with a cohort.</p>\n<h2>Why smart teams keep them anyway</h2>\n<p>Not stupidity — incentives. Vanity metrics are excellent for fundraising, recruiting and press, all of which are real needs. The failure is not reporting a big cumulative number externally; it is letting that number back inside and steering by it.</p>\n<p>Clubhouse is the clearest case. Downloads, waitlist size and invite scarcity were spectacular and widely reported, and none of them measured whether people came back after the novelty passed. The metrics that would have shown the problem — cohort retention, session frequency — were available the whole time and told a different story than the one everyone was watching.</p>\n<p>MySpace and Evernote both stayed comfortable on totals while the underlying engagement thinned. Totals were still setting records on the way down.</p>\n<h2>The one-line test</h2>\n<p>For every number on your dashboard, ask: <strong>if this doubled, what would we do? If it halved, what would we do?</strong></p>\n<p>Two blanks mean the metric is decoration. Delete it — not because it is false, but because every metric on a dashboard costs attention, and attention spent on a number that cannot change your behaviour is attention not spent on one that can.</p>\n",
    category: "Metrics",
    metaTitle: "Vanity Metrics: What They Are and How to Spot Them",
    metaDescription: "Vanity metrics explained — the cumulative-number trap, the one-question test for spotting them, and the actionable metric to use in place of each common offender.",
    keywords: [
      "vanity metrics",
      "what are vanity metrics",
      "actionable metrics",
      "product analytics"
    ],
    accentColor: "#EA580C",
    relatedCaseStudyIds: [
      "cs-19",
      "cs-40",
      "cs-84"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "Are pageviews always a vanity metric?",
        answer: "For a product, usually. For a media business selling advertising against impressions, pageviews are the revenue driver and entirely legitimate. The metric is not intrinsically vain — it becomes vanity when it is disconnected from the decision it is being used to justify."
      },
      {
        question: "Why are cumulative totals so misleading?",
        answer: "Because they can only go up. A cumulative signup count rises just as smoothly during a month when every single new user churned as during your best month ever. Any metric that cannot fall cannot warn you."
      },
      {
        question: "What is the fastest way to test whether a metric is vanity?",
        answer: "Ask what you would do differently if it doubled, and what you would do differently if it halved. If both answers are nothing, stop reporting it."
      }
    ],
  },
  {
    slug: "vision-vs-strategy-vs-roadmap",
    question: "What is the difference between vision, strategy and roadmap?",
    shortAnswer: "Vision is the future state you are trying to create and rarely changes. Strategy is the choice of how to get there — which means choosing what not to do. Roadmap is the sequence of work implied by the strategy. Most companies that claim to lack a strategy actually have a vision and a roadmap with nothing in between, which is why their roadmap is a wish list.",
    bodyHtml: "<h2>The three layers</h2>\n<p><strong>Vision</strong> describes the world once you have succeeded. It is directional, durable and deliberately not measurable. Anyone should be able to design tools for merchants of every size, or every person has a private financial life that is not sold. Vision answers why this company exists and survives changes of leadership.</p>\n<p><strong>Strategy</strong> is the chosen path. Which customers, which problem, which advantage, and — the load-bearing part — which attractive things you will not do. Strategy is where the actual decisions live.</p>\n<p><strong>Roadmap</strong> is the sequenced consequence. It should be derivable from the strategy: someone who understood the strategy should find most of the roadmap unsurprising.</p>\n<h2>The missing middle</h2>\n<p>The common failure is having layers one and three and nothing between them. The vision is inspiring, the roadmap is full, and no principle connects them — so every stakeholder request is equally admissible, because nothing in writing excludes anything.</p>\n<p>The diagnostic is simple. Take your strategy statement and ask which currently-requested feature it rules out. If the answer is none, you have a description of your ambitions rather than a strategy.</p>\n<p>WhatsApp is the sharpest illustration of the opposite. No ads, no games, no gimmicks was a strategy because it forbade specific, immediately lucrative things. It settled hundreds of roadmap arguments without any of them being escalated, and it cost real money to hold.</p>\n<h2>Strategy is subtraction</h2>\n<p>Shopify&#39;s orientation toward merchants rather than consumers is a strategy in the strict sense: it makes an entire category of consumer-facing opportunity ineligible, however attractive individual examples look. Microsoft&#39;s cloud-first turnaround was a strategy because it demoted the business that had defined the company for two decades.</p>\n<p>Both are choices with a cost. That is how you recognise one.</p>\n<h2>What each layer is for, practically</h2>\n<table>\n<thead>\n<tr>\n<th>Layer</th>\n<th>Answers</th>\n<th>Changes</th>\n<th>Fails when</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>Vision</td>\n<td>Why we exist</td>\n<td>Rarely</td>\n<td>It is a slogan nobody can act on</td>\n</tr>\n<tr>\n<td>Strategy</td>\n<td>How we will win, and what we decline</td>\n<td>Occasionally</td>\n<td>It forbids nothing</td>\n</tr>\n<tr>\n<td>Roadmap</td>\n<td>What we are doing and roughly when</td>\n<td>Continuously</td>\n<td>It is a list of stakeholder requests</td>\n</tr>\n</tbody></table>\n<h2>The test for a roadmap</h2>\n<p>For each item, ask which part of the strategy it serves. Items that answer nothing are either strategy drift or an unwritten strategy the roadmap has been following instead of the stated one — and the second case is worth investigating, because the unwritten one may be the better strategy.</p>\n",
    category: "Strategy",
    metaTitle: "Vision vs Strategy vs Roadmap: The Difference That Matters",
    metaDescription: "Vision, strategy and roadmap explained — what each is for, why the missing middle layer produces a roadmap of unrelated bets, and how to tell a strategy from a slogan.",
    keywords: [
      "vision vs strategy",
      "product strategy vs roadmap",
      "what is product strategy",
      "product vision"
    ],
    accentColor: "#F3123C",
    relatedCaseStudyIds: [
      "cs-25",
      "cs-22",
      "cs-49"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "How do I know if I have a real strategy?",
        answer: "A real strategy implies things you will refuse. If your strategy statement is compatible with every item currently on the roadmap, it is a description, not a choice. The test is whether you can name a genuinely attractive opportunity you are declining because of it."
      },
      {
        question: "How often should each change?",
        answer: "Vision rarely — years. Strategy occasionally, when the market or your position genuinely shifts, which is more like annually than quarterly. Roadmap continuously, as you learn. A strategy that changes every quarter is a series of reactions."
      },
      {
        question: "Should a roadmap have dates?",
        answer: "Near-term work can carry dates because the uncertainty is low. Further out, dates you cannot honour cost more credibility than they buy alignment — use time horizons like now, next and later, and reserve committed dates for things with genuine external deadlines."
      }
    ],
  },
  {
    slug: "what-are-llm-evals",
    question: "What are LLM evals and why do AI products need them?",
    shortAnswer: "Evals are a test suite for model behaviour — a fixed set of inputs with expected properties, run automatically so you can tell whether a prompt, model or retrieval change made things better or worse. They exist because LLM outputs are non-deterministic, so the alternative is a team trying a few examples by hand and forming an impression.",
    bodyHtml: "<h2>Why ordinary tests do not work</h2>\n<p>A conventional test asserts an exact output. Model outputs vary between runs, and two different phrasings can both be correct, so equality assertions either fail constantly or get loosened until they assert nothing.</p>\n<p>Evals replace exact matching with property checking. Does the answer contain the right figure. Does it refuse when it should. Is it grounded in the retrieved documents. Is it under the length limit. Does it avoid the failure mode we saw last month.</p>\n<h2>The main kinds</h2>\n<p><strong>Deterministic checks.</strong> Cheap, fast, unambiguous. Valid JSON, required fields present, no forbidden strings, a specific number appears. Run these first — they catch a surprising share of real failures.</p>\n<p><strong>Reference-based.</strong> Compare against a known good answer, exactly or by similarity. Works when there is a correct answer; useless for open-ended generation.</p>\n<p><strong>LLM-as-judge.</strong> A model scores the output against a written rubric. Necessary for tone, helpfulness, and groundedness. Requires validation — sample the judge&#39;s scores against human labels until you trust the correlation, then re-check periodically.</p>\n<p><strong>Human review.</strong> The most accurate and the least scalable. Reserve it for calibrating the automated layers and for the highest-stakes categories.</p>\n<h2>Building the first set</h2>\n<p>Collect real failures. Every time someone reports a bad output, add the input to the eval set with a note on what was wrong. Within a few weeks you have a suite encoding your product&#39;s actual weaknesses, which is worth more than any generic benchmark.</p>\n<p>Include the boring cases too. Suites made only of adversarial edge cases fail to notice when the model gets worse at the ordinary path most users are on.</p>\n<h2>What evals protect you from</h2>\n<p><strong>Prompt changes that fix one case and break four.</strong> Extremely common, invisible without a suite, and the reason prompt work feels like whack-a-mole.</p>\n<p><strong>Silent model updates.</strong> A provider ships a new version and behaviour shifts. Without evals you find out from users.</p>\n<p><strong>Retrieval regressions.</strong> Someone changes chunking or the embedding model and groundedness quietly degrades while the answers still read fluently — the hardest failure mode to notice by eye.</p>\n<p>The 2026 wave of vibe-coded launches produced a recognisable pattern: products generated quickly, shipped confidently, with no systematic check on whether behaviour held up as they were changed. Evals are the difference between an AI feature you can modify and one you are afraid to touch.</p>\n<h2>The practical minimum</h2>\n<p>A set of real inputs, a mix of deterministic and judged checks, run automatically on every change to prompt, model or retrieval, with results compared to the previous run. Then treat a score drop the way you would treat a failing test — as a blocker, not as a data point to discuss.</p>\n",
    category: "AI",
    metaTitle: "What Are LLM Evals? Testing AI Products That Are Not Deterministic",
    metaDescription: "LLM evals explained — why traditional tests do not work on model outputs, the kinds of eval that exist, how to build a first eval set, and the traps in LLM-as-judge.",
    keywords: [
      "LLM evals",
      "AI evaluation",
      "evaluating LLM outputs",
      "AI product quality"
    ],
    accentColor: "#2563EB",
    relatedCaseStudyIds: [
      "cs-claude-5-26",
      "cs-fm-shipped-26",
      "cs-vibe-2026-442"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "Can you use an LLM to grade another LLM?",
        answer: "Yes, and it is now standard practice for anything subjective, but the judge needs validating against human labels before you trust it. Judges have systematic biases — they favour longer answers, prefer their own model family's style, and drift when the rubric is vague."
      },
      {
        question: "How many examples does an eval set need?",
        answer: "Start with 20 to 50 real cases and grow it every time something goes wrong in production. A small set of genuine failures is far more useful than hundreds of synthetic prompts, because it encodes what actually breaks rather than what you imagined might."
      },
      {
        question: "What is regression testing for prompts?",
        answer: "Running the eval set before and after any change to prompt, model version, or retrieval, and comparing scores. Without it, prompt engineering is a sequence of confident, unverified edits — and model version upgrades silently change behaviour you had come to rely on."
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
    slug: "what-is-a-beta-program",
    question: "How do you run a good beta program?",
    shortAnswer: "A beta exists to answer a specific question before general release — usually does this hold up in real conditions, not do people like it. Recruit for the situation you need represented rather than for enthusiasm, keep the group small enough to talk to individually, set an explicit end date, and decide in advance what result would make you not ship.",
    bodyHtml: "<h2>Start with the question</h2>\n<p>A beta without a question becomes an indefinite early-access tier that nobody can close. Before inviting anyone, write down what you are trying to learn:</p>\n<ul>\n<li>Does it hold up under real data volume and real edge cases?</li>\n<li>Do people reach the core value without hand-holding?</li>\n<li>Does it survive contact with the workflows around it?</li>\n<li>Is the pricing comprehensible?</li>\n</ul>\n<p>Each of these implies a different participant list and a different definition of success. Trying to answer all four at once answers none of them.</p>\n<h2>Recruit against your instinct</h2>\n<p>The people who volunteer loudest are the worst sample. They are tolerant of bugs, motivated to see you succeed, unusually technical, and delighted to be early — the four traits your general population will not have.</p>\n<p>Deliberately include:</p>\n<ul>\n<li>People who evaluated you and chose something else.</li>\n<li>People in the situation your feature addresses, whether or not they are excited about it.</li>\n<li>At least a few who will be annoyed by the change.</li>\n</ul>\n<p>Digg&#39;s v4 rebuild is the case study in getting this wrong. The changes were tested and shipped, and the reaction from the actual power-user base — whose behaviour the redesign disrupted — was severe and immediate. A beta weighted toward people who liked the new direction would have confirmed the plan right up to launch.</p>\n<h2>Keep it small and talk to people</h2>\n<p>The value of a beta is in conversation, not ticket volume. Twenty participants you speak with individually will teach you more than a thousand filing reports, because the thing you most need to learn — what they expected and did not get — rarely arrives as a bug report.</p>\n<p>Watch what they do, not only what they say. Instrument the beta the same way you would instrument production. The gap between reported enthusiasm and actual usage is usually the finding.</p>\n<h2>Set an end date and exit criteria</h2>\n<p>Two things, written before you start:</p>\n<p><strong>An end date.</strong> Betas without one drift into permanent limbo, where the feature is neither supported nor cancelled and nobody may plan around it.</p>\n<p><strong>Exit criteria, including a stop condition.</strong> What result means ship, and what result means do not ship. A beta that can only conclude in shipping is a rollout with extra steps and a research budget attached.</p>\n<h2>Close it honestly</h2>\n<p>Tell participants what you learned and what you decided, including when you decided against something they asked for. Beta participants are the highest-signal group you have, and how you close the loop determines whether they answer next time.</p>\n<p>Headspace&#39;s approach to a nervous, easily-put-off audience is the useful analogy: the design work assumed people would quietly leave rather than complain. In a beta, silence from a participant is data, and it usually means the same thing.</p>\n",
    category: "Discovery",
    metaTitle: "How to Run a Beta Program That Produces Real Answers",
    metaDescription: "Running a product beta — choosing the question, recruiting the right participants, why enthusiasts skew results, and the exit criteria to agree before you start.",
    keywords: [
      "beta program",
      "how to run a beta",
      "product launch",
      "early access program"
    ],
    accentColor: "#9B8FFF",
    relatedCaseStudyIds: [
      "cs-19",
      "cs-36",
      "cs-15"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "How many users should a beta have?",
        answer: "Small enough that you can have a real conversation with every participant — often twenty to fifty. Large betas generate volume of feedback and no understanding of it, and the ticket queue becomes a substitute for talking to anyone."
      },
      {
        question: "Should a beta be open or invite-only?",
        answer: "Invite-only, in almost every case. An open beta self-selects for enthusiasts and people hunting novelty, which is the population least like your eventual users. Invitations let you deliberately include the sceptical and the ordinary."
      },
      {
        question: "What is the difference between a beta and a soft launch?",
        answer: "A beta is a research activity with a question, a defined group and an end date. A soft launch is a release with limited distribution, where the intent is to ship and the limitation is about managing risk. Confusing the two produces a beta that never ends."
      }
    ],
  },
  {
    slug: "what-is-a-context-window",
    question: "What is a context window?",
    shortAnswer: "The context window is the maximum amount of text — measured in tokens — a model can consider at once, covering the system prompt, conversation history, retrieved documents and the response. Larger windows are not automatically better: attention degrades across very long contexts, cost rises with every token, and filling a window is rarely a substitute for retrieving well.",
    bodyHtml: "<h2>What counts toward the limit</h2>\n<p>Everything in the request, plus the response:</p>\n<ul>\n<li>The system prompt.</li>\n<li>Conversation history you replay each turn.</li>\n<li>Retrieved documents.</li>\n<li>Tool definitions and tool results.</li>\n<li>The output the model generates.</li>\n</ul>\n<p>That last one catches people out. A window is shared between input and output, so a request that nearly fills it leaves no room for an answer.</p>\n<h2>Why bigger is not simply better</h2>\n<p><strong>Cost scales with tokens.</strong> Long context is charged on every request. A system that dumps 100,000 tokens of documents into each call has an expensive per-request floor whether or not the extra material was needed.</p>\n<p><strong>Latency scales too.</strong> Time to first token grows with input length, and in an interactive product that is felt directly.</p>\n<p><strong>Attention is uneven.</strong> Recall is strongest at the start and end of a long context and weakest in the middle. A crucial instruction placed in the centre of a very long prompt is genuinely more likely to be missed.</p>\n<p><strong>More context can mean worse answers.</strong> Irrelevant material is a distraction, not neutral filler. Ten relevant paragraphs frequently beat two hundred mixed ones.</p>\n<h2>What this means for product design</h2>\n<p><strong>Retrieve, do not stuff.</strong> The job is finding the right context, not the most. Retrieval quality determines answer quality far more than window size does.</p>\n<p><strong>Manage conversation history deliberately.</strong> Replaying the full transcript every turn grows cost linearly and eventually truncates. Summarise older turns, or keep a structured state and replay only what matters.</p>\n<p><strong>Place important things at the edges.</strong> Instructions at the top, the most relevant retrieved document last, the question at the end.</p>\n<p><strong>Budget the window explicitly.</strong> Decide how many tokens go to system prompt, history, retrieval and response, and enforce it. Systems without a budget fail unpredictably at the worst moment, when a user pastes something large.</p>\n<h2>The trend, and what it does not change</h2>\n<p>Windows have grown by orders of magnitude, and each jump genuinely enables things that were awkward before — whole codebases, long documents, extended agent runs. Anthropic&#39;s and OpenAI&#39;s recent assistant platforms both lean on long context to hold multi-step work together.</p>\n<p>What has not changed is that context is a resource with a price, and that models reason better over well-selected material than over everything you have. Treat the window as a budget to spend carefully, not a container to fill.</p>\n",
    category: "AI",
    metaTitle: "What Is a Context Window? Tokens, Limits and Practical Effects",
    metaDescription: "Context windows explained — what counts toward the limit, why a bigger window is not always better, the lost-in-the-middle problem, and how it shapes AI product design.",
    keywords: [
      "context window",
      "what is a context window",
      "LLM tokens",
      "long context"
    ],
    accentColor: "#2563EB",
    relatedCaseStudyIds: [
      "cs-claude-5-26",
      "cs-openai-dev-26",
      "cs-mcp-decision-2026"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "What is a token?",
        answer: "A chunk of text the model processes as a unit — roughly three quarters of a word in English, though it varies by language and is much less efficient for scripts that are underrepresented in training data. Code and unusual formatting also tokenise less efficiently than plain prose."
      },
      {
        question: "Does a bigger context window remove the need for RAG?",
        answer: "No. Even with a very large window, stuffing an entire corpus in costs tokens on every request, adds latency, and buries the relevant passage among irrelevant ones. Retrieval is about giving the model the right context, not the maximum context."
      },
      {
        question: "What is the lost-in-the-middle problem?",
        answer: "Models attend most reliably to the beginning and end of a long context, and information in the middle is more likely to be overlooked. It means placement matters — put the most important instructions and documents at the edges, not buried in the centre."
      }
    ],
  },
  {
    slug: "what-is-a-growth-loop",
    question: "What is a growth loop and how is it different from a funnel?",
    shortAnswer: "A funnel is linear — traffic enters at the top and some fraction converts, so more growth requires more input. A growth loop is circular: the output of one cycle becomes the input to the next, so each cohort of users produces the next one. Loops compound and funnels do not, which is why loop-driven companies keep growing when they stop spending.",
    bodyHtml: "<h2>The structural difference</h2>\n<p>A <strong>funnel</strong> is a one-way path. Visitors arrive, some sign up, some activate, some pay. It is a conversion machine, and its output is entirely determined by its input. Double the growth means double the traffic, which usually means double the spend.</p>\n<p>A <strong>loop</strong> feeds itself. Each pass produces something that generates the next pass — a new user, a new page, more revenue to reinvest. Growth becomes a function of the existing base rather than of this month&#39;s budget.</p>\n<p>The practical consequence: turn off spend on a funnel business and growth stops immediately. Turn it off on a loop business and growth continues, more slowly.</p>\n<h2>The three common shapes</h2>\n<p><strong>Viral loop.</strong> A user&#39;s normal use of the product exposes another person to it, who signs up, and repeats. Dropbox&#39;s referral programme is the canonical version, though the more important detail is that the reward — storage — made the product better for both parties, so the loop strengthened retention instead of buying signups from people who wanted a gift card.</p>\n<p><strong>Content loop.</strong> Usage generates pages, pages attract search or assistant traffic, that traffic produces users, who generate more pages. Airbnb&#39;s programmatic location pages and Zapier&#39;s integration pages are both this: the catalogue of content grows with the business rather than with a content team&#39;s headcount.</p>\n<p><strong>Paid loop.</strong> Revenue from acquired customers funds acquiring more. It compounds only if payback is fast relative to your cash cycle — otherwise it is a funnel with a financing problem.</p>\n<h2>Why loops are hard</h2>\n<p>They only compound above a threshold. A viral loop where each user brings 0.4 new users does not grow — it decays, just more slowly than no loop at all. Most referral features live in this range, which is why so many exist and so few matter.</p>\n<p>They also take time to show up. A funnel improvement is visible in a week. A loop improvement is visible over several cycles, and the cycle time is itself one of the variables you should be optimising — halving the time from signup to invitation matters as much as raising the invitation rate.</p>\n<h2>Where teams fool themselves</h2>\n<p><strong>Drawing a funnel in a circle.</strong> Adding an invite friends button to the end of onboarding does not create a loop unless invitations actually convert at a meaningful rate and the invited user is themselves likely to invite.</p>\n<p><strong>Ignoring saturation.</strong> Every loop eventually saturates its addressable network. Growth slows not because the loop broke but because the people reachable by it have been reached, and the fix is a new loop, not a tuned old one.</p>\n<p><strong>Rewarding the wrong action.</strong> A loop optimised for signups rather than activated users manufactures accounts that never come back and never propagate. The loop looks healthy in the numerator and is dead in the mechanism.</p>\n<h2>Where to start</h2>\n<p>Pick one loop and make it work. Diagram it explicitly: this action, by this user, produces this artefact, which reaches this person, who becomes a user. Measure each arrow. Most loops fail at exactly one arrow, and it is almost never the one the team assumed.</p>\n",
    category: "Growth",
    metaTitle: "Growth Loops vs Funnels: Why One Compounds and One Does Not",
    metaDescription: "Growth loops explained — the three common loop types, why loops compound where funnels leak, and how to tell whether you have a real loop or a funnel drawn in a circle.",
    keywords: [
      "growth loop",
      "growth loops vs funnels",
      "viral loop",
      "growth strategy"
    ],
    accentColor: "#0F9D58",
    relatedCaseStudyIds: [
      "cs-11",
      "cs-71",
      "cs-145"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "What are the main types of growth loop?",
        answer: "Viral loops, where users bring users directly. Content loops, where user or product activity creates pages that attract search traffic. And paid loops, where revenue from customers funds acquiring more, which compounds only while payback is faster than the cash cycle."
      },
      {
        question: "How do I know if I actually have a loop?",
        answer: "Trace the path from a new user back to the creation of another new user, with no marketing spend in the middle. If you cannot complete the circle without inserting a budget line, you have a funnel with a referral feature attached."
      },
      {
        question: "Can a product have more than one loop?",
        answer: "Yes, and mature companies usually do — a content loop bringing in search traffic and a viral loop inside the product, for instance. The risk is running several weak loops rather than one strong one, since a loop below the compounding threshold is just a feature."
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
    slug: "what-is-a-retention-curve",
    question: "What is a retention curve and what does it mean when it flattens?",
    shortAnswer: "A retention curve plots what percentage of a cohort is still active at each period after signup. It always falls at first — the question is whether it flattens into a horizontal line, which means you have a group of users who keep coming back indefinitely. A curve that keeps declining toward zero means you have no retained base, only a leaky funnel.",
    bodyHtml: "<h2>How to read one</h2>\n<p>Take everyone who signed up in a given week. Plot the share of them still active one week later, two weeks later, and so on. Repeat per cohort. Every curve starts at 100% and falls, because some portion of any signup group was never going to stay.</p>\n<p>The interesting part is what the line does after the initial drop.</p>\n<p><strong>A curve that flattens</strong> means you found a group for whom the product genuinely works. Losses stop at some level and that level is your retained base — every new cohort adds to it. This is what growth compounds on.</p>\n<p><strong>A curve that keeps falling</strong> means you are renting users, not keeping them. Growth is entirely a function of how fast you can pour new signups into the top, and it stops the moment acquisition spend stops.</p>\n<p>The distinction is more important than any single retention percentage, and it is the closest thing to a measurable definition of product-market fit.</p>\n<h2>Why the flattening level matters less than the flattening</h2>\n<p>A curve that flattens at 15% is a real business if the market is large enough. A curve that declines to 40% and keeps declining is not, even though it looks better at every point in the first three months. Teams routinely celebrate the second and worry about the first, because the level is easy to see and the asymptote takes patience.</p>\n<p>Duolingo&#39;s growth is the flattening version taken seriously: the streak, the reminders and the gamification exist to move users into the flat part of the curve, and the company measures daily active learners rather than downloads precisely because downloads say nothing about whether the curve flattens.</p>\n<h2>The three ways teams fool themselves</h2>\n<p><strong>Blending cohorts.</strong> Averaging all users into one number hides that recent cohorts retain worse than early ones — the standard consequence of broadening acquisition. Always look at cohorts separately.</p>\n<p><strong>Choosing a generous definition of active.</strong> If opening an email counts as active, every curve flattens. Define active as the action that delivers the product&#39;s value, then live with the uglier chart.</p>\n<p><strong>Reading a spike as a shape.</strong> A surge of signups from one campaign or one news cycle creates a cohort that behaves nothing like the rest. Evernote&#39;s long decline was visible in cohort behaviour well before it was visible in totals, because the totals kept being topped up.</p>\n<h2>What to do about a curve that will not flatten</h2>\n<p>Look at where users fall off, not at the aggregate. Almost always, retention problems are activation problems in disguise — the users who leave in week one never reached the moment the product becomes useful. Twitter&#39;s suggested-users fix was exactly this: new accounts that followed nobody had nothing to come back to, so the fix was at the start of the curve, not the end.</p>\n",
    category: "Metrics",
    metaTitle: "Retention Curve Explained: Why Flattening Is the Only Thing That Matters",
    metaDescription: "How to read a retention curve, why the flattening point is the real signal of product-market fit, and why a smiling curve is rarer than dashboards suggest.",
    keywords: [
      "retention curve",
      "retention curve flattening",
      "cohort retention",
      "product market fit metric"
    ],
    accentColor: "#EA580C",
    relatedCaseStudyIds: [
      "cs-9",
      "cs-13",
      "cs-40"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "What retention rate is good?",
        answer: "It depends entirely on the natural usage frequency. A daily habit product and a tax filing tool have completely different honest curves, and comparing them is meaningless. The transferable question is not the level but the shape — does the curve flatten, and where."
      },
      {
        question: "What is a smiling retention curve?",
        answer: "A curve that declines, flattens, then rises — because retained users expand their usage or dormant ones return. It is genuinely rare and usually indicates a strong network effect or an expanding use case. Most healthy products flatten without smiling, and that is fine."
      },
      {
        question: "Should I measure retention daily, weekly or monthly?",
        answer: "Match the interval to the product's natural frequency. Measuring a weekly-use product daily manufactures a catastrophic-looking curve, and measuring a daily-habit product monthly hides real decay. Pick the period in which an engaged user would genuinely be expected to return."
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
    slug: "what-is-an-opportunity-solution-tree",
    question: "What is an opportunity solution tree?",
    shortAnswer: "An opportunity solution tree is a visual map connecting one desired outcome to the customer opportunities that could produce it, then to candidate solutions, then to the experiments that would test them. Its purpose is structural: it makes visible whether you are exploring several ways to reach an outcome or have quietly committed to one idea and are now only elaborating it.",
    bodyHtml: "<h2>The four layers</h2>\n<p><strong>Outcome</strong> sits at the root — one measurable change in customer behaviour, not a feature and not a revenue target. Increase the share of new teams that create a second document in week one.</p>\n<p><strong>Opportunities</strong> branch beneath it: the needs, pains and desires that, if addressed, would move that outcome. These come from customer conversations and are phrased in the customer&#39;s terms. They must not name solutions.</p>\n<p><strong>Solutions</strong> branch from each opportunity — several per opportunity, deliberately. One solution under an opportunity is a signal you skipped the divergent step.</p>\n<p><strong>Experiments</strong> hang off the solutions: the cheapest thing that would tell you whether the solution addresses the opportunity.</p>\n<h2>The problem it exists to solve</h2>\n<p>Most teams jump from a vague goal straight to a feature list, then spend the quarter refining the feature list. The tree makes that jump visible, because the missing middle layer is a literal gap in the diagram.</p>\n<p>It also forces a specific discipline: you compare solutions <strong>within</strong> an opportunity, not across the whole backlog. That is a better comparison, because two solutions to the same customer need are genuinely comparable, whereas ranking a billing fix against an onboarding change is mostly guesswork dressed as scoring.</p>\n<p>Intercom&#39;s jobs-to-be-done practice reaches the same place by a different route — describing what the customer was trying to accomplish before proposing what to build, so the eventual feature is one answer among several rather than the only one anyone considered.</p>\n<h2>Three ways teams build a tree that changes nothing</h2>\n<p><strong>Solutions disguised as opportunities.</strong> Add SSO is not an opportunity. The opportunity is that IT administrators cannot enforce access policy, and SSO is one of at least three responses to it. A tree full of feature names has already made every decision it was meant to open up.</p>\n<p><strong>A tree built once.</strong> The value is in updating it as customer conversations arrive. A tree drawn in a workshop and left alone is a diagram of what you believed in January.</p>\n<p><strong>Opportunities invented in the room.</strong> If the opportunities came from the team&#39;s imagination rather than from customers, the tree is a well-structured guess. It needs a real discovery cadence underneath it or it is just organised opinion.</p>\n<h2>What good looks like</h2>\n<p>One outcome. Opportunities phrased as customer needs, each traceable to something a real person said. At least two or three solutions under any opportunity you are actively working. And experiments small enough that being wrong costs a week, not a quarter.</p>\n<p>Shopify&#39;s long-running orientation toward merchants over consumers works like a permanent root node: it settles which opportunities are even eligible for the tree, which is a question no prioritisation framework can answer for you.</p>\n",
    category: "Prioritisation",
    metaTitle: "Opportunity Solution Trees Explained: Structure and Common Mistakes",
    metaDescription: "How an opportunity solution tree works — outcome, opportunities, solutions, experiments — and the three ways teams build one that looks right but changes nothing.",
    keywords: [
      "opportunity solution tree",
      "continuous discovery",
      "Teresa Torres",
      "product discovery framework"
    ],
    accentColor: "#26A69A",
    relatedCaseStudyIds: [
      "cs-46",
      "cs-35",
      "cs-25"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "What is the difference between an opportunity and a solution?",
        answer: "An opportunity is a customer need, pain or desire stated without implying how to address it — people cannot tell which of their files is the newest. A solution is a specific thing you would build. If a node on your tree names a feature, it is a solution sitting in an opportunity slot, and it has already foreclosed the alternatives."
      },
      {
        question: "How does this relate to continuous discovery?",
        answer: "The tree is the artefact continuous discovery produces and updates. Weekly customer conversations feed new opportunities into it, and the tree is what keeps those conversations tied to a specific outcome rather than becoming general research."
      },
      {
        question: "How big should the tree be?",
        answer: "One outcome per tree. Trees with several outcomes at the root become unreadable and, worse, let a team claim progress on whichever outcome happened to move. If you have three outcomes, you have three trees and a prioritisation problem to resolve first."
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
    slug: "what-is-concept-testing",
    question: "What is concept testing?",
    shortAnswer: "Concept testing puts a description or rough representation of an unbuilt product in front of potential users to gauge whether the idea lands before you invest in building it. It is genuinely useful for catching comprehension failures and completely unreliable as a predictor of demand — people can tell you they do not understand something, but not whether they would eventually pay for it.",
    bodyHtml: "<h2>What it is</h2>\n<p>Show people a concept — a description, a storyboard, a landing page, a clickable prototype — and collect their reactions before committing engineering to it. The cost is days rather than quarters, which is the appeal.</p>\n<p>The method is honest about being a proxy. The failure is treating the proxy as the thing.</p>\n<h2>What it reliably catches</h2>\n<p><strong>Comprehension failures.</strong> Ask someone to explain the product back to you in their own words. If they cannot, no amount of demand would have saved the launch, because they cannot buy something they cannot describe.</p>\n<p><strong>Wrong mental model.</strong> People will tell you what they expect the product to do, and it is frequently not what you built it to do. This is cheap to learn now and brutal to learn after launch.</p>\n<p><strong>Category confusion.</strong> If half the room thinks it competes with a product you consider unrelated, your positioning has a problem that is much easier to fix on a landing page than in the market.</p>\n<p><strong>Obvious dealbreakers.</strong> Requires a bank login, needs my team to switch tools, only works on desktop — objections that arrive in the first five minutes and would have arrived in month six anyway.</p>\n<h2>What it cannot tell you</h2>\n<p>Whether anyone will actually use it.</p>\n<p>Enthusiasm in a concept test is close to free. The respondent is not choosing between your idea and their current workflow, not paying, not migrating data, not persuading a colleague. Every one of those frictions is absent from the test and present in reality.</p>\n<p>Quibi is the standard illustration: the concept — premium short-form video for phones, with real stars — tested and pitched extremely well. What testing could not surface was whether anyone would add another paid subscription for a format they were already getting free. Google Glass has a similar shape, where the concept was thrilling in a demo and socially impossible in a café.</p>\n<h2>Better signals, roughly in order of strength</h2>\n<ol>\n<li><strong>Money.</strong> A pre-order, a deposit, a signed letter of intent. Costly to give, therefore meaningful.</li>\n<li><strong>A fake door.</strong> A real entry point in your live product leading to a not-yet-available page. Measures behaviour among people in context. Show the people who clicked an honest message and let them opt into being told at launch — anything else is a trick your users will remember.</li>\n<li><strong>Concierge delivery.</strong> Deliver the outcome manually for ten customers. Slow, unscalable, and the most reliable demand signal short of revenue.</li>\n<li><strong>Concept test.</strong> Useful, cheap, and the weakest of the four.</li>\n</ol>\n<h2>How to run one properly</h2>\n<p>Show the concept, then be quiet. Ask them to explain it back. Ask what it would replace and what they do today. Ask what would stop them.</p>\n<p>Then ask for a small commitment — an email for early access, a calendar slot, a deposit — and record who actually gives it. That single behavioural question is worth more than every rating scale on the page, because it is the only moment in the test where the answer costs the respondent anything.</p>\n",
    category: "Discovery",
    metaTitle: "Concept Testing: What It Can and Cannot Tell You",
    metaDescription: "Concept testing explained — what it reliably catches, why stated purchase intent is not evidence of demand, and the alternatives that produce a real behavioural signal.",
    keywords: [
      "concept testing",
      "what is concept testing",
      "product validation",
      "fake door test"
    ],
    accentColor: "#9B8FFF",
    relatedCaseStudyIds: [
      "cs-40",
      "cs-38",
      "cs-11"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "Is a fake door test the same as concept testing?",
        answer: "No, and the difference is the point. A concept test asks people what they think; a fake door test puts a real entry point in the product and measures who clicks. The second produces behaviour rather than opinion, which makes it far more trustworthy — and it obliges you to handle the people who clicked honestly."
      },
      {
        question: "Why is stated purchase intent unreliable?",
        answer: "Because agreeing to a hypothetical costs nothing. The gap between people who say they would buy and people who do is large, consistent across decades of research, and not correctable by asking more carefully. Treat high stated intent as a signal the idea is comprehensible, not that it is wanted."
      },
      {
        question: "When is concept testing clearly worth doing?",
        answer: "When the risk is comprehension rather than desire — a genuinely new category, an unfamiliar interaction model, or complicated pricing. If people cannot explain your product back to you, you have found something worth fixing regardless of what demand turns out to be."
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
    slug: "what-is-k-factor",
    question: "What is the k-factor in viral growth?",
    shortAnswer: "K-factor is the number of new users each existing user generates — invitations sent multiplied by the conversion rate of those invitations. Above 1.0 growth is self-sustaining and exponential; below 1.0 each cohort produces a smaller one and virality only amplifies other acquisition. Sustained k above 1 is genuinely rare, and cycle time matters nearly as much as the number.",
    bodyHtml: "<h2>The formula</h2>\n<p><strong>k = invitations sent per user × conversion rate of an invitation</strong></p>\n<p>If the average user sends 8 invitations and 15% of recipients sign up, k is 1.2. Each generation of users produces a slightly larger next generation, and the base grows without any acquisition spend.</p>\n<p>At k below 1, each generation is smaller than the last. The series converges — you get a finite multiplier on whatever you acquired elsewhere, not perpetual growth.</p>\n<h2>What k above 1 actually requires</h2>\n<p>Both terms have to be high simultaneously, and they tend to trade off. Making invitations easier raises the count and usually lowers the conversion rate, because low-effort invitations reach people with weaker interest. Making invitations targeted raises conversion and lowers the count.</p>\n<p>The products that sustained k above 1 for long typically had the invitation embedded in the core action rather than bolted alongside it. Hotmail&#39;s footer on every outgoing message is the origin story of the whole idea: the invitation was the product being used, so the count was enormous and cost the sender nothing. PayPal&#39;s referral bonus paid both sides in cash — expensive, deliberately so, and it bought a network that then defended itself.</p>\n<h2>Cycle time is the underrated variable</h2>\n<p>K tells you the multiplier per generation. <strong>Cycle time</strong> tells you how long a generation takes. Growth rate depends on both, and cycle time is usually the cheaper one to improve.</p>\n<p>A user who invites on day one is worth far more than an identical user who invites on day thirty, because the compounding starts sooner and every subsequent generation shifts forward with them. Practical levers: prompt at the moment of first value rather than at signup, reduce the steps between deciding to invite and the invitation being sent, and make the invited person&#39;s first experience fast enough that they reach their own invitation point quickly.</p>\n<h2>Why k decays</h2>\n<p>No loop holds its coefficient. Early users are enthusiasts with dense, relevant networks. Later users have thinner ones, and increasingly the people they would invite are already members. Saturation shows up as a falling conversion rate on invitations even though nothing about the product changed.</p>\n<p>This is why viral growth curves bend. The right response is a different loop, not a harder push on the old one.</p>\n<h2>Measuring it honestly</h2>\n<p>Attribute properly — a signup that would have happened anyway does not belong in the numerator. Measure over a window long enough to capture delayed invitations. And segment: a blended k hides that one segment has a k of 2 and the rest have almost none, which is a much more actionable picture than the average.</p>\n<p>Dropbox&#39;s referral loop is often quoted for its headline growth figure; the more transferable lesson is that the reward was storage, so both parties got a better product and the invitation strengthened retention rather than trading it for reach.</p>\n",
    category: "Growth",
    metaTitle: "K-Factor Explained: The Viral Coefficient and Its Limits",
    metaDescription: "The k-factor formula, what a k above 1 really means, why cycle time matters as much as the coefficient, and why most products with referral programmes have a k well below 1.",
    keywords: [
      "k-factor",
      "viral coefficient",
      "viral growth",
      "referral programme"
    ],
    accentColor: "#0F9D58",
    relatedCaseStudyIds: [
      "cs-12",
      "cs-11",
      "cs-20"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "How do you calculate k-factor?",
        answer: "Multiply the average number of invitations sent per user by the conversion rate of those invitations. Ten invitations at 12% conversion gives a k of 1.2. Measure both over a defined window, since invitations trickle out over time and a short window understates it."
      },
      {
        question: "Is a k-factor below 1 useless?",
        answer: "No. A k of 0.5 means every 100 users acquired elsewhere bring 50 more free, which effectively cuts your acquisition cost by a third. It just is not self-sustaining growth, and treating it as though it were leads to underinvesting in other channels."
      },
      {
        question: "Why is cycle time important?",
        answer: "Because k describes how many, not how fast. A k of 1.2 with a thirty-day cycle grows far more slowly than a k of 1.1 with a three-day cycle. Shortening the time from signup to invitation is often easier than raising the coefficient and does more for growth."
      }
    ],
  },
  {
    slug: "what-is-mcp",
    question: "What is MCP (Model Context Protocol)?",
    shortAnswer: "MCP is an open protocol that standardises how AI applications connect to external tools and data sources. Instead of every assistant building a bespoke integration for every system, a service exposes one MCP server and any compatible client can use it. It is plumbing — the value is the reduction from an N-times-M integration problem to N plus M.",
    bodyHtml: "<h2>The problem it solves</h2>\n<p>Before a shared protocol, connecting AI applications to external systems was quadratic. Each assistant needed a custom integration with each service — five assistants and twenty services means a hundred integrations, each separately built and maintained.</p>\n<p>MCP makes it additive. A service builds one MCP server; an assistant builds one MCP client. Five plus twenty is twenty-five, and each side maintains one thing.</p>\n<p>This is the same structural argument as USB, or ODBC before it. Protocols win when the integration matrix gets embarrassing, and by 2026 the matrix was embarrassing.</p>\n<h2>What a server exposes</h2>\n<p><strong>Tools</strong> — actions the model can invoke. Create an issue, run a query, send a message. Each has a schema and a description written for a model to read.</p>\n<p><strong>Resources</strong> — data the model can read. Files, records, documents, addressed by URI.</p>\n<p><strong>Prompts</strong> — reusable templates the server offers for common tasks.</p>\n<p>The descriptions matter more than they look. The model chooses tools by reading them, so a badly described tool is an unused or misused one. Writing them is a product task rather than an engineering one, and it is regularly delegated to whoever wrote the endpoint.</p>\n<h2>Deciding whether to build one</h2>\n<p>Ask whether an assistant acting on your data does something a user actually wants. For a project tracker, a CRM, a data warehouse, a design tool — plainly yes, and increasingly expected. For a product with no meaningful actions to take, an MCP server is engineering effort meeting no user.</p>\n<p>The second question is what you would expose. A thin server wrapping three read-only endpoints is a weekend of work and genuinely useful. A comprehensive one exposing every mutation you support is a large surface area with real security consequences.</p>\n<p>Start read-only. Add writes when you have watched how the reads get used.</p>\n<h2>The security part is not optional</h2>\n<p>An MCP server hands a model the ability to act on a user&#39;s behalf. The failure modes are the ones you would expect: over-broad permissions, writes performed without the user understanding what was about to happen, and prompt injection through retrieved content steering the model into calling a tool it should not.</p>\n<p>Practical minimums: scope tokens to the narrowest useful permission, require explicit confirmation for destructive or outbound actions, log every call with enough detail to reconstruct what happened, and treat any content the model reads as untrusted input rather than as instructions.</p>\n<h2>How to think about it strategically</h2>\n<p>MCP is distribution. If assistants become a common way people reach software — and referrer data across many sites now shows assistants sending meaningful traffic — then being connectable is the equivalent of being indexable a decade ago.</p>\n<p>That does not make it urgent for everyone. It makes it a question worth answering deliberately rather than by default, and the honest answer for many products is a small read-only server now and a review in six months.</p>\n",
    category: "AI",
    metaTitle: "What Is MCP? The Model Context Protocol Explained",
    metaDescription: "Model Context Protocol explained — the integration problem it solves, what an MCP server exposes, and how to decide whether to build one for your product.",
    keywords: [
      "MCP",
      "Model Context Protocol",
      "AI tool integration",
      "AI agents"
    ],
    accentColor: "#2563EB",
    relatedCaseStudyIds: [
      "cs-mcp-decision-2026",
      "cs-claude-5-26",
      "cs-openai-dev-26"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "How is MCP different from a normal API?",
        answer: "It sits on top of one. An API exposes endpoints for developers to code against; an MCP server describes its capabilities in a form a model can discover and call at runtime, with the descriptions and schemas that make a tool usable without a human writing integration code first."
      },
      {
        question: "Should my product build an MCP server?",
        answer: "It depends on whether your users would plausibly want an assistant acting on their data in your product. For tools people work inside daily, it is increasingly expected. For products where an assistant has nothing useful to do, it is engineering with no user on the other end."
      },
      {
        question: "What are the security implications?",
        answer: "Significant, and they are the main reason to move carefully. An MCP server grants a model the ability to act, so scoping permissions narrowly, requiring explicit consent for writes, and logging every call matter more than the feature itself. Read-only first is the sensible default."
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
    slug: "what-is-nps",
    question: "What is NPS and is it actually useful?",
    shortAnswer: "Net Promoter Score asks how likely someone is to recommend you on a 0-10 scale, then subtracts the percentage of detractors (0-6) from promoters (9-10). It is useful as a tracked trend on a stable population and close to useless as a single number compared across companies, because the score moves with who you sampled and when.",
    bodyHtml: "<h2>What the number actually is</h2>\n<p>You ask one question — how likely are you to recommend this to a friend or colleague, 0 to 10 — and sort the answers into three buckets. <strong>Promoters</strong> are 9-10. <strong>Passives</strong> are 7-8. <strong>Detractors</strong> are 0-6. The score is the percentage of promoters minus the percentage of detractors, so it runs from -100 to +100.</p>\n<p>Two things about that formula matter more than they look. The passives are discarded, and the detractor band is enormous: a 6 out of 10, which most people would read as mild approval, is counted the same as a 0.</p>\n<h2>Why cross-company comparison is mostly noise</h2>\n<p>An NPS of 42 means nothing without knowing who was asked and when. Survey people right after a successful onboarding and the score climbs. Survey the same population after a billing change and it collapses. Neither movement tells you the product got better or worse.</p>\n<p>Cultural response patterns matter too — the same satisfaction level produces systematically different numbers in different markets, because willingness to give a 10 is not constant across the world. So a global product comparing its NPS to a published US benchmark is comparing two different things and calling the gap a finding.</p>\n<h2>The one way it earns its place</h2>\n<p>Track it on a fixed cadence, with a fixed sampling method, on your own product, and read only the trend. That version is genuinely useful: it catches slow deterioration that usage metrics hide, because people often keep using something they have started to resent.</p>\n<p>And read the free-text box, not the score. The comment field attached to an NPS survey is usually worth more than the number it is attached to — it is a standing, low-effort channel for the specific complaints that would otherwise never reach you. Monzo&#39;s early growth ran heavily on word of mouth precisely because it treated that feedback loop as the product, not as a reporting obligation.</p>\n<h2>Where it actively misleads</h2>\n<p>The metric rewards being loved by a niche and punishes being useful to a majority. A product that solves a boring problem adequately for a large market will score worse than a polarising product with a devoted core, even when the first is the better business. WhatsApp spent a decade being unglamorous, universal and enormously valuable, which is not the profile NPS flatters.</p>\n<p>Treat a low score as a question, not a verdict.</p>\n",
    category: "Metrics",
    metaTitle: "What Is NPS? How It Works and When It Misleads",
    metaDescription: "Net Promoter Score explained: how the calculation works, why cross-company benchmarks are meaningless, and the one way to make the number actually useful.",
    keywords: [
      "what is NPS",
      "net promoter score",
      "NPS benchmark",
      "product metrics"
    ],
    accentColor: "#EA580C",
    relatedCaseStudyIds: [
      "cs-35",
      "cs-49",
      "cs-34"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "What is a good NPS score?",
        answer: "There is no honest universal answer, which is the main problem with the metric. Published benchmarks vary by industry, by country, by survey timing and by how the question was asked, and the same product can score twenty points apart depending on whether you survey after a support interaction or at random. Compare your NPS to your own NPS last quarter, measured the same way."
      },
      {
        question: "Why does NPS throw away the 7s and 8s?",
        answer: "By design — the framework treats them as passive and excludes them from the calculation entirely. That is also why NPS is volatile on small samples: a handful of people moving between 8 and 9 swings the score even though almost nothing changed in what they think."
      },
      {
        question: "What should I use instead of NPS?",
        answer: "For product decisions, retention and repeat usage tell you more, because they measure what people did rather than what they said they might do. Superhuman's product-market-fit survey — how disappointed would you be if you could no longer use this — is a better early-stage signal because the answer is actionable."
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
    slug: "what-is-product-positioning",
    question: "What is product positioning?",
    shortAnswer: "Positioning is the context you put your product in so people understand what it is and why it is better. It is a choice of comparison set — naming the alternative you want to be measured against — plus the attribute on which you win. Weak positioning is nearly always a positioning that avoids naming any competitor at all.",
    bodyHtml: "<h2>Positioning is choosing your comparison</h2>\n<p>Every product is understood by comparison to something. If you do not choose the comparison, the customer chooses it, and they will usually choose the most familiar option — often the one where you look worst.</p>\n<p>That choice is the strategic core. The same product positioned against different alternatives becomes a different business:</p>\n<ul>\n<li>A design tool positioned against desktop design software competes on power and file compatibility.</li>\n<li>The same tool positioned against emailing files around competes on collaboration and versioning.</li>\n</ul>\n<p>Figma&#39;s browser-first bet only makes sense under the second frame. Judged as a replacement for a desktop editor, running in a browser is a limitation. Judged against the practice of sending files to each other, it is the entire product.</p>\n<h2>The five components</h2>\n<ol>\n<li><strong>Competitive alternatives.</strong> What would people use if you did not exist — including doing nothing, and including a spreadsheet.</li>\n<li><strong>Unique attributes.</strong> What you have that those alternatives do not. Features, factually stated.</li>\n<li><strong>Value.</strong> What those attributes let the customer do that they could not before. Attributes are not value; the translation is the work.</li>\n<li><strong>Who cares most.</strong> The segment for whom that value is disproportionately important. This is the segment you win.</li>\n<li><strong>Market category.</strong> The frame you place yourself in, which sets expectations for everything above.</li>\n</ol>\n<p>Fill these in order. The temptation is to start at category, and starting there produces a frame nobody asked for.</p>\n<h2>Repositioning is often the cheapest fix available</h2>\n<p>Slack&#39;s origin inside a failed game company is well known; the less-told part is that the product was positioned as a replacement for email in the workplace, which set the comparison against something everyone already hated. Positioned instead as another chat app, it would have entered a crowded and unremarkable category.</p>\n<p>Loom did something similar — positioned against writing a long explanatory message rather than against video conferencing, which made asynchronous the feature rather than the compromise.</p>\n<p>Cloudflare made security headers a default rather than an expert configuration, repositioning a category of work from something specialists do to something that is simply on. The technical change was modest; the framing change was the product.</p>\n<h2>How to tell yours is broken</h2>\n<ul>\n<li>Prospects consistently compare you to something you consider irrelevant.</li>\n<li>Demos go well and deals stall, because the buyer cannot explain you to a colleague.</li>\n<li>Your homepage would read identically with a competitor&#39;s logo on it.</li>\n<li>Sales invents its own framing, and each rep&#39;s is different.</li>\n</ul>\n<p>The last one is the reliable early warning. Sales will always fill a positioning vacuum, and the improvised versions are usually the frame the market actually uses — worth listening to before you overwrite it.</p>\n",
    category: "Strategy",
    metaTitle: "What Is Product Positioning? The Comparison Set Explained",
    metaDescription: "Product positioning explained — why it is a choice of competitive frame, the five components, and how repositioning rescued products that were failing in the wrong category.",
    keywords: [
      "product positioning",
      "what is positioning",
      "positioning statement",
      "product marketing"
    ],
    accentColor: "#F3123C",
    relatedCaseStudyIds: [
      "cs-2",
      "cs-63",
      "cs-51"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "What is the difference between positioning and messaging?",
        answer: "Positioning is the strategic decision about which competitive frame you are in and what you win on. Messaging is the words expressing it. Rewriting the words while the frame stays wrong is the most common and least effective response to a positioning problem."
      },
      {
        question: "Can you reposition an existing product?",
        answer: "Yes, and it is frequently the highest-leverage change available, because it costs marketing effort rather than engineering. Slack repositioned an internal tool built inside a failed game company into a category-defining product without changing what it fundamentally did."
      },
      {
        question: "What makes a positioning statement bad?",
        answer: "Naming no alternative. A statement that could describe five competitors has not positioned anything. If a reader cannot tell from it what you are instead of, the frame is missing and the audience will pick one for you."
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
    slug: "what-is-tam-sam-som",
    question: "What are TAM, SAM and SOM?",
    shortAnswer: "TAM is the total market for the problem, SAM is the portion your model can actually serve, and SOM is the share you could realistically win in a few years. The purpose is not the headline number — it is the reasoning that gets you from a large abstraction to a small defensible one, and a bottom-up calculation is worth more than any industry report.",
    bodyHtml: "<h2>The three figures</h2>\n<p><strong>TAM — total addressable market.</strong> Everyone with the problem, if you could serve all of them with no constraints. Deliberately theoretical.</p>\n<p><strong>SAM — serviceable addressable market.</strong> The portion your product, geography, language, regulation and business model can actually reach today. TAM minus reality.</p>\n<p><strong>SOM — serviceable obtainable market.</strong> What you could plausibly capture in three to five years given competitors, your sales capacity and your distribution. This is the only figure with any operational meaning.</p>\n<h2>Bottom-up beats top-down every time</h2>\n<p>Top-down goes: the global market is 50 billion, we will take 1%, that is 500 million. The 1% is invented, and everyone reading it knows so. It is the single fastest way to lose credibility in a strategy document.</p>\n<p>Bottom-up goes: there are roughly 180,000 companies in this segment in our launch markets, our realistic price is 400 per month, giving a SAM of about 860 million annually; our sales capacity supports reaching perhaps 3% within three years, so SOM is around 26 million.</p>\n<p>Every number in the second version is challengeable, which is precisely why it persuades. It also produces something useful — if the arithmetic only works at a price nobody will pay, or at a customer count exceeding the entire industry, you have learned something about the business rather than about the spreadsheet.</p>\n<h2>What sizing is actually for</h2>\n<p>Three genuine uses:</p>\n<p><strong>Sanity-checking ambition against the model.</strong> If reaching your target requires 40% share of a market with three entrenched incumbents, the plan needs changing now.</p>\n<p><strong>Choosing between segments.</strong> Relative sizing across two candidate markets is far more reliable than absolute sizing of either, because the same systematic errors apply to both.</p>\n<p><strong>Finding the wedge.</strong> The valuable output is usually not the total but the discovery of a specific subsegment that is underserved, reachable and large enough to start in.</p>\n<p>Zerodha did not enter a large broking market and take a slice of it. It priced for a segment the incumbents were structurally unable to serve profitably, and grew from there. The sizing that mattered was of the wedge, not of the industry.</p>\n<h2>Where the number misleads</h2>\n<p><strong>Redefining the market to inflate it.</strong> Every failing product can reach a huge TAM by describing itself more broadly. Communication, productivity and wellness are not markets; they are categories of aspiration.</p>\n<p><strong>Assuming the market is available.</strong> A large market with entrenched network effects is not addressable just because it is large. Foursquare&#39;s unbundling into Swarm faced a market that existed but had already resolved around habits the split disrupted.</p>\n<p><strong>Confusing a market with a moment.</strong> MoviePass had a real and large market of people who liked cheap cinema tickets. Nothing about the size of that market made the unit economics survivable.</p>\n<p>If your strategy depends on the TAM being large, it is not a strategy. If it depends on a specific reachable wedge inside it, it might be.</p>\n",
    category: "Strategy",
    metaTitle: "TAM, SAM and SOM Explained (With the Bottom-Up Method)",
    metaDescription: "TAM, SAM and SOM defined, why top-down market sizing convinces nobody, how to build the bottom-up version, and what a market size can and cannot justify.",
    keywords: [
      "TAM SAM SOM",
      "market sizing",
      "total addressable market",
      "bottom up market sizing"
    ],
    accentColor: "#F3123C",
    relatedCaseStudyIds: [
      "cs-24",
      "cs-53",
      "cs-68"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "What is the difference between top-down and bottom-up market sizing?",
        answer: "Top-down starts from a published industry figure and applies percentages to it, which is fast and almost impossible to defend because the percentages are invented. Bottom-up starts from the number of potential customers times a realistic price, which is slower and can be argued with — which is the point."
      },
      {
        question: "Does a huge TAM make a business more attractive?",
        answer: "Not on its own. A huge TAM with no wedge into it is worse than a modest market you can dominate, because the large number attracts competitors and the lack of a wedge means you meet all of them at once. Investors read the reasoning, not the total."
      },
      {
        question: "How do I size a market that does not exist yet?",
        answer: "Size the behaviour it would replace. Nintendo could not have sized non-gamers buying a console from console data, but the population of households not currently gaming was countable — and that framing was the strategy, not just the arithmetic."
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
  {
    slug: "what-is-the-kano-model",
    question: "What is the Kano model?",
    shortAnswer: "The Kano model sorts features by how satisfaction responds to them. Basic expectations cause anger when missing and no delight when present, performance features scale linearly with how much you deliver, and delighters produce disproportionate joy but are not missed if absent. Its real use is showing that the three types must be funded differently — and that today's delighter becomes tomorrow's basic expectation.",
    bodyHtml: "<h2>The three categories</h2>\n<p><strong>Basic expectations</strong> are invisible when present and outrageous when absent. Nobody praises an app for loading, and everybody abandons one that does not. Satisfaction from these caps at zero — perfect execution buys you neutrality.</p>\n<p><strong>Performance features</strong> move satisfaction proportionally. Faster is better, cheaper is better, more storage is better, and each increment buys a matching increment of goodwill. These are where competitive comparison lives.</p>\n<p><strong>Delighters</strong> are unexpected and produce satisfaction out of proportion to their cost. Nobody asked for them, so their absence costs nothing — which makes them the only category where you can win without spending more than a rival.</p>\n<p>Two minor categories complete the model: <strong>indifferent</strong> features nobody cares about either way, and <strong>reverse</strong> features some users actively dislike.</p>\n<h2>Why the categories need different funding</h2>\n<p>The practical value of Kano is that it exposes a common allocation error. A roadmap made entirely of performance features produces a product that is measurably competitive and entirely forgettable. A roadmap made entirely of delighters produces a charming product that fails at something basic and loses the customer anyway.</p>\n<p>The rough shape that works: basics get whatever they need and no more, because over-delivering on them is invisible. Performance features get the bulk of steady capacity. Delighters get a deliberate, protected slice — small, but never zero, because zero is how a product becomes a commodity.</p>\n<p>The iPod&#39;s scroll wheel is a delighter in the strict sense. No one requested it. Competing players had all the performance features. The wheel made the device feel different in the hand in a way spec sheets could not represent.</p>\n<h2>The decay problem</h2>\n<p>Every delighter is on a timer. Once a feature is copied widely enough, users stop being pleased by it and start being annoyed by its absence — it has migrated from delighter to basic.</p>\n<p>Zoom&#39;s frictionless join is the textbook case in both directions. Joining a call without an account or a download was a genuine delighter when every competitor demanded installation and login. Within a few years it was table stakes, and any conferencing tool lacking it now reads as broken.</p>\n<p>This is why Kano is a repeated exercise, not a one-time classification. A model built three years ago has features in the wrong buckets today.</p>\n<h2>Where it breaks down</h2>\n<p>Kano surveys ask people to react to described features, and people are poor at predicting their own reaction to something they have not used. The method is strongest on concrete, easily imagined features and weakest on exactly the ambitious ones you most want guidance on.</p>\n<p>Use it to check a roadmap&#39;s balance across the three types. Do not use it to settle whether a specific ambitious bet is worth making — that question is not one a survey can answer.</p>\n",
    category: "Prioritisation",
    metaTitle: "The Kano Model Explained: Basics, Performance and Delighters",
    metaDescription: "The Kano model explained — the three feature categories, how to run a Kano survey, and why every delighter eventually decays into a basic expectation.",
    keywords: [
      "Kano model",
      "what is the Kano model",
      "Kano analysis",
      "feature prioritisation"
    ],
    accentColor: "#26A69A",
    relatedCaseStudyIds: [
      "cs-31",
      "cs-8",
      "cs-34"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "How do you run a Kano survey?",
        answer: "Ask each feature twice — how would you feel if it were present, and how would you feel if it were absent — with five fixed answers from I like it to I dislike it. The pair of answers places the feature into a category. It needs a reasonable sample and works badly on features respondents cannot picture."
      },
      {
        question: "Is Kano a scoring framework like RICE?",
        answer: "No, and mixing them up wastes both. RICE ranks a list into a build order. Kano classifies features by satisfaction type, which tells you how much of your capacity to allocate to each type. Use Kano to shape the portfolio, RICE to sequence inside it."
      },
      {
        question: "What does it mean that delighters decay?",
        answer: "Delighters become expected once competitors copy them. Front-facing cameras, undo send and free returns were all delightful and are now basic — their absence is a complaint and their presence earns nothing. It means a delighter is a temporary advantage requiring continuous replacement."
      }
    ],
  },
  {
    slug: "what-is-user-story-mapping",
    question: "What is user story mapping?",
    shortAnswer: "User story mapping arranges work as a two-dimensional map: the horizontal axis is the sequence of steps a user takes to accomplish something, and the vertical axis is depth of implementation within each step. Slicing horizontally across the map produces a release that works end to end, which is the entire point — a flat backlog cannot show you whether a release is usable.",
    bodyHtml: "<h2>The two axes</h2>\n<p>The <strong>horizontal</strong> axis is the user&#39;s journey in the order it happens. For a marketplace: find an item, evaluate it, buy it, track delivery, get support. This row is the backbone, and it is narrative — you should be able to read it aloud as a sentence.</p>\n<p>The <strong>vertical</strong> axis is depth. Beneath find an item sit the many possible implementations: a search box, filters, saved searches, personalised recommendations, visual similarity search. Higher means more essential, lower means more elaborate.</p>\n<h2>Why the second axis is the whole idea</h2>\n<p>A flat backlog ranked by score will happily produce a top ten that contains four excellent search features and nothing about checkout. Every item is individually justified, and the release is unusable, because a user cannot buy anything.</p>\n<p>The map makes this impossible to miss. You cut a release by drawing a <strong>horizontal line</strong> across the map, taking the top row of everything. The result is thin in every step but complete across all of them — the user can get from one end to the other. The second release drops the line lower.</p>\n<p>That is the technique. Everything else is stationery.</p>\n<h2>Where it pays off most</h2>\n<p>Anywhere a partial journey is worthless. Payments, onboarding, checkout, anything regulated. Half a KYC flow is not half a feature; it is zero features and some wasted engineering.</p>\n<p>It is also the fastest way to surface disagreement about scope. Teams that agree on a feature list frequently disagree about the journey it belongs to, and that disagreement stays hidden in a list and becomes obvious on a map.</p>\n<p>Gmail&#39;s redesign was fundamentally a rearrangement of the mail journey rather than a set of new capabilities — conversation threading changed the sequence of steps a user moved through, which is the kind of change a story map represents well and a ranked backlog represents badly.</p>\n<h2>The common failures</h2>\n<p><strong>A backbone that is a feature list.</strong> If the top row reads search, filters, notifications, it is a component inventory, not a journey. It should read as things a person does, in order.</p>\n<p><strong>Mapping the system instead of the user.</strong> The axis is what the user does, not what your services do. As soon as the backbone contains a queue or a service name, the map has stopped answering its question.</p>\n<p><strong>Treating the map as permanent.</strong> It is a planning conversation that leaves a residue, not a document to maintain. Use it to cut releases, then let the tracker carry the work.</p>\n<p>Linear&#39;s opinionated refusal to be endlessly configurable is the same instinct at product level: pick the journey, make it excellent, and decline to support every possible variation of it.</p>\n",
    category: "Prioritisation",
    metaTitle: "User Story Mapping Explained: The Two-Axis Alternative to a Flat Backlog",
    metaDescription: "User story mapping explained — the backbone, the vertical slices, how to cut a first release that actually works end to end, and when the technique is overkill.",
    keywords: [
      "user story mapping",
      "story map",
      "Jeff Patton",
      "release planning"
    ],
    accentColor: "#26A69A",
    relatedCaseStudyIds: [
      "cs-7",
      "cs-13",
      "cs-73"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "How is a story map different from a backlog?",
        answer: "A backlog is a ranked list, which flattens away the fact that some items only make sense together. A story map keeps the user's sequence visible on one axis, so you can see at a glance whether a proposed release covers every step of the journey or leaves a hole in the middle."
      },
      {
        question: "What is the backbone of a story map?",
        answer: "The top row — the ordered high-level activities a user moves through, left to right, in the order they happen. It is deliberately coarse: browse, choose, pay, track. Everything else hangs beneath it."
      },
      {
        question: "Is story mapping only for new products?",
        answer: "It is most valuable when scoping something new or substantially reworked, because that is when the risk of shipping a partial journey is highest. For incremental work on a mature product it is usually more ceremony than it is worth."
      }
    ],
  },
  {
    slug: "what-is-vibe-coding",
    question: "What is vibe coding and what are its risks?",
    shortAnswer: "Vibe coding is building software by describing what you want to an AI model and accepting the generated result without closely reviewing it. It is genuinely transformative for prototypes, throwaway tools and exploration. The risk appears when vibe-coded work reaches production, because nobody on the team understands the code well enough to debug, secure or change it.",
    bodyHtml: "<h2>What it means</h2>\n<p>The term describes generating code from natural-language description and accepting it largely on trust, judging by whether it appears to work rather than by reading it. Modern coding assistants make this fast enough that a working application can exist before anyone has read a line of it.</p>\n<p>For a category of work this is straightforwardly good. Prototypes, internal tools, data scripts, spikes into an unfamiliar API — all are throwaway, and time spent deeply understanding throwaway code is wasted.</p>\n<h2>Where it breaks</h2>\n<p><strong>Nobody can debug it.</strong> When a vibe-coded system fails in a way the model cannot fix from the error message, there is no fallback. The team&#39;s understanding of the system is the model&#39;s, and it does not persist between sessions.</p>\n<p><strong>The failure cases were never specified.</strong> Generated code satisfies the description it was given. Descriptions almost never enumerate malformed input, concurrent writes, partial failures, or the second code path that also needs the permission check. The result works on the happy path and is silently fragile everywhere else.</p>\n<p><strong>Security defaults are not defaults.</strong> Auth checks on one route and not another, secrets in the repository, input concatenated into queries, permissive CORS. Not because models are careless, but because the prompt asked for a working feature and got exactly that.</p>\n<p><strong>Change becomes frightening.</strong> The compounding cost. A codebase nobody understands is one nobody can confidently modify, so changes get made by asking the model again, and the system accumulates layers nobody has read.</p>\n<p>The 2026 wave of vibe-coded launches made this shape familiar: fast to build, fine at launch, and progressively harder to operate as reality diverged from the demo.</p>\n<h2>The line most teams settle on</h2>\n<p><strong>Understood code required:</strong> authentication and authorisation, payments, anything handling personal data, data migrations, anything a user&#39;s money or privacy depends on.</p>\n<p><strong>Speed wins:</strong> prototypes, internal tooling, analysis scripts, UI experiments, throwaway integrations.</p>\n<p>The important part is writing the line down. Without one, prototypes ship — not through a decision, but because the prototype worked and the deadline arrived, which is how almost every one of these gets into production.</p>\n<h2>Using it well</h2>\n<p>Read the generated code for anything that will persist. Ask the model to explain its own choices, and treat an unconvincing explanation as a signal. Write tests you understand even when the implementation was generated — the tests are where your understanding lives. And keep the boundary visible in the repository, so that promoting something across it is a deliberate act rather than an accident of scheduling.</p>\n",
    category: "AI",
    metaTitle: "What Is Vibe Coding? Where It Works and Where It Fails",
    metaDescription: "Vibe coding explained — where AI-generated code without review is genuinely useful, the specific failures when it reaches production, and how teams draw a workable line.",
    keywords: [
      "vibe coding",
      "AI generated code",
      "AI coding risks",
      "prototyping with AI"
    ],
    accentColor: "#2563EB",
    relatedCaseStudyIds: [
      "cs-vibe-2026-442",
      "cs-cursor-ws-1102",
      "cs-autonomy-26"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "Is vibe coding always a bad practice?",
        answer: "No. For prototypes, internal scripts, one-off analyses and exploring an unfamiliar library, it is a large and genuine productivity gain. The problem is not the technique — it is the absence of a boundary between what is disposable and what is production."
      },
      {
        question: "What is the most common failure?",
        answer: "Code that works on the demo path and fails on everything else — unhandled errors, missing validation, no auth check on a secondary route. The generated code satisfies the description it was given, and the description rarely includes the failure cases."
      },
      {
        question: "How should a team set boundaries?",
        answer: "Decide which parts of the system require understood code and enforce review there — auth, payments, data handling, anything touching user data or money. Elsewhere, let speed win. The line should be written down, because in the absence of one every prototype eventually ships."
      }
    ],
  },
  {
    slug: "what-is-wsjf-cost-of-delay",
    question: "What is cost of delay and how does WSJF use it?",
    shortAnswer: "Cost of delay is what it costs you per unit of time to not have something yet — lost revenue, growing risk, a closing window. WSJF, weighted shortest job first, ranks work by dividing cost of delay by job size, so small urgent things beat large ones. Its value is forcing the question most prioritisation avoids: what does waiting actually cost?",
    bodyHtml: "<h2>The idea behind cost of delay</h2>\n<p>Most prioritisation asks what something is worth. Cost of delay asks a sharper question: what does each week of not having it cost?</p>\n<p>The distinction matters because value and urgency are independent. A feature worth a great deal that will be worth the same amount next year has a high value and a low cost of delay. A modest feature that becomes worthless after a competitor ships theirs has a low value and an enormous cost of delay. Ranking by value alone systematically defers the second kind until it is too late.</p>\n<h2>The three components</h2>\n<p>SAFe decomposes cost of delay into three relative scores:</p>\n<p><strong>User or business value</strong> — the direct benefit of having it.</p>\n<p><strong>Time criticality</strong> — how sharply that benefit decays with time. A regulatory deadline, a seasonal peak, a competitor&#39;s roadmap, a partnership window. This is the component that does the work.</p>\n<p><strong>Risk reduction or opportunity enablement</strong> — value that is not the feature itself but what it unlocks or de-risks. Platform work lives here, which is the framework&#39;s answer to why infrastructure never wins a pure value ranking.</p>\n<p>Add the three, divide by job size, rank descending.</p>\n<h2>Why dividing by size changes the order so much</h2>\n<p>Two items with identical cost of delay are not equally urgent if one takes two weeks and the other takes two quarters. Doing the short one first means the long one starts only slightly later while the short one&#39;s cost of delay stops accruing immediately.</p>\n<p>This is why the framework is called weighted <strong>shortest job first</strong>. Given similar urgency, sequence by size — the aggregate delay across the whole queue is lower, and that is a mathematical result, not a preference.</p>\n<h2>What it catches that other frameworks miss</h2>\n<p>Windows that close. Facebook&#39;s shift from HTML5 to native mobile is the canonical example: the value of a competent mobile app was not falling, but the cost of each additional quarter without one was rising steeply as usage moved to phones. A value-ranked backlog would have kept the work respectable and non-urgent. Cost of delay makes the escalation visible.</p>\n<p>Nokia and Kodak are the same shape viewed from the other end. In both, the strategic response was understood and unhurried, and the cost of delay was accruing the entire time at a rate nobody put a number on.</p>\n<h2>Where it breaks</h2>\n<p>Time criticality is the easiest score in any framework to inflate — every stakeholder&#39;s item is urgent. Without a shared, written definition of what each point on the scale means, WSJF becomes a laundering mechanism for whoever argues hardest.</p>\n<p>It is also poorly suited to genuinely exploratory work, where both the value and the size are unknown. Scoring a research spike produces a confident-looking number derived from nothing. Give discovery a protected allocation instead of forcing it through the same ranking.</p>\n",
    category: "Prioritisation",
    metaTitle: "Cost of Delay and WSJF Explained",
    metaDescription: "Cost of delay and weighted shortest job first explained — the formula, the three components SAFe uses, why the ratio matters more than the absolute numbers, and where it breaks.",
    keywords: [
      "cost of delay",
      "WSJF",
      "weighted shortest job first",
      "prioritisation framework"
    ],
    accentColor: "#26A69A",
    relatedCaseStudyIds: [
      "cs-fb-mobile-12",
      "cs-87",
      "cs-20"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "What is the WSJF formula?",
        answer: "Cost of delay divided by job size. In SAFe, cost of delay is itself the sum of three estimates — user or business value, time criticality, and risk reduction or opportunity enablement — each scored on a relative scale rather than in currency."
      },
      {
        question: "How is WSJF different from RICE?",
        answer: "Both are value-over-effort ratios. WSJF's distinguishing move is time criticality as an explicit component, which surfaces deadlines, closing market windows and compounding risk that RICE's reach-impact-confidence has no natural slot for."
      },
      {
        question: "Do you need real currency figures for cost of delay?",
        answer: "No, and attempting it usually stalls the exercise. Relative scoring on a fixed scale produces the same ranking, because only the ratios between items affect the order. Reserve real numbers for the few decisions large enough to justify the analysis."
      }
    ],
  },
  {
    slug: "what-makes-a-good-landing-page",
    question: "What makes a good landing page?",
    shortAnswer: "One audience, one promise, one action. The page should say what the product does in plain language above the fold, show it rather than describe it, and remove every link that is not the action you want. Most underperforming landing pages fail on clarity rather than persuasion — the visitor cannot tell what the thing is.",
    bodyHtml: "<h2>The above-the-fold test</h2>\n<p>Show the top of your page to someone unfamiliar with the product for five seconds, then ask them what it does and who it is for. If they cannot answer, nothing further down the page matters.</p>\n<p>This is where most pages fail, and the cause is nearly always a headline written for insiders. Reimagine your workflow, the operating system for modern teams and unlock your potential are compatible with any product in any category. Replace them with what the product literally does, in the words a customer would use.</p>\n<p>Stripe&#39;s developer-first positioning worked in part because the page said what the thing was and showed the code that did it. There was nothing to decode.</p>\n<h2>Show, do not describe</h2>\n<p>A screenshot, a short looping video, or an interactive demo outperforms paragraphs about capabilities. People assess software visually and quickly, and a product that will not show itself reads as a product with something to hide.</p>\n<p>If a visitor can try it without signing up, let them. Removing the account requirement before first value is often the single largest conversion change available — Zoom&#39;s growth rested substantially on the fact that joining a meeting required neither.</p>\n<h2>Proof that persuades</h2>\n<p>Ranked roughly by strength:</p>\n<ol>\n<li><strong>Specific numbers from named customers.</strong> Cut onboarding from 6 weeks to 4 days.</li>\n<li><strong>Recognisable logos</strong>, if genuinely customers.</li>\n<li><strong>A quote with a real name, role and company.</strong></li>\n<li><strong>Volume indicators</strong> — used by 40,000 teams.</li>\n<li><strong>Generic testimonials from unnamed people</strong>, which read as decorative and are widely ignored.</li>\n</ol>\n<p>Anonymous praise is worse than no praise, because it signals you could not get permission to use a name.</p>\n<h2>One action</h2>\n<p>Decide what you want the visitor to do and make everything serve it. A page offering start free, book a demo, read the docs, join the community and subscribe to the newsletter has offered a menu, and menus produce deliberation rather than action.</p>\n<p>The secondary path should exist for people not ready — but it should be visibly secondary, not a competing button of equal weight.</p>\n<h2>The technical layer people forget</h2>\n<p>Across 496 recent YC startup homepages we audited, the pattern was consistent: everything a visitor notices was nearly universal, and everything only a crawler or a scanner notices was a coin flip. Custom domains, mobile viewports and descriptive titles were near-100%. Structured data, content security policy and HSTS preload were far below half.</p>\n<p>That gap matters more than it used to. A landing page is now read by search crawlers, by AI assistants deciding whether to cite you, and by security scanners in procurement reviews — none of which are impressed by your hero animation. Fast load, a real title and description, structured data, working links and clean HTML are conversion features.</p>\n<p>Booking.com&#39;s conversion machine and Walmart&#39;s performance work both point the same direction: the unglamorous layer is where the measurable money is.</p>\n",
    category: "Growth",
    metaTitle: "What Makes a Good Landing Page? Clarity, Proof and One Action",
    metaDescription: "Landing page fundamentals — the above-the-fold test, why clarity beats cleverness, what proof actually persuades, and the technical basics most startup pages still miss.",
    keywords: [
      "landing page best practices",
      "what makes a good landing page",
      "landing page conversion",
      "homepage optimisation"
    ],
    accentColor: "#0F9D58",
    relatedCaseStudyIds: [
      "cs-70",
      "cs-72",
      "cs-27"
    ],
    updatedAt: "2026-09-08",
    faqs: [
      {
        question: "How long should a landing page be?",
        answer: "As long as the decision requires. A low-commitment free signup needs very little; an expensive purchase with a switching cost needs objection handling, proof and detail. Length is a consequence of the decision's weight, not a style preference."
      },
      {
        question: "Does page speed really affect conversion?",
        answer: "Yes, and the effect is large and well documented. Walmart measured conversion improving measurably for every hundred milliseconds of load-time reduction. Speed is a conversion feature that happens to be implemented by engineers rather than designers."
      },
      {
        question: "Should the page have navigation links?",
        answer: "A dedicated campaign landing page usually should not — every additional link is an exit. A homepage is different, since it serves visitors at many stages. The distinction is whether the page has one job or several."
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
