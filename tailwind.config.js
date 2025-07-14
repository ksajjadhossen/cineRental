/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      extend: {
        container: {
          center: true,
          padding: "1.5rem",
        },
        colors: {
          primary: "#00D991",
        },
      },
    },
  },
  plugins: [],
};
