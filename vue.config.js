// vue.config.js
var path = require('path')

module.exports = {
    publicPath: 'portfolio',
    outputDir: 'docs',

    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
    },
}
