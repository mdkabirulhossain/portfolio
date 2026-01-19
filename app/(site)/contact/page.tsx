/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Globe,
  CheckCircle2,
  AlertCircle,
  Loader2
} from "lucide-react";

/* ----------------------------------------------------
   Motion Variants
---------------------------------------------------- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  /* ----------------------------------------------------
     CONTACT INFORMATION - CUSTOMIZE THIS!
  ---------------------------------------------------- */
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mdkabirulhossainj@gmail.com",
      link: "mailto:mdkabirulhossainj@gmail.com",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+880 1762091018",
      link: "tel:+8801762091018",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dhaka, Bangladesh",
      link: "https://maps.google.com/?q=Dhaka,Bangladesh",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Globe,
      title: "Website",
      value: "www.kabirul15.com",
      link: "https://kabirul15.netlify.app/",
      gradient: "from-orange-500 to-rose-500",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/mdkabirulhossain",
      gradient: "from-gray-700 to-gray-900",
      hoverColor: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/md-kabirul-hossain-0a63351ab/",
      gradient: "from-blue-600 to-blue-800",
      hoverColor: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "#",
      gradient: "from-sky-500 to-blue-600",
      hoverColor: "hover:text-sky-400",
    },
    {
      icon: Globe,
      name: "Portfolio",
      url: "https://kabirul15.netlify.app/",
      gradient: "from-purple-600 to-pink-600",
      hoverColor: "hover:text-purple-400",
    },
  ];

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // Simulate form submission (Replace with your actual API call)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Success
      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      // Error
      setStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`min-h-screen ${theme !== "light" ? "bg-black text-white" : "bg-white text-black"
        } py-16 px-4 md:px-8`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">Get In Touch</span>
            <Sparkles className="w-6 h-6 text-cyan-400" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
            Contact Me
          </h1>

          <p
            className={`text-lg ${theme !== "light" ? "text-gray-400" : "text-gray-600"
              } max-w-3xl mx-auto`}
          >
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className={`relative ${theme !== "light"
                ? "bg-gray-900/50 border-gray-800"
                : "bg-gray-100 border-gray-300"
                } backdrop-blur-sm rounded-2xl border p-6 overflow-hidden group cursor-pointer`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <info.icon className="w-6 h-6 text-white" />
                </motion.div>

                <h3
                  className={`font-bold text-sm mb-2 ${theme !== "light" ? "text-gray-400" : "text-gray-600"
                    }`}
                >
                  {info.title}
                </h3>

                <p
                  className={`text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r ${info.gradient}`}
                >
                  {info.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className={`${theme !== "light"
              ? "bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-800"
              : "bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300"
              } backdrop-blur-sm rounded-2xl border p-8`}
          >
            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Send Me a Message
            </h2>

            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${theme !== "light" ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl ${theme !== "light"
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-400"
                    : "bg-white border-gray-300 text-black placeholder-gray-400 focus:border-cyan-500"
                    } border-2 focus:outline-none transition-all duration-300`}
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${theme !== "light" ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl ${theme !== "light"
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-400"
                    : "bg-white border-gray-300 text-black placeholder-gray-400 focus:border-cyan-500"
                    } border-2 focus:outline-none transition-all duration-300`}
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${theme !== "light" ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl ${theme !== "light"
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-400"
                    : "bg-white border-gray-300 text-black placeholder-gray-400 focus:border-cyan-500"
                    } border-2 focus:outline-none transition-all duration-300`}
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${theme !== "light" ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl ${theme !== "light"
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-400"
                    : "bg-white border-gray-300 text-black placeholder-gray-400 focus:border-cyan-500"
                    } border-2 focus:outline-none transition-all duration-300 resize-none`}
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start gap-3 p-4 rounded-xl ${status.type === "success"
                    ? "bg-green-500/10 border-green-500/30 text-green-400"
                    : "bg-red-500/10 border-red-500/30 text-red-400"
                    } border`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  )}
                  <p className="text-sm">{status.message}</p>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                onClick={handleSubmit}
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-full py-3 px-6 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Social Links & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Social Links Card */}
            <div
              className={`${theme !== "light"
                ? "bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-800"
                : "bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300"
                } backdrop-blur-sm rounded-2xl border p-8`}
            >
              <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Connect With Me
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className={`flex items-center gap-3 p-4 rounded-xl ${theme !== "light"
                      ? "bg-gray-800 hover:bg-gray-700 border-gray-700"
                      : "bg-white hover:bg-gray-50 border-gray-300"
                      } border transition-all duration-300 group`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${social.gradient} flex items-center justify-center`}
                    >
                      <social.icon className="w-5 h-5 text-white" />
                    </div>
                    <span
                      className={`font-semibold ${theme !== "light" ? "text-gray-300" : "text-gray-700"
                        } group-hover:text-cyan-400 transition-colors`}
                    >
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional Info Card */}
            <div
              className={`${theme !== "light"
                ? "bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-800"
                : "bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300"
                } backdrop-blur-sm rounded-2xl border p-8`}
            >
              <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
                Let{`'`}s Work Together
              </h2>

              <div className="space-y-4">
                <div className="flex items-start ">
                  <div className="w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
                  <p
                    className={`text-base leading-relaxed ${theme !== "light" ? "text-gray-300" : "text-gray-700"
                      }`}
                  >
                    I&apos;m currently <span className="font-semibold text-green-400">available for freelance</span> work and exciting project collaborations.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-1 h-full bg-gradient-to-b from-purple-400 to-pink-500 rounded-full" />
                  <p
                    className={`text-base leading-relaxed ${theme !== "light" ? "text-gray-300" : "text-gray-700"
                      }`}
                  >
                    Whether you need a <span className="font-semibold text-purple-400">modern website</span>, a <span className="font-semibold text-pink-400">web application</span>, or want to discuss ideas, I&apos;d love to hear from you!
                  </p>
                </div>

                <div className="flex items-start  ">
                  <div className="w-1 h-full bg-gradient-to-b from-orange-400 to-rose-500 rounded-full" />
                  <p
                    className={`text-base leading-relaxed ${theme !== "light" ? "text-gray-300" : "text-gray-700"
                      }`}
                  >
                    I typically respond within <span className="font-semibold text-orange-400">24 hours</span>. Let&apos;s create something amazing together!
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Response Times */}
            <div
              className={`${theme !== "light"
                ? "bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-800"
                : "bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300"
                } backdrop-blur-sm rounded-2xl border p-6`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p
                    className={`text-sm ${theme !== "light" ? "text-gray-400" : "text-gray-600"
                      } mb-1`}
                  >
                    Average Response Time
                  </p>
                  <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                    ~2 Hours
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;