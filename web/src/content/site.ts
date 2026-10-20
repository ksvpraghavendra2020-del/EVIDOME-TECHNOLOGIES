/**
 * Site-wide settings. Edit this file to change navigation, company details and contact info.
 * Anything wrapped in [PLACEHOLDER: ...] must be replaced with real information (see PLACEHOLDERS.md).
 */
export const site = {
  name: "Evidome",
  legalName: "EVIDOME TECHNOLOGIES (OPC) PRIVATE LIMITED",
  tagline: "Evidence, engineered.",
  description:
    "Evidome provides clinical research, data management, biostatistics, statistical programming, medical writing, pharmacovigilance and regulatory services, plus AI-enabled technology platforms for life sciences.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  country: "India",
  contact: {
    email: "[PLACEHOLDER: general enquiries email]",
    phone: "[PLACEHOLDER: phone number]",
    address: "[PLACEHOLDER: registered office address], India",
    emailHref: "", // set to e.g. "mailto:hello@yourdomain.com" once the real address exists
  },
  company: {
    type: "One Person Company (OPC) Private Limited",
    cin: "[PLACEHOLDER: CIN]",
    registeredOffice: "[PLACEHOLDER: registered office address], India",
    incorporated: "[PLACEHOLDER: date of incorporation]",
  },
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Technology", href: "/technology" },
  { label: "AI & Analytics", href: "/ai-analytics" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export const footerNav = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Industries", href: "/industries" },
    { label: "Insights", href: "/insights" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Platform: [
    { label: "Technology", href: "/technology" },
    { label: "AI & Analytics", href: "/ai-analytics" },
    { label: "Services overview", href: "/services" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Use", href: "/legal/terms" },
    { label: "Cookie Notice", href: "/legal/cookies" },
  ],
};

export const lifecycle = [
  {
    id: "protocol",
    label: "Protocol & Operations",
    blurb: "Study design inputs, feasibility support and operational planning.",
    detail:
      "Clear operational foundations: we support protocol review, study documentation, tracking and coordination so that data requirements are defined before the first participant is enrolled.",
    outputs: ["Protocol review notes", "Study plans & trackers", "Data requirement mapping"],
  },
  {
    id: "data",
    label: "Data Management",
    blurb: "From CRF design to a clean, locked database.",
    detail:
      "Case report form design, data validation specifications, query management and reconciliation, structured around a documented data management plan and a risk-based approach to quality.",
    outputs: ["Data Management Plan", "CRF & edit-check specs", "Database lock package"],
  },
  {
    id: "stats",
    label: "Biostatistics & Programming",
    blurb: "Statistical design, analysis and CDISC-conformant datasets.",
    detail:
      "Sample size support, statistical analysis plans, SDTM and ADaM dataset programming, and tables, listings and figures produced with independent double-programming where specified.",
    outputs: ["Statistical Analysis Plan", "SDTM / ADaM datasets", "Tables, listings & figures"],
  },
  {
    id: "writing",
    label: "Medical Writing",
    blurb: "Accurate, traceable regulatory and scientific documents.",
    detail:
      "Clinical study protocols, study reports, investigator brochures and summary documents drafted from source data with disciplined referencing and quality control.",
    outputs: ["Protocols & amendments", "Clinical study reports", "Narratives & summaries"],
  },
  {
    id: "safety",
    label: "Pharmacovigilance",
    blurb: "Case processing, signal support and aggregate reporting.",
    detail:
      "Adverse event case intake and processing support, medical coding, literature surveillance and aggregate safety report preparation, aligned to good pharmacovigilance practice principles.",
    outputs: ["Case processing support", "Literature screening", "Aggregate report drafts"],
  },
  {
    id: "regulatory",
    label: "Regulatory Affairs",
    blurb: "Submission-ready documentation and regulatory intelligence.",
    detail:
      "Dossier compilation support, regulatory gap analysis and guidance tracking across CDSCO, EMA and FDA frameworks, helping teams keep submissions organised and consistent.",
    outputs: ["Dossier components", "Gap assessments", "Regulatory intelligence briefs"],
  },
];

export const industries = [
  {
    slug: "pharma",
    title: "Pharmaceutical companies",
    text: "Data, safety and documentation support across development phases, from first-in-human studies to post-marketing activities.",
    needs: ["Phase I–IV study support", "Submission-ready datasets", "Safety reporting support"],
  },
  {
    slug: "biotech",
    title: "Biotechnology",
    text: "Lean, scalable specialist capacity for emerging sponsors who need rigorous clinical data practices without building every function in-house.",
    needs: ["Flexible, scalable teams", "Early-phase data strategy", "Platform-enabled analytics"],
  },
  {
    slug: "medical-devices",
    title: "Medical devices",
    text: "Clinical evaluation, biostatistics and documentation support aligned to device-specific evidence expectations.",
    needs: ["Clinical evaluation support", "Device study statistics", "Post-market data review"],
  },
  {
    slug: "healthcare",
    title: "Healthcare providers",
    text: "Informatics and analytics that turn clinical and operational data into insight, with privacy and governance designed in.",
    needs: ["Healthcare informatics", "Registry & outcomes data", "Secure analytics workflows"],
  },
  {
    slug: "research",
    title: "Life sciences research",
    text: "Data processing, statistical methodology and software for academic and institutional research programmes.",
    needs: ["Research data pipelines", "Statistical methodology", "Training & capability building"],
  },
];

export const values = [
  { title: "Rigor", text: "Documented methods, independent checks and traceable decisions on every deliverable." },
  { title: "Transparency", text: "Plain-language status, honest scoping and no surprises on timelines or limits." },
  {
    title: "Regulatory awareness",
    text: "We work within recognised frameworks and flag where expert regulatory judgement is needed.",
  },
  {
    title: "Responsible technology",
    text: "Automation and AI that keep a qualified human accountable for decisions that matter.",
  },
];

export const interests = [
  "Clinical Research & Operations",
  "Clinical Data Management",
  "Biostatistics",
  "Statistical Programming",
  "Medical Writing",
  "Pharmacovigilance & Drug Safety",
  "Regulatory Affairs",
  "Training & Outsourced Support",
  "Technology platforms",
  "AI & Analytics",
  "Something else",
];
