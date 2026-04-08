import React from 'react';

const LogoMarquee = () => {
    const tools = [
        "React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", 
        "AWS", "Oracle Cloud", "Figma", "GSAP", "Tailwind CSS", "TypeScript",
        "Python", "FastAPI", "Firebase", "Redis", "Docker", "Git"
    ];

    return (
        <div className="w-full py-20 overflow-hidden border-t border-b border-white/5 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-6 mb-10">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-600">Tech Stack & Tools</span>
            </div>
            
            <div className="flex relative items-center">
                {/* Forward Marquee */}
                <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
                    {tools.map((tool, i) => (
                        <span key={i} className="text-4xl md:text-5xl font-bold text-white/10 hover:text-white/40 transition-colors cursor-default tracking-tighter uppercase italic">
                            {tool}
                        </span>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {tools.map((tool, i) => (
                        <span key={`dup-${i}`} className="text-4xl md:text-5xl font-bold text-white/10 hover:text-white/40 transition-colors cursor-default tracking-tighter uppercase italic">
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoMarquee;
