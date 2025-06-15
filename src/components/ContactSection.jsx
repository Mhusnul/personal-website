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
    // Simplified form animation
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
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section ref={sectionRef} className="min-h-screen py-16 relative">
      <div className="container mx-auto px-6 z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: "📧",
                title: "Email",
                value: "hello@developer.com",
                color: "from-blue-400 to-cyan-400",
              },
              {
                icon: "📱",
                title: "Phone",
                value: "+1 (555) 123-4567",
                color: "from-purple-400 to-cyan-400",
              },
              {
                icon: "📍",
                title: "Location",
                value: "Jakarta, Indonesia",
                color: "from-green-400 to-cyan-400",
              },
            ].map((contact, i) => (
              <motion.div
                key={contact.title}
                className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/20"
                whileHover={{ scale: 1.05 }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className={`text-2xl p-2 bg-gradient-to-r ${contact.color} rounded-full`}
                >
                  {contact.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    {contact.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{contact.value}</p>
                </div>
              </motion.div>
            ))}

            <div className="flex space-x-3">
              {["GitHub", "LinkedIn", "Twitter"].map((social, i) => (
                <motion.button
                  key={social}
                  className="px-4 py-2 bg-gray-700/50 rounded-full text-white text-sm font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5"
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
                    className="w-full p-3 bg-gray-800/30 border border-gray-700/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 transition-all duration-200"
                    placeholder={`Enter your ${field}`}
                    whileFocus={{ scale: 1.02 }}
                  />
                ) : (
                  <motion.input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-800/30 border border-gray-700/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 transition-all duration-200"
                    placeholder={`Enter your ${field}`}
                    whileFocus={{ scale: 1.02 }}
                  />
                )}
              </motion.div>
            ))}
            <motion.button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white font-bold text-sm"
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
