const emailController = require('./emailController');
module.exports = class Methods {
    
    constructor(req, res) {
        this.req = req;
        this.res = res;
        this.POST()
    }

    POST() {
        let dataString = ''
        if (this.req.method == 'POST' && this.req.url == "/send") {
            console.log('method POST')
            this.req.on("data", chunk => dataString += chunk)
            this.req.on("end", chunk => {
                new emailController(dataString)
            })
        }
    }
}