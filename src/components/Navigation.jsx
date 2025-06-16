import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const observerRef = useRef(null);

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Specialization", id: "specialization" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    navLinks.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observerRef.current.observe(section);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-60 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          MHM
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map(({ name, id }) => (
            <motion.a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(id);
              }}
              className={`relative text-gray-300 hover:text-white text-sm font-medium transition-colors ${
                activeSection === id ? "text-white" : ""
              }`}
              whileHover={{ scale: 1.1 }}
            >
              {name}
              {activeSection === id && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
                  layoutId="underline"
                />
              )}
            </motion.a>
          ))}
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden backdrop-blur-lg flex flex-col items-center py-6 space-y-4"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map(({ name, id }) => (
            <motion.a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(id);
              }}
              className={`text-gray-300 hover:text-white text-lg font-medium ${
                activeSection === id ? "text-white" : ""
              }`}
              whileHover={{ scale: 1.1 }}
            >
              {name}
              {activeSection === id && (
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mt-1"
                  layoutId="mobile-underline"
                />
              )}
            </motion.a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

export default Navigation;
