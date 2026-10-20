/**
 * Illustrative SVG charts. All values are INVENTED sample data to demonstrate presentation style.
 * They do not represent any real study, product or result, and are labelled as such.
 */

const SAMPLE_BADGE = "Illustrative sample data, not real results";

function Badge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-ember-500/50 bg-ember-400/15 px-3 py-1 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-ink-900">
      <span className="h-1.5 w-1.5 rounded-full bg-ember-500" aria-hidden="true" />
      {SAMPLE_BADGE}
    </span>
  );
}

// Kaplan–Meier style step curves (month, survival probability)
const armA: [number, number][] = [
  [0, 1],
  [2, 0.98],
  [4, 0.95],
  [6, 0.92],
  [8, 0.89],
  [10, 0.87],
  [12, 0.84],
  [14, 0.82],
  [16, 0.8],
  [18, 0.78],
  [20, 0.77],
  [24, 0.75],
];
const armB: [number, number][] = [
  [0, 1],
  [2, 0.96],
  [4, 0.9],
  [6, 0.85],
  [8, 0.8],
  [10, 0.75],
  [12, 0.71],
  [14, 0.67],
  [16, 0.63],
  [18, 0.6],
  [20, 0.58],
  [24, 0.55],
];
const censA = [3, 7, 11, 15, 19, 22];
const censB = [5, 9, 13, 17, 21];

export function KMChart() {
  const W = 560,
    H = 340,
    m = { l: 52, r: 16, t: 16, b: 48 };
  const x = (mo: number) => m.l + (mo / 24) * (W - m.l - m.r);
  const y = (p: number) => m.t + (1 - (p - 0.4) / 0.6) * (H - m.t - m.b);
  const step = (d: [number, number][]) =>
    d.map(([mo, p], i) => (i === 0 ? `M${x(mo)} ${y(p)}` : `H${x(mo)} V${y(p)}`)).join(" ");
  const at = (d: [number, number][], mo: number) => [...d].reverse().find(([t]) => t <= mo)![1];

  return (
    <figure>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <figcaption className="font-semibold text-ink-950">Time-to-event curve (Kaplan–Meier style)</figcaption>
        <Badge />
      </div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Illustrative Kaplan–Meier style survival curves for two hypothetical groups over 24 months. Group A stays above Group B. Sample data only."
        className="h-auto w-full rounded-xl border border-mist-200 bg-white"
      >
        {[0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1].map((t) => (
          <g key={t}>
            <line x1={m.l} x2={W - m.r} y1={y(t)} y2={y(t)} stroke="#d7e1e9" strokeWidth="1" />
            <text x={m.l - 8} y={y(t) + 4} textAnchor="end" className="fill-ink-600 font-mono" fontSize="11">
              {t.toFixed(1)}
            </text>
          </g>
        ))}
        {[0, 6, 12, 18, 24].map((t) => (
          <text key={t} x={x(t)} y={H - m.b + 20} textAnchor="middle" className="fill-ink-600 font-mono" fontSize="11">
            {t}
          </text>
        ))}
        <text x={(W + m.l) / 2} y={H - 8} textAnchor="middle" className="fill-ink-600" fontSize="12">
          Months since randomisation
        </text>
        <text
          transform={`translate(14 ${H / 2}) rotate(-90)`}
          textAnchor="middle"
          className="fill-ink-600"
          fontSize="12"
        >
          Probability
        </text>
        <path d={step(armB)} fill="none" stroke="#e08a2e" strokeWidth="2.5" />
        <path d={step(armA)} fill="none" stroke="#0b7a80" strokeWidth="2.5" />
        {censA.map((c) => (
          <line
            key={`a${c}`}
            x1={x(c)}
            x2={x(c)}
            y1={y(at(armA, c)) - 5}
            y2={y(at(armA, c)) + 5}
            stroke="#0b7a80"
            strokeWidth="1.5"
          />
        ))}
        {censB.map((c) => (
          <line
            key={`b${c}`}
            x1={x(c)}
            x2={x(c)}
            y1={y(at(armB, c)) - 5}
            y2={y(at(armB, c)) + 5}
            stroke="#e08a2e"
            strokeWidth="1.5"
          />
        ))}
        <g transform={`translate(${W - 190} ${m.t + 8})`} fontSize="12">
          <rect x="-10" y="-6" width="184" height="52" rx="8" fill="#fff" stroke="#d7e1e9" />
          <line x1="0" x2="22" y1="8" y2="8" stroke="#0b7a80" strokeWidth="2.5" />
          <text x="30" y="12" className="fill-ink-900">
            Group A (hypothetical)
          </text>
          <line x1="0" x2="22" y1="32" y2="32" stroke="#e08a2e" strokeWidth="2.5" />
          <text x="30" y="36" className="fill-ink-900">
            Group B (hypothetical)
          </text>
        </g>
      </svg>
    </figure>
  );
}

const forest = [
  { label: "Overall", hr: 0.72, lo: 0.58, hi: 0.89, bold: true },
  { label: "Age < 65", hr: 0.68, lo: 0.49, hi: 0.94 },
  { label: "Age ≥ 65", hr: 0.77, lo: 0.58, hi: 1.02 },
  { label: "Female", hr: 0.7, lo: 0.51, hi: 0.96 },
  { label: "Male", hr: 0.74, lo: 0.55, hi: 0.99 },
  { label: "Region 1", hr: 0.81, lo: 0.58, hi: 1.13 },
  { label: "Region 2", hr: 0.65, lo: 0.47, hi: 0.9 },
];

export function ForestPlot() {
  const W = 560,
    rowH = 38,
    top = 30,
    left = 130,
    right = 24;
  const H = top + forest.length * rowH + 52;
  const lo = Math.log(0.3),
    hi = Math.log(2);
  const x = (v: number) => left + ((Math.log(v) - lo) / (hi - lo)) * (W - left - right);
  return (
    <figure>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <figcaption className="font-semibold text-ink-950">Subgroup analysis (forest plot style)</figcaption>
        <Badge />
      </div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Illustrative forest plot of hazard ratios with confidence intervals for hypothetical subgroups. Sample data only."
        className="h-auto w-full rounded-xl border border-mist-200 bg-white"
      >
        <line x1={x(1)} x2={x(1)} y1={top - 8} y2={top + forest.length * rowH} stroke="#435a7a" strokeDasharray="4 4" />
        {forest.map((r, i) => {
          const cy = top + i * rowH + rowH / 2;
          return (
            <g key={r.label}>
              <text
                x="12"
                y={cy + 4}
                fontSize="12.5"
                className={r.bold ? "fill-ink-950 font-semibold" : "fill-ink-800"}
              >
                {r.label}
              </text>
              <line x1={x(r.lo)} x2={x(r.hi)} y1={cy} y2={cy} stroke="#0f2038" strokeWidth="1.8" />
              <line x1={x(r.lo)} x2={x(r.lo)} y1={cy - 5} y2={cy + 5} stroke="#0f2038" strokeWidth="1.8" />
              <line x1={x(r.hi)} x2={x(r.hi)} y1={cy - 5} y2={cy + 5} stroke="#0f2038" strokeWidth="1.8" />
              {r.bold ? (
                <rect
                  x={x(r.hr) - 7}
                  y={cy - 7}
                  width="14"
                  height="14"
                  fill="#0b7a80"
                  transform={`rotate(45 ${x(r.hr)} ${cy})`}
                />
              ) : (
                <rect x={x(r.hr) - 5} y={cy - 5} width="10" height="10" fill="#0b7a80" />
              )}
            </g>
          );
        })}
        {[0.5, 1, 2].map((t) => (
          <text
            key={t}
            x={x(t)}
            y={top + forest.length * rowH + 20}
            textAnchor="middle"
            className="fill-ink-600 font-mono"
            fontSize="11"
          >
            {t}
          </text>
        ))}
        <text x={x(0.55)} y={H - 8} textAnchor="middle" className="fill-ink-600" fontSize="11">
          ← Favours A
        </text>
        <text x={x(1.45)} y={H - 8} textAnchor="middle" className="fill-ink-600" fontSize="11">
          Favours B →
        </text>
      </svg>
    </figure>
  );
}
