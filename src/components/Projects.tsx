import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Zap, ShoppingCart, MapPin } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured eCommerce website with seamless shopping experience, payment integration, and admin dashboard.",
      longDescription: "Complete eCommerce solution featuring user authentication, product catalog, shopping cart, secure payment processing with Stripe, order management, and comprehensive admin panel.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express", "JWT"],
      github: "https://github.com/skprime07/Cara-Brand",
      demo: "https://skprime07.github.io/Cara-Brand/",
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "from-blue-400 to-cyan-400"
    },
    {
      id: 2,
      title: "Road Management System",
      description: "A civic platform for citizens to report damaged roads with photo uploads and location tracking for authorities.",
      longDescription: "Web-based platform enabling citizens to report infrastructure issues with real-time photo uploads, GPS location tracking, and dashboard for authorities to manage and track repairs.",
      image: "https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Google Maps API"],
      github: "https://github.com/skprime07/onroadUI",
      demo: "https://skprime07.github.io/onroadUI/",
      icon: <MapPin className="w-6 h-6" />,
      color: "from-green-400 to-emerald-400"
    },
    // {
    //   id: 3,
    //   title: "Multi-tool Dashboard",
    //   description: "Real-time analytics dashboard with interactive charts and data visualization for business metrics.",
    //   longDescription: "Comprehensive analytics platform featuring real-time data visualization, interactive charts, performance metrics, and customizable dashboard for business intelligence.",
    //   image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   technologies: ["React", "D3.js", "Node.js", "Python", "Streamlit"],
    //   github: "#",
    //   demo: "#",
    //   icon: <Zap className="w-6 h-6" />,
    //   color: "from-purple-400 to-pink-400"
    // },
    {
      id: 4,
      title: "Utility app",
      description: "Real-time analytics dashboard with interactive charts and data visualization for business metrics.",
      longDescription: "Comprehensive analytics platform featuring real-time data visualization, interactive charts, performance metrics, and customizable dashboard for business intelligence.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "D3.js", "Node.js", "Python", "Next.js"],
      github: "https://github.com/skprime07/utilityapp",
      demo: "https://skprime07.github.io/utilityapp/",
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-400 to-pink-400"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Showcasing some of my best work and technical achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center text-white`}>
                    {project.icon}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-gray-300 hover:text-white transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 bg-gradient-to-r ${project.color} px-4 py-2 rounded-full text-white transition-all duration-300`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View More Projects
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;