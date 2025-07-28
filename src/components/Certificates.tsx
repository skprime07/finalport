import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates = [
    {
      id: 1,
      title: "Frontend Web Development",
      issuer: "Red Symbol Technologies",
      date: "2024",
      description: "Comprehensive frontend development certification covering modern web technologies and best practices.",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "from-blue-400 to-cyan-400",
      skills: ["React", "JavaScript", "HTML/CSS", "Responsive Design"]
    },
    {
      id: 2,
      title: "Data Science & Analytics",
      issuer: "HP",
      date: "2024",
      description: "Advanced data science certification focusing on analytics, machine learning, and data visualization.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "from-green-400 to-emerald-400",
      skills: ["Python", "Data Analysis", "Machine Learning", "Statistics"]
    },
    {
      id: 3,
      title: "Solutions Architecture Job Simulation",
      issuer: "Deloitte",
      date: "2025",
      description: "Practical experience in enterprise solutions architecture and system design principles.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "from-purple-400 to-pink-400",
      skills: ["System Design", "Architecture", "Cloud Solutions", "Enterprise"]
    },
    {
      id: 4,
      title: "Career Essentials in Software Development",
      issuer: "Microsoft & LinkedIn",
      date: "2024",
      description: "Essential skills and best practices for professional software development career growth.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "from-yellow-400 to-orange-400",
      skills: ["Software Development", "Career Growth", "Best Practices", "Professional Skills"]
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(certificates.length / 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(certificates.length / 2)) % Math.ceil(certificates.length / 2));
  };

  return (
    <section id="certificates" className="py-20 relative overflow-hidden">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-slate-900/40 backdrop-blur-sm" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Continuous learning and professional development milestones
          </p>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-400">{cert.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-blue-400 font-semibold mb-3">{cert.issuer}</p>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{cert.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-white/10 text-gray-300 px-2 py-1 rounded-full text-xs backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 bg-gradient-to-r ${cert.color} px-4 py-2 rounded-full text-white text-sm font-semibold transition-all duration-300`}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Certificate
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider View */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                      <div className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center`}>
                        <Award className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">{cert.date}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                      <p className="text-blue-400 font-semibold mb-2 text-sm">{cert.issuer}</p>
                      <p className="text-gray-400 mb-3 text-sm">{cert.description}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {cert.skills.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="bg-white/10 text-gray-300 px-2 py-1 rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <button className={`flex items-center gap-2 bg-gradient-to-r ${cert.color} px-3 py-2 rounded-full text-white text-sm font-semibold w-full justify-center`}>
                        <ExternalLink className="w-4 h-4" />
                        View Certificate
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: certificates.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-400 w-6' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Floating Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 bg-white/5 backdrop-blur-xl rounded-2xl px-8 py-4 border border-white/10">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{certificates.length}+</div>
              <div className="text-sm text-gray-400">Certifications</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">4+</div>
              <div className="text-sm text-gray-400">Tech Domains</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">100%</div>
              <div className="text-sm text-gray-400">Completion Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;