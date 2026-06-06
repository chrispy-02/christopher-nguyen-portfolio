"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", callback);
  return () => {
    listeners.delete(callback);
    media.removeEventListener("change", callback);
  };
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

// Theme is unknown on the server; match the no-flash script's default.
function getServerSnapshot() {
  return false;
}

function setTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  try {
    localStorage.setItem("theme", dark ? "dark" : "light");
  } catch {
    /* localStorage may be unavailable; theme still applies for the session */
  }
  listeners.forEach((listener) => listener());
}

export function ThemeToggle({ className }: { className?: string }) {
  const isDark = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={() => setTheme(!isDark)}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-lg border text-muted transition-colors hover:bg-surface-2 hover:text-foreground",
        className,
      )}
    >
      {isDark ? (
        <SunIcon className="h-[1.05rem] w-[1.05rem]" />
      ) : (
        <MoonIcon className="h-[1.05rem] w-[1.05rem]" />
      )}
    </button>
  );
}
