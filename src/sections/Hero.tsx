import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { ArrowRightIcon, DownloadIcon, MailIcon } from "@/components/ui/Icons";
import { profile } from "@/content/profile";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-70 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />
      <Container className="relative">
        <div className="max-w-3xl py-20 sm:py-28 lg:py-32">
          <div className="animate-fade-up">
            <Eyebrow>{profile.eyebrow}</Eyebrow>
          </div>
          <h1
            className="animate-fade-up mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "60ms" }}
          >
            {profile.headline}
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-muted"
            style={{ animationDelay: "120ms" }}
          >
            {profile.subhead}
          </p>
          <div
            className="animate-fade-up mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: "180ms" }}
          >
            <ButtonLink href="/projects" variant="primary" size="md">
              View projects
              <ArrowRightIcon className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href={siteConfig.resumePath} download variant="secondary" size="md">
              <DownloadIcon className="h-4 w-4" />
              Download resume
            </ButtonLink>
            <ButtonLink href="/#contact" variant="ghost" size="md">
              <MailIcon className="h-4 w-4" />
              Contact
            </ButtonLink>
          </div>
          <p
            className="animate-fade-up mt-8 flex items-center gap-2.5 font-mono text-xs text-muted"
            style={{ animationDelay: "240ms" }}
          >
            <span className="inline-flex h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            Open to Application Security, Backend, and Software Engineering roles.
          </p>
        </div>
      </Container>
    </section>
  );
}
