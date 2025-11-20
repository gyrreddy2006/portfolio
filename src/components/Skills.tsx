import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Brain,
  Code,
  Database,
  Layout,
  Terminal,
  Cloud,
  Cpu,
  GitBranch,
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      category: 'AI & ML',
      icon: Brain,
      items: ['OpenAI ', 'Llama coder', 'Hugging Face'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Frontend',
      icon: Layout,
      items: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Backend',
      icon: Database,
      items: ['Node.js', 'MongoDB'],
      color: 'from-green-500 to-emerald-500',
    },
  
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
            Technical <span className="text-violet-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-gray-800 p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color}`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{skill.category}</h3>
                </div>
                
                <ul className="space-y-3">
                  {skill.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.1 }}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-500"></div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
