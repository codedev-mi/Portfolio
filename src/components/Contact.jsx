import React, { useEffect, useRef, useState } from 'react';
import { Mail, Linkedin, Github, Send, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".contact-item",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.target);
        formData.append("access_key", "3bf7620b-026c-4013-9a92-d3490f168834");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            if (data.success) {
                setIsSubmitted(true);
                e.target.reset();
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" ref={sectionRef} className="py-32 px-6 md:px-20 max-w-7xl mx-auto border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                {/* Left Side: Direct CTA */}
                <div>
                    <span className="contact-item text-accent font-mono tracking-widest uppercase text-xs mb-4 block">Connection</span>
                    <h2 className="contact-item text-6xl md:text-8xl font-bold text-white mb-10 tracking-tighter leading-none">
                        Let's Talk <br />
                        <span className="text-gray-500 italic">Projects.</span>
                    </h2>
                    
                    <p className="contact-item text-xl text-gray-400 font-light leading-relaxed mb-12 max-w-md">
                        Have a challenge you'd like to discuss? I'm always open to talking about product architecture, AI integration, or full-stack engineering.
                    </p>

                    <div className="contact-item space-y-6">
                        <a href="mailto:shrutipb1601@gmail.com" className="group flex items-center gap-4 text-2xl font-medium text-white hover:text-accent transition-colors">
                            shrutipb1601@gmail.com
                            <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
                        </a>
                        <div className="flex gap-8 pt-6">
                            <a href="https://github.com/shrutipb1601" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                <Github size={28} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                <Linkedin size={28} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side: Minimal Form */}
                <div className="contact-item bg-[#0d0d0d] p-10 rounded-3xl border border-white/5">
                    {isSubmitted ? (
                        <div className="h-full flex flex-col items-center justify-center text-center py-20">
                            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6 text-accent">
                                <Send size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
                            <p className="text-gray-500">I'll get back to you within 24 hours.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="space-y-1">
                                <label className="text-[10px] uppercase tracking-widest text-gray-600 font-bold ml-1">Full Name</label>
                                <input type="text" name="name" required placeholder="John Doe" className="w-full bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-accent transition-all font-light text-lg" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] uppercase tracking-widest text-gray-600 font-bold ml-1">Email Address</label>
                                <input type="email" name="email" required placeholder="john@example.com" className="w-full bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-accent transition-all font-light text-lg" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] uppercase tracking-widest text-gray-600 font-bold ml-1">Message</label>
                                <textarea name="message" required rows="4" placeholder="Briefly describe your project..." className="w-full bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-accent transition-all font-light text-lg resize-none"></textarea>
                            </div>
                            <button disabled={isSubmitting} className="w-full bg-white text-black font-bold py-4 rounded-full hover:bg-accent hover:text-white transition-all transform active:scale-95 disabled:opacity-50 mt-4">
                                {isSubmitting ? 'Transmitting...' : 'Send Inquiry'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
