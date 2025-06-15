import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profile from "../assets/profile.jpeg";

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1000",
          scrub: 1,
          pin: true,
        },
      });

      heroTl
        .to(line1.current, { x: "-100vw", opacity: 0, duration: 1 })
        .to(line2.current, { x: "100vw", opacity: 0, duration: 1 }, "<")
        .to(line3.current, { x: "-100vw", opacity: 0, duration: 1 }, "<");
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center space-y-8 z-10">
        <motion.div
          ref={line1}
          className="text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Let Me Introduce
        </motion.div>
        <motion.div
          ref={line2}
          className="flex items-center justify-center gap-4"
        >
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            My Self
          </motion.h1>
          <motion.img
            className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 rounded-full border-2 border-white/20"
            src={profile}
            alt="profile"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div
          ref={line3}
          className="text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          As Developer
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-4 h-8 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full mt-1"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
