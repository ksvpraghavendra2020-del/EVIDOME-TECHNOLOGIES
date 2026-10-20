import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

/** Shared layout and UI primitives. Keep them small and composable. */

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 ${className}`}>{children}</div>;
}

type Tone = "light" | "mist" | "dark";
const toneClass: Record<Tone, string> = {
  light: "bg-white text-ink-900",
  mist: "bg-mist-100 text-ink-900",
  dark: "bg-ink-950 text-mist-100",
};

export function Section({
  children,
  tone = "light",
  className = "",
  id,
  labelledBy,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`py-20 sm:py-24 ${toneClass[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`font-mono text-xs font-medium uppercase tracking-[0.18em] ${dark ? "text-teal-300" : "text-teal-700"}`}
    >
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  text,
  dark = false,
  id,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  dark?: boolean;
  id?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2
        id={id}
        className={`mt-3 text-3xl font-medium leading-tight sm:text-4xl lg:text-[2.6rem] ${dark ? "text-white" : "text-ink-950"}`}
      >
        {title}
      </h2>
      {text && <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-mist-200" : "text-ink-600"}`}>{text}</p>}
    </Reveal>
  );
}

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost-dark";
  className?: string;
  arrow?: boolean;
};
const btn = {
  primary: "bg-teal-700 text-white hover:bg-ink-900 focus-visible:outline-teal-400",
  secondary: "border border-ink-950/20 bg-white text-ink-950 hover:border-ink-950 hover:bg-mist-50",
  "ghost-dark": "border border-white/30 text-white hover:bg-white/10",
};
export function ButtonLink({ href, children, variant = "primary", className = "", arrow = false }: BtnProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-semibold transition-colors ${btn[variant]} ${className}`}
    >
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />}
    </Link>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-mist-200 bg-white p-6 shadow-card transition-shadow hover:shadow-lift ${className}`}
    >
      {children}
    </div>
  );
}

/** Interior page header (dark, with subtle grid). */
export function PageHero({
  eyebrow,
  title,
  text,
  children,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  children?: ReactNode;
  crumbs?: { label: string; href?: string }[];
}) {
  return (
    <header className="relative overflow-hidden bg-ink-950 pb-16 pt-32 text-white sm:pb-20 sm:pt-40">
      <div className="grid-fade absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-teal-600/20 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-6 font-mono text-xs text-mist-200">
            <ol className="flex flex-wrap items-center gap-2">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {c.href ? (
                    <Link href={c.href} className="underline-offset-4 hover:text-white hover:underline">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-white">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <Eyebrow dark>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-4xl text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-6xl">{title}</h1>
        {text && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist-200">{text}</p>}
        {children}
      </Container>
    </header>
  );
}

export function CTABanner({
  title = "Let’s build your evidence, carefully.",
  text = "Tell us about your programme. We’ll respond with an honest view of how we can help, and where we can’t.",
  cta = "Start a conversation",
  href = "/contact",
}: {
  title?: string;
  text?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="bg-mist-50 py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink-950 px-6 py-14 text-center text-white sm:px-14">
          <div className="grid-fade absolute inset-0" aria-hidden="true" />
          <div
            className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-teal-600/30 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-medium sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-mist-200">{text}</p>
            <div className="mt-8 flex justify-center">
              <ButtonLink href={href} arrow>
                {cta}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Disclaimer({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-lg border border-ember-500/40 bg-ember-400/10 px-4 py-3 text-sm text-ink-800">{children}</p>
  );
}
