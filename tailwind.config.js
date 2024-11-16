/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}", // Add this line to include the pages folder
  ],
  theme: {
    fontFamily: {
      jarkatasans: ["Plus Jakarta Sans"],
    },
    extend: {
      colors: {
        blue: '#647BED',
        limewhite: '#F5F5F5',
        gray: "#949595",
        lightgray: "#F8F9FB",
        textblack: "#1E1E1E",
        darkgray: "#696969"
      }
    },
  },
  plugins: [],
};
