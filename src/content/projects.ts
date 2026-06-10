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
  /** Intrinsic pixel dimensions; falls back to the default gallery ratio when omitted. */
  width?: number;
  height?: number;
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
    title: "SpartysBoots",
    org: "Michigan State · CSE 335",
    category: "C++ · Object-Oriented Design",
    timeframe: "Oct – Nov 2024",
    team: "4-person team",
    tagline:
      "A C++/wxWidgets logic-circuit puzzle game inspired by Rocky's Boots, built for MSU's CSE 335. I contributed the scoreboard rendering, XML-driven score and instruction loading, product-scoring logic, and Sparty's kick animation and input-pin behavior within a 4-person team.",
    tags: [
      "C++",
      "Object-Oriented Design",
      "wxWidgets",
      "Testing",
      "Event-Driven",
      "Desktop GUI",
    ],
    techStack: [
      "C++",
      "wxWidgets",
      "CMake",
      "Google Test",
      "Doxygen",
      "XML Parsing",
    ],
    overview: [
      "SpartysBoots is a C++ and wxWidgets logic-circuit puzzle game built by a 4-person team for Michigan State University's CSE 335 (Object-Oriented Software Design). Inspired by the 1982 classic Rocky's Boots, it challenges players to complete levels by wiring circuits from logic gates — AND, OR, NOT, NAND, SR FlipFlop, and D FlipFlop.",
      "My code contributions focused on the Scoreboard, ScoringVisitor, and Sparty gameplay systems: XML-loaded scoreboard configuration, score and instruction rendering, product-scoring outcomes, and Sparty's kick animation, input-pin behavior, and wire-connection handling.",
      "This was a course team project: the game design and image assets were provided by MSU course staff, and the four-person student team wrote the C++ gameplay code in CLion.",
    ],
    problem: [
      "Each level scores the player on which products get kicked off the conveyor, so the game needs reliable scoring, a clear scoreboard, and a Sparty actor whose kick is driven by the live state of the circuit the player builds.",
      "As a four-person team working in Agile sprints, we needed clean object-oriented boundaries and XML-driven configuration so levels, scores, and instructions could change as data rather than code.",
    ],
    contributions: [
      "Implemented the Scoreboard class, including XML loading of its position, good/bad scoring values, and multi-line instruction text.",
      "Rendered the scoreboard with wxWidgets graphics — level score, game score, a bordered panel, and per-line level instructions.",
      "Built the ScoringVisitor (visitor pattern) that evaluates each product — kicked, missed, correctly ignored, or already scored — and updates the score.",
      "Implemented and co-implemented Sparty: XML-loaded position, size, input-pin location, kick duration and speed; layered back/boot/front rendering with a rotating-boot kick animation; and input-pin wiring with release-to-connect behavior.",
      "Drove Sparty's kick timing off the input pin's logic state, triggering a product kick at the right point in the animation while the conveyor is moving.",
    ],
    architecture: [
      "Event-driven C++ design: items implement Update(elapsed) and Draw(graphics) against a wxGraphicsContext, keeping simulation state separate from wxWidgets rendering.",
      "Scoring uses the visitor pattern — a ScoringVisitor walks products and applies per-outcome scoring without coupling that logic into the product classes.",
      "Game content is data-driven: items such as the Scoreboard and Sparty load their position, sizing, scoring values, and instruction text from the level XML at runtime.",
      "Sparty composes three image layers (background, boot, foreground) and animates the boot around a pivot, kicking a product at a set point in the cycle based on the connected pin's state.",
      "CMake drives reproducible builds, Google Test covers the logic, and Doxygen generates documentation — on a sprint-based Agile workflow.",
    ],
    relevance: {
      title: "Software engineering relevance",
      points: [
        "Object-oriented design done deliberately — built on inheritance (an Item base class) and the visitor pattern (ScoringVisitor), which is exactly what CSE 335 sets out to teach.",
        "An event-driven update/draw loop with a clean split between simulation state and the wxWidgets GUI keeps a multi-author C++ codebase maintainable.",
        "XML-driven configuration is a practical example of data-driven design: scores, instructions, and actor placement change as data, not code.",
        "Working in a 4-person Agile team with Google Test and reproducible CMake builds reflects the engineering rigor backend and software roles rely on.",
      ],
    },
    impact: [
      { value: "3", label: "gameplay systems I authored" },
      { value: "6", label: "C++ files under my author tag" },
      { value: "4", label: "person MSU team" },
    ],
    impactNote:
      "Figures describe the systems and files I authored — the Scoreboard, ScoringVisitor, and Sparty classes — and the team's size, not performance benchmarks.",
    learnings: [
      "The visitor pattern keeps cross-cutting logic — like scoring every product by outcome — out of the data classes and easy to extend.",
      "Game feel lives in the update loop: tying Sparty's kick to elapsed time and the input pin's logic state made the timing predictable.",
      "On a four-person C++ team, data-driven XML config and shared object-oriented boundaries let everyone work without stepping on each other's code.",
    ],
    links: [
      {
        kind: "repo",
        label: "Repository",
        href: "https://github.com/chrispy-02/SpartysBoots",
        note: "C++/wxWidgets source on GitHub.",
      },
    ],
    gallery: [
      {
        src: "/images/spartyboots/spartyboots-gameplay.png",
        alt: "SpartysBoots gameplay showing the scoreboard and instructions, Sparty, and logic gates wired across the conveyor belt.",
        caption:
          "Gameplay — players wire logic gates to make Sparty kick the correct products off the conveyor; the scoreboard (top-right) tracks level and game score.",
        width: 794,
        height: 610,
      },
      {
        src: "/images/spartyboots/spartyboots-sparty.png",
        alt: "Sparty rendered from layered back, boot, and front images, with the input pin and wire used to connect logic to the kick.",
        caption:
          "Sparty — one of the systems I authored: layered back/boot/front rendering, a rotating-boot kick animation, and an input pin that triggers the kick when its logic state goes high.",
        width: 1918,
        height: 1021,
      },
    ],
  },
];

export const projectSlugs = projects.map((p) => p.slug);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
