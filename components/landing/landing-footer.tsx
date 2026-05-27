"use client";

import React from "react";
import { BookOpen } from "lucide-react";

export default function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-900 bg-black py-12 md:py-16 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Logo & Description */}
          <div className="md:col-span-6 flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded border border-zinc-900 bg-zinc-950 text-white">
                <BookOpen className="h-3.5 w-3.5 text-zinc-100" />
              </div>
              <span className="text-xs font-semibold tracking-tight text-white">
                StudyMate <span className="text-zinc-500 font-normal">AI</span>
              </span>
            </div>
            
            <p className="text-xs text-zinc-500 font-normal max-w-sm leading-relaxed">
              An AI-powered academic workspace designed for serious students. Upload materials, chat with context, generate summaries, and test yourself with source-backed quizzes.
            </p>
          </div>

          {/* Right Column: Navigation Links */}
          <div className="md:col-span-6 flex flex-wrap gap-x-12 gap-y-6 md:justify-end text-left md:text-right">
            <div className="space-y-3">
              <h4 className="text-[10px] font-semibold text-white tracking-wider uppercase font-mono">Product</h4>
              <ul className="space-y-2 text-xs text-zinc-500">
                <li>
                  <a href="#features" className="hover:text-white transition-colors duration-200">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors duration-200">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#demo" className="hover:text-white transition-colors duration-200">
                    Demo
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-[10px] font-semibold text-white tracking-wider uppercase font-mono">Access</h4>
              <ul className="space-y-2 text-xs text-zinc-500">
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    Sign in
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    Create Account
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 pt-8 border-t border-zinc-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-600 font-mono">
          <span>&copy; {currentYear} StudyMate AI. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-400 transition-colors duration-200">Security</a>
            <a href="#" className="hover:text-zinc-400 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-zinc-400 transition-colors duration-200">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
