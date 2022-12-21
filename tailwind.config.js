/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
      },
    },
  },
  plugins: [],
};
