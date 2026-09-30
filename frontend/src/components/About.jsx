import React from 'react';

const About = () => {
  const skills = [
    { name: 'React 19 & Vite', icon: '⚛️' },
    { name: 'Node.js & Express', icon: '🟢' },
    { name: 'PHP & POO (MVC)', icon: '🐘' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'MySQL & BDD Relationnelles', icon: '🗄️' },
    { name: 'Docker & Microservices', icon: '🐳' },
    { name: 'Nginx & Reverse Proxy', icon: '🌐' },
    { name: 'Git & GitHub CI/CD', icon: '🐙' },
    { name: 'APIs REST & Authentification JWT', icon: '🔐' },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 relative bg-slate-950/60">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            À Propos de Moi
          </h2>
          <p className="text-cyan-400 font-medium text-sm sm:text-base">
            Parcours, méthodologie et stack technique
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="glass-panel p-8 rounded-2xl space-y-4 text-gray-300 text-base leading-relaxed">
            <p>
              Développeur web passionné, je conçois et maintiens des applications web complètes, de l'ergonomie des interfaces à la robustesse du backend et du déploiement serveur.
            </p>
            <p>
              Mon approche est guidée par l'efficacité du code, la sécurité des flux de données et la fluidité de l'expérience utilisateur.
            </p>
            <p className="text-gray-400 text-sm">
              Actuellement basé en France, je développe des projets personnels et collaboratifs hébergés sur mon propre VPS sous le domaine <span className="text-cyan-300 font-mono">azim404.com</span>.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-6 font-mono uppercase tracking-wide text-cyan-300">
              Stack & Compétences
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-cyan-400/80 text-gray-200 text-xs sm:text-sm font-medium transition-all hover:shadow-[0_0_12px_rgba(34,211,238,0.2)]"
                >
                  <span>{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
