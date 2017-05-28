var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february'
var q = url.parse(adr, true);   // return a URL object with each part of the address as properties:

console.log(q.host);          // return hostname
console.log(q.pathname);      // return pathname
console.log(q.search);        // return serach keywords

var qdata = q.query;          // return url object as a query

console.log(q.query);
console.log(q.query.month);
console.log(qdata.year);