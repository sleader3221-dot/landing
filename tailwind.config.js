/** @type {import('tailwindcss').Config} */
const scrollbarHide = require('tailwind-scrollbar-hide');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-yellow': {
          light: '#FFFBEB',
          DEFAULT: '#F59E0B',
          dark: '#B45309',
        },
        'brand-green': {
          light: '#F0FDF4',
          DEFAULT: '#22C55E',
          dark: '#15803D',
        },
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 25s linear infinite',
      },
    },
  },
  plugins: [scrollbarHide],
};
