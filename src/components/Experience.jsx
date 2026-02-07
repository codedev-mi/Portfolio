import React, { useEffect, useRef } from 'react';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';
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
            description: [
                "Developed pixel-perfect, responsive user interfaces using React.js and Tailwind CSS.",
                "Collaborated with UI/UX designers to translate Figma mockups into functional apps.",
                "Optimized frontend performance for faster load times and smoother animations.",
                "Integrated RESTful APIs and managed global application state."
            ],
            tech: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "React.js", "Tailwind CSS", "Responsive Web Design", "UI/UX Implementation", "Figma", "REST APIs", "Redux"]
        },
        {
            company: "Cognifyz",
            role: "Web Development Intern",
            date: "Jan 2025 - Feb 2025",
            description: [
                "Built dynamic web apps using HTML, CSS, JavaScript, Node.js, and Express.",
                "Implemented interactive forms with strong client/server-side validation.",
                "Improved UI/UX using Bootstrap, animations, and dynamic DOM updates.",
                "Optimized backend performance with middleware and caching strategies."
            ],
            tech: ["HTML/CSS", "JavaScript", "Node.js", "Express", "EJS"]
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".experience-card",
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out"
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="experience" ref={sectionRef} className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Professional Journey</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="experience-card group relative bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-accent/30 rounded-2xl p-6 md:p-8 transition-all duration-300 w-full h-full flex flex-col"
                    >
                        {/* Content Wrapper to ensure spacing */}
                        <div className="flex flex-col h-full">

                            {/* Header Section */}
                            <div className="mb-6">
                                <div className="flex flex-col gap-1 mb-3">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                                        {exp.role}
                                    </h3>
                                    <span className="text-xl text-purple-400 font-medium">
                                        {exp.company}
                                    </span>
                                </div>

                                <div className="flex items-center gap-3 flex-wrap">
                                    <div className="flex items-center gap-2 text-secondary text-sm bg-white/5 w-fit px-3 py-1 rounded-full border border-white/5">
                                        <Calendar size={14} className="text-accent" />
                                        <span>{exp.date}</span>
                                    </div>
                                    {exp.date.toLowerCase().includes('present') && (
                                        <span className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-400 text-xs font-semibold rounded-full border border-green-500/20 animate-pulse">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                                            Present
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Description List - Pushes Tech Stack Down */}
                            <ul className="space-y-3 mb-8 flex-grow">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300">
                                        <ChevronRight size={16} className="mt-1 text-accent flex-shrink-0" />
                                        <span className="text-sm leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Tech Stack Tags - Always at Bottom */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {exp.tech.map((tech, tIndex) => (
                                    <span
                                        key={tIndex}
                                        className="px-3 py-1 text-xs font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full group-hover:bg-purple-500/20 group-hover:border-purple-500/30 transition-all duration-300"
                                    >
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
