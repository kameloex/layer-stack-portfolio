"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Mail, Check, Copy, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Information"
      className="w-full py-24 sm:py-36 bg-[#080B10] text-white relative overflow-hidden"
    >
      <Container>
        <div className="max-w-3xl space-y-8">
          {/* Header Datum */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white border border-white/15 text-xs font-mono">
            <span className="h-2 w-2 rounded-full bg-[#77CFFF]"></span>
            <span>DIRECT COMMUNICATION CHANNELS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-[1.08]">
            Let&apos;s build reliable software systems together.
          </h2>

          <p className="text-base sm:text-xl text-white/70 font-sans leading-relaxed">
            Open to engineering positions, web application development, and technical collaboration. Based in Alexandria, Egypt.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button
              href={`mailto:${siteConfig.email}`}
              variant="inverted"
              size="lg"
            >
              <Mail className="h-4 w-4" />
              <span>{siteConfig.email}</span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-all border border-white/15 select-none"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-[#77CFFF]" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-white/70" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Social Profiles */}
          <div className="pt-8 border-t border-white/15 flex flex-wrap items-center gap-6 text-sm font-mono text-white/70">
            <span className="text-white/40">VERIFIED PROFILES:</span>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#77CFFF] transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
              <span>github.com/kameloex</span>
              <ArrowUpRight className="h-3 w-3 opacity-60" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#77CFFF] transition-colors"
            >
              <LinkedinIcon className="h-4 w-4" />
              <span>linkedin.com/in/ahmed-kamel-81062b2a7</span>
              <ArrowUpRight className="h-3 w-3 opacity-60" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
