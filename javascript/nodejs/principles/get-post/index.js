'use strict'
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const util = require('util');
let dataString = ""

http.createServer(webServer).listen(3000);

function webServer(req, res) {
    if (req.method == 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html'});
        /**
        * modo sincrono
        */
        let readfile = fs.readFileSync('./index.html');
        let cssFile = fs.readFileSync('./style.css');
        res.write(cssFile);
        res.end(readfile);
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
            dataString+= {
                color:"red",
                animal:"conejo"
            }
            JSON.stringify(dataString)
          /*  const object = querystring.parse(dataString);
            const dataJson = util.inspect(object);
            console.log(dataJson);*/
            console.log(dataString)
            res.end(dataString)
        })
    }
}
console.log('hola jimmy')