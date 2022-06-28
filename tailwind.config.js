/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
    },
    colors: {
      conifer: {
        DEFAULT: "#C0D95F",
        50: "#FAFCF3",
        100: "#F4F8E3",
        200: "#E7F0C2",
        300: "#DAE9A1",
        400: "#CDE180",
        500: "#C0D95F",
        600: "#AECE32",
        700: "#88A126",
        800: "#62741C",
        900: "#3C4711",
      },
      apple: {
        DEFAULT: "#50C246",
        50: "#D3F0D0",
        100: "#C4EAC1",
        200: "#A7E0A2",
        300: "#8AD683",
        400: "#6DCC65",
        500: "#50C246",
        600: "#3C9C34",
        700: "#2C7226",
        800: "#1C4818",
        900: "#0B1E0A",
      },
    },
  },
  plugins: [],
});
