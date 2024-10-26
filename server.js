const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.end("Welcome to home Page")
    } else {
        res.end('Hello World')
    }
});

server.listen(8080, () => {
    console.log("Server is running on http://localhost:3000")
})