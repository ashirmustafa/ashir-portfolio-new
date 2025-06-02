
import React from 'react';
import { Trophy, Target, Users, Zap } from 'lucide-react';

const Home = () => {
  const stats = [
    { icon: Trophy, label: 'FRONTEND DEVELOPMENT', value: '9/10' },
    { icon: Target, label: 'BACKEND DEVELOPMENT', value: '8/10' },
    { icon: Users, label: 'QUALITY ASSURANCE', value: '9/10' },
    { icon: Zap, label: 'GEN AI', value: '8/10' },
  ];

  const achievements = [
    'Senior Frontend Engineer - Graduates First',
    'MERN Stack Developer - Altaurux',
    'React JS Developer - Kausar Processing Limited',
    'Frontend Developer - Fiverr (Freelancing)',
  ];

  return (
    <section id="about-me" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-cyber-white mb-4">
            My <span className="text-cyber-red">Experience</span>
          </h2>
          <div className="w-32 h-1 bg-cyber-red mx-auto mb-6"></div>
          <p className="text-xl font-rajdhani text-cyber-white/80 max-w-3xl mx-auto leading-relaxed">
            Passionate full stack developer specializing in building modern, scalable web applications. 
            I love solving complex problems and delivering impactful digital experiences.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="cyber-border p-6 text-center hover-glow">
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-cyber-red" />
              <div className="text-3xl font-orbitron font-bold text-cyber-white mb-2">{stat.value}</div>
              <div className="text-sm font-rajdhani text-cyber-white/70 tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-orbitron font-bold text-cyber-white mb-6">
              Work <span className="text-cyber-red">History</span>
            </h3>
            <p className="text-lg font-rajdhani text-cyber-white/80 mb-6 leading-relaxed">
              I have extensive experience as a frontend and full stack developer, delivering high-impact solutions for platforms like AssessCandidates and Safra.io, each serving millions of users worldwide.
            </p>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyber-red"></div>
                  <span className="font-rajdhani text-cyber-white/90">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="cyber-border p-8 text-center">
              <div className="text-6xl font-orbitron font-black text-cyber-red mb-4">
                1001
              </div>
              <div className="text-xl font-rajdhani text-cyber-white mb-2">Codechef Rating</div>
              <div className="text-sm font-rajdhani text-cyber-white/70">86th in Pakistan</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="cyber-border px-8 py-4 font-orbitron font-bold text-cyber-white hover:text-cyber-black hover:bg-cyber-red transition-all duration-300 hover-glow tracking-wider">
            CONTACT ME
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
