import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SpecializationSection() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const directions = [
    { from: { x: -100, y: 0 }, to: { x: 100, y: 0 } },
    { from: { x: 100, y: 0 }, to: { x: -100, y: 0 } },
    { from: { x: 0, y: -100 }, to: { x: 0, y: 100 } },
    { from: { x: 0, y: 100 }, to: { x: 0, y: -100 } },
    { from: { x: -80, y: -80 }, to: { x: 80, y: 80 } },
    { from: { x: 80, y: -80 }, to: { x: -80, y: 80 } },
    { from: { x: -80, y: 80 }, to: { x: 80, y: -80 } },
    { from: { x: 80, y: 80 }, to: { x: -80, y: -80 } },
    { from: { x: 0, y: -120 }, to: { x: 0, y: 120 } },
  ];

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      const { from, to } = directions[i % directions.length];
      gsap.fromTo(
        card,
        { ...from, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 10%",
            toggleActions: "play reverse play reverse",
            onLeave: () =>
              gsap.to(card, {
                ...to,
                opacity: 0,
                duration: 0.8,
                ease: "power3.in",
              }),
            onEnterBack: () =>
              gsap.to(card, {
                x: 0,
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
              }),
          },
        }
      );
    });
  }, []);

  const skills = [
    { name: "HTML", color: "from-orange-400 to-yellow-500" },
    { name: "CSS", color: "from-blue-400 to-blue-600" },
    { name: "JavaScript ES6", color: "from-yellow-400 to-yellow-600" },
    { name: "TailwindCSS", color: "from-teal-400 to-blue-500" },
    { name: "Bootstrap", color: "from-purple-500 to-indigo-600" },
    { name: "GitHub", color: "from-gray-800 to-black" },
    { name: "MySQL", color: "from-cyan-500 to-blue-700" },
    { name: "React.js", color: "from-cyan-400 to-blue-500" },
    { name: "SEO", color: "from-green-400 to-emerald-600" },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative"
    >
      {/* Particle Background */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        {Array.from({ length: 7 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -10, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random(),
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 max-w-5xl mx-auto px-4">
        <motion.h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
          Specializing In
        </motion.h2>
        <motion.p className="text-xl md:text-3xl text-white mb-10">
          Front-End Developer with modern stack & SEO skills
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((tech, index) => (
            <motion.div
              key={tech.name}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`p-4 rounded-xl bg-gradient-to-br ${tech.color} shadow-lg`}
              whileHover={{ scale: 1.1, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-bold text-white text-lg">{tech.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-12">
          <motion.button
            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full font-bold text-white text-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Collaborate
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default SpecializationSection;
