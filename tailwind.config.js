/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}", // Add this line to include the pages folder
  ],
  theme: {
    fontFamily: {
      jarkatasans: ["Plus Jakarta Sans"],
    },
    extend: {
      colors: {
        blue: "#647BED",
      },
    },
  },
  plugins: [],
};
