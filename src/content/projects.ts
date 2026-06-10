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

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
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
  /** Optional screenshots rendered in the case study. */
  gallery?: ProjectImage[];
}

export const projects: Project[] = [
  {
    slug: "mckesson-vulnerability-scanner",
    title: "Vulnerability Scan & Detect Platform",
    org: "McKesson Capstone",
    category: "Application Security · Web Platform",
    timeframe: "Jan – May 2025",
    team: "6-person team",
    tagline:
      "A Flask/MySQL security platform that automates OWASP ZAP scans through GitHub Actions, stores results in MySQL, and surfaces vulnerabilities through role-based dashboards, scan history, and reporting views.",
    tags: [
      "Application Security",
      "Backend",
      "Automation",
      "Data Modeling",
      "RBAC",
      "Python",
      "Docker",
    ],
    techStack: [
      "Python",
      "Flask",
      "MySQL",
      "OWASP ZAP",
      "GitHub Actions",
      "Docker",
      "JavaScript",
      "Chart.js",
      "Google OAuth (Authlib)",
      "Gunicorn",
    ],
    overview: [
      "A capstone project sponsored by and built for McKesson, developed with a 6-person engineering team. The platform automates web vulnerability scanning and centralizes results that teams previously tracked by hand.",
      "It triggers OWASP ZAP scans through a GitHub Actions pipeline, ingests the findings, and presents them in role-based dashboards for risk summaries, scan history, and reporting — turning a manual, CSV-driven process into a repeatable workflow.",
      "After the capstone, I rebuilt the project into a public, deployable portfolio version: removing secrets, hardening the demo, and writing the architecture, deployment, and security documentation.",
    ],
    problem: [
      "Security review relied on running scans manually and reconciling results in spreadsheets — slow, error-prone, and hard to track over time.",
      "There was no central place to manage which sites were scanned, see historical risk trends, or schedule recurring scans across many targets.",
    ],
    contributions: [
      "On the capstone team, owned the MySQL data model end to end — a 12-table schema covering users and roles, managed websites, scan history, vulnerability records, recurring schedules, API keys, and website sharing.",
      "Contributed heavily to the Flask backend and JavaScript frontend — scan ingestion, website tracking, and historical risk reporting — and integrated OWASP ZAP into the team's CI pipeline so scans ran automatically.",
      "As the public-portfolio maintainer, migrated the scan automation from the original GitLab CI dependency to GitHub Actions and moved every checked-in secret into environment variables.",
      "Hardened the public demo with role-based access control, secure cookies, SSRF-aware scan-target validation, a scan allowlist for non-privileged users, per-user cooldowns, and a seeded demo login flow — and authored the architecture, deployment, and security docs.",
    ],
    architecture: [
      "Flask backend (served by Gunicorn) exposing routes for authentication, scan dispatch, website management, dashboards, reporting, and a REST API with per-user API keys, backed by a normalized MySQL schema.",
      "When a scan is requested, a target-validation guard runs first — rejecting non-HTTP and private/internal addresses (SSRF protection) and restricting non-privileged users to an allowlist — before the backend dispatches the OWASP ZAP baseline scan as a GitHub Actions workflow.",
      "GitHub Actions runs the ZAP scan and uploads the report as an artifact; the app polls the run, downloads the artifact, parses it, and writes scan summaries and vulnerability records to MySQL instead of exporting CSVs.",
      "A 12-table relational schema models users and roles, managed websites, individual scans, detected vulnerabilities, recurring schedules, API keys, and website sharing — enabling per-site historical risk reporting.",
      "A background scheduler thread runs recurring scans (hourly / daily / weekly / monthly); Dockerized services keep local and deployed environments consistent.",
    ],
    relevance: {
      title: "Security & backend relevance",
      points: [
        "Automates dynamic application security testing (DAST) with OWASP ZAP so scanning is continuous, not ad hoc.",
        "Vulnerability tracking and scan history make risk trends visible over time, across many sites.",
        "Role-based access control (owner / admin / employee / reader) and SSRF-aware scan-target validation model security boundaries directly into the system.",
        "Demonstrates secure workflow design — moving review out of error-prone spreadsheets into an auditable, automated system.",
      ],
    },
    impact: [
      { value: "12", label: "MySQL tables designed and owned" },
      { value: "4", label: "RBAC roles enforced (owner → reader)" },
      { value: "6", label: "engineers on the capstone team" },
    ],
    impactNote:
      "Capstone-built, then hardened for a public demo — figures describe the system I designed and own, not production traffic.",
    learnings: [
      "Translating a security workflow into a data model — getting the schema right made every downstream feature simpler.",
      "Integrating security tooling into CI/CD so it runs reliably and produces structured, ingestible output.",
      "Taking a class project to a public, deployable standard: removing secrets, hardening a demo, and documenting architecture and deployment for others to run.",
    ],
    links: [
      {
        kind: "repo",
        label: "Repository",
        href: "https://github.com/chrispy-02/security-scanner-platform",
        note: "Public portfolio version — cleaned, secured, and documented for deployment.",
      },
      {
        kind: "video",
        label: "Demo video",
        href: "https://www.youtube.com/watch?v=YUtp3JlNoGM",
        note: "Walkthrough of the platform in action.",
      },
      {
        kind: "demo",
        label: "Live demo",
        href: "https://security-scanner-platform.onrender.com/home",
        note: "Hosted demo (free tier — may take a moment to wake).",
      },
    ],
    gallery: [
      {
        src: "/images/mckesson/executive-dashboard.png",
        alt: "Executive security dashboard showing overall risk score, active vulnerabilities by severity, remediation rate, and trend graphs.",
        caption: "Executive dashboard — risk scoring and trend analytics.",
      },
      {
        src: "/images/mckesson/scan-dashboard.png",
        alt: "Scan dashboard listing monitored websites with high, medium, low, and informational risk counts and per-site report links.",
        caption: "Per-site scan results with severity breakdowns and report access.",
      },
      {
        src: "/images/mckesson/roles.png",
        alt: "Role management screen for assigning user roles such as owner, admin, and reader.",
        caption: "Role-based access control — managing user roles.",
      },
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
