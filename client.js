var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end('<div style="background-color: green; width:100%; height:100%"></div>');
});

server.listen(8080);