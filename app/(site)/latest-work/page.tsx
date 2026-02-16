/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
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
  ChevronLeft,
  Layers,
  Zap,
  Globe
} from "lucide-react";

import solenne from "../../../public/images/project/solenne_thumbnil.png";
import solenne1 from "../../../public/images/project/solenne_img1.png";
import solenne2 from "../../../public/images/project/solenne_img2.png";
import noborup from "../../../public/images/project/Noborup_thumbnil.png";
import noborup1 from "../../../public/images/project/Noborup_img1.png";
import noborup2 from "../../../public/images/project/Noborup_img2.png";
import brainybox from "../../../public/images/project/BrainyBoxThumbnil.png";
import brainybox1 from "../../../public/images/project/BrainyBoximg1.png";
import brainybox2 from "../../../public/images/project/BrainyBoximg2.png";
import dashboard from "../../../public/images/project/foodDeliveryThumbnil.png";
import dashboard1 from "../../../public/images/project/foodDeliveryimg1.png";
import dashboard2 from "../../../public/images/project/foodDeliveryimg2.png";
import eLearning from "../../../public/images/project/E-LearningThumbnil.png";
import eLearning1 from "../../../public/images/project/E-LearningImage1.png";
import eLearning2 from "../../../public/images/project/E-LearningImage2.png";



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
  image: string | StaticImageData;
  gallery?: (string | StaticImageData)[];
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
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (selectedProject?.gallery) {
      setCurrentSlide((prev) =>
        prev === selectedProject.gallery!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevSlide = () => {
    if (selectedProject?.gallery) {
      setCurrentSlide((prev) =>
        prev === 0 ? selectedProject.gallery!.length - 1 : prev - 1
      );
    }
  };

  useEffect(() => {
    if (selectedProject) {
      setCurrentSlide(0);
    }
  }, [selectedProject]);

  // 3. Set mounted to true on load
  useEffect(() => {
    setMounted(true);
  }, []);


  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      shortDescription: "Full-stack e-commerce solution with payment integration",
      fullDescription: "A comprehensive e-commerce platform built with the MERN stack, featuring user authentication, product management, shopping cart, payment gateway integration with Stripe, order tracking, and admin dashboard for inventory management.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      gallery: [noborup, noborup1, noborup2],
      category: "Full-stack",
      technologies: ["React.js", "TypeScript", "MongoDB", "Stripe", "Tailwind CSS"],
      liveDemo: "https://noborupclient.vercel.app/",
      github: "https://github.com/mdkabirulhossain/Noborup",
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
      title: "Solenne",
      shortDescription: "A private lifestyle membership for living well in Dubai.",
      fullDescription: "A premium lifestyle membership platform connecting members to Dubai's most considered wellness and lifestyle destinations. Features digital membership management, partner network integration, exclusive member benefits, and curated wellness experiences across the city.",
      image: solenne,
      gallery: [solenne, solenne1, solenne2],
      category: "Frontend",
      technologies: ["React", "TypeScript", "Framer Motion", "ShadCN", "Next.js"],
      liveDemo: "https://solenneuae.com/",
      github: "#",
      date: "November 2024",
      duration: "2 months",
      featured: true,
      gradient: "from-cyan-500 to-blue-500",
      highlights: [
        "Digital membership ID system with partner network integration",
        "Exclusive access to wellness & lifestyle destinations across Dubai",
        "Private member gatherings and curated partner experiences",
        "Member newsletter with online privileges and partner offers"
      ]
    },
    {
      id: 3,
      title: "BrainyBox",
      shortDescription: "Designed a web platform focused on early childhood (1-4 years) learning and development ",
      fullDescription: " Included an e-commerce section to sell educational toys for children's growth and development and a blog section to share parenting tips and educational content.",
      image: brainybox,
      gallery: [brainybox, brainybox1, brainybox2],
      category: "Full-stack",
      technologies: ["Node.js", "React", "MongoDB", "Express"],
      liveDemo: "https://brainyboxbd.com/",
      github: "#",
      date: "October 2024",
      duration: "6 weeks",
      featured: true,
      gradient: "from-green-500 to-emerald-500",
      highlights: [
        "Online store for educational toys",
        "Blog for parenting tips and educational content",
        "Interactive learning resources for early childhood development",
        "User-friendly interface for parents to explore products and resources"
      ]
    },
    {
      id: 4,
      title: "Food Delivery Management Dashboard",
      shortDescription: "Interactive portfolio analytics dashboard",
      fullDescription: "A modern portfolio website with an integrated analytics dashboard showing visitor metrics, project views, and engagement statistics. Built with Next.js 14 and features server-side rendering for optimal performance.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      gallery: [dashboard, dashboard1, dashboard2],
      category: "Frontend",
      technologies: ["Next.js", "TypeScript", "Recharts", "Tailwind CSS", "Framer Motion"],
      liveDemo: "#",
      github: "#",
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
      title: "E-Learning Platform",
      shortDescription: "Interactive educational platform for online learning",
      fullDescription: "An interactive e-learning platform that provides courses, quizzes, and progress tracking for students. Features a modern UI with responsive design and integrated video streaming capabilities.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
      gallery: [eLearning, eLearning1, eLearning2],
      category: "Full-stack",
      technologies: ["React", "Weather API", "CSS3", "Geolocation API"],
      liveDemo: "https://e-learning-client-tawny.vercel.app/",
      github: "https://github.com/mdkabirulhossain/E-Learning.git",
      date: "August 2025",
      duration: "3 weeks",
      featured: false,
      gradient: "from-blue-500 to-cyan-500",
      highlights: [
        "Interactive video streaming",
        "Progress tracking",
        "Interactive quizzes",
        "Responsive design"
      ]
    },
    // {
    //   id: 6,
    //   title: "Fitness Tracker",
    //   shortDescription: "Track workouts and monitor progress",
    //   fullDescription: "A comprehensive fitness tracking application that helps users log workouts, track calories, monitor progress with charts, and set fitness goals. Includes workout plans and nutritional guidance.",
    //   image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    //   category: "Full-stack",
    //   technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Express"],
    //   liveDemo: "https://fitness-tracker.vercel.app/",
    //   github: "https://github.com/mdkabirulhossain/Fitness-Tracker.git",
    //   date: "July 2024",
    //   duration: "2 months",
    //   featured: false,
    //   gradient: "from-red-500 to-orange-500",
    //   highlights: [
    //     "Workout logging and tracking",
    //     "Calorie and nutrition monitoring",
    //     "Progress visualization charts",
    //     "Custom workout plan creation"
    //   ]
    // },
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
                      Live
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
                {/* Modal Image Slider */}
                <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl group">
                  {selectedProject.gallery && selectedProject.gallery.length > 0 ? (
                    <>
                      {/* Slider Images */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentSlide}
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 0.3 }}
                          className="relative h-full w-full"
                        >
                          <Image
                            src={selectedProject.gallery[currentSlide]}
                            alt={`${selectedProject.title} - Image ${currentSlide + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 896px"
                            priority
                          />
                          {/* <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.gradient} opacity-20`} /> */}
                        </motion.div>
                      </AnimatePresence>

                      {/* Navigation Arrows */}
                      {selectedProject.gallery.length > 1 && (
                        <>
                          <motion.button
                            onClick={prevSlide}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full ${theme !== "light"
                              ? "bg-gray-900/80 hover:bg-gray-800"
                              : "bg-white/80 hover:bg-gray-100"
                              } backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10`}
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </motion.button>

                          <motion.button
                            onClick={nextSlide}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full ${theme !== "light"
                              ? "bg-gray-900/80 hover:bg-gray-800"
                              : "bg-white/80 hover:bg-gray-100"
                              } backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10`}
                          >
                            <ChevronRight className="w-6 h-6" />
                          </motion.button>

                          {/* Slide Indicators */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            {selectedProject.gallery.map((_, idx) => (
                              <motion.button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                whileHover={{ scale: 1.2 }}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentSlide
                                  ? `bg-gradient-to-r ${selectedProject.gradient} w-8`
                                  : theme !== "light"
                                    ? "bg-gray-400"
                                    : "bg-gray-600"
                                  }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 896px"
                      priority
                    />
                  )}
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
                      View Live
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