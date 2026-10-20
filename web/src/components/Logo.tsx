import Link from "next/link";

/**
 * Evidome mark: a dome formed by data nodes along an arc, with a signal trace beneath it.
 * The apex node is the single warm accent. Uses currentColor so it works on light and dark.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <path d="M6 36A18 18 0 0 1 42 36" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.35" />
      <path
        d="M6 36H17L20 30L24 42L28 33L30 36H42"
        stroke="var(--logo-accent, #2cc4c0)"
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
        <circle key={`${x}-${y}`} cx={x} cy={y} r="2.4" fill="currentColor" />
      ))}
      <circle cx="24" cy="18" r="3.2" fill="#e08a2e" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Evidome, home"
      className={`group inline-flex items-center gap-2.5 ${light ? "text-white" : "text-ink-950"}`}
    >
      <LogoMark />
      <span className="font-display text-[1.45rem] font-semibold tracking-tight">
        Evi<span className={light ? "text-teal-300" : "text-teal-700"}>dome</span>
      </span>
    </Link>
  );
}
