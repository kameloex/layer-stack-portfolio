import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#FFFFFF",
          backgroundImage:
            "linear-gradient(to right, rgba(8,11,16,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(8,11,16,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          color: "#080B10",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              backgroundColor: "#080B10",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 700,
              border: "2px solid #77CFFF",
              fontFamily: "monospace",
            }}
          >
            AK
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              fontFamily: "sans-serif",
              color: "#080B10",
            }}
          >
            {siteConfig.name} — {siteConfig.role}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 900 }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#080B10",
              fontFamily: "sans-serif",
            }}
          >
            {siteConfig.headline}
          </div>
          <div
            style={{
              fontSize: 24,
              color: "rgba(8,11,16,0.65)",
              lineHeight: 1.4,
              fontFamily: "sans-serif",
            }}
          >
            {siteConfig.supportingLine}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 32,
            borderTop: "1px solid rgba(8,11,16,0.1)",
            fontSize: 16,
            fontFamily: "monospace",
            color: "rgba(8,11,16,0.5)",
          }}
        >
          <div>ALEXANDRIA, EGYPT // SOFTWARE &amp; CONNECTED SYSTEMS</div>
          <div style={{ color: "#005777", fontWeight: 600 }}>THE LAYER STACK</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
