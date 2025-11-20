import React from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ChevronDown, Terminal } from 'lucide-react';
import Particles from 'react-particles';
import { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const Hero = () => {
  const containerRef = React.useRef(null);
  
  useGSAP(() => {
    gsap.from('.hero-text', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out'
    });
  }, { scope: containerRef });

  const particlesInit = React.useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#8B5CF6",
            },
            links: {
              color: "#8B5CF6",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
        }}
      />
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6"
        >
          <Terminal className="w-16 h-16 text-violet-500" />
        </motion.div>
        
        <h1 className="hero-text text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
          Yashwanth 
        </h1>
        
        <div className="hero-text text-2xl md:text-3xl text-gray-300 mb-8 font-light">
          <span className="typing-text">AI Prompt Engineer | Frontend Developer</span>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hero-text px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-medium text-lg hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
        >
          Explore My Work
        </motion.button>
        
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
