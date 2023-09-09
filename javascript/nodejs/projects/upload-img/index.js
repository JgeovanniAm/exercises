'use strict'
const http = require('http'),
    Static = require('./server/static');  

http.createServer(webserver).listen(3000, 'localhost');

function webserver(req, res) {
    new Static(req,res)
}
console.log('esta corriendo')