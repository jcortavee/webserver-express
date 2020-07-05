const http = require('http');

http
    .createServer((request, response) => {
        response.writeHead(200, {'Content-Type': 'application/json'});
        let payload = {
            name: 'Jose'
        }

        response.write(JSON.stringify(payload));
        response.end();
    })
    .listen(5014);

console.log(`Listening port: 5014`);