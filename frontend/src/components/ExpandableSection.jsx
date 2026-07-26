import React from "react";

function ExpandableSection({ isExpanded, children }) {
  return (
    <div
      className={`transition-all duration-500 ease-in-out overflow-hidden ${
        isExpanded
          ? "max-h-[1800px] opacity-100 mt-6 border-t border-brand-secondary/35 pt-6"
          : "max-h-0 opacity-0 pointer-events-none mt-0 pt-0"
      }`}
    >
      <div
        className={`transform transition-all duration-500 ease-out ${
          isExpanded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default ExpandableSection;
