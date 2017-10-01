const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin({ sourceMap: false }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: path.resolve(__dirname, 'index.html'),
      minify: {
        collapseWhitespace: true
      }
    })
  ]
});
