/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B1B33',
        ivory: '#FAF6EE',
        gold: '#C9A227',
        'gold-light': '#E8C547',
        sage: '#A8BFA3',
        muted: '#667085',
        cream: '#F5EFE0',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        inter: ['Inter', 'Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
