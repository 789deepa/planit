import React from "react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-brand-bg/85 border-b border-brand-secondary/30 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl font-bold tracking-tight text-brand-primary group-hover:text-brand-primary/80 transition-colors duration-200">
            PlanIt
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-brand-secondary/40 text-brand-primary font-medium tracking-wide">
            AI
          </span>
        </a>

        {/* Links */}
        <div className="flex items-center gap-8">
          <a
            href="#about"
            className="text-sm font-medium text-brand-text/85 hover:text-brand-primary transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-primary hover:after:w-full after:transition-all after:duration-300"
          >
            About
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-brand-text/85 hover:text-brand-primary transition-colors duration-200 flex items-center gap-1.5 group/git"
          >
            <span>GitHub</span>
            <svg
              className="w-4 h-4 text-brand-muted group-hover/git:text-brand-primary transition-colors duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.269c0-5.533-4.477-10.016-10-10.016z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
