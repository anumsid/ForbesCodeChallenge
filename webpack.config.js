// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const path = require('path');
//
// module.exports = {
//   mode: 'development',
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, '/'),
//     filename: 'index.bundle.js'
//   },
//   module: {
//     rules: [{
//       test: /\.scss$/,
//       use: [
//         MiniCssExtractPlugin.loader,
//         { loader: 'css-loader', options: { url: true, sourceMap: true } },
//         { loader: 'sass-loader', options: { sourceMap: true } }
//       ]
//     }]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       inject: true,
//       filename: 'index.html',
//       template: './index.html'
//     }),
//     new MiniCssExtractPlugin({
//       filename: "[name].css",
//       chunkFilename: "[id].css"
//     })
//   ]
// };

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '/'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        { loader: 'css-loader', options: { url: true, sourceMap: true } },
        { loader: 'sass-loader', options: { sourceMap: true } }
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'debug': JSON.stringify(process.env.DEBUG)
      }
    })
  ]
};
