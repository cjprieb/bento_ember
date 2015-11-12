var http = require("http");

//create the server
http.createServer(function(request, response) {
	response.writeHead(200, { "Content-Type": "text/html" });
	response.end("Hello World\n");
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');