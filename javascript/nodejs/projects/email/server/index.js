'use strict'
const http = require('http'),
    Methods = require('./methods');

http.createServer(webserver).listen(5000, 'localhost');
console.log('hi jimmy! node js /  port localhost:3000 ');

function Cors(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
}

function webserver(req, res) {
   // Cors()
    new Methods(req, res);
}
