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
      'cod-gray': {
        50: '#f7f7f6',
        100: '#e6e3e1',
        200: '#ccc7c3',
        300: '#aaa49e',
        400: '#888179',
        500: '#6d685f',
        600: '#56524b',
        700: '#47433e',
        800: '#3b3834',
        900: '#33312e',
        950: '#161513',
      },
      shark: {
        50: '#f6f6f6',
        100: '#e7e7e7',
        200: '#d1d1d1',
        300: '#b0b0b0',
        400: '#888888',
        500: '#6d6d6d',
        600: '#5d5d5d',
        700: '#4f4f4f',
        800: '#454545',
        900: '#3d3d3d',
        950: '#222222',
      },
      woodsmoke: {
        50: '#f6f6f6',
        100: '#e7e7e7',
        200: '#d1d1d1',
        300: '#b0b0b0',
        400: '#888888',
        500: '#6d6d6d',
        600: '#5d5d5d',
        700: '#4f4f4f',
        800: '#454545',
        900: '#3d3d3d',
        950: '#191919',
      },
    },
    extend: {},
  },
  plugins: [],
};
