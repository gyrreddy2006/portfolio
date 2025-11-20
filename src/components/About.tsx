import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code, Coffee, Sparkles, Rocket, Globe, Star } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'AI & ML', icon: Brain, color: 'text-purple-500', level: '75%' },
    { name: 'Frontend Dev', icon: Code, color: 'text-blue-500', level: '70%' },
    { name: 'Problem Solving', icon: Sparkles, color: 'text-pink-500', level: '64%' },
    { name: 'Innovation', icon: Rocket, color: 'text-orange-500', level: '68%' },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Who <span className="text-violet-500">Am I?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative group"
          >

            <div className="absolute -bottom-6 -right-6 bg-gray-800 p-4 rounded-lg shadow-xl">
              <Coffee className="w-8 h-8 text-violet-500 animate-bounce" />
            </div>
          </motion.div>
          
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm a Yashwanth .A visionary AI Prompt Engineer and Frontend Developer with a passion for creating 
                intelligent and beautiful digital experiences. My journey began with a fascination 
                for technology and has evolved into mastering the art of human-AI collaboration.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                When I'm not crafting prompts or coding interfaces, you'll find me exploring new AI 
                technologies.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative bg-gray-800 p-4 rounded-lg overflow-hidden group hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <skill.icon className={`w-5 h-5 ${skill.color}`} />
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                  </div>
                  <div className="h-1 bg-gray-700 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: skill.level } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
