
import React from 'react';

const Partners = () => {
  const partners = [
    { name: 'HYPERX', category: 'GAMING GEAR' },
    { name: 'NVIDIA', category: 'GRAPHICS' },
    { name: 'RAZER', category: 'PERIPHERALS' },
    { name: 'REDBULL', category: 'ENERGY' },
    { name: 'ALIENWARE', category: 'HARDWARE' },
    { name: 'DISCORD', category: 'COMMUNICATION' },
    { name: 'TWITCH', category: 'STREAMING' },
    { name: 'LOGITECH', category: 'DEVICES' },
  ];

  return (
    <section id="partners" className="py-20 px-4 bg-cyber-dark-gray/50">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-cyber-white mb-4">
            OUR <span className="">PARTNERS</span>
          </h2>
          <div className="w-32 h-1 bg-cyber-red mx-auto mb-6"></div>
          <p className="text-xl font-rajdhani text-cyber-white/80 max-w-3xl mx-auto leading-relaxed">
            We collaborate with industry leaders who share our vision for excellence 
            and innovation in competitive gaming.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="cyber-border p-6 text-center hover-glow cursor-pointer group"
            >
              <div className="text-2xl font-orbitron font-bold text-cyber-white group-hover:text-cyber-red transition-colors duration-300 mb-2">
                {partner.name}
              </div>
              <div className="text-sm font-rajdhani text-cyber-white/60 tracking-wider">
                {partner.category}
              </div>
              <div className="mt-4 w-full h-0.5 bg-cyber-red/30 group-hover:bg-cyber-red transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 cyber-border flex items-center justify-center">
              <div className="w-8 h-8 bg-cyber-red"></div>
            </div>
            <h3 className="text-xl font-orbitron font-bold text-cyber-white mb-2">CUTTING-EDGE TECH</h3>
            <p className="font-rajdhani text-cyber-white/70">
              Access to the latest gaming technology and equipment
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 cyber-border flex items-center justify-center">
              <div className="w-8 h-8 bg-cyber-red"></div>
            </div>
            <h3 className="text-xl font-orbitron font-bold text-cyber-white mb-2">GLOBAL REACH</h3>
            <p className="font-rajdhani text-cyber-white/70">
              Worldwide exposure and brand recognition
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 cyber-border flex items-center justify-center">
              <div className="w-8 h-8 bg-cyber-red"></div>
            </div>
            <h3 className="text-xl font-orbitron font-bold text-cyber-white mb-2">INNOVATION</h3>
            <p className="font-rajdhani text-cyber-white/70">
              Collaborative development of gaming solutions
            </p>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-orbitron font-bold text-cyber-white mb-4">
            INTERESTED IN PARTNERING?
          </h3>
          <button className="cyber-border px-8 py-4 font-orbitron font-bold text-cyber-white hover:text-cyber-black hover:bg-cyber-red transition-all duration-300 hover-glow tracking-wider">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
