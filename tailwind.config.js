const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{js,ts,jsx,tsx}",
    './public/index.html'
  ],
  important: false,
  theme: {
    colors: {
      ...colors,
      primary: {
        light: "rgba(0, 161, 156, 0.5)", // TODO change to match design
        DEFAULT: "#00a19c", // TODO change to match design
      },
      black: {
        light: "#2d2d2d",
        DEFAULT: "#000",
      },
    },
    extend: {
      backgroundColor: ["active"],
      screens: {
        wide: "1440px",
        large: "1024px",
        medium: "768px",
      },
    },
  },
  variants: {
    extend: {
      cursor: ["disabled"],
      opacity: ["disabled"],
      textColor: ["disabled"],
      borderWidth: ["last"],
      margin: ["first", "last"],
    },
  },
  plugins: [
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/typography"),
    // require("@tailwindcss/aspect-ratio"),
  ],
};
