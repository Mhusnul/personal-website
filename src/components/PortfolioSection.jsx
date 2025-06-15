import React from "react";
import { motion } from "framer-motion";

function PortfolioSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      tech: ["React", "Node.js", "MongoDB"],
      description: "Full-stack e-commerce solution with payment integration.",
    },
    {
      title: "Task Management App",
      tech: ["React", "TypeScript", "Firebase"],
      description: "Collaborative task management with real-time updates.",
    },
    {
      title: "Weather Dashboard",
      tech: ["Vue.js", "API Integration"],
      description: "Beautiful weather app with location-based forecasts.",
    },
    {
      title: "Portfolio Website",
      tech: ["Next.js", "Tailwind CSS"],
      description: "Responsive portfolio with smooth animations.",
    },
    {
      title: "Chat Application",
      tech: ["React", "Socket.io", "Express"],
      description: "Real-time messaging app with file sharing.",
    },
    {
      title: "Blog Platform",
      tech: ["Gatsby", "GraphQL", "CMS"],
      description: "Modern blog platform with SEO optimization.",
    },
  ];

  // Card animation variants
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

  return (
    <section id="portfolio" className="min-h-screen py-16 relative">
      <div className="container mx-auto px-6 z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            My Portfolio
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A collection of projects showcasing my skills and passion for
            digital experiences.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="relative p-6 rounded-lg bg-gray-800/30 backdrop-blur-sm border-2 border-purple-500/30 max-w-sm mx-auto"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              custom={i}
              viewport={{ once: true }}
            >
              {/* Card Content */}
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {project.title}
              </h3>
              <p className="text-base text-white mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-semibold text-white bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <motion.div className="flex gap-3">
                <motion.a
                  href="#"
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-semibold rounded-lg"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 4px 16px rgba(139, 92, 246, 0.4)",
                  }}
                >
                  View Demo
                </motion.a>
                <motion.a
                  href="#"
                  className="px-4 py-2 bg-gray-700/50 text-white text-sm font-semibold rounded-lg"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(107, 114, 128, 0.8)",
                  }}
                >
                  GitHub
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
