---
slug: "activation-vs-retention"
question: "What is the difference between activation and retention?"
shortAnswer: "Activation is a user reaching first value — the moment your product proves it works for them. Retention is them coming back after that. Activation is a one-time event you can design, retention is an ongoing verdict on whether the value holds. Fixing retention with an activation problem underneath never works."
category: "Metrics"
metaTitle: "Activation vs Retention — What's the Difference? (With Examples)"
metaDescription: "Activation is first value; retention is repeat value. How to tell which one is actually broken, why fixing them in the wrong order wastes quarters, and what Dropbox and Superhuman did."
keywords:
  - "activation vs retention"
  - "what is activation rate"
  - "product activation metric"
  - "retention metrics"
accentColor: "#EA580C"
relatedCaseStudyIds:
  - "cs-11"
  - "cs-35"
  - "cs-13"
updatedAt: "2026-09-07"
faqs:
  - question: "Which should you fix first, activation or retention?"
    answer: "Activation, almost always. Retention numbers are polluted by users who never reached first value — they were never really customers, so their churn tells you nothing about whether your product keeps people. Fix activation and your retention curve often improves without a single retention feature."
  - question: "What is a good activation rate?"
    answer: "There is no universal benchmark, because activation is defined per product. The useful comparison is internal: the retention curve of activated users versus non-activated ones. If those two curves look the same, your activation event is defined wrong."
  - question: "How do you define the activation moment?"
    answer: "Find the action that separates users who stay from users who leave. Look at cohorts that retained, identify what they did in week one that churned users did not, and test whether pushing new users toward that action improves their retention."
---

## The distinction that matters

A user who signs up, pokes around and leaves never activated. A user who uploaded a file, shared it with a colleague, saw the colleague open it — and then left three weeks later — churned. These are completely different problems with completely different fixes, and blended retention numbers hide which one you have.

Twitter's early growth was stuck on exactly this. New users arrived to an empty feed, saw nothing worth returning for, and left. No retention feature would have helped, because the product had never worked for them once. Suggested Users fixed the activation event — a populated feed on day one — and the retention curve moved as a consequence.

## Activation is designed, retention is earned

Activation is largely an onboarding and product-design problem. You know what the valuable action is; the work is removing everything between the user and it. Dropbox's referral loop is usually filed under growth, but its quiet achievement was activation: installing the desktop client and putting a file in the folder, which is the moment Dropbox becomes obvious.

Retention is harder because it isn't a moment you can engineer. It's the accumulated verdict on whether the product keeps being worth opening. Superhuman's approach — refusing to onboard users at scale, running a personal setup session for each one — looks absurdly unscalable until you realise they were treating activation as the thing worth spending a founder's hour on.

## How to tell which one you have

Split your cohort at the activation event and plot both retention curves. If activated users retain well and unactivated users don't, you have an activation problem, and your job is onboarding. If activated users also decay, you have a retention problem, and no amount of onboarding polish will save you — the product isn't delivering repeat value yet.

Teams get this backwards constantly, shipping re-engagement emails to people who never understood the product in the first place.
