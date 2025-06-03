import React from 'react';
import assessCandidates from '../../public/portfolioPictures/assessCandidates.png'
import safra from '../../public/portfolioPictures/safra0.png'
import soloon from '../../public/portfolioPictures/soloon.png'
import homeCar from '../../public/portfolioPictures/homeCar0.png'
import mediaFire from '../../public/portfolioPictures/mediaFire1.png'
import crusadeTechnologies from '../../public/portfolioPictures/crusadeTechnologies.png'

const Team = () => {
  const projects = [
    {
      name: 'AssessCandidates',
      role: 'Full Stack App',
      image: assessCandidates,
      stack: 'MongoDB, Express, React, Node.js',
      description: 'A complete ATS, with handling more than million candidates, Including Assessments, Reports & Interviews with Anti-cheat system',
      link: 'https://github.com/ashirmustafa/assess-candidates'
    },
    {
      name: 'Safra-Tourism',
      role: 'Full Stack App',
      image: safra,
      stack: 'React, Node.js, Open AI, Google places API, PKFARE, Edamam API',
      description: 'A complete AI Based tourism app integrated with real-time hotels, flights data',
      link: 'https://github.com/ashirmustafa/safra'
    },
    {
      name: 'Home Car',
      role: 'Car repair app',
      image: homeCar,
      stack: 'React, Tailwind CSS',
      description: 'A car repairing service that comes to your home. The app is used to get data of car repairment that needed.',
      link: 'https://github.com/ashir/portfolio'
    },
    {
      name: 'Soloon',
      role: 'Gambling App',
      image: soloon,
      stack: 'React JS, Tailwind CSS',
      description: 'A Gambling app where people can earn money playing games',
      link: 'https://github.com/ashirmustafa/soloon'
    },
    {
      name: 'MediaFire',
      role: 'Review System',
      image: mediaFire,
      stack: 'MongoDB, Express, React, Node.js',
      description: 'A full-featured review system platform. Just like trustpilot, mediafire will provide trusted ratings based on submissions!',
      link: 'https://github.com/ashirmustafa/media-fire'
    },
    {
      name: 'Crusade Technologies',
      role: 'Hiring App',
      image: crusadeTechnologies,
      stack: 'React, Node.js, MongoDB',
      description: 'Find and Track your candidates based on location, job listings , etc',
      link: 'https://github.com/ashirmustafa/crusade-technologies'
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
