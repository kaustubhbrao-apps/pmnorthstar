import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { SidebarShell } from "@/components/SidebarShell";
import { DraftQuizClient } from "./DraftQuizClient";
import { prisma } from "@/lib/prisma";

export default async function DraftPlayPage() {
  const session = await getSession();

  if (!session) {
    redirect("/draft");
  }

  const attempts = await prisma.builderDraftAttempt.findMany({
    where: { userId: session.id },
    orderBy: { attemptedAt: "desc" },
  });

  if (attempts.length >= 2) {
    const latest = attempts[0];
    const stats = latest.stats as any;
    redirect(`/draft/result/${latest.archetypeId}?v=${stats.vision}&e=${stats.execution}&c=${stats.chaos}&d=${stats.defense}&f=${stats.flair}`);
  }

  return (
    <SidebarShell activeNav="league">
      <DraftQuizClient />
    </SidebarShell>
  );
}
