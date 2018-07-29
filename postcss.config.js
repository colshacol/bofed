const autoprefixer = require('autoprefixer')
const tramix = require('tramix')

module.exports = {
  sourceMap: 'inline',
  plugins: [
    autoprefixer({}),
    tramix({
      include: './src/styles/mixins/index.js'
    })
  ]
}
