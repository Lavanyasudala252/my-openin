/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBackgroundColor: "#F5F5F5",
        linkColor: "#346BD4",
        primaryText: "#858585",
        filedDarker: "#EAEAEA",
        lightGreenBg: "#DDEFE0",
        lightPinkBg: "#F4ECDD",
        darkPinkBg: "#EFDADA",
        lightBrindleBg: "#DEE0EF",
        lightRed: "#E9A0A0",
        lightGreen: "#9BDD7C",
        secondaryText: "#666666",
        lightText: "#999999",
        darkBridle: "#6972C3",
      },
      fontFamily: {
        sans: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
