import type { Metadata } from "next";
import LandingNavbar from "@/components/landing/landing-navbar";
import HeroSection from "@/components/landing/hero-section";
import TrustStrip from "@/components/landing/trust-strip";
import FeatureGrid from "@/components/landing/feature-grid";
import HowItWorks from "@/components/landing/how-it-works";
import DemoPreview from "@/components/landing/demo-preview";
import FinalCta from "@/components/landing/final-cta";
import LandingFooter from "@/components/landing/landing-footer";

export const metadata: Metadata = {
  title: "StudyMate AI — Premium AI Study Workspace for Serious Students",
  description:
    "Upload lecture notes, textbooks, and academic PDFs. Ask grounded questions, generate structured summaries, and practice with source-backed quizzes built from your own materials.",
  openGraph: {
    title: "StudyMate AI — Premium AI Study Workspace for Serious Students",
    description:
      "Upload lecture notes, textbooks, and academic PDFs. Ask grounded questions, generate structured summaries, and practice with source-backed quizzes built from your own materials.",
    type: "website",
    siteName: "StudyMate AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "StudyMate AI — Premium AI Study Workspace",
    description:
      "Upload textbooks and lecture notes. Ask grounded questions, generate structured summaries, and practice with source-backed quizzes.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-zinc-800 selection:text-white antialiased flex flex-col w-full">
      {/* Sticky Top Navigation */}
      <LandingNavbar />

      <main className="flex-1 flex flex-col w-full">
        {/* Hero Section */}
        <HeroSection />

        {/* Horizontal Trust Strip */}
        <TrustStrip />

        {/* Features Section */}
        <FeatureGrid />

        {/* Workflow / How It Works */}
        <HowItWorks />

        {/* Product Comparison & Quiz Demo Preview */}
        <DemoPreview />

        {/* Call to Action Callout */}
        <FinalCta />
      </main>

      {/* Landing Footer */}
      <LandingFooter />
    </div>
  );
}
