import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend",
      color: "from-blue-400 to-cyan-400",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
      ]
    },
    {
      title: "Backend",
      color: "from-green-400 to-emerald-400",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Firebase", level: 70 },
        { name: "REST APIs", level: 85 },
        { name: "GraphQL", level: 60 },
      ]
    },
    {
      title: "Tools & Others",
      color: "from-purple-400 to-pink-400",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 65 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 80 },
        { name: "Postman", level: 85 },
        { name: "Vercel", level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
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
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Constantly learning and evolving with the latest technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-6`}>
                  <span className="text-2xl font-bold text-white">
                    {category.title.charAt(0)}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS',
                'Firebase', 'Express', 'Git', 'Docker', 'GraphQL', 'Vercel'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-gray-300 hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;