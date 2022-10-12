/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        main: '1280px',
      },
      height: {
        main: '60px',
      },
      spacing: {
        b1: '-1px',
      },
    },
    colors: {
      mainClr: '#24292f',
      mainContent: '#3c3c3c',
      subContent: '#8c8c8c',
      lightGray: '#d8dee4',
      accentClr: '#e60012',
      white: '#fff',
      transparent: 'transparent',
    },
  },
  plugins: [],
};
