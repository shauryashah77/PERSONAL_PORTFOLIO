"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar, Sparkles } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";

export default function Experience() {
  const [activeId, setActiveId] = useState<string>(EXPERIENCES[0].id);

  return (
    <section
      id="experience"
      className="relative w-full py-28 sm:py-36 px-6 sm:px-8 lg:px-12 border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto w-full space-y-20">
        {/* Top Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-[var(--border-subtle)]">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm sm:text-base font-mono uppercase tracking-widest text-[var(--text-muted)]">
              <Briefcase className="w-5 h-5 text-[var(--accent-primary)]" />
              <span className="font-bold text-[var(--text-primary)]">02 / 06</span>
              <span>—</span>
              <span className="text-[var(--text-primary)] font-semibold">PROFESSIONAL &amp; CAMPUS ROLES</span>
            </div>
            <h2 className="rainbow-title text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-[var(--text-primary)] uppercase">
              EXPERIENCE &amp; <span className="font-bold text-[var(--accent-secondary)]">LEADERSHIP</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
            <div className="flex items-center gap-2 text-sm font-mono uppercase text-[var(--text-primary)] font-semibold">
              <Sparkles className="w-4 h-4 text-[var(--accent-primary)] animate-pulse" />
              <span>HOVER TO JUMP BETWEEN ROLES</span>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[var(--text-faint)] uppercase tracking-wider">
              Hovered role expands significantly · Others contract smoothly
            </p>
          </div>
        </div>

        {/* Dynamic Jumping Scale Grid: Main gets bigger, others get smaller */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch py-4">
          {EXPERIENCES.map((exp) => {
            const isActive = activeId === exp.id;

            return (
              <motion.div
                key={exp.id}
                onMouseEnter={() => setActiveId(exp.id)}
                onClick={() => setActiveId(exp.id)}
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
                {/* Top Chapter Number & Clean Inline Badges */}
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
                      {exp.step}
                    </motion.span>
                    <div className="flex items-center gap-2">
                      {isActive && (
                        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider px-2 py-0.5 border border-[var(--border-active)] text-[var(--accent-primary)] font-bold bg-[var(--bg-surface-elevated)]">
                          ACTIVE
                        </span>
                      )}
                      <span
                        className={`text-xs font-mono uppercase tracking-wider px-2.5 py-1 border transition-colors ${
                          isActive
                            ? "border-[var(--border-strong)] text-[var(--text-primary)] bg-[var(--bg-surface-elevated)] font-bold"
                            : "border-[var(--border-subtle)] text-[var(--text-faint)] bg-transparent"
                        }`}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Company & Role */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5 text-sm font-mono text-[var(--text-muted)]">
                      <Building2 className="w-4 h-4 text-[var(--accent-secondary)]" />
                      <span className="font-bold text-[var(--text-primary)] uppercase text-base">
                        {exp.company}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-[var(--text-primary)] uppercase leading-snug">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] pt-1">
                      <Calendar className="w-4 h-4 text-[var(--text-faint)]" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-faint)] font-bold block">
                      Responsibilities &amp; Impact
                    </span>
                    <div className="space-y-3">
                      {exp.bullets.map((bullet, bIdx) => (
                        <div
                          key={bIdx}
                          className={`flex items-start gap-3 text-sm sm:text-base font-light leading-relaxed transition-colors ${
                            isActive
                              ? "text-[var(--text-secondary)] font-normal"
                              : "text-[var(--text-muted)]"
                          }`}
                        >
                          <span className="font-mono text-[var(--accent-primary)] mt-0.5 font-bold">/</span>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Skills Applied */}
                <div className="pt-5 border-t border-[var(--border-subtle)] space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-faint)] font-bold block">
                    Core Competencies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.skillsApplied.map((skill) => (
                      <span
                        key={skill}
                        className={`text-xs font-mono px-2.5 py-1 border transition-colors ${
                          isActive
                            ? "border-[var(--border-default)] text-[var(--text-primary)] bg-[var(--bg-surface-elevated)] font-semibold"
                            : "border-[var(--border-subtle)] text-[var(--text-faint)] bg-transparent"
                        }`}
                      >
                        {skill}
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
