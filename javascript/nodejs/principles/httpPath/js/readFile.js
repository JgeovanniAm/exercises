'use strict'
const http = require('http');
const fs = require('fs');
http.createServer(webserver).listen(3000 ,'localhost');
function webserver (req , res){
    res.writeHead(200, {'Content-type':'text/html'});
    /** @err es un parametro que recibe el error al leeer los files y 
     * data es la respuesta de los datos 
     * */
    function readData(err,data){
        if(err){
            console.error('error')
            throw err ;
        };
        res.end(data)
    }
    /**
     * @readFile recibe el archivo y un calback de verificacion de error y data con response
     */
    fs.readFile('../index.html', readData)
}