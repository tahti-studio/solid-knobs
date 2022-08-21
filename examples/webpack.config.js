const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  devtool: 'cheap-source-map',
  entry: {
    examples: './index.tsx'
  },
  devServer: {
    port: 3000,
    host: '0.0.0.0'
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './index.html',
        minify: true,
        excludeChunks: ['processor']
    })
  ],
  output: {
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript', 'solid'],
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource'
      }
    ]
  }
};
