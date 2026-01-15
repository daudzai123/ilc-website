/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ilc: {
          DEFAULT: '#0B2A63',
          primary: '#0B2A63',
          secondary: '#D92B2B',
          accent: '#F2C94C',
          light: '#FEECE8'
        }
      }
    }
  },
  plugins: []
};