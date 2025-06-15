import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WelcomeSection() {
  const sectionRef = useRef(null);
  const cardRef = useRef([]);

  useEffect(() => {
    cardRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const title = "Welcome".split("").map((char, i) => (
    <motion.span
      key={i}
      className="inline-block"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: i * 0.05,
        type: "spring",
        stiffness: 500,
        damping: 20,
      }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Partikel background */}
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

      <div className="text-center z-10 space-y-6 max-w-5xl mx-auto px-4">
        {/* Judul */}
        <motion.h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
          {title}
        </motion.h1>

        {/* Deskripsi */}
        <motion.p
          className="text-xl md:text-3xl text-white/80"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Creative Front-End Developer based in{" "}
          <span className="bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent font-bold">
            Indonesia
          </span>
        </motion.p>

        {/* Kartu Skill */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: "React & Next.js",
              desc: "Modern SPA and SSR with component-based UI.",
            },
            {
              title: "Tailwind CSS",
              desc: "Utility-first CSS for fast and responsive UI.",
            },
            {
              title: "Framer Motion + GSAP",
              desc: "Interactive, smooth animation experience.",
            },
          ].map((skill, index) => (
            <motion.div
              key={skill.title}
              ref={(el) => (cardRef.current[index] = el)}
              className="p-6 rounded-xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-lg cursor-pointer relative group transition"
              whileHover={{
                scale: 1.07,
                rotate: 1.5,
                boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.3)",
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              <h3 className="text-2xl font-bold text-white">{skill.title}</h3>
              <p className="text-white/60 mt-2 text-sm">{skill.desc}</p>

              {/* Glow Efek */}
              <motion.div
                className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 blur-xl opacity-0 group-hover:opacity-30 transition-all duration-300"
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
