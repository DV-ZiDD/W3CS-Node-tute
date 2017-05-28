var fs = require('fs');
var rs = fs.createReadStream('../files/read-stream-file.txt');
rs.on('open', function () {
    console.log('The file is opened..!')
})