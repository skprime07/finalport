import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
              Sarthak Katta
            </h3>
            <p className="text-gray-400">
              Building digital experiences with passion and precision
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <nav className="flex gap-8">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                About
              </a>
              <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">
                Skills
              </a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">
                Projects
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                Contact
              </a>
            </nav>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © 2024 Sarthak Katta. Made with 
            <Heart className="w-4 h-4 text-red-500" /> 
            and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;