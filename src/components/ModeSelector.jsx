import React from "react";

function ModeSelector({ selectedMode, setSelectedMode }) {
  const modes = [
    {
      id: "gift",
      icon: "🎁",
      title: "Gift Ideas",
      description: "Generate thoughtful personalized gift ideas for someone you love."
    },
    {
      id: "date",
      icon: "❤️",
      title: "Date Planner",
      description: "Create memorable date plans based on budget, vibe and location."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto px-6 mb-12">
      {modes.map((mode) => {
        const isSelected = selectedMode === mode.id;
        return (
          <button
            key={mode.id}
            onClick={() => setSelectedMode(mode.id)}
            className={`w-full text-left p-8 rounded-2xl border transition-all duration-300 ease-out flex flex-col justify-between ${
              isSelected
                ? "border-brand-primary bg-white scale-[1.02] shadow-xl shadow-brand-primary/5 ring-1 ring-brand-primary"
                : "border-brand-secondary/40 bg-white/70 hover:bg-white hover:scale-[1.01] hover:shadow-md hover:border-brand-primary/30"
            }`}
          >
            <div>
              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl" role="img" aria-label={mode.title}>
                  {mode.icon}
                </span>
                <h3 className="font-serif text-xl font-bold text-brand-text">
                  {mode.title}
                </h3>
              </div>
              {/* Description */}
              <p className="text-brand-muted text-sm leading-relaxed">
                {mode.description}
              </p>
            </div>

            {/* Selection indicator pill */}
            <div className="mt-6 flex justify-end">
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full transition-all duration-200 ${
                  isSelected
                    ? "bg-brand-primary text-white"
                    : "bg-brand-secondary/20 text-brand-text/60"
                }`}
              >
                {isSelected ? "Selected" : "Select"}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default ModeSelector;
