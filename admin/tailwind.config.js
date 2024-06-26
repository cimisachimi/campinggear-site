/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}',",
  ],

  theme: {
    extend: {
      colors: {
        creamBase: "hsl(40, 53%, 93%)",
        darkCream: "hsl(31, 37%, 45%)",
        darkGreen: "hsl(82, 18%, 12%)",
        lightCream: "hsl(31, 34%, 49%)",
      },
      fontFamily: {
        nunito: "'Nunito', sans-serif",
      },
      backgroundImage: {
        Hero: "url('assets/banner1.jpg')",
        Heri: "url('assets/banner2.jpg')",
      },
    },
    screen: {
      xs: "360px",
      sm: "480px",
      md: "768px",
      lg: "1080px",
      xl: "1440px",
    },
    countainer: {
      center: true,
    },

    maxWidth: {
      "10xl": "1512px",
    },
    borderRadius: {
      "5xl": "40px",
    },
  },
  plugins: [],
};
