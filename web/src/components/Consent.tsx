"use client";

import Link from "next/link";
import Script from "next/script";
import { useSyncExternalStore } from "react";

const KEY = "evidome-consent";
const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

const read = () => {
  try {
    const v = localStorage.getItem(KEY);
    return v === "accepted" || v === "declined" ? v : "unset";
  } catch {
    return "unset"; // storage unavailable
  }
};
const subscribe = (cb: () => void) => {
  window.addEventListener("evidome-consent", cb);
  return () => window.removeEventListener("evidome-consent", cb);
};

/**
 * Cookie notice + consent-gated analytics.
 * No analytics script loads until the visitor accepts, and only if NEXT_PUBLIC_PLAUSIBLE_DOMAIN is set.
 * The site itself sets no cookies; choice is remembered in localStorage.
 */
export function Consent() {
  // Server snapshot is null so nothing renders until the browser state is known (no hydration mismatch).
  const choice = useSyncExternalStore(subscribe, read, () => null);

  const save = (v: "accepted" | "declined") => {
    try {
      localStorage.setItem(KEY, v);
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new Event("evidome-consent"));
  };
  return (
    <>
      {domain && choice === "accepted" && (
        <Script defer data-domain={domain} src="https://plausible.io/js/script.js" strategy="afterInteractive" />
      )}
      {choice === "unset" && domain && (
        <div
          role="region"
          aria-label="Cookie and analytics notice"
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-2xl border border-mist-200 bg-white p-5 shadow-lift"
        >
          <p className="text-sm leading-relaxed text-ink-800">
            With your permission we use privacy-friendly analytics to understand how the site is used. Nothing loads
            unless you accept. See our{" "}
            <Link href="/legal/cookies" className="font-semibold text-teal-700 underline underline-offset-2">
              Cookie Notice
            </Link>
            .
          </p>
          <div className="mt-4 flex gap-3">
            <button
              onClick={() => save("accepted")}
              className="min-h-11 rounded-full bg-teal-700 px-5 text-sm font-semibold text-white hover:bg-ink-900"
            >
              Accept
            </button>
            <button
              onClick={() => save("declined")}
              className="min-h-11 rounded-full border border-ink-950/20 px-5 text-sm font-semibold text-ink-950 hover:bg-mist-100"
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
}
