import Link from "next/link";
import HeroVisual from "@/components/HeroVisual";
import { ArrowUpRight, Eye, FileCheck2, Layers, Scale, ShieldCheck } from "lucide-react";
import { ButtonLink, Card, Container, CTABanner, Eyebrow, Section, SectionHeader } from "@/components/ui";
import { Counter, Reveal } from "@/components/Reveal";
import { ServiceIcon } from "@/components/Icon";
import { Lifecycle } from "@/components/Lifecycle";
import { KMChart, ForestPlot } from "@/components/Charts";
import { articles } from "@/content/insights";
import { industries, lifecycle, site } from "@/content/site";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `${site.name}: ${site.tagline}`,
  description: site.description,
  path: "/",
});

const why = [
  { icon: Scale, title: "Rigor", text: "Pre-specified methods, independent checks, documented decisions." },
  {
    icon: FileCheck2,
    title: "Quality by design",
    text: "Quality built into the plan rather than inspected in at the end.",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory awareness",
    text: "We work within ICH, CDISC, GVP and agency frameworks, and say so when expert judgement is needed.",
  },
  { icon: Eye, title: "Transparency", text: "Honest scoping, clear status and no hidden assumptions." },
  {
    icon: Layers,
    title: "Scalable by design",
    text: "Flexible engagement models, from a single deliverable to dedicated capacity.",
  },
];

const stats = [
  { v: services.length, l: "Service lines" },
  { v: lifecycle.length, l: "Lifecycle stages supported" },
  { v: industries.length, l: "Sectors served" },
  { v: 4, l: "Platform design principles" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink-950 text-white">
        <div className="grid-fade absolute inset-0" aria-hidden="true" />
        <div className="absolute inset-0 hidden lg:block">
          <div className="absolute inset-y-0 right-0 w-[58%]">
            <HeroVisual />
          </div>
        </div>
        <Container className="relative flex min-h-[44rem] flex-col justify-center pb-24 pt-40 lg:min-h-[48rem]">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-300">
            Clinical science · Data · Technology
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-medium leading-[1.04] sm:text-6xl lg:text-7xl">
            Evidence, <em className="font-normal italic text-teal-300">engineered.</em>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-mist-200 sm:text-xl">
            Evidome is a specialist partner for clinical data, statistics, safety and regulatory work, and for the
            technology that connects them. Built for sponsors who value rigor over noise.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/contact" arrow>
              Talk to us
            </ButtonLink>
            <ButtonLink href="/services" variant="ghost-dark">
              Explore services
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* STATS (descriptive counts only; no performance claims) */}
      <section className="border-b border-mist-200 bg-white" aria-label="Evidome at a glance">
        <Container>
          <dl className="grid grid-cols-2 gap-6 py-10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l}>
                <dd className="font-display text-5xl font-medium text-ink-950">
                  <Counter value={s.v} />
                </dd>
                <dt className="mt-1 text-sm text-ink-600">{s.l}</dt>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* VALUE PROP + SERVICE PILLARS */}
      <Section labelledBy="pillars">
        <SectionHeader
          id="pillars"
          eyebrow="What we do"
          title="Specialist capability across the clinical evidence chain"
          text="From the first data requirement to the final regulatory document, we provide focused services that fit together, plus the software to make them faster and more traceable."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <li key={s.slug}>
              <Reveal delay={(i % 4) * 0.06} className="h-full">
                <Link href={`/services/${s.slug}`} className="group block h-full">
                  <Card className="flex h-full flex-col group-hover:-translate-y-1">
                    <ServiceIcon name={s.icon} />
                    <h3 className="mt-5 text-xl font-medium text-ink-950">{s.title}</h3>
                    <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-ink-600">{s.short}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-teal-700">
                      Learn more <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </Card>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {/* LIFECYCLE */}
      <Section tone="dark" labelledBy="lifecycle">
        <SectionHeader
          id="lifecycle"
          dark
          eyebrow="How we work"
          title="One connected lifecycle, from protocol to submission"
          text="Select a stage to see what we typically support. Each stage is designed to hand over cleanly to the next."
        />
        <div className="mt-12">
          <Lifecycle />
        </div>
      </Section>

      {/* CAPABILITY SHOWCASE */}
      <Section tone="mist" labelledBy="showcase">
        <SectionHeader
          id="showcase"
          eyebrow="Presentation, not promises"
          title="How we communicate statistical evidence"
          text="Clear, honest graphics matter. These examples use invented data to show our approach to presentation: labelled axes, visible uncertainty and plain-language captions."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <KMChart />
          </Reveal>
          <Reveal delay={0.1}>
            <ForestPlot />
          </Reveal>
        </div>
      </Section>

      {/* PLATFORM TEASER */}
      <Section labelledBy="platform">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Technology & AI</Eyebrow>
            <h2 id="platform" className="mt-3 text-3xl font-medium text-ink-950 sm:text-4xl lg:text-[2.6rem]">
              Software built to be auditable from day one
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-600">
              We build AI software for every department of clinical research, from clinical operations and data
              management to biostatistics, safety, regulatory and neuroinformatics, with security,
              auditability, validation-readiness and interoperability as core requirements, not afterthoughts. Our AI
              work keeps qualified humans accountable for decisions that matter.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/technology" arrow>
                Our technology
              </ButtonLink>
              <ButtonLink href="/ai-analytics" variant="secondary">
                AI & analytics
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {["Security by design", "Full audit trails", "Validation-ready", "Interoperable"].map((t, i) => (
                <li key={t} className="rounded-2xl border border-mist-200 bg-mist-50 p-6">
                  <span className="font-mono text-xs text-teal-700">0{i + 1}</span>
                  <p className="mt-2 font-display text-xl text-ink-950">{t}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* WHY EVIDOME */}
      <Section tone="mist" labelledBy="why">
        <SectionHeader
          id="why"
          eyebrow="Why Evidome"
          title="Principles we hold ourselves to"
          text="A new company should be judged by its standards, not its slogans. These are the commitments behind how we work."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {why.map((w, i) => (
            <li key={w.title}>
              <Reveal delay={(i % 3) * 0.06} className="h-full">
                <Card className="h-full">
                  <w.icon className="h-7 w-7 text-teal-700" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-medium text-ink-950">{w.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-600">{w.text}</p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {/* INDUSTRIES */}
      <Section labelledBy="industries">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader id="industries" eyebrow="Industries" title="Built for regulated life sciences" />
          <ButtonLink href="/industries" variant="secondary">
            All industries
          </ButtonLink>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((ind) => (
            <li key={ind.slug} className="rounded-2xl border border-mist-200 p-5">
              <h3 className="font-display text-lg font-medium text-ink-950">{ind.title}</h3>
            </li>
          ))}
        </ul>
      </Section>

      {/* INSIGHTS */}
      <Section tone="mist" labelledBy="insights">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader id="insights" eyebrow="Insights" title="Thinking from the team" />
          <ButtonLink href="/insights" variant="secondary">
            All insights
          </ButtonLink>
        </div>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {articles.map((a) => (
            <li key={a.slug}>
              <Link href={`/insights/${a.slug}`} className="group block h-full">
                <Card className="flex h-full flex-col group-hover:-translate-y-1">
                  <p className="font-mono text-xs uppercase tracking-wider text-teal-700">{a.topic}</p>
                  <h3 className="mt-3 text-xl font-medium leading-snug text-ink-950">{a.title}</h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-600">{a.excerpt}</p>
                  <p className="mt-5 text-sm text-ink-600">{a.readMinutes} min read</p>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CTABanner />
    </>
  );
}
