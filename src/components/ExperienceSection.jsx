import React from "react";
import { motion } from "framer-motion";

function ExperienceSection() {
  const experiences = [
    {
      year: "2025",
      title: "Frontend Developer Intern (Upcoming)",
      company: "Cretivox",
      description:
        "Developing a one-page interactive personal website using Next.js, Tailwind CSS, and GSAP animations with scroll-triggered effects.",
      skills: ["React", "Next.js", "Tailwind CSS", "GSAP"],
    },
    {
      year: "2024",
      title: "SEO & Web Developer",
      company: "SaveTheDay.my.id (Personal Project)",
      description:
        "Built and optimized a WordPress-based website, applying SEO best practices, performing keyword research, and integrating Google Search Console and Ahrefs for performance monitoring.",
      skills: ["WordPress", "SEO", "Google Search Console", "Ahrefs"],
    },
    {
      year: "2023",
      title: "Owner & Content Creator",
      company: "SockandRoll (TikTok Shop)",
      description:
        "Managed a self-owned online store, created engaging live and video content, and developed digital marketing strategies through TikTok and e-commerce platforms.",
      skills: ["TikTok Live", "E-commerce", "Marketing", "Content Editing"],
    },
    {
      year: "2022",
      title: "Investment Gallery Assistant",
      company: "Gunadarma University",
      description:
        "Provided stock investment education, created financial literacy content for social media, and supported public outreach campaigns.",
      skills: ["Stock Education", "Public Speaking", "Social Media", "Canva"],
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
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const badgeVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0 2px 8px rgba(91, 233, 255, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="experience" className="min-h-screen py-8 md:py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 z-10">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-cyan-100 bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            My journey through frontend development and key milestones.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-2 h-full bg-gradient-to-b from-cyan-500 to-cyan-100 hidden md:block"></div>

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className={`relative flex flex-col md:flex-row items-start mb-8 md:mb-12 ${
                i % 2 === 0 ? "md:mr-auto" : "md:ml-auto md:flex-row-reverse"
              }`}
            >
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-cyan-100 rounded-full flex items-center justify-center text-black text-xs sm:text-sm font-bold z-10 md:-top-2"
                variants={badgeVariants}
                whileHover="hover"
              >
                {exp.year.slice(-2)}
              </motion.div>

              <motion.div
                className={`w-full md:w-5/12 ${
                  i % 2 === 0 ? "md:mr-auto md:pr-6" : "md:ml-auto md:pl-6"
                } mt-12 md:mt-0 max-w-sm sm:max-w-md mx-auto md:mx-0`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                custom={i}
                viewport={{ once: true }}
              >
                <div className="p-4 sm:p-6 rounded-lg bg-[rgba(31,41,55,0.3)] backdrop-blur-sm border-2 border-[rgba(91,233,255,0.3)]">
                  <div className="text-gray-400 text-xs sm:text-sm font-semibold mb-1">
                    {exp.year}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-500 to-cyan-100 bg-clip-text text-transparent">
                    {exp.title}
                  </h3>
                  <div className="text-white text-sm sm:text-base mb-2">
                    {exp.company}
                  </div>
                  <p className="text-white text-sm sm:text-base mb-3">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs sm:text-sm font-semibold text-black bg-gradient-to-r from-cyan-500 to-cyan-100 rounded-full"
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
