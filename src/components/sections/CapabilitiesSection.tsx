import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      aria-label="Core Capabilities"
      className="w-full py-20 sm:py-32 border-b border-[rgba(8,11,16,0.08)] bg-white"
    >
      <Container>
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-mono font-semibold tracking-wider text-[#080B10]/50 uppercase mb-3 block">
                Section 02 // Core Competencies
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#080B10]">
                Capabilities
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#080B10]/70 max-w-lg font-sans leading-relaxed">
              Technical domains grounded in verified project implementation, spanning responsive platforms, client-side state, and connected hardware.
            </p>
          </div>
        </MotionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.capabilities.map((cap, idx) => (
            <MotionReveal key={cap.id} delay={idx * 0.1}>
              <div className="p-8 rounded-3xl border border-[rgba(8,11,16,0.08)] bg-[#F5F7FA] shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#080B10]/40 mb-6 pb-3 border-b border-[rgba(8,11,16,0.08)]">
                    <span>DISCIPLINE 0{idx + 1}</span>
                    <span className="text-[#4FA8DE] font-semibold">VERIFIED</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#080B10] mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-sm font-sans text-[#080B10]/75 mb-6 leading-relaxed">
                    {cap.description}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {cap.keyHighlights.map((hl) => (
                      <div
                        key={hl}
                        className="text-xs text-[#080B10]/80 flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#4FA8DE] shrink-0 mt-0.5" />
                        <span className="leading-snug">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[rgba(8,11,16,0.08)]">
                  <span className="text-[11px] font-mono text-[#080B10]/50 uppercase tracking-wider block mb-2">
                    Demonstrated in:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {cap.supportingProjects.map((pSlug) => (
                      <Link
                        key={pSlug}
                        href={`/work/${pSlug}`}
                        className="inline-flex items-center gap-1 text-xs font-mono font-medium text-[#080B10] hover:text-[#005777] bg-white px-3 py-1 rounded-full border border-[rgba(8,11,16,0.08)] hover:border-[#77CFFF] transition-colors"
                      >
                        <span>
                          {pSlug === "batu-university-portal"
                            ? "Portal"
                            : pSlug === "payngo-smart-cart"
                            ? "PAYNGO"
                            : "Hub"}
                        </span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
