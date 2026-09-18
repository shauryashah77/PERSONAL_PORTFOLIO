"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, FileText, Globe, Sparkles, ArrowUpRight, GraduationCap, Building2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [isColorMode, setIsColorMode] = useState<boolean>(false);

  // Live Mumbai IST Clock
  useEffect(() => {
    const updateClock = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const timeStr = new Intl.DateTimeFormat("en-US", options).format(new Date());
      setCurrentTime(timeStr);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const { scrollY } = useScroll();
  const textParallax = useTransform(scrollY, [0, 500], [0, 45]);
  const opacityFade = useTransform(scrollY, [0, 450], [1, 0.25]);

  const handleScrollToNext = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById("experience");
    if (elem) {
      const lenis = (window as unknown as { __lenis?: { scrollTo: (target: HTMLElement | string) => void } }).__lenis;
      if (lenis) {
        lenis.scrollTo(elem);
      } else {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 sm:pt-32 pb-16 px-6 sm:px-8 lg:px-12 border-b border-[var(--border-subtle)] overflow-hidden"
    >
      {/* Subtle background ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[85vw] max-w-[1100px] h-[550px] rounded-full bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent blur-3xl"
        aria-hidden="true"
      />

      {/* Top Editorial Intro & Prominent College Credentials */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto w-full flex flex-col items-center text-center space-y-6 pt-2"
      >
        <div className="liquid-pill inline-flex items-center gap-2.5 px-3.5 py-1.5 text-xs font-mono tracking-widest uppercase shadow-sm">
          <Globe className="w-4 h-4 animate-spin-slow text-[var(--accent-primary)]" />
          <span>{PERSONAL_INFO.coordinates} — MUMBAI, IN</span>
          <span className="text-[var(--text-faint)]">|</span>
          <span className="font-bold text-[var(--accent-primary)] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--live-dot-color)] animate-pulse" />
            {currentTime ? `${currentTime} IST` : "LIVE IST"}
          </span>
        </div>

        {/* PROMINENT COLLEGE NAME & ACADEMIC CREDENTIALS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 text-center max-w-4xl pt-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[var(--border-strong)] bg-[var(--bg-surface-elevated)] text-xs sm:text-sm font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold shadow-md">
            <GraduationCap className="w-4 h-4 text-[var(--accent-primary)]" />
            <span>Dwarkadas J. Sanghvi College of Engineering (DJSCE)</span>
          </div>
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-2 border border-[var(--border-default)] bg-[var(--bg-surface)] text-xs sm:text-sm font-mono uppercase tracking-wider text-[var(--text-muted)]">
            <span className="font-bold text-[var(--text-primary)]">B.Tech AI &amp; ML</span>
            <span className="text-[var(--text-faint)]">•</span>
            <span className="text-[var(--accent-secondary)] font-bold">Honors: FinTech</span>
            <span className="text-[var(--text-faint)]">•</span>
            <span className="text-[var(--accent-primary)] font-bold">CGPA: 8.3</span>
          </div>
        </div>

        {/* User Request: Make the AIML student at intersection of things BIGGER & EYE-CATCHING */}
        <div className="max-w-5xl pt-2">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[var(--text-primary)] tracking-tight leading-[1.2] text-balance">
            AI &amp; Machine Learning student building at the intersection of{" "}
            <span className="font-semibold text-[var(--text-primary)] underline decoration-[var(--accent-secondary)] underline-offset-8">
              technology
            </span>
            ,{" "}
            <span className="font-semibold text-[var(--text-primary)] underline decoration-[var(--accent-primary)] underline-offset-8">
              finance
            </span>{" "}
            and{" "}
            <span className="font-semibold text-[var(--text-primary)] underline decoration-[var(--accent-secondary)] underline-offset-8">
              intelligent systems
            </span>
            .
          </h2>
        </div>
      </motion.div>

      {/* Massive Typographic Centerpiece — Clean & Unobstructed */}
      <motion.div
        style={{ y: textParallax, opacity: opacityFade }}
        className="my-auto py-12 sm:py-16 select-none w-full flex flex-col items-center justify-center"
      >
        <div className="w-full flex flex-col items-center justify-center leading-none">
          {/* Line 1: SHAURYA */}
          <div className="w-full flex items-center justify-between overflow-hidden">
            <span className="rainbow-title text-[14vw] sm:text-[15vw] lg:text-[14.5vw] font-bold tracking-tighter uppercase text-[var(--text-primary)] transition-colors duration-300 leading-[0.85] font-sans">
              SHAURYA
            </span>
          </div>

          {/* Line 2: SHAH with geometric bracket accents */}
          <div className="w-full flex items-center justify-between overflow-hidden">
            <span className="rainbow-title text-[14vw] sm:text-[15vw] lg:text-[14.5vw] font-bold tracking-tighter uppercase text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-300 leading-[0.85] font-sans flex items-center">
              <span>S</span>
              <span className="text-[var(--bracket-color)] mx-[0.04em] font-light">[</span>
              <span className="text-[var(--text-primary)]">HA</span>
              <span className="text-[var(--bracket-color)] mx-[0.04em] font-light">]</span>
              <span>H</span>
            </span>
          </div>
        </div>
      </motion.div>

      {/* Lower Editorial Grid — Portrait Pedestal + Bio & High-Impact Eye-Catching Resume Stage */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto w-full pt-10 border-t border-[var(--border-subtle)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Column 1: Dedicated Editorial Portrait Pedestal (Liquid Glass) */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-center sm:items-end gap-6 p-6 sm:p-7 liquid-glass liquid-sheen shadow-2xl relative group">
            {/* Cutout Portrait Container */}
            <div
              onClick={() => setIsColorMode(!isColorMode)}
              title="Click to toggle between Editorial Monochrome and Natural Tone"
              className="relative w-44 sm:w-52 h-[240px] sm:h-[280px] flex-shrink-0 cursor-pointer overflow-hidden"
              style={{
                maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
              }}
            >
              <Image
                src={isColorMode ? "/shaurya.png" : "/shaurya-bw.png"}
                alt="Shaurya Shah"
                fill
                priority
                sizes="(max-width: 768px) 200px, 240px"
                className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Portrait Metadata & Switch */}
            <div className="flex flex-col justify-between h-full space-y-4 w-full">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[var(--text-faint)]">
                  <span className="font-bold text-[var(--text-primary)]">PORTRAIT 01</span>
                  <span className="inline-flex items-center gap-1.5 text-[var(--accent-primary)] font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[var(--live-dot-color)] animate-pulse" />
                    LIVE
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                  Shaurya Shah
                </div>
                {/* Visible College Name on Portrait */}
                <div className="text-xs font-mono text-[var(--accent-secondary)] font-bold uppercase flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[var(--accent-primary)] flex-shrink-0" />
                  <span>DJSCE — Mumbai</span>
                </div>
                <div className="text-xs font-mono text-[var(--text-muted)] font-medium">
                  B.Tech AI/ML · FinTech Honors · 8.3 CGPA
                </div>
              </div>

              {/* Mode Toggle Button */}
              <div className="pt-3 border-t border-[var(--border-subtle)]">
                <button
                  onClick={() => setIsColorMode(!isColorMode)}
                  className="btn-glass w-full px-3.5 py-2 text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 font-semibold shadow-sm cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                  <span>{isColorMode ? "NATURAL TONE" : "MONOCHROME"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Stats, Narrative & Eye-Catching Resume Showcase */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
              <div className="flex items-center gap-3 text-sm font-mono text-[var(--text-muted)] tracking-wider">
                <span className="font-bold text-[var(--text-primary)]">01 / 06</span>
                <span className="text-[var(--text-faint)]">—</span>
                <span className="text-[var(--text-primary)] uppercase font-semibold">CORE PROFILE</span>
              </div>
              <span className="text-sm font-mono text-[var(--text-primary)] uppercase tracking-widest font-semibold px-2.5 py-0.5 border border-[var(--border-default)] bg-[var(--bg-surface-elevated)]">
                CGPA 8.3 · DJSCE MUMBAI
              </span>
            </div>

            <div className="space-y-4">
              <p className="text-xl sm:text-2xl font-light text-[var(--text-primary)] leading-snug tracking-tight">
                Great intelligent systems deserve architectures as rigorous as the models behind them.
                Specialized in combining predictive machine learning workflows with quantitative FinTech systems.
              </p>
              <p className="text-base sm:text-lg font-light text-[var(--text-muted)] leading-relaxed">
                {PERSONAL_INFO.bioHeadline}
              </p>
            </div>

            {/* HIGH-IMPACT EYE-CATCHING RESUME CALLOUT BAR (Liquid Glass) */}
            <div className="liquid-glass liquid-sheen p-5 sm:p-6 border-2 border-[var(--border-strong)] shadow-2xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--text-primary)] font-bold">
                    <FileText className="w-4 h-4 text-[var(--accent-primary)]" />
                    <span>CURRICULUM VITAE &amp; CREDENTIALS</span>
                  </div>
                  <p className="text-sm text-[var(--text-muted)]">
                    Verified resume detailing technical stack, DJSCE coursework, GPA, projects &amp; leadership.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={onOpenResume}
                    className="btn-solid group inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono tracking-widest uppercase font-bold shadow-lg cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    <span>VIEW RESUME</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  <a
                    href="/Shaurya_Shah_Resume.pdf"
                    download="Shaurya_Shah_Resume.pdf"
                    className="btn-glass group inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono tracking-widest uppercase font-semibold cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>DOWNLOAD PDF</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Row CTA to View Experience */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-[var(--text-faint)]">
                Explore chronological milestones
              </span>
              <a
                href="#experience"
                onClick={handleScrollToNext}
                className="btn-glass group inline-flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-widest uppercase font-semibold"
              >
                <span>VIEW EXPERIENCE</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1 text-[var(--accent-primary)]" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
