/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0f9f1',
          100: '#dcf1de',
          200: '#bbe2bf',
          300: '#92ce99',
          400: '#6ab472',
          500: '#4d9853',
          600: '#377a3d',
          700: '#2F5233',
          800: '#1e331f',
          900: '#0f1a10',
        },
      },
      fontFamily: {
        sans: ['Source Sans 3', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      },
    },
  },
  plugins: [],
};