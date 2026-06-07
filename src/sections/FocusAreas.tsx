import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { focusAreas } from "@/content/skills";

export function FocusAreas() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="What I do"
          title="Building secure, reliable systems"
          description="The work I care about, across application security, backend engineering, and software engineering."
        />
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2">
          {focusAreas.map((area) => (
            <div key={area.title} className="bg-surface p-6 sm:p-7">
              <h3 className="text-base font-semibold text-foreground">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
