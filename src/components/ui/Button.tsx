import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-[color,background-color,border-color,opacity,transform] duration-200 focus-visible:outline-none active:translate-y-px";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-foreground hover:opacity-90",
  secondary:
    "border bg-surface text-foreground hover:bg-surface-2 hover:border-foreground/25",
  ghost: "text-foreground hover:bg-surface-2",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm sm:text-[0.95rem]",
};

export interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  download?: boolean;
  external?: boolean;
  "aria-label"?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  download,
  external,
  "aria-label": ariaLabel,
}: ButtonLinkProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const isMailto = href.startsWith("mailto:");
  const isHttp = /^https?:\/\//.test(href);
  const useAnchor = Boolean(download) || isMailto || isHttp || Boolean(external);

  if (useAnchor) {
    const openInNewTab = (isHttp || Boolean(external)) && !download && !isMailto;
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        download={download || undefined}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
