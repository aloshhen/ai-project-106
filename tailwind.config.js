/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: '#121212',
        gold: '#FFD700',
        orange: '#FF6B00'
      }
    }
  },
  plugins: []
}