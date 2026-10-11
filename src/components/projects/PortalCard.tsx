"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, ArrowRight, Layers, ShieldCheck, CheckCircle } from "lucide-react";

interface PortalCardProps {
  project: Project;
}

export function PortalCard({ project }: PortalCardProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "payment" | "scale">("overview");

  return (
    <article
      aria-labelledby="portal-title"
      className="w-full rounded-3xl border border-[rgba(8,11,16,0.1)] bg-white p-6 sm:p-10 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden"
    >
      {/* Top Architectural Datum */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[rgba(8,11,16,0.08)] mb-8">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D9F2FD] text-[#080B10] font-mono text-xs font-bold border border-[#77CFFF]">
            01
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#080B10]/50 block">
              Architectural Multi-Page Portal
            </span>
            <span className="text-xs font-mono font-medium text-[#4FA8DE]">
              Borg El Arab Technological University {/* TODO: Confirm spelling */}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="live">Live Demo Verified</Badge>
          <span className="text-xs font-mono text-[#080B10]/50">40+ Pages</span>
        </div>
      </div>

      {/* Main Grid: Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Context, Features, Tabbed Highlights */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <h3
              id="portal-title"
              className="text-2xl sm:text-4xl font-display font-bold text-[#080B10] tracking-tight mb-3"
            >
              {project.title}
            </h3>
            <p className="text-base text-[#080B10]/75 font-sans leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex p-1 rounded-full bg-[#F5F7FA] border border-[rgba(8,11,16,0.08)] max-w-fit">
            <button
              type="button"
              onClick={() => setActiveTab("overview")}
              className={`px-3 py-1 text-xs font-mono rounded-full transition-all ${
                activeTab === "overview"
                  ? "bg-[#080B10] text-white shadow-sm"
                  : "text-[#080B10]/70 hover:text-[#080B10]"
              }`}
            >
              System Scope
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("payment")}
              className={`px-3 py-1 text-xs font-mono rounded-full transition-all ${
                activeTab === "payment"
                  ? "bg-[#080B10] text-white shadow-sm"
                  : "text-[#080B10]/70 hover:text-[#080B10]"
              }`}
            >
              Simulated Payment
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("scale")}
              className={`px-3 py-1 text-xs font-mono rounded-full transition-all ${
                activeTab === "scale"
                  ? "bg-[#080B10] text-white shadow-sm"
                  : "text-[#080B10]/70 hover:text-[#080B10]"
              }`}
            >
              Technical Highlights
            </button>
          </div>

          {/* Dynamic Tab Content */}
          <div className="min-h-[140px] p-5 rounded-2xl bg-[#F5F7FA] border border-[rgba(8,11,16,0.06)] text-xs font-sans space-y-2.5">
            {activeTab === "overview" && (
              <>
                <div className="font-mono text-[11px] font-semibold text-[#080B10] uppercase tracking-wider mb-2">
                  Institutional Architecture
                </div>
                <p className="text-[#080B10]/70 leading-relaxed">
                  Brings academic faculties, searchable staff directory, filterable student graduation projects, news, and Children’s University registration for ages 7–15 into a unified RTL-first experience.
                </p>
                <div className="flex items-center gap-2 pt-1 text-[#080B10]/60">
                  <CheckCircle className="h-3.5 w-3.5 text-[#4FA8DE]" />
                  <span>Includes 7 dedicated student-service areas & admissions guidance</span>
                </div>
              </>
            )}

            {activeTab === "payment" && (
              <>
                <div className="font-mono text-[11px] font-semibold text-[#080B10] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#4FA8DE]" />
                  <span>Simulated Fee-Payment Flow</span>
                </div>
                <p className="text-[#080B10]/70 leading-relaxed">
                  Interactive fee payment flow featuring client-side credit card preview, Luhn algorithm number validation, masked card storage, simulated processing delay, and transaction ID receipts.
                </p>
                <p className="text-[11px] text-[#080B10]/50 italic pt-1">
                  Honesty notice: Transactions are simulated with local state; no real bank or payment gateway is integrated.
                </p>
              </>
            )}

            {activeTab === "scale" && (
              <>
                <div className="font-mono text-[11px] font-semibold text-[#080B10] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Layers className="h-3.5 w-3.5 text-[#4FA8DE]" />
                  <span>RTL-First Engineering</span>
                </div>
                <ul className="space-y-1.5 text-[#080B10]/70">
                  <li>• Handwritten RTL layout adjustments paired with Bootstrap 5 RTL & Tailwind</li>
                  <li>• Reusable navigation state machine across 40+ independent pages</li>
                  <li>• IntersectionObserver-driven counter animations for institutional stats</li>
                </ul>
              </>
            )}
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded-full bg-white text-[#080B10] border border-[rgba(8,11,16,0.1)] shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <Button href={`/work/${project.slug}`} variant="primary">
              <span>Explore Case Study</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            {project.demo && (
              <Button href={project.demo.url} external variant="outline">
                <span>Launch Live Portal</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Right Column: Visual Preview Frame */}
        <div className="lg:col-span-6">
          <div className="rounded-2xl border border-[rgba(8,11,16,0.12)] bg-[#F5F7FA] p-2.5 sm:p-3 shadow-lg group relative overflow-hidden">
            {/* Window Chrome */}
            <div className="flex items-center justify-between px-3 py-2 bg-white rounded-t-xl border-b border-[rgba(8,11,16,0.06)] text-[11px] font-mono text-[#080B10]/50 mb-2">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#080B10]/20"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#080B10]/20"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#080B10]/20"></span>
              </div>
              <span className="truncate max-w-[200px]">https://kameloex.github.io/BATU/</span>
              <span className="text-[#4FA8DE]">LIVE</span>
            </div>

            {/* Cover Screenshot */}
            <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-white border border-[rgba(8,11,16,0.06)]">
              <Image
                src={project.media[0]?.src || "/images/projects/batu-university-portal/Screenshot 2025-09-07 133359.png"}
                alt={project.media[0]?.alt || "BATU University Portal landing page"}
                fill
                className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* View Case Study pill overlay */}
            <Link
              href={`/work/${project.slug}`}
              className="mt-3 block text-center py-2 px-4 rounded-xl bg-white border border-[rgba(8,11,16,0.08)] text-xs font-mono font-medium text-[#080B10] hover:bg-[#D9F2FD] hover:border-[#77CFFF] transition-colors"
            >
              Inspect 5 portal screenshots &amp; full workflow specs →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
