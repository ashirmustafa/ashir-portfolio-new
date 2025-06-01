
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToHome = () => {
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 border border-cyber-red/30 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-cyber-red/20 rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-cyber-red/25 -rotate-12 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4">
        {/* Main Logo/Title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-black text-cyber-white mb-4">
            <span className=" animate-neon-pulse">Ashir M.</span>
          </h1>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyber-red to-transparent mb-6"></div>
          <p className="text-xl md:text-2xl font-rajdhani font-light text-cyber-white/80 tracking-widest">
            MERN Developer & GEN AI Engineer
          </p>
          <p className="text-lg md:text-xl font-rajdhani text-cyber-red/80 tracking-wider mt-2">
            4+ Years of Experience
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToHome}
          className="cyber-border px-8 py-4 font-orbitron font-bold text-cyber-white hover:text-cyber-black hover:bg-cyber-red transition-all duration-300 hover-glow tracking-wider"
        >
          See More
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyber-red animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
