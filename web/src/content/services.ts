/** Typed service content. One entry = one /services/[slug] page. */
export type Service = {
  slug: string;
  title: string;
  icon: "flask" | "database" | "chart" | "code" | "pen" | "shield" | "landmark" | "graduation";
  short: string;
  overview: string[];
  deliver: string[];
  deliverables: string[];
  frameworks: string[];
  engagement: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

const engagement = {
  project: { title: "Project-based", text: "A defined scope, timeline and set of deliverables agreed up front." },
  dedicated: {
    title: "Dedicated capacity",
    text: "Specialists embedded in your workflow on a longer-term, scalable basis.",
  },
  adhoc: { title: "Advisory & ad hoc", text: "Targeted expert input, reviews or surge support when you need it." },
};

export const services: Service[] = [
  {
    slug: "clinical-research-operations",
    title: "Clinical Research & Operations Support",
    icon: "flask",
    short: "Operational and documentation support that keeps studies organised, traceable and inspection-aware.",
    overview: [
      "Well-run studies are built on clear plans, current documentation and reliable tracking. We provide operational support that sits alongside your clinical team and keeps the moving parts organised.",
      "Our focus is on the supporting work that is easy to under-resource: trackers, plans, document control and coordination, delivered with a consistent quality mindset.",
    ],
    deliver: [
      "Study start-up documentation support and tracking",
      "Trial master file organisation and completeness checks",
      "Study plan and manual drafting support",
      "Operational metrics and status reporting",
      "Protocol and data requirement review support",
    ],
    deliverables: [
      "Study trackers and status reports",
      "TMF index and completeness reviews",
      "Draft study plans and manuals",
      "Meeting minutes and action logs",
    ],
    frameworks: [
      "ICH E6 (GCP) principles",
      "ICH E8 general considerations",
      "CDSCO New Drugs and Clinical Trials Rules, 2019",
      "ICMR ethical guidelines",
    ],
    engagement: [engagement.project, engagement.dedicated, engagement.adhoc],
    faqs: [
      {
        q: "Do you act as a full-service CRO?",
        a: "Evidome provides specialist support services. The exact scope of any engagement, and the responsibilities that remain with the sponsor, are agreed in writing before work begins.",
      },
      {
        q: "Can you work inside our systems?",
        a: "Where your SOPs and access policies allow, yes. We can work in sponsor-provided systems or propose a lightweight, secure alternative.",
      },
    ],
  },
  {
    slug: "clinical-data-management",
    title: "Clinical Data Management",
    icon: "database",
    short: "Fit-for-purpose data capture, cleaning and reconciliation, planned around risk and ready for lock.",
    overview: [
      "Data quality is decided early: in the design of the CRF, the logic of the edit checks and the clarity of the data management plan. We design for the analysis you intend to run.",
      "We take a risk-based view of data management, concentrating attention on data that matters most to participant safety and the integrity of the primary endpoints.",
    ],
    deliver: [
      "Data management plan and CRF completion guidelines",
      "eCRF design input and data validation specifications",
      "User acceptance testing support",
      "Discrepancy management and query handling",
      "External data reconciliation (e.g. labs, SAE reconciliation)",
      "Medical coding coordination and database lock activities",
    ],
    deliverables: [
      "Data Management Plan",
      "Data Validation Specification",
      "Query and discrepancy listings",
      "Reconciliation reports",
      "Database lock checklist and documentation",
    ],
    frameworks: [
      "ICH E6 (GCP)",
      "CDISC CDASH",
      "21 CFR Part 11 and EU Annex 11 principles for electronic records",
      "ALCOA+ data integrity principles",
    ],
    engagement: [engagement.project, engagement.dedicated, engagement.adhoc],
    faqs: [
      {
        q: "Which EDC systems do you work with?",
        a: "[PLACEHOLDER: list the EDC platforms the team has hands-on experience with]. We aim to be platform-flexible and will confirm fit during scoping.",
      },
      {
        q: "Do you follow risk-based approaches?",
        a: "Yes. We structure data review around critical data and processes, and document the rationale in the data management plan.",
      },
    ],
  },
  {
    slug: "biostatistics",
    title: "Biostatistics",
    icon: "chart",
    short: "Statistical design and analysis that is pre-specified, reproducible and clearly explained.",
    overview: [
      "Good statistics begins with a clear question. We help teams translate objectives and estimands into a pre-specified analysis plan, and then execute that plan transparently.",
      "We write for two audiences at once: the regulator who needs rigor, and the clinician who needs to understand what the numbers mean.",
    ],
    deliver: [
      "Sample size and power considerations",
      "Statistical analysis plan authoring and review",
      "Randomisation specification support",
      "Interim, primary and exploratory analyses",
      "Survival, longitudinal and categorical data methods",
      "Statistical sections of protocols and reports",
    ],
    deliverables: [
      "Statistical Analysis Plan",
      "Analysis results and statistical output",
      "Statistical methods text for reports",
      "Reproducible analysis documentation",
    ],
    frameworks: [
      "ICH E9 and E9(R1) estimands framework",
      "ICH E3 report structure",
      "CONSORT reporting principles",
      "Applicable FDA / EMA statistical guidance",
    ],
    engagement: [engagement.project, engagement.dedicated, engagement.adhoc],
    faqs: [
      {
        q: "Can you review a statistical plan written by someone else?",
        a: "Yes. An independent methodological review is a common, lightweight engagement.",
      },
      {
        q: "Do you guarantee a study outcome?",
        a: "No. Statistics describe evidence; they do not determine it. We never promise results or regulatory outcomes.",
      },
    ],
  },
  {
    slug: "statistical-programming",
    title: "Statistical Programming",
    icon: "code",
    short: "CDISC-conformant SDTM and ADaM datasets and TLFs with documented, validated programs.",
    overview: [
      "Submission-quality programming is as much about traceability as it is about code. Every dataset and output should trace back to its source and its specification.",
      "We build to the CDISC standards, validate independently where required, and deliver the metadata and documentation reviewers expect to see.",
    ],
    deliver: [
      "SDTM mapping specifications and dataset programming",
      "ADaM specifications and analysis dataset programming",
      "Tables, listings and figures (TLFs)",
      "Define-XML and reviewer's guide support",
      "Independent double programming and QC",
      "Program documentation and reproducible environments",
    ],
    deliverables: [
      "SDTM and ADaM datasets",
      "Define-XML and supporting metadata",
      "TLF packages",
      "Validation and QC documentation",
    ],
    frameworks: [
      "CDISC SDTM, SDTMIG, ADaM, ADaMIG",
      "CDISC Define-XML",
      "CDISC Controlled Terminology",
      "Regulatory data standards guidance (e.g. FDA Study Data Technical Conformance Guide)",
    ],
    engagement: [engagement.project, engagement.dedicated, engagement.adhoc],
    faqs: [
      {
        q: "Which programming languages do you use?",
        a: "[PLACEHOLDER: confirm languages and tools, e.g. SAS, R, Python]. Choice is agreed per project and per sponsor requirements.",
      },
      {
        q: "Do you check conformance?",
        a: "We plan conformance checking into the workflow and document findings. Final submission readiness remains a joint review with the sponsor.",
      },
    ],
  },
  {
    slug: "medical-writing",
    title: "Medical Writing",
    icon: "pen",
    short: "Clear, accurate scientific and regulatory documents, drafted from source and quality-controlled.",
    overview: [
      "Clinical documents carry decisions. We draft them so that each statement is supported by a source, each table reconciles with the data and each section is written for the reader who will rely on it.",
      "Our approach pairs scientific writing discipline with structured templates and a documented review cycle.",
    ],
    deliver: [
      "Clinical study protocols and amendments",
      "Clinical study reports and synopses",
      "Investigator brochures and updates",
      "Patient narratives and safety summaries",
      "Informed consent form drafting support",
      "Publication and summary document support",
    ],
    deliverables: [
      "Draft and final documents",
      "Source-to-text QC records",
      "Comment resolution logs",
      "Style and template alignment",
    ],
    frameworks: [
      "ICH E3 (clinical study reports)",
      "ICH M4 (CTD)",
      "ICH E6 (GCP)",
      "CONSORT and ICMJE publication guidance",
    ],
    engagement: [engagement.project, engagement.dedicated, engagement.adhoc],
    faqs: [
      {
        q: "Do you use AI to write documents?",
        a: "Any AI-assisted drafting is disclosed, constrained to supplied source material and reviewed by a qualified human writer. See our responsible-AI principles.",
      },
      {
        q: "Who owns the final document?",
        a: "The sponsor. We draft and support; the sponsor reviews, approves and remains accountable.",
      },
    ],
  },
  {
    slug: "pharmacovigilance",
    title: "Pharmacovigilance & Drug Safety",
    icon: "shield",
    short: "Safety case handling, surveillance and aggregate reporting support aligned to good practice.",
    overview: [
      "Patient safety depends on timely, consistent handling of adverse event information. We provide structured, documented support for the day-to-day work of drug safety.",
      "Our teams operate within the procedures and safety systems you specify, with clear escalation routes for medical judgement.",
    ],
    deliver: [
      "Adverse event case intake and data entry support",
      "MedDRA and WHO Drug coding support",
      "Literature surveillance and screening",
      "Aggregate report drafting support (e.g. PSUR/PBRER, DSUR inputs)",
      "Safety reconciliation with clinical databases",
      "Signal detection support and tracking",
    ],
    deliverables: [
      "Processed case documentation",
      "Literature screening logs",
      "Aggregate report drafts",
      "Reconciliation reports",
    ],
    frameworks: [
      "ICH E2A–E2F safety guidelines",
      "EU GVP modules",
      "Pharmacovigilance Programme of India (PvPI) guidance",
      "FDA 21 CFR 312 / 314 safety reporting requirements",
    ],
    engagement: [engagement.project, engagement.dedicated, engagement.adhoc],
    faqs: [
      {
        q: "Do you make medical causality decisions?",
        a: "Medical assessment and final decisions rest with the qualified person or medical reviewer designated by the safety-system owner.",
      },
      {
        q: "Can you work in our safety database?",
        a: "Where permitted by your procedures and access controls, yes, subject to training and agreed responsibilities.",
      },
    ],
  },
  {
    slug: "regulatory-affairs",
    title: "Regulatory Affairs",
    icon: "landmark",
    short: "Organised, consistent regulatory documentation and intelligence across key authorities.",
    overview: [
      "Regulatory success rests on consistent, well-organised information. We help teams compile, review and maintain the documentation that supports their regulatory strategy.",
      "We provide support and intelligence; strategy and final regulatory decisions remain with the sponsor and its authorised regulatory leads.",
    ],
    deliver: [
      "Dossier component compilation and consistency review",
      "CTD / eCTD structure and content alignment support",
      "Regulatory gap analysis against guidance",
      "Regulatory intelligence and guidance tracking",
      "Labelling and artwork review support",
      "Responses to agency queries: drafting support",
    ],
    deliverables: [
      "Dossier component packages",
      "Gap analysis reports",
      "Regulatory intelligence summaries",
      "Query response drafts",
    ],
    frameworks: [
      "ICH CTD / eCTD",
      "CDSCO requirements (India)",
      "EMA and FDA guidance",
      "Medical Devices Rules, 2017 (India)",
    ],
    engagement: [engagement.project, engagement.dedicated, engagement.adhoc],
    faqs: [
      {
        q: "Can you guarantee approval?",
        a: "No. Approval decisions are made solely by regulatory authorities. We never promise or imply a regulatory outcome.",
      },
      {
        q: "Which regions do you cover?",
        a: "[PLACEHOLDER: confirm the regions and authorities the team can support].",
      },
    ],
  },
  {
    slug: "training-outsourced-support",
    title: "Training & Outsourced Support",
    icon: "graduation",
    short: "Capability-building and scalable outsourced support for growing life sciences teams.",
    overview: [
      "Sustainable capability comes from people who understand the why behind the process. We design training that links standards to the daily work of the team.",
      "For teams that need to scale quickly, we also provide outsourced support models with clear service definitions and quality oversight.",
    ],
    deliver: [
      "Workshops on CDISC, GCP, data management and pharmacovigilance fundamentals",
      "Role-based onboarding curricula",
      "Process documentation and SOP drafting support",
      "Outsourced functional support with defined service levels",
      "Knowledge-transfer and handover planning",
    ],
    deliverables: [
      "Training materials and exercises",
      "Competency checklists",
      "SOP drafts",
      "Service-level definitions",
    ],
    frameworks: [
      "ICH E6 (GCP) training expectations",
      "CDISC published standards",
      "Good documentation practice (ALCOA+)",
    ],
    engagement: [engagement.project, engagement.dedicated, engagement.adhoc],
    faqs: [
      {
        q: "Do you issue certifications?",
        a: "Training completion records may be provided. Evidome does not issue accredited or regulatory certifications.",
      },
      {
        q: "Can training be customised to our SOPs?",
        a: "Yes. We can adapt examples and exercises to your processes and systems.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
