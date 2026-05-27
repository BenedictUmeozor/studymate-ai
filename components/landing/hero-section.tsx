"use client";

import React from "react";
import WorkspaceMockup from "./workspace-mockup";
import { ArrowRight, ChevronRight, Play } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      {/* Background glow constraints (subtle) */}
      <div className="absolute top-0 left-1/2 -z-10 h-[500px] w-[1000px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(39,39,42,0.15),transparent_60%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text copy & CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 text-left">
            {/* Version Announcement Badge */}
            <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-[11px] font-medium text-zinc-400 font-mono tracking-tight transition-all duration-300 hover:border-zinc-700 select-none">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
              <span>StudyMate AI v1.0 is now live</span>
              <ChevronRight className="h-3 w-3 text-zinc-600" />
            </div>

            {/* Premium Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight sm:leading-none">
              Turn your study materials into an AI-powered learning workspace.
            </h1>

            {/* Subheadline with readable paragraph width */}
            <p className="text-[14px] sm:text-base leading-relaxed text-zinc-400 font-normal max-w-md">
              Upload lecture notes, textbooks, and academic PDFs. Ask questions, generate summaries, and practice with source-backed quizzes built from your own materials.
            </p>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button className="flex items-center justify-center gap-2 rounded bg-white text-black hover:bg-zinc-200 text-xs sm:text-sm font-semibold h-11 px-6 shadow transition-all duration-200 active:scale-98">
                <span>Start studying</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <button 
                onClick={() => scrollToSection("demo")}
                className="flex items-center justify-center gap-2 rounded border border-zinc-800 bg-zinc-950 text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-900/40 text-xs sm:text-sm font-semibold h-11 px-6 transition-all duration-200"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>View product demo</span>
              </button>
            </div>

            {/* Trust Microcopy */}
            <div className="flex items-center gap-2 pt-4 border-t border-zinc-900/60 w-fit select-none">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-950 border border-zinc-900">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs text-zinc-500 font-medium">
                Powered by source-backed answers — not generic AI guesses.
              </span>
            </div>
          </div>

          {/* Right Column: Premium Interactive Workspace Mockup */}
          <div className="lg:col-span-7 w-full flex justify-center">
            <div className="w-full max-w-2xl lg:max-w-none">
              <WorkspaceMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
