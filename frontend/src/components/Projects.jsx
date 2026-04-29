import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Fansite Malaisie',
      description: 'Site vitrine dédié à la Malaisie, présentant culture, paysages et informations pratiques.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&h=300&fit=crop',
      link: 'https://fansite.azim404.com/',
      date: 'Septembre 2025',
    },
    {
      id: 2,
      title: 'Novakult',
      description: 'Médiathèque culturelle en ligne pour gérer et explorer une collection de médias variés.',
      technologies: ['PHP', 'MySQL', 'Apache'],
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=300&fit=crop',
      link: 'https://novakult.azim404.com/',
      date: 'Novembre 2025',
    },
    {
      id: 3,
      title: 'MovieDB',
      description: 'Application web de découverte de films avec recherche, filtres et détails complets des films.',
      technologies: ['React', 'API TMDB', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop',
      link: 'https://moviedb.azim404.com/',
      date: 'Janvier 2026',
    },
    {
      id: 4,
      title: 'MarsAI',
      description: 'Application web orientée IA avec expérience dédiée, pensée pour une navigation simple et rapide.',
      technologies: ['React', 'API', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
      link: 'https://Marsai.azim404.com/',
      date: 'Mars 2026',
    },
    {
      id: 5,
      title: 'WikisGuessr',
      description: "Jeu inspiré de GeoGuessr basé sur Wikipédia : devinez le sujet à partir d'indices progressifs.",
      technologies: ['React', 'Node.js', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
      link: 'https://wikisguessr.azim404.com/',
      date: 'Avril 2026 (en cours)',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Mes Projets
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow block focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {project.title}
                  </h3>
                  <span className="shrink-0 text-xs text-gray-500 mt-1">
                    {project.date}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-indigo-600 font-medium">Cliquer sur la card pour ouvrir</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
