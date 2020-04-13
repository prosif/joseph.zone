const http = require('http');
const https = require('https');
const fs = require('fs');
const config = require('./config');

const HTTP_PORT = 80;
const HTTPS_PORT = 443;

const options = {
    key: fs.readFileSync(config.SSL_KEY_PATH),
    cert: fs.readFileSync(config.SSL_CERT_PATH)
};

const server = https.createServer(options, (req, res) => {
    const index = fs.readFileSync('index.html');
    res.setHeader('Content-Type', 'text/html');
    res.end(index);
});

server.listen(HTTPS_PORT);

http.createServer((req, res) => {
    res.writeHead(301, {'Location': 'https://' + req.headers['host'] + req.url });
    res.end();
}).listen(HTTP_PORT);


