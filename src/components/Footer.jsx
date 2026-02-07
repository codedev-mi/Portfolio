import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="w-full bg-[#050505] border-t border-white/5 py-8 relative z-50">
            <div className="max-w-7xl mx-auto px-[30px] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">

                {/* Left Side: Name & Copyright */}
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
                    <a href="#" className="block">
                        <Logo />
                    </a>
                    <span className="hidden md:block text-gray-800">|</span>
                    <p className="text-gray-500 text-sm">
                        © 2026. All rights reserved.
                    </p>
                </div>

                {/* Right Side: Social Icons */}
                <div className="flex items-center gap-4">
                    <a href="https://github.com/shrutipb1601" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Github size={18} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Linkedin size={18} />
                    </a>
                    <a href="mailto:shrutipb1601@gmail.com" className="text-gray-400 hover:text-accent transition-colors">
                        <Mail size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
