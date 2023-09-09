const fs = require('fs'),
    uplodadFile = require('./upload'),
    apiImages = require('./api/img.json');

module.exports = class Methods {

    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    GET(file) {
        this.file = file;
        const regex = new RegExp(/(\/imagenes\/id:\d)/);
        if (this.req.method.toLowerCase() == "get" && !regex.test(this.req.url)) this.file.pipe(this.res);
    }

    POST(file) {
        this.file = file;
        if (this.req.url == '/img' && this.req.method.toLowerCase() == 'post') {
            new uplodadFile(this.req, this.res);
            this.file.pipe(this.res)
        }
    }

    DELETE(url) {
        this.url = url;
        if (this.req.method === "DELETE") {
            const regex = new RegExp(/(\/imagenes\/id:\d)/);
            if (regex.test(this.url)) {
                const str = this.url;
                const id = str.split("/imagenes/id:");
                for (let index = 0; index < apiImages.Imagenes.length; index++) {
                    apiImages.Imagenes[index].id = index;
                }
                const mapeo = apiImages.Imagenes.find(x => x.id == id[1])
                var search = apiImages.Imagenes.indexOf(mapeo);
                apiImages.Imagenes.splice(search, 1);
                const jsonString = JSON.stringify(apiImages);
                fs.writeFile('./server/api/img.json', jsonString);
            }
        }
    }

    DOWNLOAD(url, mapeo) {
        this.url = url;
        this.mapeo = mapeo;
        if (this.req.method === "GET") {
            let object = this.mapeo;
            this.res.setHeader('Content-disposition', `attachment; filename=${object.file}`);
            this.res.setHeader('Content-type', `image/${object.type}`);
            let filestream = fs.readFileSync(`${object.Location}`);
            this.res.end(filestream);
        }
    }
}