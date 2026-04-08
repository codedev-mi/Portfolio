import React, { useEffect, useRef } from 'react';
import { Award, BookOpen, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".credential-item",
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
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="certifications" ref={sectionRef} className="py-32 px-6 md:px-20 max-w-7xl mx-auto border-t border-white/5">
            <div className="grid lg:grid-cols-12 gap-16">
                
                {/* Left Side: Publications */}
                <div className="lg:col-span-5">
                    <span className="credential-item text-accent font-mono tracking-widest uppercase text-xs mb-4 block">Scientific Contribution</span>
                    <h2 className="credential-item text-4xl font-bold text-white mb-10 tracking-tighter">
                        Research & <br /> <span className="text-gray-500 italic">Publications</span>
                    </h2>

                    <div className="credential-item group bg-[#0d0d0d] p-8 rounded-3xl border border-white/5 hover:border-purple-500/20 transition-all duration-500">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="bg-purple-500/10 text-purple-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-md">ICEISF 2025</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors leading-tight">
                            Carbon Footprint of Cloud Computing
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8">
                            A comparative study on the environmental overhead of large-scale cloud infrastructure and sustainable optimization strategies.
                        </p>
                        <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-white/40 hover:text-white transition-colors">
                            Read Publication <ExternalLink size={14} />
                        </a>
                    </div>
                </div>

                {/* Right Side: Certifications */}
                <div className="lg:col-span-7">
                    <span className="credential-item text-accent font-mono tracking-widest uppercase text-xs mb-4 block">Official Validation</span>
                    <h2 className="credential-item text-4xl font-bold text-white mb-10 tracking-tighter">
                        Technical <span className="text-gray-500 italic">Credentials</span>
                    </h2>

                    <div className="space-y-6">
                        {/* Cert 1 */}
                        <div className="credential-item flex items-center justify-between p-6 bg-[#0d0d0d] border border-white/5 rounded-2xl group hover:border-white/20 transition-all duration-500">
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="w-6 opacity-60 group-hover:opacity-100" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg group-hover:text-accent transition-colors">AWS Cloud Foundations</h4>
                                    <p className="text-gray-600 text-xs font-mono uppercase tracking-widest">Issued by Amazon Web Services</p>
                                </div>
                            </div>
                            <div className="hidden md:flex items-center gap-4">
                                <span className="text-green-500/40 text-[10px] uppercase font-bold tracking-widest flex items-center gap-1">
                                    <CheckCircle2 size={12} /> Verified
                                </span>
                            </div>
                        </div>

                        {/* Cert 2 */}
                        <div className="credential-item flex items-center justify-between p-6 bg-[#0d0d0d] border border-white/5 rounded-2xl group hover:border-white/20 transition-all duration-500">
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" alt="Oracle" className="w-8 opacity-60 group-hover:opacity-100" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg group-hover:text-accent transition-colors">OCI 2025 Certified Associate</h4>
                                    <p className="text-gray-600 text-xs font-mono uppercase tracking-widest">Issued by Oracle</p>
                                </div>
                            </div>
                            <div className="hidden md:flex items-center gap-4">
                                <span className="text-green-500/40 text-[10px] uppercase font-bold tracking-widest flex items-center gap-1">
                                    <CheckCircle2 size={12} /> Verified
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
