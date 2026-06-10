/**
 * Featured projects + full case-study content.
 *
 * Accuracy rules (do not cross):
 *  - McKesson: a capstone sponsored by / built for McKesson. NOT "used internally by McKesson".
 *  - ImmunoFlux: HIPAA-aware / privacy-conscious, IN PROGRESS. Not "compliant", not "in production".
 *    Private codebase — no public repo link.
 *  - All metrics below are taken verbatim from the resume.
 *
 * Placeholders to fill in are marked `REPLACE_ME` in comments (never in rendered strings).
 */

export interface Metric {
  value: string;
  label: string;
}

export type ProjectLinkKind = "repo" | "demo" | "video" | "private";

export interface ProjectLink {
  kind: ProjectLinkKind;
  label: string;
  /** When present, the link renders as a real anchor; otherwise a status badge. */
  href?: string;
  /** Short, user-facing status note shown when there is no href. */
  note?: string;
}

export interface Project {
  slug: string;
  title: string;
  org?: string;
  category: string;
  timeframe: string;
  status?: string;
  team: string;
  /** One-line summary used on cards and case-study headers. */
  tagline: string;
  tags: string[];
  techStack: string[];
  overview: string[];
  problem: string[];
  contributions: string[];
  architecture: string[];
  relevance: { title: string; points: string[] };
  impact: Metric[];
  impactNote?: string;
  learnings: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    slug: "mckesson-vulnerability-scanner",
    title: "Vulnerability Scan & Detect Platform",
    org: "McKesson Capstone",
    category: "Application Security · Web Platform",
    timeframe: "May 2025",
    team: "6-person team",
    tagline:
      "A web security platform that automates OWASP ZAP scans through CI/CD and replaces manual CSV review with centralized dashboards and reporting.",
    tags: [
      "Application Security",
      "Backend",
      "Automation",
      "Data Modeling",
      "CI/CD",
      "Python",
      "Docker",
    ],
    techStack: [
      "Python",
      "Flask",
      "MySQL",
      "OWASP ZAP",
      "Docker",
      "JavaScript",
      "GitLab CI/CD",
    ],
    overview: [
      "A capstone project sponsored by and built for McKesson, developed with a 6-person engineering team. The platform automates web vulnerability scanning and centralizes results that teams previously tracked by hand.",
      "It triggers OWASP ZAP scans through GitLab CI/CD pipelines, ingests the findings, and presents them in dashboards for tracking, history, and reporting — turning a manual, CSV-driven process into a repeatable workflow.",
    ],
    problem: [
      "Security review relied on running scans manually and reconciling results in spreadsheets — slow, error-prone, and hard to track over time.",
      "There was no central place to manage which sites were scanned, see historical risk trends, or schedule recurring scans across many targets.",
    ],
    contributions: [
      "Owned the MySQL data model end to end — designed 12 tables covering user access, website management, scan history, vulnerability tracking, and recurring scan scheduling.",
      "Contributed heavily to the Flask backend and JavaScript frontend, building scan ingestion, website tracking, and historical risk reporting.",
      "Helped wire OWASP ZAP scans into GitLab CI/CD so scans run automatically as part of the pipeline.",
    ],
    architecture: [
      "Flask backend exposing endpoints for scan ingestion, website management, and reporting, backed by a normalized MySQL schema.",
      "OWASP ZAP runs inside the GitLab CI/CD pipeline; output is parsed and ingested into the database instead of exported to CSV.",
      "A 12-table relational schema models users & access, managed websites, individual scans, detected vulnerabilities, and recurring scan schedules — enabling per-site historical risk reporting.",
      "Dockerized services keep local and pipeline environments consistent.",
    ],
    relevance: {
      title: "Security & backend relevance",
      points: [
        "Automates dynamic application security testing (DAST) with OWASP ZAP so scanning is continuous, not ad hoc.",
        "Vulnerability tracking and scan history make risk trends visible over time, across many sites.",
        "Access control modeled directly in the schema supports multi-user use with appropriate boundaries.",
        "Demonstrates secure workflow design — moving review out of error-prone spreadsheets into an auditable system.",
      ],
    },
    impact: [
      { value: "100+", label: "scans supported across dozens of websites" },
      { value: "12", label: "MySQL tables designed and owned" },
      { value: "5+", label: "users supported with multi-user access" },
    ],
    learnings: [
      "Translating a security workflow into a data model — getting the schema right made every downstream feature simpler.",
      "Integrating security tooling into CI/CD so it runs reliably and produces structured, ingestible output.",
      "Coordinating across a 6-person team: clear ownership boundaries kept the backend coherent.",
    ],
    links: [
      {
        kind: "repo",
        label: "Repository",
        href: "https://github.com/chrispy-02/security-scanner-platform",
        note: "This public portfolio version was cleaned, secured, documented, and prepared for deployment by myself.",
      },
      {
        kind: "video",
        label: "Demo video",
        href: "https://www.youtube.com/watch?v=YUtp3JlNoGM",
        note: "Demo video of the platform in action.",
      },
      {
        kind: "demo",
        label: "Live Application",
        href: "https://security-scanner-platform.onrender.com/home",
        note: "Live application of the platform.",
      },
      // REPLACE_ME: add screenshots to /public and surface them on this page when available.
    ],
  },
  {
    slug: "immunoflux-clinical",
    title: "ImmunoFlux Clinical",
    category: "Backend · Healthcare Workflow",
    timeframe: "2026",
    status: "In progress",
    team: "2-person team",
    tagline:
      "An internal clinical workflow application for an allergy & immunotherapy practice — modeling the real operational logic of treatment, compounding, and inventory.",
    tags: [
      "Backend",
      "Healthcare",
      "Workflow Modeling",
      "Privacy-aware",
      "Node.js",
      "Express",
    ],
    techStack: ["JavaScript", "Node.js", "Express", "HTML / CSS", "JSON"],
    overview: [
      "An internal workflow application for an allergy and immunotherapy clinic, built with a 2-person team. It supports the day-to-day operations of treatment: injection and SLIT workflows, patient scripts, compounding queues, and extract inventory.",
      "It is privacy-conscious and HIPAA-aware by design, and is an active work in progress. The code is private and not published.",
    ],
    problem: [
      "Allergy immunotherapy involves intricate, clinic-specific rules — vial expiration schedules, remakes, dilutions, inventory — that are easy to get wrong and tedious to track by hand.",
      "The practice needed software that encodes those rules accurately for a single clinic managing many patients and extracts at once.",
    ],
    contributions: [
      "Helped build the backend workflow logic in Node.js / Express and the supporting interface.",
      "Modeled clinic-specific logic: vial expiration schedules, remake handling, label printing, alerts, tray-based vial tracking, and inventory subtraction rules — including exceptions for in-house MM dilutions.",
    ],
    architecture: [
      "Node.js / Express backend organizing treatment workflows (injection and SLIT), patient scripts, compounding queues, and extract inventory.",
      "Domain logic sized for a single clinic serving 50–150 active patients at a time, with each patient managing 1–5 allergen extracts across ongoing treatment.",
      "Rules for expiration, remakes, and dilutions, with tray-based vial tracking, inventory subtraction, and documented exceptions (e.g., in-house MM dilutions).",
    ],
    relevance: {
      title: "Privacy & reliability",
      points: [
        "Designed with clinical privacy constraints in mind (HIPAA-aware): careful handling of patient-related data and access boundaries.",
        "Kept as a private codebase — reflecting appropriate handling of sensitive clinical software.",
        "Correctness is the priority: incorrect expiration or inventory logic has real clinical consequences, so the focus is clear, well-modeled rules.",
      ],
    },
    impact: [
      { value: "50–150", label: "active patients supported per clinic" },
      { value: "1–5", label: "allergen extracts modeled per patient" },
      { value: "2", label: "engineers building it end to end" },
    ],
    impactNote:
      "Work in progress — figures describe the operational scope the system is designed to support.",
    learnings: [
      "Turning messy, real-world clinical rules into reliable software — the value is in modeling the domain correctly, not just shipping features.",
      "Designing privacy-aware systems and respecting code and data boundaries from the start.",
    ],
    links: [
      {
        kind: "private",
        label: "Private repository — code not public",
        note: "Healthcare software; not published.",
      },
    ],
  },
  {
    slug: "spartyboots",
    title: "SpartyBoots",
    category: "Systems · C++ Engineering",
    timeframe: "Dec 2024",
    team: "4-person team",
    tagline:
      "A modular, event-driven logic-circuit simulator in C++ with a wxWidgets GUI — built with performance and test coverage in mind.",
    tags: ["C++", "Testing", "Performance", "Systems", "wxWidgets", "CMake"],
    techStack: ["C++", "wxWidgets", "CMake", "Doxygen", "Google Test"],
    overview: [
      "A logic-circuit simulator game built with a 4-person team: a modular, event-driven engine in C++ with a wxWidgets GUI.",
      "The focus was solid engineering practice — performance, test coverage, build automation, and documentation — on a sprint-based Agile schedule.",
    ],
    problem: [
      "Simulating logic circuits in real time demands an efficient, well-structured engine; a 4-person team also needs reliable builds, tests, and documentation to move quickly without regressions.",
    ],
    contributions: [
      "Improved frame rates by 25% through performance work on the simulation and render loop.",
      "Contributed to the Google Test suite, helping raise code coverage to 92% and cut regression debugging time by 40%.",
      "Supported CMake build automation and Doxygen documentation, helping cut build setup time by 30%.",
    ],
    architecture: [
      "Modular, event-driven C++ architecture separating simulation logic from the wxWidgets GUI.",
      "CMake build system for reproducible builds; Doxygen for generated documentation.",
      "Google Test suite integrated into the workflow to guard against regressions.",
    ],
    relevance: {
      title: "Engineering rigor",
      points: [
        "Demonstrates systems thinking: a modular, event-driven design that stays maintainable as it grows.",
        "Testing discipline — 92% coverage with a real Google Test suite — is the same rigor secure backends need.",
        "Performance and reproducible builds reflect attention to the non-functional qualities that make software reliable.",
      ],
    },
    impact: [
      { value: "+25%", label: "frame-rate improvement" },
      { value: "92%", label: "code coverage reached" },
      { value: "−40%", label: "regression debugging time" },
      { value: "−30%", label: "build setup time" },
    ],
    learnings: [
      "How much test coverage and clean build tooling pay off — they turn a 4-person C++ project from chaotic into predictable.",
      "Performance work is most effective when it's measured: profile before optimizing.",
    ],
    links: [
      // REPLACE_ME: add the SpartyBoots GitHub repository URL here (set `href`).
      {
        kind: "repo",
        label: "Repository",
        note: "Link coming soon.",
      },
    ],
  },
];

export const projectSlugs = projects.map((p) => p.slug);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
