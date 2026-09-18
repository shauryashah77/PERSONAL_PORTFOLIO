"use client";

import React, { useState } from "react";
import { Code2, Cpu, Users, Terminal, Layers } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getCategoryIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Terminal className="w-5 h-5 text-[var(--accent-secondary)]" />;
      case 1:
        return <Layers className="w-5 h-5 text-[var(--accent-secondary)]" />;
      case 2:
        return <Cpu className="w-5 h-5 text-[var(--accent-secondary)]" />;
      default:
        return <Users className="w-5 h-5 text-[var(--accent-secondary)]" />;
    }
  };

  return (
    <section
      id="skills"
      className="relative w-full py-28 sm:py-36 px-6 sm:px-8 lg:px-12 border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto w-full space-y-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-[var(--border-subtle)]">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm sm:text-base font-mono uppercase tracking-widest text-[var(--text-muted)]">
              <Code2 className="w-5 h-5 text-[var(--accent-primary)]" />
              <span className="font-bold text-[var(--text-primary)]">05 / 06</span>
              <span>—</span>
              <span className="text-[var(--text-primary)] font-semibold">COMPETENCY MATRIX</span>
            </div>
            <h2 className="rainbow-title text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-[var(--text-primary)] uppercase">
              SKILLS &amp; <span className="font-bold text-[var(--accent-secondary)]">STACK</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base font-mono text-[var(--text-muted)] max-w-md leading-relaxed uppercase">
            Clean, typography-driven execution. Categorized across low-level programming, full-stack web, data intelligence, and leadership.
          </p>
        </div>

        {/* Clean Typography Rows with Enlarged Font Sizes */}
        <div className="space-y-16">
          {SKILL_CATEGORIES.map((cat, cIdx) => (
            <div
              key={cat.category}
              className="space-y-8 pb-12 border-b border-[var(--border-subtle)] last:border-b-0"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-[var(--border-subtle)] pb-4">
                <div className="flex items-center gap-3.5">
                  <span className="font-mono text-sm sm:text-base font-bold text-[var(--text-primary)] px-2.5 py-0.5 border border-[var(--border-default)] bg-[var(--bg-surface-elevated)]">
                    0{cIdx + 1}
                  </span>
                  {getCategoryIcon(cIdx)}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal tracking-tight text-[var(--text-primary)] uppercase">
                    {cat.category}
                  </h3>
                </div>
                <span className="text-xs sm:text-sm font-mono text-[var(--text-muted)] font-medium">
                  {cat.description}
                </span>
              </div>

              {/* Liquid Glass Pills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 pt-2">
                {cat.items.map((skill) => {
                  const isHovered = hoveredSkill === skill;
                  return (
                    <div
                      key={skill}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`group p-4 border-2 transition-all duration-300 cursor-pointer ${
                        isHovered
                          ? "liquid-glass-active liquid-sheen scale-[1.04] shadow-xl z-10"
                          : "liquid-glass hover:border-[var(--border-strong)]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm sm:text-base font-mono uppercase tracking-wider font-semibold text-[var(--text-primary)]">
                          {skill}
                        </span>
                        <span className="text-xs font-mono text-[var(--text-faint)] group-hover:text-[var(--accent-primary)] group-hover:rotate-45 transition-transform duration-200">
                          +
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
