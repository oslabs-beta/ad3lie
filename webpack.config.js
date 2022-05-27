const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // devtool: "source-map",
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        }
      },
      {
        test: /\/src\/.+\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader', 
          'css-loader', 
           {
             loader: 'postcss-loader',
             options: {
               postcssOptions: {
                 plugins: {
                  tailwindcss: {},
                  autoprefixer: {},
                }
               }
             }
           }
          ]
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