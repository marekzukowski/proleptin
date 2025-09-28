/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [],
  theme: {
    extend: {
      screens: {
        "2xl": "1372px",
      },
      maxWidth: {
        "8xl": "1760px",
      },
      colors: {
        primary: {
          50: "#BCFFF6",
          100: "#F5F6F7",
          300: "#CDDCDA",
          500: "#138D7E",
          700: "#064F46",
        },
        secondary: {
          300: "#FFD8AD",
          400: "#E2C08F",
          500: "#C7A97D",
          700: "#4E4235",
        },
        tertiary: {
          50: "#F2F3F4",
          100: "#F5F6F7",
          200: "#D2D2D2",
          300: "#BFBFBF",
          600: "#8E9191",
          700: "#566669",
          800: "#2A3332",
          900: "#1D1D1F",
        },
      },
      fontSize: {
        xxs: ".625rem",
      },
      fontFamily: {
        sans: ["basic-sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
