const path = require('path')
const DIST_PATH = path.resolve(__dirname, './dist')

module.exports = {
    entry: {
        app: './src/index'
    },
    output: {
        filename: 'bundle.js',
        path: DIST_PATH
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}