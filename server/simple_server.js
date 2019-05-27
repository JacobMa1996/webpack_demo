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
    if (type == 'gif' || type == 'jpg' || type == 'jpeg' || type == 'png') {
        contentType = `image/${type}`
    }
    res.writeHead(200, { 'Content-Type': contentType })

    fs.readFile(process.cwd() + url, (err, data) => {
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