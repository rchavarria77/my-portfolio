/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    colors: {
      bunker: {
        50: '#f5f7fa',
        100: '#ebeef3',
        200: '#d2dbe5',
        300: '#aabbcf',
        400: '#7c97b4',
        500: '#5b7a9c',
        600: '#476182',
        700: '#3b4f69',
        800: '#334459',
        900: '#2f3b4b',
        950: '#151a22',
      },
    },
    extend: {},
  },
  plugins: [],
};
