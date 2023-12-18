/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
  theme: {
    fontFamily: {
      sans: ['"Poppins"', "sans-serif"],
    },
    extend: {
      spacing: {
        "2/3": "6.666667%",
      },
      keyframes: {
        moveRight: {
          "0%": { transform: "translateX(-100px)", opacity: "0%" },
          "100%": { transform: "translateX(0)", opacity: "100%" },
        },
        moveLeft: {
          "0%": { transform: "translateX(100px)", opacity: "0%" },
          "100%": { transform: "translateX(0)", opacity: "100%" },
        },
        opacity: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      },
      animation: {
        moveRight: "moveRight 1s ease-in-out",
        moveLeft: "moveLeft 1s ease-in-out",
        opacity: "opacity 1s ease-in-out",
      },
    },
  },
};
