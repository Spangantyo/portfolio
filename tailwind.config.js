/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#ec4899 ',
        secondary: '#94a3b8',
        tertiary: '#8b5cf6',
        dark: '#0f172a',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #4f46e5 , #ec4899)',
        'gradient-tertiary': 'linear-gradient(to right, #a855f7,#8b5cf6 )',
      },
      animation: {
        "loop-scroll": "loop-scroll 20s linear infinite"
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-25%)" } /* Pindah penuh karena elemen diduplikasi */
        }
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

