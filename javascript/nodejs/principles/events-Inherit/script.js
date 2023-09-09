/**
 * util = inherits hereda caracteristicas a otro;
 */

const EventEmitter = require('events').EventEmitter;
const inherits = require('util').inherits;

const TimeClass = function () {
    const self = this;
    setInterval(function () {
        self.emit('tictac')
    }, 1000)
}

inherits(TimeClass, EventEmitter);

/**
 * this.self hace referencia al object y el inherits va pasar la herencia
 */

TimeClass.prototype.theTime = function () {

    const time = new Date()
    const hrs = time.getHours();
    const min = time.getDay();
    const sec = time.getSeconds();
    const text = hrs + ':' + min + ':' + sec;
    console.log(text)
}

const clock = new TimeClass();

/**
 * @emit emite mis eventos 
 * Recibe dos argumentos mi evento y el mensaje 
 * @removeAllListeners me elimina todo los eventos que tenga y recibe un argumento de mi evento
 */

clock.on('tictac', function () {
    clock.theTime()
})