import React, { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "../components/HeroSection";
import WelcomeSection from "../components/WelcomeSection";
import SpecializationSection from "../components/SpecializationSection";
import AboutSection from "../components/AboutSection";
import PortfolioSection from "../components/PortfolioSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";

gsap.registerPlugin(ScrollTrigger);

function Leyout() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".parallax-bg-slow", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-indigo-950 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-[5]">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="floating-element absolute w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [-10, 10, -10], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: Math.random() }}
          />
        ))}
      </div>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 origin-left z-50"
        style={{ scaleX: smoothProgress }}
      />
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
