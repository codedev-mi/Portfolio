import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github, Folder, Smartphone, Database, Brain, Home } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef(null);

    const projects = [
        {
            title: "Code Reviewer",
            tagline: "AI-Powered Analysis",
            desc: "Automated code review system using Google Gemini AI for smart refactoring suggestions.",
            image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop", // Cyberpunk/Code
            icon: <Brain size={24} className="text-purple-400" />,
            color: "group-hover:border-purple-500/50",
            links: { github: "https://github.com/codedev-mi/Code-Reviewer", demo: "#" }
        },
        {
            title: "CodoFile",
            tagline: "Online Editor + OCR",
            desc: "Advanced code editor supporting multiple languages with voice-to-text and OCR capabilities.",
            image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop", // Clean Code Editor
            icon: <Folder size={24} className="text-blue-400" />,
            color: "group-hover:border-blue-500/50",
            links: { github: "https://github.com/codedev-mi/codo-file", demo: "#" }
        },
        {
            title: "Frosty Delights",
            tagline: "E-Commerce App",
            desc: "Full-featured ice cream ordering platform with specific cart logic and Razorpay integration.",
            image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800&auto=format&fit=crop", // Vibrant Ice Cream
            icon: <Smartphone size={24} className="text-pink-400" />,
            color: "group-hover:border-pink-500/50",
            links: { github: "https://github.com/codedev-mi/Frosty-Delights", demo: "#" }
        },
        {
            title: "Health Assistant",
            tagline: "Medical AI Chat",
            desc: "Intelligent chatbot for symptom analysis and medical advice using Gemini & Streamlit.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop", // Medical Tech
            icon: <Database size={24} className="text-teal-400" />,
            color: "group-hover:border-teal-500/50",
            links: { github: "https://github.com/codedev-mi/AI-Health-Assistant", demo: "#" }
        },
        {
            title: "Real Estate Analytics",
            tagline: "Data Dashboard",
            desc: "Market trend analyzer with interactive charts and NLP-based querying system.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop", // Futuristic Architecture
            icon: <Home size={24} className="text-indigo-400" />,
            color: "group-hover:border-indigo-500/50",
            links: { github: "https://github.com/codedev-mi/Real-Estate-Analysis-Chatbot", demo: "#" }
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".proj-card",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%", // Trigger earlier
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Featured Work</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className={`proj-card group relative bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${project.color}`}>
                        {/* Image Area */}
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 opacity-60"></div>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10">
                                {project.icon}
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-6 relative z-20">
                            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">{project.tagline}</span>
                            <h3 className="text-2xl font-bold text-white mt-2 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                {project.desc}
                            </p>

                            <div className="flex gap-4">
                                <a href={project.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-colors">
                                    <Github size={16} /> Source Code
                                </a>
                                <a href={project.links.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-colors">
                                    <ExternalLink size={16} /> Live Demo
                                </a>
                            </div>
                        </div>

                        {/* Hover Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default Projects;
