import React from "react";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";
import { skillsData } from "@/data/skills";
import { journeyData } from "@/data/journey";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowDownRight, ArrowUpRight, CheckCircle2, Layers } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full flex flex-col pt-24 sm:pt-32">
      {/* 1. HERO SECTION */}
      <section
        id="hero"
        aria-label="Introduction"
        className="w-full pb-20 sm:pb-28 border-b border-[rgba(8,11,16,0.08)]"
      >
        <Container>
          <div className="max-w-4xl">
            {/* Status & Location Pill */}
            <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8">
              <Badge variant="live">Available for Engineering Roles & Projects</Badge>
              <span className="text-xs font-mono text-[#080B10]/60">
                {siteConfig.location}
              </span>
            </div>

            {/* Single Page H1 */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-[#080B10] leading-[1.08] mb-6">
              {siteConfig.headline}
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[#080B10]/70 font-sans leading-relaxed max-w-2xl mb-8 sm:mb-10">
              {siteConfig.supportingLine}
            </p>

            {/* Dual CTA Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Button href="#work" variant="primary" size="lg">
                <span>Explore selected work</span>
                <ArrowDownRight className="h-4 w-4" />
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                <span>Get in touch</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. SELECTED WORK SECTION (Foundation Anchor) */}
      <section
        id="work"
        aria-label="Selected Work"
        className="w-full py-20 sm:py-28 border-b border-[rgba(8,11,16,0.08)] bg-[#F5F7FA]"
      >
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#080B10]/50 uppercase mb-2">
                <Layers className="h-4 w-4 text-[#4FA8DE]" />
                <span>Section 01 // Systems Portfolio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#080B10]">
                Selected Work
              </h2>
            </div>
            <p className="text-sm text-[#080B10]/60 max-w-md font-sans">
              Three distinct software systems: a 40+ page university portal, a smart cart touchscreen interface, and an embedded hardware showcase platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={project.slug}
                className="bg-white rounded-2xl p-6 border border-[rgba(8,11,16,0.08)] shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-medium text-[#080B10]/40">
                      LAYER 0{idx + 1}
                    </span>
                    <Badge
                      variant={project.status === "live" ? "live" : "unpublished"}
                    >
                      {project.status === "live" ? "Live Demo Verified" : "Demo Coming Soon"}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-display font-bold text-[#080B10] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#080B10]/70 leading-relaxed mb-6 font-sans">
                    {project.cardDescription}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#F5F7FA] text-[#080B10]/80 border border-[rgba(8,11,16,0.06)]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#F5F7FA] text-[#080B10]/50">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[rgba(8,11,16,0.08)] flex items-center justify-between">
                    {project.demo ? (
                      <a
                        href={project.demo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#080B10] hover:text-[#005777] transition-colors"
                      >
                        <span>Launch live demo</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-[#080B10]/50 italic">
                        Demo in preparation
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. CAPABILITIES SECTION */}
      <section
        id="capabilities"
        aria-label="Core Capabilities"
        className="w-full py-20 sm:py-28 border-b border-[rgba(8,11,16,0.08)]"
      >
        <Container>
          <div className="mb-12">
            <span className="text-xs font-mono font-semibold tracking-wider text-[#080B10]/50 uppercase mb-2 block">
              Section 02 // Core Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#080B10]">
              Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.capabilities.map((cap) => (
              <div
                key={cap.id}
                className="p-6 rounded-2xl border border-[rgba(8,11,16,0.08)] bg-white shadow-card flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-display font-bold text-[#080B10] mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm font-sans text-[#080B10]/70 mb-6 leading-relaxed">
                    {cap.shortSummary}
                  </p>
                </div>
                <ul className="space-y-2 pt-4 border-t border-[rgba(8,11,16,0.08)]">
                  {cap.keyHighlights.map((hl) => (
                    <li
                      key={hl}
                      className="text-xs text-[#080B10]/80 flex items-start gap-2"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#4FA8DE] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. TECHNICAL TOOLKIT SECTION */}
      <section
        id="toolkit"
        aria-label="Technical Toolkit"
        className="w-full py-20 sm:py-28 border-b border-[rgba(8,11,16,0.08)] bg-[#F5F7FA]"
      >
        <Container>
          <div className="mb-12">
            <span className="text-xs font-mono font-semibold tracking-wider text-[#080B10]/50 uppercase mb-2 block">
              Section 03 // Technical Toolkit
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#080B10] mb-4">
              Technologies & Tools
            </h2>
            <p className="text-sm text-[#080B10]/60 max-w-xl font-sans">
              Practical tools used across production and academic systems, cleanly separated from currently expanding areas. Zero artificial percentage bars.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Used in projects */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[rgba(8,11,16,0.08)] shadow-card">
              <h3 className="text-sm font-mono font-semibold text-[#080B10] uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#080B10]"></span>
                <span>Used in Projects & Applications</span>
              </h3>
              <div className="space-y-6">
                {skillsData.usedInProjects.map((group) => (
                  <div key={group.title}>
                    <h4 className="text-xs font-semibold text-[#080B10] mb-1">
                      {group.title}
                    </h4>
                    <p className="text-xs text-[#080B10]/60 mb-2.5 font-sans">
                      {group.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs font-mono px-3 py-1 rounded-full bg-[#F5F7FA] text-[#080B10] border border-[rgba(8,11,16,0.08)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Currently Learning & Tools */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[rgba(8,11,16,0.08)] shadow-card">
                <h3 className="text-sm font-mono font-semibold text-[#080B10] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#77CFFF]"></span>
                  <span>Currently Learning & Expanding</span>
                </h3>
                {skillsData.currentlyLearning.map((group) => (
                  <div key={group.title}>
                    <p className="text-xs text-[#080B10]/60 mb-3 font-sans">
                      {group.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Badge key={item} variant="accent">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[rgba(8,11,16,0.08)] shadow-card">
                <h3 className="text-sm font-mono font-semibold text-[#080B10] uppercase tracking-wider mb-3">
                  Tools & Environments
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {skillsData.toolsAndEnvironments.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-[#F5F7FA] text-[#080B10] border border-[rgba(8,11,16,0.08)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. JOURNEY SECTION */}
      <section
        id="journey"
        aria-label="Experience and Education"
        className="w-full py-20 sm:py-28 border-b border-[rgba(8,11,16,0.08)]"
      >
        <Container>
          <div className="mb-12">
            <span className="text-xs font-mono font-semibold tracking-wider text-[#080B10]/50 uppercase mb-2 block">
              Section 04 // Experience & Education
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#080B10]">
              Journey
            </h2>
          </div>

          <div className="space-y-6 max-w-3xl">
            {journeyData.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-[rgba(8,11,16,0.08)] bg-white shadow-card"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-base sm:text-lg font-display font-bold text-[#080B10]">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-[#080B10]/60 shrink-0">
                    {item.period}
                  </span>
                </div>
                <div className="text-xs font-mono text-[#4FA8DE] mb-4">
                  {item.organization}
                  {item.location && ` • ${item.location}`}
                </div>
                <ul className="space-y-1.5">
                  {item.highlights.map((hl, hIdx) => (
                    <li
                      key={hIdx}
                      className="text-xs sm:text-sm text-[#080B10]/70 flex items-start gap-2"
                    >
                      <span className="text-[#080B10]/30 mt-1.5">•</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. INVERTED CONTACT MODULE */}
      <section
        id="contact"
        aria-label="Contact Information"
        className="w-full py-24 sm:py-32 bg-[#080B10] text-white"
      >
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/15 text-xs font-mono mb-6">
              <span>DIRECT CHANNELS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight mb-6">
              Let&apos;s build reliable software systems together.
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-sans mb-10">
              Open to full-stack engineering roles, software development opportunities, and impactful digital projects.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                href={`mailto:${siteConfig.email}`}
                variant="inverted"
                size="lg"
              >
                <span>{siteConfig.email}</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button
                href={siteConfig.github}
                external
                variant="outline"
                size="lg"
                className="text-white border-white/25 hover:bg-white hover:text-[#080B10] hover:border-white"
              >
                <span>GitHub Profile</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button
                href={siteConfig.linkedin}
                external
                variant="outline"
                size="lg"
                className="text-white border-white/25 hover:bg-white hover:text-[#080B10] hover:border-white"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
