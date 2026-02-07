import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Background from './Background'; // Import the shared Background component

const Preloader = ({ onComplete }) => {
    const containerRef = useRef(null);
    const counterRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: onComplete
        });

        // Counter Animation
        let count = { val: 0 };
        tl.to(count, {
            val: 100,
            duration: 2,
            ease: "power2.inOut",
            onUpdate: () => {
                if (counterRef.current) {
                    counterRef.current.innerText = Math.round(count.val) + "%";
                }
            }
        });

        // Text reveal
        tl.fromTo(textRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5 },
            "-=1.5"
        );

        // Expand/Exit Animation
        tl.to(counterRef.current, { opacity: 0, duration: 0.2, delay: 0.2 });
        tl.to(textRef.current, { opacity: 0, duration: 0.2 }, "<");

        tl.to(containerRef.current, {
            y: "-100%",
            duration: 1.2,
            ease: "power3.inOut" // Smoother easing for the curtain rise
        });

        return () => tl.kill();
    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 bg-[#0a0a0a] z-[9999] flex flex-col items-center justify-center text-white select-none overflow-hidden"
        >
            {/* Dynamic Background with Particles - Same as Inner Theme */}
            <Background className="absolute inset-0 w-full h-full z-0 opacity-40 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
                <div className="text-6xl md:text-8xl font-bold font-mono tracking-tighter flex items-center gap-2">
                    <span className="text-purple-500">{`{`}</span>
                    <span ref={counterRef} className="text-white">0%</span>
                    <span className="text-purple-500">{`}`}</span>
                </div>
                <div className="mt-4 text-xl md:text-2xl font-mono text-gray-400 tracking-widest overflow-hidden" ref={textRef}>
                    &gt; System.initializing...
                </div>
            </div>

            {/* Additional glow visual */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
        </div>
    );
};

export default Preloader;
