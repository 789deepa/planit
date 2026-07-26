import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GiftGrid from "../components/GiftGrid";
import mockGiftData from "../data/mockGiftData";

function ResultsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text font-sans antialiased selection:bg-brand-secondary/40 selection:text-brand-primary">
      {/* Shared Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* Left Aligned Results Header */}
        <section className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12 pt-10 pb-8 sm:pt-14 sm:pb-12">
          <div className="flex flex-col items-start gap-4">
            {/* Back Button */}
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 text-xs font-semibold text-brand-muted hover:text-brand-primary transition-colors duration-200 group"
            >
              <span className="text-sm group-hover:-translate-x-0.5 transition-transform duration-200">
                ←
              </span>
              <span>Back to Planner</span>
            </button>

            {/* Title & Subtitle */}
            <div className="space-y-2 mt-1">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-text">
                Gift Ideas for Your Loved One
              </h1>
              <p className="text-brand-muted text-sm sm:text-base">
                {mockGiftData.length} personalized ideas generated for you.
              </p>
            </div>
          </div>
        </section>

        {/* Masonry Gift Grid */}
        <GiftGrid gifts={mockGiftData} />
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}

export default ResultsPage;
