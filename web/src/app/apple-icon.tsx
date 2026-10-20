import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#0a1628",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="128" height="128" viewBox="0 0 48 48" fill="none">
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
    </div>,
    size,
  );
}
