"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Check, Copy, MapPin, Phone } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="relative w-full pt-28 sm:pt-36 pb-16 px-6 sm:px-8 lg:px-12 bg-[var(--bg-page)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full space-y-20 sm:space-y-28">
        {/* Top Header Tag */}
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-6 text-sm font-mono uppercase tracking-widest">
          <div className="flex items-center gap-3">
            <span className="font-bold text-[var(--accent-primary)]">06 / 06</span>
            <span className="text-[var(--text-faint)]">—</span>
            <span className="text-[var(--text-primary)] font-semibold">GET IN TOUCH</span>
          </div>
          <span className="text-[var(--text-muted)] font-semibold px-2.5 py-0.5 border border-[var(--border-default)] bg-[var(--bg-surface-elevated)]">
            STATUS: OPEN FOR NEW INITIATIVES
          </span>
        </div>

        {/* Dramatic Oversized Typography: LET'S CONNECT. */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="leading-none select-none"
          >
            <h2 className="rainbow-title text-[15vw] sm:text-[14vw] lg:text-[13vw] font-bold tracking-tighter uppercase text-[var(--text-primary)] font-sans leading-[0.88]">
              LET&apos;S
            </h2>
            <h2 className="rainbow-title text-[15vw] sm:text-[14vw] lg:text-[13vw] font-bold tracking-tighter uppercase text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-300 font-sans leading-[0.88]">
              CONNECT.
            </h2>
          </motion.div>
        </div>

        {/* Direct Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 pt-10 border-t border-[var(--border-subtle)]">
          {/* Email Channel */}
          <div className="md:col-span-7 space-y-6">
            <span className="text-sm font-mono uppercase tracking-widest text-[var(--text-muted)] font-bold block">
              Direct Communication Channel
            </span>
            <div className="space-y-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group inline-flex items-baseline gap-3 text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[var(--text-primary)] hover:opacity-85 transition-opacity"
              >
                <span className="break-all font-mono underline decoration-[var(--border-strong)] underline-offset-8">
                  {PERSONAL_INFO.email}
                </span>
                <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-[var(--accent-primary)]" />
              </a>

              <div className="pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="btn-glass inline-flex items-center gap-2.5 px-4 py-2.5 text-xs sm:text-sm font-mono uppercase font-bold shadow-sm cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>COPIED TO CLIPBOARD!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[var(--accent-primary)]" />
                      <span>COPY EMAIL ADDRESS</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Social & Telemetry Metadata */}
          <div className="md:col-span-5 space-y-6">
            <span className="text-sm font-mono uppercase tracking-widest text-[var(--text-muted)] font-bold block">
              Professional Telemetry
            </span>

            <div className="space-y-4">
              {/* LinkedIn Link (Must open in new tab) */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass liquid-sheen group flex items-center justify-between p-5 border-2 hover:border-[var(--border-strong)] transition-all shadow-lg cursor-pointer"
              >
                <div className="space-y-1">
                  <div className="text-xs font-mono text-[var(--text-faint)] uppercase font-bold">
                    Professional Network
                  </div>
                  <div className="text-lg font-semibold text-[var(--text-primary)] tracking-tight">
                    LinkedIn / Shaurya Shah
                  </div>
                </div>
                <div className="w-9 h-9 border border-[var(--border-default)] flex items-center justify-center text-[var(--text-primary)] transition-colors">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>

              {/* Phone & Location Info from resume */}
              <div className="grid grid-cols-2 gap-4">
                <div className="liquid-glass p-4 border-2 space-y-1.5 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-faint)] uppercase font-bold">
                    <Phone className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                    <span>Phone</span>
                  </div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm font-mono text-[var(--text-primary)] font-bold hover:underline block"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>

                <div className="liquid-glass p-4 border-2 space-y-1.5 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-faint)] uppercase font-bold">
                    <MapPin className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                    <span>Location</span>
                  </div>
                  <div className="text-sm font-mono text-[var(--text-primary)] font-bold">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Editorial Footer */}
        <div className="pt-12 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-6 text-sm font-mono text-[var(--text-muted)] uppercase tracking-wider font-medium">
          <div className="flex items-center gap-4">
            <span className="text-[var(--text-primary)] font-bold">SHAURYA SHAH</span>
            <span className="text-[var(--text-faint)]">|</span>
            <span className="text-[var(--text-secondary)]">AI / ML × FINTECH</span>
            <span className="text-[var(--text-faint)]">|</span>
            <span className="text-[var(--accent-primary)] font-bold">DJSCE</span>
          </div>

          <div className="text-[var(--text-faint)]">
            © 2026 — ALL RIGHTS RESERVED
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[var(--text-primary)] hover:opacity-80 transition-opacity font-bold cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1 text-[var(--accent-primary)]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
