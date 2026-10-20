"use client";

import { useEffect, useRef } from "react";

/**
 * Hero visual: a dome-shaped constellation of data nodes with flowing pulses along
 * connections. Drifts slowly and leans gently toward the cursor.
 * - Pure canvas, no dependencies; pauses when off-screen or tab hidden.
 * - prefers-reduced-motion: renders a single static frame.
 */
type P = { x: number; y: number; z: number; warm: boolean };
type Edge = { a: number; b: number; phase: number };

function build() {
  const N = 150;
  const pts: P[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < N; i++) {
    const h = (i + 0.5) / N; // 0..1 height on the hemisphere
    const rr = Math.sqrt(1 - h * h);
    const phi = i * golden;
    pts.push({ x: rr * Math.cos(phi), y: h, z: rr * Math.sin(phi), warm: i % 37 === 0 });
  }
  // Base ring of nodes so the dome has a footing
  for (let i = 0; i < 36; i++) {
    const a = (i / 36) * Math.PI * 2;
    pts.push({ x: Math.cos(a), y: 0, z: Math.sin(a), warm: false });
  }
  const edges: Edge[] = [];
  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y, pts[i].z - pts[j].z);
      if (d < 0.27) edges.push({ a: i, b: j, phase: ((i * 7 + j * 13) % 100) / 100 });
    }
  }
  return { pts, edges };
}

export default function HeroDome() {
  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = wrap.current;
    const cv = canvas.current;
    if (!el || !cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const { pts, edges } = build();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0,
      h = 0,
      raf = 0,
      visible = true;
    let yawOff = 0,
      pitchOff = 0,
      tYaw = 0,
      tPitch = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = el.clientWidth;
      h = el.clientHeight;
      cv.width = w * dpr;
      cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduced) draw(0);
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h);
      const R = Math.min(w * 0.46, h * 0.82);
      const cx = w / 2;
      const baseY = h * 0.88;
      const a = time * 0.00012 + yawOff + 0.6;
      const tilt = 0.32 + pitchOff;
      const ca = Math.cos(a),
        sa = Math.sin(a),
        ct = Math.cos(tilt),
        st = Math.sin(tilt);
      const proj = pts.map((p) => {
        const X = p.x * ca + p.z * sa;
        const Z = -p.x * sa + p.z * ca;
        const Y = p.y * ct - Z * st;
        const D = p.y * st + Z * ct; // depth: + toward viewer
        return { sx: cx + R * X, sy: baseY - R * Y, d: D };
      });

      ctx.lineWidth = 1;
      for (const e of edges) {
        const A = proj[e.a],
          B = proj[e.b];
        const depth = (A.d + B.d) / 2;
        const alpha = 0.07 + (0.2 * (depth + 1)) / 2;
        ctx.strokeStyle = `rgba(94,221,214,${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(A.sx, A.sy);
        ctx.lineTo(B.sx, B.sy);
        ctx.stroke();
      }
      // Flowing pulses along a subset of edges
      if (!reduced) {
        for (let i = 0; i < edges.length; i += 5) {
          const e = edges[i];
          const t = (time * 0.0003 + e.phase) % 1;
          const A = proj[e.a],
            B = proj[e.b];
          ctx.fillStyle = "rgba(240,168,85,0.9)";
          ctx.beginPath();
          ctx.arc(A.sx + (B.sx - A.sx) * t, A.sy + (B.sy - A.sy) * t, 1.6, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      for (let i = 0; i < pts.length; i++) {
        const q = proj[i];
        const k = (q.d + 1) / 2;
        const r = 1.3 + 2.2 * k;
        ctx.fillStyle = pts[i].warm ? `rgba(240,168,85,${0.6 + 0.4 * k})` : `rgba(94,221,214,${0.35 + 0.65 * k})`;
        ctx.beginPath();
        ctx.arc(q.sx, q.sy, pts[i].warm ? r + 1 : r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (t: number) => {
      yawOff += (tYaw - yawOff) * 0.04;
      pitchOff += (tPitch - pitchOff) * 0.04;
      if (visible && !document.hidden) draw(t);
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      tYaw = ((e.clientX - r.left) / r.width - 0.5) * 0.7;
      tPitch = ((e.clientY - r.top) / r.height - 0.5) * -0.18;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(el);
    resize();
    const io = new IntersectionObserver(([en]) => (visible = en.isIntersecting));
    io.observe(el);
    if (!reduced) {
      window.addEventListener("pointermove", onMove, { passive: true });
      raf = requestAnimationFrame(loop);
    }
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div ref={wrap} className="absolute inset-0" aria-hidden="true">
      <canvas ref={canvas} className="h-full w-full" />
    </div>
  );
}
