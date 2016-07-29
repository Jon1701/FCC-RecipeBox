var webpack = require('webpack');
var path = require('path');

module.exports = {

  entry: path.resolve(__dirname, 'source/react-jsx/index.jsx'),

  output: {
    path: path.resolve(__dirname, 'build/javascript'),
    filename: 'app.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }

}
