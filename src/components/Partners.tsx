import React from 'react';

const Partners = () => {
  const partners = [
    { name: 'TypeScript', category: 'LANGUAGE', level: 95 },
    { name: 'React', category: 'FRAMEWORK', level: 92 },
    { name: 'Node.js', category: 'BACKEND', level: 88 },
    { name: 'TailwindCSS', category: 'STYLING', level: 85 },
    { name: 'Next.js', category: 'FULLSTACK', level: 90 },
    { name: 'Redux', category: 'STATE MGMT', level: 80 },
    { name: 'GraphQL', category: 'API', level: 75 },
    { name: 'Jest', category: 'TESTING', level: 70 },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-cyber-dark-gray/50">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-cyber-white mb-4">
            My <span className="">Skills</span>
          </h2>
          <div className="w-32 h-1 bg-cyber-red mx-auto mb-6"></div>
          <p className="text-xl font-rajdhani text-cyber-white/80 max-w-3xl mx-auto leading-relaxed">
            Here are some of the technologies and tools I use to build robust, scalable, and modern web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="cyber-border p-6 rounded-xl bg-cyber-dark-gray/80 shadow-lg hover:shadow-cyber-red/30 transition-shadow duration-300 flex flex-col items-center group"
            >
              <div className="text-2xl font-orbitron font-bold text-cyber-white group-hover:text-cyber-red transition-colors duration-300 mb-1">
                {partner.name}
              </div>
              <div className="text-xs font-rajdhani text-cyber-white/60 tracking-wider mb-4">
                {partner.category}
              </div>
              {/* Skill Bar */}
              <div className="w-full flex flex-col items-center">
                <div className="w-full h-4 bg-cyber-white/10 rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-gradient-to-r from-cyber-red to-cyber-white transition-all duration-700"
                    style={{ width: `${partner.level}%` }}
                  ></div>
                </div>
                <span className="text-cyber-red font-orbitron text-sm font-bold">
                  {partner.level}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 cyber-border flex items-center justify-center rounded-full bg-cyber-dark-gray/60">
              <svg className="w-8 h-8 text-cyber-red" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-xl font-orbitron font-bold text-cyber-white mb-2">MODERN STACK</h3>
            <p className="font-rajdhani text-cyber-white/70">
              Building with the latest frameworks and libraries for optimal performance.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 cyber-border flex items-center justify-center rounded-full bg-cyber-dark-gray/60">
              <svg className="w-8 h-8 text-cyber-red" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16v16H4z" />
              </svg>
            </div>
            <h3 className="text-xl font-orbitron font-bold text-cyber-white mb-2">SCALABILITY</h3>
            <p className="font-rajdhani text-cyber-white/70">
              Creating scalable solutions that grow with your needs.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 cyber-border flex items-center justify-center rounded-full bg-cyber-dark-gray/60">
              <svg className="w-8 h-8 text-cyber-red" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-orbitron font-bold text-cyber-white mb-2">BEST PRACTICES</h3>
            <p className="font-rajdhani text-cyber-white/70">
              Writing clean, maintainable, and well-tested code.
            </p>
          </div>
        </div>

        {/* Skills CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-orbitron font-bold text-cyber-white mb-4">
            WANT TO WORK TOGETHER?
          </h3>
          <button className="cyber-border px-8 py-4 font-orbitron font-bold text-cyber-white hover:text-cyber-black hover:bg-cyber-red transition-all duration-300 hover-glow tracking-wider">
            CONTACT ME
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
