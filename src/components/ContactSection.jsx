import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ContactSection() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".contact-card",
      { x: -50, opacity: 0, rotate: -5 },
      {
        x: 0,
        opacity: 1,
        rotate: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-card",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "6281288750248";
    const { name, email, message } = formData;
    const text = `Hello, my name is ${name}.\nEmail: ${email}\n\n${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-8 sm:py-16 md:py-24 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 z-10">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-cyan-100 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {/* Contact Cards */}
          <motion.div
            className="flex-1 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 2l-7 5-7-5h14zm-1 12H6V8l6 4.5L18 8v10z" />
                  </svg>
                ),
                title: "Email",
                value: "muhamadhusnul95@gmail.com",
                href: "mailto:muhamadhusnul95@gmail.com",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z" />
                  </svg>
                ),
                title: "Phone",
                value: "081288750248",
                href: "https://wa.me/qr/K6IGPKOGNLIJK1",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                ),
                title: "Location",
                value: "Depok, Indonesia",
                href: "https://maps.google.com?q=Depok,Indonesia",
              },
            ].map((contact, i) => (
              <motion.a
                key={contact.title}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card flex items-center space-x-4 p-4 bg-[rgba(31,41,55,0.3)] backdrop-blur-sm rounded-lg border border-[rgba(91,233,255,0.3)] transform hover:-translate-y-1"
                style={{ transform: `rotate(${i * 2 - 2}deg)` }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 4px 12px rgba(91, 233, 255, 0.3)",
                  rotate: 0,
                }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex-shrink-0 p-2 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-100">
                  {contact.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">
                    {contact.title}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                { name: "GitHub", href: "https://github.com/Mhusnul" },
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/in/m-husnul-maad/",
                },
                {
                  name: "Instagram",
                  href: "instagram.com/muhamadhusnul_22/",
                },
              ].map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[rgba(31,41,55,0.3)] rounded-full text-white text-xs sm:text-sm font-semibold border border-[rgba(91,233,255,0.3)] hover:bg-[rgba(31,41,55,0.5)]"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 4px 12px rgba(91, 233, 255, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex-1 space-y-4 sm:space-y-5 p-6 bg-[rgba(31,41,55,0.3)] backdrop-blur-sm rounded-lg border-2 border-[rgba(91,233,255,0.3)] shadow-[0_8px_32px_rgba(91,233,255,0.2)]"
          >
            {["name", "email", "message"].map((field, i) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <label className="block text-white text-sm font-semibold mb-1 capitalize">
                  {field}
                </label>
                {field === "message" ? (
                  <motion.textarea
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 bg-[rgba(31,41,55,0.3)] border border-[rgba(91,233,255,0.3)] rounded-lg text-white placeholder-gray-500 focus:border-[rgba(91,233,255,0.7)] focus:ring-2 focus:ring-[rgba(91,233,255,0.3)] transition-all duration-300"
                    placeholder={`Enter your ${field}`}
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                ) : (
                  <motion.input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full p-3 bg-[rgba(31,41,55,0.3)] border border-[rgba(91,233,255,0.3)] rounded-lg text-white placeholder-gray-500 focus:border-[rgba(91,233,255,0.7)] focus:ring-2 focus:ring-[rgba(91,233,255,0.3)] transition-all duration-300"
                    placeholder={`Enter your ${field}`}
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                )}
              </motion.div>
            ))}
            <motion.button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-cyan-100 rounded-lg text-black font-bold text-sm sm:text-base hover:brightness-125 transition-all duration-200"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 16px rgba(91, 233, 255, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
