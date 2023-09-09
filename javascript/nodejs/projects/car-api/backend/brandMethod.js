'use strict'

const filterData = require('./FilterData'),
    Datafilter = new filterData();

module.exports = class BrandMethod {

    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    getBrand(file) {
        this.file = file;
        this.req.method === 'GET' ? this.res.end(this.file) : console.log('error');
    }

    postBrand(file, dataString, points) {
        this.file = file;
        this.dataString = dataString;
        this.points = points;
        if (this.req.method == 'POST') {
            this.req.on('data', (data) => { this.dataString = data.toString() })
            this.req.on('end', () => {
                let Datas = require(`${this.points.urlData}`);
                let id = `&id=`;
                if (Datas.Cars) this.dataString += id;
                Datafilter.getParameter(this.res, Datas, this.dataString, this.points);
                this.res.end(this.file);
            })
        }
    }

    DELETE(url, car) {
        this.url = url;
        this.car = car;
        if (this.req.method === "DELETE") {
            const regex = new RegExp(/([\/api]\/v1\/cars\/id:\d)/);
            if (regex.test(this.url)) {
                const str = this.url;
                const res = str.split("/api/v1/cars/id:");
                Datafilter.Remove(res, this.car);
            }
        }
    }

    PUT(file, dataString , car ) {
        this.file = file;
        this.car = car;
        this.dataString = dataString;
        if (this.req.method === "PUT") {
            this.req.on('data', (data) => { this.dataString = data.toString() });
            this.req.on('end', () => {
                Datafilter.Edit(this.dataString , this.car);
                this.res.end(this.file);
            })
        }
    }
}
