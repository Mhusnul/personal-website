import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.JPEG";

function AboutSection() {
  // Animation variants for image and text card
  const variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.08,
      rotateX: 2,
      rotateY: 2,
      boxShadow: "0 8px 32px rgba(139, 92, 246, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 4px 16px rgba(139, 92, 246, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  const tagVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0 2px 8px rgba(139, 92, 246, 0.2)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="container mx-auto px-6 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}

          <div className="w-64 h-64 mx-auto relative transition-transform duration-300 hover:scale-110">
            <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border-2 border-purple-500/30 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/30">
              {/* Placeholder for real image */}
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>

          {/* Text Content Card */}
          <motion.div
            className="p-6 rounded-lg bg-gray-800/30 backdrop-blur-sm border-2 border-purple-500/30 max-w-md"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
          >
            <motion.h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-3">
              About Me
            </motion.h2>
            <motion.p className="text-base text-white mb-3">
              Passionate front-end developer with 3+ years of experience
              creating modern, responsive web applications.
            </motion.p>
            <motion.p className="text-base text-white mb-4">
              When not coding, I explore new tech, contribute to open source, or
              share knowledge with the community.
            </motion.p>
            <motion.div className="flex flex-wrap gap-2">
              {[
                "Creative Problem Solver",
                "Team Player",
                "Continuous Learner",
              ].map((trait) => (
                <motion.span
                  key={trait}
                  className="px-2 py-1 text-xs font-semibold text-white bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                  variants={tagVariants}
                  whileHover="hover"
                >
                  {trait}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
