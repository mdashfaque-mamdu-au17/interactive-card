/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'theme-grey-200': '#DFDEE0',
        'deep-violet-300': '#21092F',
        'theme-red-800': '#FF5050',
        'polish-grey': '#8F8694',
      },
      fontFamily: {
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
