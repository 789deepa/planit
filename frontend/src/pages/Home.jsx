import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ModeSelector from "../components/ModeSelector";
import DynamicForm from "../components/DynamicForm";
import Footer from "../components/Footer";

function Home() {
  const [selectedMode, setSelectedMode] = useState("gift");

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text font-sans antialiased selection:bg-brand-secondary/40 selection:text-brand-primary">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Mode Selector Cards */}
        <ModeSelector selectedMode={selectedMode} setSelectedMode={setSelectedMode} />

        {/* Dynamic Form fields */}
        <DynamicForm mode={selectedMode} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}


export default Home;