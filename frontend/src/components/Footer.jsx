import React from "react";

function Footer() {
  return (
    <footer className="w-full border-t border-brand-secondary/30 bg-white/40 py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        {/* Brand Copyright */}
        <div>
          <p className="text-sm font-serif text-brand-text font-semibold">
            PlanIt
          </p>
          <p className="text-xs text-brand-muted mt-1">
            © {new Date().getFullYear()} PlanIt. All rights reserved.
          </p>
        </div>

        {/* Info & Tech badge */}
        <div className="flex items-center gap-1.5 text-xs text-brand-muted">
          <span>Built with</span>
          <span className="font-semibold text-brand-primary">React</span>
          <span>+</span>
          <span className="font-semibold text-brand-primary">AI</span>
        </div>

        {/* GitHub Link */}
        <div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-brand-text/80 hover:text-brand-primary transition-colors duration-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
