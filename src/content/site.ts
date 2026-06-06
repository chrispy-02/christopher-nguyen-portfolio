/**
 * Site-wide configuration and external links.
 * Single source of truth for contact details, social links, and SEO defaults.
 */

export const siteConfig = {
  name: "Christopher Nguyen",
  // REPLACE_ME: set to your real production URL after the first Vercel deploy.
  // Used for absolute OG/canonical URLs. A placeholder here is safe for the build.
  url: "https://christopher-nguyen.vercel.app",
  title: "Christopher Nguyen — Backend & Application Security Engineer",
  description:
    "Backend engineer with security experience building secure web applications, automation workflows, and data-driven tools. Focused on application security, backend engineering, and reliable software.",
  email: "nguye805@msu.edu",
  github: "https://github.com/chrispy-02",
  githubHandle: "chrispy-02",
  linkedin: "https://linkedin.com/in/ChristopherANguyen",
  linkedinHandle: "ChristopherANguyen",
  resumePath: "/Christopher_Nguyen_Resume.pdf",
  // Neutral location only — no city/address per site policy.
  location: "U.S.-based · Open to remote",
} as const;

export const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/#contact" },
] as const;

export type SocialKind = "github" | "linkedin" | "email";

export interface SocialLink {
  kind: SocialKind;
  label: string;
  href: string;
  handle: string;
}

export const socialLinks: SocialLink[] = [
  {
    kind: "github",
    label: "GitHub",
    href: siteConfig.github,
    handle: siteConfig.githubHandle,
  },
  {
    kind: "linkedin",
    label: "LinkedIn",
    href: siteConfig.linkedin,
    handle: siteConfig.linkedinHandle,
  },
  {
    kind: "email",
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    handle: siteConfig.email,
  },
];
