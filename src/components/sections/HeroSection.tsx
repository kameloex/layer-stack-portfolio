import React from "react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowDownRight, ArrowUpRight, Terminal, Cpu, Layout } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="w-full pt-12 pb-20 sm:pt-20 sm:pb-32 border-b border-[rgba(8,11,16,0.08)] relative overflow-hidden bg-white"
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #080B10 1px, transparent 1px), linear-gradient(to bottom, #080B10 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Status & Location Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="live">Available for Engineering Roles</Badge>
              <span className="text-xs font-mono text-[#080B10]/60">
                {siteConfig.location}
              </span>
            </div>

            {/* Single Page H1 */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-[#080B10] leading-[1.06]">
              {siteConfig.headline}
            </h1>

            {/* Supporting Line */}
            <p className="text-lg sm:text-xl text-[#080B10]/75 font-sans leading-relaxed max-w-xl">
              {siteConfig.supportingLine}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
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

          {/* Right Column: Tactile 2D Layer Stack Schematics (Works 100% without WebGL) */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-[#F5F7FA] border border-[rgba(8,11,16,0.08)] shadow-card space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#080B10]/50 pb-3 border-b border-[rgba(8,11,16,0.08)]">
                <span>ARCHITECTURAL STACK</span>
                <span className="text-[#4FA8DE]">LAYER SYSTEM</span>
              </div>

              {/* Layer 3: Presentation Plane */}
              <div className="p-4 rounded-2xl bg-white border border-[rgba(8,11,16,0.1)] shadow-sm flex items-start gap-3.5 hover:border-[#77CFFF] transition-colors">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D9F2FD] text-[#080B10] shrink-0 border border-[#77CFFF]/60">
                  <Layout className="h-4 w-4" />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold text-[#080B10]">
                      L3 // Web Platform Layer
                    </span>
                    <span className="text-[10px] font-mono text-[#080B10]/40">RTL / UI</span>
                  </div>
                  <p className="text-xs text-[#080B10]/70 font-sans mt-0.5">
                    40+ page responsive architectures, data-driven client rendering &amp; modular styling.
                  </p>
                </div>
              </div>

              {/* Layer 2: Interactive Logic Plane */}
              <div className="p-4 rounded-2xl bg-white border border-[rgba(8,11,16,0.1)] shadow-sm flex items-start gap-3.5 hover:border-[#77CFFF] transition-colors">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D9F2FD] text-[#080B10] shrink-0 border border-[#77CFFF]/60">
                  <Terminal className="h-4 w-4" />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold text-[#080B10]">
                      L2 // Application &amp; State Layer
                    </span>
                    <span className="text-[10px] font-mono text-[#080B10]/40">LOGIC</span>
                  </div>
                  <p className="text-xs text-[#080B10]/70 font-sans mt-0.5">
                    Debounced scan pipelines, client-side Luhn verification &amp; Canvas visualisations.
                  </p>
                </div>
              </div>

              {/* Layer 1: Hardware & Persistence Plane */}
              <div className="p-4 rounded-2xl bg-white border border-[rgba(8,11,16,0.1)] shadow-sm flex items-start gap-3.5 hover:border-[#77CFFF] transition-colors">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D9F2FD] text-[#080B10] shrink-0 border border-[#77CFFF]/60">
                  <Cpu className="h-4 w-4" />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold text-[#080B10]">
                      L1 // Connected Systems &amp; Data
                    </span>
                    <span className="text-[10px] font-mono text-[#080B10]/40">HARDWARE</span>
                  </div>
                  <p className="text-xs text-[#080B10]/70 font-sans mt-0.5">
                    Raspberry Pi, Arduino microcontrollers, MySQL &amp; real-time sensor loops.
                  </p>
                </div>
              </div>

              <div className="pt-2 text-center">
                <span className="text-[11px] font-mono text-[#080B10]/40">
                  Engineered for high performance with zero runtime bloat
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
