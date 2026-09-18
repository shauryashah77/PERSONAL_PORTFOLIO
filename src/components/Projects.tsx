"use client";

import React from "react";
import { ArrowUpRight, Cpu, Sparkles, Terminal, Database, Shield, Zap } from "lucide-react";
import { PROJECTS } from "@/data/portfolioData";

export default function Projects() {
  const project = PROJECTS[0]; // FinSight is the sole flagship system

  return (
    <section
      id="projects"
      className="relative w-full py-28 sm:py-36 px-6 sm:px-8 lg:px-12 border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto w-full space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-[var(--border-subtle)]">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm sm:text-base font-mono uppercase tracking-widest text-[var(--text-muted)]">
              <span className="font-bold text-[var(--accent-primary)]">04 / 06</span>
              <span>—</span>
              <span className="text-[var(--text-primary)] font-semibold">FLAGSHIP ENGINEERING SYSTEM</span>
            </div>
            <h2 className="rainbow-title text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-[var(--text-primary)] uppercase">
              FEATURED <span className="font-bold text-[var(--accent-secondary)]">PROJECT</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base font-mono text-[var(--text-muted)] max-w-md leading-relaxed uppercase">
            Full-stack AI financial telemetry engine. Built on Next.js, FastAPI, Python, and Google Gemini API.
          </p>
        </div>

        {/* Dedicated Flagship Showcase Stage for FinSight (Liquid Glass) */}
        <div className="liquid-glass liquid-sheen p-8 sm:p-12 lg:p-16 space-y-14 relative overflow-hidden shadow-2xl border-2 border-[var(--border-strong)]">
          {/* Top Banner Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[var(--border-subtle)] pb-8">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-4">
                <span className="font-mono text-lg sm:text-xl font-bold text-[var(--text-primary)] px-3.5 py-1.5 border border-[var(--border-default)] bg-[var(--bg-surface-elevated)]">
                  {project.number}
                </span>
                <h3 className="text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-[var(--text-primary)] uppercase">
                  {project.title}
                </h3>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[var(--border-active)] text-xs sm:text-sm font-mono tracking-widest uppercase font-bold text-[var(--accent-primary)] bg-[var(--bg-surface-elevated)] shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                  FLAGSHIP PLATFORM
                </span>
              </div>
              <p className="text-xl sm:text-2xl font-light text-[var(--text-secondary)]">
                {project.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={project.githubUrl || "https://github.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-widest font-bold shadow-lg cursor-pointer"
              >
                <span>INSPECT REPOSITORY</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Two-Column Deep Architectural Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Narrative, Problem Statement & Capabilities */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h4 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] uppercase tracking-widest flex items-center gap-2 font-bold">
                  <Database className="w-4 h-4 text-[var(--accent-secondary)]" />
                  System Overview
                </h4>
                <p className="text-lg sm:text-xl font-light text-[var(--text-primary)] leading-relaxed">
                  {project.description}
                </p>
                <p className="text-base sm:text-lg font-light text-[var(--text-muted)] leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Architectural Highlights */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] uppercase tracking-widest flex items-center gap-2 font-bold">
                  <Shield className="w-4 h-4 text-[var(--accent-secondary)]" />
                  Core Capabilities &amp; Pipeline
                </h4>
                <div className="space-y-3.5">
                  {project.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="liquid-pill flex items-start gap-3.5 p-4 text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed shadow-sm"
                    >
                      <span className="font-mono text-[var(--accent-primary)] font-bold mt-0.5">
                        0{idx + 1}
                      </span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="space-y-3.5 pt-2">
                <h4 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] uppercase tracking-widest flex items-center gap-2 font-bold">
                  <Zap className="w-4 h-4 text-[var(--accent-secondary)]" />
                  Technologies &amp; Protocols
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="liquid-pill text-xs sm:text-sm font-mono text-[var(--text-primary)] px-3.5 py-1.5 uppercase tracking-wider font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Live Simulated Telemetry & Metrics Terminal */}
            <div className="terminal-stage lg:col-span-5 flex flex-col justify-between p-7 sm:p-9 space-y-7 font-mono">
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4 text-xs sm:text-sm text-[var(--text-faint)]">
                <div className="flex items-center gap-2.5 text-[var(--text-primary)] font-bold">
                  <Terminal className="w-4 h-4 text-[var(--accent-secondary)]" />
                  <span>finsight-runtime.py</span>
                </div>
                <span className="text-xs text-[var(--accent-primary)] font-bold px-2 py-0.5 border border-[var(--border-active)] bg-[var(--bg-surface-elevated)]">
                  STATUS: 200 OK
                </span>
              </div>

              {/* Metric Highlights */}
              <div className="grid grid-cols-2 gap-3.5">
                {project.metrics?.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-4 border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] space-y-1.5 shadow-sm"
                  >
                    <div className="text-xs text-[var(--text-faint)] uppercase tracking-widest font-semibold">
                      {m.label}
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Simulated Gemini AI Reasoning Output */}
              <div className="p-5 border border-[var(--border-default)] bg-[var(--bg-surface)] space-y-3 text-xs sm:text-sm shadow-inner">
                <div className="flex items-center justify-between text-xs text-[var(--text-muted)] border-b border-[var(--border-subtle)] pb-2.5">
                  <span className="flex items-center gap-2 text-[var(--text-primary)] font-bold">
                    <Cpu className="w-4 h-4 text-[var(--accent-secondary)]" />
                    GEMINI REASONING PIPELINE
                  </span>
                  <span className="text-xs text-[var(--accent-primary)] font-semibold font-mono px-2 py-0.5 border border-[var(--border-active)]">
                    STREAMING
                  </span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm font-mono leading-relaxed">
                  <div className="text-[var(--text-faint)]">
                    &gt; Parsing statement_q3.csv (1,482 records normalized)
                  </div>
                  <div className="text-[var(--text-faint)]">
                    &gt; Anomaly score: discretionary spend delta +24.6%
                  </div>
                  <div className="text-[var(--text-secondary)] border-l-2 border-[var(--border-active)] pl-3 mt-2.5 font-normal">
                    &gt; Gemini Recommendation: &ldquo;High-frequency micro-leakages detected in food &amp; dining. Redirecting 14% towards monthly SIP reserve target.&rdquo;
                  </div>
                </div>
              </div>

              {/* Telemetry Footer */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs sm:text-sm text-[var(--text-faint)] uppercase tracking-widest font-semibold">
                <span>FastAPI + Gemini 1.5</span>
                <span className="text-[var(--accent-primary)] font-bold">JWT: ENABLED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
