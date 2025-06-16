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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-600 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto">
          <motion.div
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: "📧",
                title: "Email",
                value: "muhamadhusnul95@gmail.com",
                color: "bg-purple-600",
              },
              {
                icon: "📞",
                title: "Phone",
                value: "081288750248",
                color: "bg-cyan-600",
                href: "https://wa.me/qr/K6IGPKOGNLIJK1",
              },
              {
                icon: "📌",
                title: "Location",
                value: "Depok, Indonesia",
                color: "bg-blue-600",
                href: "https://maps.google.com?q=Depok,Indonesia",
              },
            ].map((contact, i) => (
              <motion.a
                key={contact.title}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700/20 hover:bg-gray-800/40 transition-all duration-200"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 4px 12px rgba(139, 92, 246, 0.2)",
                }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className={`flex-shrink-0 p-2 rounded-full ${contact.color}`}
                >
                  <span className="text-xl text-white">{contact.icon}</span>
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

            <div className="flex flex-wrap gap-3">
              {[
                { name: "GitHub", href: "https://github.com/Mhusnul" },
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/in/m-husnul-maad/",
                },
                {
                  name: "Instagram",
                  href: "https://www.instagram.com/muhamadhusnul_22/",
                },
              ].map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700/50 rounded-full text-white text-xs sm:text-sm font-semibold hover:bg-gray-700/70 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-5"
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
                    className="w-full p-3 bg-gray-800/30 border border-gray-700/20 rounded-lg text-white placeholder-gray-500 focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder={`Enter your ${field}`}
                    whileFocus={{ scale: 1.02 }}
                  />
                ) : (
                  <motion.input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-800/30 border border-gray-700/20 rounded-lg text-white placeholder-gray-500 focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder={`Enter your ${field}`}
                    whileFocus={{ scale: 1.02 }}
                  />
                )}
              </motion.div>
            ))}
            <motion.button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-bold text-sm sm:text-base hover:brightness-125 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
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
