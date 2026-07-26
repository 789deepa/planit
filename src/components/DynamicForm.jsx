import React, { useState } from "react";

function DynamicForm({ mode }) {
  // Gift Form States
  const [giftData, setGiftData] = useState({
    person: "",
    occasion: "",
    interests: "",
  });

  // Date Form States
  const [dateData, setDateData] = useState({
    occasion: "",
    budget: "",
    location: "",
    vibe: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleGiftChange = (e) => {
    setGiftData({
      ...giftData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (e) => {
    setDateData({
      ...dateData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate short loading to demonstrate the loading-ready structure
    setTimeout(() => {
      setIsLoading(false);
      const outputData = mode === "gift" ? giftData : dateData;
      console.log(`Generating Plan for ${mode}:`, outputData);
      alert(`Redirection / API generation simulated! Output: ${JSON.stringify(outputData, null, 2)}`);
    }, 1500);
  };

  return (
    <div className="max-w-xl mx-auto px-6 mb-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 md:p-10 rounded-3xl border border-brand-secondary/30 shadow-xl shadow-brand-primary/5 transition-all duration-300"
      >
        {mode === "gift" ? (
          /* ================= GIFT MODE FIELDS ================= */
          <div className="space-y-6 animate-fade-in">
            {/* Person Input */}
            <div>
              <label
                htmlFor="person"
                className="block text-sm font-semibold text-brand-text mb-2"
              >
                Who is this gift for?
              </label>
              <select
                id="person"
                name="person"
                value={giftData.person}
                onChange={handleGiftChange}
                required
                className="w-full px-4 py-3 bg-brand-bg/50 border border-brand-secondary/40 rounded-xl text-brand-text text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary hover:border-brand-primary/50 transition-all duration-200"
              >
                <option value="" disabled>Select a person</option>
                <option value="partner">Partner (Girlfriend/Boyfriend/Spouse)</option>
                <option value="parent">Parent (Mother/Father)</option>
                <option value="sibling">Sibling (Sister/Brother)</option>
                <option value="friend">Best Friend</option>
                <option value="colleague">Colleague</option>
                <option value="other">Someone Else</option>
              </select>
            </div>

            {/* Occasion Input */}
            <div>
              <label
                htmlFor="gift-occasion"
                className="block text-sm font-semibold text-brand-text mb-2"
              >
                What's the occasion?
              </label>
              <select
                id="gift-occasion"
                name="occasion"
                value={giftData.occasion}
                onChange={handleGiftChange}
                required
                className="w-full px-4 py-3 bg-brand-bg/50 border border-brand-secondary/40 rounded-xl text-brand-text text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary hover:border-brand-primary/50 transition-all duration-200"
              >
                <option value="" disabled>Select an occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="valentines">Valentine's Day</option>
                <option value="graduation">Graduation</option>
                <option value="holiday">Holiday/Festival</option>
                <option value="just_because">Just Because ❤️</option>
              </select>
            </div>

            {/* Interests Input */}
            <div>
              <label
                htmlFor="interests"
                className="block text-sm font-semibold text-brand-text mb-2"
              >
                Interests & Passions
              </label>
              <textarea
                id="interests"
                name="interests"
                rows="3"
                value={giftData.interests}
                onChange={handleGiftChange}
                placeholder="e.g., Loves vintage vinyl, coffee brewing, hiking in the woods, or handmade pottery..."
                required
                className="w-full px-4 py-3 bg-brand-bg/50 border border-brand-secondary/40 rounded-xl text-brand-text text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary hover:border-brand-primary/50 transition-all duration-200 placeholder-brand-muted/60 resize-none"
              />
            </div>
          </div>
        ) : (
          /* ================= DATE MODE FIELDS ================= */
          <div className="space-y-6 animate-fade-in">
            {/* Occasion Input */}
            <div>
              <label
                htmlFor="date-occasion"
                className="block text-sm font-semibold text-brand-text mb-2"
              >
                Occasion
              </label>
              <input
                id="date-occasion"
                type="text"
                name="occasion"
                value={dateData.occasion}
                onChange={handleDateChange}
                placeholder="e.g., First Date, Anniversary, Weekend Escape..."
                required
                className="w-full px-4 py-3 bg-brand-bg/50 border border-brand-secondary/40 rounded-xl text-brand-text text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary hover:border-brand-primary/50 transition-all duration-200 placeholder-brand-muted/60"
              />
            </div>

            {/* Budget Input */}
            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-semibold text-brand-text mb-2"
              >
                Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={dateData.budget}
                onChange={handleDateChange}
                required
                className="w-full px-4 py-3 bg-brand-bg/50 border border-brand-secondary/40 rounded-xl text-brand-text text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary hover:border-brand-primary/50 transition-all duration-200"
              >
                <option value="" disabled>Select a budget level</option>
                <option value="free">Free / Low Cost ($)</option>
                <option value="moderate">Moderate ($$)</option>
                <option value="splurge">Splurge ($$$)</option>
              </select>
            </div>

            {/* Location Input */}
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-semibold text-brand-text mb-2"
              >
                Location or Setting
              </label>
              <input
                id="location"
                type="text"
                name="location"
                value={dateData.location}
                onChange={handleDateChange}
                placeholder="e.g., Brooklyn, NY / Cozy Indoor / Beachfront..."
                required
                className="w-full px-4 py-3 bg-brand-bg/50 border border-brand-secondary/40 rounded-xl text-brand-text text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary hover:border-brand-primary/50 transition-all duration-200 placeholder-brand-muted/60"
              />
            </div>

            {/* Vibe Input */}
            <div>
              <label
                htmlFor="vibe"
                className="block text-sm font-semibold text-brand-text mb-2"
              >
                Vibe
              </label>
              <select
                id="vibe"
                name="vibe"
                value={dateData.vibe}
                onChange={handleDateChange}
                required
                className="w-full px-4 py-3 bg-brand-bg/50 border border-brand-secondary/40 rounded-xl text-brand-text text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary hover:border-brand-primary/50 transition-all duration-200"
              >
                <option value="" disabled>Select a vibe</option>
                <option value="romantic">Romantic & Intimate</option>
                <option value="adventurous">Adventurous & Active</option>
                <option value="casual">Casual & Cozy</option>
                <option value="artistic">Artistic & Cultural</option>
                <option value="fancy">Luxurious & Elegant</option>
              </select>
            </div>
          </div>
        )}

        {/* Generate Ideas Button */}
        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto px-8 py-4 bg-brand-primary text-white font-medium text-base rounded-full shadow-lg shadow-brand-primary/15 hover:bg-brand-primary/95 hover:shadow-brand-primary/20 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 flex items-center justify-center gap-2 group"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span>Curating plans...</span>
              </>
            ) : (
              <>
                <span>Generate Plan</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  ✨
                </span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default DynamicForm;
