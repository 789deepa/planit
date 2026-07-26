import React, { useState } from "react";

function GiftCard({ gift }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`inline-block w-full bg-white rounded-3xl border border-brand-secondary/20 shadow-sm hover:shadow-md transition-all duration-300 ease-out overflow-hidden ${
        isExpanded ? "ring-2 ring-brand-primary scale-[1.01]" : "hover:-translate-y-1"
      }`}
    >
      {/* Card Image Container */}
      <div className={`relative overflow-hidden w-full ${gift.aspectRatio || "aspect-[3/4]"}`}>
        <img
          src={gift.image}
          alt={gift.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
          loading="lazy"
        />
        {/* Floating Tags (e.g. Cozy + Price) */}
        {gift.tags && gift.tags.length > 0 && (
          <div className="absolute top-4 left-4 flex items-center gap-1.5">
            {gift.tags.map((tag, idx) => (
              <span
                key={idx}
                className={`px-2.5 py-1 text-[10px] sm:text-xs font-bold rounded-full shadow-sm ${
                  tag.type === "primary"
                    ? "bg-[#E86A4B] text-white"
                    : "bg-white text-brand-text/90 backdrop-blur-sm"
                }`}
              >
                {tag.text}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card Content - 24px padding */}
      <div className="p-6 flex flex-col text-left">
        {/* Gift Name */}
        <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-text mb-2 leading-tight">
          {gift.name}
        </h3>

        {/* Small emotional description */}
        <p className="text-brand-muted text-xs sm:text-sm leading-relaxed mb-4">
          {gift.description}
        </p>

        {/* Prep Time */}
        <div className="flex items-center gap-1.5 text-xs text-brand-muted mb-5">
          <span className="text-brand-primary text-sm">⏱️</span>
          <span>
            Preparation: <strong className="text-brand-text font-semibold">{gift.estimatedTime}</strong>
          </span>
        </div>

        {/* Action / View Plan Button */}
        {!isExpanded ? (
          <button
            onClick={() => setIsExpanded(true)}
            className="w-full py-3 px-6 rounded-full bg-[#FFF0EB] text-[#E86A4B] font-bold text-xs tracking-wider hover:bg-[#FFE5DC] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-1"
          >
            <span>View Plan</span>
            <span>→</span>
          </button>
        ) : (
          /* ================= EXPANDED CARD DETAILS ================= */
          <div className="space-y-6 border-t border-brand-secondary/35 pt-5 mt-2 animate-fade-in">
            {/* Why this gift is meaningful */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-1.5 flex items-center gap-1">
                <span>❤️</span> Why this gift is meaningful
              </h4>
              <p className="text-brand-text text-sm leading-relaxed">
                {gift.whyItWorks}
              </p>
            </div>

            {/* Materials Needed */}
            {gift.materials && gift.materials.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-2 flex items-center gap-1">
                  <span>🛒</span> Materials Needed
                </h4>
                <ul className="space-y-1.5 text-xs text-brand-muted pl-1">
                  {gift.materials.map((material, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-brand-primary">•</span>
                      <span>{material}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Step-by-step execution */}
            {gift.presentationGuide && gift.presentationGuide.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-2.5 flex items-center gap-1">
                  <span>📝</span> Step-by-step execution
                </h4>
                <ol className="space-y-2.5 text-xs text-brand-muted pl-1">
                  {gift.presentationGuide.map((step, index) => (
                    <li key={index} className="flex gap-2.5 items-start">
                      <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-brand-secondary/40 text-brand-primary font-bold">
                        {index + 1}
                      </span>
                      <span className="pt-0.5 leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Estimated Budget */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-1 flex items-center gap-1">
                <span>💰</span> Estimated Budget
              </h4>
              <p className="text-brand-text text-sm font-semibold">
                {gift.budget} <span className="text-xs font-normal text-brand-muted">(approx. total expense)</span>
              </p>
            </div>

            {/* Extra Surprise Tip */}
            {gift.extraTip && (
              <div className="p-4 bg-brand-bg rounded-2xl border border-brand-secondary/40">
                <h4 className="text-xs font-bold text-brand-primary mb-1 flex items-center gap-1">
                  <span>✨</span> Extra Surprise Tip
                </h4>
                <p className="text-xs text-brand-text/90 leading-relaxed">
                  {gift.extraTip}
                </p>
              </div>
            )}

            {/* Where to Buy */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-2 flex items-center gap-1">
                <span>🛍️</span> Buy or Search Options
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={gift.buyLinks?.amazon}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2.5 rounded-xl bg-brand-bg border border-brand-secondary/30 text-xs font-medium text-center text-brand-text hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-200"
                >
                  Amazon India
                </a>
                <a
                  href={gift.buyLinks?.flipkart}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2.5 rounded-xl bg-brand-bg border border-brand-secondary/30 text-xs font-medium text-center text-brand-text hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-200"
                >
                  Flipkart
                </a>
              </div>
            </div>

            {/* Collapse button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="w-full py-3 px-6 rounded-full border border-brand-secondary text-brand-text/80 font-bold text-xs tracking-wider uppercase hover:bg-brand-secondary/20 hover:text-brand-text transition-all duration-200 flex items-center justify-center gap-1"
            >
              Collapse Plan
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default GiftCard;