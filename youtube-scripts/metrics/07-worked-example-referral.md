# Video 7 — Full Worked Example: Metrics for a Referral Feature | Hosted by EV

## pmnorthstar · Metrics Series · target length 8–9 min (~1,250 spoken words)
Spoken lines prefixed EV:. [VISUAL: ...] = on-screen animation. Voice: pmnorthstar house voice — warm, confident mentor, brisk & dense (see host bible).

---

[VISUAL: Cold open. A "LIVE" badge flashes on a dark stage. A referral feature mockup appears: "Invite a friend, you both get a reward." A metric dashboard waits, empty, ready to fill.]

EV: One real feature. Every tool we've built — North Star, goal-signal-metric, guardrails, leading and lagging. Watch me pick the complete metric set, live, the way you'd do it in an interview. Let's put it all together.

[VISUAL: pmnorthstar logo pops. Title card: "LIVE · METRICS FOR A REFERRAL FEATURE."]

EV: I'm EV, from pmnorthstar. This is the payoff video for the whole series. Our prompt — the kind you'll absolutely get: "We're launching a referral feature — users invite friends, and both get a reward. How would you measure success?" I'm going to run every concept from this series on it, out loud, start to finish. Let's go.

[VISUAL: Step badge appears and highlights each as EV reaches it: GOAL → SIGNAL → PRIMARY METRIC → SUPPORTING → GUARDRAIL → LEADING/LAGGING.]

EV: First — before any metric — I anchor on the Goal, because every metric flows from it. "Why are we building referrals? The goal is *growth* — specifically, to acquire new, high-quality users cheaply by having existing happy users bring their friends." Notice I added "high-quality" — that's going to matter a lot later. The goal isn't "get invites sent." It's "grow with good users, affordably." That framing shapes everything downstream.

[VISUAL: "GOAL" checks. "SIGNAL" highlights. A chain of user behaviors: invite → friend joins → friend becomes active.]

EV: Now the Signal — what behavior shows we're hitting that goal? And here's a key insight for referrals: it's a *chain* of behaviors, not one. A user has to *send* an invite, a friend has to *accept* and sign up, and critically, that friend has to actually become an *active, valuable* user — not just register and vanish. So the signal is the whole funnel: invites sent, invites converted to sign-ups, and sign-ups converted to genuinely active users. If I only measured the first step, I'd be fooling myself.

[VISUAL: "SIGNAL" checks. "PRIMARY METRIC" highlights. One bold number emerges.]

EV: So — the Primary metric, my North Star for this feature. I will *not* pick "invites sent," even though it's tempting and easy. Why? Because invites sent is a vanity metric — a million invites mean nothing if nobody joins. The metric that captures the real goal is "*number of new active users acquired through referrals per month*." That counts friends who joined *and* became active — real growth with real users. That's my primary. See how I reasoned straight from the goal to reject the vanity option and pick the one that reflects true value?

[VISUAL: "PRIMARY" checks. "SUPPORTING" highlights. A funnel with conversion rates at each stage.]

EV: Next — Supporting metrics, to understand the funnel and diagnose problems. I'd track the referral funnel stage by stage. One — invite *send* rate: what percentage of users send at least one invite? That tells me if the feature is even discoverable and motivating. Two — invite *conversion* rate: of invites sent, how many friends actually sign up? That tells me if the offer is compelling. And three — referred-user *activation* rate: of those sign-ups, how many become active? That tells me if we're attracting quality or junk. Together these let me see exactly *where* the referral engine is leaking if my primary metric is low. That's basically a mini metric tree for the feature.

[VISUAL: Quiet lower-third: "Subscribe to pmnorthstar."]

EV: Quick one — if watching it all come together is helping, subscribe to pmnorthstar so you can run it yourself. Now the senior moves — guardrails.

[VISUAL: "SUPPORTING" checks. "GUARDRAIL" highlights. A rising metric with protective shields.]

EV: Now the Guardrail — and this is where referrals get *dangerous*, so this is critical. Let me ask the dark question: "if a ruthless team maximized referrals at all costs, what would break?" Oh, lots. One — they'd attract low-quality users or outright fraud: people creating fake accounts just to farm the reward. So guardrail number one: fraud rate and the *quality* of referred users — do they retain as well as organic users? Two — reward costs could explode and destroy our economics. Guardrail two: cost per acquired user via referral — it has to stay *below* what we'd pay through ads, or the whole point is gone. And three — we might *annoy* users by pushing them to spam their friends. Guardrail three: user complaints or opt-outs around referral prompts. Three guardrails, protecting quality, cost, and user trust. *This* is what makes a referral program healthy instead of a money pit.

[VISUAL: "GUARDRAIL" checks. "LEADING/LAGGING" highlights. A windshield and rear-view mirror appear.]

EV: And finally — Leading versus Lagging, to steer properly. My lagging truth is "the long-term value of referred users" — do they stick around and become profitable months later? That's what ultimately matters, but it's slow. So I'd steer day-to-day with a leading indicator — like "referred-user week-one activation rate," which predicts whether these users will become valuable long before the lagging number confirms it. If week-one activation of referred users starts dropping, I know my referral quality is degrading *now*, and I can tighten the program before months of bad users pile up. Windshield and rear-view, working together.

[VISUAL: The full metric set assembles into one clean dashboard: primary, supporting funnel, three guardrails, leading + lagging. A "COMPLETE" stamp lands.]

EV: And there it is — the complete metric set for a referral feature. Watch what we built: a *primary* metric that captures real growth, not vanity. A *supporting* funnel to diagnose leaks. *Three guardrails* protecting quality, cost, and trust. And a *leading-plus-lagging* pair to steer fast and confirm slow. That is a genuinely senior, comprehensive answer — and notice, every single piece came straight from the tools in this series, applied in order.

[VISUAL: Header: "THE RHYTHM TO INTERNALIZE." The step badge pulses.]

EV: And here's the rhythm I want you to feel. Always start from the *goal* — it rejects the vanity metrics for you. Pick one primary that reflects real value. Add supporting metrics as a mini funnel. Then ask the dark question for guardrails — especially on anything involving rewards or growth, where gaming is rampant. And close with leading-versus-lagging to show you can actually steer. Run that sequence on any feature and you'll give an answer most candidates can't touch.

[VISUAL: Header: "WHEN THE INTERVIEWER PUSHES BACK." An interviewer figure raises a hand; EV icon stays calm.]

EV: And let me prepare you for the pushback, because on a referral question the interviewer almost always tests you here. Imagine they say: "Your referral numbers look amazing — invites and sign-ups are through the roof. Ship it wider?" The weak candidate says "yes, amazing." But *you* now have the tools to be sharp. "Those top-line numbers look great — but before scaling, let me check my guardrails. Are the referred users actually *activating* and *retaining* like organic users, or did we attract reward-farmers? What's our cost per acquired user — is it still below our ad cost? And are the referred users real, or is there fraud in those sign-ups?" You might even add: "invites and sign-ups are partly *leading* indicators — I'd want to see the *lagging* truth, the long-term value of these users, before betting big." See what you just did? You refused to be dazzled by pretty top-line numbers and insisted on quality, cost, and the long game. That's the exact difference between a junior who chases vanity and a senior who protects the product. That answer gets you hired.

[VISUAL: Outro card. pmnorthstar logo, subscribe prompt, "pmnorthstar.in." Next-up thumbnail: a shiny metric with a sneaky crack in it.]

EV: If seeing it all come together made it click — subscribe to pmnorthstar, and grab this entire worked example written out, plus a huge library of real case studies, free, at pmnorthstar.in. One video left, and it's the fun one — the sneaky metric traps that fool even smart, experienced people, and how to never fall for them. Catch you in the next one.

[VISUAL: Logo settles to center. End.]
