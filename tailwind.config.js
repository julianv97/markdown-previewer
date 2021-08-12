module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      radjani: "Rajdhani",
    },
    extend: {
      spacing: {
        '100': '30rem',
        
      },
      colors: {
        'grayish-green': '#87b5b5',
        'desaturated-blue': '#c0d8d8'
      }
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
