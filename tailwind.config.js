/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media', // or 'class' for manual toggle
  content: [
    './app/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

