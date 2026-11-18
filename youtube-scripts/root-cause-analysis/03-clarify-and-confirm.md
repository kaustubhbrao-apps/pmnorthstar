# Video 3 — Clarify & Confirm | Hosted by EV

## pmnorthstar · Root Cause Analysis Series · target length 8–9 min (~1,200 spoken words)
Spoken lines prefixed EV:. [VISUAL: ...] = on-screen animation. Voice: pmnorthstar house voice — warm, confident mentor, brisk & dense (see host bible).

---

[VISUAL: Cold open. A frantic figure sprints toward a door marked "FIX IT," but trips over a banana peel labeled "...which metric, though?" Freeze.]

EV: Here's how to look like a genius in the first two minutes of a root-cause question — and it's not by solving it fast. It's by refusing to chase the problem until you actually understand it. Today: clarify and confirm. Let's go.

[VISUAL: pmnorthstar logo pops. Title card: "STAGES 1 & 2 · CLARIFY + CONFIRM."]

EV: I'm EV, from pmnorthstar. These are the first two stages of our framework, and I'm putting them together because they're both about one discipline — *not rushing to a cause*. The candidates who nail these two stages look calm and senior. The ones who skip them go chasing ghosts for twenty minutes. Let's make sure you're the first kind.

[VISUAL: Header: "STAGE 1 · CLARIFY — THE 5 QUESTIONS." Five question cards fan out.]

EV: Stage one — clarify the problem with five sharp questions. The interviewer gives you a vague "engagement dropped." Your job is to make it precise. Here are the five.

[VISUAL: Each question card flips as EV names it.]

EV: Question one — *which metric, exactly*? "Engagement" could mean daily active users, sessions per user, time spent, actions taken — and they point to totally different causes. Pin it down. Question two — *how big is the change*? A twenty percent drop is a five-alarm fire; a two percent wiggle might just be normal noise. Question three — *over what time window*? Did it drop overnight, over a week, over a quarter? Question four — *sudden or gradual*? A cliff and a slope tell completely different stories. And question five — *when exactly did it start*? Because whatever changed right before the drop is your prime suspect. These five turn a fog into a crime scene you can actually work.

[VISUAL: Header: "WHY 'WHEN' IS THE GOLDEN QUESTION." A timeline; the drop lines up perfectly with a "release deployed" marker.]

EV: And let me zoom in on that last one, because "when did it start" is secretly the most powerful question of all. Why? Because if you can pin down the exact moment the metric turned, you can line it up against a timeline of everything that happened — releases, experiments, holidays, outages. Nine times out of ten, something happened *right* at that moment, and boom — there's your prime suspect. "It dropped Tuesday at 2 PM" plus "we shipped a release Tuesday at 1:45 PM" basically solves the case. Always anchor the drop in time. It's the thread you pull to unravel everything.

[VISUAL: Header: "STAGE 2 · CONFIRM IT'S REAL." A graph with a drop; three doors appear: "TRACKING BUG," "DATA DELAY," "DEFINITION CHANGE."]

EV: Stage two — confirm the change is even real. This is the step that separates rookies from pros, because rookies *assume* the drop is real and sprint off to fix a problem that might not exist. Pros pause and ask: could this be a measurement issue, not a real user issue? Three doors to check. Door one — a tracking bug: maybe the code that logs the metric broke, so users are perfectly fine but we just stopped counting them. Door two — a data delay: maybe today's numbers are just incomplete and will fill in by tomorrow. Door three — a definition change: maybe someone redefined the metric, so you're comparing apples to oranges. Check these first, always.

[VISUAL: A "false alarm" montage: a dashboard glitch, a half-loaded report, each getting a relieved "phew."]

EV: And I cannot stress this enough — a *huge* fraction of real-world metric "emergencies" turn out to be measurement artifacts. The tracking pixel broke. A data pipeline stalled. Someone deployed a change to the logging. If you skip this stage and the drop was fake, you'll burn hours hunting a cause that was never there — and in an interview, mentioning this stage instantly signals you've actually lived through real incidents. It's a massive credibility move for thirty seconds of effort.

[VISUAL: Quiet lower-third: "Subscribe to pmnorthstar."]

EV: Quick one — if this is leveling you up, subscribe to pmnorthstar, it really helps. Now, two more confirm-stage checks.

[VISUAL: Header: "TWO MORE SANITY CHECKS." A calendar icon and a "good news?" icon.]

EV: Two more things to confirm before you treat this as a problem. First — is it just *expected* variation? Metrics naturally dip on weekends, holidays, overnight. If engagement always drops on Sundays and today's a Sunday, that's not a mystery, that's Tuesday. Compare against the same day last week, not just yesterday. Second — and this one's a genuine pro move — is the drop actually *bad*? Sometimes a metric falls for a *good* reason. Maybe you removed a spammy notification that was inflating fake opens. Maybe you cleaned out bot accounts. The number went down, but the product got *healthier*. A great analyst never assumes a drop is automatically a disaster. Ask what the number *means* before you panic.

[VISUAL: Header: "HOW TO SAY IT IN THE INTERVIEW." A speech bubble with a clean sequence.]

EV: So how does this sound in the actual interview? Smooth and senior. "Before I dig into causes, let me clarify a few things — which metric exactly, how big's the drop, and when did it start? And I'd first confirm the drop is real and not a tracking or reporting issue, and check it's not just normal weekend seasonality." Say that, and the interviewer immediately thinks: "this person has actually done this before." You've shown composure, rigor, and real-world instinct — all before naming a single cause. That's the whole point of these two stages.

[VISUAL: Recap: the five clarify-questions and the three confirm-doors, side by side, ticking off.]

EV: So — clarify and confirm. Clarify with the five questions: which metric, how big, what window, sudden or gradual, and when did it start — with "when" being your golden thread. Then confirm it's real: rule out tracking bugs, data delays, and definition changes, check it's not just seasonality, and ask whether the drop is even bad. Do this, and you'll never waste an investigation chasing a ghost again.

[VISUAL: Header: "WATCH 'WHEN' SOLVE A CASE." A timeline builds; the drop snaps onto a marker.]

EV: Let me show you how fast the "when" question alone can crack a case, because it's almost magical. Imagine the interviewer says sign-ups dropped, and you ask "when exactly did it start?" They say "Thursday afternoon." So you say "let me line Thursday afternoon up against everything that happened — did we ship anything, run anything, did any external event hit?" And they reveal: "actually, we deployed a new sign-up page Thursday at noon." Case basically closed in two questions. The drop started right after the deploy — your prime suspect is screaming at you. Compare that to the candidate who never asked "when" and spends ten minutes guessing bugs and competitors in the dark. One sharp timing question did more than ten hunches. That's the power of anchoring the drop in time — it's the single highest-leverage question in the whole investigation, and it costs you one sentence.

[VISUAL: Outro card. pmnorthstar logo, subscribe prompt, "pmnorthstar.in." Next-up thumbnail: a gear labeled "WE DID THIS."]

EV: And that's how you set up a bulletproof investigation. Nail these two stages and you're already thinking like a seasoned PM. If it helped, subscribe to pmnorthstar, and grab the written version plus a library of real case studies, free, at pmnorthstar.in. Next video, we open the first big branch of causes — internal, where *we* broke something — and all the usual suspects hiding inside your own company. Catch you in the next one.

[VISUAL: Logo settles to center. End.]
