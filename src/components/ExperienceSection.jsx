import React from "react";
import { motion } from "framer-motion";

function ExperienceSection() {
  const experiences = [
    {
      year: "2024",
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      description:
        "Led frontend team, implemented modern React patterns, and improved performance by 40%.",
      skills: ["React", "TypeScript", "Next.js", "Team Leadership"],
    },
    {
      year: "2022",
      title: "Frontend Developer",
      company: "Digital Agency Co.",
      description:
        "Developed responsive web apps for clients, focusing on UX and modern design.",
      skills: ["Vue.js", "Sass", "WordPress", "UI/UX Design"],
    },
    {
      year: "2021",
      title: "Junior Developer",
      company: "StartUp Labs",
      description:
        "Built interactive websites and learned modern frontend technologies.",
      skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    },
  ];

  // Animation variants for cards and year badges
  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
    }),
    hover: {
      scale: 1.08,
      rotateX: 2,
      rotateY: 2,
      boxShadow: "0 8px 32px rgba(139, 92, 246, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  const badgeVariants = {
    hover: {
      scale: 1.2,
      boxShadow: "0 4px 16px rgba(139, 92, 246, 0.4)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="experience" className="min-h-screen py-16 relative">
      <div className="container mx-auto px-6 z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My journey through frontend development and key milestones.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-2 h-full bg-gradient-to-b from-purple-500 to-cyan-500 hidden md:block"></div>

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className={`relative flex flex-col md:flex-row items-start mb-12 ${
                i % 2 === 0 ? "md:mr-auto" : "md:ml-auto md:flex-row-reverse"
              }`}
            >
              {/* Year Badge */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold z-10"
                variants={badgeVariants}
                whileHover="hover"
              >
                {exp.year.slice(-2)}
              </motion.div>

              {/* Content Card */}
              <motion.div
                className={`w-full md:w-5/12 ${
                  i % 2 === 0 ? "md:mr-auto md:pr-6" : "md:ml-auto md:pl-6"
                } mt-6 md:mt-0 max-w-sm`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                custom={i}
                viewport={{ once: true }}
              >
                <div className="p-6 rounded-lg bg-gray-800/30 backdrop-blur-sm border-2 border-purple-500/30">
                  <div className="text-purple-400 text-sm font-semibold mb-1">
                    {exp.year}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {exp.title}
                  </h3>
                  <div className="text-white text-base mb-2">{exp.company}</div>
                  <p className="text-white text-base mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs font-semibold text-white bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
