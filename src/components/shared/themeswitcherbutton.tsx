"use client";

import { useState, useEffect } from "react";
import "@theme-toggles/react/css/DarkSide.css";
import { DarkSide } from "@theme-toggles/react";
import { useTheme } from "next-themes";

export function ThemeSwitcherButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <DarkSide
      toggled={isDark}
      toggle={() => setTheme(isDark ? "light" : "dark")}
      duration={750}
      className="text-[26px] text-zinc-700 dark:text-zinc-300"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      id="themeswitcherbutton"
    />
  );
}
