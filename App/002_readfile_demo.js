var http = require('http');
var fs = require('fs');                                        // Node file Handling (CRUD)

http.createServer(function (req, res) {
    fs.readFile('./files/index.html', function (err, data) {   // Node Raad a file name ./files/index.html
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(data);
        res.end();
    })
}).listen(8080);