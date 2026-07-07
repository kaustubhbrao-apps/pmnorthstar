---
id: cs-136
slug: salesforce-no-software
company: Salesforce
title: Salesforce's "No Software" Revolution
category: Strategy
description: >-
  Salesforce aggressively launched with a "No Software" positioning campaign, attacking legacy incumbents like Siebel Systems by offering CRM delivered over the internet via a subscription. They invented the modern SaaS business model and revolutionized B2B software distribution.
outcome: Created the multi-billion dollar SaaS industry and reached a market cap over $250 billion.
year: 1999
tags:
  - B2B
  - SaaS
  - Marketing
  - Strategy
  - Positioning
logo: "☁️"
faqs:
  - question: What was the "No Software" campaign?
    answer: >-
      Salesforce positioned itself against traditional enterprise software (which required expensive servers, long installation times, and high upfront costs) by calling their cloud-based solution "No Software". They even hired actors to protest outside their competitor's conference with signs reading "Software is Obsolete".
---

## The Enterprise Software Nightmare of 1999

If you were a VP of Sales in 1999 and you needed a Customer Relationship Management (CRM) system, your options were bleak. The market was utterly dominated by behemoths like Siebel Systems and Oracle. The product you bought wasn't really a product—it was a construction project.

You paid millions of dollars upfront for a perpetual software license. You bought expensive Sun Microsystems or HP servers to run the database. You paid Oracle for the underlying relational database license. And then, you hired an army of systems integrators from Accenture or IBM to spend 6 to 18 months installing, configuring, and customizing the software on your premises.

By the time the system actually went live, the sales process it was designed to support had likely changed. And if the software failed, or the implementation was botched, you still owned it. The vendor already had their license fee. The financial risk rested entirely on the customer. 

It was a highly lucrative model for vendors (producing massive upfront CapEx revenue) but a rigid, expensive, and frustrating experience for the buyers.

## The Multi-Tenant Epiphany

Marc Benioff, a rising star executive at Oracle, looked at consumer web applications like Amazon and Yahoo and had an epiphany. Why wasn’t enterprise software delivered the same way? Why couldn't business applications be as easy to use and access as buying a book on Amazon?

Benioff left Oracle to start Salesforce with a radically different vision: software delivered over the internet, accessible via a web browser, and paid for on a monthly subscription basis per user.

At the time, "Application Service Providers" (ASPs) existed. But ASPs were essentially hosting traditional, single-tenant software off-site. They still had to maintain a separate version of the software and a separate database instance for every single customer. It was unscalable and margin-destroying.

Salesforce did something fundamentally different on the engineering side: they built a true **multi-tenant architecture**. 

In multi-tenancy, all customers—from a 5-person startup to a 50,000-employee enterprise—shared the exact same underlying infrastructure, the same database, and the same codebase. 

To make this work securely, Salesforce pioneered a metadata-driven architecture. The core application was stateless. Customer data, customizations, UI layouts, and business logic were stored as metadata. When a user logged in, the runtime engine generated a custom virtual application on the fly using that customer's specific metadata. 

This technical decision was the bedrock of their financial success. Because there was only one version of the software, Salesforce didn't have to support legacy versions. When they updated the code on a Sunday night, every customer woke up on Monday morning with the newest features. Maintenance costs plummeted, and gross margins soared.

## The "No Software" Guerrilla War

Having a superior technical architecture doesn't guarantee market share, especially when you are a startup selling to enterprise CIOs who are heavily incentivized to "buy IBM" or "buy Siebel" to avoid getting fired. 

To break through the noise, Salesforce needed a marketing campaign that was as disruptive as its technology. Benioff realized that if he tried to sell "a better CRM," he would lose to Siebel's massive feature checklist. Instead, he didn't sell features—he attacked the entire paradigm of software delivery.

He launched the infamous **"No Software"** campaign. 

The company designed a logo featuring the word "SOFTWARE" in a red circle with a slash through it, mimicking a "No Smoking" sign. The message was provocative, arrogant, and clear: traditional software was difficult, expensive, and obsolete. Salesforce wasn't software; it was a service.

### The Stunt at Siebel User Week

In February 2000, Siebel Systems was hosting its massive annual user conference at the Moscone Center in San Francisco. Thousands of enterprise buyers were in attendance.

Benioff orchestrated a masterful piece of guerrilla marketing. He hired fake protestors carrying picket signs that read "Software is Obsolete" and "The Internet is the Future." They marched outside the conference doors, chanting anti-software slogans. To ensure the stunt worked, Benioff even hired a fake news crew (complete with a microphone and cameraman) to "cover" the protest. 

The fake news crew drew the attention of real journalists covering the event. Tom Siebel was reportedly furious, going so far as to call the police on the protestors. 

The stunt worked flawlessly. It firmly positioned Salesforce as the scrappy, innovative challenger taking down the bloated, expensive Goliath. It forced the media to write about "Cloud vs. On-Premise" rather than "Salesforce features vs. Siebel features." By changing the dimension of competition, Salesforce made Siebel's primary strength (massive enterprise installations) look like a fatal weakness.

## The GTM Playbook: The City Tour

Because enterprise CIOs were skeptical of "the cloud" (a term that didn't even exist yet; they called it SaaS or ASP), Salesforce couldn't rely on traditional top-down enterprise sales. CIOs were terrified of data security risks.

Instead, Salesforce targeted the end-users: VPs of Sales and Sales Directors. These were the people suffering the most from Siebel's clunky interfaces. Because Salesforce was a cheap monthly subscription that didn't require hardware or IT approval, a VP of Sales could simply expense it on a corporate credit card. It was the birth of the "shadow IT" enterprise motion.

To acquire these users, Salesforce launched the "City Tour." They rented out hotel ballrooms in major cities and invited prospects to a free breakfast seminar. But instead of Salesforce executives pitching the product, they had their *existing* early customers get on stage and talk about how fast they deployed the CRM and how much their sales reps loved it. 

The City Tour was an incredible conversion engine. It localized the social proof. When a VP of Sales in Chicago saw another VP of Sales in Chicago succeeding with Salesforce, the perceived risk vanished.

## Inventing Customer Success

By shifting from massive upfront capital expenditures (CapEx) to predictable, monthly operating expenses (OpEx), Salesforce democratized enterprise software. 

But this subscription model introduced a terrifying new metric to the software industry: **Churn**.

In the old Siebel model, if a customer hated the software after year one, it didn't matter. Siebel already had their $2 million license fee. In the Salesforce model, if a customer hated the software after year one, they simply stopped paying their $50/month subscription. 

Salesforce realized that in a SaaS model, *the vendor assumes the risk of adoption*. If users didn't log in, the account would churn, and Salesforce would lose the money they spent acquiring the customer (CAC).

To combat this existential threat, Salesforce created a completely new department in 2005: **Customer Success**. 

Unlike Customer Support (which is reactive and waits for the phone to ring with a bug report), Customer Success was proactive. Their only job was to monitor usage metrics, train users, ensure the customer was getting ROI, and secure the renewal. Today, Customer Success is a staple of every B2B SaaS company on earth, but it was born out of the raw financial necessity of the Salesforce subscription model.

## The Platform Play: AppExchange

By 2005, Salesforce had won the CRM battle. But Benioff knew that CRM was just a wedge. To become an unassailable giant, they needed to become an ecosystem.

Customers were constantly asking Salesforce to build custom applications for HR, finance, and operations. Instead of building those apps themselves, Salesforce opened up their underlying platform (Force.com) to third-party developers. 

In 2006, they launched the **AppExchange**, the first marketplace for business software (predating the Apple App Store by two years). Developers could build enterprise apps on Salesforce's infrastructure and sell them directly to Salesforce's massive customer base.

The AppExchange created an insurmountable moat. If a company used Salesforce for CRM, and also used five different AppExchange apps for their business operations, ripping out Salesforce became practically impossible. They weren't just a product anymore; they were the operating system for the business.

## Deep-Dive Takeaways

1. **Change the Axis of Competition:** Salesforce knew they would lose a feature-by-feature battle against Siebel. Instead, they changed the conversation to "Delivery Method." They made Siebel's massive, complex enterprise installations—previously a badge of honor for CIOs—look like a costly, archaic burden.
2. **Metadata Architecture as a Financial Lever:** True multi-tenancy wasn't just an engineering feat; it was the foundation of SaaS unit economics. By maintaining only one version of the software, Salesforce achieved gross margins that on-premise vendors could only dream of.
3. **The Vendor Must Own the Adoption Risk:** SaaS aligns the vendor's financial success with the customer's operational success. If you charge a subscription, you must invest heavily in proactive Customer Success, because a booked deal is worthless if the customer churns in month six.
4. **Platform over Product:** The AppExchange proved that the ultimate moat in B2B software isn't feature superiority; it's ecosystem lock-in. When third-party developers build businesses on top of your infrastructure, your product becomes a gravity well.
