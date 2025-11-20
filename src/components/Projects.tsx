import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code, Brain } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'AnuragXconnect',
      description: 'Smart Campus Website',
      tags: ['AI', 'React', 'Typescript'],
      demoLink: 'https://anuragxconnect.tech',
      githubLink: 'https://github.com/gvdkreddy/Anurag-X-Connect',
      category: 'AI,Frontend',
    },
    {
      title: 'Travelbro',
      description: 'Website made for tourists to find underrated places',
      tags: ['Travel', 'Places', 'React'],
      demoLink: 'https://travelbro.netlify.app',
      category: 'Web',
    },
    {
      title: 'find2work',
      description: 'A website for part time jobs which pay per day ',
      tags: ['AI', 'work', 'React'],
      githubLink: 'https://github.com/gyrreddy006/find2work',
      category: 'AI,Website',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured <span className="text-violet-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl overflow-hidden group hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-violet-500/10 text-violet-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
