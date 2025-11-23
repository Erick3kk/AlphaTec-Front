/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#10B981',
          600: '#059669',
          700: '#047857',
        },
        secondary: '#34D399',
      },
      backgroundImage: {
        'sunrise': 'linear-gradient(135deg, #87CEEB 0%, #E0F7FA 30%, #FFFACD 70%, #FFD580 100%)',
      },
    },
  },
  corePlugins: {
    preflight: false, 
  },
}