const http = require('http');
const fs = require('fs');

const options = {
};

const server = http.createServer(options, (req, res) => {
    const index = fs.readFileSync('index.html');
    res.setHeader('Content-Type', 'text/html');
    res.end(index);
});

server.listen(80);


