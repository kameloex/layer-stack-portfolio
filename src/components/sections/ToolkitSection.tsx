import React from "react";
import { skillsData } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Wrench, Sparkles, Terminal } from "lucide-react";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function ToolkitSection() {
  return (
    <section
      id="toolkit"
      aria-label="Technical Toolkit"
      className="w-full py-20 sm:py-32 border-b border-[rgba(8,11,16,0.08)] bg-[#F5F7FA]"
    >
      <Container>
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#080B10]/50 uppercase mb-3">
                <Terminal className="h-4 w-4 text-[#4FA8DE]" />
                <span>Section 03 // Technical Toolkit</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#080B10]">
                Technologies &amp; Tools
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#080B10]/70 max-w-lg font-sans leading-relaxed">
              Practical technologies applied in real project deployments and hardware interfaces, clearly separated from active learning areas. Zero arbitrary proficiency percentages.
            </p>
          </div>
        </MotionReveal>

        {/* Main Grid: Used in Projects vs Currently Learning */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (8 cols): Used in Projects */}
          <MotionReveal className="lg:col-span-8" delay={0.05}>
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[rgba(8,11,16,0.08)] shadow-card space-y-8">
            <div className="flex items-center justify-between pb-4 border-b border-[rgba(8,11,16,0.08)]">
              <div className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#080B10]"></span>
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#080B10]">
                  Applied in Real Projects &amp; Systems
                </h3>
              </div>
              <span className="text-xs font-mono text-[#080B10]/40">VERIFIED</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillsData.usedInProjects.map((group) => (
                <div key={group.title} className="space-y-3">
                  <div>
                    <h4 className="text-sm font-display font-bold text-[#080B10]">
                      {group.title}
                    </h4>
                    <p className="text-xs text-[#080B10]/60 font-sans mt-0.5">
                      {group.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-[#F5F7FA] text-[#080B10] border border-[rgba(8,11,16,0.08)] hover:border-[#4FA8DE] transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            </div>
          </MotionReveal>

          {/* Right Column (4 cols): Currently Learning & Tools */}
          <MotionReveal className="lg:col-span-4" delay={0.1}>
            <div className="space-y-8">
              {/* Currently Learning Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[rgba(8,11,16,0.08)] shadow-card space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-[rgba(8,11,16,0.08)]">
                  <Sparkles className="h-4 w-4 text-[#4FA8DE]" />
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#080B10]">
                    Currently Learning &amp; Expanding
                  </h3>
                </div>

                {skillsData.currentlyLearning.map((group) => (
                  <div key={group.title} className="space-y-3">
                    <p className="text-xs text-[#080B10]/65 font-sans leading-relaxed">
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

              {/* Tools and Environments Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[rgba(8,11,16,0.08)] shadow-card space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-[rgba(8,11,16,0.08)]">
                  <Wrench className="h-4 w-4 text-[#080B10]/60" />
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#080B10]">
                    Tools &amp; Environments
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
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
          </MotionReveal>
        </div>
      </Container>
    </section>
  );
}
