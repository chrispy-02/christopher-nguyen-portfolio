/** Technical skills and high-level focus areas. */

export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "SQL / MySQL", "JavaScript", "C++", "Java", "HTML / CSS"],
  },
  {
    title: "Frameworks",
    items: ["Flask", "Express", "Node.js", "REST APIs", "jQuery", "wxWidgets"],
  },
  {
    title: "Tools",
    items: [
      "Docker",
      "Git",
      "GitHub",
      "GitHub Actions",
      "GitLab CI/CD",
      "Jira",
      "OWASP ZAP",
      "Google Test",
      "CMake",
      "Doxygen",
    ],
  },
];

export interface FocusArea {
  title: string;
  description: string;
}

export const focusAreas: FocusArea[] = [
  {
    title: "Application Security",
    description:
      "Automating DAST with OWASP ZAP, tracking vulnerabilities over time, and designing secure workflows and access control.",
  },
  {
    title: "Backend Engineering",
    description:
      "Flask and Node/Express services, REST APIs, and relational data modeling I can own end to end.",
  },
  {
    title: "Automation & CI/CD",
    description:
      "Wiring scans and builds into GitHub Actions, GitLab CI/CD, and Docker so the right things happen automatically and repeatably.",
  },
  {
    title: "Reliable Software",
    description:
      "Test coverage, performance, and clear documentation — the non-functional work that makes systems trustworthy.",
  },
];
