import React from "react";

function Badge({ text, type = "default" }) {
  const styles = {
    primary: "bg-[#E86A4B] text-white",
    secondary: "bg-[#F7D9C4] text-[#E86A4B]",
    muted: "bg-[#FFF8F5] text-brand-muted border border-brand-secondary/40",
    default: "bg-white text-brand-text/90 border border-brand-secondary/30"
  };

  return (
    <span
      className={`px-3 py-1 text-xs font-bold rounded-full shadow-sm select-none transition-transform duration-200 hover:scale-105 ${
        styles[type] || styles.default
      }`}
    >
      {text}
    </span>
  );
}

export default Badge;
