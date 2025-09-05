/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'caramel': '#C49A6C',
        'olive': '#5C5B40',
        'black_coffe': '#3B2F2F',
        'copper': '#8C5E3C',
        'wine': '#6B2E2E',
        'dark_beige': '#CEB388',
        'beige': '#E9D4C1',
      },
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
        'philosopher': ['Philosopher', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'paris': ['Paris', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

