import React, { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Accueil' },
    { href: '#about', label: 'À propos' },
    { href: '#projects', label: 'Projets' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-md border-b border-cyan-500/20 transition-all">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors tracking-tight">
            Sofiane<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">.Kherarfa</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-cyan-300 text-sm font-semibold tracking-wide uppercase transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="https://azim404.com"
            className="text-xs px-3.5 py-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 font-mono font-medium transition shadow-[0_0_12px_rgba(6,182,212,0.2)] flex items-center gap-1.5"
          >
            <span>← azim404.com</span>
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-cyan-400 p-2"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-cyan-500/20 px-6 py-6 space-y-4 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-lg text-gray-200 hover:text-cyan-300 py-1 transition-colors uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://azim404.com"
            className="block text-center py-2.5 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-300 font-mono text-sm"
          >
            ← azim404.com
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
