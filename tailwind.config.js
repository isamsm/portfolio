/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': ["'MAIN'", 'sans-serif']
      },
      colors: {
        'primary': '#4B4B4B',
        'secundary': '#E5E5E5',
      },
    },
  },
}