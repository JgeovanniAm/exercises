const querystring = require('querystring');
const apiImages = require('./api/img.json');
const fs = require('fs');

module.exports = (req, res, newLocation, extencion, fileName, date) => {
    const topic = {
        id: 0,
        Location: newLocation,
        type: extencion,
        file: fileName,
        date: date
    }
    apiImages.Imagenes.push(topic);
    for (let index = 0; index < apiImages.Imagenes.length; index++) apiImages.Imagenes[index].id = index;
    const jsonString = JSON.stringify(apiImages);
    fs.writeFile('./server/api/img.json', jsonString);
}