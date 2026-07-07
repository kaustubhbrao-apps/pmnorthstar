---
id: cs-137
slug: baca-systems-salesforce
company: BACA Systems
title: BACA Systems - Running a Robotics Factory on a CRM
category: Operations
description: >-
  BACA Systems, a 50-person robotics manufacturer, defied convention by ripping out their massive, legacy manufacturing ERP system. Instead of buying another traditional manufacturing tool, they re-architected Salesforce to serve as their factory floor's central nervous system. 
outcome: Saved over $200,000 in legacy software fees and unified the sales and manufacturing pipelines into a single interface.
year: 2021
tags:
  - Operations
  - Enterprise
  - B2B
  - Infrastructure
  - Tech
logo: "🤖"
faqs:
  - question: Why is using a CRM to run a factory unusual?
    answer: >-
      CRMs like Salesforce are fundamentally designed to track customer conversations, leads, and sales pipelines. Factories require heavy ERPs (Enterprise Resource Planning) to track raw materials, supply chains, physical inventory, and machine floor schedules. Merging the two usually requires fragile integrations, but BACA forced the CRM to do both natively.
---

## The ERP Dilemma in Heavy Manufacturing

BACA Systems is not a typical Silicon Valley software company. They are a heavy industrial manufacturer operating out of Detroit. They build massive, highly complex robotic arms (often weighing thousands of pounds) that are used by fabrication shops to cut stone and granite countertops with laser precision. 

Running a physical robotics factory requires intense, real-time coordination. You have supply chain logistics for raw steel and electronic components, strict factory floor scheduling, intricate bill of materials (BOM) management, and complicated customer deployment schedules involving flatbed trucks and onsite rigging.

Traditionally, the only way to manage this complexity is by relying on a monolithic Enterprise Resource Planning (ERP) system—software like SAP, Oracle NetSuite, or Epicor. 

However, BACA was suffering from a classic industrial bottleneck. Their legacy ERP was bloated, incredibly expensive to maintain, and completely disconnected from their sales and customer service teams. Whenever a salesperson closed a multi-million dollar robotics deal, the handoff to the factory floor was a messy, disjointed process involving exported spreadsheets, duplicated data entry, and inevitable human error. 

## Ripping out the Foundation

Most manufacturers faced with an aging ERP simply bite the bullet, buy a newer, shinier ERP, and pay millions of dollars to implementation consultants to migrate their data. 

BACA Systems took a radical, highly unorthodox approach. They recognized that they were already using Salesforce successfully to manage their front-office sales pipeline. They decided to see how far they could push the platform's underlying relational database. 

Instead of undergoing a multi-year ERP migration, they ripped out their legacy ERP entirely. They decided to run their entire factory floor on their CRM.

Working with technical implementation consultants (Rootstock Software, built natively on the Salesforce platform), they built a "Headless 360" operational layer directly on top of Salesforce's infrastructure. 

## Hacking the CRM for Heavy Manufacturing

Salesforce is fundamentally designed to track human interactions: "Leads," "Contacts," "Opportunities," and "Accounts." BACA Systems had to re-architect these underlying data models to track physical steel and robotic servos.

They bent the CRM's object architecture to track:
1.  **Multi-level Bills of Materials (BOMs):** Tracking the thousands of individual parts that go into a single robotic arm.
2.  **Physical Inventory Levels:** Syncing warehouse stock levels with the cloud database.
3.  **Manufacturing Queues:** Managing the literal assembly line schedule on the factory floor.

By doing this, they achieved the Holy Grail of enterprise operations: a single source of truth across the entire 50-person company, without relying on fragile APIs to sync two different massive databases.

*   **For Sales:** The CRM worked exactly as it always had. But now, when a rep looked at an Account, they didn't just see the contract value; they had real-time visibility into the exact factory floor status of that client's robot, allowing them to give accurate delivery timelines without calling the shop floor manager.
*   **For the Factory:** The manufacturing work orders were directly populated the exact second a sales contract was marked "Closed Won." There was zero data transfer latency and zero transcription error. The factory knew instantly what needed to be built.
*   **For Customer Support:** When a BACA robotic arm broke down in the field a year later, the remote technician could open Salesforce and see the exact, real-time manufacturing history of that specific unit. They could see which batch of servos was used, exactly who assembled it, and its complete service history, all in one pane of glass.

## The Impact of Consolidated Architecture

The financial impact of this architectural bet was immediate and undeniable. BACA Systems saved over **$200,000 annually** in legacy software licensing, server maintenance, and IT consulting fees by consolidating their operations onto a platform they were already paying for. 

But the operational velocity was the true win. By eliminating the "swivel chair" integration (where employees have to swivel from one screen running the CRM to another screen running the ERP), they shaved days off their order-to-cash cycle. 

They refused to accept the conventional wisdom that "manufacturing requires an ERP," proving that underlying data architecture and object flexibility matter far more than the label on the software box. 

## Deep-Dive Takeaways

1.  **Question Legacy Categories:** Just because a software category exists (like ERP or CRM) doesn't mean you must rigidly adhere to its boundaries. If an adjacent tool has the database flexibility and relational architecture to do the job natively, consolidation is often the superior strategic route.
2.  **Eliminate the Handoff Friction:** The most expensive points of friction in any business—measured in both dollars and customer frustration—occur at the handoffs between isolated teams (Sales to Manufacturing, Manufacturing to Support). A unified data layer eliminates that friction entirely.
3.  **Flexibility Over Features:** BACA succeeded because they relied on a platform with a highly customizable underlying metadata architecture, allowing them to morph a standard B2B sales tool into a heavy industrial command center.
4.  **The Cost of Context Switching:** Moving operations into a single pane of glass didn't just save licensing fees; it saved human cognitive load. Employees could trace a customer journey from the first cold call to the final maintenance ticket without ever changing UI paradigms.
