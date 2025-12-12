"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => undefined,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "optima-ui-theme",
  ...props
}: ThemeProviderProps) {
  // ✅ SSR-safe lazy init: don't touch window/localStorage on the server
  const [theme, setThemeState] = useState<Theme>(() => defaultTheme);

  // On mount, read saved theme from localStorage (browser only)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    setThemeState(saved);
  }, [defaultTheme, storageKey]);

  // Apply theme class to <html>
  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = window.document.documentElement;
    const apply = (t: Theme) => {
      root.classList.remove("light", "dark");
      if (t === "system") {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        root.classList.add(prefersDark ? "dark" : "light");
      } else {
        root.classList.add(t);
      }
    };

    apply(theme);
  }, [theme]);

  // If user prefers "system", react to OS theme changes live
  useEffect(() => {
    if (typeof window === "undefined" || theme !== "system") return;

    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(mql.matches ? "dark" : "light");
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [theme]);

  const value = useMemo<ThemeProviderState>(
    () => ({
      theme,
      setTheme: (t: Theme) => {
        setThemeState(t);
        if (typeof window !== "undefined") {
          try {
            localStorage.setItem(storageKey, t);
          } catch {
            // ignore write errors (private mode, etc.)
          }
        }
      },
    }),
    [theme, storageKey]
  );

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
