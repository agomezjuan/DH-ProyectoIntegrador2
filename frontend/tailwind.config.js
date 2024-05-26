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
          primary: '#82AA33',
          'primary-focus': '#82AA33',
          'primary-content': '#ffffff',
          secondary: '#82AA33',
          'secondary-focus': '#82AA33',
          'secondary-content': '#ffffff',
          accent: '#82AA33',
          'accent-focus': '#82AA33',
          'accent-content': '#ffffff',
          neutral: '#82AA33',
          'neutral-focus': '#82AA33',
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

