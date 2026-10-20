import { BrainCircuit, Eye, FileSearch, Lock, UserCheck, Scale, TestTubeDiagonal } from "lucide-react";
import { Card, CTABanner, PageHero, Section, SectionHeader } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI & Analytics",
  description:
    "Machine learning and analytics for life sciences, developed under responsible-AI principles: human oversight, explainability, privacy and validation.",
  path: "/ai-analytics",
});

const uses = [
  {
    icon: FileSearch,
    title: "Document & literature intelligence",
    text: "Screening, classification and structured extraction from scientific and regulatory text, with every output reviewable against its source.",
  },
  {
    icon: BrainCircuit,
    title: "Predictive & statistical modelling",
    text: "Models for risk, enrolment, data quality and operational signals, evaluated against pre-defined criteria.",
  },
  {
    icon: TestTubeDiagonal,
    title: "Data quality analytics",
    text: "Pattern and anomaly detection that helps data managers focus on what is most likely to matter.",
  },
];

const responsible = [
  {
    icon: UserCheck,
    title: "Human oversight",
    text: "A qualified person reviews and is accountable for every consequential output. AI informs; people decide.",
  },
  {
    icon: Eye,
    title: "Explainability",
    text: "Reviewers can see why a result was produced and what evidence supports it, not just the answer.",
  },
  {
    icon: Lock,
    title: "Data privacy",
    text: "Minimised, protected data used only for defined purposes, in line with applicable data protection law.",
  },
  {
    icon: Scale,
    title: "Validation & monitoring",
    text: "Performance is measured on representative data against acceptance criteria, including high-risk subsets, and monitored over time.",
  },
];

export default function AIPage() {
  return (
    <>
      <PageHero
        eyebrow="AI & Analytics"
        title="Machine learning that earns its place in a regulated workflow"
        text="We apply AI and ML where they measurably help, and design the surrounding controls so that trust is built in, not assumed."
        crumbs={[{ label: "Home", href: "/" }, { label: "AI & Analytics" }]}
      />
      <Section labelledBy="uses">
        <SectionHeader id="uses" eyebrow="Applications" title="Where AI can help life sciences teams" />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {uses.map((u, i) => (
            <li key={u.title}>
              <Reveal delay={i * 0.07} className="h-full">
                <Card className="h-full">
                  <u.icon className="h-8 w-8 text-teal-700" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-medium text-ink-950">{u.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-600">{u.text}</p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="dark" labelledBy="responsible">
        <SectionHeader
          id="responsible"
          dark
          eyebrow="Responsible AI"
          title="Our commitments"
          text="Capability without control is a liability. These principles apply to everything we build or deploy."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {responsible.map((r, i) => (
            <li key={r.title}>
              <Reveal delay={(i % 2) * 0.07} className="h-full">
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                  <r.icon className="h-7 w-7 text-teal-300" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="mt-4 text-2xl font-medium text-white">{r.title}</h3>
                  <p className="mt-2 leading-relaxed text-mist-200">{r.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>
      <CTABanner
        title="Exploring AI for your programme?"
        text="We’ll help you separate what is useful from what is hype."
      />
    </>
  );
}
