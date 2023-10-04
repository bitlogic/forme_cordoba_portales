const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eclypsiumlightblue: {
          DEFAULT: "#68bfcf",
          dark: "#05343d",
        },
      },
    },
  },
  plugins: [],
};
