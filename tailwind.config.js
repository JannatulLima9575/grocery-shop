/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#22C55E",
          DEFAULT: "#16A34A",
        },
        accent: "#F59E0B",
        darkbg: "#0F172A",
        carddark: "#1E293B",
      },
    },
  },
  plugins: [],
};