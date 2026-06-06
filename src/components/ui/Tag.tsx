import { cn } from "@/lib/utils";

export function Tag({
  children,
  accent = false,
  className,
}: {
  children: React.ReactNode;
  accent?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-xs",
        accent
          ? "border-transparent bg-accent-weak text-accent-text"
          : "bg-surface text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
