/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'global-1': '#F9F9FB',
        'global-2': '#191A23',
        'global-3': '#0D0B56',
        'button-1': '#1CC45A',
      }
    },
  },
  plugins: [],
}
