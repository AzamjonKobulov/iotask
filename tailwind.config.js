/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "2xl": "90rem",
      },
      maxWidth: {
        base: "90rem",
      },
      fontFamily: {
        public: ["Public Sans", "sans-serif"],
      },
      fontSize: {
        h1: ["1.5rem", "2.25rem"],
        h2: ["1.375rem", "2rem"],
        h3: ["1.25rem", "1.875rem"],
        h4: ["1.125rem", "1.6875rem"],
      },
      colors: {
        brand: {
          blue: "#4D7CFE",
          pink: "#FE4D97",
          green: "#6DD230",
          dark: "#252631",
          orange: "#FFAB2B",
          gray: {
            100: "#F8FAFB",
            200: "#F2F4F6",
            300: "#E8ECEF",
            400: "#778CA2",
            500: "#98A9BC",
          },
        },
      },
      spacing: {
        42: "2.625rem",
      },
      backgroundImage: {
        "task-details-bottom":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.0001) 0%, #FFFFFF 100%);",
      },
    },
  },
  plugins: [],
};
