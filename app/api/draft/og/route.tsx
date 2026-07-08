import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { DRAFT_PLAYERS } from "@/lib/draft/players";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const archetypeId = searchParams.get("id");
    const v = parseInt(searchParams.get("v") || "50");
    const e = parseInt(searchParams.get("e") || "50");
    const c = parseInt(searchParams.get("c") || "50");
    const d = parseInt(searchParams.get("d") || "50");
    const f = parseInt(searchParams.get("f") || "50");

    const player = DRAFT_PLAYERS.find((p) => p.id === archetypeId) || DRAFT_PLAYERS[0];
    
    // Overall rating
    const ovr = Math.round((v + e + c + d + f) / 5);

    // Get initials for the portrait replacement
    const initials = player.name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F3123C", // Northstar Brand Red Background
            fontFamily: "sans-serif",
            backgroundImage: "radial-gradient(circle at 50% 50%, #ff2a55 0%, #D4102F 100%)",
          }}
        >
          {/* Card Container */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "420px",
              height: "580px",
              backgroundColor: "#000000",
              border: "12px solid #FFFFFF",
              borderRadius: "16px",
              boxShadow: "20px 20px 0px 0px rgba(0,0,0,0.5)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Top Left OVR and Position */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "64px", fontWeight: "900", color: "#FFFFFF", lineHeight: "1" }}>{ovr}</span>
              <span style={{ fontSize: "20px", fontWeight: "bold", color: "#FACC15", letterSpacing: "2px" }}>OVR</span>
            </div>

            {/* "Portrait" Area */}
            <div
              style={{
                width: "100%",
                height: "320px",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                backgroundColor: "#111111",
                backgroundImage: "linear-gradient(180deg, #222222 0%, #000000 100%)",
                borderBottom: "4px solid #333333",
                position: "relative",
              }}
            >
              
              {/* Initials as the portrait */}
              <div
                style={{
                  fontSize: "180px",
                  fontWeight: "900",
                  color: "#333333",
                  lineHeight: "1",
                  letterSpacing: "-10px",
                  marginBottom: "-20px", // Sink it into the bottom
                }}
              >
                {initials}
              </div>
            </div>

            {/* Player Info */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "15px 20px",
                width: "100%",
              }}
            >
              <h1 style={{ fontSize: "36px", fontWeight: "900", color: "#FFFFFF", textTransform: "uppercase", margin: "0", letterSpacing: "1px", textAlign: "center" }}>
                {player.name}
              </h1>
              <h2 style={{ fontSize: "16px", fontWeight: "bold", color: "#FACC15", margin: "5px 0 15px 0", textTransform: "uppercase", letterSpacing: "2px" }}>
                {player.archetype}
              </h2>

              <div style={{ width: "100%", height: "2px", backgroundColor: "#333333", marginBottom: "15px" }} />

              {/* Stats Grid */}
              <div style={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "0 10px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ fontSize: "28px", color: "#fff", fontWeight: "900" }}>{v}</span>
                  <span style={{ fontSize: "12px", color: "#888", fontWeight: "bold" }}>VIS</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ fontSize: "28px", color: "#fff", fontWeight: "900" }}>{e}</span>
                  <span style={{ fontSize: "12px", color: "#888", fontWeight: "bold" }}>EXE</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ fontSize: "28px", color: "#fff", fontWeight: "900" }}>{c}</span>
                  <span style={{ fontSize: "12px", color: "#888", fontWeight: "bold" }}>CHA</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ fontSize: "28px", color: "#fff", fontWeight: "900" }}>{d}</span>
                  <span style={{ fontSize: "12px", color: "#888", fontWeight: "bold" }}>DEF</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ fontSize: "28px", color: "#fff", fontWeight: "900" }}>{f}</span>
                  <span style={{ fontSize: "12px", color: "#888", fontWeight: "bold" }}>FLR</span>
                </div>
              </div>
            </div>
            
            {/* Northstar logo pill */}
            <div style={{
              position: "absolute",
              bottom: "15px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#D4102F",
              padding: "4px 12px",
              borderRadius: "12px",
            }}>
              <span style={{ fontSize: "10px", color: "#FFF", fontWeight: "bold", letterSpacing: "1px" }}>NORTHSTAR</span>
            </div>
          </div>
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
