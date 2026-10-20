"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

/** Accessible FAQ accordion (buttons with aria-expanded / aria-controls). */
export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const base = useId();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-mist-200 rounded-2xl border border-mist-200 bg-white">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q}>
            <h3 className="font-sans text-base">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${base}-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-ink-950"
              >
                {it.q}
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-teal-700 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div id={`${base}-${i}`} role="region" hidden={!isOpen} className="px-5 pb-5 leading-relaxed text-ink-600">
              {it.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
