var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = '../files/' + q.pathname;
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, {'content-type': 'text/html'});
            res.end('404 File not Found..!');
        }
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);