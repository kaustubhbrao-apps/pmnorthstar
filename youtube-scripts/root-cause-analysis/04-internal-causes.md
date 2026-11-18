# Video 4 — Internal Causes: When You Broke It | Hosted by EV

## pmnorthstar · Root Cause Analysis Series · target length 8–9 min (~1,200 spoken words)
Spoken lines prefixed EV:. [VISUAL: ...] = on-screen animation. Voice: pmnorthstar house voice — warm, confident mentor, brisk & dense (see host bible).

---

[VISUAL: Cold open. A giant gear labeled "OUR PRODUCT" turns on a dark stage. A tiny wrench slips into it — SPARKS — and the metric graph above drops.]

EV: Most of the time, when a metric breaks... it's an inside job. Something *we* changed. So before you blame the competition or the weather, you check your own house first. Today — the internal suspects. Let's go.

[VISUAL: pmnorthstar logo pops. Title card: "STAGE 3A · INTERNAL CAUSES."]

EV: I'm EV, from pmnorthstar. We're on stage three of our framework — the big split between internal and external causes — and this video is all about the *internal* branch: the things your own company did. And here's a rule of thumb that'll serve you well: for *sudden* drops especially, internal causes are the most common culprit by far. Why? Because a sharp, overnight change usually means something specific and recent flipped — and the thing most likely to have just flipped is something *you* shipped. So we check our own house first.

[VISUAL: Header: "THE 6 INTERNAL SUSPECTS." Six suspect mugshots line up in a lineup.]

EV: So let's line up the usual internal suspects — the six places to look when you've broken your own metric. Meet the lineup.

[VISUAL: Suspect 1 lights — a "v2.4 DEPLOYED" release tag.]

EV: Suspect number one, and the most common of all — a recent *release*. New code shipped, and something in it hurt the metric. Maybe a redesign confused users, maybe a new flow added friction, maybe a feature quietly broke. This is why "when did it start" is so powerful — if the drop lines up with a deployment, you've likely found your culprit. Always check: did we ship anything right before this?

[VISUAL: Suspect 2 lights — a red "BUG" bug icon crawling across a screen.]

EV: Suspect number two — a straight-up bug. Not a design choice, an actual break. The sign-up button stopped working. The app crashes on a certain phone. The payment flow throws an error. Bugs often hit *one specific step* hard — so if your whole funnel is fine except one stage that cratered, smell a bug. Crash logs and error rates are your evidence here.

[VISUAL: Suspect 3 lights — a funnel with one stage leaking badly.]

EV: Suspect number three — a broken *funnel step*. Zoom into your conversion funnel stage by stage. If sign-ups dropped, is it that fewer people are *landing* on the page, or that the same people are landing but failing to *complete*? Finding the exact leaky step tells you precisely where to look — and often points right back at a release or a bug at that step. The funnel is your internal map.

[VISUAL: Suspect 4 lights — a price tag flipping from one number to a higher one.]

EV: Suspect number four — a *pricing or packaging* change. Did we raise prices? Move a feature behind a paywall? Change the free tier? Money changes behavior instantly. If revenue's up but active users are down, a pricing change that scared people off is a prime suspect. Always ask: did we touch pricing or what's free?

[VISUAL: Quiet lower-third: "Subscribe to pmnorthstar."]

EV: Quick nudge — if the lineup's useful, subscribe to pmnorthstar so you catch the external suspects next. Two more internal culprits.

[VISUAL: Suspect 5 lights — an A/B test beaker, one variant glowing red.]

EV: Suspect number five — an *experiment gone wrong*. This one's sneaky. Maybe an A/B test you're running is tanking the metric for the group that's in it. Or a test got rolled out to a bigger percentage than intended. Or two experiments are colliding. Always ask: are we running any experiments that touch this metric, and did any of them just change? A bad experiment is one of the most common hidden causes, precisely because it's easy to forget it's even live.

[VISUAL: Suspect 6 lights — a marketing megaphone going quiet.]

EV: And suspect number six — a change in *marketing or acquisition*. Your product didn't break at all — your *traffic* did. Maybe a big ad campaign ended. Maybe your paid budget got cut. Maybe an SEO change or an email blast that was driving sign-ups stopped. If fewer people are showing up in the first place, the problem might be upstream of the product entirely — in the channels feeding it. Always check: did anything change in how users are *finding* us?

[VISUAL: Header: "HOW TO HUNT THEM DOWN." A detective checklist: "check deploy log · check funnel · check experiments · check pricing · check marketing calendar."]

EV: Now, how do you actually hunt these in an interview? You don't need access to real data — you name the *check* you'd run. "I'd pull the deployment log and see if anything shipped right before the drop. I'd break the funnel into steps to find the leaky one. I'd list active experiments and check for recent changes. I'd check whether pricing or the marketing calendar changed." Narrating the specific checks shows the interviewer you know exactly how a real investigation works. It's not about guessing the answer — it's about knowing precisely where to shine the flashlight.

[VISUAL: Header: "THE SPEED CLUE." A sudden cliff flashes "LOOK INTERNAL FIRST."]

EV: And here's your biggest shortcut — let the *speed* of the drop guide you. A sudden, sharp, overnight cliff almost always screams internal — a release, a bug, an experiment, something that flipped at a specific moment. A slow, gradual decline is less likely to be a single internal change and more likely external, which is our next video. So when you see a cliff, your instinct should be: check the deploy log first. That one instinct will solve a huge share of these cases fast.

[VISUAL: Recap: the six-suspect lineup, each with its one-line tell.]

EV: So — the internal branch. Six suspects: a recent release, a bug, a broken funnel step, a pricing change, a bad experiment, and a marketing shift. Hunt them by naming the checks you'd run, and remember the speed clue — sudden cliffs point inward first. Check your own house before you blame the neighbors.

[VISUAL: Header: "QUICK CATCH — AN INTERNAL CASE." A funnel with one stage cratering; a "payment" label flashes red.]

EV: Let me run a lightning example so you see the internal suspects in action. Say checkout conversion dropped sharply yesterday. You run the internal checks. Deploy log? "We shipped a payment-page update yesterday morning." Already suspicious — timing fits. Now the funnel: "users are reaching the payment page fine, but far fewer are completing it." The leak is pinned to exactly the step we changed. Then the smell test: "is this one payment method or all of them?" Say it's only credit cards failing, not other methods. Now it's crystal clear — the payment-page update broke credit-card processing. Notice the chain: the deploy log gave the timing, the funnel gave the location, and one more slice gave the exact break. That's three internal checks stacking into a precise answer in under a minute — no guessing, just methodically checking the lineup until one suspect confesses.

[VISUAL: Outro card. pmnorthstar logo, subscribe prompt, "pmnorthstar.in." Next-up thumbnail: a globe with external forces swirling.]

EV: And that's the internal half of the investigation — the inside jobs that cause most sudden drops. If it helped, subscribe to pmnorthstar, and grab the written version plus a library of real case studies, free, at pmnorthstar.in. Next video, we step outside and look at the *external* causes — when the world changes around you and there's nothing in your deploy log to blame. Catch you in the next one.

[VISUAL: Logo settles to center. End.]
