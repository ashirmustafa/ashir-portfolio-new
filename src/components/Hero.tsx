

// import React, { useEffect, useRef } from 'react';
// import { ChevronDown } from 'lucide-react';
// import gsap from 'gsap';
// import { SplitText } from 'gsap/SplitText';

// // Register GSAP plugins
// gsap.registerPlugin(SplitText);

// const Hero = () => {
//   const nameRef = useRef(null);
//   const subtitleRef = useRef(null);
//   const experienceRef = useRef(null);
  
//   useEffect(() => {
//     if (typeof window !== 'undefined' && nameRef.current) {
//       // Create a GSAP context for easy cleanup
//       const ctx = gsap.context(() => {
//         // Name animation
//         const nameSplit = new SplitText(nameRef.current, {
//           type: "chars",
//           charsClass: "char"
//         });
        
//         gsap.set(nameSplit.chars, {
//           opacity: 0,
//           y: 80,
//           rotationX: 180,
//           transformOrigin: "0% 50% -50"
//         });
        
//         const tl = gsap.timeline({
//           defaults: { ease: "power4.out", duration: 1 }
//         });
        
//         // Staggered character animation
//         tl.to(nameSplit.chars, {
//           opacity: 1,
//           y: 0,
//           rotationX: 0,
//           stagger: 0.05
//         })
//         // Color cycling effect
//         .to(nameSplit.chars, {
//           keyframes: [
//             { color: "#fff", duration: 0.1 },
//             { color: "#ff2a6d", duration: 0.2 },
//             { color: "#05d9ff", duration: 0.2 },
//             { color: "#ff2a6d", duration: 0.2 },
//             { color: "#fff", duration: 0.1 }
//           ],
//           stagger: 0.02,
//           repeat: -1,
//           repeatDelay: 3,
//           yoyo: true
//         }, "-=0.5")
//         // Glow effect
//         .to(nameRef.current, {
//           duration: 3,
//           textShadow: "0 0 5px #05d9ff, 0 0 10px #ff2a6d, 0 0 20px #d300c5",
//           repeat: -1,
//           yoyo: true,
//           ease: "sine.inOut"
//         }, "-=1");
        
//         // Subtitle animation
//         gsap.from(subtitleRef.current, {
//           opacity: 0,
//           y: 30,
//           duration: 1.5,
//           delay: 1.2,
//           ease: "power3.out"
//         });
        
//         // Experience text animation
//         gsap.from(experienceRef.current, {
//           opacity: 0,
//           y: 30,
//           duration: 1.5,
//           delay: 1.5,
//           ease: "power3.out"
//         });
        
//         // Animated line
//         const line = document.querySelector('.gradient-line');
//         gsap.from(line, {
//           scaleX: 0,
//           duration: 1.5,
//           delay: 0.8,
//           ease: "power3.out",
//           transformOrigin: "center center"
//         });
        
//       }, nameRef); // scope the context to the nameRef
      
//       return () => ctx.revert(); // cleanup
//     }
//   }, []);

//   const scrollToHome = () => {
//     const element = document.getElementById('home');
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-20 left-10 w-64 h-64 border border-cyber-red/30 rotate-45 animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-48 h-48 border border-cyber-red/20 rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
//         <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-cyber-red/25 -rotate-12 animate-pulse" style={{ animationDelay: '2s' }}></div>
//       </div>

//       <div className="relative z-10 text-center px-4">
//         {/* Main Logo/Title */}
//         <div className="mb-8">
//           <h1 className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-black text-cyber-white mb-4">
//             <span ref={nameRef} className="inline-block">Ashir M.</span>
//           </h1>
//           <div className="gradient-line w-full h-1 bg-gradient-to-r from-transparent via-cyber-red to-transparent mb-6"></div>
//           <p ref={subtitleRef} className="text-xl md:text-2xl font-rajdhani font-light text-cyber-white/80 tracking-widest">
//             MERN Developer & GEN AI Engineer
//           </p>
//           <p ref={experienceRef} className="text-lg md:text-xl font-rajdhani text-cyber-red/80 tracking-wider mt-2">
//             4+ Years of Experience
//           </p>
//         </div>

//         {/* CTA Button */}
//         <button
//           onClick={scrollToHome}
//           className="cyber-border px-8 py-4 font-orbitron font-bold text-cyber-white hover:text-cyber-black hover:bg-cyber-red transition-all duration-300 hover-glow tracking-wider"
//         >
//           See More
//         </button>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyber-red animate-bounce">
//         <ChevronDown size={32} />
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { Howl } from 'howler';

const Hero = () => {
  const nameRef = useRef(null);
  const subtitleRef = useRef(null);
  const experienceRef = useRef(null);
  const [soundsLoaded, setSoundsLoaded] = useState(false);

  // Load sounds
  useEffect(() => {
    const hoverSound = new Howl({
      src: ['/sounds/hover-blip.mp3'],
      volume: 0.3,
      onload: () => setSoundsLoaded(true),
    });

    const clickSound = new Howl({
      src: ['/sounds/click-tech.mp3'],
      volume: 0.4,
    });

    return () => {
      hoverSound.unload();
      clickSound.unload();
    };
  }, []);

  // GSAP Animations
  useEffect(() => {
    if (typeof window !== 'undefined' && nameRef.current) {
      const ctx = gsap.context(() => {
        const nameSplit = new SplitText(nameRef.current, { type: "chars" });
        
        gsap.set(nameSplit.chars, {
          opacity: 0,
          y: 80,
          rotationX: 180,
          transformOrigin: "0% 50% -50",
        });

        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
        
        // Name animation
        tl.to(nameSplit.chars, {
          opacity: 1,
          y: 0,
          rotationX: 0,
          stagger: 0.05,
          duration: 1,
        })
        .to(nameSplit.chars, {
          keyframes: [
            { color: "#fff", duration: 0.1 },
            { color: "#ff2a6d", duration: 0.2 },
            { color: "#05d9ff", duration: 0.2 },
            { color: "#ff2a6d", duration: 0.2 },
            { color: "#fff", duration: 0.1 },
          ],
          stagger: 0.02,
          repeat: -1,
          repeatDelay: 3,
          yoyo: true,
        }, "-=0.5")
        .to(nameRef.current, {
          textShadow: "0 0 5px #05d9ff, 0 0 10px #ff2a6d, 0 0 20px #d300c5",
          repeat: -1,
          yoyo: true,
          duration: 3,
          ease: "sine.inOut",
        }, "-=1");

        // Subtitle & line animations
        gsap.from(subtitleRef.current, { opacity: 0, y: 30, duration: 1.5, delay: 1.2, ease: "power3.out" });
        gsap.from(experienceRef.current, { opacity: 0, y: 30, duration: 1.5, delay: 1.5, ease: "power3.out" });
        gsap.from(".gradient-line", { scaleX: 0, duration: 1.5, delay: 0.8, ease: "power3.out" });

      }, nameRef);

      return () => ctx.revert();
    }
  }, []);

  const scrollToHome = () => {
    const clickSound = new Howl({ src: ['/sounds/click-tech.mp3'], volume: 0.4 });
    clickSound.play();
    
    const element = document.getElementById('home');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const playHoverSound = () => {
    if (!soundsLoaded) return;
    const hoverSound = new Howl({ src: ['/sounds/hover-blip.mp3'], volume: 0.3 });
    hoverSound.play();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid crt-effect">
      {/* CRT Scanlines (CSS in global.css) */}
      <div className="crt-overlay"></div>

      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 border border-cyber-red/30 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-cyber-red/20 rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-cyber-red/25 -rotate-12 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-black text-cyber-white mb-4">
            <span ref={nameRef} className="inline-block">Ashir M.</span>
          </h1>
          <div className="gradient-line w-full h-1 bg-gradient-to-r from-transparent via-cyber-red to-transparent mb-6"></div>
          <p ref={subtitleRef} className="text-xl md:text-2xl font-rajdhani font-light text-cyber-white/80 tracking-widest">
            MERN Developer & GEN AI Engineer
          </p>
          <p ref={experienceRef} className="text-lg md:text-xl font-rajdhani text-cyber-red/80 tracking-wider mt-2">
            4+ Years of Experience
          </p>
        </div>

        {/* Button with sound effects */}
        <button
          onClick={scrollToHome}
          onMouseEnter={playHoverSound}
          className="cyber-button px-8 py-4 font-orbitron font-bold text-cyber-white hover:text-cyber-black hover:bg-cyber-red transition-all duration-300 hover-glow tracking-wider"
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
