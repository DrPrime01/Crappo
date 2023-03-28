/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: '#0D0D2B',
      secondary: '#2B076E',
      neutral: '#E0E0E0',
      accent: '#3671E9',
      white: '#FFFFFF',
      "bg-color-2": '#5C59A5',
    },
    extend: {
      screens: {
        xs: '359px',
      }
    },
  },
  plugins: [],
}
