---
slug: "what-is-a-beta-program"
question: "How do you run a good beta program?"
shortAnswer: "A beta exists to answer a specific question before general release — usually does this hold up in real conditions, not do people like it. Recruit for the situation you need represented rather than for enthusiasm, keep the group small enough to talk to individually, set an explicit end date, and decide in advance what result would make you not ship."
category: "Discovery"
metaTitle: "How to Run a Beta Program That Produces Real Answers"
metaDescription: "Running a product beta — choosing the question, recruiting the right participants, why enthusiasts skew results, and the exit criteria to agree before you start."
keywords:
  - "beta program"
  - "how to run a beta"
  - "product launch"
  - "early access program"
accentColor: "#9B8FFF"
relatedCaseStudyIds:
  - "cs-19"
  - "cs-36"
  - "cs-15"
updatedAt: "2026-09-08"
faqs:
  - question: "How many users should a beta have?"
    answer: "Small enough that you can have a real conversation with every participant — often twenty to fifty. Large betas generate volume of feedback and no understanding of it, and the ticket queue becomes a substitute for talking to anyone."
  - question: "Should a beta be open or invite-only?"
    answer: "Invite-only, in almost every case. An open beta self-selects for enthusiasts and people hunting novelty, which is the population least like your eventual users. Invitations let you deliberately include the sceptical and the ordinary."
  - question: "What is the difference between a beta and a soft launch?"
    answer: "A beta is a research activity with a question, a defined group and an end date. A soft launch is a release with limited distribution, where the intent is to ship and the limitation is about managing risk. Confusing the two produces a beta that never ends."
---

## Start with the question

A beta without a question becomes an indefinite early-access tier that nobody can close. Before inviting anyone, write down what you are trying to learn:

- Does it hold up under real data volume and real edge cases?
- Do people reach the core value without hand-holding?
- Does it survive contact with the workflows around it?
- Is the pricing comprehensible?

Each of these implies a different participant list and a different definition of success. Trying to answer all four at once answers none of them.

## Recruit against your instinct

The people who volunteer loudest are the worst sample. They are tolerant of bugs, motivated to see you succeed, unusually technical, and delighted to be early — the four traits your general population will not have.

Deliberately include:

- People who evaluated you and chose something else.
- People in the situation your feature addresses, whether or not they are excited about it.
- At least a few who will be annoyed by the change.

Digg's v4 rebuild is the case study in getting this wrong. The changes were tested and shipped, and the reaction from the actual power-user base — whose behaviour the redesign disrupted — was severe and immediate. A beta weighted toward people who liked the new direction would have confirmed the plan right up to launch.

## Keep it small and talk to people

The value of a beta is in conversation, not ticket volume. Twenty participants you speak with individually will teach you more than a thousand filing reports, because the thing you most need to learn — what they expected and did not get — rarely arrives as a bug report.

Watch what they do, not only what they say. Instrument the beta the same way you would instrument production. The gap between reported enthusiasm and actual usage is usually the finding.

## Set an end date and exit criteria

Two things, written before you start:

**An end date.** Betas without one drift into permanent limbo, where the feature is neither supported nor cancelled and nobody may plan around it.

**Exit criteria, including a stop condition.** What result means ship, and what result means do not ship. A beta that can only conclude in shipping is a rollout with extra steps and a research budget attached.

## Close it honestly

Tell participants what you learned and what you decided, including when you decided against something they asked for. Beta participants are the highest-signal group you have, and how you close the loop determines whether they answer next time.

Headspace's approach to a nervous, easily-put-off audience is the useful analogy: the design work assumed people would quietly leave rather than complain. In a beta, silence from a participant is data, and it usually means the same thing.
