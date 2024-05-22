/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {},
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: [
      {
        mealmap: {
          primary: '#557824',
          'primary-focus': '#557824',
          'primary-content': '#ffffff',
          secondary: '#557824',
          'secondary-focus': '#557824',
          'secondary-content': '#ffffff',
          accent: '#557824',
          'accent-focus': '#557824',
          'accent-content': '#ffffff',
          neutral: '#557824',
          'neutral-focus': '#557824',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          info: '#2094f3',
          success: '#009485',
          warning: '#ff9900',
          error: '#ff5724'
        }
      }
    ],
    rtl: false,
    logs: false
  }
};
