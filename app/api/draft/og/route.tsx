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

    const isDev = process.env.NODE_ENV === "development" || req.url.includes("localhost");
    const host = isDev ? "http://localhost:8000" : new URL(req.url).origin;
    const imageUrl = `${host}/players/${player.id}.jpg`;

    // Red gradient based on overall score (optional, we use static brand red)
    const brandRed = "#F3123C";
    const bgDark = "#0A0A0F";

    return new ImageResponse(
      (
        <div
          style={{
            background: bgDark,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "64px 80px",
            color: "#ffffff",
            position: "relative",
          }}
        >
          {/* Subtle red glow in top-left corner for brand accent */}
          <div
            style={{
              position: "absolute",
              top: -120,
              left: -120,
              width: 400,
              height: 400,
              borderRadius: 9999,
              background: "rgba(243,18,60,0.18)",
              filter: "blur(90px)",
              display: "flex",
            }}
          />

          {/* Left Column: Info & Stats */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              zIndex: 1,
              width: "60%",
            }}
          >
            {/* Top: brand eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 9999,
                  background: brandRed,
                  display: "flex",
                }}
              />
              <span
                style={{
                  color: brandRed,
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                northstar · draft
              </span>
            </div>

            {/* Middle: Name & Big Score */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <span
                  style={{
                    fontSize: 64,
                    fontWeight: 800,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    color: "#ffffff",
                    textTransform: "uppercase",
                  }}
                >
                  {player.name}
                </span>
                <span
                  style={{
                    fontSize: 28,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.6)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {player.archetype}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  color: brandRed,
                  fontWeight: 800,
                  letterSpacing: "-0.05em",
                  lineHeight: 0.9,
                  marginTop: 20,
                }}
              >
                <span style={{ fontSize: 160, color: "#ffffff" }}>{ovr}</span>
                <span
                  style={{
                    fontSize: 48,
                    opacity: 0.8,
                    marginLeft: 12,
                    fontWeight: 600,
                    color: brandRed,
                  }}
                >
                  OVR
                </span>
              </div>
            </div>

            {/* Bottom: The 5 Stats Array */}
            <div style={{ display: "flex", gap: 32, marginTop: 40 }}>
              {[
                { label: "VIS", val: v },
                { label: "EXE", val: e },
                { label: "CHA", val: c },
                { label: "DEF", val: d },
                { label: "FLR", val: f },
              ].map((stat) => (
                <div key={stat.label} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 32, fontWeight: 800, color: "#ffffff" }}>{stat.val}</span>
                  <span style={{ fontSize: 16, fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Player Photo Cutout */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              width: "40%",
              height: "100%",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Background texture/box for portrait */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "320px",
                height: "440px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                display: "flex",
              }}
            />
            <img
              src={imageUrl}
              width="500"
              height="500"
              style={{
                width: "480px",
                height: "480px",
                objectFit: "contain",
                objectPosition: "bottom right",
                filter: "drop-shadow(0px 20px 40px rgba(0,0,0,0.8))",
              }}
            />
          </div>

          {/* Absolute Bottom Right: URL */}
          <div
            style={{
              position: "absolute",
              bottom: 64,
              right: 80,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 4,
              zIndex: 10,
            }}
          >
            <span
              style={{
                fontSize: 22,
                color: "#ffffff",
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
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
