import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'Une application e-commerce complète avec panier, paiement et gestion des commandes.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: 'https://via.placeholder.com/400x300',
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Tableau de bord interactif avec visualisations de données en temps réel.',
      technologies: ['React', 'Chart.js', 'Tailwind'],
      image: 'https://via.placeholder.com/400x300',
    },
    {
      id: 3,
      title: 'Task Manager App',
      description: 'Application de gestion de tâches avec drag & drop et notifications.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      image: 'https://via.placeholder.com/400x300',
    },
    {
      id: 4,
      title: 'Portfolio Template',
      description: 'Template de portfolio moderne et responsive pour développeurs.',
      technologies: ['React', 'Vite', 'Tailwind CSS'],
      image: 'https://via.placeholder.com/400x300',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Mes Projets
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
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
                <div className="flex gap-4">
                  <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                    Voir démo →
                  </button>
                  <button className="text-gray-600 hover:text-gray-700 font-medium">
                    Code source →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
