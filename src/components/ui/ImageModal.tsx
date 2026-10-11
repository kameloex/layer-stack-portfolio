"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  caption?: string;
}

export function ImageModal({
  isOpen,
  onClose,
  src,
  alt,
  caption,
}: ImageModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full max-h-[90vh] bg-[#080B10] border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-[#080B10]">
          <div className="flex items-center gap-2 text-xs font-mono text-white/70">
            <span className="h-2 w-2 rounded-full bg-[#77CFFF]"></span>
            <span className="truncate max-w-md">{alt}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close image preview"
            className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Image Body */}
        <div className="relative w-full flex-1 min-h-[300px] sm:min-h-[500px] bg-black/50 flex items-center justify-center p-2 sm:p-4">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />
        </div>

        {/* Modal Footer Caption */}
        {caption && (
          <div className="px-5 py-3 border-t border-white/10 bg-[#080B10] text-xs font-sans text-white/60">
            {caption}
          </div>
        )}
      </div>
    </div>
  );
}
