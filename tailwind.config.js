/** @type {import('tailwindcss').Config} */

module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    extend: {
      boxShadow: {
        full: "0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08)", // Custom box-shadow
      },
      colors: {
        primary: "#017BFE",
      },
    },
  },
  plugins: [],
};
