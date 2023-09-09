'use strict'
const http = require('http');
const fsE = require('fs-extra');
// un paquete mejorado de fs
const util = require('util');
const formidable = require('formidable');
//parse los datos especialmente archivos al servidor npm i -S formidable

http.createServer(webserver).listen(3000, 'localhost');

function webserver(req, res) {
    if (req.method.toLowerCase() == "get") {
        const form = ` 
                <form action="/upload" enctype="multipart/form-data" method="post">
                <div>
                    <input type="file" name="upload" required>
                </div>
                <div>
                    <input id="btn" type="submit" value="subir archivo">
                </div>
                </form>  `
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(form)
    }

    if (req.url == '/upload' && req.method.toLowerCase() == 'post') {

        let form = new formidable.IncomingForm();

        form
            .parse(req, function (err, fields, files) {
                res.writeHead(200, { 'Content-type': 'text/html' });
                res.write('<h1>archivos recibidos</h1>' + util.inspect({ files: files }))
                res.end()
            })
            // progreso de i archivo
            .on('progress', function (bytesReceived, bytesExpect) {
                let porcentComplete = (bytesReceived, bytesExpect) * 100;
                console.log(porcentComplete)
            })
            .on('error', function (err) {
                console.log(err)
            })
            .on('end', function (fields, files) {
                //ubicacion temporal del archivo que se sube
                let tempPath = this.openedFiles[0].path;
                // nombre de archivo subido
                let fileName = this.openedFiles[0].name;
                // nueva ubicacion
                let newLocation = './upload/' + fileName;
                fsE.copy(tempPath, newLocation, function (err) {
                    return (err) ? console.log(err) : console.log('fue exitosa tu subida y se encuenyra en la carpeta upload')
                })
            })
        return
    }

}
console.log('esta corriendo')