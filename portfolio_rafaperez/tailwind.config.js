const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgDefaultDark: '#000000',
        bgDefaultDimGray: '#696969',
        bgDefaultDarkSlateGray: '#2f4f4f',
        bgDefaultWhite: '#fffff',
        bgDefaultMidnightBlue: '#191970',

        //text
        txtDefaultDark: '#000000',
        txtDefaultWhite: '#ffffff',
        txtDefaultDarkGray: '#A9A9A9',
        txtDefaultDarkBlue: '#0000CD',
      },
    },
  },
  plugins: [],
});
