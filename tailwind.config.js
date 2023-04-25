/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      colors: {
        brown: {
          DEFAULT: '#1C1B19',
        },
        blue: {
          DEFAULT: '#2C78BF',
        },
        white: {
          DEFAULT: '#FCE8C3',
        }
      },
      extend: {},
    },
    plugins: [],
  }
