/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},},

    daisyui: {
      themes: [
        {
          mytheme: {
            "primary": "#1E3A8A",
            "secondary": "#9333EA",
            "accent": "#3B82F6",
            "neutral": "#111827",
            "base-100": "#FFFFFF",
            "info": "#60A5FA",
            "success": "#10B981",
            "warning": "#F59E0B",
            "error": "#EF4444",
          },
        },
        "dark",
        "cupcake",
      ],
    },

      };

  plugins: [require('daisyui')]
    
