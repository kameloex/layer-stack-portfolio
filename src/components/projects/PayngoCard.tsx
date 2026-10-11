"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, QrCode, ShoppingCart, Coins, BarChart3, AlertCircle } from "lucide-react";

interface PayngoCardProps {
  project: Project;
}

export function PayngoCard({ project }: PayngoCardProps) {
  const [activeConsoleMode, setActiveConsoleMode] = useState<"shopper" | "checkout" | "analytics">("shopper");

  return (
    <article
      aria-labelledby="payngo-title"
      className="w-full rounded-3xl border border-[rgba(8,11,16,0.1)] bg-white p-6 sm:p-10 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden"
    >
      {/* Top Touchscreen Hardware Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[rgba(8,11,16,0.08)] mb-8">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F5F7FA] text-[#080B10] font-mono text-xs font-bold border border-[rgba(8,11,16,0.15)]">
            02
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#080B10]/50 block">
              Embedded Touchscreen System
            </span>
            <span className="text-xs font-mono font-medium text-[#080B10]">
              Smart Shopping Cart Hardware Interface
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="unpublished">Demo Coming Soon</Badge>
          <span className="text-xs font-mono text-[#080B10]/50">Unpublished</span>
        </div>
      </div>

      {/* Main Grid: Hardware Console Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Touchscreen Visual Mockup Frame */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="rounded-2xl border-2 border-[#080B10] bg-[#080B10] p-2.5 sm:p-3.5 shadow-xl relative">
            {/* Screen Bezel & Hardware Indicator */}
            <div className="flex items-center justify-between px-3 py-1.5 bg-[#080B10] text-[10px] font-mono text-white/60 mb-2">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#77CFFF] animate-pulse"></span>
                <span className="tracking-wider uppercase">CART_TERMINAL // ACTIVE</span>
              </div>
              <span className="text-white/40">1024 × 600 TOUCHSCREEN</span>
            </div>

            {/* Screen Area with Real Screenshot */}
            <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-white">
              <Image
                src={project.media[0]?.src || "/images/projects/payngo/the main photo will appear in ui.jpg"}
                alt={project.media[0]?.alt || "PAYNGO Smart Cart Interface"}
                fill
                className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Bottom Hardware Strip */}
            <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/70 px-2">
              <span className="flex items-center gap-1.5">
                <QrCode className="h-3.5 w-3.5 text-[#77CFFF]" />
                <span>EAN-13 Barcode Pipeline</span>
              </span>
              <span className="text-[#77CFFF]">Debounced Scanner Ready</span>
            </div>
          </div>

          <Link
            href={`/work/${project.slug}`}
            className="mt-3 block text-center py-2 px-4 rounded-xl bg-[#F5F7FA] border border-[rgba(8,11,16,0.08)] text-xs font-mono font-medium text-[#080B10] hover:bg-[#D9F2FD] hover:border-[#77CFFF] transition-colors"
          >
            Inspect 5 touchscreen screenshots &amp; full workflow specs →
          </Link>
        </div>

        {/* Right Column: Interactive Description & Architecture Highlights */}
        <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
          <div>
            <h3
              id="payngo-title"
              className="text-2xl sm:text-4xl font-display font-bold text-[#080B10] tracking-tight mb-3"
            >
              {project.title}
            </h3>
            <p className="text-base text-[#080B10]/75 font-sans leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Interactive Console Mode Switcher */}
          <div className="flex p-1 rounded-full bg-[#F5F7FA] border border-[rgba(8,11,16,0.08)] max-w-fit">
            <button
              type="button"
              onClick={() => setActiveConsoleMode("shopper")}
              className={`px-3 py-1 text-xs font-mono rounded-full transition-all flex items-center gap-1.5 ${
                activeConsoleMode === "shopper"
                  ? "bg-[#080B10] text-white shadow-sm"
                  : "text-[#080B10]/70 hover:text-[#080B10]"
              }`}
            >
              <ShoppingCart className="h-3 w-3" />
              <span>Cart &amp; Scan Flow</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveConsoleMode("checkout")}
              className={`px-3 py-1 text-xs font-mono rounded-full transition-all flex items-center gap-1.5 ${
                activeConsoleMode === "checkout"
                  ? "bg-[#080B10] text-white shadow-sm"
                  : "text-[#080B10]/70 hover:text-[#080B10]"
              }`}
            >
              <Coins className="h-3 w-3" />
              <span>Simulated Checkout</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveConsoleMode("analytics")}
              className={`px-3 py-1 text-xs font-mono rounded-full transition-all flex items-center gap-1.5 ${
                activeConsoleMode === "analytics"
                  ? "bg-[#080B10] text-white shadow-sm"
                  : "text-[#080B10]/70 hover:text-[#080B10]"
              }`}
            >
              <BarChart3 className="h-3 w-3" />
              <span>Canvas Chart</span>
            </button>
          </div>

          {/* Dynamic Console Mode Info */}
          <div className="min-h-[140px] p-5 rounded-2xl bg-[#F5F7FA] border border-[rgba(8,11,16,0.06)] text-xs font-sans space-y-2.5">
            {activeConsoleMode === "shopper" && (
              <>
                <div className="font-mono text-[11px] font-semibold text-[#080B10] uppercase tracking-wider mb-2">
                  Real-time Barcode Integration
                </div>
                <p className="text-[#080B10]/70 leading-relaxed">
                  Engineered to listen for physical or simulated EAN-13 barcode inputs. Incorporates a debounced input buffer so repeated scans instantly increment quantity without duplicate triggers.
                </p>
                <p className="text-[#080B10]/60 pt-1">
                  Features category browsing, promotional offer application, and persistent shopper profile state.
                </p>
              </>
            )}

            {activeConsoleMode === "checkout" && (
              <>
                <div className="font-mono text-[11px] font-semibold text-[#080B10] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Coins className="h-3.5 w-3.5 text-[#4FA8DE]" />
                  <span>Simulated Loyalty &amp; Payment State Machine</span>
                </div>
                <p className="text-[#080B10]/70 leading-relaxed">
                  Shoppers earn 1 loyalty coin per 10 EGP spent. The simulated payment sequence validates card numbers locally and deducts from a mock balance, generating a final checkout receipt.
                </p>
                <p className="text-[11px] text-[#080B10]/50 italic pt-1 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3 shrink-0 text-[#4FA8DE]" />
                  <span>Simulated/local demo logic. Not a real banking integration.</span>
                </p>
              </>
            )}

            {activeConsoleMode === "analytics" && (
              <>
                <div className="font-mono text-[11px] font-semibold text-[#080B10] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <BarChart3 className="h-3.5 w-3.5 text-[#4FA8DE]" />
                  <span>Admin Dashboard &amp; Canvas Sales Visualisation</span>
                </div>
                <p className="text-[#080B10]/70 leading-relaxed">
                  Dual-tier architecture provides a separate admin view for product and category CRUD operations, alongside a native HTML5 Canvas API sales trend chart without heavy external dependencies.
                </p>
              </>
            )}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded-full bg-white text-[#080B10] border border-[rgba(8,11,16,0.1)] shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Row - Strict Non-negotiable Rule: No demo button, no repo button for PAYNGO */}
          <div className="pt-3 flex flex-wrap items-center gap-4">
            <Button href={`/work/${project.slug}`} variant="primary">
              <span>Explore Case Study</span>
              <ArrowRight className="h-4 w-4" />
            </Button>

            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#F5F7FA] border border-dashed border-[rgba(8,11,16,0.18)] text-xs font-mono text-[#080B10]/70">
              <span className="h-2 w-2 rounded-full bg-[#4FA8DE]"></span>
              <span>Demo Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
