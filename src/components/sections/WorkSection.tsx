import React from "react";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { PortalCard } from "@/components/projects/PortalCard";
import { PayngoCard } from "@/components/projects/PayngoCard";
import { HubCard } from "@/components/projects/HubCard";
import { Layers } from "lucide-react";

export function WorkSection() {
  const portal = projects.find((p) => p.slug === "batu-university-portal");
  const payngo = projects.find((p) => p.slug === "payngo-smart-cart");
  const hub = projects.find((p) => p.slug === "batu-projects-hub");

  return (
    <section
      id="work"
      aria-label="Selected Work"
      className="w-full py-20 sm:py-32 border-b border-[rgba(8,11,16,0.08)] bg-[#F5F7FA]"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#080B10]/50 uppercase mb-3">
              <Layers className="h-4 w-4 text-[#4FA8DE]" />
              <span>Section 01 // Systems Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#080B10]">
              Selected Work
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#080B10]/70 max-w-lg font-sans leading-relaxed">
            Three verified software systems staged as distinct experiences: an enterprise university platform, an embedded smart cart touchscreen, and an engineering knowledge repository.
          </p>
        </div>

        {/* The Three Distinct Project Presentations */}
        <div className="space-y-12 sm:space-y-16">
          {portal && <PortalCard project={portal} />}
          {payngo && <PayngoCard project={payngo} />}
          {hub && <HubCard project={hub} />}
        </div>
      </Container>
    </section>
  );
}
