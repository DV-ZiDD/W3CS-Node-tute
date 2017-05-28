var fs = require(fs);

fs.appendFile('../files/append-file.txt','Hellp Content..!', function (err) {
    if (err) throw err;
    console.log('Saved.!');
});

fs.open('../files/open-file.txt', 'w', function (err) {
    if (err) throw err;
    console.log('Saved..!');
});

fs.writeFile('../files/write-file.txt', 'Hello Content..!', function (err) {
    if (err) throw err;
    console.log('Saved...!');
});

fs.appendFile('../files/append-file.txt', "this is text", function (err) {
    if (err) throw err;
    console.log('Saved....!')
});