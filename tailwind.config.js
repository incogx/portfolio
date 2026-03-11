/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#0066FF',
        'neon-cyan': '#00FFFF',
        'deep-black': '#020408',
        'card-bg': 'rgba(6, 18, 36, 0.7)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          from: { boxShadow: '0 0 20px #0066FF40' },
          to: { boxShadow: '0 0 40px #00FFFF80' },
        }
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(ellipse at 50% 50%, rgba(0,102,255,0.15) 0%, transparent 70%)',
        'hero-gradient': 'linear-gradient(135deg, #020408 0%, #040d1a 50%, #020408 100%)',
      }
    },
  },
  plugins: [],
}
