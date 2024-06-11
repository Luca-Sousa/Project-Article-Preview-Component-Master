/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/*.css'],
  theme: {
    extend: {
      colors: {
        'col-VDGB': 'hsl(217, 19%, 35%)',
        'col-DDB': 'hsl(214, 17%, 51%)',
        'col-GB': 'hsl(212, 23%, 69%)',
        'col-LGB': 'hsl(210, 46%, 95%)'
      },
      fontFamily: {
        Manrope: 'Manrope'
      }
    },
  },
  plugins: [],
}

