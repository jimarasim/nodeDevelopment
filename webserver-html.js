var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<html><head><title>jaemzware</title></head><body><h1>jaemzware</h1></body></html>');
  response.end('\n');
}).listen(80);

console.log('Server running at http://localhost:80/');
