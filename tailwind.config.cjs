/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#E93323",
        jade: "#55BD92",
        slate: "#53565A",
        tan: "#ED895B",
        black: "#000000",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
