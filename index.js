var http = require('http');

function handleRequest(request, response) {
  var firstPart = ('000' + Math.floor(Math.random()*1000)).substr(-3);
  var secondPart = ('00' + Math.floor(Math.random()*100)).substr(-2);
  var thirdPart = ('0000' + Math.floor(Math.random()*10000)).substr(-4);
  response.end(firstPart + '-' + secondPart + '-' + thirdPart);
}

var server = http.createServer(handleRequest);

server.listen(process.env.PORT);
