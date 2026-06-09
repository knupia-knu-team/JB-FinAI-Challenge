/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "system-ui", "sans-serif"],
        righteous: ["Righteous", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        phone: "0 28px 80px rgba(0, 0, 0, 0.34)",
      },
    },
  },
  plugins: [],
};
