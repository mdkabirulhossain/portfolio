/* eslint-disable react-hooks/purity */
'use client';

import React, { useMemo, useState, useEffect } from 'react'; // 👈 ADD useState, useEffect
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Linkedin, Github, Facebook } from 'lucide-react';
import Image from 'next/image';
import kabiru from '@/public/images/Kabirul.png'
import Link from 'next/link';
import { useTheme } from 'next-themes';


const CodeSnippet = ({ code, top, left, right, bottom, delay }: {
    code: string[];
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    delay: number;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 0.8, delay }}
        className="absolute hidden md:block"
        style={{ top, left, right, bottom }}
    >
        {/* UPDATED: Code Snippet Border Color to Cyan */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 font-mono text-sm">
            {code.map((line, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: delay + i * 0.1 }}
                    className="text-cyan-400"
                >
                    {line}
                </motion.div>
            ))}
        </div>
    </motion.div>
);

const HeroSection = () => {
    // 1. ADD: State to track if the component has mounted
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();


    // 2. ADD: Effect to set mounted to true after the first client-side render (hydration)
    useEffect(() => {
        setMounted(true);
    }, []);

    // ... (rest of your variants and codeSnippets remain the same)
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

    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 },
        },
        tap: { scale: 0.95 },
    };

    const codeSnippets = [
        {
            code: [
                'import { NextPage } from "next";',
                'import React from "react";',
                '',
                'const Home: NextPage = () => {',
                '  return <div>Welcome</div>;',
                '};'
            ],
            top: '10%',
            left: '5%',
            delay: 0.5
        },
        {
            code: [
                'const fetchData = async () => {',
                '  const response = await fetch();',
                ' return response.json();',
                '};'
            ],
            top: '15%',
            right: '5%',
            delay: 0.7
        },
        {
            code: [
                'interface User {',
                ' name: string;',
                ' role: string;',
                ' skills: string[];',
                '}'
            ],
            top: '60%',
            left: '5%',
            delay: 0.9
        },
        {
            code: [
                'const tailwindConfig = {',
                ' theme: {',
                ' extend: {',
                ' colors: { primary: "#A855F7" }',
                ' }',
                ' }',
                '};'
            ],
            bottom: '35%',
            left: '48%',
            delay: 1.1
        },
        {
            code: [
                'function calculateSum(a, b) {',
                ' return a + b;',
                '}',
                '',
                'const result = calculateSum(5, 10);'
            ],
            bottom: '40%',
            right: '6%',
            delay: 1.3
        },
        {
            code: [
                'const useCustomHook = () => {',
                ' const [state, setState] = useState();',
                ' return { state, setState };',
                '};'
            ],
            top: '40%',
            right: '4%',
            delay: 1.5
        }
    ];

    // Generate random positions once using useMemo to avoid re-renders
    const particles = useMemo(() =>
        [...Array(15)].map(() => ({
            initialX: Math.random() * 1000,
            initialY: Math.random() * 1000,
            animateY: Math.random() * 1000,
            duration: Math.random() * 15 + 10,
            delay: Math.random() * 5,
        })),
        []);

    return (
        <div className={`relative min-h-screen w-full overflow-hidden ${theme !== 'light' ? 'bg-linear-to-br from-gray-950 via-black to-gray-950' : 'bg-linear-to-br from-gray-50 via-white to-gray-100'}`}>
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    // UPDATED: Grid lines color to Cyan
                    backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.15) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }} />
            </div>

            {/* Code Snippets Background */}
            {codeSnippets.map((snippet, index) => (
                <CodeSnippet key={index} {...snippet} />
            ))}

            {/* Main Content */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
                        {/* Left Content */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-center "
                        >
                            <motion.h1
                                variants={itemVariants}
                                className="text-xl sm:text-3xl lg:text-5xl xl:text-4xl font-bold mb-8 leading-tight uppercase"
                            >
                                {/* UPDATED: Primary Logo Text Gradient for eye-catching contrast */}
                                <span className="bg-linear-to-r from-cyan-400 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                                    I am Md. Kabirul Hossain,
                                </span>
                                <br />
                                {/* UPDATED: Secondary Text Gradient */}
                                <span className="bg-linear-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                                    MERN Stack Developer.
                                </span>
                            </motion.h1>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                            >
                                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                                    <Button
                                        size="lg"
                                        // UPDATED: Button Gradient for strong visual appeal
                                        className="bg-linear-to-r cursor-pointer from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-semibold px-8 py-6 rounded-full text-lg shadow-lg shadow-purple-500/50 transition-all"
                                    >
                                        Connect With Me
                                    </Button>
                                </motion.div>

                                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                                    <Link href="/kabirul.pdf" download target="_blank">
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className="border-2 cursor-pointer border-white text-white hover:bg-white hover:text-white font-semibold px-8 py-6 rounded-full text-lg transition-colors"
                                        >
                                            My Resume
                                        </Button>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Right Content - Single Circle Profile */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                            className="relative flex flex-col items-center gap-8"
                        >
                            {/* Single Gradient Circle with Profile */}
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
                                    // UPDATED: Circle Border/Glow Gradient to match button
                                    className="absolute -inset-2 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-md"
                                />

                                <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-gray-900 shadow-2xl">
                                    <Image
                                        src={kabiru}
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
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.2 }}
                                className="flex gap-6"
                            >
                                {[
                                    {
                                        icon: Linkedin,
                                        label: "LinkedIn",
                                        color: "hover:bg-cyan-500",
                                        link: "https://www.linkedin.com/in/md-kabirul-hossain-0a63351ab",
                                    },
                                    {
                                        icon: Github,
                                        label: "GitHub",
                                        color: "hover:bg-indigo-500",
                                        link: "https://github.com/mdkabirulhossain",
                                    },
                                    {
                                        icon: Facebook,
                                        label: "Facebook",
                                        color: "hover:bg-sky-500",
                                        link: "https://www.facebook.com/mdkabirulhossain.joy",
                                    },
                                ].map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.15, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className={`w-14 h-14 cursor-pointer rounded-full bg-cyan-900/50 text-white flex items-center justify-center shadow-xl ${social.color} hover:text-white transition-all duration-300`}
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-7 h-7" />
                                    </motion.a>
                                ))}
                            </motion.div>

                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Floating Particles */}
            {/* 3. FIX: Only render particles after component has mounted on the client */}
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