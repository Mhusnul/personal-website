import React from "react";
import { motion } from "framer-motion";

function PortfolioSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      tech: ["React", "Tailwind CSS", "FakeAPI"],
      description:
        "A full-featured e-commerce platform with login authentication, product listings, cart functionality, and simulated data integration using FakeAPI.",
      url: ["https://store-sage-one.vercel.app/"],
    },
    {
      title: "Landing Page Valbury Securitas",
      tech: ["React", "Tailwind CSS"],
      description:
        "A clean and responsive landing page inspired by Valbury Securitas, highlighting company services and strong call-to-action elements.",
      url: ["https://valbuty-securitas-bpdq.vercel.app/"],
    },
    {
      title: "Crypto Tracker",
      tech: ["React", "API Integration"],
      description:
        "A real-time cryptocurrency tracking app using public APIs, featuring live price updates and a sleek, modern UI.",
      url: ["https://crypto-tracker-fawn-nine.vercel.app/"],
    },
    {
      title: "Movie App",
      tech: ["React", "Tailwind CSS", "API Integration"],
      description:
        "An interactive movie discovery app with search and detailed film information powered by external API integration.",
      url: ["https://movie-app-zeta-puce.vercel.app/"],
    },
    {
      title: "Blog Landing Page",
      tech: ["React", "Tailwind CSS"],
      description:
        "A minimal and responsive blog landing page designed for personal branding or portfolio showcasing.",
      url: ["https://save-the-day-blog.vercel.app/"],
    },
    {
      title: "Blog Platform",
      tech: ["WordPress"],
      description:
        "A modern blog platform built with WordPress, featuring SEO optimization, clean layout, and performance-focused design.",
      url: ["https://savetheday.my.id/"],
    },
  ];

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
                  href={project.url}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-semibold rounded-lg"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 4px 16px rgba(139, 92, 246, 0.4)",
                  }}
                >
                  View Demo
                </motion.a>
                <motion.a
                  href="https://github.com/Mhusnul"
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
