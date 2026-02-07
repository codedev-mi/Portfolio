import React from 'react';

const Logo = ({ className = "w-10 h-10" }) => {
    return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Hexagon Background */}
            <path
                d="M50 5 L93.3 30 V80 L50 105 L6.7 80 V30 L50 5Z"
                className="fill-white/5 stroke-accent stroke-[3]"
            />

            {/* SB Monogram */}
            <text x="50" y="65" fontSize="40" fontWeight="bold" textAnchor="middle" fill="white" fontFamily="sans-serif">
                SB
            </text>

            {/* Graduate/Code Accent */}
            <circle cx="93.3" cy="30" r="5" className="fill-purple-500 animate-pulse" />
        </svg>
    );
};

export default Logo;
