/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0050a7",
        "primary-light": "#0058c4",
        "primary-dark": "#003d7a",
        accent: "#fe6161",
        "accent-light": "#ff7a7a",
        "accent-dark": "#e04848",
        cream: "#f8f5ee",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Lato'", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1280px",
      },
    },
  },
  plugins: [],
};
