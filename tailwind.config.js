/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // ← Isso é ESSENCIAL!
  theme: {
    extend: {},
  },
  plugins: [],
}