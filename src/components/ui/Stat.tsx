import { cn } from "@/lib/utils";

export function Stat({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <span className="font-mono text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {value}
      </span>
      <span className="text-sm leading-snug text-muted">{label}</span>
    </div>
  );
}
