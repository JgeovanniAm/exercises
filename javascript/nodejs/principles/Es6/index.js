'use strict'

class TimeClass {
    constructor() {
        setInterval( ()=> {
            this.theTime()
        }, 1000)
    }
    theTime() {
        const time = new Date()
        const hrs = time.getHours();
        const min = time.getDay();
        const sec = time.getSeconds();
        const text = hrs + ':' + min + ':' + sec;
        console.log(text)
    }
}

module.exports = new TimeClass()
