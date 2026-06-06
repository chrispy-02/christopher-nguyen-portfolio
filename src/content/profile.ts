/** Personal narrative content: hero copy, intro, and the About section. */

export const profile = {
  name: "Christopher Nguyen",
  eyebrow: "Application Security · Backend · Software Engineering",
  headline: "Backend engineer with a security mindset.",
  subhead:
    "I build secure web applications, automation workflows, and data-driven tooling. Recent work spans OWASP ZAP scan automation, clinical workflow systems, and well-tested C++ applications.",
  intro:
    "Michigan State University computer science graduate focused on application security, backend engineering, and reliable software systems.",
  about: [
    "I'm Christopher Nguyen, a software engineer drawn to the parts of a system that have to be correct: data models, backends, security workflows, and the automation that keeps them honest.",
    "My strongest project is a web vulnerability-scanning platform built for a McKesson-sponsored capstone, where I owned the database schema and helped automate OWASP ZAP scans through CI/CD. I've also built clinical workflow software with careful, privacy-aware domain logic, and a tested C++ simulator with attention to performance and coverage.",
    "I care about secure-by-default design, clear data modeling, and writing software teammates can read and trust. I'm comfortable owning a slice of a system end to end and collaborating closely with a team.",
  ],
} as const;
