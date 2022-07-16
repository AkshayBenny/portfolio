const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins Sans', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        blob: 'blob 24s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) ',
          },
          '25%': {
            transform: 'translate(260px, -190px) ',
          },
          '50%': {
            transform: 'translate(730px, -130px) ',
          },
          '75%': {
            transform: 'translate(200px, -20px) ',
          },
          '100%': {
            transform: 'translate(0px, 0px) ',
          },
        },
        screens: {
          '3xl': '2000px',
        },
      },
    },
  },
  plugins: [],
}
