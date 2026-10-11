"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useCapabilities } from "@/lib/capabilities";
import { Layout, Terminal, Cpu, Box, EyeOff } from "lucide-react";

// Lazy-load the 3D canvas so Three.js is NEVER bundled into the initial HTML/critical bundle
const LayerStackScene = dynamic(() => import("./LayerStackScene"), {
  ssr: false,
  loading: () => <SchematicFallback />,
});

// Accessible 2D Static Fallback (Reserves identical dimensions for zero layout shift)
export function SchematicFallback({ reason }: { reason?: string | null }) {
  return (
    <div
      role="region"
      aria-label="2D Layer Stack Schematic Diagram"
      className="relative w-full aspect-[4/3] sm:aspect-square md:aspect-[4/3] p-6 rounded-3xl bg-[#F5F7FA] border border-[rgba(8,11,16,0.08)] shadow-card flex flex-col justify-between"
    >
      <div className="flex items-center justify-between text-xs font-mono text-[#080B10]/50 pb-3 border-b border-[rgba(8,11,16,0.08)]">
        <div className="flex items-center gap-2">
          <Box className="h-4 w-4 text-[#4FA8DE]" />
          <span>ARCHITECTURAL STACK</span>
        </div>
        <span className="text-[#4FA8DE] font-semibold">
          {reason ? "2D SCHEMATIC MODE" : "INITIALIZING STACK..."}
        </span>
      </div>

      {/* Layer 3: Presentation Plane */}
      <div className="p-3.5 rounded-2xl bg-white border border-[rgba(8,11,16,0.1)] shadow-sm flex items-start gap-3.5 hover:border-[#77CFFF] transition-colors">
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
      <div className="p-3.5 rounded-2xl bg-white border border-[rgba(8,11,16,0.1)] shadow-sm flex items-start gap-3.5 hover:border-[#77CFFF] transition-colors">
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
      <div className="p-3.5 rounded-2xl bg-white border border-[rgba(8,11,16,0.1)] shadow-sm flex items-start gap-3.5 hover:border-[#77CFFF] transition-colors">
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

      <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#080B10]/50 border-t border-[rgba(8,11,16,0.06)]">
        <span>Zero layout shift static baseline</span>
        {reason && (
          <span className="flex items-center gap-1 text-[#080B10]/60">
            <EyeOff className="h-3 w-3" />
            <span>{reason}</span>
          </span>
        )}
      </div>
    </div>
  );
}

export function LayerStackDynamic() {
  const { canRender3D, reason } = useCapabilities();

  if (!canRender3D) {
    return <SchematicFallback reason={reason} />;
  }

  return <LayerStackScene />;
}
