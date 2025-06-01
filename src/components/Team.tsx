
import React from 'react';
import { Crown, Gamepad2, Shield, Sword } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'EL Faizonic',
      role: 'Pusi Ass Nigga',
      game: 'VALORANT',
      icon: Crown,
      stats: { kd: '2.1', winRate: '94%', rank: 'RADIANT' },
      description: 'Strategic mastermind with unparalleled leadership skills'
    },
    {
      name: 'Sexy',
      role: 'Sab ka PYO',
      game: 'VALORANT',
      icon: Crown,
      stats: { kd: '1.8', winRate: '89%', rank: 'GLOBAL' },
      description: 'Aggressive entry fragger with exceptional aim'
    },
    {
      name: 'Qasim Bilal',
      role: 'MANAGER',
      game: 'VALORANT',
      icon: Shield,
      stats: { kd: '1.4', winRate: '92%', rank: 'IMMORTAL' },
      description: 'Tactical genius specializing in utility usage'
    },
    {
      name: 'Ahmed',
      role: 'MANAGER',
      game: 'VALORANT',
      icon: Gamepad2,
      stats: { kd: '2.3', winRate: '91%', rank: 'GLOBAL' },
      description: 'Precision sniper with lightning-fast reflexes'
    },
    {
      name: 's1lver',
      role: 'DUELIST',
      game: 'VALORANT',
      icon: Sword,
      stats: { kd: '2.0', winRate: '88%', rank: 'RADIANT' },
      description: 'Explosive duelist creating space for the team'
    },
    {
      name: 'Waji bhai',
      role: 'Senior MQL Developer',
      game: 'VALORANT',
      icon: Crown,
      stats: { kd: '1.6', winRate: '93%', rank: 'GLOBAL' },
      description: 'In-game leader with superior game sense'
    }
  ];

  return (
    <section id="team" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-cyber-white mb-4">
            OUR <span className="">ROSTER</span>
          </h2>
          <div className="w-32 h-1 bg-cyber-red mx-auto mb-6"></div>
          <p className="text-xl font-rajdhani text-cyber-white/80 max-w-3xl mx-auto leading-relaxed">
            Meet the elite warriors who represent OMENTEX in the digital battlefield. 
            Each member brings unique skills and unwavering dedication.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="cyber-border p-6 hover-glow group">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 cyber-border rounded-full flex items-center justify-center group-hover:animate-glow">
                  <member.icon className="w-10 h-10 text-cyber-red" />
                </div>
                <h3 className="text-2xl font-orbitron font-bold text-cyber-white group-hover:text-cyber-red transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="font-rajdhani text-cyber-red tracking-wider">{member.role}</p>
                <p className="font-rajdhani text-cyber-white/60 text-sm">{member.game}</p>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="font-rajdhani text-cyber-white/70">K/D RATIO</span>
                  <span className="font-orbitron text-cyber-red font-bold">{member.stats.kd}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-rajdhani text-cyber-white/70">WIN RATE</span>
                  <span className="font-orbitron text-cyber-red font-bold">{member.stats.winRate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-rajdhani text-cyber-white/70">RANK</span>
                  <span className="font-orbitron text-cyber-red font-bold">{member.stats.rank}</span>
                </div>
              </div>

              <div className="w-full h-0.5 bg-cyber-red/30 mb-4"></div>
              <p className="font-rajdhani text-cyber-white/80 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Philosophy */}
        <div className="cyber-border p-8 text-center">
          <h3 className="text-3xl font-orbitron font-bold text-cyber-white mb-4">
            ONE TEAM, ONE <span className="text-cyber-red">DREAM</span>
          </h3>
          <p className="text-lg font-rajdhani text-cyber-white/80 max-w-4xl mx-auto leading-relaxed">
            Our success comes from relentless practice, strategic innovation, and unbreakable team synergy. 
            We don't just play games - we redefine what's possible in competitive esports.
          </p>
        </div>

        {/* Recruitment CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-orbitron font-bold text-cyber-white mb-4">
            THINK YOU HAVE WHAT IT TAKES?
          </h3>
          <button className="cyber-border px-8 py-4 font-orbitron font-bold text-cyber-white hover:text-cyber-black hover:bg-cyber-red transition-all duration-300 hover-glow tracking-wider">
            JOIN TRYOUTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
