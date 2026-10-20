/** Insights articles. Add an object to `articles` to publish a new post. */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date
  readMinutes: number;
  topic: string;
  author: string;
  body: Block[];
};

export const articles: Article[] = [
  {
    slug: "cdisc-readiness-start-before-the-data",
    title: "CDISC readiness starts before the first patient",
    excerpt:
      "Standards conformance is cheapest when it is designed in. Here is how early decisions on collection, mapping and metadata shape the work that follows.",
    date: "2026-09-22",
    readMinutes: 6,
    topic: "Data standards",
    author: "Evidome Editorial",
    body: [
      {
        type: "p",
        text: "Teams often treat CDISC conformance as something that happens at the end of a study: a conversion step between a clean database and a submission package. In practice, the cost and risk of that step are mostly decided much earlier, in how data are collected and defined.",
      },
      { type: "h2", text: "Collection design sets the ceiling" },
      {
        type: "p",
        text: "CDASH exists because collection and tabulation are connected. A case report form that captures a concept in a form the standard can't easily represent creates mapping decisions that someone must later defend. Aligning forms with CDASH-style conventions where it makes sense removes a class of avoidable derivations.",
      },
      { type: "h2", text: "Write the mapping specification as a design document" },
      {
        type: "p",
        text: "An SDTM mapping specification is more than a programming instruction. It is the record of how each collected item becomes a tabulated one. When it is drafted early and reviewed with data management and biostatistics, gaps surface while they are still cheap to fix.",
      },
      {
        type: "ul",
        items: [
          "Identify non-standard variables early and decide whether they belong in SUPP-- or a custom domain.",
          "Agree controlled terminology sources and versions up front.",
          "Record derivation logic in plain language before it is programmed.",
        ],
      },
      { type: "h2", text: "ADaM should follow the analysis, not the other way round" },
      {
        type: "p",
        text: "Analysis datasets should be shaped by the statistical analysis plan. If the plan is vague about populations, baseline definitions or handling of missing data, the ADaM design will be too, and the ambiguity will resurface as late-stage rework.",
      },
      { type: "h2", text: "Metadata is a deliverable" },
      {
        type: "p",
        text: "Define-XML and the reviewer's guide are how a reviewer understands your data. Treating them as an afterthought is a common reason a technically conformant package is still hard to navigate.",
      },
      {
        type: "callout",
        text: "A practical test: could someone who was not on the study team trace any number in a table back to a collected data point using only your documentation?",
      },
      {
        type: "p",
        text: "Conformance checking tools are valuable, but they verify rules, not judgement. The goal is a package that is both conformant and comprehensible, and that is largely achieved by the decisions made before the data exist.",
      },
    ],
  },
  {
    slug: "risk-based-data-management-in-practice",
    title: "Risk-based data management in practice",
    excerpt:
      "Moving from checking everything to checking what matters: a pragmatic view of critical data, proportionate review and documented rationale.",
    date: "2026-09-08",
    readMinutes: 5,
    topic: "Data management",
    author: "Evidome Editorial",
    body: [
      {
        type: "p",
        text: "Risk-based approaches are encouraged by ICH E6 and widely discussed, but turning the idea into daily practice can be harder than it sounds. At its core, the idea is simple: direct effort towards the data and processes that matter most to participant protection and the reliability of results.",
      },
      { type: "h2", text: "Start with what the study cannot afford to get wrong" },
      {
        type: "p",
        text: "Critical data typically include primary and key secondary endpoint measurements, safety data and eligibility information. Identifying these with the clinical and statistical team gives data management a defensible focus.",
      },
      { type: "h2", text: "Proportionate cleaning" },
      {
        type: "ul",
        items: [
          "Apply tight, automated edit checks to critical data.",
          "Use targeted or sampled review for lower-impact fields.",
          "Revisit the balance as accumulating data reveal where problems actually occur.",
        ],
      },
      { type: "h2", text: "Let the data tell you where to look" },
      {
        type: "p",
        text: "Central review of trends (outliers, unusual distributions, site-level patterns) can reveal issues that individual queries never will. The aim is to detect systematic problems early, not to exhaustively inspect each value.",
      },
      { type: "h2", text: "Document the why" },
      {
        type: "p",
        text: "An approach is only defensible if its rationale is written down. The data management plan should explain what was prioritised, what was not, and how the approach will adapt during the study.",
      },
      {
        type: "callout",
        text: "Risk-based does not mean less rigorous. It means rigor is applied deliberately, where it has the most effect.",
      },
    ],
  },
  {
    slug: "ai-in-pharmacovigilance-human-in-the-loop",
    title: "AI in pharmacovigilance: keeping a human in the loop",
    excerpt:
      "Where machine learning can genuinely help drug safety teams, where it cannot, and the guardrails that make the difference.",
    date: "2026-08-25",
    readMinutes: 7,
    topic: "AI & safety",
    author: "Evidome Editorial",
    body: [
      {
        type: "p",
        text: "Pharmacovigilance generates large volumes of semi-structured text: case narratives, literature, correspondence. That makes it a natural candidate for machine learning. It is also a domain where errors can affect patients, which means how AI is introduced matters as much as whether it is.",
      },
      { type: "h2", text: "Where AI can help" },
      {
        type: "ul",
        items: [
          "Triage of incoming reports to prioritise potentially serious cases.",
          "Literature screening to surface likely relevant articles for human review.",
          "Suggested coding for medical terms, confirmed by a coder.",
          "Duplicate detection and consistency checks across records.",
        ],
      },
      { type: "h2", text: "Where caution is essential" },
      {
        type: "p",
        text: "Causality assessment, seriousness decisions and regulatory reporting judgements involve clinical reasoning and accountability. Systems may inform these steps; they should not silently replace the qualified person responsible for them.",
      },
      { type: "h2", text: "Guardrails that matter" },
      {
        type: "ul",
        items: [
          "Human oversight: a named, qualified reviewer accepts or rejects every consequential output.",
          "Explainability: reviewers can see why a suggestion was made, not just what it is.",
          "Validation: performance is measured against defined acceptance criteria on representative data, and re-checked when data or models change.",
          "Data privacy: personal and health data are minimised, protected and used only for defined purposes.",
          "Traceability: model versions, inputs and decisions are logged and auditable.",
        ],
      },
      { type: "h2", text: "Measure what you rely on" },
      {
        type: "p",
        text: "A tool that is right on average can still fail on exactly the rare, serious cases that matter most. Evaluation should look at performance on high-risk subsets, not just overall accuracy, and should plan for monitoring after deployment.",
      },
      {
        type: "callout",
        text: "The question is not whether to use AI in safety, but how to design workflows where its speed supports, and never displaces, professional judgement.",
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
