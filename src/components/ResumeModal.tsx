"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, FileText, X } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [viewMode, setViewMode] = useState<"document" | "pdf">("document");

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window (Liquid Glass themed) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-[var(--bg-page)] border-2 border-[var(--border-strong)] shadow-2xl flex flex-col overflow-hidden text-[var(--text-primary)]"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]">
            <div className="flex items-center gap-3">
              <FileText className="w-4 h-4 text-[var(--accent-primary)]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-primary)] font-bold">
                CURRICULUM VITAE — SHAURYA SHAH
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Toggle Document / PDF View */}
              <div className="hidden sm:flex items-center p-0.5 border border-[var(--border-default)] text-[10px] font-mono uppercase bg-[var(--bg-surface)]">
                <button
                  onClick={() => setViewMode("document")}
                  className={`px-2.5 py-1 transition-colors cursor-pointer ${
                    viewMode === "document"
                      ? "btn-solid font-semibold"
                      : "text-[var(--text-faint)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  Structured View
                </button>
                <button
                  onClick={() => setViewMode("pdf")}
                  className={`px-2.5 py-1 transition-colors cursor-pointer ${
                    viewMode === "pdf"
                      ? "btn-solid font-semibold"
                      : "text-[var(--text-faint)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  Native PDF
                </button>
              </div>

              {/* Download PDF Button */}
              <a
                href="/Shaurya_Shah_Resume.pdf"
                download="Shaurya_Shah_Resume.pdf"
                className="btn-glass inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono tracking-widest uppercase font-semibold cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>DOWNLOAD PDF</span>
              </a>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-1.5 border border-[var(--border-default)] text-[var(--text-faint)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-[var(--bg-page)] text-[var(--text-primary)]">
            {viewMode === "pdf" ? (
              <div className="w-full h-[70vh] border border-[var(--border-default)]">
                <iframe
                  src="/Shaurya_Shah_Resume.pdf#toolbar=0"
                  className="w-full h-full"
                  title="Shaurya Shah Resume PDF"
                />
              </div>
            ) : (
              <div className="max-w-3xl mx-auto space-y-8 font-sans">
                {/* Header */}
                <div className="text-center space-y-2 border-b border-[var(--border-subtle)] pb-6">
                  <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-[var(--text-primary)] uppercase">
                    Shaurya Shah
                  </h1>
                  <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-[var(--text-muted)]">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="hover:text-[var(--text-primary)] underline"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                    <span>•</span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="hover:text-[var(--text-primary)]"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                    <span>•</span>
                    <span>{PERSONAL_INFO.location}</span>
                    <span>•</span>
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-primary)] underline underline-offset-2 hover:opacity-80"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>

                {/* Summary */}
                <div className="space-y-2">
                  <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--text-faint)] font-bold border-b border-[var(--border-subtle)] pb-1">
                    SUMMARY
                  </h2>
                  <p className="text-sm font-light text-[var(--text-secondary)] leading-relaxed">
                    Second-year Artificial Intelligence and Machine Learning student with a strong interest in technology and software development. Currently building a foundation in programming, problem-solving, and computer science concepts while exploring AI and ML. Eager to learn new skills, gain practical experience, and apply knowledge through projects and internships.
                  </p>
                </div>

                {/* Education */}
                <div className="space-y-4">
                  <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--text-faint)] font-bold border-b border-[var(--border-subtle)] pb-1">
                    EDUCATION
                  </h2>
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div>
                        <div className="text-sm font-semibold text-[var(--text-primary)]">
                          Dwarkadas J. Sanghvi College of Engineering
                        </div>
                        <div className="text-xs text-[var(--text-muted)] font-light">
                          Bachelor of Technology, Artificial Intelligence and Machine Learning &mdash; <span className="text-[var(--text-primary)] font-mono font-bold">GPA: 8.3</span>
                        </div>
                      </div>
                      <div className="text-xs font-mono text-[var(--text-faint)]">
                        2025 &ndash; 2029 | Mumbai
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pt-2 border-t border-[var(--border-subtle)]">
                      <div className="text-xs text-[var(--text-secondary)]">
                        <span className="font-semibold text-[var(--text-primary)]">Champions Science Junior College</span> &mdash; HSC &mdash; <span className="font-mono text-[var(--text-primary)] font-bold">GPA: 70%</span>
                      </div>
                      <div className="text-xs font-mono text-[var(--text-faint)]">2023 &ndash; 2025</div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pt-2 border-t border-[var(--border-subtle)]">
                      <div className="text-xs text-[var(--text-secondary)]">
                        <span className="font-semibold text-[var(--text-primary)]">Jamnabai Narsee School</span> &mdash; Secondary School &mdash; <span className="font-mono text-[var(--text-primary)] font-bold">GPA: 95%</span>
                      </div>
                      <div className="text-xs font-mono text-[var(--text-faint)]">2013 &ndash; 2023</div>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className="space-y-3">
                  <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--text-faint)] font-bold border-b border-[var(--border-subtle)] pb-1">
                    EXPERIENCE
                  </h2>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div className="text-sm font-semibold text-[var(--text-primary)]">
                        Sales &amp; Technical Support Intern &mdash; <span className="text-[var(--text-muted)]">LaTim Group</span>
                      </div>
                      <div className="text-xs font-mono text-[var(--text-faint)]">
                        Jul 2025 &ndash; Sep 2025
                      </div>
                    </div>
                    <ul className="space-y-1.5 text-xs text-[var(--text-secondary)] list-disc list-inside font-light">
                      <li>Managed and maintained customer and sales data using Excel/spreadsheets.</li>
                      <li>Performed data entry, organized records, and updated databases with accurate information.</li>
                      <li>Assisted with basic technical tasks and troubleshooting for day-to-day operations.</li>
                      <li>Prepared and maintained reports and documentation to support the sales team.</li>
                    </ul>
                  </div>
                </div>

                {/* Technical Skills */}
                <div className="space-y-2">
                  <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--text-faint)] font-bold border-b border-[var(--border-subtle)] pb-1">
                    TECHNICAL SKILLS
                  </h2>
                  <div className="space-y-1.5 text-xs font-mono text-[var(--text-secondary)]">
                    <div>
                      <span className="text-[var(--text-faint)] font-semibold">Technical Skills:</span> Python, Java, C, Next.js, TypeScript, FastAPI
                    </div>
                    <div>
                      <span className="text-[var(--text-faint)] font-semibold">Tools &amp; Software:</span> Git, GitHub, Google Colab, Docker
                    </div>
                    <div>
                      <span className="text-[var(--text-faint)] font-semibold">Soft Skills:</span> Communication, Problem Solving, Teamwork, Client Relationship Management
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div className="space-y-2">
                  <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--text-faint)] font-bold border-b border-[var(--border-subtle)] pb-1">
                    PROJECTS
                  </h2>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-[var(--text-primary)]">
                      FinSight &mdash; <span className="text-xs font-light text-[var(--text-muted)]">Intelligent Statement Analytics &amp; Behavioral Intelligence Platform</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-[var(--text-secondary)] list-disc list-inside font-light">
                      <li>Built a full-stack data analytics web app using Next.js, TypeScript, and FastAPI, featuring JWT authentication and automated CSV statement parsing.</li>
                      <li>Integrated DeepSeek-R1 reasoning engine to generate personalized behavioral insights and predictive trend analysis based on user transaction datasets.</li>
                    </ul>
                  </div>
                </div>

                {/* Clubs and Committees */}
                <div className="space-y-3">
                  <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--text-faint)] font-bold border-b border-[var(--border-subtle)] pb-1">
                    CLUBS AND COMMITTEES
                  </h2>
                  <div className="space-y-2.5 text-xs">
                    <div>
                      <span className="font-semibold text-[var(--text-primary)]">DJS NSS</span> &mdash; Volunteer
                      <p className="text-[var(--text-muted)] font-light mt-0.5">
                        Participated in community service initiatives and assisted in organizing and coordinating NSS activities, demonstrating teamwork, responsibility, and leadership.
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--text-primary)]">DJS CODEAI</span> &mdash; Creatives Member
                      <p className="text-[var(--text-muted)] font-light mt-0.5">
                        Contributed to designing promotional creatives and event materials while collaborating with the team on visual concepts, branding, and social media content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
