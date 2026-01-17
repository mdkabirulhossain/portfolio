// /* eslint-disable react-hooks/set-state-in-effect */
// 'use client';

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';
// import { Linkedin, Github, Facebook } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useTheme } from 'next-themes';

// // const CodeSnippet = ({ code, top, left, right, bottom, delay }: {
// //     code: string[];
// //     top?: string;
// //     left?: string;
// //     right?: string;
// //     bottom?: string;
// //     delay: number;
// // }) => (
// //     <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 0.6, y: 0 }}
// //         transition={{ duration: 0.8, delay }}
// //         className="absolute hidden md:block"
// //         style={{ top, left, right, bottom }}
// //     >
// //         <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 font-mono text-sm">
// //             {code.map((line, i) => (
// //                 <motion.div
// //                     key={i}
// //                     initial={{ opacity: 0, x: -10 }}
// //                     animate={{ opacity: 1, x: 0 }}
// //                     transition={{ duration: 0.5, delay: delay + i * 0.1 }}
// //                     className="text-cyan-400"
// //                 >
// //                     {line}
// //                 </motion.div>
// //             ))}
// //         </div>
// //     </motion.div>
// // );

// const HeroSection = () => {
//     const [mounted, setMounted] = useState(false);
//     const [particles, setParticles] = useState<Array<{
//         initialX: number;
//         initialY: number;
//         animateY: number;
//         duration: number;
//         delay: number;
//     }>>([]);
//     const { theme } = useTheme();

//     useEffect(() => {
//         setMounted(true);
//         setParticles(
//             [...Array(15)].map(() => ({
//                 initialX: Math.random() * 1000,
//                 initialY: Math.random() * 1000,
//                 animateY: Math.random() * 1000,
//                 duration: Math.random() * 15 + 10,
//                 delay: Math.random() * 5,
//             }))
//         );
//     }, []);

//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.2,
//                 delayChildren: 0.3,
//             },
//         },
//     };

//     const itemVariants = {
//         hidden: { opacity: 0, y: 20 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: { duration: 0.6, ease: 'easeOut' as const },
//         },
//     };

//     useEffect(() => {
//         setMounted(true);
//     }, []);

//     if (!mounted) return null;

//     return (
//         <div
//             className={`relative w-full overflow-hidden ${theme !== 'light'
//                     ? 'bg-black text-white'
//                     : 'bg-white text-black'
//                 }`}
//         >
//             <div className="absolute inset-0 opacity-20">
//                 <div className="absolute inset-0" style={{
//                     backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.15) 1px, transparent 1px),
//                                linear-gradient(90deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px)`,
//                     backgroundSize: '40px 40px',
//                 }} />
//             </div>


//             {/* Main Content */}
// <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
//                     <div className="w-full max-w-7xl mx-auto">
//                     <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
//                         {/* Left Content */}
//                         <motion.div
//                             variants={containerVariants}
//                             initial="hidden"
//                             animate="visible"
//                             className="text-center"
//                         >
//                             <motion.h1
//                                 variants={itemVariants}
//                                 className="text-xl sm:text-3xl lg:text-5xl xl:text-4xl font-bold mb-8 leading-tight uppercase"
//                             >
//                                 <span className="bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
//                                     I am Md. Kabirul Hossain,
//                                 </span>
//                                 <br />
//                                 <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
//                                     MERN Stack Developer.
//                                 </span>
//                             </motion.h1>

//                             <motion.div
//                                 variants={itemVariants}
//                                 className="flex flex-col sm:flex-row gap-4 justify-center"
//                             >
//                                 <motion.div
//                                     whileHover={{ scale: 1.05 }}
//                                     whileTap={{ scale: 0.95 }}
//                                     transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                                 >
//                                     <Button
//                                         size="lg"
//                                         className="bg-gradient-to-r cursor-pointer from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-semibold px-8 py-6 rounded-full text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300"
//                                     >
//                                         Connect With Me
//                                     </Button>
//                                 </motion.div>

//                                 <motion.div
//                                     whileHover={{ scale: 1.05 }}
//                                     whileTap={{ scale: 0.95 }}
//                                     transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                                 >
//                                     <Link href="/kabirul.pdf" download target="_blank">
//                                         <Button
//                                             size="lg"
//                                             variant="outline"
//                                             className={`border-2 cursor-pointer font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300 ${theme !== 'light'
//                                                     ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
//                                                     : 'border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white'
//                                                 }`}
//                                         >
//                                             My Resume
//                                         </Button>
//                                     </Link>
//                                 </motion.div>
//                             </motion.div>
//                         </motion.div>

//                         {/* Right Content - Single Circle Profile */}
//                         <motion.div
//                             initial={{ opacity: 0, scale: 0.8 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
//                             className="relative flex flex-col items-center gap-8"
//                         >
//                             {/* Single Gradient Circle with Profile */}
//                             <div className="relative">
//                                 <motion.div
//                                     animate={{
//                                         rotate: 360,
//                                     }}
//                                     transition={{
//                                         duration: 15,
//                                         repeat: Infinity,
//                                         ease: 'linear',
//                                     }}
//                                     className="absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-md"
//                                 />

//                                 <div className={`relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 shadow-2xl ${theme !== 'light' ? 'border-gray-900' : 'border-white'
//                                     }`}>
//                                     <Image
//                                         src="/images/Kabirul.png"
//                                         alt="Md. Kabirul Hossain"
//                                         fill
//                                         sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
//                                         className="object-cover"
//                                         priority
//                                         quality={100}
//                                     />
//                                 </div>
//                             </div>

//                             {/* Social Icons Below Circle - UPDATED WITH SPRING ANIMATIONS */}
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.6, delay: 1.2 }}
//                                 className="flex gap-6"
//                             >
//                                 {[
//                                     {
//                                         icon: Linkedin,
//                                         label: "LinkedIn",
//                                         gradient: "from-cyan-500 to-blue-500",
//                                         hoverGradient: "from-cyan-400 to-blue-400",
//                                         link: "https://www.linkedin.com/in/md-kabirul-hossain-0a63351ab",
//                                     },
//                                     {
//                                         icon: Github,
//                                         label: "GitHub",
//                                         gradient: "from-purple-600 to-pink-600",
//                                         hoverGradient: "from-purple-500 to-pink-500",
//                                         link: "https://github.com/mdkabirulhossain",
//                                     },
//                                     {
//                                         icon: Facebook,
//                                         label: "Facebook",
//                                         gradient: "from-indigo-600 to-purple-600",
//                                         hoverGradient: "from-indigo-500 to-purple-500",
//                                         link: "https://www.facebook.com/mdkabirulhossain.joy",
//                                     },
//                                 ].map((social) => (
//                                     <motion.a
//                                         key={social.label}
//                                         href={social.link}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         whileHover={{
//                                             scale: 1.2,
//                                             y: -8,
//                                             rotate: [0, -10, 10, -10, 0]
//                                         }}
//                                         whileTap={{ scale: 0.9 }}
//                                         transition={{
//                                             type: "spring",
//                                             stiffness: 400,
//                                             damping: 10,
//                                             rotate: {
//                                                 duration: 0.5,
//                                                 ease: "easeInOut"
//                                             }
//                                         }}
//                                         className={`relative w-14 h-14 cursor-pointer rounded-full bg-gradient-to-br ${social.gradient} hover:bg-gradient-to-br hover:${social.hoverGradient} text-white flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 group`}
//                                         aria-label={social.label}
//                                     >
//                                         {/* Glow effect on hover */}
//                                         <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-300`} />

//                                         {/* Icon with spring animation */}
//                                         <motion.div
//                                             whileHover={{
//                                                 scale: 1.1,
//                                                 rotate: 360
//                                             }}
//                                             transition={{
//                                                 type: "spring",
//                                                 stiffness: 260,
//                                                 damping: 20,
//                                                 rotate: {
//                                                     duration: 0.6,
//                                                     ease: "easeInOut"
//                                                 }
//                                             }}
//                                             className="relative z-10"
//                                         >
//                                             <social.icon className="w-7 h-7" />
//                                         </motion.div>
//                                     </motion.a>
//                                 ))}
//                             </motion.div>
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>

//             {/* Floating Particles */}
//             {mounted && particles.map((particle, i) => (
//                 <motion.div
//                     key={i}
//                     className="absolute w-2 h-2 bg-cyan-500/40 rounded-full"
//                     initial={{
//                         x: particle.initialX,
//                         y: particle.initialY,
//                         opacity: 0,
//                     }}
//                     animate={{
//                         y: [null, particle.animateY],
//                         opacity: [0, 0.8, 0],
//                     }}
//                     transition={{
//                         duration: particle.duration,
//                         repeat: Infinity,
//                         ease: 'linear',
//                         delay: particle.delay,
//                     }}
//                 />
//             ))}
//         </div>
//     );
// };

// export default HeroSection;

/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Linkedin, Github, Facebook } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const HeroSection = () => {
    const [mounted, setMounted] = useState(false);
    const [particles, setParticles] = useState<Array<{
        initialX: number;
        initialY: number;
        animateY: number;
        duration: number;
        delay: number;
    }>>([]);
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
        setParticles(
            [...Array(15)].map(() => ({
                initialX: Math.random() * 1000,
                initialY: Math.random() * 1000,
                animateY: Math.random() * 1000,
                duration: Math.random() * 15 + 10,
                delay: Math.random() * 5,
            }))
        );
    }, []);

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

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' as const },
        },
    };

    if (!mounted) return null;

    return (
        <div
            className={`relative w-full overflow-hidden ${theme !== 'light'
                ? 'bg-black text-white'
                : 'bg-white text-black'
                }`}
        >
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.15) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }} />
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex items-center justify-center min-h-screen pt-40  pb-16 sm:pb-0 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="flex flex-col-reverse gap-12 lg:gap-16">
                        {/* Left Content */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            className="text-center"
                        >

                            <motion.h1
                                variants={itemVariants}
                                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight"
                            >
                                <span className="bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                                    Hi, I&apos;m Md. Kabirul Hossain
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                                    MERN Stack Developer
                                </span>
                            </motion.h1>

                            {/* Subtitle */}
                            <motion.p
                                variants={itemVariants}
                                className={`text-base sm:text-lg lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed ${theme !== 'light' ? 'text-gray-300' : 'text-gray-700'
                                    }`}
                            >
                                Passionate about building scalable web applications with modern technologies.
                                Specialized in creating seamless user experiences with clean, efficient code.
                            </motion.p>

                            {/* Tech Stack */}
                            <motion.div
                                variants={itemVariants}
                                className="mb-8"
                            >
                                <div className={`text-sm font-medium mb-3 ${theme !== 'light' ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                    Tech Stack
                                </div>
                                <div className="flex flex-wrap gap-3 justify-center">
                                    {['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind'].map((tech) => (
                                        <motion.div
                                            key={tech}
                                            whileHover={{ scale: 1.1, y: -5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                            className={`px-4 py-2 rounded-full border-2 ${theme !== 'light'
                                                ? 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400'
                                                : 'border-cyan-600/30 bg-cyan-600/10 text-cyan-700'
                                                }`}
                                        >
                                            {tech}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Buttons */}
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r cursor-pointer from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-semibold px-8 py-6 rounded-full text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300"
                                    >
                                        Connect With Me
                                    </Button>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <Link href="/kabirul.pdf" download target="_blank">
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className={`border-2 cursor-pointer font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300 ${theme !== 'light'
                                                ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                                                : 'border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white'
                                                }`}
                                        >
                                            My Resume
                                        </Button>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Right Content - Profile Image with Social Icons */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="relative flex flex-col items-center gap-8"
                        >

                            {/* Profile Circle with Image */}
                            <div className="relative">
                                <motion.div
                                    animate={{
                                        rotate: 360,
                                    }}
                                    transition={{
                                        duration: 15,
                                        repeat: Infinity,
                                        ease: 'linear',
                                    }}
                                    className="absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-md"
                                />

                                <div className={`relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 shadow-2xl ${theme !== 'light' ? 'border-gray-900' : 'border-white'
                                    }`}>
                                    <Image
                                        src="/images/Kabirul.png"
                                        alt="Md. Kabirul Hossain"
                                        fill
                                        sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
                                        className="object-cover"
                                        priority
                                        quality={100}
                                    />
                                </div>
                            </div>

                            {/* Social Icons Below Circle */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                                className="flex gap-6"
                            >

                                {[
                                    {
                                        icon: Linkedin,
                                        label: "LinkedIn",
                                        gradient: "from-cyan-500 to-blue-500",
                                        hoverGradient: "from-cyan-400 to-blue-400",
                                        link: "https://www.linkedin.com/in/md-kabirul-hossain-0a63351ab",
                                    },
                                    {
                                        icon: Github,
                                        label: "GitHub",
                                        gradient: "from-purple-600 to-pink-600",
                                        hoverGradient: "from-purple-500 to-pink-500",
                                        link: "https://github.com/mdkabirulhossain",
                                    },
                                    {
                                        icon: Facebook,
                                        label: "Facebook",
                                        gradient: "from-indigo-600 to-purple-600",
                                        hoverGradient: "from-indigo-500 to-purple-500",
                                        link: "https://www.facebook.com/mdkabirulhossain.joy",
                                    },
                                ].map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{
                                            scale: 1.2,
                                            y: -8,
                                            rotate: [0, -10, 10, -10, 0]
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 10,
                                            rotate: {
                                                duration: 0.5,
                                                ease: "easeInOut"
                                            }
                                        }}
                                        className={`relative w-14 h-14 cursor-pointer rounded-full bg-gradient-to-br ${social.gradient} hover:bg-gradient-to-br hover:${social.hoverGradient} text-white flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 group`}
                                        aria-label={social.label}
                                    >
                                        {/* Glow effect on hover */}
                                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-300`} />

                                        {/* Icon with spring animation */}
                                        <motion.div
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 360
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20,
                                                rotate: {
                                                    duration: 0.6,
                                                    ease: "easeInOut"
                                                }
                                            }}
                                            className="relative z-10"
                                        >
                                            <social.icon className="w-7 h-7" />
                                        </motion.div>
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Floating Particles */}
            {mounted && particles.map((particle, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-500/40 rounded-full"
                    initial={{
                        x: particle.initialX,
                        y: particle.initialY,
                        opacity: 0,
                    }}
                    animate={{
                        y: [null, particle.animateY],
                        opacity: [0, 0.8, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: particle.delay,
                    }}
                />
            ))}
        </div>
    );
};

export default HeroSection;
