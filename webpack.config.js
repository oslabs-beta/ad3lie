const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // devtool: "source-map",
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  
  module: {
    rules: [
      // // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      // { test: /\.tsx?$/, loader: "ts-loader" },
      // // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      // { test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],
  devServer:{
    static: path.resolve(__dirname, 'dist'),
    port: 8080
  }
};