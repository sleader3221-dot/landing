/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
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
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
