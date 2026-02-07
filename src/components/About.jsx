import React, { useEffect, useRef } from 'react';
import { GraduationCap, MapPin, Code2, User } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bentoImg from '../assets/bento-card.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".bento-card",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">About Me</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* 1. Bio Card (Span 2) */}
                <div className="bento-card md:col-span-2 bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl relative overflow-hidden group hover:border-accent/30 transition-colors">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <User size={120} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Who I am</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        I am a dedicated <strong className="text-white">Full-Stack Developer</strong> and <span className="text-accent">MCA student</span> who enjoys building practical and user-friendly web applications using modern technologies like the <span className="text-accent">MERN stack</span>. I focus on writing clean, easy-to-maintain code and turning ideas into real, working solutions. I also use <span className="text-accent">Generative AI tools</span> to learn faster, improve my problem-solving skills, and build better products. I am always eager to grow, take on new challenges, and improve as a developer.
                    </p>
                    <div className="mt-6 flex items-center gap-4 text-sm font-mono text-gray-500">
                        <span className="flex items-center gap-2"><MapPin size={16} /> Nashik, India</span>
                        <span className="flex items-center gap-2 text-green-500"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> Open to Work</span>
                    </div>
                </div>

                {/* 2. Visual/Image Card (Tall) */}
                <div className="bento-card md:row-span-2 bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
                    {/* Replace with actual image later */}
                    <img
                        src={bentoImg}
                        alt="Creative Abstract Illustration"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                    />
                    <div className="absolute bottom-6 left-6 z-20">
                        <p className="text-gray-400 text-sm">Design + Code</p>
                        <h3 className="text-2xl font-bold text-white">Full Stack Dev</h3>
                    </div>
                </div>

                {/* 3. Education Card 1 */}
                <div className="bento-card bg-[#111] border border-white/5 p-6 rounded-3xl hover:bg-white/5 transition-colors">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-4">
                        <GraduationCap size={20} />
                    </div>
                    <span className="text-xs font-mono text-gray-500">2026 (Expected)</span>
                    <h4 className="text-lg font-bold text-white mt-1">Master of Computer Applications</h4>
                    <p className="text-sm text-gray-400 mt-2">K. K. Wagh Institute of Engineering Education and Research, Nashik</p>
                </div>

                {/* 4. Education Card 2 */}
                <div className="bento-card bg-[#111] border border-white/5 p-6 rounded-3xl hover:bg-white/5 transition-colors">
                    <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400 mb-4">
                        <Code2 size={20} />
                    </div>
                    <span className="text-xs font-mono text-gray-500">CGPA: 9.8</span>
                    <h4 className="text-lg font-bold text-white mt-1">B.Voc Software Development</h4>
                    <p className="text-sm text-gray-400 mt-2">Bhusawal Arts, Science P O Nahata Commerce College, Bhusawal</p>
                </div>

            </div>
        </section>
    );
};

export default About;
