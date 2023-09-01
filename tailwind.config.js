/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  mode : "jit",
  content: ['./src/index.html', ],
  theme: {
    extend: {
      margin: {
        '10px': '10px',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  
}

