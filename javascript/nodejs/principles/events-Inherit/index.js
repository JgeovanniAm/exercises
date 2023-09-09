/**
 * Eventos en node EventEmitter()
 */

/**
 * EventEmitter es un Class
 */

const EventEmitter = require('events').EventEmitter;
const pub = new EventEmitter();

/**
 * Yo puedo crear mis propios eventos
 */

/**
 * El on es similar a los eventos en el frontEnd por ejemplo los @addEventListener;
 * @on se ejecuta las veces que se ejecute;
 * @once se ejecuta solo una vez;
 */

pub.on('myevent', function (mensaje) {
    console.log(mensaje);
})

/**
 * @emit emite mis eventos 
 * Recibe dos argumentos mi evento y el mensaje 
 * @removeAllListeners me elimina todo los eventos que tenga y recibe un argumento de mi evento
 */

pub.emit('myevent', 'se ejecuta mi mensaje por medio del emisor de eventos de node')