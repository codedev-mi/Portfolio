import React, { useEffect, useRef } from 'react';
import { GraduationCap, MapPin, Sparkles, BookOpen, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".about-item",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="py-32 px-6 md:px-20 max-w-7xl mx-auto border-t border-white/5">
            <div className="flex flex-col md:flex-row gap-20">
                {/* Left Side: Story */}
                <div className="md:w-3/5">
                    <span className="about-item text-accent font-mono tracking-widest uppercase text-xs mb-4 block">The Narrative</span>
                    <h2 className="about-item text-5xl md:text-7xl font-bold text-white mb-10 tracking-tighter leading-none">
                        Driven by code, <br />
                        <span className="text-gray-500 italic text-4xl md:text-6xl">defined by curiosity.</span>
                    </h2>
                    
                    <div className="about-item space-y-8 text-xl text-gray-400 font-light leading-relaxed">
                        <p>
                            I am <strong className="text-white font-medium">Shruti Bhangale</strong>, a Full Stack Developer and MCA student dedicated to building user-centric digital products. My approach combines technical rigor with a obsession for clean, scalable architecture.
                        </p>
                        <p>
                            Currently evolving my craft through the <span className="text-white font-medium">MERN stack</span> and <span className="text-white font-medium">Generative AI</span>, I focus on turning complex problems into seamless digital experiences. Whether it's a high-performance e-commerce engine or an AI-driven assistant, my goal is always measurable impact.
                        </p>
                    </div>

                    <div className="about-item flex flex-wrap gap-8 mt-12 pt-12 border-t border-white/5">
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-1">Based in</span>
                            <span className="text-white flex items-center gap-2"><MapPin size={14} className="text-accent" /> Nashik, India</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-1">Specializing in</span>
                            <span className="text-white flex items-center gap-2"><Sparkles size={14} className="text-accent" /> Full Stack Development</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Academic Foundation & Bento Details */}
                <div className="md:w-2/5 flex flex-col gap-6">
                    <div className="about-item p-8 bg-[#0d0d0d] border border-white/5 rounded-3xl group hover:border-accent/20 transition-all duration-500">
                        <GraduationCap className="text-accent mb-6" size={32} />
                        <h3 className="text-xl font-bold text-white mb-2">Academic Foundation</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Master of Computer Applications (MCA) at K. K. Wagh Institute. Bridging advanced theory with practical engineering.
                        </p>
                        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-accent uppercase">
                            <Star size={12} /> Expected 2026
                        </div>
                    </div>

                    <div className="about-item p-8 bg-[#0d0d0d] border border-white/5 rounded-3xl group hover:border-purple-500/20 transition-all duration-500">
                        <BookOpen className="text-purple-400 mb-6" size={32} />
                        <h3 className="text-xl font-bold text-white mb-2">Technical Excellence</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            B.Voc in Software Development with a near-perfect <span className="text-white">9.8 CGPA</span>. Excellence in fundamentals.
                        </p>
                        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-purple-400 uppercase">
                            <Star size={12} /> Graduated with Distinction
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
