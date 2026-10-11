import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: "#080B10",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          fontWeight: 700,
          borderRadius: "50%",
          border: "1.5px solid #77CFFF",
          fontFamily: "monospace",
        }}
      >
        AK
      </div>
    ),
    {
      ...size,
    }
  );
}
