"use client";

import React, { useState } from "react";
import { Check, ShieldCheck, Sparkles, HelpCircle, BookOpen, Layers } from "lucide-react";

export default function DemoPreview() {
  const [quizSize, setQuizSize] = useState(10);
  const [difficulty, setDifficulty] = useState<"Easy" | "Medium" | "Hard">("Medium");

  const bulletPoints = [
    { label: "Grounded document answers", desc: "Every response is directly tied to your uploaded coursework." },
    { label: "Automatic summary generation", desc: "Condense long readings into concise outline structures." },
    { label: "Custom study quiz generation", desc: "Build source-backed practice assessments on demand." },
    { label: "Citation visibility", desc: "Easily inspect absolute page-level extracts with a single click." },
    { label: "Organized study workspace", desc: "A clean, dark workspace built for heavy academic workflows." }
  ];

  return (
    <section id="demo" className="w-full py-20 md:py-28 relative border-b border-border bg-section">
      <div className="absolute top-0 right-0 -z-10 h-[400px] w-[600px] bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.01),transparent_50%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
          {/* Left Column: Text copy & bullets */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-[11px] font-semibold text-text-muted font-mono tracking-wider uppercase">PRODUCT COMPARISON</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary leading-tight">
                More than a chatbot.
              </h2>
            </div>
            
            <p className="text-xs sm:text-sm leading-relaxed text-text-secondary font-normal">
              StudyMate AI is a highly structured, context-aware academic workspace. Unlike generic AI chat tools that make guesses, StudyMate keeps your own materials grounded and easily navigable.
            </p>

            {/* Bullets List */}
            <div className="space-y-4 pt-2">
              {bulletPoints.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-card border border-border text-text-primary mt-0.5 flex-shrink-0">
                    <Check className="h-3 w-3 text-text-primary" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-[13px] font-semibold text-text-primary tracking-tight">{item.label}</h4>
                    <p className="text-xs text-text-muted font-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Quiz Generator Custom Mockup */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-md rounded-2xl border border-border bg-card p-5 shadow-[0_0_50px_-12px_rgba(255,255,255,0.03),_0_25px_50px_-12px_rgba(0,0,0,0.5)] font-sans text-text-secondary select-none">
              {/* Mock Header */}
              <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-text-muted" />
                  <span className="text-xs font-semibold text-text-primary tracking-wide uppercase font-mono">Quiz Generator</span>
                </div>
                <span className="text-[10px] text-text-muted font-mono">ACTIVE_DOC: Page 1-28</span>
              </div>

              {/* Mock Config Parameters */}
              <div className="space-y-4 bg-background border border-border rounded-xl p-4 mb-4">
                {/* Parameter 1: Question Count */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-text-muted font-medium">Questions</span>
                    <span className="text-text-primary font-mono">{quizSize}</span>
                  </div>
                  <div className="flex items-center gap-1.5 pt-1">
                    {[5, 10, 15, 20].map((num) => (
                      <button
                        key={num}
                        onClick={() => setQuizSize(num)}
                        className={`flex-1 text-[10px] py-1 border rounded-lg transition-all duration-200 font-mono ${
                          quizSize === num
                            ? "bg-white text-black font-semibold border-white"
                            : "bg-transparent text-text-muted border-border hover:text-text-secondary hover:border-border-strong hover:bg-card-hover/40"
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Parameter 2: Difficulty */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-text-muted font-medium">Difficulty Level</span>
                    <span className="text-text-primary font-mono">{difficulty}</span>
                  </div>
                  <div className="flex items-center gap-1.5 pt-1">
                    {([`Easy`, `Medium`, `Hard`] as const).map((level) => (
                      <button
                        key={level}
                        onClick={() => setDifficulty(level)}
                        className={`flex-1 text-[10px] py-1 border rounded-lg transition-all duration-200 font-mono ${
                          difficulty === level
                            ? "bg-white text-black font-semibold border-white"
                            : "bg-transparent text-text-muted border-border hover:text-text-secondary hover:border-border-strong hover:bg-card-hover/40"
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Parameter 3: Type */}
                <div className="flex justify-between items-center text-xs">
                  <span className="text-text-muted font-medium">Question Formats</span>
                  <span className="text-text-secondary bg-background border border-border px-2 py-0.5 rounded-md text-[10px] font-mono">
                    Mixed (MCQ + Theory)
                  </span>
                </div>
              </div>

              {/* Output Preview */}
              <div className="space-y-3.5 border-t border-separator pt-4">
                <div className="text-[10px] font-semibold text-text-muted font-mono tracking-wide uppercase">GENERATED QUIZ PREVIEW</div>

                <div className="rounded-xl border border-border bg-background p-3.5 text-xs shadow-inner">
                  <div className="text-text-primary font-medium mb-2.5 leading-relaxed">
                    Question 3: In behavioral commerce, how does selective perception manifest during information acquisition?
                  </div>
                  
                  <div className="space-y-1.5">
                    <div className="rounded-lg border border-border bg-card p-2 text-[11px] text-text-muted flex items-center justify-between">
                      <span>A) Complete absorption of non-critical stimuli</span>
                      <span>0%</span>
                    </div>

                    <div className="rounded-lg border border-border-strong bg-card-hover p-2 text-[11px] text-text-primary flex items-center justify-between font-medium">
                      <span>B) Filtering and distortion of facts to align with pre-existing beliefs</span>
                      <span className="text-[9px] font-mono text-emerald-500 bg-emerald-500/5 px-1.5 py-0.5 border border-emerald-500/10 rounded-md font-semibold">CORRECT</span>
                    </div>

                    <div className="rounded-lg border border-border bg-card p-2 text-[11px] text-text-muted flex items-center justify-between">
                      <span>C) Objective evaluation of competitor specs</span>
                      <span>0%</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-separator flex items-center justify-between text-[10px] text-text-muted font-mono">
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3 text-text-muted" />
                      Source: Page 18
                    </span>
                    <span className="text-text-muted">Verification Match: 98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
