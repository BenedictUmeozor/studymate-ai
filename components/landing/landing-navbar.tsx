"use client";

import React, { useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";

export default function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur-xl transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card text-white transition-all duration-300 group-hover:border-border-strong">
                <BookOpen className="h-4.5 w-4.5 text-zinc-100 transition-transform duration-300 group-hover:scale-105" />
              </div>
              <span className="text-sm font-semibold tracking-tight text-white transition-colors duration-200">
                StudyMate <span className="text-zinc-500 font-normal">AI</span>
              </span>
            </a>
          </div>

          {/* Center: Nav links */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            <a
              href="#features"
              className="text-xs font-medium text-text-muted hover:text-text-primary transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-xs font-medium text-text-muted hover:text-text-primary transition-colors duration-200"
            >
              How it works
            </a>
            <a
              href="#demo"
              className="text-xs font-medium text-text-muted hover:text-text-primary transition-colors duration-200"
            >
              Demo
            </a>
          </div>

          {/* Right: Auth Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-card-hover px-3 py-1.5 rounded-lg transition-all duration-200">
              Sign in
            </button>
            <button className="text-xs font-medium bg-white text-black hover:bg-zinc-200 active:scale-98 px-3.5 py-1.5 rounded-lg font-semibold transition-all duration-200">
              Start studying
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded p-2 text-zinc-400 hover:bg-zinc-900 hover:text-white focus:outline-none transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden border-b border-border bg-background/95 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-72 opacity-100 py-4" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="space-y-3 px-4">
          <a
            href="#features"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-medium text-text-secondary hover:text-text-primary py-1 transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-medium text-text-secondary hover:text-text-primary py-1 transition-colors duration-200"
          >
            How it works
          </a>
          <a
            href="#demo"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-medium text-text-secondary hover:text-text-primary py-1 transition-colors duration-200"
          >
            Demo
          </a>
          <div className="pt-4 border-t border-separator flex flex-col gap-2">
            <button className="w-full text-center text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-card-hover py-2 rounded-lg transition-all duration-200">
              Sign in
            </button>
            <button className="w-full text-center text-sm font-semibold bg-white text-black hover:bg-zinc-200 py-2 rounded-lg transition-all duration-200">
              Start studying
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
