# Video 2 — The Diagnosis Framework | Hosted by EV

## pmnorthstar · Root Cause Analysis Series · target length 8–9 min (~1,200 spoken words)
Spoken lines prefixed EV:. [VISUAL: ...] = on-screen animation. Voice: pmnorthstar house voice — warm, confident mentor, brisk & dense (see host bible).

---

[VISUAL: Cold open. A single alert "METRIC ▼ 15%" sits at the top of a dark stage. Below it, a decision tree unfurls, branches splitting downward, lighting up.]

EV: When a metric breaks, amateurs guess and pros run a tree. Today I give you that exact tree — the investigation map you'll run on every single root-cause question for the rest of your career. Let's build it.

[VISUAL: pmnorthstar logo pops. Title card: "THE DIAGNOSIS FRAMEWORK."]

EV: I'm EV, from pmnorthstar. Last video we learned these questions test structured, calm detective work — not guessing. Today I hand you the structure itself. It's a simple five-stage flow, and once it's in your head, you'll never stare blankly at a metric drop again. Here it is, top to bottom.

[VISUAL: Five stages light up as a vertical flow with labels: CLARIFY → CONFIRM IT'S REAL → INTERNAL vs EXTERNAL → SEGMENT → HYPOTHESIS.]

EV: Five stages. One — Clarify the metric. Two — Confirm the change is real. Three — Split the causes into Internal versus External. Four — Segment to isolate where it's happening. And five — land on a Hypothesis you can test. Clarify, confirm, split, segment, hypothesize. Let's walk each one.

[VISUAL: Stage 1 "CLARIFY" enlarges. Question bubbles: which metric? what window? how big? sudden or gradual?]

EV: Stage one — Clarify. Before you chase a single cause, you interrogate the *problem*. Which metric exactly — is it daily active users, or sign-ups, or revenue? They're very different. Over what time window did it drop? How big — fifteen percent is serious, two percent might be noise. And is it a sudden cliff or a slow slope? These questions aren't stalling — they completely reshape where you'll look. A sudden drop in one specific metric points somewhere totally different from a slow decline across many. Spend real time here. Clarity up front saves you from chasing ghosts.

[VISUAL: Stage 2 "CONFIRM IT'S REAL" enlarges. A magnifying glass checks a graph; icons: tracking bug? data lag? definition change?]

EV: Stage two — Confirm the change is real. This is the step beginners skip and pros *never* do. Before assuming the sky is falling, ask: is this drop even real, or is it a measurement problem? Maybe the tracking code broke and users are fine. Maybe there's a reporting delay and today's data is just incomplete. Maybe someone changed how the metric is *defined*. A shocking number of "emergencies" are actually just broken dashboards. Rule that out first — it takes thirty seconds and saves you from a wild goose chase. Confirm the patient is actually sick before you operate.

[VISUAL: Stage 3 "INTERNAL vs EXTERNAL" enlarges. The tree splits into two big branches: a gear labeled "WE DID SOMETHING" and a globe labeled "THE WORLD DID SOMETHING."]

EV: Stage three — the big split: Internal versus External. This is the heart of the framework, and it's beautifully simple. Every possible cause falls into one of two buckets. Internal — *we* did something: a new release, a bug, a pricing change, a redesign, an experiment. External — *the world* did something: a competitor launched, a holiday hit, a news event, a platform policy changed, seasonality. Splitting into these two branches instantly organizes the chaos. Instead of a hundred random guesses, you have two clean categories to work through methodically. We'll spend a whole video on each.

[VISUAL: Quiet lower-third: "Subscribe to pmnorthstar."]

EV: Quick nudge — if this tree is clicking, subscribe to pmnorthstar so the deep dives land in your feed. Two stages to go.

[VISUAL: Stage 4 "SEGMENT" enlarges. A total drop splits into slices: platform, geography, new vs returning, user type. One slice flashes red.]

EV: Stage four — Segment to isolate. This is your detective's magnifying glass, and it's where cases get cracked. Instead of looking at the drop in aggregate, you *slice* it. Is the drop on iOS, Android, or both? One country or everywhere? New users or existing ones? One specific feature? Because here's the magic — the drop almost always concentrates in one slice, and *that slice points straight at the cause*. If engagement only dropped on Android, you're probably looking at an Android release bug. If it only dropped in one country, maybe a local competitor or holiday. Segmentation turns "something's wrong" into "here's exactly where it's wrong." We'll dedicate a whole video to this.

[VISUAL: Stage 5 "HYPOTHESIS" enlarges. A few candidate causes rank by likelihood; top one gets a "test this" tag.]

EV: And stage five — land on a Hypothesis. You've clarified, confirmed, split, and segmented. Now you pull it together into your best explanation — and crucially, how you'd *confirm* it. "Based on all this, my leading hypothesis is a bug in the latest Android release, because the drop is sudden, Android-only, and started right after the release. To confirm, I'd check crash logs and roll back to test." Notice — you're not claiming certainty. You're giving a *likely* cause plus a test. That's exactly how a real PM closes an investigation.

[VISUAL: All five stages light up as a complete flowing tree.]

EV: And that's the whole framework. Clarify, confirm it's real, split internal versus external, segment to isolate, land on a hypothesis. Five stages that turn panic into a calm, methodical investigation every single time.

[VISUAL: A clock divides a 30-min question across the stages with rough allocations; segment and the internal/external split get the most time.]

EV: Quick pacing tip, because structure without timing goes sideways. Clarify and confirm are fast — a minute or two combined, but non-negotiable. The internal-versus-external exploration and the segmentation are the meat — that's where you spend most of your time. And the hypothesis is a tight, confident close. Keep moving, keep narrating which stage you're in, and always, always reach the hypothesis — an investigation with no conclusion feels unfinished.

[VISUAL: Header: "ONE SMART ORDER TRICK." An arrow shows "segment EARLY to narrow internal/external."]

EV: And one pro trick on *order* — these stages aren't rigidly linear. Smart investigators often segment *early*, right after confirming, because knowing *where* the drop lives massively narrows whether it's internal or external. Android-only and sudden? Almost certainly internal. Everywhere and gradual? Lean external. So use segmentation as a flashlight that guides the rest of your search. The stages are a map, not a straitjacket — flow between them as the evidence leads.

[VISUAL: Header: "LIGHTNING PASS — A DIFFERENT METRIC." A new alert: "REVENUE ▼ 10%." The five stages light rapidly.]

EV: Let me prove this framework works on any metric with a thirty-second lightning pass — this time "revenue dropped ten percent." Watch the stages carry you. Clarify: "Which revenue — subscriptions, one-time purchases, ads? Sudden or gradual? When exactly?" Confirm: "Is this real, or did billing reporting break? Not just end-of-month timing?" Internal versus external: "Did we change pricing, break the checkout, or run a pricing experiment? Or externally — did a competitor cut prices, or is it a seasonal spending dip?" Segment: "Is the drop in new subscriptions or renewals? One region? One plan tier? One platform's payment flow?" Hypothesis: "Say it's isolated to renewals on one plan right after we raised its price — leading hypothesis is price-driven churn on that tier, confirmed by checking that cohort's cancel rate." Done. Same five stages, a completely different metric, thirty seconds to a structured answer. That's why you memorize the engine once and reuse it forever.

[VISUAL: Outro card. pmnorthstar logo, subscribe prompt, "pmnorthstar.in." Next-up thumbnail: a magnifying glass over a metric.]

EV: So there's your five-stage investigation engine — write it down and drill it. If it helped, subscribe to pmnorthstar, and grab the full written framework plus a library of real case studies, free, at pmnorthstar.in. Next video, we go deep on the first moves that make or break an investigation — clarifying the problem and confirming the drop is even real. Catch you in the next one.

[VISUAL: Logo settles to center. End.]
