/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'nav-up': 'navUp 1s linear forwards',
      },
      keyframes: {
        navUp: {
          '0%': { height: '100vh' },
          '100%': { height: '100px' },
        },
      },
    },
  },
  plugins: [],
}
