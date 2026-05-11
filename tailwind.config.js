/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        corporate: {
          red: '#E11D48',
          darkred: '#9f1239',
        },
        charcoal: '#111827',
        black: '#050505',
        gunmetal: '#1c1c1c',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'floating': '0 20px 40px rgba(0, 0, 0, 0.5)',
        'floating-hover': '0 20px 40px rgba(225, 29, 72, 0.2)',
        'red-glow': '0 0 30px rgba(225, 29, 72, 0.4)',
      },
      animation: {
        'ripple': 'ripple 0.6s linear',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slow-zoom': 'slow-zoom 20s ease-in-out infinite alternate',
      },
      keyframes: {
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        ripple: {
          '0%': { transform: 'scale(0) translate(-50%, -50%)', opacity: '1', transformOrigin: '0 0' },
          '100%': { transform: 'scale(4) translate(-50%, -50%)', opacity: '0', transformOrigin: '0 0' },
        }
      }
    },
  },
  plugins: [],
}
