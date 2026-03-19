/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050816',
        panel: 'rgba(17, 24, 39, 0.58)',
        stroke: 'rgba(148, 163, 184, 0.25)',
        accent: '#31b6ff',
        violet: '#8b5cf6'
      },
      boxShadow: {
        glow: '0 0 55px rgba(49, 182, 255, 0.32)',
        violet: '0 0 50px rgba(139, 92, 246, 0.3)'
      }
    }
  },
  plugins: []
}
