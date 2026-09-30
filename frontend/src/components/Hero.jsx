import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#030712]"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 text-center max-w-4xl">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tight leading-none mb-6">
          Sofiane <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Kherarfa</span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-200 mb-6 tracking-tight">
          Développeur Web Full Stack
        </p>

        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Conception et déploiement d’applications web modernes, réactives et performantes. Spécialisé en architectures JavaScript (React, Node.js), PHP et environnements conteneurisés Docker sur VPS.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)]"
          >
            Découvrir mes projets ↓
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 font-semibold transition-all"
          >
            ✉ Me contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
