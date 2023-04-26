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
          bright: '#918175',
        },
        blue: {
          DEFAULT: '#2C78BF',
        },
        white: {
          DEFAULT: '#FCE8C3',
        },
        green: {
          DEFAULT: '#519F50',
        },
        yellow: {
          DEFAULT: '#FBB829',
        },
      },

      extend: {},
    },
    plugins: [],
  }
