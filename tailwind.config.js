/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        law: {
          primary: '#1a365d',
          secondary: '#2c5282',
          gold: '#c5a572',
          light: '#f8fafc',
          dark: '#1e293b',
          accent: '#c5a572'
        }
      },
      fontFamily: {
        serif: ['EB Garamond', 'Garamond', 'serif'],
        sans: ['Inter', 'sans-serif']
      },
      animation: {
        pulse: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      }
    },
  },
  plugins: [],
}