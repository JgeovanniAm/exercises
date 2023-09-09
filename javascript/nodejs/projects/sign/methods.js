const fs = require('fs'),
    userapi = require('./user.json');

module.exports = class Methods {

    constructor(req, res) {
        this.req = req;
        this.res = res;
        this.POST();
        this.object;
    }

    GET() {
        //const regex = new RegExp(/(\/imagenes\/id:\d)/);
        if (this.req.method.toLowerCase() == "get") {
            console.log('method get realizado')
        }
    }

    POST() {
        let dataString = "";
        if (this.req.method == 'POST' && this.req.url == "/register") {
            console.log('method post realizado "register" ')
            this.req.on("data", chunk => { dataString += chunk })
            this.req.on("end", chunk => {
                const array = userapi.User.find(x => x.User == JSON.parse(dataString).User)
                if (array) this.filertdata(userapi);
                else {
                    userapi.User.push(JSON.parse(dataString));
                    this.filertdata(userapi);
                }
            })
        }
    }

    filertdata(array) {
        for (let index = 0; index < array.User.length; index++) {
            array.User[index].id = index;
        };
        const jsonString = JSON.stringify(array);
        fs.writeFileSync(`user.json`, jsonString);
    }
}