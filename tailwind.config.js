/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#0F9DF8',
        background: '#040B1C',
        cardbg: '#061840',
        white: '#FBFBFB',
        navbg: '#0A214E',
        overlayBg: 'rgba(0,0,0,0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'typing': 'typing 1s steps(40, end)',
        'assistant-enter': 'assistantEnter 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(15, 157, 248, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(15, 157, 248, 0.8)' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
        assistantEnter: {
          '0%': { opacity: '0', transform: 'translateY(10px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'mobile-lg': '425px',
        'tablet-sm': '600px',
        'safe-area-inset': { raw: '(min-height: 720px)' }
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'screen-dynamic': 'calc(100vh - env(safe-area-inset-bottom))',
      }
    },
  },
  plugins: [],
};