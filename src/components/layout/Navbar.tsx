"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Eye, EyeOff, Menu, X } from "lucide-react";

export function Navbar() {
  const [simpleView, setSimpleView] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Check initial preference
    const stored = localStorage.getItem("ak_simple_view");
    if (stored === "true") {
      setSimpleView(true);
      document.documentElement.classList.add("simple-view");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSimpleView = () => {
    const next = !simpleView;
    setSimpleView(next);
    localStorage.setItem("ak_simple_view", String(next));
    if (next) {
      document.documentElement.classList.add("simple-view");
    } else {
      document.documentElement.classList.remove("simple-view");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      {/* Skip Link for Keyboard Accessibility */}
      <a href="#work" className="skip-to-content pointer-events-auto">
        Skip to work
      </a>

      {/* Floating Pill Nav Bar */}
      <nav
        aria-label="Primary Navigation"
        className={`pointer-events-auto flex items-center justify-between gap-4 sm:gap-6 px-4 sm:px-6 py-2.5 rounded-full border transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-[rgba(8,11,16,0.12)] shadow-floating"
            : "bg-white/80 backdrop-blur-sm border-[rgba(8,11,16,0.08)] shadow-sm"
        }`}
      >
        {/* Monogram / Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 group text-[#080B10] font-display font-bold tracking-tight text-sm sm:text-base pr-1"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#080B10] text-white text-xs font-mono group-hover:bg-[#77CFFF] group-hover:text-[#080B10] transition-colors">
            AK
          </span>
          <span className="hidden sm:inline font-semibold">Ahmed Kamel</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 text-xs font-medium text-[#080B10]/70">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 rounded-full hover:text-[#080B10] hover:bg-[#F5F7FA] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Controls: Simple View Toggle */}
        <div className="flex items-center gap-2 pl-1 border-l border-[rgba(8,11,16,0.08)]">
          <button
            type="button"
            onClick={toggleSimpleView}
            aria-pressed={simpleView}
            title={simpleView ? "Switch to standard interactive view" : "Switch to high-efficiency simple 2D view"}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-colors ${
              simpleView
                ? "bg-[#080B10] text-white"
                : "bg-[#F5F7FA] text-[#080B10]/80 hover:bg-[#E6E8EB] hover:text-[#080B10]"
            }`}
          >
            {simpleView ? (
              <>
                <EyeOff className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Simple View (Active)</span>
                <span className="sm:hidden">Simple</span>
              </>
            ) : (
              <>
                <Eye className="h-3.5 w-3.5 text-[#4FA8DE]" />
                <span className="hidden sm:inline">Simple view</span>
                <span className="sm:hidden">Simple</span>
              </>
            )}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-1.5 text-[#080B10] hover:bg-[#F5F7FA] rounded-full transition-colors"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed inset-x-4 top-20 bg-white/95 backdrop-blur-xl border border-[rgba(8,11,16,0.12)] rounded-2xl p-6 shadow-2xl flex flex-col gap-3 md:hidden z-50 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="text-xs font-mono uppercase tracking-wider text-[#080B10]/50 mb-1">
            Navigation
          </div>
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-[#080B10] hover:bg-[#F5F7FA] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[rgba(8,11,16,0.08)] flex justify-between items-center">
            <span className="text-xs text-[#080B10]/60">Display mode</span>
            <button
              type="button"
              onClick={() => {
                toggleSimpleView();
                setMobileMenuOpen(false);
              }}
              className="text-xs font-mono font-medium px-3 py-1.5 rounded-full bg-[#F5F7FA] text-[#080B10]"
            >
              {simpleView ? "Turn off Simple View" : "Enable Simple View"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
