/* eslint-disable react-hooks/set-state-in-effect */

"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

import {
  Sparkles,
  Code2,
  Briefcase,
  GraduationCap,
  Target,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  Trophy
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
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const tabContentVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, x: 20, transition: { duration: 0.3 } },
};

const AboutMe = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("skills");
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);
  /* ----------------------------------------------------
     SKILLS LIST
  ---------------------------------------------------- */
  const skills = [
    { name: "HTML", tech: "Frontend", icon: "🌐", proficiency: 95, projects: 85 },
    { name: "CSS", tech: "Frontend", icon: "🎨", proficiency: 90, projects: 80 },
    { name: "JavaScript", tech: "JS", icon: "📜", proficiency: 85, projects: 75 },
    { name: "TypeScript", tech: "TS", icon: "🔵", proficiency: 80, projects: 65 },
    { name: "React.js", tech: "React", icon: "⚛️", proficiency: 90, projects: 78 },
    { name: "Next.js", tech: "Next", icon: "⏭️", proficiency: 85, projects: 70 },
    { name: "TailwindCSS", tech: "CSS", icon: "🌬️", proficiency: 88, projects: 75 },
    { name: "Bootstrap", tech: "CSS", icon: "🟣", proficiency: 75, projects: 60 },
    { name: "DaisyUI", tech: "CSS", icon: "🌸", proficiency: 80, projects: 62 },
    { name: "ShadCN", tech: "UI", icon: "✨", proficiency: 85, projects: 65 },
    { name: "Framer Motion", tech: "Animation", icon: "🌀", proficiency: 82, projects: 60 },
    { name: "MongoDB", tech: "Database", icon: "🍃", proficiency: 78, projects: 55 },
    { name: "C", tech: "Programming", icon: "🔷", proficiency: 70, projects: 40 },
    { name: "C++", tech: "Programming", icon: "💠", proficiency: 65, projects: 35 },
    { name: "Java", tech: "Programming", icon: "☕", proficiency: 75, projects: 45 },
    { name: "Python", tech: "Programming", icon: "🐍", proficiency: 80, projects: 55 },
    { name: "MySQL", tech: "Database", icon: "🗄️", proficiency: 78, projects: 50 },
  ];

  /* ----------------------------------------------------
     EDUCATION DATA
  ---------------------------------------------------- */
  const education = [
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "XYZ University",
      location: "Dhaka, Bangladesh",
      duration: "2019 - 2023",
      cgpa: "3.85/4.00",
      achievements: [
        "Dean's List for 3 consecutive semesters",
        "Best Final Year Project Award",
        "President of Programming Club"
      ],
      courses: [
        "Machine Learning",
        "Deep Learning",
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Software Engineering",
        "Artificial Intelligence"
      ]
    }
  ];

  /* ----------------------------------------------------
     EXPERIENCE DATA
  ---------------------------------------------------- */
  const experience = [
    {
      title: "Frontend Developer",
      company: "Softvence",
      location: "Dhaka, Bangladesh",
      duration: "Jan 2024 - Present",
      type: "Full-time",
      responsibilities: [
        "Developing responsive web applications using Next.js, TypeScript, and Tailwind CSS",
        "Collaborating with design teams to implement pixel-perfect UI components",
        "Optimizing application performance and ensuring cross-browser compatibility",
        "Building reusable component libraries and maintaining code quality standards",
        "Mentoring junior developers and conducting code reviews"
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Framer Motion"]
    },
    {
      title: "Frontend Developer Intern",
      company: "ABC Tech Solutions",
      location: "Dhaka, Bangladesh",
      duration: "Jun 2023 - Dec 2023",
      type: "Internship",
      responsibilities: [
        "Assisted in developing customer-facing web applications",
        "Fixed bugs and implemented new features based on client feedback",
        "Participated in daily standups and sprint planning meetings",
        "Learned industry best practices and modern development workflows"
      ],
      technologies: ["React", "JavaScript", "CSS", "Git"]
    }
  ];

  /* ----------------------------------------------------
     CERTIFICATIONS DATA
  ---------------------------------------------------- */
  const certifications = [
    {
      title: "Advanced React and Redux",
      issuer: "Udemy",
      date: "March 2024",
      credentialId: "UC-XXXX-XXXX-XXXX",
      icon: "⚛️"
    },
    {
      title: "Next.js & TypeScript Complete Course",
      issuer: "Udemy",
      date: "January 2024",
      credentialId: "UC-YYYY-YYYY-YYYY",
      icon: "⏭️"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera",
      date: "December 2023",
      credentialId: "CERT-ZZZZ-ZZZZ",
      icon: "🤖"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "October 2023",
      credentialId: "MONGO-CERT-XXXX",
      icon: "🍃"
    }
  ];

  const highlights = [
    {
      icon: Code2,
      title: "MERN Stack Developer",
      description: "Building full-stack applications with modern technologies",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Briefcase,
      title: "Frontend Developer @ Softvence",
      description: "Specializing in Next.js, TypeScript & Tailwind CSS",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: GraduationCap,
      title: "CSE Graduate",
      description: "Academic foundation in ML, AI & Software Engineering",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Target,
      title: "Future Vision",
      description: "Combining software engineering with AI technologies",
      gradient: "from-orange-500 to-rose-500",
    },
  ];

  const tabs = [
    { id: "skills", label: "Skills", icon: Code2 },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "certifications", label: "Certifications", icon: Award },
  ];
  if (!mounted) {
    return <div className="min-h-screen bg-transparent" />;
  }

  return (
    <div
      className={`min-h-screen ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        } sm:py-16 px-4 md:px-8`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">Get to know me</span>
            <Sparkles className="w-6 h-6 text-cyan-400" />
          </motion.div>

          <h1
            className={`text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-sky-400 to-blue-500`}
          >
            About Me
          </h1>

          <p
            className={`text-lg ${theme !== "light" ? "text-gray-400" : "text-gray-600"
              } max-w-3xl mx-auto mb-12`}
          >
            Passionate developer crafting exceptional digital experiences through clean code and innovative solutions
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative ${theme !== "light"
                ? "bg-gray-900/50 border-gray-800"
                : "bg-gray-100 border-gray-300"
                } backdrop-blur-sm rounded-2xl border p-6 overflow-hidden group`}
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${highlight.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-12 h-12 rounded-xl bg-linear-to-br ${highlight.gradient} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <highlight.icon className="w-6 h-6 text-white" />
                </motion.div>

                <h3
                  className={`font-bold text-lg mb-2 bg-clip-text text-transparent bg-linear-to-r ${highlight.gradient}`}
                >
                  {highlight.title}
                </h3>

                <p
                  className={`text-sm ${theme !== "light" ? "text-gray-400" : "text-gray-600"
                    }`}
                >
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* About Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`${theme !== "light"
            ? "bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-800"
            : "bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300"
            } backdrop-blur-sm rounded-2xl border py-4 mb-16`}
        >
          <div className="space-y-6">
            <div className="flex items-start px-4">
              <div className="w-1 h-full bg-linear-to-b from-cyan-400 to-blue-500 rounded-full" />
              <div className="flex-1">
                <p
                  className={`text-lg leading-relaxed ${theme !== "light" ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  I am a passionate and dedicated <span className="font-semibold text-cyan-400">MERN Stack Developer</span> with a strong focus on building clean, modern, and high-performance web applications. I love turning ideas into real, functional products through thoughtful design, efficient code, and user-centered development.
                </p>
              </div>
            </div>

            <div className="flex items-start px-4">
              <div className="w-1 h-full bg-linear-to-b from-purple-400 to-pink-500 rounded-full" />
              <div className="flex-1">
                <p
                  className={`text-lg leading-relaxed ${theme !== "light" ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  Currently, I am working at <span className="font-semibold text-purple-400">Softvence</span> as a Frontend Developer, where I specialize in Next.js, TypeScript, Tailwind CSS, and modern UI frameworks. My role allows me to collaborate closely with teams, optimize user experiences, and develop scalable frontend architectures.
                </p>
              </div>
            </div>

            <div className="flex items-start px-4">
              <div className="w-1 h-full bg-linear-to-b from-green-400 to-emerald-500 rounded-full" />
              <div className="flex-1">
                <p
                  className={`text-lg leading-relaxed ${theme !== "light" ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  Beyond web development, I am also deeply interested in <span className="font-semibold text-green-400">Machine Learning and Deep Learning</span>. My long-term vision is to combine my software engineering experience with advanced AI technologies. I have already completed academic courses in ML and AI during my CSE degree, and I aim to grow further in this field to build intelligent, data-driven systems.
                </p>
              </div>
            </div>

            <div className="flex items-start px-4">
              <div className="w-1 h-full bg-linear-to-b from-orange-400 to-rose-500 rounded-full" />
              <div className="flex-1">
                <p
                  className={`text-lg leading-relaxed ${theme !== "light" ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  I enjoy writing clean code, solving complex problems, and continuously learning new technologies. Whether it&apos;s frontend, backend, or exploring AI innovations—I always strive to improve and grow.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs Section */}
        <div className="mb-16">
          {/* Tab Navigation */}
          <div className={`flex flex-wrap justify-center gap-2 mb-8 ${theme !== "light"
            ? "bg-gray-900/50 border-gray-800"
            : "bg-gray-100 border-gray-300"
            } backdrop-blur-sm rounded-2xl border p-2`}>
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === tab.id
                  ? "text-white"
                  : theme !== "light"
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <tab.icon className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{tab.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {/* SKILLS TAB */}
            {activeTab === "skills" && (
              <motion.div
                key="skills"
                variants={tabContentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                exit="exit"
              >

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className={`${theme !== "light"
                        ? "bg-gray-900/50 border-gray-800"
                        : "bg-gray-100 border-gray-300"
                        } backdrop-blur-sm rounded-xl border p-4`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className={`font-semibold ${theme !== "light" ? "text-gray-200" : "text-gray-800"}`}>
                            {skill.name}
                          </span>
                        </div>
                        <span className={`text-sm font-bold ${theme !== "light" ? "text-cyan-400" : "text-cyan-600"}`}>
                          {skill.proficiency}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className={`w-full h-2 rounded-full overflow-hidden ${theme !== "light" ? "bg-gray-800" : "bg-gray-300"
                        }`}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                          className="h-full bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-full"
                        />
                      </div>

                      {/* Tech Tag */}
                      <div className="mt-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${theme !== "light"
                          ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                          : "bg-purple-100 text-purple-600 border border-purple-300"
                          }`}>
                          {skill.tech}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {/* EDUCATION TAB */}
            {activeTab === "education" && (
              <motion.div
                key="education"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {education.map((edu, index) => (
                  <div key={index} className={`${theme !== "light"
                    ? "bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-800"
                    : "bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300"
                    } backdrop-blur-sm rounded-2xl border p-8`}>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-linear-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-linear-to-r from-green-500 to-emerald-500">
                          {edu.degree}
                        </h3>
                        <div className={`space-y-1 ${theme !== "light" ? "text-gray-400" : "text-gray-600"}`}>
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            <span className="font-semibold">{edu.institution}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Trophy className="w-4 h-4" />
                            <span className="font-semibold text-green-400">CGPA: {edu.cgpa}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h4 className={`font-semibold mb-3 ${theme !== "light" ? "text-gray-200" : "text-gray-800"}`}>
                          🏆 Achievements
                        </h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className={`flex items-start gap-2 ${theme !== "light" ? "text-gray-400" : "text-gray-600"}`}>
                              <span className="text-green-400 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className={`font-semibold mb-3 ${theme !== "light" ? "text-gray-200" : "text-gray-800"}`}>
                          📚 Relevant Coursework
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, idx) => (
                            <span
                              key={idx}
                              className={`px-3 py-1 text-sm rounded-full ${theme !== "light"
                                ? "bg-gray-800 text-green-400 border-gray-700"
                                : "bg-gray-200 text-emerald-600 border-gray-300"
                                } border`}
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* EXPERIENCE TAB */}
            {activeTab === "experience" && (
              <motion.div
                key="experience"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              >
                {experience.map((exp, index) => (
                  <div key={index} className={`${theme !== "light"
                    ? "bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-800"
                    : "bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300"
                    } backdrop-blur-sm rounded-2xl border p-8`}>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                        <Briefcase className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-pink-500">
                          {exp.title}
                        </h3>
                        <div className={`space-y-1 ${theme !== "light" ? "text-gray-400" : "text-gray-600"}`}>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-lg">{exp.company}</span>
                            <span className="px-2 py-0.5 text-xs rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                              {exp.type}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className={`font-semibold mb-3 ${theme !== "light" ? "text-gray-200" : "text-gray-800"}`}>
                          💼 Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className={`flex items-start gap-2 ${theme !== "light" ? "text-gray-400" : "text-gray-600"}`}>
                              <span className="text-purple-400 mt-1">•</span>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className={`font-semibold mb-3 ${theme !== "light" ? "text-gray-200" : "text-gray-800"}`}>
                          🛠️ Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className={`px-3 py-1 text-sm rounded-full ${theme !== "light"
                                ? "bg-gray-800 text-purple-400 border-gray-700"
                                : "bg-gray-200 text-purple-600 border-gray-300"
                                } border`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* CERTIFICATIONS TAB */}
            {activeTab === "certifications" && (
              <motion.div
                key="certifications"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`${theme !== "light"
                      ? "bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-800"
                      : "bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300"
                      } backdrop-blur-sm rounded-2xl border p-6 group`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{cert.icon}</div>
                      <div className="flex-1">
                        <h3 className={`font-bold text-lg mb-2 ${theme !== "light" ? "text-gray-200" : "text-gray-800"}`}>
                          {cert.title}
                        </h3>
                        <div className={`space-y-1 text-sm ${theme !== "light" ? "text-gray-400" : "text-gray-600"}`}>
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-cyan-400" />
                            <span className="font-semibold">{cert.issuer}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{cert.date}</span>
                          </div>
                          <div className={`text-xs mt-2 ${theme !== "light" ? "text-gray-500" : "text-gray-500"}`}>
                            ID: {cert.credentialId}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;