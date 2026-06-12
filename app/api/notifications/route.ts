import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ notifications: [] });

    // Fetch unread notifications
    const notifications = await prisma.inAppNotification.findMany({
      where: { userId: session.id, isRead: false },
      orderBy: { createdAt: "asc" }, // Oldest first so we show them in order
      take: 5, // Don't overwhelm the user if they have many
    });

    return NextResponse.json({ notifications });
  } catch (error) {
    return NextResponse.json({ notifications: [] });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { notificationIds } = body;

    if (!Array.isArray(notificationIds) || notificationIds.length === 0) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    await prisma.inAppNotification.updateMany({
      where: {
        id: { in: notificationIds },
        userId: session.id,
      },
      data: { isRead: true },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to mark read" }, { status: 500 });
  }
}
