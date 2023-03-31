/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        'special': '0 0 10px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  darkMode: 'class'
}