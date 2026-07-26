import React, { useState } from "react";
import Badge from "./Badge";
import ExpandableSection from "./ExpandableSection";

function GiftCard({ gift }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`inline-block w-full bg-white rounded-3xl border border-brand-secondary/20 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden mb-5 ${
        isExpanded ? "ring-2 ring-brand-primary" : ""
      }`}
    >
      {/* 1. Image Container */}
      <div className={`relative overflow-hidden w-full ${gift.aspectRatio || "aspect-[3/4]"}`}>
        <img
          src={gift.image}
          alt={gift.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
          loading="lazy"
        />
        {/* Floating Category Tag */}
        {gift.category && (
          <div className="absolute top-4 left-4">
            <Badge text={gift.category} type="secondary" />
          </div>
        )}
      </div>

      {/* 2. Content Container - 24px padding */}
      <div className="p-6 flex flex-col text-left">
        {/* Title (Max 2 lines) */}
        <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-brand-text mb-2.5 leading-tight line-clamp-2">
          {gift.name}
        </h3>

        {/* Description (Max 3 lines) */}
        <p className="text-brand-muted text-xs sm:text-sm leading-relaxed mb-4.5 line-clamp-3">
          {gift.description}
        </p>

        {/* Badges and Prep time container */}
        <div className="flex flex-wrap items-center gap-3 mb-6 pt-2 border-t border-brand-secondary/10">
          <Badge text={`💰 ${gift.budget}`} type="default" />
          <span className="flex items-center gap-1.5 text-xs text-brand-muted font-medium">
            <svg
              className="w-4 h-4 text-brand-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span>{gift.estimatedTime}</span>
          </span>
        </div>

        {/* 3. Primary CTA Button */}
        {!isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="w-full py-3.5 px-6 rounded-full bg-[#FFF0EB] text-[#E86A4B] font-bold text-xs tracking-wider uppercase hover:bg-[#FFE5DC] hover:-translate-y-0.5 active:translate-y-0 shadow-sm transition-all duration-300 flex items-center justify-center gap-1.5"
          >
            <span>View Complete Plan</span>
            <span>→</span>
          </button>
        )}

        {/* 4. Expandable Details Section */}
        <ExpandableSection isExpanded={isExpanded}>
          <div className="space-y-6">
            {/* Section 1: ❤️ Why This Gift Works */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-2 flex items-center gap-1.5">
                <span>❤️</span> Why This Gift Works
              </h4>
              <p className="text-brand-text text-sm leading-relaxed">
                {gift.whyItWorks}
              </p>
            </div>

            {/* Section 2: 🛒 Materials Needed */}
            {gift.materials && gift.materials.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-3 flex items-center gap-1.5">
                  <span>🛒</span> Materials Needed
                </h4>
                <ul className="space-y-2 text-xs text-brand-muted pl-1">
                  {gift.materials.map((material, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-[#E86A4B] font-bold">✓</span>
                      <span>{material}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Section 3: 📝 Step-by-Step Guide */}
            {gift.presentationGuide && gift.presentationGuide.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-3.5 flex items-center gap-1.5">
                  <span>📝</span> Step-by-Step Guide
                </h4>
                <ol className="space-y-3.5 text-xs text-brand-muted pl-1">
                  {gift.presentationGuide.map((step, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-brand-secondary/40 text-brand-primary font-bold">
                        {index + 1}
                      </span>
                      <span className="pt-0.5 leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Section 5: 💰 Estimated Budget */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-2.5 flex items-center gap-1.5">
                <span>💰</span> Estimated Budget
              </h4>
              <div className="p-4 bg-[#FFF8F5] border border-brand-secondary/35 rounded-2xl">
                <span className="text-lg font-serif font-bold text-brand-text">{gift.budget}</span>
                <span className="text-[10px] text-brand-muted block mt-0.5">Approximate total execution expense</span>
              </div>
            </div>

            {/* Section 6: ✨ Surprise Tip */}
            {gift.extraTip && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-2 flex items-center gap-1.5">
                  <span>✨</span> Surprise Tip
                </h4>
                <div className="p-4 bg-[#FFF0EB] border-l-4 border-brand-primary rounded-r-2xl rounded-l-md">
                  <p className="text-xs text-brand-text/90 leading-relaxed font-medium">
                    {gift.extraTip}
                  </p>
                </div>
              </div>
            )}

            {/* Section 4: 🛍 Buy Materials */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-2.5 flex items-center gap-1.5">
                <span>🛍️</span> Buy Materials
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={gift.buyLinks?.amazon}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-3 rounded-full bg-brand-bg border border-brand-secondary/30 text-xs font-bold text-center text-brand-text hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 flex items-center justify-center gap-1 group/btn"
                >
                  <span>Amazon India</span>
                  <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href={gift.buyLinks?.flipkart}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-3 rounded-full bg-brand-bg border border-brand-secondary/30 text-xs font-bold text-center text-brand-text hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 flex items-center justify-center gap-1 group/btn"
                >
                  <span>Flipkart</span>
                  <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Collapse button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="w-full py-3 px-6 rounded-full border border-brand-secondary text-brand-text/80 font-bold text-xs tracking-wider uppercase hover:bg-brand-secondary/20 hover:text-brand-text transition-all duration-300 flex items-center justify-center gap-1"
            >
              Collapse Plan
            </button>
          </div>
        </ExpandableSection>
      </div>
    </div>
  );
}

export default GiftCard;