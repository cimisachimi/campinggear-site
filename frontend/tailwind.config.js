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
        lightCream2: "hsl(31, 34%, 49%)",
        lightCream1: "hsl(33.43, 56.45%, 75.69%)",

      },
      fontFamily: {
        nunito: "'Nunito', sans-serif",
      },
      backgroundImage: {
        Hero: "url('assets/banner1.jpg')",
        Heri: "url('assets/banner2.png')",
        cover: "url('assets/bannermens.jpg)",
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
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.8rem",
      full: "9999px",
      large: "12px",
    },
  },
  plugins: [],
};
