import { ImageResponse } from "next/og";

export const alt = "Akhilesh Kumar — AI and Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#080808",
        color: "#f2efe9",
        padding: "58px 64px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, letterSpacing: 3 }}>
        <span>AK / PORTFOLIO</span><span>2026</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ color: "#df6d3a", fontSize: 24, marginBottom: 20 }}>AI + SOFTWARE ENGINEER</span>
        <span style={{ fontSize: 104, lineHeight: 0.92, letterSpacing: -7 }}>SYSTEMS THAT<br />THINK.</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20 }}>
        <span>AKHILESH KUMAR</span><span>GURUGRAM, INDIA</span>
      </div>
    </div>,
    size,
  );
}
