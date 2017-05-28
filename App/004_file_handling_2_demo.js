var fs = require('fs');
/*
fs.open('./files/open-file.txt', 'w', function (err) {
    if (err) throw err;
    console.log('Saved..!');
});
*/
fs.writeFile('../files/write-file.txt', 'Hello Content..!', function (err) {
    if (err) throw err;
    console.log('Opend.!');
});

fs.appendFile('../files/append-file.txt', "this is text", function (err) {
    if (err) throw err;
    console.log('Updated....!')
});

 fs.unlink('../files/open-file.txt',function (err) {
     if (err) throw err;
     console.log('Deleted')
 });