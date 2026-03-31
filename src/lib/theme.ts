"use client";

import { useEffect, useSyncExternalStore, useCallback } from "react";

export type Theme = "dark" | "light";

function getThemeSnapshot(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem("addie-theme") as Theme | null;
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getServerSnapshot(): Theme {
  return "dark";
}

function subscribe(callback: () => void) {
  // Listen for storage changes (cross-tab)
  window.addEventListener("storage", callback);
  // Listen for system theme changes
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    mq.removeEventListener("change", callback);
  };
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, getServerSnapshot);

  // Sync the class to the DOM
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    localStorage.setItem("addie-theme", next);
    // Trigger re-render via storage event won't fire same-tab, so dispatch manually
    window.dispatchEvent(new Event("storage"));
  }, [theme]);

  return { theme, toggleTheme };
}
