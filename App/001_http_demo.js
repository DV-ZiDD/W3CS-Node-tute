var http = require('http');
var dt = require('../Modules/mod_001_date_time.js');

// create a server object:
http.createServer(function(req, res){
    res.writeHead(200, {'content-type': 'text/html'});            // add a header
    res.write("The date and time are currently: " + dt.mydt());   // write a response to the client
    res.write('<br/>' + req.url);                                 // write request url
    res.end();                                                    // end the response
}).listen(8080);                                                  // the server object listens on port 8080
