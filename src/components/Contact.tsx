import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Send,
  MessageSquare,
} from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/gyrreddy006' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/yashwanth-rami-reddy-gogireddy-a41268322/' },
    { name: 'Email', icon: Mail, url: 'g.yashwanth@op.iitg.ac.in' },
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
            Let's <span className="text-violet-500">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Connect with Me</h3>
              <p className="text-gray-400 mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Find me on</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6 text-gray-400 group-hover:text-violet-500 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Current Status</h4>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-green-500 font-medium">Available for work</span>
                </div>
                <p className="text-gray-400">
                  Currently working on AI-powered web applications and open to new opportunities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
