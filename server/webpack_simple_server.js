const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const detect = require('detect-port')
// const load = require('loading-cli')
const webpackConfig = require('../webpack.config')
const open = require('open')

let port = 2019
const host = '127.0.0.1'
const compiler = webpack(webpackConfig)

detect(port).then((_port) => {
    if(port !== _port) {port = _port}

    new WebpackDevServer(compiler).listen(port, host, (err) => {
        if(err) {
            console.log(err)
        }
        open('http://localhost:2019', { app: ['google chrome'] })
    })
})
