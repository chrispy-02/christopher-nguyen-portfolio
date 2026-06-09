import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies in application security, backend engineering, and software engineering — including a McKesson-sponsored vulnerability-scanning platform, a clinical workflow system, and a tested C++ simulator.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <Container className="py-12 sm:py-16">
      <SectionHeading
        as="h1"
        eyebrow="Work"
        title="Projects"
        description="A focused set of projects spanning application security, backend systems, and tested software. Each links to a full case study."
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={i + 1}
            className={cn(i === 0 && "sm:col-span-2")}
          />
        ))}
      </div>
    </Container>
  );
}
