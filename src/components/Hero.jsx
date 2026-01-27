import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
          Bonjour, je suis <span className="text-indigo-600">Sofiane</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Développeur Web Full Stack
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
          Je crée des expériences web modernes et intuitives. Passionné par le développement frontend et backend.
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="#projects" 
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Voir mes projets
          </a>
          <a 
            href="#contact" 
            className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
