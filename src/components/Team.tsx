import React from 'react';

const Team = () => {
  const projects = [
    {
      name: 'Task Manager',
      role: 'Full Stack App',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
      stack: 'MongoDB, Express, React, Node.js',
      description: 'A productivity app to manage daily tasks with authentication and real-time updates.',
      link: 'https://github.com/yourusername/task-manager'
    },
    {
      name: 'Recipe Finder',
      role: 'Search App',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
      stack: 'React, Node.js, Edamam API',
      description: 'Find recipes by ingredients and dietary preferences with a beautiful UI.',
      link: 'https://github.com/yourusername/recipe-finder'
    },
    {
      name: 'Portfolio Website',
      role: 'Personal Website',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
      stack: 'React, Tailwind CSS',
      description: 'A modern, responsive portfolio to showcase my projects and skills.',
      link: 'https://github.com/yourusername/portfolio'
    },
    {
      name: 'Weather Dashboard',
      role: 'Weather App',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      stack: 'React, OpenWeatherMap API',
      description: 'Get real-time weather updates and forecasts for any city worldwide.',
      link: 'https://github.com/yourusername/weather-dashboard'
    },
    {
      name: 'Blog Platform',
      role: 'Content Management',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
      stack: 'MongoDB, Express, React, Node.js',
      description: 'A full-featured blog platform with markdown support and user authentication.',
      link: 'https://github.com/yourusername/blog-platform'
    },
    {
      name: 'Expense Tracker',
      role: 'Finance App',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      stack: 'React, Node.js, MongoDB',
      description: 'Track your expenses and visualize spending habits with charts.',
      link: 'https://github.com/yourusername/expense-tracker'
    },

  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-cyber-white mb-4">
            MY <span className="text-cyber-red">PORTFOLIO</span>
          </h2>
          <div className="w-32 h-1 bg-cyber-red mx-auto mb-6"></div>
          <p className="text-xl font-rajdhani text-cyber-white/80 max-w-3xl mx-auto leading-relaxed">
            Explore some of my best MERN stack projects. Hover over each project to learn more.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-cyber-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-2xl font-orbitron font-bold text-cyber-red mb-2">{project.name}</h3>
                <p className="font-rajdhani text-cyber-white/80 mb-2">{project.role}</p>
                <p className="font-rajdhani text-cyber-white/60 text-sm mb-4">{project.stack}</p>
                <p className="font-rajdhani text-cyber-white/80 text-sm mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-border px-4 py-2 font-orbitron font-bold text-cyber-white hover:text-cyber-black hover:bg-cyber-red transition-all duration-300 hover-glow tracking-wider"
                >
                  VIEW PROJECT
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Philosophy */}
        <div className="cyber-border p-8 text-center">
          <h3 className="text-3xl font-orbitron font-bold text-cyber-white mb-4">
            BUILDING <span className="text-cyber-red">IMPACTFUL</span> SOLUTIONS
          </h3>
          <p className="text-lg font-rajdhani text-cyber-white/80 max-w-4xl mx-auto leading-relaxed">
            I focus on creating robust, scalable, and user-friendly applications using the MERN stack. Each project reflects my passion for clean code and innovative solutions.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 flex flex-col gap-4 items-center justify-center">
          <h3 className="text-2xl font-orbitron font-bold text-cyber-white mb-4">
            WANT TO WORK TOGETHER?
          </h3>
          <a
            href="mailto:your.email@example.com"
            className="cyber-border px-8 py-4 font-orbitron font-bold text-cyber-white hover:text-cyber-black hover:bg-cyber-red transition-all duration-300 hover-glow tracking-wider"
          >
            CONTACT ME
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
