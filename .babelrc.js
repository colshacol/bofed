module.exports = (api) => {
  api.cache(false)

  return {
    env: {
      development: {
        presets: [
          ['@babel/preset-stage-0', { decoratorsLegacy: true }],
          '@babel/preset-env',
          '@babel/preset-flow',
          '@babel/preset-react'
        ],
        plugins: [
          'react-hot-loader/babel',
          'babel-plugin-dev-expression',
          '@babel/plugin-syntax-dynamic-import',
          'babel-plugin-add-react-displayname',
          'babel-plugin-jsx-control-statements',
          [
            '@babel/plugin-transform-runtime',
            {
              helpers: false,
              polyfill: false,
              regenerator: true,
              moduleName: '@babel/runtime'
            }
          ],
          [
            'babel-plugin-module-resolver',
            {
              root: ['./src'],
              alias: {
                '#components': './src/components',
                '#consts': './src/consts',
                '#utils': './src/utilities',
                '#common': './src/common',
                '#scenes': './src/scenes',
                '#views': './src/views'
              }
            }
          ],
          [
            'babel-plugin-react-css-modules',
            {
              generateScopedName: '[path]-[name]-[local]',
              handleMissingStyleName: 'warn',
              webpackHotModuleReloading: true,
              context: './src/client',
              exclude: 'node_modules'
            }
          ]
        ]
      },

      production: {
        presets: [['@babel/preset-stage-0', { decoratorsLegacy: true }]],
        plugins: [
          'babel-plugin-dev-expression',
          '@babel/plugin-syntax-dynamic-import',
          'babel-plugin-add-react-displayname',
          'babel-plugin-jsx-control-statements'
        ]
      }
    }
  }
}
