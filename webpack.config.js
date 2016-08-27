var path = require('path')
var webpack = require('webpack')

var IS_PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
  watch: !IS_PRODUCTION,
  devtool: IS_PRODUCTION ? 'cheap-module-source-map' : 'eval',
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'app.min.js'
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader','eslint-loader'] }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
  ]
}
