import { ArrowRightIcon } from "@/components/ui/Icons";

const steps = [
  { label: "Flask app", sub: "validate target" },
  { label: "GitHub Actions", sub: "scan dispatch" },
  { label: "OWASP ZAP", sub: "automated DAST" },
  { label: "Parse → MySQL", sub: "12-table schema" },
  { label: "Dashboards", sub: "history & reporting" },
];

/** Architecture visual for the McKesson case study — the scan automation flow. */
export function PipelineDiagram() {
  return (
    <figure className="rounded-2xl border bg-surface-2 p-5 sm:p-6">
      <figcaption className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted">
        Scan automation pipeline
      </figcaption>
      <div className="flex flex-col items-stretch md:flex-row md:items-center">
        {steps.map((step, i) => (
          <div
            key={step.label}
            className="flex flex-col items-stretch md:flex-1 md:flex-row md:items-center"
          >
            <div className="flex-1 rounded-xl border bg-surface px-4 py-3">
              <div className="text-sm font-semibold text-foreground">
                {step.label}
              </div>
              <div className="font-mono text-xs text-muted">{step.sub}</div>
            </div>
            {i < steps.length - 1 ? (
              <ArrowRightIcon className="mx-auto my-1.5 h-4 w-4 shrink-0 rotate-90 text-muted md:mx-1.5 md:my-0 md:rotate-0" />
            ) : null}
          </div>
        ))}
      </div>
    </figure>
  );
}
