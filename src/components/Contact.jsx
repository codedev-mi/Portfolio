import React, { useEffect, useRef, useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);
    const formRef = useRef(null);
    const [focusedField, setFocusedField] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-header", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            gsap.from(".contact-card", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                },
                x: -50,
                opacity: 0,
                duration: 1,
                delay: 0.3,
                ease: "power3.out"
            });

            gsap.from(".contact-form", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                },
                x: 50,
                opacity: 0,
                duration: 1,
                delay: 0.3,
                ease: "power3.out"
            });

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.target);

        // IMPORTANT: You must get an Access Key from https://web3forms.com/
        // Enter your email there, and they will send you a key.
        // Replace "YOUR_ACCESS_KEY_HERE" with that key.
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
            } else {
                console.error("Error submitting form:", data);
                alert("Something went wrong. Please try again or email me directly.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error sending message. Please check your internet connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" ref={sectionRef} className="w-full py-10 relative overflow-hidden bg-black/40">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="px-6 md:px-12 max-w-4xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="contact-header text-center mb-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Let's Build Something<br />Epic Together
                    </h2>

                    <div className="flex flex-col items-center gap-2 mb-4">
                        <p className="text-gray-400">Get in touch directly:</p>
                        <a href="mailto:shrutipb1601@gmail.com" className="text-cyan-400 text-xl font-medium hover:text-cyan-300 transition-colors">
                            shrutipb1601@gmail.com
                        </a>

                        <div className="flex items-center gap-6 mt-2">
                            <a href="https://github.com/shrutipb1601" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin size={24} />
                            </a>
                            <a href="mailto:shrutipb1601@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="contact-card bg-[#0a0a0a] border border-white/5 rounded-2xl p-5 md:p-8 shadow-2xl">
                    {isSubmitted ? (
                        <div className="flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                                <span className="text-4xl">😊</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                            <p className="text-gray-400 mb-8">I'll get back to you as soon as possible.</p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="contact-form space-y-3">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <label className="text-xs text-gray-400 ml-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all placeholder-white/20 text-sm"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs text-gray-400 ml-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all placeholder-white/20"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs text-gray-400 ml-1">Mobile Number</label>
                                <input
                                    type="tel"
                                    name="mobile"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all placeholder-white/20"
                                    placeholder="+91 98765 43210"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs text-gray-400 ml-1">Message</label>
                                <textarea
                                    name="message"
                                    rows="3"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all placeholder-white/20 resize-none text-sm"
                                    placeholder="Hi Shruti, I'd like to discuss a project..."
                                ></textarea>
                            </div>

                            <button
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-2.5 rounded-lg hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-1 text-sm"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                {!isSubmitting && <span className="text-xl">✨</span>}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};
export default Contact;
