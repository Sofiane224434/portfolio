import React from 'react';

const About = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Git', level: 85 },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          À propos de moi
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 text-lg mb-6">
              Developpeur passionné avec plusieurs années d'experience dans la création d'applications web modernes et performantes.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              Je me spécialise dans le développement frontend avec React et dans la création d'interfaces utilisateur élégantes et intuitives.
            </p>
            <p className="text-gray-600 text-lg">
              Toujours à la recherche de nouveaux défis et d'opportunités pour apprendre et grandir en tant que développeur.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Compétences</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
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
