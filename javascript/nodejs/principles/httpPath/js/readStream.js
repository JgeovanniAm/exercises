'use strict'
const http = require('http');
const fs = require('fs');

const index = fs.createReadStream('../index.html')
http.createServer(webserver).listen(3000 ,'localhost');

function webserver (req , res){
    res.writeHead(200, {'Content-type':'text/html'});
    index.pipe(res)
}