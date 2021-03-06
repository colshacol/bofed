import webpack from 'webpack'
// import dateTime from 'dayjs'
import path from 'path'

import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin'
import WriteFilePlugin from 'write-file-webpack-plugin'
import HtmlPlugin from 'html-webpack-plugin'
// import DotEnvPlugin from 'dotenv-webpack'

import * as loaders from './loaders'

const fromRoot = (_path) => path.resolve(__dirname, '../../', _path)

module.exports = (() => {
  return {
    mode: 'development',
    devtool: 'source-map',
    context: fromRoot('src/client'),

    stats: 'errors-only',

    entry: ['./index.js'],

    output: {
      filename: 'bundle.js',
      path: fromRoot('public')
    },

    resolve: {
      extensions: ['.js', '.jsx'],
      modules: ['node_modules']
    },

    serve: {
      content: fromRoot('public'),
      disableHostCheck: true,
      compress: true,
      port: 4000,
      dev: {
        publicPath: '/'
      },
      hot: {
        hmr: true
      },
      historyApiFallback: true
    },

    module: {
      rules: [
        loaders.javaScriptLoader,
        loaders.cssLoader,
        loaders.fontLoader,
        loaders.fileLoader,
        loaders.svgLoader,
        loaders.urlLoader
      ]
    },

    plugins: [
      new webpack.EnvironmentPlugin(),

      new HtmlPlugin({
        publicPath: '/',
        template: fromRoot('src/client//index.html'),
        alwaysWriteToDisk: false
      }),

      new WriteFilePlugin({
        test: /\.html$/,
        useHashIndex: false
      }),

      new HtmlWebpackHarddiskPlugin()
    ]
  }
})()
