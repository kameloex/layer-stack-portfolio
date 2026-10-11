import React from "react";
import { journeyData } from "@/data/journey";
import { Container } from "@/components/ui/Container";
import { Milestone, Briefcase, GraduationCap, Code2, Users } from "lucide-react";

export function JourneySection() {
  if (!journeyData || journeyData.length === 0) return null;

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "training":
        return <Code2 className="h-4 w-4 text-[#4FA8DE]" />;
      case "education":
        return <GraduationCap className="h-4 w-4 text-[#4FA8DE]" />;
      case "freelance":
        return <Briefcase className="h-4 w-4 text-[#4FA8DE]" />;
      case "experience":
      default:
        return <Users className="h-4 w-4 text-[#4FA8DE]" />;
    }
  };

  return (
    <section
      id="journey"
      aria-label="Experience and Education"
      className="w-full py-20 sm:py-32 border-b border-[rgba(8,11,16,0.08)] bg-white"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#080B10]/50 uppercase mb-3">
              <Milestone className="h-4 w-4 text-[#4FA8DE]" />
              <span>Section 04 // Experience &amp; Education</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#080B10]">
              Journey
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#080B10]/70 max-w-lg font-sans leading-relaxed">
            Verified milestones across engineering training, corporate IT operations, freelance web development, educational initiatives, and university coursework.
          </p>
        </div>

        {/* Chronological Timeline */}
        <div className="max-w-4xl space-y-6">
          {journeyData.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl border border-[rgba(8,11,16,0.08)] bg-[#F5F7FA] shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[rgba(8,11,16,0.08)] mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-[rgba(8,11,16,0.1)] shadow-2xs">
                    {getTypeIcon(item.type)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-display font-bold text-[#080B10]">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono text-[#080B10]/60">
                      {item.organization}
                      {item.location && ` • ${item.location}`}
                    </div>
                  </div>
                </div>

                <div className="sm:text-right">
                  <span className="inline-block px-3 py-1 rounded-full bg-white text-[#080B10] border border-[rgba(8,11,16,0.1)] text-xs font-mono font-medium">
                    {item.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-2">
                {item.highlights.map((hl, hIdx) => (
                  <li
                    key={hIdx}
                    className="text-xs sm:text-sm text-[#080B10]/75 flex items-start gap-2.5 font-sans leading-relaxed"
                  >
                    <span className="text-[#4FA8DE] font-mono text-xs mt-0.5">•</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
