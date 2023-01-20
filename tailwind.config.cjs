/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}","./layout/**/*.{js,ts,jsx,tsx}"],
  theme: {
      colors: {
        'white': '#ffffff',
        'discord': {
          500: '#424549',
          600: '#36393e',
          700: '#282b30',
          800: '#1e2124',
          900: '#2C2F33',
        },
        'gray': {
          500: '#999999',
          600: '#777777',
          700: '#555555',
          800: '#333333',
          900: '#111111',
        },
      }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ],
};
