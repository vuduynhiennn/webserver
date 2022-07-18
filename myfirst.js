let http = require('http')

let dt = require('./myFirstModule')


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('Minh la Vu Duy Nhien hehehehehehe: ')
    res.end('Hello World')
}).listen(80); 