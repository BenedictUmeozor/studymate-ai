"use client";

import React, { useState } from "react";
import {
  FileText,
  MessageSquare,
  Sparkles,
  Search,
  ChevronRight,
  BookOpen,
  HelpCircle,
  Link as LinkIcon,
  Bot,
  User,
  ExternalLink,
  Plus
} from "lucide-react";

export default function WorkspaceMockup() {
  const [activeTab, setActiveTab] = useState<"chat" | "summary" | "quiz" | "sources">("chat");
  const [selectedDoc, setSelectedDoc] = useState("Marketing Research PDF");

  const documents = [
    { name: "Biology 301 Notes", size: "1.2 MB", date: "2h ago" },
    { name: "Marketing Research PDF", size: "4.8 MB", date: "Yesterday", active: true },
    { name: "Scholarship Essay Draft", size: "240 KB", date: "3 days ago" },
    { name: "Econ Revision Pack", size: "3.1 MB", date: "1 week ago" }
  ];

  return (
    <div className="w-full rounded-lg border border-zinc-800/80 bg-zinc-950/80 text-zinc-300 shadow-2xl overflow-hidden font-sans select-none">
      {/* Workspace Topbar */}
      <div className="flex h-12 items-center justify-between border-b border-zinc-900 bg-zinc-950 px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-2 w-2 rounded-full bg-zinc-800" />
          <div className="flex h-2 w-2 rounded-full bg-zinc-800" />
          <div className="flex h-2 w-2 rounded-full bg-zinc-800" />
          <span className="ml-2 text-xs font-medium text-zinc-500 font-mono">WORKSPACE_SESSION_v1.0</span>
        </div>
        
        {/* Dynamic Doc Badge in Topbar */}
        <div className="flex items-center gap-1.5 rounded-full border border-zinc-900 bg-zinc-900/50 px-2.5 py-0.5 text-[10px] font-medium text-zinc-400 font-mono">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          {selectedDoc}
        </div>
      </div>

      <div className="flex h-[450px] md:h-[480px]">
        {/* Mock Sidebar */}
        <div className="hidden sm:flex w-52 flex-col border-r border-zinc-900 bg-zinc-950/50 p-3 select-none">
          <div className="flex items-center justify-between mb-4 text-[10px] font-semibold tracking-wider text-zinc-500 uppercase font-mono">
            <span>Documents</span>
            <span className="text-zinc-600">4 total</span>
          </div>

          <div className="space-y-1 flex-1">
            {documents.map((doc) => {
              const isSelected = selectedDoc === doc.name;
              return (
                <button
                  key={doc.name}
                  onClick={() => setSelectedDoc(doc.name)}
                  className={`flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-xs transition-all duration-200 ${
                    isSelected
                      ? "bg-zinc-900 text-white font-medium border border-zinc-800"
                      : "text-zinc-500 hover:bg-zinc-900/40 hover:text-zinc-300"
                  }`}
                >
                  <FileText className={`h-3.5 w-3.5 flex-shrink-0 ${isSelected ? "text-white" : "text-zinc-600"}`} />
                  <span className="truncate">{doc.name}</span>
                </button>
              );
            })}

            <button className="flex w-full items-center justify-center gap-1.5 rounded border border-dashed border-zinc-800 hover:border-zinc-700 py-1.5 mt-4 text-left text-[11px] text-zinc-500 hover:text-zinc-400 font-mono transition-all duration-200">
              <Plus className="h-3 w-3" />
              <span>Add material</span>
            </button>
          </div>

          <div className="mt-auto border-t border-zinc-900 pt-3 flex items-center justify-between text-[10px] text-zinc-600 font-mono">
            <span>Quota: 85% free</span>
            <span className="h-1.5 w-12 bg-zinc-900 rounded overflow-hidden">
              <span className="block h-full w-[15%] bg-zinc-600" />
            </span>
          </div>
        </div>

        {/* Main Work Area */}
        <div className="flex flex-1 flex-col bg-black/40">
          {/* Tabs Bar */}
          <div className="flex h-11 border-b border-zinc-900 bg-zinc-950/80 px-2 justify-start items-end gap-1">
            {(["chat", "summary", "quiz", "sources"] as const).map((tab) => {
              const isActive = activeTab === tab;
              const labels = {
                chat: "Chat",
                summary: "Summary",
                quiz: "Practice Quiz",
                sources: "Cited Sources"
              };
              const icons = {
                chat: MessageSquare,
                summary: Sparkles,
                quiz: HelpCircle,
                sources: BookOpen
              };
              const TabIcon = icons[tab];

              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-1.5 border-t border-x px-3.5 py-2 text-xs transition-all duration-200 rounded-t ${
                    isActive
                      ? "border-zinc-800 bg-zinc-950 text-white font-medium -mb-[1px]"
                      : "border-transparent bg-transparent text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  <TabIcon className="h-3.5 w-3.5" />
                  <span>{labels[tab]}</span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Tab Contents */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 text-sm">
            {/* CHAT TAB */}
            {activeTab === "chat" && (
              <div className="space-y-4 max-w-2xl mx-auto h-full flex flex-col justify-between">
                <div className="space-y-4">
                  {/* User Question */}
                  <div className="flex gap-3 justify-end">
                    <div className="rounded-lg bg-zinc-900 border border-zinc-800 px-3.5 py-2.5 text-zinc-100 max-w-[85%] text-xs md:text-sm">
                      <div className="flex items-center gap-1.5 mb-1 text-[9px] font-mono text-zinc-500">
                        <User className="h-2.5 w-2.5" />
                        <span>STUDENT</span>
                      </div>
                      Explain chapter 4 in simple terms
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex gap-3 justify-start">
                    <div className="rounded-lg bg-zinc-950/40 border border-zinc-900 px-3.5 py-2.5 text-zinc-300 max-w-[90%] text-xs md:text-sm">
                      <div className="flex items-center gap-1.5 mb-1.5 text-[9px] font-mono text-zinc-500">
                        <Bot className="h-2.5 w-2.5 text-zinc-400" />
                        <span className="text-zinc-400">STUDYMATE AI</span>
                        <span className="text-emerald-500/80 bg-emerald-500/5 px-1 py-0.2 rounded-sm border border-emerald-500/10">GROUNDED</span>
                      </div>
                      <p className="leading-relaxed text-zinc-300 text-xs md:text-[13px]">
                        Chapter 4 focuses on <strong className="text-white font-medium">consumer perception and decision-making</strong>. It explains that consumers do not perceive reality objectively; instead, they filter sensory stimuli through exposure, attention, and interpretation.
                      </p>
                      <p className="leading-relaxed mt-2 text-zinc-300 text-xs md:text-[13px]">
                        The material outlines how factors like selective perception and cultural bias affect purchase decisions, emphasizing that marketing strategies must align with these cognitive filters.
                      </p>

                      {/* Source Citation Cards Section */}
                      <div className="mt-4 border-t border-zinc-900/60 pt-3">
                        <div className="text-[10px] font-semibold text-zinc-500 font-mono tracking-wide uppercase mb-2">Grounded Citations (2)</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <div className="rounded border border-zinc-900 bg-zinc-950 p-2 text-left hover:border-zinc-800 transition-colors duration-200">
                            <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400 mb-0.5">
                              <span className="font-semibold">Page 12</span>
                              <span className="text-zinc-600 font-normal">Marketing PDF</span>
                            </div>
                            <p className="text-[10.5px] leading-relaxed text-zinc-500 truncate">
                              &ldquo;Consumer perception refers to the processes by which individuals select...&rdquo;
                            </p>
                          </div>

                          <div className="rounded border border-zinc-900 bg-zinc-950 p-2 text-left hover:border-zinc-800 transition-colors duration-200">
                            <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400 mb-0.5">
                              <span className="font-semibold">Page 15</span>
                              <span className="text-zinc-600 font-normal">Marketing PDF</span>
                            </div>
                            <p className="text-[10.5px] leading-relaxed text-zinc-500 truncate">
                              &ldquo;Selective exposure influences what marketing messages break through cognitive...&rdquo;
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="mt-4 border border-zinc-900 bg-zinc-950/60 rounded px-3 py-2 flex items-center justify-between gap-2">
                  <span className="text-xs text-zinc-600 font-mono select-none">Ask anything about {selectedDoc}...</span>
                  <div className="flex h-6 w-6 items-center justify-center rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                    <ChevronRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            )}

            {/* SUMMARY TAB */}
            {activeTab === "summary" && (
              <div className="space-y-4 max-w-2xl mx-auto">
                <div className="rounded-lg border border-zinc-900 bg-zinc-950/40 p-4 font-sans">
                  <div className="flex items-center justify-between mb-3 border-b border-zinc-900 pb-2">
                    <span className="text-xs font-semibold text-white tracking-wide uppercase font-mono">Structured Chapter Outline</span>
                    <span className="text-[10px] text-zinc-500 font-mono">v1.2 Summary Generated</span>
                  </div>
                  
                  <div className="space-y-3.5 text-xs md:text-sm text-zinc-300">
                    <div>
                      <h4 className="font-semibold text-white text-xs md:text-sm mb-1 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
                        1. Cognitive Selective Filtering
                      </h4>
                      <p className="pl-4 text-[12px] text-zinc-400 leading-relaxed">
                        Consumers exposure filters block 80% of daily advertising messages. Sensory inputs must bypass individual psychological thresholds to trigger active cognitive evaluation.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white text-xs md:text-sm mb-1 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
                        2. The Perceptual Mapping Model
                      </h4>
                      <p className="pl-4 text-[12px] text-zinc-400 leading-relaxed">
                        Positions competitor products geometrically based on attribute weights. Strategic repositioning requires altering consumers perceptual biases rather than physical specs.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white text-xs md:text-sm mb-1 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
                        3. Risk Reduction Heuristics
                      </h4>
                      <p className="pl-4 text-[12px] text-zinc-400 leading-relaxed">
                        Evaluates customer reliance on brand trust, social validation cues, and transparent sourcing to lower subjective buying anxiety metrics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* QUIZ TAB */}
            {activeTab === "quiz" && (
              <div className="space-y-4 max-w-2xl mx-auto">
                <div className="rounded-lg border border-zinc-900 bg-zinc-950/40 p-4 text-xs md:text-sm">
                  <div className="flex items-center justify-between mb-3 border-b border-zinc-900 pb-2">
                    <span className="text-xs font-semibold text-white tracking-wide uppercase font-mono">Practice Quiz</span>
                    <span className="text-[10px] text-emerald-500 font-mono">10 Questions Available</span>
                  </div>

                  <div className="space-y-3">
                    <div className="text-zinc-200 font-medium">
                      Question 1: What is the primary function of selective exposure in consumer decision processes?
                    </div>

                    <div className="space-y-2 mt-2">
                      <div className="rounded border border-zinc-900 bg-zinc-950 p-2.5 text-[11.5px] text-zinc-400 flex items-center justify-between hover:border-zinc-800 transition-colors duration-200">
                        <span>A) Maximizing total cognitive stimulus loading</span>
                        <span className="text-[9px] font-mono text-zinc-600">0% chosen</span>
                      </div>
                      
                      <div className="rounded border border-zinc-800 bg-zinc-900/60 p-2.5 text-[11.5px] text-white flex items-center justify-between font-medium">
                        <span>B) Filtering sensory inputs to avoid mental overload</span>
                        <span className="text-[9px] font-mono text-emerald-500 bg-emerald-500/5 border border-emerald-500/10 px-1 py-0.2 rounded">CORRECT</span>
                      </div>

                      <div className="rounded border border-zinc-900 bg-zinc-950 p-2.5 text-[11.5px] text-zinc-400 flex items-center justify-between hover:border-zinc-800 transition-colors duration-200">
                        <span>C) Forcing consumers to adopt alternative brand heuristics</span>
                        <span className="text-[9px] font-mono text-zinc-600">0% chosen</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-zinc-900/80 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                      <span>Source: Page 15 (Chapter 4 Cognitive Exposure)</span>
                      <a href="#" className="flex items-center gap-1 hover:text-white transition-colors duration-200">
                        View text excerpt <ExternalLink className="h-2.5 w-2.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SOURCES TAB */}
            {activeTab === "sources" && (
              <div className="space-y-3 max-w-2xl mx-auto">
                <div className="text-xs font-semibold text-zinc-500 font-mono tracking-wider uppercase mb-1">Grounded PDF Sources</div>
                
                <div className="space-y-2">
                  <div className="rounded border border-zinc-900 bg-zinc-950/80 p-3 hover:border-zinc-800 transition-all duration-200 flex justify-between items-start gap-4">
                    <div>
                      <div className="text-xs font-semibold text-white">Marketing Research Theory PDF</div>
                      <div className="text-[10px] text-zinc-500 font-mono mt-0.5">Chapter 4: Perceptual Filters & Heuristics</div>
                      <p className="text-[11px] text-zinc-400 mt-2 italic leading-relaxed border-l-2 border-zinc-800 pl-2">
                        &ldquo;Selective exposure is an active self-preservation mechanism that filters unaligned information inputs.&rdquo;
                      </p>
                    </div>
                    <span className="text-[10px] bg-zinc-900 border border-zinc-800 rounded px-1.5 py-0.5 text-zinc-400 font-mono flex-shrink-0">Page 15</span>
                  </div>

                  <div className="rounded border border-zinc-900 bg-zinc-950/80 p-3 hover:border-zinc-800 transition-all duration-200 flex justify-between items-start gap-4">
                    <div>
                      <div className="text-xs font-semibold text-white">Marketing Research Theory PDF</div>
                      <div className="text-[10px] text-zinc-500 font-mono mt-0.5">Chapter 4: Attention Threshold Boundaries</div>
                      <p className="text-[11px] text-zinc-400 mt-2 italic leading-relaxed border-l-2 border-zinc-800 pl-2">
                        &ldquo;Absolute stimulus threshold measures the minimum sensory excitation required to establish perceptual awareness.&rdquo;
                      </p>
                    </div>
                    <span className="text-[10px] bg-zinc-900 border border-zinc-800 rounded px-1.5 py-0.5 text-zinc-400 font-mono flex-shrink-0">Page 12</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
