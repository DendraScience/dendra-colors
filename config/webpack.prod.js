const common = require('./webpack.common.js')
const merge = require('webpack-merge')
const webpack = require('webpack')

const baseConfig = merge(common, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
})

module.exports = [
  baseConfig,
  merge(baseConfig, {
    output: {
      filename: 'dendra-colors.min.js'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ]
  })
]
