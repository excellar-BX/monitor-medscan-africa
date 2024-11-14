/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'jarkatasans': ['Plus Jakarta Sans']
    },
    extend: {
      colors: {
        blue: '#647BED'
      }
    },
  },
  plugins: [],
}