# Video 1 — What RCA & Analytical Questions Really Test | Hosted by EV

## pmnorthstar · Root Cause Analysis Series · target length 8–9 min (~1,200 spoken words)
Spoken lines prefixed EV:. [VISUAL: ...] = on-screen animation. Voice: pmnorthstar house voice — warm, confident mentor, brisk & dense (see host bible).

---

[VISUAL: Black screen. A clean line-graph climbs steadily, then suddenly PLUNGES off a cliff. A red alert flashes: "DAILY ACTIVE USERS ▼ 20%."]

EV: It's Monday morning. You open your dashboard. A key metric just fell off a cliff — down twenty percent overnight. Your CEO messages: "What happened?" You have no data yet, just the drop. What do you do? That exact moment is one of the most common questions in product interviews — and today, we learn to own it.

[VISUAL: The alert collapses into the pmnorthstar logo with a snap.]

EV: I'm EV, from pmnorthstar, and this is our deep-dive series on root cause analysis — the "a metric moved, figure out why" question. Interviewers at every big tech company and startup love these, because they simulate the single most stressful, most real part of a PM's job: something broke, nobody knows why, and everyone's looking at you. By the end of this series, a metric drop won't scare you — it'll be a puzzle you know exactly how to solve.

[VISUAL: Kinetic title card: "ROOT CAUSE ANALYSIS" with a magnifying glass sweeping across.]

EV: But before the framework, let's nail what these questions actually test — because it is *not* what most people think.

[VISUAL: A detective hat drops onto the glowing brain icon. A big "GUESS?" gets crossed out, replaced with "INVESTIGATE."]

EV: Here's the trap. A candidate hears "engagement dropped fifteen percent, why?" and immediately starts guessing. "Uh, maybe a bug? Maybe users got bored? Maybe a competitor?" Just firing random possibilities into the air. And that? That's exactly what interviewers are screening *against*. Because RCA isn't a guessing game. It's a *detective* game. They want to see a calm, structured investigation — not a shotgun blast of hunches.

[VISUAL: Section header slams: "THE 4 THINGS BEING TESTED." Four slots line up.]

EV: So underneath every one of these, the interviewer is grading four things. Let's walk them.

[VISUAL: Slot 1 fills — a messy tangle of wires straightening into neat parallel lines. Label: "STRUCTURED DIAGNOSIS."]

EV: Number one — structured diagnosis. Can you take a scary, ambiguous "it broke" and attack it with a *system*, instead of panic? The strongest candidates don't jump to a cause. They say "here's how I'll investigate this," and then methodically work a tree of possibilities. Just like every other series — the structure is the star. A calm, organized approach under pressure is exactly what a company wants when something's genuinely on fire.

[VISUAL: Slot 2 fills — a question-mark bubble over a metric. Label: "ASKING THE RIGHT QUESTIONS."]

EV: Number two — asking the right questions. Great diagnosis starts with great questions, not great guesses. Which metric exactly? Over what time period? Is the drop sudden or gradual? Does it hit everyone or one group? The candidate who interrogates the *problem* before chasing causes is the one who finds the real answer fast. We'll drill this hard, because it's where most people skip ahead and get lost.

[VISUAL: Slot 3 fills — a funnel sorting many possibilities into a few likely ones. Label: "HYPOTHESIS THINKING."]

EV: Number three — hypothesis thinking. Can you go from "a hundred things could've caused this" to "here are the two or three most *likely* causes, and here's how I'd test each"? It's not about listing every theoretical possibility — it's about prioritizing the probable ones and knowing what evidence would confirm or kill each. That's how real analysts and PMs actually work.

[VISUAL: Slot 4 fills — a clear speech bubble delivering a crisp finding to a listener. Label: "CLEAR COMMUNICATION."]

EV: And number four — clear communication. When you land on a likely cause, can you explain it crisply, with your reasoning, the way you'd brief a panicked executive? "Here's what I believe happened, here's why, and here's how I'd confirm it." Being right isn't enough; you have to be *clear*. We'll cover exactly how to deliver findings at the end of the series.

[VISUAL: Quiet lower-third: "Subscribe to pmnorthstar."]

EV: Quick one — if this is reframing how you see these questions, subscribe to pmnorthstar, because this series builds step by step. Back to it.

[VISUAL: Header: "THE TWO FLAVORS." Two paths fork: "SUDDEN DROP" (a cliff) and "GRADUAL DECLINE" (a slow slope).]

EV: Now, these questions come in two flavors, and spotting which one you've got changes your whole approach. Flavor one — the sudden shock. "Metric dropped twenty percent *yesterday*." A sharp, sudden change almost always points to something specific and recent — a broken release, an outage, a tracking bug. Flavor two — the slow bleed. "Engagement has been sliding for three months." A gradual decline points to slower forces — a competitor rising, the market shifting, your product aging, seasonality. Sudden means recent and specific. Gradual means structural and slow. Same framework handles both, but knowing the flavor tells you where to look first.

[VISUAL: Header: "IT'S NOT ALWAYS BAD NEWS." A drop graph, then a twist: a "✓ or is it?" tag.]

EV: And here's a pro insight most candidates miss entirely — a metric change isn't always a *problem*, and it isn't always *real*. Sometimes a "drop" is just a holiday weekend. Sometimes it's a logging bug and users are actually fine. And sometimes a metric drops for a *good* reason — like you removed a spammy feature that was inflating fake engagement. The best detectives don't assume catastrophe. They first ask: is this change even real, and is it even bad? We'll make that your reflex.

[VISUAL: Background softens. Big kinetic text: "CALM BEATS CLEVER."]

EV: And the mindset to carry through this whole series — calm beats clever. The candidate who panics and machine-guns ten random causes looks worse than the one who takes a breath and says "okay, let me investigate this systematically." You will not know the answer at the start — and that's completely fine. Nobody does. What they're watching is whether you can stay composed and work the problem like a pro. Composure *is* the skill.

[VISUAL: Roadmap — 8 glowing nodes. Node 1 lights. Later nodes preview: "FRAMEWORK," "CLARIFY," "INTERNAL," "EXTERNAL," "SEGMENT," "LIVE CASE," "DELIVERY."]

EV: So here's where we're headed. Next video, I hand you the full diagnosis framework — the investigation tree you run every single time. Then we go deep: how to clarify and confirm the problem, the internal causes where *you* broke something, the external causes where *the world* changed, and segmentation — the detective's magnifying glass that isolates exactly where the problem lives. Then we solve a full case live, and finish with how to deliver your findings like a pro.

[VISUAL: Header: "GOOD vs BAD — THE FIRST 20 SECONDS." A split screen: "PANICKED GUESSER" vs "CALM DETECTIVE."]

EV: Let me show you the difference this mindset makes in the very first twenty seconds, because that opening sets the whole tone. Here's the panicked guesser. Interviewer: "Daily active users dropped fifteen percent — why?" Candidate: "Um, maybe a bug? Or users got bored? Or a competitor? Could be the algorithm?" Just spraying guesses. The interviewer's already thinking "this person falls apart under pressure." Now the calm detective, same prompt: "Okay, a fifteen percent DAU drop — that's significant. Before I theorize, let me clarify a few things and confirm the drop is even real, then I'll work through possible causes systematically, internal and external, and segment to find where it's concentrated." Notice — they haven't named a single cause yet, and they already sound like someone you'd trust in a crisis. Why? Structure and composure, not speed. That contrast *is* the whole test. The first twenty seconds tell the interviewer whether you panic or whether you investigate.

[VISUAL: The "CALM DETECTIVE" side glows; the five-stage framework briefly previews beneath it.]

EV: And here's the best part — that calm opening isn't a personality trait you're born with. It's just knowing the framework, which is exactly what this series gives you.

[VISUAL: Outro card. pmnorthstar logo, subscribe prompt, "pmnorthstar.in."]

EV: So if you're ready to turn "oh no, the metric dropped" into "give me five minutes, I've got this" — subscribe to pmnorthstar so you catch every video. And head to pmnorthstar.in, where the full written breakdowns, a huge library of real case studies, and tons more are waiting, completely free. Next video, we build the investigation framework. Catch you in the next one.

[VISUAL: Logo settles to center. End.]
