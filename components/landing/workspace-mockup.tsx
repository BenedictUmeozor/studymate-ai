"use client";

import React, { useState } from "react";
import {
  FileText,
  MessageSquare,
  Sparkles,
  ChevronRight,
  BookOpen,
  HelpCircle,
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
    <div className="w-full rounded-2xl border border-border bg-card text-text-secondary shadow-[0_0_50px_-12px_rgba(255,255,255,0.03),_0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden font-sans select-none">
      {/* Workspace Topbar */}
      <div className="flex h-12 items-center justify-between border-b border-border bg-section px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-2 w-2 rounded-full bg-border-strong" />
          <div className="flex h-2 w-2 rounded-full bg-border-strong" />
          <div className="flex h-2 w-2 rounded-full bg-border-strong" />
          <span className="ml-2 text-xs font-medium text-text-muted font-mono">WORKSPACE_SESSION_v1.0</span>
        </div>
        
        {/* Dynamic Doc Badge in Topbar */}
        <div className="flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-0.5 text-[10px] font-medium text-text-secondary font-mono">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          {selectedDoc}
        </div>
      </div>

      <div className="flex h-[450px] md:h-[480px]">
        {/* Mock Sidebar */}
        <div className="hidden sm:flex w-52 flex-col border-r border-border bg-section p-3 select-none">
          <div className="flex items-center justify-between mb-4 text-[10px] font-semibold tracking-wider text-text-muted uppercase font-mono">
            <span>Documents</span>
            <span className="text-text-disabled">4 total</span>
          </div>

          <div className="space-y-1 flex-1">
            {documents.map((doc) => {
              const isSelected = selectedDoc === doc.name;
              return (
                <button
                  key={doc.name}
                  onClick={() => setSelectedDoc(doc.name)}
                  className={`flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-xs transition-all duration-200 ${
                    isSelected
                      ? "bg-card-hover text-text-primary font-medium border border-border-strong"
                      : "text-text-muted hover:bg-card-hover/40 hover:text-text-secondary"
                  }`}
                >
                  <FileText className={`h-3.5 w-3.5 flex-shrink-0 ${isSelected ? "text-text-primary" : "text-text-disabled"}`} />
                  <span className="truncate">{doc.name}</span>
                </button>
              );
            })}

            <button className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-dashed border-border hover:border-border-strong hover:bg-card-hover/20 py-1.5 mt-4 text-left text-[11px] text-text-muted hover:text-text-secondary font-mono transition-all duration-200">
              <Plus className="h-3 w-3" />
              <span>Add material</span>
            </button>
          </div>

          <div className="mt-auto border-t border-separator pt-3 flex items-center justify-between text-[10px] text-text-disabled font-mono">
            <span>Quota: 85% free</span>
            <span className="h-1.5 w-12 bg-background rounded overflow-hidden">
              <span className="block h-full w-[15%] bg-border-strong" />
            </span>
          </div>
        </div>

        {/* Main Work Area */}
        <div className="flex flex-1 flex-col bg-background">
          {/* Tabs Bar */}
          <div className="flex h-11 border-b border-border bg-section px-2 justify-start items-end gap-1">
            {([`chat`, `summary`, `quiz`, `sources`] as const).map((tab) => {
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
                  className={`flex items-center gap-1.5 border-t border-x px-3.5 py-2 text-xs transition-all duration-200 rounded-t-lg ${
                    isActive
                      ? "border-border bg-background text-text-primary font-medium -mb-[1px]"
                      : "border-transparent bg-transparent text-text-muted hover:text-text-secondary"
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
                    <div className="rounded-2xl bg-card-hover border border-border-strong px-3.5 py-2.5 text-text-primary max-w-[85%] text-xs md:text-sm shadow-sm">
                      <div className="flex items-center gap-1.5 mb-1 text-[9px] font-mono text-text-muted">
                        <User className="h-2.5 w-2.5" />
                        <span>STUDENT</span>
                      </div>
                      Explain chapter 4 in simple terms
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex gap-3 justify-start">
                    <div className="rounded-2xl bg-card border border-border px-3.5 py-2.5 text-text-secondary max-w-[90%] text-xs md:text-sm shadow-sm">
                      <div className="flex items-center gap-1.5 mb-1.5 text-[9px] font-mono text-text-muted">
                        <Bot className="h-2.5 w-2.5 text-text-muted" />
                        <span className="text-text-muted">STUDYMATE AI</span>
                        <span className="text-emerald-500/90 bg-emerald-500/5 px-1.5 py-0.5 rounded-md border border-emerald-500/10 font-semibold uppercase tracking-wider scale-90">GROUNDED</span>
                      </div>
                      <p className="leading-relaxed text-text-secondary text-xs md:text-[13px]">
                        Chapter 4 focuses on <strong className="text-text-primary font-semibold">consumer perception and decision-making</strong>. It explains that consumers do not perceive reality objectively; instead, they filter sensory stimuli through exposure, attention, and interpretation.
                      </p>
                      <p className="leading-relaxed mt-2 text-text-secondary text-xs md:text-[13px]">
                        The material outlines how factors like selective perception and cultural bias affect purchase decisions, emphasizing that marketing strategies must align with these cognitive filters.
                      </p>

                      {/* Source Citation Cards Section */}
                      <div className="mt-4 border-t border-separator pt-3">
                        <div className="text-[10px] font-semibold text-text-muted font-mono tracking-wide uppercase mb-2">Grounded Citations (2)</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <div className="rounded-lg border border-border bg-background p-2 text-left hover:border-border-strong hover:bg-card-hover transition-colors duration-200">
                            <div className="flex items-center justify-between text-[9px] font-mono text-text-muted mb-0.5">
                              <span className="font-semibold text-text-secondary">Page 12</span>
                              <span className="text-text-disabled font-normal">Marketing PDF</span>
                            </div>
                            <p className="text-[10.5px] leading-relaxed text-text-muted truncate">
                              &ldquo;Consumer perception refers to the processes by which individuals select...&rdquo;
                            </p>
                          </div>

                          <div className="rounded-lg border border-border bg-background p-2 text-left hover:border-border-strong hover:bg-card-hover transition-colors duration-200">
                            <div className="flex items-center justify-between text-[9px] font-mono text-text-muted mb-0.5">
                              <span className="font-semibold text-text-secondary">Page 15</span>
                              <span className="text-text-disabled font-normal">Marketing PDF</span>
                            </div>
                            <p className="text-[10.5px] leading-relaxed text-text-muted truncate">
                              &ldquo;Selective exposure influences what marketing messages break through cognitive...&rdquo;
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="mt-4 border border-border bg-background rounded-lg px-3 py-2 flex items-center justify-between gap-2 shadow-inner">
                  <span className="text-xs text-text-muted font-mono select-none">Ask anything about {selectedDoc}...</span>
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-card-hover border border-border text-text-secondary hover:text-text-primary cursor-pointer transition-colors duration-200">
                    <ChevronRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            )}

            {/* SUMMARY TAB */}
            {activeTab === "summary" && (
              <div className="space-y-4 max-w-2xl mx-auto">
                <div className="rounded-2xl border border-border bg-card p-4 font-sans shadow-sm">
                  <div className="flex items-center justify-between mb-3 border-b border-separator pb-2">
                    <span className="text-xs font-semibold text-text-primary tracking-wide uppercase font-mono">Structured Chapter Outline</span>
                    <span className="text-[10px] text-text-muted font-mono">v1.2 Summary Generated</span>
                  </div>
                  
                  <div className="space-y-3.5 text-xs md:text-sm text-text-secondary">
                    <div>
                      <h4 className="font-semibold text-text-primary text-xs md:text-sm mb-1 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-text-muted" />
                        1. Cognitive Selective Filtering
                      </h4>
                      <p className="pl-4 text-[12px] text-text-muted leading-relaxed">
                        Consumers exposure filters block 80% of daily advertising messages. Sensory inputs must bypass individual psychological thresholds to trigger active cognitive evaluation.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-text-primary text-xs md:text-sm mb-1 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-text-muted" />
                        2. The Perceptual Mapping Model
                      </h4>
                      <p className="pl-4 text-[12px] text-text-muted leading-relaxed">
                        Positions competitor products geometrically based on attribute weights. Strategic repositioning requires altering consumers perceptual biases rather than physical specs.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-text-primary text-xs md:text-sm mb-1 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-text-muted" />
                        3. Risk Reduction Heuristics
                      </h4>
                      <p className="pl-4 text-[12px] text-text-muted leading-relaxed">
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
                <div className="rounded-2xl border border-border bg-card p-4 text-xs md:text-sm shadow-sm">
                  <div className="flex items-center justify-between mb-3 border-b border-separator pb-2">
                    <span className="text-xs font-semibold text-text-primary tracking-wide uppercase font-mono">Practice Quiz</span>
                    <span className="text-[10px] text-emerald-500/90 font-mono">10 Questions Available</span>
                  </div>

                  <div className="space-y-3">
                    <div className="text-text-primary font-medium">
                      Question 1: What is the primary function of selective exposure in consumer decision processes?
                    </div>

                    <div className="space-y-2 mt-2">
                      <div className="rounded-lg border border-border bg-background p-2.5 text-[11.5px] text-text-muted flex items-center justify-between hover:border-border-strong hover:bg-card-hover transition-colors duration-200 cursor-pointer">
                        <span>A) Maximizing total cognitive stimulus loading</span>
                        <span className="text-[9px] font-mono text-text-disabled">0% chosen</span>
                      </div>
                      
                      <div className="rounded-lg border border-border-strong bg-card-hover p-2.5 text-[11.5px] text-text-primary flex items-center justify-between font-medium">
                        <span>B) Filtering sensory inputs to avoid mental overload</span>
                        <span className="text-[9px] font-mono text-emerald-500 bg-emerald-500/5 border border-emerald-500/10 px-1.5 py-0.5 rounded-md font-semibold">CORRECT</span>
                      </div>

                      <div className="rounded-lg border border-border bg-background p-2.5 text-[11.5px] text-text-muted flex items-center justify-between hover:border-border-strong hover:bg-card-hover transition-colors duration-200 cursor-pointer">
                        <span>C) Forcing consumers to adopt alternative brand heuristics</span>
                        <span className="text-[9px] font-mono text-text-disabled">0% chosen</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-separator flex items-center justify-between text-[10px] text-text-muted font-mono">
                      <span>Source: Page 15 (Chapter 4 Cognitive Exposure)</span>
                      <a href="#" className="flex items-center gap-1 hover:text-text-primary transition-colors duration-200">
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
                <div className="text-xs font-semibold text-text-muted font-mono tracking-wider uppercase mb-1">Grounded PDF Sources</div>
                
                <div className="space-y-2">
                  <div className="rounded-2xl border border-border bg-card p-3 hover:border-border-strong hover:bg-card-hover transition-all duration-200 flex justify-between items-start gap-4 shadow-sm">
                    <div>
                      <div className="text-xs font-semibold text-text-primary">Marketing Research Theory PDF</div>
                      <div className="text-[10px] text-text-muted font-mono mt-0.5">Chapter 4: Perceptual Filters & Heuristics</div>
                      <p className="text-[11px] text-text-secondary mt-2 italic leading-relaxed border-l-2 border-border-strong pl-2">
                        &ldquo;Selective exposure is an active self-preservation mechanism that filters unaligned information inputs.&rdquo;
                      </p>
                    </div>
                    <span className="text-[10px] bg-background border border-border rounded-md px-1.5 py-0.5 text-text-muted font-mono flex-shrink-0">Page 15</span>
                  </div>

                  <div className="rounded-2xl border border-border bg-card p-3 hover:border-border-strong hover:bg-card-hover transition-all duration-200 flex justify-between items-start gap-4 shadow-sm">
                    <div>
                      <div className="text-xs font-semibold text-text-primary">Marketing Research Theory PDF</div>
                      <div className="text-[10px] text-text-muted font-mono mt-0.5">Chapter 4: Attention Threshold Boundaries</div>
                      <p className="text-[11px] text-text-secondary mt-2 italic leading-relaxed border-l-2 border-border-strong pl-2">
                        &ldquo;Absolute stimulus threshold measures the minimum sensory excitation required to establish perceptual awareness.&rdquo;
                      </p>
                    </div>
                    <span className="text-[10px] bg-background border border-border rounded-md px-1.5 py-0.5 text-text-muted font-mono flex-shrink-0">Page 12</span>
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
