import React, { useEffect, useRef } from 'react';
import { Layout, Database, Code, Cpu, Smartphone, BarChart } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Expertise = () => {
    const sectionRef = useRef(null);

    const expertiseItems = [
        {
            title: "Frontend Engineering",
            icon: <Layout className="text-blue-400" size={32} />,
            desc: "Crafting highly interactive, accessible, and performant user interfaces using React, Next.js, and modern CSS architectures.",
            skills: ["React / Next.js", "Tailwind CSS", "GSAP / Framer Motion", "TypeScript"]
        },
        {
            title: "Backend Architecture",
            icon: <Database className="text-purple-400" size={32} />,
            desc: "Designing scalable server-side systems and robust APIs that handle complex business logic and data flows.",
            skills: ["Node.js / Express", "Python / FastAPI", "PostgreSQL / MongoDB", "Redis"]
        },
        {
            title: "AI & Intelligence",
            icon: <Cpu className="text-pink-400" size={32} />,
            desc: "Integrating Large Language Models (LLMs) and custom AI agents into applications to automate workflows and enhance UX.",
            skills: ["LangChain", "OpenAI / Gemini API", "Vector Databases", "Prompt Engineering"]
        },
        {
            title: "Product Strategy",
            icon: <BarChart className="text-teal-400" size={32} />,
            desc: "Bridging the gap between engineering and business goals through data-driven decisions and user research.",
            skills: ["System Design", "User Analytics", "Agile Workflows", "Performance Audit"]
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".expertise-card",
                { y: 50, opacity: 0 },
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
        <section id="expertise" ref={sectionRef} className="py-32 px-6 md:px-20 max-w-7xl mx-auto border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Left Side: Title & Description */}
                <div className="lg:col-span-4 sticky top-32 h-fit">
                    <span className="text-accent font-mono tracking-widest uppercase text-xs mb-4 block">Capabilities</span>
                    <h2 className="text-5xl font-bold text-white mb-8 tracking-tighter leading-tight">
                        Core <br />
                        <span className="text-gray-500 italic">Expertise</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed font-light">
                        I specialize in building end-to-end digital products that are not just functional, but also provide meaningful experiences to users.
                    </p>
                </div>

                {/* Right Side: Expertise Cards */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {expertiseItems.map((item, index) => (
                        <div key={index} className="expertise-card group p-8 bg-[#0d0d0d] border border-white/5 rounded-3xl hover:border-white/20 transition-all duration-500">
                            <div className="mb-6 bg-white/5 w-fit p-4 rounded-2xl group-hover:bg-accent/10 transition-colors duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 italic group-hover:text-accent transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed mb-8 text-sm">
                                {item.desc}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {item.skills.map((skill, i) => (
                                    <span key={i} className="text-[10px] uppercase tracking-widest font-bold text-white/40 bg-white/5 px-2 py-1 rounded-md">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
