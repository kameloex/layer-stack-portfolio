"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, ArrowRight, Cpu, BookOpen, Calendar, Users } from "lucide-react";

interface HubCardProps {
  project: Project;
}

export function HubCard({ project }: HubCardProps) {
  const [activeTab, setActiveTab] = useState<"hardware" | "guidelines" | "css">("hardware");

  return (
    <article
      aria-labelledby="hub-title"
      className="w-full rounded-3xl border border-[rgba(8,11,16,0.1)] bg-white p-6 sm:p-10 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden"
    >
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[rgba(8,11,16,0.08)] mb-8">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D9F2FD] text-[#080B10] font-mono text-xs font-bold border border-[#77CFFF]">
            03
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#080B10]/50 block">
              Department Systems Platform
            </span>
            <span className="text-xs font-mono font-medium text-[#4FA8DE]">
              Faculty of Information and Communication Technology
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="live">Live Demo Verified</Badge>
          <span className="text-xs font-mono text-[#080B10]/50">82+ Department Projects</span>
        </div>
      </div>

      {/* Main Grid: Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Context, Features, Tabs */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <h3
              id="hub-title"
              className="text-2xl sm:text-4xl font-display font-bold text-[#080B10] tracking-tight mb-3"
            >
              {project.title}
            </h3>
            <p className="text-base text-[#080B10]/75 font-sans leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Interactive Hub Features Switcher */}
          <div className="flex p-1 rounded-full bg-[#F5F7FA] border border-[rgba(8,11,16,0.08)] max-w-fit">
            <button
              type="button"
              onClick={() => setActiveTab("hardware")}
              className={`px-3 py-1 text-xs font-mono rounded-full transition-all flex items-center gap-1.5 ${
                activeTab === "hardware"
                  ? "bg-[#080B10] text-white shadow-sm"
                  : "text-[#080B10]/70 hover:text-[#080B10]"
              }`}
            >
              <Cpu className="h-3 w-3" />
              <span>Hardware Guides</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("guidelines")}
              className={`px-3 py-1 text-xs font-mono rounded-full transition-all flex items-center gap-1.5 ${
                activeTab === "guidelines"
                  ? "bg-[#080B10] text-white shadow-sm"
                  : "text-[#080B10]/70 hover:text-[#080B10]"
              }`}
            >
              <BookOpen className="h-3 w-3" />
              <span>Knowledge Center</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("css")}
              className={`px-3 py-1 text-xs font-mono rounded-full transition-all flex items-center gap-1.5 ${
                activeTab === "css"
                  ? "bg-[#080B10] text-white shadow-sm"
                  : "text-[#080B10]/70 hover:text-[#080B10]"
              }`}
            >
              <span>23 Media Queries</span>
            </button>
          </div>

          {/* Dynamic Content Panel */}
          <div className="min-h-[140px] p-5 rounded-2xl bg-[#F5F7FA] border border-[rgba(8,11,16,0.06)] text-xs font-sans space-y-2.5">
            {activeTab === "hardware" && (
              <>
                <div className="font-mono text-[11px] font-semibold text-[#080B10] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Cpu className="h-3.5 w-3.5 text-[#4FA8DE]" />
                  <span>Embedded Systems Registry &amp; Guidelines</span>
                </div>
                <p className="text-[#080B10]/70 leading-relaxed">
                  Dedicated knowledge center and board documentation for Arduino, ESP32, and Raspberry Pi student projects. Includes guidelines for video showcases, project books, and academic evaluation.
                </p>
                <div className="flex items-center gap-4 pt-1 text-[11px] font-mono text-[#080B10]/60">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 text-[#4FA8DE]" />
                    <span>52 Exhibition Projects (2023)</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3 text-[#4FA8DE]" />
                    <span>Team Registration Flows</span>
                  </span>
                </div>
              </>
            )}

            {activeTab === "guidelines" && (
              <>
                <div className="font-mono text-[11px] font-semibold text-[#080B10] uppercase tracking-wider mb-2">
                  Multi-Tier Information Architecture
                </div>
                <p className="text-[#080B10]/70 leading-relaxed">
                  Features category filtering (smart homes, smart cars, drones), team-leader add-project submission flows with structured asset fields, and event registration modals.
                </p>
                <p className="text-[11px] text-[#080B10]/50 italic pt-1">
                  Honesty note: Positioned as a front-end showcase platform; does not claim a production backend or live server storage.
                </p>
              </>
            )}

            {activeTab === "css" && (
              <>
                <div className="font-mono text-[11px] font-semibold text-[#080B10] uppercase tracking-wider mb-2">
                  Handcrafted Responsive Engineering
                </div>
                <ul className="space-y-1.5 text-[#080B10]/70">
                  <li>• Structured with 23 targeted CSS media queries for bulletproof responsiveness</li>
                  <li>• Lightweight custom image carousel engineered with pure DOM manipulation</li>
                  <li>• Slide-out mobile navigation drawer with click-outside event listeners</li>
                </ul>
              </>
            )}
          </div>

          {/* Technology Badges */}
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

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <Button href={`/work/${project.slug}`} variant="primary">
              <span>Explore Case Study</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            {project.demo && (
              <Button href={project.demo.url} external variant="outline">
                <span>Launch Live Hub</span>
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
              <span className="truncate max-w-[200px]">https://kameloex.github.io/Batu-projects/</span>
              <span className="text-[#4FA8DE]">LIVE</span>
            </div>

            {/* Cover Screenshot */}
            <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-white border border-[rgba(8,11,16,0.06)]">
              <Image
                src={project.media[0]?.src || "/images/projects/batu-projects-hub/Screenshot 2025-09-07 101402.png"}
                alt={project.media[0]?.alt || "BATU Projects Hub landing page"}
                fill
                className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <Link
              href={`/work/${project.slug}`}
              className="mt-3 block text-center py-2 px-4 rounded-xl bg-white border border-[rgba(8,11,16,0.08)] text-xs font-mono font-medium text-[#080B10] hover:bg-[#D9F2FD] hover:border-[#77CFFF] transition-colors"
            >
              Inspect 5 hardware showcase screenshots &amp; full specs →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
