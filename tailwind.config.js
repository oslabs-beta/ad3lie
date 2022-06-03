module.exports = {
  content: [
    `./index.html'`,
    './src/**/*.{html,js,jsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
    './components/**/*.{html,jsx}',

  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // Complex site-specific row configuration
        main: 'repeat(2, minmax(0, 1fr)) 50px'
      },
      maxHeight: {
        'chart-container': '95vh',
      }
    }
  },
  plugins: [require('tw-elements/dist/plugin')]
};
