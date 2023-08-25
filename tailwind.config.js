/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        2000: "2000ms",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".underline-orange": {
          textDecoration: "underline",
          textDecorationColor: "orange",
        },
        // Add more custom underline colors as needed
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
