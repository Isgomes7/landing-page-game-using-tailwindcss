/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html, js}'],
  theme: {
    extend: {
      spacing: {
        'small': '5px',
        'gap': '10px',
        'trim-small': '15px',
        'box-spacing': '20px',
        'trim': '30px',
        'large': '50px',
        'x-large': '80px',
        'big': '100px',
        'x-big': '150px',
      },
      colors: {
        'dark-blue-01': '#3B44F6',
        'dark-blue-02': '#767CF9',
        'dark-blue-03': '#D8DAFD',
        'light-blue-01': '#00D7FF',
        'light-blue-02': '#66E7FF',
        'light-blue-03': '#CCF7FF',
        'light-white-01': '#F5F4F9',
        'light-white-02': '#A0A0A0',
        'black-01': '#181818',
        'black-02': '#323232',
        'black-03': '#525252',
        'black-04' : '#0E0E0E',
        'white-01' : '#EFEFEF',
        'red-01' : '#FC326F',
        'gray-01' : '#7D7D7D',
      },
    },
    fontFamily: {
      sans: ['Lexend', 'sans-serif']
    },
  },
  plugins: [],
}

