import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  index,
  className,
}: {
  project: Project;
  index?: number;
  className?: string;
}) {
  const maxTags = 4;
  const shownTags = project.tags.slice(0, maxTags);
  const extraTags = project.tags.length - shownTags.length;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group flex flex-col rounded-2xl border bg-surface p-6 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] sm:p-7",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3 font-mono text-xs uppercase tracking-wider text-muted">
        {typeof index === "number" ? (
          <span className="text-accent-text">
            {String(index).padStart(2, "0")}
          </span>
        ) : (
          <span />
        )}
        <span>{project.status ?? project.timeframe}</span>
      </div>

      <h3 className="mt-5 flex items-start justify-between gap-3 text-xl font-semibold tracking-tight text-foreground">
        <span>{project.title}</span>
        <ArrowUpRightIcon className="h-5 w-5 shrink-0 text-muted transition-[color,transform] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-text" />
      </h3>

      <p className="mt-1 font-mono text-xs text-muted">
        {project.org ? `${project.org} · ${project.category}` : project.category}
      </p>

      <p className="mt-4 flex-1 leading-relaxed text-muted">{project.tagline}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {shownTags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
        {extraTags > 0 ? <Tag>+{extraTags}</Tag> : null}
      </div>
    </Link>
  );
}
