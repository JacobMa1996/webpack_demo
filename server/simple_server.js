const http = require('http')
const fs = require('fs')
const path = require('path')
const open = require('open')

function router(req, res, url) {
    let type = url.substr(url.lastIndexOf('.') + 1, url.length)
    let contentType = ''
    if (type == 'json' || type == 'js' || type == 'css' || type == 'html') {
        contentType = `text/${type}`
    }
    // webpack打包的资源无法获取，路径不匹配。需要再加个dist
    if (type == 'gif' || type == 'jpg' || type == 'jpeg' || type == 'png') {
        contentType = `image/${type}`
    }
    res.writeHead(200, { 'Content-Type': contentType })
    console.log('...>>>', url)
    fs.readFile(path.resolve(process.cwd() + url), (err, data) => {
        res.end(data)
        return
    })
}

const server = http.createServer((req, res) => {
    if(req.url == '/') {
        return fs.readFile('./index.html', (err, data) => {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            return res.end(data)
        })
    }
    router(req, res, req.url)
}).listen(2019, () => {
    open('http://localhost:2019', { app: ['google chrome'] })
})