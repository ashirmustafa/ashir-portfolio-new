
import React from 'react';
import { Trophy, Target, Users, Zap } from 'lucide-react';

const Home = () => {
  const stats = [
    { icon: Trophy, label: 'CHAMPIONSHIPS', value: '15+' },
    { icon: Target, label: 'WIN RATE', value: '87%' },
    { icon: Users, label: 'TEAM MEMBERS', value: '12' },
    { icon: Zap, label: 'YEARS ACTIVE', value: '5+' },
  ];

  const achievements = [
    'World Championship 2023 - 1st Place',
    'Regional Masters 2023 - Champions',
    'Spring Split 2023 - Undefeated',
    'International Cup 2022 - Winners',
  ];

  return (
    <section id="home" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-cyber-white mb-4">
            WELCOME TO <span className="neon-text">OMENTEX</span>
          </h2>
          <div className="w-32 h-1 bg-cyber-red mx-auto mb-6"></div>
          <p className="text-xl font-rajdhani text-cyber-white/80 max-w-3xl mx-auto leading-relaxed">
            We are the future of competitive gaming. Our elite team of professional esports athletes 
            dominates across multiple game titles, setting new standards in the digital arena.
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
              OUR <span className="text-cyber-red">LEGACY</span>
            </h3>
            <p className="text-lg font-rajdhani text-cyber-white/80 mb-6 leading-relaxed">
              Founded by gaming veterans with a vision to revolutionize competitive esports, 
              OMENTEX has quickly risen to become one of the most formidable teams in the industry. 
              Our dedication to excellence and cutting-edge strategies has earned us recognition worldwide.
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
              <div className="text-6xl font-orbitron font-black text-cyber-red mb-4 animate-neon-pulse">
                #1
              </div>
              <div className="text-xl font-rajdhani text-cyber-white mb-2">RANKED GLOBALLY</div>
              <div className="text-sm font-rajdhani text-cyber-white/70">ACROSS MULTIPLE TITLES</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="cyber-border px-8 py-4 font-orbitron font-bold text-cyber-white hover:text-cyber-black hover:bg-cyber-red transition-all duration-300 hover-glow tracking-wider">
            JOIN OUR COMMUNITY
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
