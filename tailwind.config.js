/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'karla': ['Karla', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'alfa': ['Alfa Slab One', 'cursive'],
        'anton': ['Anton', 'sans-serif']
      }
    },
  },
  plugins: [],
}