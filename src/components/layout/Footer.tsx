import React from "react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="w-full bg-[#080B10] text-white py-12 sm:py-16 border-t border-[rgba(255,255,255,0.12)]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-[rgba(255,255,255,0.12)]">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#080B10] text-xs font-mono font-bold">
                AK
              </span>
              <span className="font-display font-semibold text-lg tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-white/60 max-w-md font-sans">
              {siteConfig.role} based in {siteConfig.location}. Building digital systems that connect ideas to real experiences.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-medium hover:bg-white hover:text-[#080B10] transition-colors border border-white/15"
              aria-label="Email Ahmed Kamel"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Email</span>
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-medium hover:bg-white hover:text-[#080B10] transition-colors border border-white/15"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-medium hover:bg-white hover:text-[#080B10] transition-colors border border-white/15"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="h-3.5 w-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 text-xs font-mono text-white/50">
          <div className="flex flex-wrap gap-4 items-center">
            <span>© {new Date().getFullYear()} {siteConfig.name}</span>
            <span>•</span>
            <span>Alexandria, Egypt (EET)</span>
            <span>•</span>
            <span className="text-white/40">WCAG AA Compliant</span>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
