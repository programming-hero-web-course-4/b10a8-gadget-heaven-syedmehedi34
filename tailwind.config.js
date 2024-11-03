/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9538E2",
        titleOB: "#0B0B0B",
        titleOB70: "#0B0B0BB3",
        textOF: "#09080F",
        textOF60: "#09080F99",
        textOF80: "#09080FCC",
        textOF05: "#09080F0D",
        stock: "#309C08",
        productBG: "#ECECEC",
      },

      fontFamily: {
        fontSora: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
