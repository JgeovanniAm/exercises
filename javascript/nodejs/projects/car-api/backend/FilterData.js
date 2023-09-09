'use strict'

const fs = require('fs'),
    querystring = require('querystring');

module.exports = class filterData {

    getParameter(res, data, dataString, point) {
        this.res = res;
        this.data = data;
        this.dataString = dataString;
        this.point = point;
        let objectData = querystring.parse(this.dataString);
        this.data.Brands ? this.dataBrand(this.res, objectData, this.data.Brands) : this.dataCar(objectData, this.data.Cars);
        this.ConvertJson(this.point, this.data);
    }

    dataCar(object, data) {
        data.push(object);
        for (let index = 0; index < data.length; index++) data[index].id = index;
    }

    dataBrand(response, item, array) {
        array.forEach(element => {
            if (element.brand == item.brand) {
                response.writeHead(404, { 'Content-Type': "text/html" });
                response.end('<h1> brand invalited </h1>');
            }
        });
        if (!response.finished) array.push(item);
    }

    Remove(id, data) {
        for (let index = 0; index < data.Cars.length; index++) {
            data.Cars[index].id = index;
            if (data.Cars[index].id == id[1]) {
                var search = data.Cars.indexOf(data.Cars[index]);
                data.Cars.splice(search, 1);
                data.Cars;
                const jsonString = JSON.stringify(data);
                fs.writeFile(`./backend/api/car.json`, jsonString);
            }
        }
    }

    Edit(string, data) {
        for (let index = 0; index < data.Cars.length; index++) {
            if (data.Cars[index].id == JSON.parse(string).id) {
                data.Cars[index].Models = JSON.parse(string).Models;
                data.Cars[index].Color = JSON.parse(string).Color;
                data.Cars[index].Brand = JSON.parse(string).Brand;
                data.Cars[index].Age = JSON.parse(string).Age;
                const jsonString = JSON.stringify(data);
                fs.writeFile(`./backend/api/car.json`, jsonString);
            }
        }
    }

    ConvertJson(point, data) {
        this.point = point;
        this.data = data;
        const jsonString = JSON.stringify(this.data);
        fs.writeFile(`./backend/${this.point.urlData}`, jsonString);
    }
}