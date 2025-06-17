import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function PortfolioSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

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
    hover: {
      scale: 1.08,
      rotateX: 2,
      rotateY: 2,
      boxShadow: "0 8px 32px rgba(91, 233, 255, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 4px 16px rgba(91, 233, 255, 0.4)",
      transition: { duration: 0.3 },
    },
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative py-8 sm:py-16 md:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 z-10">
        <motion.div ref={headerRef} className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-cyan-100 bg-clip-text text-transparent mb-4">
            My Portfolio
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            A collection of projects showcasing my skills and passion for
            digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              ref={(el) => (cardsRef.current[i] = el)}
              className="relative p-4 sm:p-6 rounded-lg bg-[rgba(31,41,55,0.3)] backdrop-blur-sm border-2 border-[rgba(91,233,255,0.3)] max-w-sm mx-auto"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r from-cyan-500 to-cyan-100 bg-clip-text text-transparent">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-white mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs sm:text-sm font-semibold text-black bg-gradient-to-r from-cyan-500 to-cyan-100 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <motion.div className="flex gap-3">
                <motion.a
                  href={project.url[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-100 text-black text-xs sm:text-sm font-semibold rounded-lg"
                  variants={buttonVariants}
                  whileHover="hover"
                >
                  View Demo
                </motion.a>
                <motion.a
                  href="https://github.com/Mhusnul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[rgba(31,41,55,0.3)] text-white text-xs sm:text-sm font-semibold rounded-lg border border-[rgba(91,233,255,0.3)]"
                  variants={buttonVariants}
                  whileHover="hover"
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
