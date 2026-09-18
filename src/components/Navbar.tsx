"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import ThemeToggle from "@/components/ThemeToggle";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  onOpenResume?: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Active section detection
      const sections = ["contact", "skills", "projects", "education", "experience", "hero"];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        const lenis = (window as unknown as { __lenis?: { scrollTo: (target: HTMLElement | string) => void } }).__lenis;
        if (lenis) {
          lenis.scrollTo(elem);
        } else {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "liquid-glass py-3.5 border-b shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, "#hero")}
            className="group flex items-center gap-3 text-sm font-semibold tracking-wider uppercase transition-opacity hover:opacity-80"
          >
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--live-dot-color)] animate-pulse" />
            <span className="font-mono text-xs sm:text-sm tracking-widest text-[var(--text-primary)] font-bold">
              SHAURYA SHAH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={`text-xs uppercase tracking-widest transition-all duration-200 relative py-1 font-mono ${
                    isActive
                      ? "text-[var(--text-primary)] font-bold"
                      : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--accent-primary)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action buttons */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />

            <button
              onClick={onOpenResume}
              className="btn-solid inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono tracking-widest uppercase shadow-md cursor-pointer"
            >
              <span>[ 📄 RESUME ]</span>
            </button>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono tracking-widest uppercase"
            >
              <span>[ LINKEDIN</span>
              <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span>]</span>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[var(--text-primary)] p-2 border border-[var(--border-default)] liquid-glass"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[var(--bg-page)]/98 backdrop-blur-2xl pt-24 px-8 flex flex-col justify-between pb-12 md:hidden border-b border-[var(--border-default)] overflow-y-auto"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[var(--text-faint)] font-bold">
                  Navigation Index
                </span>
                <ThemeToggle />
              </div>
              <div className="flex flex-col space-y-3">
                {NAV_LINKS.map((link, idx) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-2xl font-light tracking-tight text-[var(--text-primary)] hover:opacity-80 flex items-center justify-between border-b border-[var(--border-subtle)] py-2.5 font-mono"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs text-[var(--text-faint)]">
                      0{idx + 1}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-[var(--border-subtle)]">
              <div className="text-[10px] font-mono tracking-widest uppercase text-[var(--text-faint)] font-bold">
                Direct Channels
              </div>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenResume) onOpenResume();
                  }}
                  className="btn-solid flex items-center justify-between p-3 text-xs font-mono uppercase w-full"
                >
                  <span>VIEW & DOWNLOAD RESUME</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glass flex items-center justify-between p-3 text-xs font-mono uppercase"
                >
                  <span>LINKEDIN PROFILE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center justify-between p-3 border border-[var(--border-default)] text-xs font-mono uppercase text-[var(--text-secondary)] hover:text-[var(--text-primary)] liquid-glass"
                >
                  <span>{PERSONAL_INFO.email}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
