import Link from "next/link";
import { ArrowUpRight, Cable, Check, Lock, ShieldCheck, Workflow } from "lucide-react";
import { Card, CTABanner, Disclaimer, PageHero, Section, SectionHeader } from "@/components/ui";
import { ServiceIcon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import type { Service } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Technology",
  description:
    "AI software for every department of clinical research, from clinical operations and data management to biostatistics, safety, regulatory and neuroinformatics, designed for security, auditability, validation and interoperability.",
  path: "/technology",
});

type Product = {
  icon: Service["icon"];
  department: string;
  title: string;
  text: string;
  features: string[];
  /** Slug of the related service page, if one exists. */
  service?: string;
};

const products: Product[] = [
  {
    icon: "flask",
    department: "Clinical Operations",
    title: "AI study operations assistant",
    text: "Keeps studies organised by tracking start-up, site and TMF status and surfacing what needs attention next.",
    features: [
      "TMF completeness and misfiling checks",
      "Enrolment and site-performance forecasting",
      "Protocol feasibility and complexity review",
    ],
    service: "clinical-research-operations",
  },
  {
    icon: "database",
    department: "Clinical Data Management",
    title: "AI data review and cleaning",
    text: "Helps data managers focus on the discrepancies most likely to matter, ahead of database lock.",
    features: [
      "Anomaly and outlier detection across visits",
      "Suggested queries for human review",
      "Assisted external data and SAE reconciliation",
    ],
    service: "clinical-data-management",
  },
  {
    icon: "chart",
    department: "Biostatistics",
    title: "AI statistical design workbench",
    text: "Supports statisticians from estimand to analysis plan with reproducible, documented calculations.",
    features: [
      "Sample size and scenario simulation",
      "SAP drafting from protocol objectives",
      "Consistency checks between SAP and outputs",
    ],
    service: "biostatistics",
  },
  {
    icon: "code",
    department: "Statistical Programming",
    title: "AI CDISC mapping and TLF engine",
    text: "Speeds up SDTM and ADaM work while keeping every dataset traceable to its source and specification.",
    features: [
      "Suggested SDTM mappings from raw data",
      "Spec-driven ADaM and TLF code generation",
      "Automated conformance and QC comparison",
    ],
    service: "statistical-programming",
  },
  {
    icon: "pen",
    department: "Medical Writing",
    title: "AI source-grounded document drafting",
    text: "Drafts clinical documents only from supplied source material, with every statement linked back to it.",
    features: [
      "CSR, protocol and narrative first drafts",
      "Source-to-text and table reconciliation checks",
      "Template and style alignment",
    ],
    service: "medical-writing",
  },
  {
    icon: "shield",
    department: "Pharmacovigilance & Drug Safety",
    title: "AI safety case and signal intelligence",
    text: "Supports drug safety teams with case intake, literature screening and signal tracking.",
    features: [
      "Case intake extraction and triage",
      "MedDRA and WHO Drug coding suggestions",
      "Literature screening and signal detection support",
    ],
    service: "pharmacovigilance",
  },
  {
    icon: "landmark",
    department: "Regulatory Affairs",
    title: "AI regulatory intelligence and dossier review",
    text: "Keeps regulatory documentation consistent and teams up to date with changing guidance.",
    features: [
      "Guidance change tracking across authorities",
      "CTD / eCTD consistency and gap checks",
      "Agency query response drafting support",
    ],
    service: "regulatory-affairs",
  },
  {
    icon: "brain",
    department: "Neuroinformatics",
    title: "AI neuroimaging and neurophysiology analytics",
    text: "Structures and analyses brain imaging and signal data for neuroscience and CNS trials, reproducibly from raw scan to reported result.",
    features: [
      "MRI and fMRI pre-processing and quality control",
      "EEG / MEG signal cleaning and feature extraction",
      "BIDS-organised datasets and digital biomarker pipelines",
    ],
    service: "neuroinformatics",
  },
  {
    icon: "graduation",
    department: "Training & Quality",
    title: "AI learning and SOP assistant",
    text: "Helps teams learn standards in context and keep procedures current and easy to find.",
    features: [
      "Role-based learning paths and assessments",
      "SOP drafting and search",
      "Inspection-readiness checklists",
    ],
    service: "training-outsourced-support",
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
    text: "Open standards (such as CDISC, HL7 FHIR and BIDS) and documented interfaces, so systems connect rather than lock data in.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="AI software for the whole clinical research team"
        text="We design, develop, host and maintain AI software for every department of clinical research, built with the controls regulated work demands."
        crumbs={[{ label: "Home", href: "/" }, { label: "Technology" }]}
      />
      <Section labelledBy="products">
        <SectionHeader
          id="products"
          eyebrow="AI software"
          title="AI software for every department of clinical research"
          text="One product family that covers the full clinical research team. Each product supports a department's daily work, and qualified people stay accountable for every decision."
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={(i % 3) * 0.07} className="h-full">
                <Card className="flex h-full flex-col">
                  <div className="flex items-center gap-4">
                    <ServiceIcon name={p.icon} className="shrink-0" />
                    <p className="font-mono text-xs uppercase tracking-wider text-teal-700">{p.department}</p>
                  </div>
                  <h3 className="mt-5 text-xl font-medium text-ink-950">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-600">{p.text}</p>
                  <ul className="mt-4 space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2 text-[0.95rem] text-ink-800">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-teal-700" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {p.service && (
                    <Link
                      href={`/services/${p.service}`}
                      className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-teal-700 underline-offset-2 hover:underline"
                    >
                      Related service <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Disclaimer>
            [PLACEHOLDER: add product names, status (in development / available) and screenshots once real products
            exist.] No product described here should be taken as a released or validated system until stated explicitly.
            AI outputs are suggestions for review by qualified people, not decisions.
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
      <CTABanner title="Want AI support for your department?" text="Tell us which team and workflow you want to improve." />
    </>
  );
}
