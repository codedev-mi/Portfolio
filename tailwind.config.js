/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#050505",
                surface: "#101010",
                primary: "#ffffff",
                secondary: "#a1a1aa",
                accent: "#d946ef", // Pink/Fuchsia matching the glow
            },
            fontFamily: {
                sans: ['"Inter"', 'sans-serif'],
            },
            animation: {
                'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'scroll': 'scroll 1.5s infinite',
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateY(0)', opacity: 1 },
                    '100%': { transform: 'translateY(8px)', opacity: 0 },
                }
            }
        },
    },
    plugins: [],
}
