const ServerRoute = require('./route'),
    brand = require('./brandMethod'),
    fs = require('fs'),
    path = require('path'),
    brandApi = require('./api/brand.json'),
    carApi = require('./api/car.json');

module.exports = class ServerFront {
    constructor(req, res) {
        this.res = res;
        const regexPages = new RegExp(/([\/api]\/v1\/cars\/\d)/),
            regexSearch = new RegExp(/([\/api]\/v1\/cars\/\w)/),
            pathBase = path.basename(req.url),
            ClassBrands = new brand(req, this.res);
        this.ClassBrands = ClassBrands;
        let dataString = "",
            readfile,
            point;

        if (req.url.match('\.css$')) {
            const pathCSS = path.join(__dirname, '../', req.url);
            this.res.writeHead(200, { 'Content-Type': 'text/css' });
            readfile = fs.readFileSync(pathCSS);
        }
        else if (req.url.match('\.js$')) {
            const pathJS = path.join(__dirname, '../', req.url);
            this.res.writeHead(200, { 'Content-Type': 'text/javascript' });
            readfile = fs.readFileSync(pathJS);
        }
        else if (req.url == "/api/v1/brands") {
            this.res.writeHead(200, { 'Content-Type': "text/json" });
            const json = JSON.stringify(brandApi);
            ClassBrands.getBrand(json);
        }
        else if (req.url == "/api/v1/cars/report") {
            res.setHeader('Content-Type', 'text/csv');
            const json = JSON.stringify(carApi);
            ClassBrands.getBrand(json);
        }
        else if (regexPages.test(req.url)) {
            const str = req.url;
            const outputt = str.split("/api/v1/cars/");
            const num = parseFloat(outputt[1]);
            this.Pagination(num, carApi);
        }
        else if (regexSearch.test(req.url)) {
            const str = req.url;
            const outputt = str.split("/api/v1/cars/");
            const word = (outputt[1]);
            this.Search(word, carApi);
        }
        else {
            ServerRoute.forEach(element => {
                if (element.route == pathBase || element.route == req.url) {
                    this.res.writeHead(200, { 'Content-Type': "text/html" });
                    point = ServerRoute.find(item => item.output === element.output);
                    readfile = fs.readFileSync(point.output);
                }
            });
        }
        ClassBrands.DELETE(req.url, carApi);
        ClassBrands.getBrand(readfile);
        ClassBrands.postBrand(readfile, dataString, point);
        ClassBrands.PUT(readfile, dataString, carApi)
    }
    Pagination(num, car) {
        const array = [];
        let cero = 0,
            inst = num,
            i = parseFloat(inst += cero.toString()),
            diez = 10,
            total = i + diez,
            json;
        car.Cars.forEach(object => {
            if (num == 0) {
                if (object.id > num && object.id <= 10) array.push(object);
                if (!array.length == 0) {
                    this.res.writeHead(200, { 'Content-Type': "text/json" });
                    json = JSON.stringify(array);
                }
            } else {
                if (object.id > i && object.id <= total) array.push(object);
                if (!array.length == 0) {
                    this.res.writeHead(200, { 'Content-Type': "text/json" });
                    json = JSON.stringify(array);
                }
            }
        });
        this.ClassBrands.getBrand(json);
    }

    Search(i, car) {
        let json;
        const cars = car.Cars;
        let search = []
        const array = cars.map(x => x.Models);
        for (const item of array) {
            if (item.indexOf(i) > -1) {
                const searchString = array.indexOf(item);
                search.push(car.Cars[searchString]);
                this.res.writeHead(200, { 'Content-Type': "text/json" });
                json = JSON.stringify(search);
            }
        }
        this.ClassBrands.getBrand(json);
    }
}