import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { SidebarShell } from "@/components/SidebarShell";
import { DraftQuizClient } from "./DraftQuizClient";

export default async function DraftPlayPage() {
  const session = await getSession();

  if (!session) {
    redirect("/draft");
  }

  return (
    <SidebarShell activeNav="league">
      <DraftQuizClient />
    </SidebarShell>
  );
}
