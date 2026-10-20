import { ImageResponse } from "next/og";

export const alt = "Evidome: Evidence, engineered.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#0a1628",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        position: "relative",
      }}
    >
      <svg width="140" height="140" viewBox="0 0 48 48" fill="none">
        <path d="M6 36A18 18 0 0 1 42 36" stroke="#fff" strokeOpacity=".35" strokeWidth="1.5" />
        <path
          d="M6 36H17L20 30L24 42L28 33L30 36H42"
          stroke="#2cc4c0"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[
          [6, 36],
          [8.4, 27],
          [15, 20.4],
          [33, 20.4],
          [39.6, 27],
          [42, 36],
        ].map(([x, y]) => (
          <circle key={`${x}${y}`} cx={x} cy={y} r="2.4" fill="#fff" />
        ))}
        <circle cx="24" cy="18" r="3.2" fill="#e08a2e" />
      </svg>
      <div style={{ fontSize: 96, marginTop: 40, fontWeight: 600, display: "flex" }}>Evidence, engineered.</div>
      <div style={{ fontSize: 34, marginTop: 20, color: "#5eddd6" }}>
        Evidome · Clinical science, data and technology
      </div>
    </div>,
    size,
  );
}
