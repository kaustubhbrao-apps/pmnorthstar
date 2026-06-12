import { NextRequest, NextResponse } from "next/server";
import { verifyUnsubscribeToken } from "@/lib/email";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) {
    return new NextResponse("Invalid or missing token", { status: 400 });
  }

  const userId = await verifyUnsubscribeToken(token);

  if (!userId) {
    return new NextResponse("Link expired or invalid", { status: 400 });
  }

  try {
    await prisma.user.update({
      where: { id: userId },
      data: { emailOptOut: true },
    });

    return new NextResponse(
      `
      <html>
        <head>
          <title>Unsubscribed</title>
          <style>
            body { font-family: sans-serif; max-width: 600px; margin: 40px auto; text-align: center; color: #333; }
            h1 { color: #111; }
          </style>
        </head>
        <body>
          <h1>Unsubscribed</h1>
          <p>You have been unsubscribed from Simulation League emails.</p>
        </body>
      </html>
      `,
      { headers: { "Content-Type": "text/html" } }
    );
  } catch (error) {
    return new NextResponse("An error occurred. Please try again.", { status: 500 });
  }
}
