/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    fontFamily: {
      sans: ['"Poppins"', "sans-serif"],
    },
    extend: {
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
