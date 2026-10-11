import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-24 sm:py-32">
      <Container size="narrow" className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[rgba(8,11,16,0.08)] text-xs font-mono mb-6">
          <span>STATUS: 404_NOT_FOUND</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-[#080B10] mb-4">
          Layer not found
        </h1>
        <p className="text-base sm:text-lg text-[#080B10]/70 max-w-md mx-auto mb-8 font-sans">
          The requested coordinate or project path does not exist in this stack.
        </p>
        <div>
          <Button href="/" variant="primary">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Return to Overview
          </Button>
        </div>
      </Container>
    </div>
  );
}
