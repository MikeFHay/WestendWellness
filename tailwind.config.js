/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      supports: {
        'text-box': 'text-box: trim-both cap alphabetic',
      },
      keyframes: {
        'fade-in-down': {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'nav-progress': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(300%)' },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.6s ease-out',
        'nav-progress': 'nav-progress 1s ease-in-out 150ms infinite both',
      },
    },
  },
  plugins: [],
}
