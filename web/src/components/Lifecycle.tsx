"use client";

import { useState } from "react";
import { AnimatePresence, LazyMotion, m, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { lifecycle } from "@/content/site";

/** Interactive clinical trial lifecycle: tab list (arrow-key navigable) + detail panel. */
export function Lifecycle() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  const cur = lifecycle[i];

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") setI((i + 1) % lifecycle.length);
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") setI((i - 1 + lifecycle.length) % lifecycle.length);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,22rem)_1fr]">
      <div
        role="tablist"
        aria-label="Clinical trial lifecycle stages"
        aria-orientation="vertical"
        onKeyDown={onKey}
        className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
      >
        {lifecycle.map((s, idx) => {
          const on = idx === i;
          return (
            <button
              key={s.id}
              role="tab"
              id={`tab-${s.id}`}
              aria-selected={on}
              aria-controls="lifecycle-panel"
              tabIndex={on ? 0 : -1}
              onClick={() => setI(idx)}
              className={`flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors lg:w-full ${
                on ? "border-teal-400 bg-white/10 text-white" : "border-white/10 text-mist-200 hover:bg-white/5"
              }`}
            >
              <span className={`font-mono text-xs ${on ? "text-teal-300" : "text-ink-400"}`}>0{idx + 1}</span>
              <span className="whitespace-nowrap text-sm font-semibold lg:whitespace-normal">{s.label}</span>
            </button>
          );
        })}
      </div>

      <div
        id="lifecycle-panel"
        role="tabpanel"
        aria-labelledby={`tab-${cur.id}`}
        tabIndex={0}
        className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8"
      >
        <LazyMotion features={() => import("./motionFeatures").then((r) => r.default)} strict>
          `n{" "}
          <AnimatePresence mode="wait">
            <m.div
              key={cur.id}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-teal-300">
                Stage 0{i + 1} of 0{lifecycle.length}
              </p>
              <h3 className="mt-3 text-2xl font-medium text-white sm:text-3xl">{cur.label}</h3>
              <p className="mt-2 text-lg text-teal-300">{cur.blurb}</p>
              <p className="mt-5 leading-relaxed text-mist-200">{cur.detail}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                {cur.outputs.map((o) => (
                  <li key={o} className="flex items-start gap-2 rounded-lg bg-white/5 px-3 py-3 text-sm text-white">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" aria-hidden="true" />
                    {o}
                  </li>
                ))}
              </ul>
            </m.div>
          </AnimatePresence>
        </LazyMotion>
      </div>
    </div>
  );
}
