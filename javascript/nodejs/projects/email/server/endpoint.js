const querystring = require('querystring');

module.exports = class EndPoint {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }
}
