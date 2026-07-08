import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { DRAFT_PLAYERS } from "@/lib/draft/players";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const archetypeId = searchParams.get("id");
    const v = searchParams.get("v") || "50";
    const e = searchParams.get("e") || "50";
    const c = searchParams.get("c") || "50";
    const d = searchParams.get("d") || "50";
    const f = searchParams.get("f") || "50";

    const player = DRAFT_PLAYERS.find((p) => p.id === archetypeId) || DRAFT_PLAYERS[0];

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#111111",
            fontFamily: "sans-serif",
            padding: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#222222",
              border: "4px solid #D4102F", // Brand color
              borderRadius: "20px",
              padding: "40px",
              width: "500px",
              boxShadow: "0px 10px 30px rgba(212, 16, 47, 0.3)",
            }}
          >
            <h1 style={{ fontSize: "60px", color: "#FFFFFF", margin: "0 0 10px 0" }}>{player.name}</h1>
            <h2 style={{ fontSize: "30px", color: "#D4102F", margin: "0 0 40px 0" }}>{player.archetype}</h2>

            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "0 20px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "40px", color: "#fff", fontWeight: "bold" }}>{v}</span>
                <span style={{ fontSize: "16px", color: "#888", textTransform: "uppercase" }}>VIS</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "40px", color: "#fff", fontWeight: "bold" }}>{e}</span>
                <span style={{ fontSize: "16px", color: "#888", textTransform: "uppercase" }}>EXE</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "40px", color: "#fff", fontWeight: "bold" }}>{c}</span>
                <span style={{ fontSize: "16px", color: "#888", textTransform: "uppercase" }}>CHA</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "40px", color: "#fff", fontWeight: "bold" }}>{d}</span>
                <span style={{ fontSize: "16px", color: "#888", textTransform: "uppercase" }}>DEF</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "40px", color: "#fff", fontWeight: "bold" }}>{f}</span>
                <span style={{ fontSize: "16px", color: "#888", textTransform: "uppercase" }}>FLR</span>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "40px", fontSize: "24px", color: "#666" }}>pmnorthstar.in/draft</div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
