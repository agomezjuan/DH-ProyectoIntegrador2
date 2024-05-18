/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './frontend/.index.html',
    '././src/**/*.{html,css,js,jsx,ts,tsx,svg}' // Include all HTML, CSS, JS, JSX, TS, and TSX files in the src directory and subdirectories
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#557824",
          200: "#557824",
          300: "#557824",
          400: "#557824",
        },
        secondary: {
          DEFAULT: "#557824",
          200: "#557824",
          300: "#557824",
          400: "#557824",
        },
      },
    },
  },
  plugins: [require('daisyui')],
}
