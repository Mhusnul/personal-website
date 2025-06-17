import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import HeroSection from "../components/HeroSection";
import WelcomeSection from "../components/WelcomeSection";
import SpecializationSection from "../components/SpecializationSection";
import AboutSection from "../components/AboutSection";
import PortfolioSection from "../components/PortfolioSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";

function Leyout() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-indigo-950 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-[5]">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="floating-element absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          >
            <div className="relative w-4 h-4">
              <div
                className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-white to-cyan-300 transform rotate-0"
                style={{
                  width: "2px",
                  height: "16px",
                  left: "7px",
                  top: "0px",
                }}
              ></div>
              <div
                className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-white to-cyan-300 transform rotate-90"
                style={{
                  width: "2px",
                  height: "16px",
                  left: "7px",
                  top: "0px",
                }}
              ></div>

              <div
                className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-white to-blue-200 transform rotate-45 opacity-70"
                style={{
                  width: "1px",
                  height: "12px",
                  left: "7.5px",
                  top: "2px",
                }}
              ></div>
              <div
                className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-white to-blue-200 transform rotate-135 opacity-70"
                style={{
                  width: "1px",
                  height: "12px",
                  left: "7.5px",
                  top: "2px",
                }}
              ></div>

              <div className="absolute w-2 h-2 bg-white rounded-full top-1 left-1 opacity-80 shadow-lg shadow-cyan-300/50"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-cyan-100 origin-left z-50 mt-15"
        style={{ scaleX: smoothProgress }}
      />

      {/* Sections */}
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div>
        <WelcomeSection />
      </div>
      <div id="specialization">
        <SpecializationSection />
      </div>
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <div id="experience">
        <ExperienceSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}

export default Leyout;
