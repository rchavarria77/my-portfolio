/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        ebony: {
          50: '#f2f3fb',
          100: '#e6eaf9',
          200: '#d2d7f3',
          300: '#b7bdea',
          400: '#9a9cdf',
          500: '#8380d4',
          600: '#7267c4',
          700: '#6256ac',
          800: '#50488b',
          900: '#443f70',
          950: '#171525',
        },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwindcss-animated'), require('autoprefixer')],
};
