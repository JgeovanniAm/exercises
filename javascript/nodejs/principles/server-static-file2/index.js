'use strict'
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const util = require('util');
const path = require('path');
let dataString = ""

http.createServer(webServer).listen(5000);

function Cores(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', '*');

    res.setHeader('Access-Control-Allow-Headers', '*');
}

function webServer(req, res) {
    Cores(req,res) 

    if (req.url == '/index' && req.method === 'POST') {
        console.log('hiiiiiiiiii')
        res.writeHead(200, { 'Content-Type': "text/html" });
        res.end('<h1> brand invalited </h1>');
    }
}
console.log('hola jimmy')