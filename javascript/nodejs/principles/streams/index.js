/**
 * streams === chunks info
 * es un eventEmiters
 */

const fs = require('fs')
const readStream = fs.createReadStream('texto.txt')
const writeStream = fs.createWriteStream('texto-copia.txt')

readStream.pipe(writeStream)

/**
 * voy a crear una copia de mi archivo text
 */
