import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const cursorDotRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        const onMouseMove = (e) => {
            const { clientX, clientY } = e;
            gsap.to(cursor, {
                x: clientX,
                y: clientY,
                duration: 0.5,
                ease: "power2.out"
            });
            gsap.to(cursorDot, {
                x: clientX,
                y: clientY,
                duration: 0.1,
                ease: "power2.out"
            });
        };

        const onMouseEnter = () => {
            gsap.to(cursor, {
                scale: 2.5,
                backgroundColor: "rgba(255, 255, 255, 1)",
                mixBlendMode: "difference",
                duration: 0.3
            });
        };

        const onMouseLeave = () => {
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: "rgba(255, 255, 255, 0)",
                mixBlendMode: "difference",
                duration: 0.3
            });
        };

        window.addEventListener('mousemove', onMouseMove);
        
        const links = document.querySelectorAll('a, button, .clickable');
        links.forEach(link => {
            link.addEventListener('mouseenter', onMouseEnter);
            link.addEventListener('mouseleave', onMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            links.forEach(link => {
                link.removeEventListener('mouseenter', onMouseEnter);
                link.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <div 
                ref={cursorRef} 
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 pointer-events-none z-[9999] mix-blend-difference hidden md:block -translate-x-1/2 -translate-y-1/2"
            />
            <div 
                ref={cursorDotRef} 
                className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block -translate-x-1/2 -translate-y-1/2"
            />
        </>
    );
};

export default CustomCursor;
