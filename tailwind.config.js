/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#ec4899 ',
        secondary: '#94a3b8',
        dark: '#0f172a',
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" }
        }
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

