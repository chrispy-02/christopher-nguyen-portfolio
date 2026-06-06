import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  type IconProps,
} from "@/components/ui/Icons";
import { navLinks, siteConfig, socialLinks, type SocialKind } from "@/content/site";

const iconFor: Record<SocialKind, (props: IconProps) => React.ReactElement> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: MailIcon,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t">
      <Container>
        <div className="flex flex-col gap-10 py-12 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-foreground font-mono text-sm font-semibold text-background">
                CN
              </span>
              <span className="text-sm font-semibold tracking-tight text-foreground">
                Christopher Nguyen
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Backend engineer with security experience. {siteConfig.location}.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <nav aria-label="Footer">
              <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                Pages
              </h2>
              <ul className="mt-3 flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                Connect
              </h2>
              <ul className="mt-3 flex flex-col gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = iconFor[social.kind];
                  const isExternal = social.kind !== "email";
                  return (
                    <li key={social.kind}>
                      <a
                        href={social.href}
                        className="inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-foreground"
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                      >
                        <Icon className="h-4 w-4" />
                        {social.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Christopher Nguyen. All rights reserved.</p>
          <p>Built with Next.js &amp; Tailwind CSS · Deployed on Vercel.</p>
        </div>
      </Container>
    </footer>
  );
}
