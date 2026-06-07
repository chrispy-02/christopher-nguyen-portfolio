import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import {
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/ui/Icons";
import { siteConfig } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border bg-surface px-6 py-12 sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-dot-grid opacity-60 [mask-image:radial-gradient(ellipse_60%_85%_at_50%_0%,black,transparent)]"
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <Eyebrow>Contact</Eyebrow>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Let&apos;s build something secure and reliable.
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
              I&apos;m open to Application Security, Backend, and Software
              Engineering roles. The best way to reach me is email — or connect on
              LinkedIn and GitHub.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink
                href={`mailto:${siteConfig.email}`}
                variant="primary"
                size="md"
              >
                <MailIcon className="h-4 w-4" />
                {siteConfig.email}
              </ButtonLink>
              <ButtonLink href={siteConfig.linkedin} variant="secondary" size="md" external>
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </ButtonLink>
              <ButtonLink href={siteConfig.github} variant="secondary" size="md" external>
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </ButtonLink>
              <ButtonLink
                href={siteConfig.resumePath}
                download
                variant="secondary"
                size="md"
              >
                <DownloadIcon className="h-4 w-4" />
                Resume
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
