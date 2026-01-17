/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Sparkles,
  ExternalLink,
  Github,
  Calendar,
  Filter,
  X,
  ChevronRight,
  Layers,
  Zap,
  Globe
} from "lucide-react";

/* ----------------------------------------------------
   Motion Variants
---------------------------------------------------- */
const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 25 },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2 },
  },
};

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  category: string;
  technologies: string[];
  liveDemo: string;
  github: string;
  date: string;
  duration: string;
  featured: boolean;
  gradient: string;
  highlights: string[];
}

const LatestProjects = () => {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [mounted, setMounted] = useState(false);

  // 3. Set mounted to true on load
  useEffect(() => {
    setMounted(true);
  }, []);
  /* ----------------------------------------------------
     PROJECTS DATA - CUSTOMIZE THIS!
  ---------------------------------------------------- */
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      shortDescription: "Full-stack e-commerce solution with payment integration",
      fullDescription: "A comprehensive e-commerce platform built with the MERN stack, featuring user authentication, product management, shopping cart, payment gateway integration with Stripe, order tracking, and admin dashboard for inventory management.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      category: "Full-stack",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Tailwind CSS"],
      liveDemo: "https://demo-ecommerce.com",
      github: "https://github.com/yourusername/ecommerce",
      date: "December 2024",
      duration: "3 months",
      featured: true,
      gradient: "from-purple-500 to-pink-500",
      highlights: [
        "Secure payment processing with Stripe",
        "Real-time inventory management",
        "Responsive design across all devices",
        "Admin dashboard with analytics"
      ]
    },
    {
      id: 2,
      title: "AI Task Manager",
      shortDescription: "Smart task management with AI-powered suggestions",
      fullDescription: "An intelligent task management application that uses machine learning to prioritize tasks, suggest optimal scheduling, and provide productivity insights. Built with React and integrated with OpenAI API.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      category: "Frontend",
      technologies: ["React", "TypeScript", "OpenAI API", "Framer Motion", "ShadCN"],
      liveDemo: "https://ai-taskmanager.com",
      github: "https://github.com/yourusername/ai-task",
      date: "November 2024",
      duration: "2 months",
      featured: false,
      gradient: "from-cyan-500 to-blue-500",
      highlights: [
        "AI-powered task prioritization",
        "Smart scheduling suggestions",
        "Productivity analytics dashboard",
        "Collaborative team features"
      ]
    },
    {
      id: 3,
      title: "Real-Time Chat App",
      shortDescription: "WebSocket-based messaging platform",
      fullDescription: "A real-time messaging application with features like group chats, file sharing, message reactions, and online status. Built using Socket.io for real-time communication and MongoDB for message storage.",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80",
      category: "Full-stack",
      technologies: ["Node.js", "Socket.io", "React", "MongoDB", "Express"],
      liveDemo: "https://chat-app-demo.com",
      github: "https://github.com/yourusername/chat-app",
      date: "October 2024",
      duration: "6 weeks",
      featured: true,
      gradient: "from-green-500 to-emerald-500",
      highlights: [
        "Real-time messaging with Socket.io",
        "Group chat functionality",
        "File and image sharing",
        "Message encryption for security"
      ]
    },
    {
      id: 4,
      title: "Portfolio Dashboard",
      shortDescription: "Interactive portfolio analytics dashboard",
      fullDescription: "A modern portfolio website with an integrated analytics dashboard showing visitor metrics, project views, and engagement statistics. Built with Next.js 14 and features server-side rendering for optimal performance.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      category: "Frontend",
      technologies: ["Next.js", "TypeScript", "Recharts", "Tailwind CSS", "Framer Motion"],
      liveDemo: "https://portfolio-dashboard.com",
      github: "https://github.com/yourusername/portfolio",
      date: "September 2024",
      duration: "1 month",
      featured: false,
      gradient: "from-orange-500 to-rose-500",
      highlights: [
        "Interactive data visualizations",
        "Real-time analytics tracking",
        "Dark/Light theme support",
        "Responsive across all devices"
      ]
    },
    {
      id: 5,
      title: "Weather Forecast App",
      shortDescription: "Beautiful weather app with 7-day forecasts",
      fullDescription: "A sleek weather application that provides detailed weather forecasts, including temperature, humidity, wind speed, and precipitation. Features location-based weather detection and beautiful animated backgrounds.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
      category: "Frontend",
      technologies: ["React", "Weather API", "CSS3", "Geolocation API"],
      liveDemo: "https://weather-app-demo.com",
      github: "https://github.com/yourusername/weather",
      date: "August 2024",
      duration: "3 weeks",
      featured: false,
      gradient: "from-blue-500 to-cyan-500",
      highlights: [
        "7-day weather forecasts",
        "Location-based detection",
        "Animated weather backgrounds",
        "Hourly weather updates"
      ]
    },
    {
      id: 6,
      title: "Fitness Tracker",
      shortDescription: "Track workouts and monitor progress",
      fullDescription: "A comprehensive fitness tracking application that helps users log workouts, track calories, monitor progress with charts, and set fitness goals. Includes workout plans and nutritional guidance.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      category: "Full-stack",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Express"],
      liveDemo: "https://fitness-tracker.com",
      github: "https://github.com/yourusername/fitness",
      date: "July 2024",
      duration: "2 months",
      featured: false,
      gradient: "from-red-500 to-orange-500",
      highlights: [
        "Workout logging and tracking",
        "Calorie and nutrition monitoring",
        "Progress visualization charts",
        "Custom workout plan creation"
      ]
    },
  ];

  const categories = ["all", "Full-stack", "Frontend"];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);


  if (!mounted) {
    return null;
  }

  const isDark = theme !== "light";
  return (
    <div className={`min-h-screen overflow-hidden ${isDark ? "bg-black text-white" : "bg-white text-black"} py-16 px-4 md:px-8`}
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
            <span className="text-cyan-400 font-semibold">My Work</span>
            <Sparkles className="w-6 h-6 text-cyan-400" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
            Latest Projects
          </h1>

          <p
            className={`text-lg ${theme !== "light" ? "text-gray-400" : "text-gray-600"
              } max-w-3xl mx-auto mb-8`}
          >
            Showcasing my recent work in web development, featuring modern technologies and innovative solutions
          </p>

          {/* Filter Buttons - FIXED TRANSITIONS */}
          <div className="flex gap-3 overflow-x-auto md:overflow-x-hidden whitespace-nowrap sm:justify-center pb-4 scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-transparent">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${activeFilter === category
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30"
                  : theme !== "light"
                    ? "bg-gray-800 text-gray-400 hover:text-gray-200 border border-gray-700"
                    : "bg-gray-100 text-gray-600 hover:text-gray-900 border border-gray-300"
                  }`}
              >
                <span className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid - FIXED WITH AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {displayedProjects.map((project, index) => (
              <motion.div
                key={`${activeFilter}-${project.id}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className={`relative ${theme !== "light"
                  ? "bg-gray-900/50 border-gray-800"
                  : "bg-gray-100 border-gray-300"
                  } backdrop-blur-sm rounded-2xl border overflow-hidden cursor-pointer group`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg"
                    >
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </motion.div>
                  </div>
                )}

                {/* Project Image - USING NEXT.JS IMAGE */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${project.gradient}`}>
                      {project.title}
                    </h3>
                    <motion.div
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.3 }}
                      className={`w-8 h-8 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>

                  <p
                    className={`text-sm mb-4 line-clamp-2 ${theme !== "light" ? "text-gray-400" : "text-gray-600"
                      }`}
                  >
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 text-xs rounded-full ${theme !== "light"
                          ? "bg-gray-800 text-gray-300 border-gray-700"
                          : "bg-gray-200 text-gray-700 border-gray-300"
                          } border`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${theme !== "light"
                          ? "bg-gray-800 text-cyan-400 border-gray-700"
                          : "bg-gray-200 text-cyan-600 border-gray-300"
                          } border`}
                      >
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons - FIXED SMOOTH TRANSITIONS */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r ${project.gradient} text-white shadow-lg hover:shadow-xl`}
                    >
                      <Globe className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className={`px-4 py-2 rounded-lg ${theme !== "light"
                        ? "bg-gray-800 hover:bg-gray-700 border-gray-700"
                        : "bg-gray-200 hover:bg-gray-300 border-gray-300"
                        } border transition-all duration-300`}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>

                  {/* Date */}
                  <div className={`mt-4 flex items-center gap-2 text-xs ${theme !== "light" ? "text-gray-500" : "text-gray-500"}`}>
                    <Calendar className="w-3 h-3" />
                    {project.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More Button - FIXED SMOOTH TRANSITION */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
            >
              {showAll ? "Show Less" : `Load More Projects (${filteredProjects.length - 6} more)`}
            </motion.button>
          </motion.div>
        )}

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
                className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto ${theme !== "light"
                  ? "bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700"
                  : "bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300"
                  } rounded-3xl border shadow-2xl`}
              >
                {/* Close Button */}
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className={`absolute top-4 right-4 z-10 p-2 rounded-full ${theme !== "light"
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-200 hover:bg-gray-300"
                    } transition-colors duration-300`}
                >
                  <X className="w-6 h-6" />
                </motion.button>

                {/* Modal Image - USING NEXT.JS IMAGE */}
                <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 896px"
                    priority
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.gradient} opacity-20`} />
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className={`text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${selectedProject.gradient}`}>
                        {selectedProject.title}
                      </h2>
                      <div className="flex items-center gap-4 text-sm">
                        <span className={`flex items-center gap-1 ${theme !== "light" ? "text-gray-400" : "text-gray-600"}`}>
                          <Layers className="w-4 h-4" />
                          {selectedProject.category}
                        </span>
                        <span className={`flex items-center gap-1 ${theme !== "light" ? "text-gray-400" : "text-gray-600"}`}>
                          <Calendar className="w-4 h-4" />
                          {selectedProject.date}
                        </span>
                        <span className={`flex items-center gap-1 ${theme !== "light" ? "text-gray-400" : "text-gray-600"}`}>
                          <Zap className="w-4 h-4" />
                          {selectedProject.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className={`text-lg mb-6 leading-relaxed ${theme !== "light" ? "text-gray-300" : "text-gray-700"}`}>
                    {selectedProject.fullDescription}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-6">
                    <h3 className={`text-xl font-bold mb-4 ${theme !== "light" ? "text-gray-200" : "text-gray-800"}`}>
                      ✨ Key Highlights
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start gap-2 ${theme !== "light" ? "text-gray-400" : "text-gray-600"}`}
                        >
                          <span className={`text-lg bg-clip-text text-transparent bg-gradient-to-r ${selectedProject.gradient}`}>•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className={`text-xl font-bold mb-4 ${theme !== "light" ? "text-gray-200" : "text-gray-800"}`}>
                      🛠️ Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-4 py-2 rounded-full font-semibold ${theme !== "light"
                            ? "bg-gray-800 text-cyan-400 border-gray-700"
                            : "bg-gray-200 text-cyan-600 border-gray-300"
                            } border`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons - FIXED SMOOTH TRANSITIONS */}
                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r ${selectedProject.gradient} text-white shadow-lg hover:shadow-xl`}
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Live Demo
                    </motion.a>
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold ${theme !== "light"
                        ? "bg-gray-800 hover:bg-gray-700 border-gray-700"
                        : "bg-gray-200 hover:bg-gray-300 border-gray-300"
                        } border transition-all duration-300`}
                    >
                      <Github className="w-5 h-5" />
                      View Source Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LatestProjects;