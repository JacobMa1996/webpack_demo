const path = require('path')
const DIST_PATH = path.resolve(process.cwd(), './dist')

module.exports = {
    entry: {
        app: './src/index'
    },
    mode: 'development',
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
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: ['file-loader']
            }
        ]
    }
}