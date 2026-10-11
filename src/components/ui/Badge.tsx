import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "inverted" | "live" | "unpublished";
  children: React.ReactNode;
}

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium rounded-full select-none transition-colors";

  const variantStyles = {
    default:
      "bg-[#F5F7FA] text-[#080B10]/80 border border-[rgba(8,11,16,0.08)]",
    accent:
      "bg-[#D9F2FD] text-[#080B10] border border-[#77CFFF]",
    inverted:
      "bg-white/10 text-white border border-white/15",
    live:
      "bg-[#F5F7FA] text-[#080B10] border border-[rgba(8,11,16,0.12)]",
    unpublished:
      "bg-[#F5F7FA] text-[#080B10]/70 border border-dashed border-[rgba(8,11,16,0.2)]",
  };

  return (
    <span className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {variant === "live" && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#77CFFF] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4FA8DE]"></span>
        </span>
      )}
      {children}
    </span>
  );
}
