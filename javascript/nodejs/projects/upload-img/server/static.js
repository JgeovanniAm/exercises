const fs = require('fs'),
    Methods = require('./methods'),
    path = require('path'),
    apiImages = require('./api/img.json');

module.exports = class Static {
    constructor(req, res) {
        this.res = res;
        this.req = req;
        const regex = new RegExp(/(\/imagenes\/id:\d)/);
        let classMethods = new Methods(this.req, this.res);
        let file;

        if (regex.test(this.req.url)) {
            const str = this.req.url;
            const id = str.split("/imagenes/id:");
            const mapeo = apiImages.Imagenes.find(x => x.id == id[1]);
            if (mapeo == undefined) {
                console.log('is is undefined')
            } else {
                classMethods.DOWNLOAD(this.req.url, mapeo)
            }
        }

        else if (this.req.url == "/imagenes") {
            this.res.writeHead(200, { 'Content-Type': "text/json" });
            file = fs.createReadStream('./server/api/img.json');
        }

        else if (req.url.match('\.css$')) {
            const pathCSS = path.join(__dirname, '../', req.url);
            this.res.writeHead(200, { 'Content-Type': 'text/css' });
            file = fs.createReadStream(pathCSS);
        }

        else if (req.url.match('\.js$')) {
            const pathJS = path.join(__dirname, '../', req.url);
            this.res.writeHead(200, { 'Content-Type': 'text/javascript' });
            file = fs.createReadStream(pathJS);
        }

        else if (req.url.match('\.jpg$')) {
            const image = path.join(__dirname, '../', req.url);
            this.res.writeHead(200, { 'Content-Type': 'image/jpg' });
            file = fs.createReadStream(image);
        }

        else if (req.url.match('\.png$')) {
            const png = path.join(__dirname, '../', req.url);
            this.res.writeHead(200, { 'Content-Type': 'image/png' });
            file = fs.createReadStream(png);
        }

        else {
            this.res.writeHead(200, { 'Content-type': 'text/html' });
            file = fs.createReadStream('./index.html');
        }

        classMethods.POST(file);
        classMethods.DELETE(req.url);
        classMethods.GET(file);
    }
}