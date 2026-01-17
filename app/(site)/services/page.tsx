/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, Server, CheckCircle, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";

const ServicesSection = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      icon: Code2,
      title: "Frontend Development",
      description:
        "Building responsive, interactive, and pixel-perfect user interfaces using modern frameworks like React.js, Next.js, and TypeScript. I focus on creating seamless user experiences with clean code and optimized performance.",
      technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
      gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    },
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Developing robust server-side applications and RESTful APIs using Node.js, Express.js, and MongoDB. I ensure secure, scalable, and efficient backend architectures that power modern web applications.",
      technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      gradient: "from-purple-500 via-pink-500 to-rose-600",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description:
        "Ensuring software quality through comprehensive testing strategies, bug tracking, and performance optimization. I deliver reliable, bug-free applications with meticulous attention to detail and user experience.",
      technologies: ["Manual Testing", "Bug Tracking", "Performance Testing", "UI/UX Testing"],
      gradient: "from-green-500 via-emerald-500 to-teal-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut" as const,
      },
    },
  };

  if (!mounted) {
    return <div className="min-h-screen bg-transparent" />;
  }

  const isDark = theme === "dark";

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'} sm:py-16 px-4 md:px-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >

          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-sky-400 to-blue-500">
            My Services
          </h1>
          <p className={`text-lg ${theme !== 'light' ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Comprehensive web development solutions tailored to bring your ideas to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >

          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              {/* Card Container */}
              <div className={`relative h-full ${theme !== 'light' ? 'bg-gray-900/50' : 'bg-gray-100'} backdrop-blur-sm rounded-2xl border ${theme !== 'light' ? 'border-gray-800' : 'border-gray-300'} overflow-hidden transition-all duration-300`}>

                {/* Gradient Border Effect on Hover */}
                <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />

                {/* Content */}
                <div className="relative p-8 flex flex-col h-full">
                  {/* Icon with Gradient Background */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r ${service.gradient}`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className={`${theme !== 'light' ? 'text-gray-300' : 'text-gray-700'} mb-6 flex-grow leading-relaxed`}>
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-sm rounded-full ${theme !== 'light' ? 'bg-gray-800 text-cyan-400' : 'bg-gray-200 text-indigo-600'} border ${theme !== 'light' ? 'border-gray-700' : 'border-gray-300'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group/btn relative overflow-hidden px-6 py-3 rounded-full font-semibold text-white bg-linear-to-r ${service.gradient} shadow-lg transition-all duration-300 flex items-center gap-2 self-start`}
                  >
                    <span className="relative z-10">Learn More</span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Corner Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${service.gradient} opacity-5 rounded-bl-full`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >

          <div className={`${theme !== 'light' ? 'bg-gradient-to-r from-gray-900/50 to-gray-800/50' : 'bg-gradient-to-r from-gray-100 to-gray-200'} backdrop-blur-sm rounded-2xl border ${theme !== 'light' ? 'border-gray-800' : 'border-gray-300'} p-8 md:p-12`}>
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-blue-500">
              Ready to Start Your Project?
            </h2>
            <p className={`${theme !== 'light' ? 'text-gray-400' : 'text-gray-600'} mb-6 max-w-2xl mx-auto`}>
              Let&apos;s work together to turn your vision into reality. Get in touch to discuss how I can help with your next project.
            </p>
            <motion.a
             href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg shadow-purple-500/50 transition-all"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;