import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "inverted";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none select-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 rounded-full gap-1.5",
    md: "text-sm px-5 py-2.5 rounded-full gap-2",
    lg: "text-base px-6 py-3 rounded-full gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#080B10] text-white hover:bg-black hover:-translate-y-0.5 shadow-sm active:translate-y-0",
    secondary:
      "bg-[#F5F7FA] text-[#080B10] border border-[rgba(8,11,16,0.12)] hover:bg-[#E6E8EB] hover:border-[#080B10] active:translate-y-0",
    outline:
      "bg-transparent text-[#080B10] border border-[rgba(8,11,16,0.18)] hover:bg-[#F5F7FA] hover:border-[#080B10]",
    ghost:
      "bg-transparent text-[#080B10] hover:bg-[#D9F2FD]/50 active:bg-[#D9F2FD]",
    inverted:
      "bg-white text-[#080B10] hover:bg-[#F5F7FA] hover:-translate-y-0.5 active:translate-y-0 shadow-sm",
  };

  const combinedClassName = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
