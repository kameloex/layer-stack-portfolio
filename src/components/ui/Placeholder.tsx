import React from "react";
import { Image as ImageIcon, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaceholderProps {
  label: string;
  sublabel?: string;
  aspectRatio?: "16/9" | "16/10" | "4/3" | "1/1";
  className?: string;
}

export function Placeholder({
  label,
  sublabel = "Asset in staging / real capture pending",
  aspectRatio = "16/10",
  className,
}: PlaceholderProps) {
  const aspectClass = {
    "16/9": "aspect-video",
    "16/10": "aspect-[16/10]",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
  }[aspectRatio];

  return (
    <div
      role="figure"
      aria-label={label}
      className={cn(
        "w-full rounded-xl border border-dashed border-[rgba(8,11,16,0.18)] bg-[#F5F7FA] p-6 flex flex-col items-center justify-center text-center select-none",
        aspectClass,
        className
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-[rgba(8,11,16,0.08)] text-[#4FA8DE] mb-3 shadow-sm">
        <ImageIcon className="h-6 w-6" />
      </div>
      <span className="text-xs font-mono font-medium text-[#080B10] uppercase tracking-wider mb-1">
        {label}
      </span>
      <span className="text-[11px] font-sans text-[#080B10]/50 max-w-xs flex items-center gap-1 justify-center">
        <AlertCircle className="h-3 w-3 shrink-0 text-[#4FA8DE]" />
        <span>{sublabel}</span>
      </span>
    </div>
  );
}
