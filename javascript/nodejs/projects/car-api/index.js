'use strict'
const http = require('http');
const ServerFront = require('./backend/serverFront');
function webServer(req, res) {
    new ServerFront(req , res);
}
http.createServer(webServer).listen(5000);
console.log('hi!! jimmy , webServer running port:5000');
