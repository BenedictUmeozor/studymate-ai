"use client";

import React from "react";
import { MessageSquare, Sparkles, HelpCircle, BookOpen } from "lucide-react";

export default function FeatureGrid() {
  const features = [
    {
      icon: MessageSquare,
      title: "Chat with your documents",
      description: "Ask natural questions and receive immediate, grounded answers based directly on your uploaded research notes, papers, or textbooks."
    },
    {
      icon: Sparkles,
      title: "Generate smart summaries",
      description: "Transform dense chapters and complex academic papers into highly structured outlines, key revision concepts, and clear takeaway notes."
    },
    {
      icon: HelpCircle,
      title: "Practice with AI quizzes",
      description: "Generate customized multiple-choice, select-all, or theory practice questions dynamically extracted from your uploaded readings."
    },
    {
      icon: BookOpen,
      title: "Source-backed answers",
      description: "Every explanation or answer features instant page-level references and supporting text excerpts, eliminating hallucinations."
    }
  ];

  return (
    <section id="features" className="w-full py-20 md:py-28 relative border-b border-zinc-900 bg-black">
      {/* Background radial gradients for section layout depth */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(27,27,27,0.1),transparent_40%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-[11px] font-semibold text-zinc-500 font-mono tracking-wider uppercase">FEATURES</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-2">
            Everything you need to study faster.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 font-normal mt-3 max-w-md mx-auto leading-relaxed">
            All the tools required to parse complex materials, verify sources, and test your understanding in a clean, unified workspace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-lg border border-zinc-900 bg-zinc-950 p-6 md:p-8 transition-all duration-300 hover:border-zinc-800 hover:bg-zinc-950/80 hover:-translate-y-[1px]"
              >
                {/* Accent border highlight on group hover */}
                <div className="absolute inset-x-0 -top-px h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded border border-zinc-900 bg-zinc-950 text-zinc-400 transition-colors duration-300 group-hover:border-zinc-700 group-hover:text-white flex-shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  
                  <div className="space-y-1.5">
                    <h3 className="text-sm font-semibold text-white tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-xs md:text-[13px] leading-relaxed text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300 font-normal">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
