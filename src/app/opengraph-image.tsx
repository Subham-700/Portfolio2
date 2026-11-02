import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Subham Gupta — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "radial-gradient(circle at 80% 0%, rgba(255,138,61,0.35), #09090a 55%)",
          color: "#ecebe6",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#ff8a3d", letterSpacing: 4 }}>SUBHAM GUPTA · FULL-STACK DEVELOPER</div>
        <div style={{ display: "flex", fontSize: 84, lineHeight: 1.02, maxWidth: 980 }}>
          I build the systems behind streaming platforms.
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#8d8c93" }}>
          TypeScript · React · Next.js · Node.js · MongoDB — Accedo · Tata Play Binge · SBS CTV
        </div>
      </div>
    ),
    size,
  );
}
