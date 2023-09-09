'use strict'
const http = require('http');
const fs = require('fs');
const path = require('path')

http.createServer(webServer).listen('3000','localhost');



const urls = [
    {
        route : "",
        output : "<h1>home</h1>" 
    },
    {
        route : "about",
        output : "<h1>about</h1>" 
    },
    {
        route : "github",
        output : "<h1>github</h1>" 
    },
    {
        route : "contact",
        output : "<h1>contact</h1>" 
    }
]


function webServer(req, res){
    const mensaje = "<h1>amigo su mensaje es un node.js</h1>";
    /**
     * @pathBase recibe request.url como metodo @basename
     */
    const pathBase = path.basename(req.url);
    urls.forEach(element => {
        console.log(element);
        if(element.route == pathBase){
            res.writeHead(200,{'Content-Type': "text/html"});
            res.end(mensaje + element.route);
        }
    });
    /**
     * res.@finished cuando se terminar mi reque
     */
    if(!res.finished){
        res.writeHead(200,{'Content-Type': "text/html"});
        res.end("error 404 : not found");
    }
}