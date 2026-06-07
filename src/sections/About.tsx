import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";
import { siteConfig } from "@/content/site";

const facts: { term: string; desc: string }[] = [
  { term: "Focus", desc: "Application Security · Backend · Software Engineering" },
  { term: "Education", desc: "B.S. Computer Science, Michigan State University" },
  { term: "Availability", desc: siteConfig.location },
];

export function About() {
  return (
    <section id="about" className="border-t py-16 sm:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <SectionHeading eyebrow="About" title="A bit about me" />
            <div className="mt-6 flex max-w-2xl flex-col gap-4">
              {profile.about.map((paragraph, i) => (
                <p key={i} className="leading-relaxed text-foreground/80">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-2xl border bg-surface p-6 sm:p-7">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              At a glance
            </h3>
            <dl className="mt-5 flex flex-col gap-5">
              {facts.map((fact) => (
                <div key={fact.term}>
                  <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                    {fact.term}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-foreground">
                    {fact.desc}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Container>
    </section>
  );
}
