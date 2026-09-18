"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeMode = "dark" | "light" | "color";

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("shaurya-portfolio-theme") as ThemeMode | null;
    if (savedTheme && (savedTheme === "dark" || savedTheme === "light" || savedTheme === "color")) {
      setThemeState(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme("dark");
    }
  }, []);

  const applyTheme = (mode: ThemeMode) => {
    const root = document.documentElement;
    root.classList.remove("theme-dark", "theme-light", "theme-color", "dark", "light");
    root.setAttribute("data-theme", mode);
    if (mode === "dark") {
      root.classList.add("dark", "theme-dark");
    } else if (mode === "light") {
      root.classList.add("light", "theme-light");
    } else if (mode === "color") {
      root.classList.add("dark", "theme-color");
    }

    if (typeof document !== "undefined" && document.body) {
      document.body.classList.remove("theme-dark", "theme-light", "theme-color", "dark", "light");
      document.body.setAttribute("data-theme", mode);
      if (mode === "dark") {
        document.body.classList.add("dark", "theme-dark");
      } else if (mode === "light") {
        document.body.classList.add("light", "theme-light");
      } else if (mode === "color") {
        document.body.classList.add("dark", "theme-color");
      }
    }
  };

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem("shaurya-portfolio-theme", newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
