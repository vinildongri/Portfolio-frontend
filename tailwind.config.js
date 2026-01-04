/* eslint-env node */

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        float: "float 3s ease-in-out infinite"
      },
      screens: {
        gt1000: "1000px" // greater than 1000px
      }
    }
  },
  plugins: []
};