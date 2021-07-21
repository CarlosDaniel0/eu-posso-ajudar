module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          '450': '#0094FF',
          gray: '#3B5060'
        },
        green: {
          '350': '#2F7C6E',
          '750': '#127545'
        },
        red: {
          '350' : '#A33E3E',
          '550': '#D62F2F'
        }
      }
    },
  },
  variants: {
    extend: {
      borderColor: ['focus'],
      fontWeight: ['hover'],
      ringWidth: ['hover', 'active'],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
