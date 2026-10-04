---
slug: "what-is-a-two-sided-marketplace"
question: "What is a two-sided marketplace?"
shortAnswer: "A two-sided marketplace is a platform that connects two interdependent groups — typically buyers and sellers, or supply and demand — where each side's value depends on the other side's participation. The core challenge is the cold-start problem: neither side joins without the other. Airbnb, Uber, and DoorDash are canonical examples."
category: "Growth"
metaTitle: "Two-Sided Marketplaces Explained — Cold Start, Liquidity, and Network Effects"
metaDescription: "What two-sided marketplaces are, how to solve the cold-start problem, why liquidity matters more than user count, and how Airbnb and Uber bootstrapped supply."
keywords:
  - "two-sided marketplace"
  - "marketplace strategy"
  - "cold start problem"
  - "network effects marketplace"
  - "supply and demand platform"
accentColor: "#8B5CF6"
relatedCaseStudyIds:
  - "cs-3"
  - "cs-80"
  - "cs-uber-2011-843"
  - "cs-10"
updatedAt: "2026-10-04"
faqs:
  - question: "What is the cold-start problem?"
    answer: "The cold-start problem is the chicken-and-egg dilemma of a new marketplace: buyers will not come without sellers, and sellers will not come without buyers. Every successful marketplace had to find a creative way to bootstrap one side first — usually supply — before the other side had a reason to show up."
  - question: "What is marketplace liquidity?"
    answer: "Liquidity is the probability that a participant on one side will find what they are looking for from the other side within a reasonable time. A marketplace with high liquidity feels effortless: riders get a car in three minutes, guests find an available listing in their city. Low liquidity feels broken, even if the marketplace has millions of users."
  - question: "Can a marketplace have more than two sides?"
    answer: "Yes. Advertising-supported platforms are often three-sided: users, content creators, and advertisers. Each side depends on the others. But complexity scales faster than linearly with sides, so most marketplace builders focus on getting two sides right before adding a third."
---

## The bootstrap problem

Every marketplace starts with nothing on both sides. The standard solution is to subsidise one side — usually supply — until there is enough for the demand side to have a useful experience. Uber gave early drivers guaranteed hourly minimums so they would stay online even when ride requests were sparse. Airbnb's founders famously went door-to-door in New York photographing apartments to build initial supply.

The alternative is to start with a use case where one side is already aggregated. DoorDash started in Palo Alto, where Stanford students (demand) were concentrated in a small area and local restaurants (supply) were within a few square miles. The geographic density meant that a small number of participants on each side could create a liquid experience.

## Why geography matters

Most marketplace network effects are local, not global. A rider in Mumbai does not benefit from Uber having drivers in London. This means every new city is a cold start from scratch — but it also means a competitor cannot displace you in a city where you are already liquid just by being bigger globally. Marketplace competition is usually a city-by-city land grab, not a global winner-take-all.

## The take rate

A marketplace's business model is the take rate — the percentage of each transaction that the platform keeps. Take rates vary from 5% (real estate) to 30% (food delivery) depending on how much value the platform adds. The more the platform does (matching, payments, logistics, insurance, dispute resolution), the higher the justifiable take rate. But take rates that are too high push participants to transact off-platform, which is the constant threat to every marketplace.

## Disintermediation

The existential risk for a marketplace is disintermediation — buyers and sellers meeting through the platform, then transacting directly to avoid fees. Marketplaces defend against this by embedding themselves into the transaction: handling payments, providing insurance, managing reviews, or offering logistics that neither side wants to handle themselves. Airbnb's protection guarantee and Uber's real-time pricing are not just features; they are disintermediation defences.
