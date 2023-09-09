'use strict'
const http = require('http');
/**
 * @fs es lectura de archivos remember 
 */
const fs = require('fs');
const path = require('path');
const url = require('url');

http.createServer(webServer).listen('3000','localhost');

const urls = [
    {
        id :1,
        route : "",
        output : "../home.html" 
    },
    {
        id :2,
        route : "about",
        output : "../about.html" 
    },
    {
        id :4,
        route : "contact",
        output : "../contact.html" 
    }
]


function webServer(req, res){
    /**
     * @pathBase recibe request.url como metodo @basename
     */

    const pathBase = path.basename(req.url);

    /**
     * @url . @parse analiza mi request.url y meto true para accerder con el query
     */
    const id =  url.parse(req.url , true).query.id;

    /**
     * para pasar parámetros en este caso mi id de mi arreglo uso:  /?id=0;
     */
    urls.forEach(element => {

        if(element.route == pathBase || element.id  == id){
            res.writeHead(200,{'Content-Type': "text/html"});
            fs.readFile(element.output, function(err , data){
                if(err) throw err
                res.end(data)
            })
        }
    });
    /**
     * res.@finished cuando se terminar mi reque
     */
    if(!res.finished){
        res.writeHead(404,{'Content-Type': "text/html"});
        fs.readFile("../404.html", function(err , data){
            if(err) throw err
            res.end(data)
        })
    }
}
