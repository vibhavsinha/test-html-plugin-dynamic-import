const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'example/index.html',
    })
  ]
}
