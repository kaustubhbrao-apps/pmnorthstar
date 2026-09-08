---
slug: "what-is-user-story-mapping"
question: "What is user story mapping?"
shortAnswer: "User story mapping arranges work as a two-dimensional map: the horizontal axis is the sequence of steps a user takes to accomplish something, and the vertical axis is depth of implementation within each step. Slicing horizontally across the map produces a release that works end to end, which is the entire point — a flat backlog cannot show you whether a release is usable."
category: "Prioritisation"
metaTitle: "User Story Mapping Explained: The Two-Axis Alternative to a Flat Backlog"
metaDescription: "User story mapping explained — the backbone, the vertical slices, how to cut a first release that actually works end to end, and when the technique is overkill."
keywords:
  - "user story mapping"
  - "story map"
  - "Jeff Patton"
  - "release planning"
accentColor: "#26A69A"
relatedCaseStudyIds:
  - "cs-7"
  - "cs-13"
  - "cs-73"
updatedAt: "2026-09-08"
faqs:
  - question: "How is a story map different from a backlog?"
    answer: "A backlog is a ranked list, which flattens away the fact that some items only make sense together. A story map keeps the user's sequence visible on one axis, so you can see at a glance whether a proposed release covers every step of the journey or leaves a hole in the middle."
  - question: "What is the backbone of a story map?"
    answer: "The top row — the ordered high-level activities a user moves through, left to right, in the order they happen. It is deliberately coarse: browse, choose, pay, track. Everything else hangs beneath it."
  - question: "Is story mapping only for new products?"
    answer: "It is most valuable when scoping something new or substantially reworked, because that is when the risk of shipping a partial journey is highest. For incremental work on a mature product it is usually more ceremony than it is worth."
---

## The two axes

The **horizontal** axis is the user's journey in the order it happens. For a marketplace: find an item, evaluate it, buy it, track delivery, get support. This row is the backbone, and it is narrative — you should be able to read it aloud as a sentence.

The **vertical** axis is depth. Beneath find an item sit the many possible implementations: a search box, filters, saved searches, personalised recommendations, visual similarity search. Higher means more essential, lower means more elaborate.

## Why the second axis is the whole idea

A flat backlog ranked by score will happily produce a top ten that contains four excellent search features and nothing about checkout. Every item is individually justified, and the release is unusable, because a user cannot buy anything.

The map makes this impossible to miss. You cut a release by drawing a **horizontal line** across the map, taking the top row of everything. The result is thin in every step but complete across all of them — the user can get from one end to the other. The second release drops the line lower.

That is the technique. Everything else is stationery.

## Where it pays off most

Anywhere a partial journey is worthless. Payments, onboarding, checkout, anything regulated. Half a KYC flow is not half a feature; it is zero features and some wasted engineering.

It is also the fastest way to surface disagreement about scope. Teams that agree on a feature list frequently disagree about the journey it belongs to, and that disagreement stays hidden in a list and becomes obvious on a map.

Gmail's redesign was fundamentally a rearrangement of the mail journey rather than a set of new capabilities — conversation threading changed the sequence of steps a user moved through, which is the kind of change a story map represents well and a ranked backlog represents badly.

## The common failures

**A backbone that is a feature list.** If the top row reads search, filters, notifications, it is a component inventory, not a journey. It should read as things a person does, in order.

**Mapping the system instead of the user.** The axis is what the user does, not what your services do. As soon as the backbone contains a queue or a service name, the map has stopped answering its question.

**Treating the map as permanent.** It is a planning conversation that leaves a residue, not a document to maintain. Use it to cut releases, then let the tracker carry the work.

Linear's opinionated refusal to be endlessly configurable is the same instinct at product level: pick the journey, make it excellent, and decline to support every possible variation of it.
