"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "theme";
const THEMES = ["light", "dark"] as const;

type ThemeName = (typeof THEMES)[number] | "system";
type ResolvedTheme = (typeof THEMES)[number];

type ThemeContextValue = {
  theme: ThemeName | undefined;
  setTheme: (theme: ThemeName) => void;
  resolvedTheme: ResolvedTheme | undefined;
  themes: ThemeName[];
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function resolveTheme(
  theme: ThemeName,
  enableSystem: boolean,
  fallback: ResolvedTheme
): ResolvedTheme {
  if (theme === "system") {
    return enableSystem ? getSystemTheme() : fallback;
  }

  return theme;
}

function applyTheme(resolved: ResolvedTheme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(resolved);
  root.style.colorScheme = resolved;
}

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: ResolvedTheme;
  enableSystem?: boolean;
};

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  enableSystem = true,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeName | undefined>(undefined);
  const [resolvedTheme, setResolvedTheme] = useState<
    ResolvedTheme | undefined
  >(undefined);

  useEffect(() => {
    const stored = (localStorage.getItem(STORAGE_KEY) as ThemeName | null) ?? defaultTheme;
    const resolved = resolveTheme(stored, enableSystem, defaultTheme);

    setThemeState(stored);
    setResolvedTheme(resolved);
    applyTheme(resolved);
  }, [defaultTheme, enableSystem]);

  useEffect(() => {
    if (!enableSystem || theme !== "system") {
      return;
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const resolved = getSystemTheme();
      setResolvedTheme(resolved);
      applyTheme(resolved);
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [enableSystem, theme]);

  const setTheme = useCallback(
    (nextTheme: ThemeName) => {
      const resolved = resolveTheme(nextTheme, enableSystem, defaultTheme);

      setThemeState(nextTheme);
      setResolvedTheme(resolved);
      localStorage.setItem(STORAGE_KEY, nextTheme);
      applyTheme(resolved);
    },
    [defaultTheme, enableSystem]
  );

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      resolvedTheme,
      themes: enableSystem ? [...THEMES, "system" as const] : [...THEMES],
    }),
    [enableSystem, resolvedTheme, setTheme, theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
