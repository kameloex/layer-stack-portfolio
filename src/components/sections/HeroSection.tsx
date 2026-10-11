import React from "react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { LayerStackDynamic } from "@/components/scene/LayerStackDynamic";

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

          {/* Right Column: Dynamic 3D Layer Stack Scene with zero-CLS fallback */}
          <div className="lg:col-span-5">
            <LayerStackDynamic />
          </div>
        </div>
      </Container>
    </section>
  );
}
