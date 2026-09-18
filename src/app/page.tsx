"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="relative w-full min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Fixed Minimal Navigation with Theme Switcher & Resume Action */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* 01 — Landing / Hero with Shaurya's Cutout Photo & Resume CTA */}
      <Hero onOpenResume={() => setIsResumeOpen(true)} />

      {/* 02 — Experience & Leadership (Sticky Pinned Scroll with Kinetic Jumping: LaTim, CODEAI, NSS) */}
      <Experience />

      {/* 03 — Education (Sticky Pinned Scroll with Kinetic Jumping: DJSCE, Champions, Jamnabai) */}
      <Education />

      {/* 04 — Projects (Curated Works: FinSight Flagship + Architecture Drawer) */}
      <Projects />

      {/* 05 — Skills & Competency Matrix (Clean Typography, Liquid Glass) */}
      <Skills />

      {/* 06 — Contact & Minimal Footer */}
      <Contact />

      {/* Global Interactive Resume Modal & PDF Downloader */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </main>
  );
}
