"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="w-full py-24 md:py-32 relative border-b border-border bg-background">
      {/* Background visual detail */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[350px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.015),transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-[11px] font-semibold text-text-muted font-mono tracking-wider uppercase">GET STARTED</span>
        
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary max-w-lg mx-auto leading-tight">
          Start studying with context-aware AI.
        </h2>
        
        <p className="text-xs sm:text-sm text-text-secondary font-normal max-w-md mx-auto leading-relaxed">
          Upload your first study material and turn it into an interactive, source-backed learning workspace in seconds.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-white text-black hover:bg-zinc-200 text-xs sm:text-sm font-semibold h-11 px-6 shadow transition-all duration-200 active:scale-98">
            <span>Start studying</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg border border-border bg-card text-text-secondary hover:text-text-primary hover:border-border-strong hover:bg-card-hover text-xs sm:text-sm font-semibold h-11 px-6 transition-all duration-200">
            <span>Sign in</span>
          </button>
        </div>
      </div>
    </section>
  );
}
