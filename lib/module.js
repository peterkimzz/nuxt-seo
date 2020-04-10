const path = require('path')

export default function SeoModule (_moduleOptions) {
  const options = Object.assign({}, this.options.seo, _moduleOptions)

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    ssr: true,
    options
  })
}

module.exports.meta = require('../packge.json')
