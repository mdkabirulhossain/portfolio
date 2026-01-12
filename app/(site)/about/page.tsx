"use client";

import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Area,
  AreaChart,
  Tooltip,
} from "recharts";
import { motion, Variants } from "framer-motion";
import { useTheme } from 'next-themes';

/* ----------------------------------------------------
   Custom Chart Dots
---------------------------------------------------- */
interface CustomDotProps {
  cx?: number;
  cy?: number;
  dataKey?: string;
}

const CustomDot = ({ cx, cy, dataKey }: CustomDotProps) => {
  if (cx == null || cy == null) return null;

  const color = dataKey === "proficiency" ? "#22d3ee" : "#a78bfa";

  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill={color} opacity={0.3} />
      <circle cx={cx} cy={cy} r={3} fill={color} />
    </g>
  );
};

/* ----------------------------------------------------
   Motion Variants
---------------------------------------------------- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

const chartVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8 },
  },
};

const AboutMe = () => {
  const { theme } = useTheme();
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


  const chartData = skills.map((skill) => ({
    name: skill.name,
    proficiency: skill.proficiency,
    projects: skill.projects,
  }));

  return (
    <div className={`min-h-screen ${theme !== 'light' ? 'bg-black text-white' : 'bg-white text-black'} pt-6 pb-8 px-4 md:px-8`}>      <div className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className={`text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-linear-to-r from-sky-400 to-blue-500`}>About Me</h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`space-y-4 ${theme !== 'light' ? 'text-gray-300' : 'text-gray-700'}`}          >
          <p className="text-lg text-center md:text-left">
            I am a passionate and dedicated MERN Stack Developer with a strong focus on building clean, modern, and high-performance web applications. I love turning ideas into real, functional products through thoughtful design, efficient code, and user-centered development.
          </p>
          <p className="text-lg text-center md:text-left">
            Currently, I am working at Softvence as a Frontend Developer, where I specialize in Next.js, TypeScript, Tailwind CSS, and modern UI frameworks. My role allows me to collaborate closely with teams, optimize user experiences, and develop scalable frontend architectures.
          </p>
          <p className="text-lg text-center md:text-left">
            Beyond web development, I am also deeply interested in Machine Learning and Deep Learning. My long-term vision is to combine my software engineering experience with advanced AI technologies. I have already completed academic courses in ML and AI during my CSE degree, and I aim to grow further in this field to build intelligent, data-driven systems.
          </p>
          <p className="text-lg text-center md:text-left">
            I enjoy writing clean code, solving complex problems, and continuously learning new technologies. Whether it&apos;s frontend, backend, or exploring AI innovations—I always strive to improve and grow.
          </p>
        </motion.div>
      </motion.div>

      {/* Skills + Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

        {/* SKILLS COLUMN */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="relative flex items-center gap-4"
            >
              <div className={`w-24 ${theme !== 'light' ? 'text-gray-300' : 'text-gray-700'} font-medium`}>
                {skill.name}
              </div>

              {/* Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="w-3 h-3 rounded-full bg-cyan-400 shadow-cyan-400/50 shadow"
              />

              {/* Skill Button with Gradient */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer text-white font-semibold px-4 py-2 rounded-full text-lg shadow-lg shadow-purple-500/50 transition-all bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 flex items-center gap-2"
              >
                <span>{skill.icon}</span>
                <span>{skill.tech}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CHART COLUMN */}
        <motion.div
          variants={chartVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-linear-to-br from-gray-900/50 to-gray-800/50 p-6 rounded-2xl backdrop-blur border border-gray-700/40">
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="proficiencyGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                  </linearGradient>

                  <linearGradient id="projectsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.2} />

                <XAxis
                  dataKey="name"
                  tick={{ fill: "#9ca3af", fontSize: 11 }}
                  stroke="#6b7280"
                />
                <YAxis
                  tick={{ fill: "#9ca3af", fontSize: 11 }}
                  stroke="#6b7280"
                />

                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    border: "1px solid #374151",
                    color: "#fff",
                    borderRadius: "8px",
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="projects"
                  stroke="#a78bfa"
                  strokeWidth={2}
                  fill="url(#projectsGradient)"
                  dot={<CustomDot dataKey="projects" />}
                />

                <Area
                  type="monotone"
                  dataKey="proficiency"
                  stroke="#22d3ee"
                  strokeWidth={3}
                  fill="url(#proficiencyGradient)"
                  dot={<CustomDot dataKey="proficiency" />}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

      </div>
    </div>
    </div>
  );
};

export default AboutMe;
