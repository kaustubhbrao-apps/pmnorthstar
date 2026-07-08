import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Builder Draft — Which Startup Player Are You?",
  description: "Find out your startup archetype by taking the Builder Draft quiz.",
};

export default function DraftLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      {children}
    </div>
  );
}
