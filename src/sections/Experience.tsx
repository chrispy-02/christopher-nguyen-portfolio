import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education, experience } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" className="border-t py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked & studied"
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_340px]">
          <ol className="flex flex-col">
            {experience.map((item) => (
              <li
                key={item.role}
                className="border-t py-6 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base font-semibold text-foreground">
                    {item.role}
                    <span className="font-normal text-muted"> · {item.org}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    {item.period}
                  </span>
                </div>
                {item.meta || item.location ? (
                  <p className="mt-1 font-mono text-xs text-muted">
                    {[item.meta, item.location].filter(Boolean).join(" · ")}
                  </p>
                ) : null}
                <ul className="mt-3 flex flex-col gap-2">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span
                        className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <aside className="h-fit rounded-2xl border bg-surface p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Education
            </h3>
            <p className="mt-4 text-base font-semibold text-foreground">
              {education.school}
            </p>
            <p className="mt-1 text-sm text-muted">{education.degree}</p>
            <p className="mt-3 font-mono text-xs text-muted">{education.period}</p>
            <p className="mt-4 border-t pt-4 text-sm leading-relaxed text-muted">
              {education.honors}
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}
