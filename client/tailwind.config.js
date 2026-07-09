/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: '#EAFF00',
        dark: {
          900: '#000000',
          800: '#111111',
          700: '#1A1A1A',
          600: '#222222',
          500: '#2A2A2A',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 5px #EAFF00, 0 0 20px rgba(234, 255, 0, 0.3)',
        'neon-lg': '0 0 10px #EAFF00, 0 0 40px rgba(234, 255, 0, 0.2), 0 0 80px rgba(234, 255, 0, 0.1)',
        'neon-sm': '0 0 3px #EAFF00, 0 0 10px rgba(234, 255, 0, 0.2)',
      },
      animation: {
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        glow: 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        pulseNeon: {
          '0%, 100%': { boxShadow: '0 0 5px #EAFF00, 0 0 20px rgba(234, 255, 0, 0.3)' },
          '50%': { boxShadow: '0 0 10px #EAFF00, 0 0 40px rgba(234, 255, 0, 0.5)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glow: {
          '0%': { textShadow: '0 0 5px rgba(234, 255, 0, 0.5)' },
          '100%': { textShadow: '0 0 20px rgba(234, 255, 0, 0.8), 0 0 40px rgba(234, 255, 0, 0.3)' },
        },
      },
    },
  },
  plugins: [],
};