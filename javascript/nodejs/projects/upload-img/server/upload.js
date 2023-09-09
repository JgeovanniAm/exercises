'use strict'
const fsE = require('fs-extra');
const util = require('util');
const formidable = require('formidable');
const generate = require('./generate');

module.exports = class uplodadFile {
    constructor(req, res) {
        this.res = res;
        this.req = req;
        let form = new formidable.IncomingForm();
        form
            .parse(this.req, (err, fields, files) => {
                let extencion = files.upload.type.split('/')[1];
                if (extencion === "jpeg" || extencion == "png") {
                    let tempPath = files.upload.path;
                    let fileName = files.upload.name;
                    let newLocation = './server/img/' + fileName;
                    let date = new Date;
                    const data = [
                        date.getDate().toString(),
                        date.getMonth().toString(),
                        date.getFullYear().toString()
                    ];
                    generate(req, res, newLocation, extencion, fileName, data.join('-'));
                    fsE.copy(tempPath, newLocation, (err) => {
                        (err) ? console.log(err) : console.log('fue exitosa tu subida y se encuentra en la carpeta upload')
                    })
                } else console.log('hola jimmy ha un error en el formato ');
            })
    }
}