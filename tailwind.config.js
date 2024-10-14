/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'nav-up': 'navUp 2s linear forwards',
        'floating': 'floating 5s linear infinite'
      },
      keyframes: {
        navUp: {
          '0%': { height: '100vh' , backgroundColor: 'rgba(29, 90, 83, 0)'},
          '90%': { height: '100px' , backgroundColor: 'rgba(29, 90, 83, 0)'},
          '100%': { height: '100px', backgroundColor: 'rgba(29, 90, 83, 0)' },
        },
        floating: {
          '0%': { opacity: '1', top: '100%' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.2', top: '-10%' },
        }
      },
    },
  },
  plugins: [],
}
