"use client";

import React from "react";
import { ArrowUpRight, HelpCircle, FileText, MessageSquare } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: FileText,
      title: "Upload",
      description: "Add your lecture notes, textbooks, PDFs, or custom study materials."
    },
    {
      num: "02",
      icon: MessageSquare,
      title: "Ask",
      description: "Ask natural language questions directly about your uploaded material."
    },
    {
      num: "03",
      icon: ArrowUpRight,
      title: "Learn",
      description: "Receive grounded, source-backed explanations, summaries, and key concepts."
    },
    {
      num: "04",
      icon: HelpCircle,
      title: "Practice",
      description: "Generate customized practice quizzes dynamically to reinforce your understanding."
    }
  ];

  return (
    <section id="how-it-works" className="w-full py-20 md:py-28 relative border-b border-zinc-900 bg-zinc-950/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-[11px] font-semibold text-zinc-500 font-mono tracking-wider uppercase">WORKFLOW</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-2">
            How it works
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 font-normal mt-3 max-w-sm mx-auto leading-relaxed">
            Four simple steps to transition your standard academic documents into a fully collaborative learning workspace.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative">
          {/* Subtle connecting line between steps on large screens */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[1px] bg-zinc-900 -z-10" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className="group flex flex-col items-center lg:items-start text-center lg:text-left space-y-4"
              >
                {/* Step Icon Badge */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-900 bg-zinc-950 text-zinc-400 transition-all duration-300 group-hover:border-zinc-700 group-hover:text-white group-hover:shadow-md">
                  <Icon className="h-4.5 w-4.5" />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <span className="text-[10px] text-zinc-500 font-mono font-medium">{step.num}</span>
                    <h3 className="text-sm font-semibold text-white tracking-tight">{step.title}</h3>
                  </div>
                  <p className="text-xs md:text-[13px] leading-relaxed text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300 font-normal max-w-[220px]">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
