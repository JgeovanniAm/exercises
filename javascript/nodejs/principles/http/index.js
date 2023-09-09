/**
 * module core http
 */

const http = require('http')

/**
 * req = request;
 * res = response
 */

http.createServer( function ( req , res){
    res.writeHead(200,{'Content-type':'text/html'})
    res.end("<h1> hola <br> jimmy </h1> ")
}).listen(8000,"localhost")
/**
 * correr finalmente node y el nombre de mi archivo
 */
console.log("esta corriendo localhost:8000 ")