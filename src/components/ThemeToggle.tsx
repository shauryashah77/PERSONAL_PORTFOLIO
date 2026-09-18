"use client";

import React from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Palette } from "lucide-react";
import { useTheme, ThemeMode } from "@/context/ThemeContext";

const THEMES: { id: ThemeMode; label: string; icon: React.ReactNode }[] = [
  { id: "dark", label: "DARK", icon: <Moon className="w-3 h-3" /> },
  { id: "light", label: "LIGHT", icon: <Sun className="w-3 h-3" /> },
  { id: "color", label: "AURORA", icon: <Palette className="w-3 h-3" /> },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="inline-flex items-center p-0.5 border border-white/20 bg-white/[0.04] backdrop-blur-md shadow-sm">
      {THEMES.map((t) => {
        const isActive = theme === t.id;
        return (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            className="relative px-2 sm:px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider transition-colors flex items-center gap-1.5 focus:outline-none cursor-pointer"
            aria-label={`Switch to ${t.label} mode`}
          >
            {isActive && (
              <motion.div
                layoutId="activeThemePill"
                className={`absolute inset-0 shadow-sm ${
                  t.id === "color"
                    ? "bg-gradient-to-r from-emerald-400 to-cyan-400 font-bold"
                    : theme === "light"
                    ? "bg-[#d90429]"
                    : "bg-white"
                }`}
                transition={{ type: "spring", stiffness: 450, damping: 30 }}
              />
            )}
            <span
              className={`relative z-10 flex items-center gap-1 transition-colors duration-200 ${
                isActive
                  ? t.id === "color"
                    ? "text-[#021410] font-bold"
                    : theme === "light"
                    ? "text-white font-semibold theme-invert-text"
                    : "text-black font-semibold"
                  : theme === "light"
                  ? "text-[#1e3a8a] hover:text-[#d90429]"
                  : theme === "color"
                  ? "text-emerald-300 hover:text-cyan-200"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {t.icon}
              <span className="hidden sm:inline">{t.label}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
