const http = require('http');

http.createServer((req, resp) => {
    resp.writeHead(200, { 'connection-type': 'application/json' });
    resp.write(JSON.stringify({ name: 'RD', email: 'rudransh@gmail.com' }));
    resp.end();
}).listen(6000);