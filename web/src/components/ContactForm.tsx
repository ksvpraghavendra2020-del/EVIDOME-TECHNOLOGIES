"use client";

import Link from "next/link";
import { useState } from "react";
import { z } from "zod";
import { interests } from "@/content/site";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

// Our CSP forbids eval; zod's JIT compiler probes `new Function`, so run it in plain interpreted mode.
z.config({ jitless: true });

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  organisation: z.string().trim().optional(),
  role: z.string().trim().optional(),
  email: z.string().trim().email("Please enter a valid email address."),
  interest: z.string().optional(),
  message: z.string().trim().min(10, "Please add a little more detail (10+ characters)."),
  consent: z.literal(true, { message: "Consent is required so we can respond." }),
});

type Status = "idle" | "sending" | "sent" | "error";

/** Enquiry / careers form. Validated with zod in the browser and again by the Django API. */
export function ContactForm({ kind = "enquiry" }: { kind?: "enquiry" | "career" }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const career = kind === "career";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: fd.get("name"),
      organisation: fd.get("organisation") || undefined,
      role: fd.get("role") || undefined,
      email: fd.get("email"),
      interest: fd.get("interest") || undefined,
      message: fd.get("message"),
      consent: fd.get("consent") === "on",
    };
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const i of parsed.error.issues) errs[String(i.path[0])] = i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch(`${API}/api/submissions/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind,
          ...parsed.data,
          interest: parsed.data.interest ?? "",
          website: fd.get("website") ?? "",
        }),
      });
      if (res.ok) {
        setStatus("sent");
      } else if (res.status === 400) {
        const body = await res.json().catch(() => ({}));
        const errs: Record<string, string> = {};
        for (const [k, v] of Object.entries(body.errors ?? {})) errs[k] = Array.isArray(v) ? String(v[0]) : String(v);
        setErrors(errs);
        setStatus("idle");
      } else {
        setStatus("error"); // includes 429 rate-limit
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-teal-600/30 bg-teal-700/5 p-8">
        <h3 className="text-2xl font-medium text-ink-950">Thank you, we’ve received your message.</h3>
        <p className="mt-3 text-ink-600">
          {career
            ? "We’ll be in touch if there is a suitable opportunity."
            : "A member of the team will reply to you by email."}
        </p>
      </div>
    );
  }

  const field =
    "mt-1.5 block w-full rounded-lg border border-ink-400 bg-white px-4 py-3 text-ink-950 placeholder:text-ink-400 focus:border-teal-600";
  const err = (k: string) =>
    errors[k] ? (
      <p id={`${k}-err`} className="mt-1.5 text-sm font-medium text-red-700">
        {errors[k]}
      </p>
    ) : null;
  const a11y = (k: string) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-5"
      aria-label={career ? "General application form" : "Enquiry form"}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-ink-950">
            Full name *
          </label>
          <input id="name" name="name" autoComplete="name" required className={field} {...a11y("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-ink-950">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={field}
            {...a11y("email")}
          />
          {err("email")}
        </div>
        {!career && (
          <>
            <div>
              <label htmlFor="organisation" className="text-sm font-semibold text-ink-950">
                Organisation
              </label>
              <input id="organisation" name="organisation" autoComplete="organization" className={field} />
            </div>
            <div>
              <label htmlFor="role" className="text-sm font-semibold text-ink-950">
                Your role
              </label>
              <input id="role" name="role" autoComplete="organization-title" className={field} />
            </div>
          </>
        )}
      </div>
      {!career && (
        <div>
          <label htmlFor="interest" className="text-sm font-semibold text-ink-950">
            Area of interest
          </label>
          <select id="interest" name="interest" defaultValue="" className={field}>
            <option value="">Select an area…</option>
            {interests.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </div>
      )}
      <div>
        <label htmlFor="message" className="text-sm font-semibold text-ink-950">
          {career ? "Tell us about your background and the kind of role you’re looking for *" : "How can we help? *"}
        </label>
        <textarea id="message" name="message" rows={6} required className={field} {...a11y("message")} />
        {err("message")}
      </div>
      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-ink-800">
          <input
            type="checkbox"
            name="consent"
            className="mt-1 h-5 w-5 shrink-0 accent-teal-700"
            {...a11y("consent")}
          />
          <span>
            I consent to Evidome processing the information above to respond to me, as described in the{" "}
            <Link href="/legal/privacy" className="font-semibold text-teal-700 underline underline-offset-2">
              Privacy Policy
            </Link>
            . *
          </span>
        </label>
        {err("consent")}
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-teal-700 px-8 font-semibold text-white transition-colors hover:bg-ink-900 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : career ? "Submit application" : "Send enquiry"}
      </button>
      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-red-700">
          Sorry, we couldn’t send that just now. Please try again in a moment or email us directly.
        </p>
      )}
    </form>
  );
}
