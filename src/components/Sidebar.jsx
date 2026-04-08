import React from 'react';
import { Github, Linkedin, MessageCircle, ChevronUp } from 'lucide-react';

const Sidebar = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* Left Sidebar - Socials */}
            <div className="fixed left-6 bottom-0 z-50 hidden lg:flex flex-col items-center gap-6 mix-blend-difference">
                <div className="flex flex-col gap-6 text-white mb-6">
                    <a href="#" className="hover:text-accent transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="hover:text-accent transition-colors"><Github size={20} /></a>
                    <a href="#" className="hover:text-accent transition-colors"><MessageCircle size={20} /></a>
                </div>
                <div className="h-24 w-[1px] bg-white/20"></div>
                <span className="[writing-mode:vertical-lr] text-white/40 text-[10px] uppercase tracking-[0.5em] mb-10 py-4 font-bold">Follow Us</span>
            </div>

            {/* Right Sidebar - Scroll to Top */}
            <div className="fixed right-6 bottom-10 z-50 hidden lg:flex flex-col items-center gap-6 mix-blend-difference">
                <button 
                    onClick={scrollToTop}
                    className="group w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all duration-300"
                >
                    <ChevronUp size={20} className="text-white group-hover:-translate-y-1 transition-transform" />
                </button>
            </div>
        </>
    );
};

export default Sidebar;
