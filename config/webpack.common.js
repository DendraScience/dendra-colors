const path = require('path')
const srcRoot = path.resolve(__dirname, '../src')
const webpack = require('webpack')

module.exports = {
  context: srcRoot,
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '../dist/browser'),
    filename: 'dendra-colors.js',
    libraryTarget: 'umd',
    library: ['dendra', 'colors']
  },
  externals: {
    'chroma-js': {
      commonjs: 'chroma-js',
      commonjs2: 'chroma-js',
      amd: 'chroma-js',
      root: 'chroma'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: srcRoot,
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: srcRoot
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
