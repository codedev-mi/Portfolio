import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import gsap from 'gsap';

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.fromTo(".hero-tag",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
            );

            tl.fromTo(".hero-title",
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
                "-=0.7"
            );

            tl.fromTo(".hero-summary",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
                "-=0.8"
            );

            tl.fromTo(".hero-actions",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" },
                "-=0.6"
            );

            tl.fromTo(".hero-social",
                { opacity: 0 },
                { opacity: 1, duration: 1.5, ease: "power2.out" },
                "-=0.4"
            );
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="hero" ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
            {/* Background Texture & Gradients */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-5xl w-full text-center">
                <span className="hero-tag inline-block text-accent font-mono tracking-[0.3em] uppercase text-xs mb-8">
                    Available for New Opportunities
                </span>

                <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-10 tracking-tighter leading-[0.9]">
                    Building <span className="text-gray-500">Digital</span> Experiences.
                </h1>

                <div className="hero-summary max-w-2xl mx-auto mb-14 px-4">
                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
                        Full Stack Developer specializing in <span className="text-white font-medium">high-performance web applications</span> and 
                        <span className="text-white font-medium"> AI-driven solutions</span>. Delivering measurable business impact through clean code and human-centric design.
                    </p>
                </div>

                <div className="hero-actions flex flex-wrap justify-center gap-6 mb-20">
                    <a href="#projects" className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-white/5">
                        View Case Studies
                    </a>
                    <a href="#contact" className="bg-transparent border border-white/10 text-white px-10 py-4 rounded-full font-medium hover:bg-white/5 transition-all duration-300">
                        Let's Talk
                    </a>
                </div>

                <div className="hero-social flex justify-center gap-10 text-gray-500 border-t border-white/5 pt-10 mt-10">
                    <a href="https://github.com/shrutipb1601" target="_blank" rel="noreferrer" className="hover:text-white transition-all hover:-translate-y-1">
                        <Github size={24} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-all hover:-translate-y-1">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:shrutipb1601@gmail.com" className="hover:text-white transition-all hover:-translate-y-1">
                        <Mail size={24} />
                    </a>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30 animate-pulse">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Scroll</span>
                <ArrowDown size={16} />
            </div>
        </section>
    );
};

export default Hero;
