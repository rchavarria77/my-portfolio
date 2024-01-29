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
        dark: {
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
        light: {
          50: '#f2f9fd',
          100: '#d4eaf7',
          200: '#c3e4f4',
          300: '#8ed0eb',
          400: '#52b7de',
          500: '#2b9fcc',
          600: '#1c80ad',
          700: '#18668c',
          800: '#185774',
          900: '#194961',
          950: '#112e40',
        },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwindcss-animated'), require('autoprefixer')],
};
