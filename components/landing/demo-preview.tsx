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
    <section id="demo" className="w-full py-20 md:py-28 relative border-b border-zinc-900 bg-black">
      <div className="absolute top-0 right-0 -z-10 h-[400px] w-[600px] bg-[radial-gradient(circle_at_bottom_right,rgba(39,39,42,0.1),transparent_50%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
          {/* Left Column: Text copy & bullets */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-[11px] font-semibold text-zinc-500 font-mono tracking-wider uppercase">PRODUCT COMPARISON</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                More than a chatbot.
              </h2>
            </div>
            
            <p className="text-xs sm:text-sm leading-relaxed text-zinc-400 font-normal">
              StudyMate AI is a highly structured, context-aware academic workspace. Unlike generic AI chat tools that make guesses, StudyMate keeps your own materials grounded and easily navigable.
            </p>

            {/* Bullets List */}
            <div className="space-y-4 pt-2">
              {bulletPoints.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-950 border border-zinc-800 text-zinc-300 mt-0.5 flex-shrink-0">
                    <Check className="h-3 w-3 text-zinc-200" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-[13px] font-semibold text-white tracking-tight">{item.label}</h4>
                    <p className="text-xs text-zinc-500 font-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Quiz Generator Custom Mockup */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-md rounded-lg border border-zinc-800/80 bg-zinc-950/80 p-5 shadow-2xl font-sans text-zinc-300 select-none">
              {/* Mock Header */}
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-zinc-400" />
                  <span className="text-xs font-semibold text-white tracking-wide uppercase font-mono">Quiz Generator</span>
                </div>
                <span className="text-[10px] text-zinc-500 font-mono">ACTIVE_DOC: Page 1-28</span>
              </div>

              {/* Mock Config Parameters */}
              <div className="space-y-4 bg-black/40 border border-zinc-900/60 rounded p-4 mb-4">
                {/* Parameter 1: Question Count */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-zinc-400 font-medium">Questions</span>
                    <span className="text-white font-mono">{quizSize}</span>
                  </div>
                  <div className="flex items-center gap-1.5 pt-1">
                    {[5, 10, 15, 20].map((num) => (
                      <button
                        key={num}
                        onClick={() => setQuizSize(num)}
                        className={`flex-1 text-[10px] py-1 border rounded transition-all duration-200 font-mono ${
                          quizSize === num
                            ? "bg-white text-black font-semibold border-white"
                            : "bg-transparent text-zinc-500 border-zinc-900 hover:text-zinc-300 hover:border-zinc-800"
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
                    <span className="text-zinc-400 font-medium">Difficulty Level</span>
                    <span className="text-white font-mono">{difficulty}</span>
                  </div>
                  <div className="flex items-center gap-1.5 pt-1">
                    {(["Easy", "Medium", "Hard"] as const).map((level) => (
                      <button
                        key={level}
                        onClick={() => setDifficulty(level)}
                        className={`flex-1 text-[10px] py-1 border rounded transition-all duration-200 font-mono ${
                          difficulty === level
                            ? "bg-white text-black font-semibold border-white"
                            : "bg-transparent text-zinc-500 border-zinc-900 hover:text-zinc-300 hover:border-zinc-800"
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Parameter 3: Type */}
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-400 font-medium">Question Formats</span>
                  <span className="text-zinc-300 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-[10px] font-mono">
                    Mixed (MCQ + Theory)
                  </span>
                </div>
              </div>

              {/* Output Preview */}
              <div className="space-y-3.5 border-t border-zinc-900/60 pt-4">
                <div className="text-[10px] font-semibold text-zinc-500 font-mono tracking-wide uppercase">GENERATED QUIZ PREVIEW</div>

                <div className="rounded border border-zinc-900 bg-zinc-950 p-3.5 text-xs">
                  <div className="text-zinc-200 font-medium mb-2.5 leading-relaxed">
                    Question 3: In behavioral commerce, how does selective perception manifest during information acquisition?
                  </div>
                  
                  <div className="space-y-1.5">
                    <div className="rounded border border-zinc-900 bg-zinc-950 p-2 text-[11px] text-zinc-500 flex items-center justify-between">
                      <span>A) Complete absorption of non-critical stimuli</span>
                      <span>0%</span>
                    </div>

                    <div className="rounded border border-zinc-800 bg-zinc-900/40 p-2 text-[11px] text-zinc-200 flex items-center justify-between font-medium">
                      <span>B) Filtering and distortion of facts to align with pre-existing beliefs</span>
                      <span className="text-[9px] font-mono text-emerald-500 bg-emerald-500/5 px-1 py-0.1 border border-emerald-500/10 rounded">CORRECT</span>
                    </div>

                    <div className="rounded border border-zinc-900 bg-zinc-950 p-2 text-[11px] text-zinc-500 flex items-center justify-between">
                      <span>C) Objective evaluation of competitor specs</span>
                      <span>0%</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-zinc-900/80 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3 text-zinc-600" />
                      Source: Page 18
                    </span>
                    <span className="text-zinc-600">Verification Match: 98%</span>
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
