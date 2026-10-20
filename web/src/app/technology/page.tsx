import { Activity, Cable, ClipboardList, Lock, ShieldCheck, Stethoscope, Workflow } from "lucide-react";
import { Card, CTABanner, Disclaimer, PageHero, Section, SectionHeader } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Technology",
  description:
    "Platforms for clinical trials, healthcare informatics and biomedical data analytics, designed for security, auditability, validation and interoperability.",
  path: "/technology",
});

const platforms = [
  {
    icon: ClipboardList,
    title: "Clinical trial platforms",
    text: "Tools that support data capture, review, tracking and reporting across the study lifecycle, designed around the way clinical teams actually work.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare informatics",
    text: "Solutions that structure, connect and make sense of clinical and operational healthcare data while respecting privacy and governance.",
  },
  {
    icon: Activity,
    title: "Biomedical data analytics",
    text: "Analytical pipelines and applications for research datasets, built for reproducibility from raw input to reported result.",
  },
];

const principles = [
  {
    icon: Lock,
    title: "Security",
    text: "Least-privilege access, encryption in transit and at rest, and security considered at every design decision.",
  },
  {
    icon: Workflow,
    title: "Auditability",
    text: "Who did what, when and why is recorded in a way that can be reviewed. Changes are traceable, not silent.",
  },
  {
    icon: ShieldCheck,
    title: "Validation-ready",
    text: "Requirements, specifications and testing are documented so the software can be assessed within a computer system validation approach.",
  },
  {
    icon: Cable,
    title: "Interoperability",
    text: "Open standards (such as CDISC and HL7 FHIR) and documented interfaces, so systems connect rather than lock data in.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="Platforms engineered for regulated science"
        text="We design, develop, host and maintain software for clinical trials, healthcare informatics and biomedical research, built with the controls regulated work demands."
        crumbs={[{ label: "Home", href: "/" }, { label: "Technology" }]}
      />
      <Section labelledBy="platforms">
        <SectionHeader id="platforms" eyebrow="Platform areas" title="Three areas of focus" />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {platforms.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={i * 0.07} className="h-full">
                <Card className="h-full">
                  <p.icon className="h-8 w-8 text-teal-700" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-medium text-ink-950">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-600">{p.text}</p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Disclaimer>
            [PLACEHOLDER: add product names, status (in development / available) and screenshots once real platforms
            exist.] No product described here should be taken as a released or validated system until stated explicitly.
          </Disclaimer>
        </div>
      </Section>
      <Section tone="dark" labelledBy="principles">
        <SectionHeader
          id="principles"
          dark
          eyebrow="Design principles"
          title="Four non-negotiables"
          text="Whatever we build, these principles come first."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {principles.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={(i % 2) * 0.07} className="h-full">
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                  <p.icon className="h-7 w-7 text-teal-300" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="mt-4 text-2xl font-medium text-white">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-mist-200">{p.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>
      <CTABanner title="Have a platform requirement in mind?" text="Tell us what you need to build or modernise." />
    </>
  );
}
