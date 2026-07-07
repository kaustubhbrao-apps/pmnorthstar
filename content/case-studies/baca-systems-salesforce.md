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

## The ERP Dilemma

BACA Systems manufactures massive, highly complex robotic arms used for cutting stone and granite. Running a physical robotics factory requires intense coordination between supply chain logistics, inventory management, factory floor scheduling, and customer deployment. 

Traditionally, this meant relying on a monolithic Enterprise Resource Planning (ERP) system (like SAP or Oracle). However, BACA's legacy ERP was bloated, expensive, and completely disconnected from their sales and customer service teams. Whenever a salesperson closed a multi-million dollar robotics deal, the handoff to the factory floor was a messy, disjointed process. 

## Ripping out the Foundation

Most manufacturers faced with this problem simply buy a newer, shinier ERP and pay millions to integration consultants. 

BACA Systems took a radical, highly unorthodox approach. Since they were already using Salesforce to manage their sales pipeline, they decided to see how far they could push the platform. They ripped out their legacy ERP entirely.

Working with consultants, they built a "Headless 360" platform directly on top of Salesforce. 

## Hacking the CRM for Heavy Manufacturing

Salesforce is designed around "Leads," "Contacts," and "Opportunities." BACA Systems re-architected these underlying data models.

They bent the CRM to track bills of materials, physical inventory levels, and manufacturing queues. By doing this, they created a single source of truth across the entire 50-person company. 

*   **For Sales:** The CRM worked exactly as it always had, but with real-time visibility into factory floor delays.
*   **For the Factory:** The manufacturing queue was directly populated the second a sales contract was signed, with no data transfer latency.
*   **For Customer Support:** Technicians could see the exact, real-time manufacturing history of a specific robotic arm when diagnosing a hardware issue in the field.

## The Impact

The financial impact was immediate: BACA Systems saved over $200,000 in legacy software licensing and maintenance fees by consolidating onto a platform they were already paying for. 

More importantly, the operational velocity of the company skyrocketed. By refusing to accept the conventional wisdom that "manufacturing requires an ERP," BACA Systems proved that data architecture matters more than the label on the software box. 

## Key Takeaways

1.  **Question Legacy Categories:** Just because a software category exists (like ERP) doesn't mean you must participate in it. If an adjacent tool (like a CRM) has the database flexibility to do the job, consolidation is often the better route.
2.  **Eliminate the Handoff:** The most expensive points of friction in any business occur at the handoffs between teams (Sales to Manufacturing, Manufacturing to Support). A unified data layer eliminates that friction entirely.
3.  **Flexibility Over Features:** BACA succeeded because they relied on a platform with highly customizable underlying architecture, allowing them to morph a sales tool into an industrial command center.
