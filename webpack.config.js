var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'app.js'
  },

  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/
      }
    ]
  }
};
