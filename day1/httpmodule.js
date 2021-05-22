const http = require('http')

let server = http.createServer((req, res) => {
    if (req.url === '/dashboard') {
        res.write('DASHBOARD')
        res.end()
    }
    if (req.url === '/') {
        res.write('Home')
        res.end()
    }

})

server.listen(3000)