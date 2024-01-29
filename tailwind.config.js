/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      blue: {
        50: "#f1f8fe",
        100: "#e1f0fd",
        200: "#bce0fb",
        300: "#82c7f7",
        400: "#3fabf1",
        500: "#1691e1",
        600: "#0973c0",
        700: "#095fa2",
        800: "#0b4e81",
        900: "#0f416b",
        950: "#0a2a47",
      },
      gray: {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#737373",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#3d3d3d",
        950: "#262626",
      },
      gold: {
        50: "#f9f6ed",
        100: "#f2ebcf",
        200: "#e6d5a2",
        300: "#d8b96c",
        400: "#cb9f44",
        500: "#bc8a36",
        600: "#a16d2d",
        700: "#815127",
        800: "#6d4326",
        900: "#5e3925",
        950: "#361d12",
      },
    },
  },
  plugins: [],
};
