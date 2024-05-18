/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#557824',
          200: '#557824',
          300: '#557824',
          400: '#557824'
        },
        secondary: {
          DEFAULT: '#557824',
          200: '#557824',
          300: '#557824',
          400: '#557824'
        }
      }
    }
  },
  plugins: [require('daisyui')]
};
