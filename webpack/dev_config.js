const path = require('path')
const DIST_PATH = path.resolve(process.cwd(), './dist')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        app: './src/index'
    },
    output: {
        filename: '[name].bundle.js',
        path: DIST_PATH
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: DIST_PATH,
        hot: true
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
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(process.cwd(), './index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}