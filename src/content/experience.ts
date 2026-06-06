/** Work experience and education. Locations omitted except where genuinely remote. */

export interface ExperienceItem {
  role: string;
  org: string;
  meta?: string;
  location?: string;
  period: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Web3 Security Data Analytics Intern",
    org: "Webacy",
    meta: "Externship",
    location: "Remote",
    period: "Aug 2024 – Sep 2024",
    points: [
      "Analyzed and labeled vulnerability data across 10+ smart contracts to support risk profiling and smart-contract security research.",
      "Ran frequency and correlation analysis on risk tags to surface recurring vulnerability patterns and relationships.",
      "Applied unsupervised clustering to group contracts by shared risk characteristics and surface common security themes.",
    ],
  },
  {
    role: "Freelance Python Tutor",
    org: "Self-employed",
    period: "Sep 2021 – May 2022",
    points: [
      "Tutored 3 students in Python through personalized one-on-one instruction, contributing to an average grade improvement of 47%.",
    ],
  },
];

export interface Education {
  school: string;
  degree: string;
  period: string;
  honors: string;
}

export const education: Education = {
  school: "Michigan State University, College of Engineering",
  degree: "B.S. in Computer Science · Minor in Business",
  period: "Graduated May 2025",
  honors: "Dean's List & University Honors — Spring 2021, Fall 2024, Spring 2025",
};
