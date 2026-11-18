# Video 7 — Full Worked Example: "DAU Dropped 15% — Diagnose It" | Hosted by EV

## pmnorthstar · Root Cause Analysis Series · target length 8–9 min (~1,250 spoken words)
Spoken lines prefixed EV:. [VISUAL: ...] = on-screen animation. Voice: pmnorthstar house voice — warm, confident mentor, brisk & dense (see host bible).

---

[VISUAL: Cold open. A "CASE FILE" folder slaps onto a desk on a dark stage. It flips open: "DAILY ACTIVE USERS ▼ 15% — CAUSE: UNKNOWN." A detective's lamp clicks on.]

EV: Case file time. Daily active users just dropped fifteen percent. Nobody knows why. You've got the whole framework — now watch me crack it live, start to finish, exactly like a real interview. Let's solve it.

[VISUAL: pmnorthstar logo pops. Title card: "LIVE CASE · DAU ▼ 15%."]

EV: I'm EV, from pmnorthstar. This is the video the whole series has been building toward. Our prompt: "A social app's daily active users dropped fifteen percent over the last week. Diagnose it." I'm going to run all five stages out loud, narrating every move, just like you would in the room. Watch how the framework turns panic into a clean, confident diagnosis.

[VISUAL: The five-stage flow appears in the corner and highlights each stage as EV reaches it: CLARIFY → CONFIRM → INTERNAL/EXTERNAL → SEGMENT → HYPOTHESIS.]

EV: Stage one — Clarify. I don't touch a cause yet. I interrogate the problem. "First, let me get specifics. Daily active users — defined as users who open the app and take at least one action? Good. The drop is fifteen percent — that's serious, not noise. Over the last week — so I'll ask, was it a sudden cliff on one day, or a gradual slide across the week?" Let's say the interviewer tells me: it was gradual, sliding down over about five days. Interesting — gradual, not a cliff. I file that away, because gradual nudges me slightly toward external or a slow-burn internal cause, not a single overnight break.

[VISUAL: Stage 1 checks. Stage 2 "CONFIRM" highlights. Three doors: tracking, data delay, definition — each getting a quick check mark or X.]

EV: Stage two — Confirm it's real. Before I hunt causes, is this even a real drop? "I'd first rule out measurement issues — did our tracking break, is there a reporting delay, did anyone change how DAU is defined this week?" Let's say the interviewer confirms: tracking's fine, data's complete, definition's unchanged. And one more — "is this just seasonality? Was last week a holiday?" They say no, normal week. Okay — the drop is real, and it's not the calendar. Now I investigate for real. Notice I spent under a minute here, but I just ruled out the most embarrassing false alarms.

[VISUAL: Stage 3 "INTERNAL/EXTERNAL" highlights. The tree splits; EV's path explores internal first.]

EV: Stage three — Internal versus External. Since it's gradual, I'll keep both branches open, but let me start internal, because it's fastest to check. "Did we ship any releases in the last week? Any redesigns, new flows, or features?" Say the interviewer tells me: yes, actually — we rolled out a new onboarding flow five days ago. Oh — and notice, five days ago is *exactly* when the slide started. That's a huge lead. "Were any experiments running? Any pricing changes? Any marketing changes — did an ad campaign end?" They say: no pricing change, but the onboarding redesign is the big recent thing. My internal radar is now locked onto that onboarding flow.

[VISUAL: Quiet lower-third: "Subscribe to pmnorthstar."]

EV: Quick one — if watching this come together is helping, subscribe to pmnorthstar so you can run it yourself. Now the move that cracks it — segmentation.

[VISUAL: Stage 4 "SEGMENT" highlights. The 15% total shatters into slices; EV narrates each.]

EV: Stage four — Segment, my magnifying glass. I will not accept the aggregate fifteen percent. I slice. "Let me break this DAU drop down. First, platform — is it iOS, Android, or both?" Say it's both, roughly equal — so it's not a platform-specific bug. "Okay, geography?" Global, not one country — so not a local competitor or holiday. "Now the big one — new users versus returning users?" And here the interviewer tells me: returning users are basically flat... the entire drop is coming from *new* users. And there's the crack. The drop is almost entirely new users — which lines up *perfectly* with the fact that we just changed the *onboarding* flow, the thing new users hit first.

[VISUAL: The slices narrow visually: "both platforms + global + NEW USERS" → a bright red cell. An arrow connects it to "NEW ONBOARDING FLOW (5 days ago)."]

EV: Let me stack one more slice to confirm. "Within new users, let me look at the funnel — where exactly are they dropping?" Say the interviewer reveals: new users are signing up fine, but far fewer are completing onboarding and reaching their first real action. There it is. The new onboarding flow we shipped five days ago is causing new users to drop out before they activate — so they never become active users, and DAU slides a little more each day as fewer new users stick. The segmentation and the timeline point at the exact same culprit.

[VISUAL: Stage 5 "HYPOTHESIS" highlights. A clean conclusion card assembles with a "how to confirm" line.]

EV: Stage five — the Hypothesis, delivered like a pro. "Here's my leading hypothesis: the new onboarding flow we launched five days ago is hurting new-user activation. The evidence lines up tightly — the drop started exactly when we shipped it, it's isolated entirely to new users across all platforms and regions, and within new users, the leak is at the onboarding-completion step. To confirm, I'd run two checks: compare onboarding completion rates before and after the launch, and if it's conclusive, roll back the flow for a test group to see if their activation recovers." Done. Confident cause, tight evidence, and a concrete test.

[VISUAL: All five stages check off. The case file stamps "SOLVED." The lamp clicks off.]

EV: And that's the case, cracked. Look at what just happened — I started with a terrifying vague "DAU down fifteen percent" and, in five calm stages, landed on a specific, evidence-backed cause plus a plan to confirm it. I never panicked, never machine-gunned random guesses. I clarified, confirmed it was real, split internal versus external, segmented until one slice lit up red, and let the evidence point me to the hypothesis. The timeline and the segmentation agreeing — that's what turns a guess into a diagnosis.

[VISUAL: Header: "THE RHYTHM TO INTERNALIZE." The five-stage flow pulses.]

EV: And here's the rhythm I want you to feel — it's calm and it's *led by evidence*, not by hunches. Clarify fast, confirm fast, then let segmentation do the heavy lifting. The moment one slice lights up — new users — everything else clicked into place. That's the magic: you don't have to *guess* the cause if you *narrow* to it. Find where the drop concentrates, line it up against the timeline, and the answer reveals itself.

[VISUAL: Header: "WHAT IF THE SLICE SAID SOMETHING ELSE?" The new-vs-returning slice flips to show RETURNING users dropping instead.]

EV: And here's the part that proves you really understand the framework — what if the segmentation had come back *differently*? Interviewers love to twist it, so let's practice. Say instead of new users, the slice had shown the drop was all in *returning* users, with new users totally fine. Now the onboarding theory is dead — new users are activating normally. So I'd pivot instantly: returning-user drops mean something changed in the *core* product that habituated users noticed. "I'd check — did we change a core feature returning users rely on? Did we add friction to a daily workflow? Or externally — did a competitor launch something pulling our loyal users away?" See how the *same framework* just redirected me to a completely different part of the product? That's the whole point — you're not memorizing one answer, you're running a process that adapts to whatever the evidence says. When the interviewer twists the data, you don't panic — you just follow the new slice to its new cause. The framework holds, no matter what the data reveals.

[VISUAL: Outro card. pmnorthstar logo, subscribe prompt, "pmnorthstar.in." Next-up thumbnail: a red flag turning into a gold star.]

EV: If seeing the full investigation in motion made it click — subscribe to pmnorthstar, and grab this entire worked case written out, plus a huge library of real case studies, free, at pmnorthstar.in. One video left, and it's essential — the common mistakes that sink people, and exactly how to deliver your findings so you sound like the smartest person in the room. Catch you in the next one.

[VISUAL: Logo settles to center. End.]
