---
id: cs-157
slug: brex-corporate-cards-for-startups
company: Brex
title: "Brex: Underwriting Startups on Bank Balances, Not Credit History"
category: Product
description: "How Henrique Dubugras and Pedro Franceschi turned venture capital deposits into instant credit limits, reinventing corporate banking for tech startups."
outcome: "Reached a $12B peak valuation and issued billions in monthly card volume by solving the seed-stage banking roadblock."
year: 2017
tags:
  - Fintech
  - Banking
  - B2B
  - Underwriting
  - Startups
logo: "💳"
faqs:
  - question: "Why couldn't venture-backed startups get corporate credit cards before Brex?"
    answer: "Traditional commercial banks (Chase, Amex, Silicon Valley Bank) evaluated corporate credit using multi-year audited financial statements, positive operating profits, or personal founder credit guarantees. A newly funded startup with $5M in the bank but zero revenue was rejected as an uncreditworthy entity."
  - question: "How did Brex underwrite credit without personal guarantees?"
    answer: "Brex connected directly to the startup's bank account via API. Instead of evaluating historical profits, Brex dynamically calculated credit limits based on real-time cash balance and burn rate, adjusting limits daily and automatically debiting accounts every 30 days."
  - question: "What was Brex's famous early billboard marketing campaign in San Francisco?"
    answer: "Brex bought hundreds of billboards across San Francisco, specifically targeting commuter corridors like Highway 101 and Caltrain stations, saturating the tech community with bold, simple messaging: 'Corporate Cards for Startups.'"
publishedAt: '2026-10-09'
---

## The Billion-Dollar Startup Forced to Use Personal Debit Cards

In 2017, getting accepted into Y Combinator and raising a $3 million seed round was celebrated with champagne. But when the founders sat down on Monday to buy Google Cloud credits, set up Zoom accounts, and purchase team laptops, they ran into an absurd banking wall.

Traditional corporate card issuers like American Express, Chase, and Wells Fargo evaluated corporate credit using legacy rubrics:
- Three years of audited financial tax returns showing positive net income.
- Formal physical commercial leases.
- Or, most painfully, **personal founder guarantees**.

If a 22-year-old immigrant founder had just raised $5 million from Sequoia Capital, traditional banks still demanded a personal credit score and made the founder personally liable for corporate debts with a meager $2,000 credit limit. Founders routinely put tens of thousands of dollars of corporate SaaS charges onto their personal credit cards or relied on debit cards that locked up working capital.

Henrique Dubugras and Pedro Franceschi, two Brazilian founders who had previously built and sold payments processor Pagar.me, experienced this exact humiliation when entering YC to build a virtual reality startup. They realized the VR market was nascent, but the startup banking problem was a screaming fire.

## The Underwriting Breakthrough: Cash Balance Over Profit

Dubugras and Franceschi killed their VR project and founded Brex around a simple, radical underwriting insight: **A startup with $5 million in venture backing and zero revenue is far less credit-risky than a five-year-old restaurant with $500,000 in revenue.**

Instead of asking for tax returns or personal FICO scores, Brex engineered modern algorithmic underwriting:
1. **Direct API Plaid Integration:** Brex plugged directly into the startup's bank account, monitoring real-time cash balances.
2. **Dynamic 10-20x Credit Limits:** Credit limits were calculated dynamically as a percentage of available liquid cash. A startup with $1 million in the bank received an instant $100,000 corporate credit limit without a personal guarantee.
3. **Daily/Monthly Auto-Debits:** Rather than revolving consumer-style debt with high interest rates, Brex automatically deducted the full card balance directly from the bank account at the end of each cycle, virtually eliminating default risk.

A founder could register on Brex's website, connect their bank, and issue virtual credit cards to employees within five minutes.

## The San Francisco Billboard Blitz

Enterprise B2B fintech companies rarely use out-of-home advertising. Brex shattered this consensus by executing one of the most concentrated billboard campaigns in startup history.

In 2018, Brex bought every available billboard along Highway 101 between San Francisco and Silicon Valley, blanketed Caltrain stations, and dominated San Francisco International Airport terminals. The billboards carried clean, bold copy: *"Corporate Cards for Startups. No personal guarantee. Sign up in 5 minutes."*

To a casual consumer, the billboards were white noise. But to the hyper-concentrated demographic of founders, tech executives, and venture capitalists commuting down the peninsula, Brex seemed like a ubiquitous, well-funded institution overnight.

## The All-in-One Spend Platform

Issuing the card was merely the customer acquisition wedge. Brex quickly realized that corporate spend management was deeply intertwined with receipt collection and accounting:
- **Receipt Capture via SMS:** Employees swiped their Brex card, immediately received a text message, replied with a photo of the receipt, and Brex’s OCR matched it to the transaction automatically.
- **ERP Integration:** Syncing transactions seamlessly into QuickBooks, NetSuite, and Xero with automated GL code categorization.
- **Brex Cash:** Expanding from credit cards into full business checking accounts, bill pay, and venture debt financing.

By capturing startups at the moment of incorporation, Brex built an engine that grew in step with the tech economy, reaching a peak private valuation of $12 billion and proving that underwriting should be based on real-time data rather than legacy corporate artifacts.

## Deep-Dive Takeaways for Builders

1. **Re-evaluate Legacy Risk Rubrics:** When an entire industry uses obsolete underwriting criteria (like requiring multi-year profits for asset-rich tech startups), building a risk model around modern real-time data primitives creates a massive structural advantage.
2. **Remove Personal Founder Liability:** In B2B products, eliminating personal risk for the decision-maker (e.g., removing the personal guarantee) unlocks explosive conversion velocity that incumbents cannot match.
3. **Hyper-Targeted Physical Satiation Works:** When your target audience is geographically and culturally clustered, concentrated out-of-home marketing creates the perception of overwhelming market authority for a fraction of the cost of global digital ad auctions.
