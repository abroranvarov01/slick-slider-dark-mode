/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          lg: "1200px",
        },
      },
      colors: {
        bgc: "  var(--bgcolor)",
        bg: "#f2f0ff",
        bg_shade: "#eeeffb",
        grey_text: " rgba(21, 24, 117, 0.1)",
        accent: " #fb2e86",
        white: "#fff",
        ugsadug: "#9f63b5",
        text: "var(--primary)",
        skyblue: "#00c1fe",
        sectionhover: "#2f1ac4",
        saletagecoloe: "#3f509e",
        pricetagcolor: " #fb2448",
        violet: "#7e33e0",
        subtextcolor: "#8a8fb9",
        pagebuttoncolor: "#e0d3f5",
        pink: " #fb2e86",
        special_text: "var(--secondary)",
        border: "#e7e6ef",
        special_text2: "#1a0b5b",
        item_bg: "#f6f7fb",
        item_bg2: "#f7f7f7",
        text3: "rgba(26, 11, 91, 0.3)",
      },
    },
  },
  plugins: [],
};
