# Video 6 — Segmentation: The Detective's Magnifying Glass | Hosted by EV

## pmnorthstar · Root Cause Analysis Series · target length 8–9 min (~1,200 spoken words)
Spoken lines prefixed EV:. [VISUAL: ...] = on-screen animation. Voice: pmnorthstar house voice — warm, confident mentor, brisk & dense (see host bible).

---

[VISUAL: Cold open. A single flat "total" bar shows a drop on a dark stage — vague, mysterious. Then a magnifying glass sweeps over it and it SHATTERS into many smaller bars; one glows bright red while the rest stay flat.]

EV: Here's the move that cracks almost every root-cause case wide open. You stop staring at the big blurry number — and you slice it until one piece lights up red. That's segmentation, and today it becomes your superpower. Let's go.

[VISUAL: pmnorthstar logo pops. Title card: "STAGE 4 · SEGMENTATION."]

EV: I'm EV, from pmnorthstar. If I could teach you only ONE technique from this entire series, it would be this one. Segmentation is the detective's magnifying glass — it turns "something is wrong somewhere" into "here is *exactly* where it's wrong." And once you know where, the *why* usually becomes obvious. This single skill separates the candidates who flail from the ones who solve the case in five minutes.

[VISUAL: Header: "THE BIG IDEA — AVERAGES LIE." A flat average line hides a huge spike and a huge dip underneath it.]

EV: Here's the core idea — averages lie. When you look at a metric in aggregate, as one big total number, it hides the truth. A ten percent overall drop could mean *everyone* dropped ten percent... or it could mean one specific group dropped eighty percent while everyone else is totally fine. And those two scenarios have *completely* different causes. The aggregate number is a blanket thrown over the crime scene. Segmentation rips off the blanket. You break the total into groups and look at each one separately — and almost always, the drop is screaming from one specific slice.

[VISUAL: Header: "THE 5 WAYS TO SLICE." Five cutting lines fan across a bar chart.]

EV: So how do you slice? There are five classic dimensions, and you should run through them like a checklist. Let's go.

[VISUAL: Slice 1 — two phone icons: iOS vs Android, one glowing red.]

EV: Slice one — *platform*. iOS versus Android versus web. This is often the fastest crack of all. If engagement dropped only on Android, you've basically solved it — it's an Android release or an Android-specific bug. If it's all platforms equally, the cause is something that cuts across all of them. Platform is usually my very first slice, because it so cleanly points at internal release issues.

[VISUAL: Slice 2 — a world map; one country glows red.]

EV: Slice two — *geography*. Which countries or regions? If the drop is global, think broad causes — a core bug, a macro shift. If it's one country, think local — a regional competitor, a local holiday, a country-specific regulation, a payment method that broke in that market. Geography instantly separates "everywhere" problems from "somewhere" problems.

[VISUAL: Slice 3 — two user icons: a shiny "NEW" user and a seasoned "RETURNING" user.]

EV: Slice three — *new versus returning users*. This one's incredibly diagnostic. If only *new* users dropped, the problem is upstream — acquisition, onboarding, sign-up, or a broken first-time experience. If only *returning* users dropped, something changed in the core product that your existing, habituated users noticed and disliked. New-user problems and returning-user problems live in completely different parts of your product. This slice tells you which half to search.

[VISUAL: Quiet lower-third: "Subscribe to pmnorthstar."]

EV: Quick nudge — if segmentation is clicking, subscribe to pmnorthstar, because next video we use all of this to crack a full case live. Two more slices.

[VISUAL: Slice 4 — a funnel with stages; one stage glows red.]

EV: Slice four — *the funnel, stage by stage*. We touched this with internal causes, but it's a form of segmentation too. Break the user journey into steps — land, sign up, activate, purchase — and find which step is leaking. If every step is normal except "complete purchase," which cratered, your problem is pinpointed to the checkout. Slicing by funnel stage turns a vague "conversion dropped" into "the payment step broke."

[VISUAL: Slice 5 — user tiers: free vs paid, power users vs casual, one glowing.]

EV: And slice five — *user type or segment*. Free versus paid. Power users versus casual. New demographic versus core demographic. If only your free users dropped but paid is fine, maybe a change hit the free tier. If only power users dropped, maybe you changed an advanced feature they relied on. Slicing by who the user *is* often reveals that a change affected one group you didn't even think about.

[VISUAL: Header: "THE POWER MOVE — COMBINE SLICES." Two filters stack: "Android" + "new users" → one tiny bright-red cell.]

EV: And here's the power move that makes you look like a genius — *combine* slices. Don't stop at one dimension. If platform tells you it's Android, then slice *that* by new versus returning. "The drop is Android, and specifically Android *new* users." Now you've narrowed it to a tiny, precise cell — probably a broken Android onboarding flow in the latest release. Each slice you stack narrows the suspect pool further, until the cause is almost pointing at itself. Great detectives don't slice once — they slice, narrow, and slice again.

[VISUAL: Header: "HOW IT SOUNDS IN THE ROOM." A clean spoken sequence appears.]

EV: In the interview, this sounds like: "I wouldn't look at the drop in aggregate — I'd segment it. First by platform, to see if it's one OS. Then by geography, new-versus-returning, funnel stage, and user type. I'm looking for the slice where the drop concentrates, because *that* slice points straight at the cause." Say that, and you instantly sound like someone who's debugged real metrics. You're not guessing causes — you're *narrowing* to them with evidence. That's the whole game.

[VISUAL: Header: "WHY THIS BEATS GUESSING." Split: "random guesses" (scattered darts missing) vs "segment → narrow" (darts converging on bullseye).]

EV: And here's why this is so much better than listing causes — segmentation lets the *data* tell you the answer instead of you guessing it. The candidate who says "maybe it's a bug, maybe a competitor, maybe seasonality" is throwing darts in the dark. The candidate who says "let me slice until I find where it concentrates" is turning on the lights. One looks like hoping; the other looks like *knowing how to find out*. Interviewers can tell the difference in about ten seconds.

[VISUAL: Recap: the shatter-and-slice animation replays; five slice-types listed, combining highlighted.]

EV: So — segmentation, your magnifying glass. Remember averages lie. Slice by platform, geography, new-versus-returning, funnel stage, and user type. Then *combine* slices to narrow to a tiny precise cell. Find the slice where the drop concentrates, and the cause reveals itself. Master this one move and you'll crack cases other candidates can't even approach.

[VISUAL: Header: "WATCH SLICES STACK — LIVE." Filters apply one by one, the red cell shrinking each time.]

EV: Let me show you the stacking move in real time, because this is what cracking a case actually feels like. Say purchases dropped eight percent. Slice one, platform: "it's only on web, not mobile." Already huge — we've eliminated the entire mobile app. Slice two, stack geography on top: "within web, it's global, all regions." Okay, so a core web issue, not regional. Slice three, stack the funnel: "within web, users browse and add to cart fine, but the drop is entirely at the checkout page." Slice four, one more: "and it's specifically users on one particular browser." Now look where we are — web, global, checkout step, one browser. That's not a vague eight percent anymore; that's "the checkout page has a bug in one specific browser," which probably broke in a recent release. Four slices took us from a foggy total to a near-exact diagnosis. Each slice you stack is like turning a focus ring — the picture gets sharper until the cause is staring right at you.

[VISUAL: Outro card. pmnorthstar logo, subscribe prompt, "pmnorthstar.in." Next-up thumbnail: a "CASE FILE" folder opening.]

EV: And that's the single most powerful technique in the whole investigation. If it helped, subscribe to pmnorthstar, and grab the written version plus a library of real case studies, free, at pmnorthstar.in. Next video is the big one — we take everything, the whole framework, and crack a full case live: "daily active users dropped fifteen percent — diagnose it." Start to finish. Catch you in the next one.

[VISUAL: Logo settles to center. End.]
