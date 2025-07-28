import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Award, GraduationCap } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Software Engineer",
      company: "Linux World, Jaipur",
      period: "May 2025 - Present",
      description: "Working on large-scale web applications and contributing to open-source projects.",
      type: "work",
      icon: <Calendar className="w-5 h-5" />,
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "Full Stack Developer Intern",
      company: "Red Symbol Technologies",
      period: "May 2024 - June 2024",
      description: "Developed responsive web applications using React and Node.js, gained hands-on experience with full-stack development.",
      type: "work",
      icon: <Calendar className="w-5 h-5" />,
      color: "from-green-400 to-emerald-400"
    }
  ];

  const education = [
    {
      degree: "BTech Information Technology",
      institution: "JECRC University, Jaipur",
      period: "2023 - 2027",
      gpa: "9.11 GPA",
      description: "Focused on software development, data structures, algorithms, and web technologies.",
      icon: <GraduationCap className="w-5 h-5" />,
      color: "from-purple-400 to-pink-400"
    }
  ];

  const achievements = [
    {
      title: "Winner - Hackathon 2024",
      organization: "JECRC University",
      description: "Led team to victory in university-wide hackathon with innovative web solution.",
      icon: <Award className="w-5 h-5" />,
      color: "from-yellow-400 to-orange-400"
    },
    {
      title: "Dean's List",
      organization: "JECRC University",
      description: "Recognized for academic excellence and consistent performance.",
      icon: <Award className="w-5 h-5" />,
      color: "from-green-400 to-emerald-400"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-purple-900/30 to-slate-900/40 backdrop-blur-sm" />
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
              Experience & Education
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My professional journey and academic achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-blue-400" />
                Work Experience
              </h3>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                    className="relative pl-8 pb-8 border-l-2 border-gray-700 last:border-l-0 last:pb-0"
                  >
                    <div className={`absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center text-white`}>
                      {exp.icon}
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                        <span className="text-sm text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-blue-400 font-semibold mb-2 flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.company}
                      </p>
                      <p className="text-gray-400">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education & Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Education */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-green-400" />
                  Education
                </h3>
                
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                      <span className="text-sm text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-purple-400 font-semibold mb-2">{edu.institution}</p>
                    <p className="text-green-400 font-semibold mb-2">{edu.gpa}</p>
                    <p className="text-gray-400">{edu.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                  <Award className="w-6 h-6 text-yellow-400" />
                  Achievements
                </h3>
                
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-white flex-shrink-0`}>
                          {achievement.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-1">{achievement.title}</h4>
                          <p className="text-yellow-400 font-semibold text-sm mb-2">{achievement.organization}</p>
                          <p className="text-gray-400 text-sm">{achievement.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;