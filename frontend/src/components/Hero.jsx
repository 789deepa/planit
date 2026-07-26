import React from "react";

function Hero() {
  return (
    <section className="text-center py-16 md:py-24 px-6 max-w-4xl mx-auto">
      {/* Decorative Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-secondary/35 text-brand-primary text-xs font-semibold tracking-wider uppercase mb-6 animate-fade-in">
        <span>✨ Welcome to the future of planning</span>
      </div>

      {/* Main Heading */}
      <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-brand-text tracking-tight leading-[1.1] mb-6 max-w-3xl mx-auto">
        Thoughtful moments deserve{" "}
        <span className="text-brand-primary italic font-normal">thoughtful</span> planning.
      </h1>

      {/* Subheading */}
      <p className="text-brand-muted text-base sm:text-lg md:text-xl font-normal max-w-xl mx-auto leading-relaxed">
        Plan personalized gifts and memorable dates in seconds with AI.
      </p>
    </section>
  );
}

export default Hero;
