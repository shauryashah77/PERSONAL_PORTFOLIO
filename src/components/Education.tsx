"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Sparkles, Award } from "lucide-react";
import { EDUCATION } from "@/data/portfolioData";

export default function Education() {
  const [activeId, setActiveId] = useState<string>(EDUCATION[0].id);

  return (
    <section
      id="education"
      className="relative w-full py-28 sm:py-36 px-6 sm:px-8 lg:px-12 border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto w-full space-y-20">
        {/* Top Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-[var(--border-subtle)]">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm sm:text-base font-mono uppercase tracking-widest text-[var(--text-muted)]">
              <GraduationCap className="w-5 h-5 text-[var(--accent-primary)]" />
              <span className="font-bold text-[var(--text-primary)]">03 / 06</span>
              <span>—</span>
              <span className="text-[var(--text-primary)] font-semibold">ACADEMIC TIMELINE</span>
            </div>
            <h2 className="rainbow-title text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-[var(--text-primary)] uppercase">
              EDUCATION &amp; <span className="font-bold text-[var(--accent-secondary)]">ACADEMICS</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
            <div className="flex items-center gap-2 text-sm font-mono uppercase text-[var(--text-primary)] font-semibold">
              <Sparkles className="w-4 h-4 text-[var(--accent-primary)] animate-pulse" />
              <span>HOVER TO JUMP BETWEEN MILESTONES</span>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[var(--text-faint)] uppercase tracking-wider">
              Hovered institution expands significantly · Others contract smoothly
            </p>
          </div>
        </div>

        {/* Dynamic Jumping Scale Grid: Main gets bigger, others get smaller */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch py-4">
          {EDUCATION.map((edu) => {
            const isActive = activeId === edu.id;
            const isDJSCE = edu.id === "djsce";

            return (
              <motion.div
                key={edu.id}
                onMouseEnter={() => setActiveId(edu.id)}
                onClick={() => setActiveId(edu.id)}
                initial={false}
                animate={{
                  scale: isActive ? 1.04 : 0.95,
                  y: isActive ? -10 : 6,
                  opacity: isActive ? 1 : 0.55,
                  zIndex: isActive ? 30 : 10,
                }}
                transition={{
                  type: "spring",
                  stiffness: 360,
                  damping: 26,
                  mass: 0.8,
                }}
                className={`relative cursor-pointer p-7 sm:p-9 border-2 flex flex-col justify-between space-y-8 rounded-none transition-all duration-300 ${
                  isActive
                    ? "liquid-glass-active liquid-sheen shadow-2xl"
                    : "liquid-glass hover:opacity-85"
                }`}
              >
                {/* Top Number, Standing & Timeline */}
                <div className="space-y-6">
                  <div className="flex items-baseline justify-between border-b border-[var(--border-subtle)] pb-4">
                    <motion.span
                      animate={{
                        scale: isActive ? 1.08 : 1,
                      }}
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      className={`text-6xl sm:text-7xl font-bold font-mono tracking-tighter transition-colors duration-200 ${
                        isActive
                          ? "text-[var(--text-primary)]"
                          : "text-[var(--text-faint)]"
                      }`}
                    >
                      {edu.step}
                    </motion.span>

                    <div className="text-right space-y-1">
                      <div className="flex items-center justify-end gap-2">
                        {isActive && (
                          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider px-2 py-0.5 border border-[var(--border-active)] text-[var(--accent-primary)] font-bold bg-[var(--bg-surface-elevated)]">
                            ACTIVE
                          </span>
                        )}
                        <div className="text-2xl sm:text-3xl font-bold font-mono text-[var(--text-primary)] flex items-baseline gap-1.5">
                          <span>{edu.gradeValue}</span>
                          <span className="text-xs font-normal text-[var(--accent-secondary)] font-sans uppercase font-bold">
                            {edu.gradeLabel}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-faint)] block font-medium">
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  {/* Institution Title & Details (College Name prominently visible) */}
                  <div className="space-y-3">
                    {isDJSCE && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-[var(--accent-secondary)] bg-[var(--bg-surface-elevated)] text-[10px] font-mono uppercase text-[var(--accent-secondary)] font-bold tracking-wider">
                        <Award className="w-3 h-3 text-[var(--accent-primary)]" />
                        <span>CURRENT COLLEGE · DJSCE</span>
                      </div>
                    )}
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] uppercase leading-snug">
                      {edu.institution}
                    </h3>
                    <div className="text-xs sm:text-sm font-mono text-[var(--text-secondary)] uppercase">
                      <span className="text-[var(--accent-secondary)] font-bold">{edu.degree}</span>
                      <span className="text-[var(--text-faint)] mx-2">•</span>
                      <span className="text-[var(--text-muted)] font-medium">{edu.specialization}</span>
                    </div>
                    {edu.honors && (
                      <div className="pt-2 flex items-center gap-2">
                        <span className="text-xs font-mono uppercase text-[var(--text-faint)] font-bold">
                          Honors:
                        </span>
                        <span className="px-2.5 py-0.5 border border-[var(--border-strong)] text-xs font-mono text-[var(--accent-primary)] bg-[var(--bg-surface-elevated)] font-bold">
                          {edu.honors}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Narrative Description */}
                  <p
                    className={`text-sm sm:text-base font-light leading-relaxed transition-colors ${
                      isActive
                        ? "text-[var(--text-secondary)] font-normal"
                        : "text-[var(--text-muted)]"
                    }`}
                  >
                    {edu.description}
                  </p>
                </div>

                {/* Bottom Institution Highlights / Focus */}
                <div className="pt-5 border-t border-[var(--border-subtle)] space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-faint)] font-bold block">
                    Core Focus Areas
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {edu.keyModules.slice(0, 4).map((mod) => (
                      <span
                        key={mod}
                        className={`text-xs font-mono px-2.5 py-1 border transition-colors ${
                          isActive
                            ? "border-[var(--border-default)] text-[var(--text-primary)] bg-[var(--bg-surface-elevated)] font-semibold"
                            : "border-[var(--border-subtle)] text-[var(--text-faint)] bg-transparent"
                        }`}
                      >
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
