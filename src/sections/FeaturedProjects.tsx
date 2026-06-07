import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { projects } from "@/content/projects";
import { cn } from "@/lib/utils";

export function FeaturedProjects() {
  return (
    <section className="border-t py-16 sm:py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Selected work"
            title="Featured projects"
            description="A few projects that show how I think about security, backends, and reliable software."
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-text transition-opacity hover:opacity-80"
          >
            All projects
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i + 1}
              className={cn(i === 0 && "lg:col-span-2")}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
