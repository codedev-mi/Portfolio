import React, { useEffect, useRef } from 'react';
import {
    Code, Terminal, Database, Server, Cpu, Globe, Layout,
    Smartphone, PenTool, Share2, GitBranch, Cloud, Layers,
    Box, FileCode, Palette, Monitor, Workflow, Braces
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const sectionRef = useRef(null);

    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "HTML", icon: <FileCode size={18} /> },
                { name: "CSS", icon: <Palette size={18} /> },
                { name: "JavaScript", icon: <Code size={18} /> },
                { name: "SQL", icon: <Database size={18} /> },
                { name: "Node.js", icon: <Server size={18} /> },
                { name: "Python", icon: <Terminal size={18} /> },
                { name: "C++", icon: <Code size={18} /> },
                { name: "Java", icon: <Code size={18} /> }
            ]
        },
        {
            title: "Libraries & Frameworks",
            skills: [
                { name: "Express", icon: <Cpu size={18} /> },
                { name: "React", icon: <Monitor size={18} /> }
            ]
        },
        {
            title: "Frontend",
            skills: [
                { name: "UI/UX Design", icon: <PenTool size={18} /> },
                { name: "Responsive Design", icon: <Smartphone size={18} /> },
                { name: "Wireframing", icon: <Layout size={18} /> },
                { name: "Prototyping", icon: <Layers size={18} /> },
                { name: "Figma", icon: <PenTool size={18} /> },
                { name: "Canva", icon: <Palette size={18} /> }
            ]
        },
        {
            title: "Backend & Integration",
            skills: [
                { name: "REST APIs", icon: <Globe size={18} /> },
                { name: "JSON", icon: <Braces size={18} /> },
                { name: "XML", icon: <FileCode size={18} /> },
                { name: "API Integration", icon: <Share2 size={18} /> }
            ]
        },
        {
            title: "Tools & Platforms",
            skills: [
                { name: "Git", icon: <GitBranch size={18} /> },
                { name: "VS Code", icon: <Terminal size={18} /> },
                { name: "Postman", icon: <Share2 size={18} /> },
                { name: "GitHub", icon: <GitBranch size={18} /> }
            ]
        },
        {
            title: "Databases",
            skills: [
                { name: "MySQL", icon: <Database size={18} /> },
                { name: "MongoDB", icon: <Database size={18} /> }
            ]
        },
        {
            title: "Cloud & DevOps",
            skills: [
                { name: "AWS", icon: <Cloud size={18} /> },
                { name: "CI/CD Pipelines", icon: <Workflow size={18} /> },
                { name: "Docker (Basic)", icon: <Box size={18} /> }
            ]
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".skill-category",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="skills" ref={sectionRef} className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Skills</h2>

            <div className="space-y-8">
                {skillCategories.map((category, catIndex) => (
                    <div key={catIndex} className="skill-category">
                        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-accent pl-4">
                            {category.title}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                            {category.skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="group bg-[#111111] border border-white/5 p-2 rounded-lg flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-accent hover:to-purple-600 hover:shadow-[0_0_20px_-5px_rgba(217,70,239,0.5)] hover:border-transparent"
                                >
                                    <div className="p-2 bg-white/5 rounded-md text-gray-400 group-hover:text-white transition-colors duration-300">
                                        {skill.icon}
                                    </div>
                                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default Skills;
