/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        left: "left 1s ease-in-out 1",
        rotatetr: "rotatetr 1s ease-in-out 1",
        rotatetl: "rotatetl 1s ease-in-out 1",
      },
      keyframes: {
        left: {
          "0%": { transform: "translatex(50px)" },
        },
        rotatetr: {
          "0%": { transform: "rotate(90deg)" },
        },
        rotatetl: {
          "0%": { transform: "rotate(-90deg)" },
        },
      },
      colors: {
        transparent: "transparent",
        backgroundColor: "#041E44",
        gradient: {
          100: "#FFBDA0",
          200: "#FF6CD6",
          300: "#256BF4",
          400: "#3AC1DE",
          500: "#FF7686",
          600: "#D72F93",
        },
        card: "rgba(255, 255, 255, 0.1)",
        card2: "rgba(165, 202, 255, 0.2)",
        card3: "#1E4D85",
        background: "#072852",
        background1: "#153B6A",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
