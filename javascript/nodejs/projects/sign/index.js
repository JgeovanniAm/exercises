'use strict'
const http = require('http');
const fs = require('fs');
const methods = require('./methods');
const userapi = require('./user.json'),
    querystring = require('querystring');

http.createServer(webserver).listen(3000, 'localhost');

function Cores(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', '*');

    res.setHeader('Access-Control-Allow-Headers', '*');
}

function webserver(req, res) {
    Cores(req, res)
    const MyMethods = new methods(req, res);
    const regex = new RegExp(/([\/User\/User=\D]&Password=\w)/)


    if (req.url == "/dataUser") {
        res.writeHead(200, { 'Content-Type': "text/json" });
        const json = fs.createReadStream('./user.json');
        json.pipe(res)
    }

    if (regex.test(req.url)) {
        const str = req.url;
        const outputt = str.split("/User/");
        const num = outputt[1];
        console.log(querystring.parse(num));
        const array = userapi.User.find(x => x.User == querystring.parse(num).User);
        console.log(array)
        res.writeHead(200, { 'Content-Type': "text/json" });
        res.write(JSON.stringify(array));
        res.end()
    }
}

console.log('esta corriendo')