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
    const ovr = Math.round((v + e + c + d + f) / 5);

    const host = new URL(req.url).origin;
    const imageUrl = `${host}/players/${player.id}.jpg`;

    const getStatColor = (val: number) => {
      if (val >= 90) return "#22C55E";
      if (val >= 75) return "#84CC16";
      if (val >= 60) return "#EAB308";
      if (val >= 40) return "#F97316";
      return "#EF4444";
    };

    return new ImageResponse(
      (
        <div
          style={{
            background: "#0A0A0F",
            width: "100%",
            height: "100%",
            display: "flex",
            position: "relative",
            fontFamily: "Inter, sans-serif",
            overflow: "hidden",
            border: "20px solid #16161F",
          }}
        >
          {/* Foil / Holographic Inner Border */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              border: "4px solid rgba(255,255,255,0.1)",
              display: "flex",
            }}
          />

          {/* Background Glow Elements */}
          <div
            style={{
              position: "absolute",
              top: -200,
              right: -100,
              width: 800,
              height: 800,
              background: "rgba(243,18,60,0.15)",
              filter: "blur(120px)",
              borderRadius: "50%",
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -200,
              left: -100,
              width: 600,
              height: 600,
              background: "rgba(108,99,255,0.1)",
              filter: "blur(100px)",
              borderRadius: "50%",
              display: "flex",
            }}
          />

          {/* Player Cutout - Huge on Right */}
          <div
            style={{
              position: "absolute",
              right: -20,
              bottom: -20,
              width: "650px",
              height: "650px",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <img
              src={imageUrl}
              width="650"
              height="650"
              style={{
                objectFit: "contain",
                objectPosition: "bottom right",
                filter: "drop-shadow(-10px 10px 30px rgba(0,0,0,0.8))",
              }}
            />
          </div>

          {/* Main Content Layout */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "100%",
              position: "relative",
              zIndex: 10,
              padding: "48px 64px",
            }}
          >
            {/* Left Panel */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "55%",
                height: "100%",
                justifyContent: "space-between",
              }}
            >
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 12, height: 12, background: "#F3123C", borderRadius: "50%", display: "flex" }} />
                <span style={{ color: "#F3123C", fontSize: 20, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  The Builder Draft
                </span>
              </div>

              {/* Title & OVR */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #F3123C 0%, #9f0b25 100%)",
                    borderRadius: 24,
                    padding: "16px 24px",
                    boxShadow: "0 20px 40px rgba(243,18,60,0.3)",
                    border: "2px solid rgba(255,255,255,0.2)"
                  }}>
                    <span style={{ fontSize: 64, fontWeight: 900, color: "#fff", lineHeight: 1 }}>{ovr}</span>
                    <span style={{ fontSize: 18, fontWeight: 800, color: "rgba(255,255,255,0.8)", letterSpacing: "0.1em" }}>OVR</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <span style={{ fontSize: 64, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em", lineHeight: 1, textTransform: "uppercase" }}>
                      {player.name}
                    </span>
                    <span style={{ fontSize: 24, fontWeight: 600, color: "#A1A1AA", letterSpacing: "0.02em" }}>
                      {player.archetype}
                    </span>
                  </div>
                </div>
              </div>

              {/* Multi-color Stat Boxes Grid */}
              <div style={{ display: "flex", gap: 16, marginTop: "auto" }}>
                {[
                  { label: "VIS", val: v },
                  { label: "EXE", val: e },
                  { label: "CHA", val: c },
                  { label: "DEF", val: d },
                  { label: "FLR", val: f },
                ].map((stat) => (
                  <div key={stat.label} style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 80,
                    height: 100,
                    background: "rgba(255,255,255,0.03)",
                    borderTop: `4px solid ${getStatColor(stat.val)}`,
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    borderLeft: "1px solid rgba(255,255,255,0.1)",
                    borderRight: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 16,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                  }}>
                    <span style={{ fontSize: 36, fontWeight: 900, color: getStatColor(stat.val), lineHeight: 1 }}>
                      {stat.val}
                    </span>
                    <span style={{ fontSize: 14, fontWeight: 800, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", marginTop: 8 }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side overlays if any (leaving empty since player cutout takes this space) */}
          </div>
          
          {/* URL Tag */}
          <div style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            background: "rgba(0,0,0,0.6)",
            padding: "8px 16px",
            borderRadius: 999,
            display: "flex",
            border: "1px solid rgba(255,255,255,0.1)",
            zIndex: 20
          }}>
            <span style={{ fontSize: 16, fontWeight: 600, color: "#fff", letterSpacing: "0.05em" }}>
              pmnorthstar.in/draft
            </span>
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
