"use client";

import { useState, useEffect } from "react";
import { MoonIcon } from "./icons";
import { useTheme } from "next-themes";

export function ThemeSwitcherButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const otherTheme = resolvedTheme === "dark" ? "light" : "dark";
  const [mounted, setMounted] = useState(false);

  // wait for client hydration so resolvedTheme is correct
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      id="themeswitcherbutton"
      type="button"
      aria-label={`Switch to ${otherTheme} theme`}
      onClick={() => setTheme(otherTheme)}
      className="
        group 
        rounded-full p-2
        bg-white/90 dark:bg-zinc-800/90
        shadow-lg ring-1 ring-zinc-900/5 dark:ring-white/10
        backdrop-blur transition
      "
    >
      <MoonIcon
        className="
        h-6 w-6 fill-current text-zinc-700 dark:text-zinc-300 transition group-hover:text-slate-700 dark:group-hover:text-slate-700
        "
      />
    </button>
  );
}
