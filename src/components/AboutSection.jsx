import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profile from "../assets/profile.JPEG";

gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  const sectionRef = useRef(null);
  const profileImageRef = useRef(null);
  const statsRef = useRef(null);
  const introRef = useRef(null);
  const aboutCardRef = useRef(null);
  const skillsCardRef = useRef(null);

  const skills = [
    { name: "Html", level: 100 },
    { name: "Css", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "Tailwind CSS", level: 92 },
    { name: "React", level: 95 },
  ];

  const stats = [
    { value: "1+", label: "Years" },
    { value: "10+", label: "Projects" },
    { value: "10+", label: "Clients" },
  ];

  const hoverVariants = {
    hover: {
      scale: 1.08,
      rotateX: 2,
      rotateY: 2,
      boxShadow: "0 8px 32px rgba(139, 92, 246, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  const statHoverVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0 4px 16px rgba(139, 92, 246, 0.2)",
      transition: { duration: 0.2 },
    },
  };

  const tagHoverVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0 2px 8px rgba(139, 92, 246, 0.2)",
      transition: { duration: 0.2 },
    },
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        profileImageRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: profileImageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        statsRef.current.children,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        introRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        aboutCardRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutCardRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        skillsCardRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: skillsCardRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      skills.forEach((_, index) => {
        const bar = document.querySelector(`#skill-bar-${index}`);
        if (bar) {
          gsap.fromTo(
            bar,
            { width: "0%" },
            {
              width: `${skills[index].level}%`,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: bar,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [skills]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="container mx-auto px-6 z-10 flex flex-col items-center space-y-8">
        import {motion} from 'framer-motion'; // Profile image parent container
        <motion.div
          ref={profileImageRef}
          className="relative w-64 h-64 mx-auto"
        >
          <motion.div
            className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border-2 border-purple-500/30 overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 4px 16px rgba(139, 92, 246, 0.3)",
              borderColor: "rgba(139, 92, 246, 0.5)",
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover opacity-80"
            />
          </motion.div>

          <motion.div
            className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-2 border-white/20"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        <motion.div ref={statsRef} className="flex justify-center gap-8 mb-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center"
              variants={statHoverVariants}
              whileHover="hover"
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-base text-white">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div ref={introRef} className="text-white text-base text-center">
          <p className="mb-4">
            Passionate developer creating modern web experiences
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {["Creative", "Reliable", "Innovative"].map((trait) => (
              <motion.span
                key={trait}
                className="px-2 py-1 text-xs font-semibold text-white bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                variants={tagHoverVariants}
                whileHover="hover"
              >
                {trait}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <div className="md:flex gap-10">
          <motion.div
            ref={aboutCardRef}
            className=" p-6 rounded-lg bg-gray-800/30 backdrop-blur-sm border-2 border-purple-500/30 max-w-md mx-auto mb-10"
            variants={hoverVariants}
            whileHover="hover"
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-3">
              About Me
            </h2>
            <div className="space-y-3 text-white text-base">
              <p>
                I'm a final-year Information Systems student at Gunadarma
                University, passionate about front-end development and UI/UX
                design.
              </p>
              <p>
                I build modern, responsive web applications using React.js and
                Tailwind CSS, focusing on clean code, reusable components, and
                smooth user experiences.
              </p>
              <p>
                Besides development, I have a strong background in SEO and
                digital marketing, and I actively manage an online business
                through TikTok Shop.
              </p>
              <p>
                I love turning ideas into interactive interfaces and always
                strive to learn the latest tools and best practices in the
                front-end ecosystem.
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={skillsCardRef}
            className="p-6 rounded-lg bg-gray-800/30 backdrop-blur-sm border-2 border-purple-500/30 max-w-md mx-auto"
            variants={hoverVariants}
            whileHover="hover"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-3 flex items-center gap-2">
              Skills & Technologies
            </h3>
            <div className="space-y-4 ">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="group cursor-pointer"
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium text-base group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent">
                      {skill.name}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      id={`skill-bar-${index}`}
                      className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
