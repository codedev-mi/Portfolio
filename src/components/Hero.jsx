import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import gsap from 'gsap';

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.fromTo(".hero-glow",
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 2, ease: "power3.out" }
            );

            tl.fromTo(".hero-title",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
                "-=1.5"
            );

            tl.fromTo(".hero-sub",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
                "-=0.8"
            );

            tl.fromTo(".hero-btn",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" },
                "-=0.6"
            );

            tl.fromTo(".hero-social",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
                "-=0.4"
            );
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="hero" ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>

            {/* Main Pink/Purple Glow center */}
            <div className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full glow-blob glow-pink pointer-events-none animate-pulse-slow"></div>

            {/* Bottom Yellow/Gold Glow right */}
            <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] rounded-full glow-blob glow-yellow pointer-events-none"></div>

            <div className="relative z-10 text-center flex flex-col items-center">
                <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
                    Shruti Bhangale
                </h1>

                <h2 className="hero-sub text-xl md:text-2xl text-gray-300 mb-10 font-medium tracking-wide">
                    Full Stack Developer
                </h2>

                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    <a href="#contact" className="hero-btn bg-white/5 border border-white/10 text-white px-8 py-3 rounded-full font-bold hover:bg-gradient-to-r hover:from-accent hover:to-purple-600 hover:border-transparent hover:shadow-[0_0_20px_-5px_rgba(217,70,239,0.5)] hover:scale-105 transition-all duration-300">
                        Contact Me
                    </a>
                    <a href="/resume.pdf" className="hero-btn bg-white/5 border border-white/10 text-white px-8 py-3 rounded-full font-medium hover:bg-gradient-to-r hover:from-accent hover:to-purple-600 hover:border-transparent hover:scale-105 transition-all duration-300">
                        My Resume
                    </a>
                </div>

                <div className="hero-social flex gap-8 text-gray-400">
                    <a href="https://github.com/shrutipb1601" target="_blank" rel="noreferrer" className="hover:text-white transition-colors hover:scale-110 transform duration-200">
                        <Github size={28} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">
                        <Linkedin size={28} />
                    </a>
                    <a href="mailto:shrutipb1601@gmail.com" className="hover:text-accent transition-colors hover:scale-110 transform duration-200">
                        <Mail size={28} />
                    </a>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full animate-scroll"></div>
                </div>
                <span className="text-xs uppercase tracking-widest text-white">Scroll</span>
            </div>
        </section>
    );
};

export default Hero;
