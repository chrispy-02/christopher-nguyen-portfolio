import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { skillGroups } from "@/content/skills";

export function Skills() {
  return (
    <section id="skills" className="border-t py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Toolbox"
          title="Technical skills"
          description="Languages, frameworks, and tools I reach for."
        />
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-surface p-6 sm:p-7">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
