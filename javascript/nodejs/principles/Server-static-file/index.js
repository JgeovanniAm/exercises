'use strict'
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const util = require('util');
const path = require('path');
let dataString = ""

http.createServer(webServer).listen(5000);

function webServer(req, res) {
    if (req.method == 'GET') {
        readPublic()
    }
    function readPublic() {
        if (req.url === '/') {
            const html = fs.createReadStream('./public/index.html')
            res.writeHead(200, { 'Content-Type': 'text/html' })
            console.log('entroo')
            html.pipe(res)
            /**
             * The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
             */
        } else if (req.url.match('\.css$')) {
            const pathCSS = path.join(__dirname, 'public', req.url);
            const fileStream = fs.createReadStream(pathCSS);
            res.writeHead(200, { 'Content-Type': 'text/css' });
            fileStream.pipe(res)
        }
        else if (req.url.match('\.js$')) {
            const pathJS = path.join(__dirname, 'public', req.url);
            const fileStream = fs.createReadStream(pathJS);
            res.writeHead(200, { 'Content-Type': 'text/css' });
            fileStream.pipe(res)
        }
        else {
            res.writeHead(404, { 'Content-Type': 'text/css' });
            res.end('error')
        }
    }
    if (req.method == 'POST') {
        req.on('data', (data) => {
            dataString += data
        })
        req.on('end', () => {
            /**
             * querystring.parse me convierte mi string en object
             * y util.inspect me lo manda modo json
             */
            const object = querystring.parse(dataString);
            const dataJson = util.inspect(object);
            console.log(dataJson);
            res.end(dataJson);
        })
    }
}
console.log('hola jimmy')