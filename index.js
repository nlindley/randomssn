const http = require('http');
const SSN = require('./ssn');

function handleRequest(request, response) {
  response.end(SSN.generate());
}

const server = http.createServer(handleRequest);
const port = process.env.PORT;

server.listen(port);
