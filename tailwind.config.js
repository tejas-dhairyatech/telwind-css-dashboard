/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
      },
    },

  },
  plugins: [],
  darkMode: "class"
};
