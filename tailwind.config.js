module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          default: "#EB5757",
        },
        white: {
          default: "#FFFFFF",
          milk: "#F2F2F2",
        },
        gray: {
          darkest: "#333333",
          dark: "#4F4F4F",
          light: "#BDBDBD",
          g3: "#828282",
        },
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        xxs: ".625rem",
        xxxs: ".563rem",
      },
      boxShadow: {
        default: "0px 1px 6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
