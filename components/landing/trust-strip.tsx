"use client";

import React from "react";
import { ShieldCheck, GraduationCap, UploadCloud, CheckSquare } from "lucide-react";

export default function TrustStrip() {
  const trusts = [
    { icon: ShieldCheck, text: "Source-backed answers" },
    { icon: GraduationCap, text: "Built for serious students" },
    { icon: UploadCloud, text: "Upload your own materials" },
    { icon: CheckSquare, text: "Quiz from your documents" }
  ];

  return (
    <div className="w-full border-y border-border bg-section/30 select-none py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 items-center justify-items-center">
          {trusts.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center gap-2.5 text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-card shadow-sm">
                  <Icon className="h-3.5 w-3.5 text-text-muted" />
                </div>
                <span className="text-xs font-mono tracking-tight font-medium uppercase text-text-secondary">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
