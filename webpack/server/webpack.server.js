const webpack = require('webpack')
// import dateTime from 'dayjs'
const path = require('path')

// import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin'
// import WriteFilePlugin from 'write-file-webpack-plugin'
// import HtmlPlugin from 'html-webpack-plugin'
// import DotEnvPlugin from 'dotenv-webpack'

// import * as loaders from './loaders'

const fromRoot = (_path) => path.resolve(__dirname, '../../', _path)

module.exports = (() => {
  return {
    mode: 'development',
    devtool: 'source-map',
    context: fromRoot('src/server'),
    target: 'node',

    entry: ['./index.js'],

    output: {
      filename: 'index.js',
      path: fromRoot('server')
    },

    resolve: {
      extensions: ['.js', '.jsx'],
      modules: ['node_modules']
    },

    module: {
      rules: [
        {
          test: /\.(png|jpg|gif|pem)$/,
          use: [
            {
              loader: 'file-loader',
              options: {}
            }
          ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        }
      ]
    }

    // plugins: [new webpack.EnvironmentPlugin()]
  }
})()
