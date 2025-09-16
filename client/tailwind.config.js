/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f3f8ff',
          100: '#e3efff',
          200: '#c1daff',
          300: '#99c0ff',
          400: '#6ba1ff',
          500: '#3b7dff',   // primary (electric azure-ish)
          600: '#2f63d6',
          700: '#244cab',
          800: '#1b377f',
          900: '#14285e'
        },
        accent: {
          500: '#00b894'    // jade accent
        }
      }
    }
  },
  plugins: []
}
