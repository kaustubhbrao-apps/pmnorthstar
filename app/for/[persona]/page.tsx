import { notFound } from "next/navigation";
import { SidebarShell } from "@/components/SidebarShell";
import { publishedCaseStudies } from "@/data/caseStudies";
import { SubscribeForm } from "@/components/SubscribeForm";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";

export const revalidate = 3600;

interface Persona {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

const PERSONAS: Record<string, Persona> = {
  "product-managers": {
    id: "product-managers",
    title: "For Product Managers",
    subtitle: "Master product strategy and execution.",
    description: "Deep-dive case studies on how top PMs navigate pivots, growth, and feature prioritization. Build intuition through real-world product failures and triumphs.",
    tags: ["Product", "Strategy", "Growth", "UX"]
  },
  "founders": {
    id: "founders",
    title: "For Founders",
    subtitle: "Navigate the zero-to-one and scale.",
    description: "Learn from the brutal mistakes and brilliant strategic bets of early-stage startups. Discover how successful founders found product-market fit and beat the competition.",
    tags: ["Business", "Strategy", "Growth", "Pivot", "Leadership"]
  },
  "engineers": {
    id: "engineers",
    title: "For Engineers",
    subtitle: "Understand the business context of code.",
    description: "Explore the intersection of engineering decisions and business outcomes. See how technical debt, architecture, and AI integrations dictate market success.",
    tags: ["Tech", "Engineering", "AI", "Performance", "Infrastructure"]
  },
  "designers": {
    id: "designers",
    title: "For Designers",
    subtitle: "Design that drives business impact.",
    description: "Analyze how UI/UX choices make or break products. From onboarding friction to radical redesigns that alienated core users, learn the stakes of product design.",
    tags: ["Design", "UX", "UI", "Onboarding", "Brand"]
  },
  "marketers": {
    id: "marketers",
    title: "For Marketers",
    subtitle: "Growth, GTM, and distribution.",
    description: "Study viral loops, failed launch strategies, and brilliant Go-To-Market plays. Understand how positioning and distribution can beat a superior product.",
    tags: ["Marketing", "Growth", "GTM", "Positioning", "Brand"]
  }
};

export function generateStaticParams() {
  return Object.keys(PERSONAS).map((persona) => ({
    persona,
  }));
}

export async function generateMetadata({ params }: { params: { persona: string } }): Promise<Metadata> {
  const p = PERSONAS[params.persona];
  if (!p) return {};
  
  return {
    title: `${p.title} - Northstar`,
    description: p.description,
  };
}

export default async function PersonaPage({ params }: { params: { persona: string } }) {
  const persona = PERSONAS[params.persona];

  if (!persona) {
    notFound();
  }

  // Filter case studies by matching tags
  const allStudies = publishedCaseStudies();
  const matchedStudies = allStudies.filter(study => 
    study.tags.some(tag => persona.tags.some(pt => pt.toLowerCase() === tag.toLowerCase()))
  ).slice(0, 20); // show top 20 relevant studies

  return (
    <SidebarShell activeNav="library" backLabelDesktop="Back to the library" backHref="/">
      <div className="flex-1 flex flex-col px-4 sm:px-8 md:px-12 pt-12 md:pt-20 pb-16 max-w-4xl mx-auto w-full relative z-10">
        
        <div className="mb-12">
          <div className="inline-block px-3 py-1 mb-6 border rounded-full font-mono text-[10px] uppercase tracking-[0.2em]"
               style={{ borderColor: "var(--brand-primary)", color: "var(--brand-primary)", backgroundColor: "rgba(243,18,60,0.05)" }}>
            Curated Collection
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4" style={{ color: "var(--text-primary)" }}>
            {persona.title}
          </h1>
          <p className="text-xl font-medium mb-4" style={{ color: "var(--text-primary)" }}>
            {persona.subtitle}
          </p>
          <p className="text-base md:text-lg opacity-70 max-w-2xl" style={{ color: "var(--text-muted)" }}>
            {persona.description}
          </p>
        </div>

        <div className="mb-16">
          <h2 className="font-mono text-sm uppercase tracking-[0.2em] mb-6 border-b pb-4" style={{ color: "var(--text-faint)", borderColor: "var(--border-subtle)" }}>
            Recommended Case Studies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {matchedStudies.map(study => (
              <Link 
                key={study.id} 
                href={`/case-study/${study.id}`}
                className="group flex flex-col p-5 rounded-lg border transition-all hover:-translate-y-1"
                style={{ background: "var(--card-bg)", borderColor: "var(--border-subtle)" }}
              >
                <div className="text-xs font-mono uppercase tracking-widest mb-2 opacity-60">
                  {study.company}
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-[var(--brand-primary)] transition-colors line-clamp-2" style={{ color: "var(--text-primary)" }}>
                  {study.title}
                </h3>
                <p className="text-sm opacity-70 line-clamp-2 mt-auto" style={{ color: "var(--text-muted)" }}>
                  {study.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t pt-12" style={{ borderColor: "var(--border-subtle)" }}>
          <div className="p-8 rounded-xl border relative overflow-hidden group" style={{ background: "var(--card-bg)", borderColor: "var(--border-subtle)" }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
                 style={{ background: "radial-gradient(circle at top right, rgba(243,18,60,0.1), transparent 50%)" }} />
            <div className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto">
              <SubscribeForm surface={`pseo-${persona.id}`} headline={`Join the top 1% of ${persona.title.replace('For ', '')}`} subhead="Get one deep-dive case study or strategic drill delivered to your inbox every Sunday. No fluff, just hard-won lessons." />
            </div>
          </div>
        </div>
      </div>
    </SidebarShell>
  );
}
