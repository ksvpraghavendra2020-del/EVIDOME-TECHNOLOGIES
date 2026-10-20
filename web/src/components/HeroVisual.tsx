"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

const HeroDome = dynamic(() => import("./HeroDome"));
const query = "(min-width: 1024px)";
const subscribe = (cb: () => void) => {
  const m = window.matchMedia(query);
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
};

/** Mounts the canvas dome only on large screens, so phones never download or run it. */
export default function HeroVisual() {
  const wide = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
  return wide ? <HeroDome /> : null;
}
