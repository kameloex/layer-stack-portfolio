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
          padding: "80px",
          backgroundColor: "#FFFFFF",
          color: "#080B10",
        }}
      >
        {/* Top Header Row */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "24px",
              backgroundColor: "#080B10",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: 700,
              fontFamily: "monospace",
              marginRight: "16px",
            }}
          >
            AK
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "22px",
              fontWeight: 600,
              color: "#080B10",
            }}
          >
            {`${siteConfig.name} — ${siteConfig.role}`}
          </div>
        </div>

        {/* Middle Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "960px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "52px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#080B10",
              marginBottom: "24px",
            }}
          >
            {siteConfig.headline}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "24px",
              color: "rgba(8,11,16,0.65)",
              lineHeight: 1.4,
            }}
          >
            {siteConfig.supportingLine}
          </div>
        </div>

        {/* Bottom Footer Datum */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "32px",
            borderTop: "1px solid rgba(8,11,16,0.12)",
            fontSize: "16px",
            fontFamily: "monospace",
            color: "rgba(8,11,16,0.5)",
          }}
        >
          <div style={{ display: "flex" }}>
            ALEXANDRIA, EGYPT // SOFTWARE &amp; CONNECTED SYSTEMS
          </div>
          <div style={{ display: "flex", color: "#005777", fontWeight: 700 }}>
            THE LAYER STACK
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
