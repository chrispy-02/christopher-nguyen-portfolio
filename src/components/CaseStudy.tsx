import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { Stat } from "@/components/ui/Stat";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  GitHubIcon,
  LockIcon,
  MailIcon,
} from "@/components/ui/Icons";
import { PipelineDiagram } from "@/assets/PipelineDiagram";
import { siteConfig } from "@/content/site";
import type { Project, ProjectImage, ProjectLink } from "@/content/projects";

export function CaseStudy({ project }: { project: Project }) {
  return (
    <article className="py-10 sm:py-14">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowRightIcon className="h-4 w-4 rotate-180" />
        All projects
      </Link>

      {/* Header */}
      <header className="mt-8">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-text">
          {project.category}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {project.title}
          </h1>
          {project.status ? (
            <span className="inline-flex items-center rounded-full bg-accent-weak px-3 py-1 font-mono text-xs text-accent-text">
              {project.status}
            </span>
          ) : null}
        </div>
        {project.org ? (
          <p className="mt-2 text-sm text-muted">{project.org}</p>
        ) : null}
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/80">
          {project.tagline}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <ProjectLinkButton key={link.label} link={link} />
          ))}
        </div>
      </header>

      {/* Meta strip */}
      <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-3">
        <MetaCell term="Team" desc={project.team} />
        <MetaCell term="Timeline" desc={project.timeframe} />
        <MetaCell term="Status" desc={project.status ?? "Completed"} />
      </dl>

      {/* Body */}
      <div className="mt-12">
        <Block title="Overview">
          <Paragraphs items={project.overview} />
        </Block>

        <Block title="The problem">
          <Paragraphs items={project.problem} />
        </Block>

        <Block title="My role">
          <Bullets items={project.contributions} />
        </Block>

        <Block title="Architecture">
          <Bullets items={project.architecture} />
          {project.slug === "mckesson-vulnerability-scanner" ? (
            <div className="mt-6">
              <PipelineDiagram />
            </div>
          ) : null}
        </Block>

        {project.gallery && project.gallery.length > 0 ? (
          <Block title="Screenshots">
            <Gallery items={project.gallery} />
          </Block>
        ) : null}

        <Block title={project.relevance.title}>
          <Bullets items={project.relevance.points} />
        </Block>

        <Block title="Impact">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {project.impact.map((metric) => (
              <Stat key={metric.label} value={metric.value} label={metric.label} />
            ))}
          </div>
          {project.impactNote ? (
            <p className="mt-6 text-sm leading-relaxed text-muted">
              {project.impactNote}
            </p>
          ) : null}
        </Block>

        <Block title="Tech stack">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Tag key={tech} accent>
                {tech}
              </Tag>
            ))}
          </div>
        </Block>

        <Block title="What I learned">
          <Bullets items={project.learnings} />
        </Block>
      </div>

      {/* Closing CTA */}
      <div className="mt-12 flex flex-col gap-5 rounded-2xl border bg-surface-2 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Want to talk through the details?
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            I&apos;m happy to walk through the architecture and the decisions behind it.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={`mailto:${siteConfig.email}`} variant="primary" size="md">
            <MailIcon className="h-4 w-4" />
            Get in touch
          </ButtonLink>
          <ButtonLink href="/projects" variant="secondary" size="md">
            All projects
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-x-10 gap-y-4 border-t py-8 md:grid-cols-[200px_1fr]">
      <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted md:pt-1">
        {title}
      </h2>
      <div className="max-w-2xl">{children}</div>
    </section>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((text, i) => (
        <p key={i} className="leading-relaxed text-foreground/80">
          {text}
        </p>
      ))}
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((text, i) => (
        <li key={i} className="flex gap-3 leading-relaxed text-foreground/80">
          <span
            className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
            aria-hidden="true"
          />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}

function Gallery({ items }: { items: ProjectImage[] }) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((img) => (
        <figure
          key={img.src}
          className="overflow-hidden rounded-2xl border bg-surface-2"
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width ?? 2904}
            height={img.height ?? 1824}
            sizes="(min-width: 768px) 42rem, 100vw"
            className="h-auto w-full"
          />
          {img.caption ? (
            <figcaption className="border-t px-4 py-3 text-sm text-muted">
              {img.caption}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}

function MetaCell({ term, desc }: { term: string; desc: string }) {
  return (
    <div className="bg-surface px-5 py-4">
      <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
        {term}
      </dt>
      <dd className="mt-1 text-sm font-medium text-foreground">{desc}</dd>
    </div>
  );
}

function ProjectLinkButton({ link }: { link: ProjectLink }) {
  if (link.href) {
    return (
      <ButtonLink href={link.href} variant="secondary" size="sm" external>
        {link.kind === "repo" ? (
          <GitHubIcon className="h-4 w-4" />
        ) : (
          <ArrowUpRightIcon className="h-4 w-4" />
        )}
        {link.label}
      </ButtonLink>
    );
  }

  return (
    <span className="inline-flex min-h-9 items-center gap-2 rounded-xl border bg-surface-2 px-3.5 py-1.5 text-sm text-muted">
      {link.kind === "private" ? <LockIcon className="h-4 w-4 shrink-0" /> : null}
      <span>
        {link.label}
        {link.note ? (
          <span className="text-muted/80"> — {link.note}</span>
        ) : null}
      </span>
    </span>
  );
}
