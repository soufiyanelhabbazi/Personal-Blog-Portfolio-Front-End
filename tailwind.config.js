/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow: {
        'soso': '0 0 10px rgba(200, 200, 200, 0.1)',
      }
    },
  },
  plugins: [],
}

