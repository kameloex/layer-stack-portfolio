import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, getProjectBySlug, Project } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Placeholder } from "@/components/ui/Placeholder";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ShieldAlert,
  CheckCircle2,
  Code2,
  Layers,
  Terminal,
} from "lucide-react";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Ahmed Kamel Case Study`,
    description: project.cardDescription,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find next project in circular order
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="w-full flex flex-col pt-24 sm:pt-32 pb-24">
      {/* 1. HEADER / BREADCRUMBS */}
      <section className="w-full pb-12 border-b border-[rgba(8,11,16,0.08)]">
        <Container>
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#080B10]/60 mb-8">
            <Link
              href="/#work"
              className="hover:text-[#080B10] flex items-center gap-1 transition-colors"
            >
              <ArrowLeft className="h-3 w-3" />
              <span>Selected Work</span>
            </Link>
            <span>/</span>
            <span className="text-[#080B10] font-medium truncate">{project.title}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <Badge
                  variant={project.status === "live" ? "live" : "unpublished"}
                >
                  {project.status === "live" ? "Live Demo Verified" : "Demo Coming Soon"}
                </Badge>
                <span className="text-xs font-mono text-[#080B10]/50">
                  SYSTEM STUDY // {project.slug.toUpperCase()}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-[#080B10]">
                {project.title}
              </h1>

              <p className="text-base sm:text-xl text-[#080B10]/75 font-sans leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {project.demo ? (
                <Button href={project.demo.url} external variant="primary" size="lg">
                  <span>Launch Live System</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              ) : (
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F5F7FA] border border-dashed border-[rgba(8,11,16,0.2)] text-xs font-mono text-[#080B10]/70">
                  <span className="h-2 w-2 rounded-full bg-[#4FA8DE]"></span>
                  <span>Demo Coming Soon</span>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* 2. SPECIFICATION MATRIX */}
      <section className="w-full py-8 border-b border-[rgba(8,11,16,0.08)] bg-[#F5F7FA]">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono">
            <div>
              <span className="text-[#080B10]/40 uppercase tracking-wider block mb-1">
                SYSTEM STATUS
              </span>
              <span className="text-[#080B10] font-semibold">
                {project.status === "live" ? "Public / Live on GitHub Pages" : "Unpublished / Demo in Prep"}
              </span>
            </div>

            <div>
              <span className="text-[#080B10]/40 uppercase tracking-wider block mb-1">
                ROLE &amp; CONTRIBUTION
              </span>
              <span className="text-[#080B10] font-semibold">
                {project.role ? "Software & Systems Development" : "Individual Contributor"}
              </span>
            </div>

            <div>
              <span className="text-[#080B10]/40 uppercase tracking-wider block mb-1">
                LAST VERIFIED
              </span>
              <span className="text-[#080B10] font-semibold">
                {project.demo ? project.demo.verifiedOn : "October 2026"}
              </span>
            </div>

            <div>
              <span className="text-[#080B10]/40 uppercase tracking-wider block mb-1">
                CORE STACK
              </span>
              <span className="text-[#080B10] font-semibold">
                {project.technologies.slice(0, 3).join(", ")}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. HERO COVER SCREENSHOT */}
      <section className="w-full py-12 border-b border-[rgba(8,11,16,0.08)]">
        <Container>
          <div className="rounded-3xl border border-[rgba(8,11,16,0.1)] bg-[#F5F7FA] p-3 sm:p-4 shadow-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2.5 bg-white rounded-t-2xl border-b border-[rgba(8,11,16,0.06)] text-xs font-mono text-[#080B10]/50 mb-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#080B10]/20"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#080B10]/20"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#080B10]/20"></span>
              </div>
              <span className="truncate max-w-sm">
                {project.demo ? project.demo.url : `file://localhost/${project.slug}`}
              </span>
              <span className="text-[#4FA8DE]">PRIMARY CAPTURE</span>
            </div>

            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-white">
              {project.media[0] ? (
                <Image
                  src={project.media[0].src}
                  alt={project.media[0].alt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  priority
                />
              ) : (
                <Placeholder label="Primary Cover Capture" />
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. OVERVIEW & HONESTY NOTICE */}
      <section className="w-full py-16 border-b border-[rgba(8,11,16,0.08)] bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Overview text & Role */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#080B10]/50 uppercase">
                <Layers className="h-4 w-4 text-[#4FA8DE]" />
                <span>Context &amp; System Purpose</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#080B10]">
                Overview
              </h2>
              <p className="text-base text-[#080B10]/80 font-sans leading-relaxed">
                {project.longDescription}
              </p>

              {project.role && (
                <div className="p-6 rounded-2xl bg-[#F5F7FA] border border-[rgba(8,11,16,0.08)] space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#080B10]/60 font-semibold block">
                    Ahmed&apos;s Engineering Role
                  </span>
                  <p className="text-sm text-[#080B10]/85 font-sans leading-relaxed">
                    {project.role}
                  </p>
                </div>
              )}
            </div>

            {/* Right: Honesty Note & Rules Alignment */}
            <div className="lg:col-span-5 space-y-6">
              {project.honestyNote && (
                <div className="p-6 rounded-2xl bg-[#D9F2FD]/40 border border-[#77CFFF] text-[#080B10] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#005777]">
                    <ShieldAlert className="h-4 w-4 text-[#4FA8DE]" />
                    <span>Engineering Honesty Note</span>
                  </div>
                  <p className="text-xs sm:text-sm font-sans leading-relaxed text-[#080B10]/80">
                    {project.honestyNote}
                  </p>
                </div>
              )}

              {project.demoNote && (
                <div className="p-6 rounded-2xl bg-[#F5F7FA] border border-[rgba(8,11,16,0.08)] space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#080B10]/60 font-semibold block">
                    Demo Access Note
                  </span>
                  <p className="text-xs sm:text-sm font-sans leading-relaxed text-[#080B10]/80">
                    {project.demoNote}
                  </p>
                </div>
              )}

              {/* Technologies Applied */}
              <div className="p-6 rounded-2xl bg-[#F5F7FA] border border-[rgba(8,11,16,0.08)] space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#080B10]/60 font-semibold block">
                  Technologies Applied
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-white text-[#080B10] border border-[rgba(8,11,16,0.08)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. WORKFLOWS & IMPLEMENTATION HIGHLIGHTS */}
      <section className="w-full py-16 border-b border-[rgba(8,11,16,0.08)] bg-[#F5F7FA]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Key Features & Workflows */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#080B10]/50 uppercase">
                <Terminal className="h-4 w-4 text-[#4FA8DE]" />
                <span>System Workflows</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#080B10]">
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-[rgba(8,11,16,0.08)] text-xs sm:text-sm text-[#080B10]/80 flex items-start gap-3 shadow-2xs"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#4FA8DE] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Implementation Highlights */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#080B10]/50 uppercase">
                <Code2 className="h-4 w-4 text-[#4FA8DE]" />
                <span>Engineering Execution</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#080B10]">
                Implementation Highlights
              </h2>
              <div className="space-y-3">
                {project.implementationHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-[rgba(8,11,16,0.08)] text-xs sm:text-sm text-[#080B10]/80 shadow-2xs space-y-1.5"
                  >
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#080B10]">
                      <span className="text-[#4FA8DE]">0{idx + 1} {"//"}</span>
                      <span>Execution Detail</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#080B10]/75 font-sans leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. SCREENSHOT GALLERY */}
      <section className="w-full py-16 border-b border-[rgba(8,11,16,0.08)] bg-white">
        <Container>
          <div className="mb-12">
            <span className="text-xs font-mono font-semibold tracking-wider text-[#080B10]/50 uppercase mb-2 block">
              Visual Verification // Screenshot Gallery
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#080B10]">
              System Views &amp; Captures
            </h2>
            <p className="text-sm text-[#080B10]/60 max-w-xl font-sans mt-2">
              Real screenshots from the live application and interface stages. No simulated or artificial stock imagery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.media.map((mediaItem, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[rgba(8,11,16,0.1)] bg-[#F5F7FA] p-3 shadow-card space-y-3"
              >
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-white border border-[rgba(8,11,16,0.06)]">
                  <Image
                    src={mediaItem.src}
                    alt={mediaItem.alt}
                    fill
                    className="object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="px-2 pb-1">
                  <span className="text-[11px] font-mono text-[#080B10]/40 uppercase block mb-0.5">
                    VIEW 0{idx + 1}
                  </span>
                  <p className="text-xs font-sans text-[#080B10]/75 leading-relaxed">
                    {mediaItem.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. NEXT PROJECT NAVIGATOR */}
      <section className="w-full pt-16">
        <Container>
          <div className="p-8 sm:p-12 rounded-3xl bg-[#F5F7FA] border border-[rgba(8,11,16,0.08)] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono text-[#080B10]/50 uppercase tracking-wider block mb-2">
                NEXT IN STACK
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#080B10]">
                {nextProject.title}
              </h3>
              <p className="text-sm text-[#080B10]/70 font-sans mt-1">
                {nextProject.tagline}
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <Button href={`/work/${nextProject.slug}`} variant="primary" size="lg">
                <span>View Next Project</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
