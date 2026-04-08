import React, { useEffect, useRef } from 'react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const sectionRef = useRef(null);

    const experiences = [
        {
            company: "Cofa Studio",
            role: "Frontend Web Developer Intern",
            date: "Jan 2026 - Present",
            location: "Remote",
            description: [
                "Developing pixel-perfect, responsive user interfaces using React.js and Tailwind CSS.",
                "Engineering high-performance frontend components, streamlining UI/UX from Figma designs.",
                "Optimizing application state management and API integration for seamless user flows."
            ],
            tech: ["React.js", "Tailwind CSS", "GSAP", "Redux", "Figma"]
        },
        {
            company: "Cognifyz",
            role: "Web Development Intern",
            date: "Jan 2025 - Feb 2025",
            location: "Nashik, India",
            description: [
                "Architected dynamic web applications using Node.js and Express.",
                "Implemented secure form handling and server-side validation protocols.",
                "Enhanced core user engagement through intuitive UI updates and performance tuning."
            ],
            tech: ["Node.js", "Express", "JavaScript", "HTML5", "CSS3"]
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".experience-item",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="experience" ref={sectionRef} className="py-32 px-6 md:px-20 max-w-5xl mx-auto border-t border-white/5">
            <div className="flex flex-col mb-20">
                <span className="text-accent font-mono tracking-widest uppercase text-xs mb-4">Professional History</span>
                <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
                    Work <span className="text-gray-500 italic">Experience</span>
                </h2>
            </div>

            <div className="space-y-16">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-item group relative flex flex-col md:flex-row gap-8 md:gap-20 pb-16 border-b border-white/5 last:border-0 last:pb-0">
                        {/* Date & Location */}
                        <div className="md:w-1/4 flex flex-col gap-2">
                            <span className="text-sm font-medium text-white/40 tracking-wider flex items-center gap-2">
                                <Calendar size={14} className="text-accent" />
                                {exp.date}
                            </span>
                            <span className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">
                                {exp.location}
                            </span>
                        </div>

                        {/* Role & Details */}
                        <div className="md:w-3/4 flex flex-col">
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6">
                                <h3 className="text-3xl font-bold text-white mb-2 md:mb-0 transition-colors group-hover:text-accent">
                                    {exp.role}
                                </h3>
                                <span className="text-xl text-gray-400 italic font-light">
                                    at {exp.company}
                                </span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-gray-500 leading-relaxed group/li">
                                        <ChevronRight size={16} className="mt-1 flex-shrink-0 text-accent opacity-0 group-hover/li:opacity-100 transition-opacity" />
                                        <span className="group-hover/li:text-gray-300 transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map((tech, tIndex) => (
                                    <span key={tIndex} className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-white/30 bg-white/5 border border-white/5 rounded-md">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
