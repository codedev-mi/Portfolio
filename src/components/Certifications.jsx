import React, { useEffect, useRef } from 'react';
import { Award, BookOpen, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".cert-col",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
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
        <section id="certifications" ref={sectionRef} className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Credentials</h2>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Certifications Column */}
                <div className="cert-col space-y-8">
                    <div className="flex items-center gap-3 mb-6">
                        <Award className="text-accent" size={28} />
                        <h3 className="text-2xl font-bold text-white">Certifications</h3>
                    </div>

                    {/* Cert Item 1 */}
                    <div className="group bg-[#0a0a0a] p-6 rounded-2xl border border-white/5 hover:border-accent/50 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 blur-2xl -mr-10 -mt-10 rounded-full group-hover:bg-accent/20 transition-all"></div>

                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors">AWS Academy Cloud Foundations</h4>
                                <p className="text-gray-400 text-sm mt-1">Amazon Web Services</p>
                            </div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="h-8 opacity-70" />
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-500 mt-4">
                            <span className="flex items-center gap-1"><Calendar size={14} /> 2024</span>
                            <span className="flex items-center gap-1 text-green-500"><CheckCircle2 size={14} /> Verified</span>
                        </div>
                    </div>

                    {/* Cert Item 2 */}
                    <div className="group bg-[#0a0a0a] p-6 rounded-2xl border border-white/5 hover:border-accent/50 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 blur-2xl -mr-10 -mt-10 rounded-full group-hover:bg-accent/20 transition-all"></div>

                        <div className="flex justify-between items-start mb-4">
                            <div className="pr-4">
                                <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors">Oracle Cloud Infrastructure 2025 Certified Foundations Associate</h4>
                                <p className="text-gray-400 text-sm mt-1">Oracle</p>
                            </div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" alt="Oracle" className="h-5 opacity-70 bg-white/10 p-1 rounded" />
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-500 mt-4">
                            <span className="flex items-center gap-1"><Calendar size={14} /> 2025</span>
                            <span className="flex items-center gap-1 text-green-500"><CheckCircle2 size={14} /> Verified</span>
                        </div>
                    </div>
                </div>

                {/* Publications Column */}
                <div className="cert-col space-y-8">
                    <div className="flex items-center gap-3 mb-6">
                        <BookOpen className="text-purple-400" size={28} />
                        <h3 className="text-2xl font-bold text-white">Publications</h3>
                    </div>

                    {/* Publication Item 1 */}
                    <div className="group bg-[#0a0a0a] p-6 rounded-2xl border border-white/5 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 blur-2xl -mr-10 -mt-10 rounded-full group-hover:bg-purple-500/20 transition-all"></div>

                        <div className="mb-4">
                            <span className="bg-purple-500/10 text-purple-400 text-xs font-mono px-2 py-1 rounded mb-3 inline-block">ICEISF 2025</span>
                            <h4 className="text-xl font-bold text-white leading-tight group-hover:text-purple-400 transition-colors">
                                Carbon Footprint of Cloud Computing
                            </h4>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Authored and presented a research paper analyzing the environmental impact of large-scale cloud infrastructure and sustainable optimization strategies.
                        </p>

                        <a href="#" className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-white transition-colors">
                            Read Paper <ExternalLink size={14} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Certifications;
