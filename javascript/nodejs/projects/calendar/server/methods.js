const fs = require('fs');
const Endpoint = require('./endpoint');
const querystring = require('querystring');

module.exports = class Methods {

    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    // modularizar los get ** tenerlo en cuenta para despues
    GET(result) {
        this.result = result;
        const regex = new RegExp(/(\/api\/v1\/months\/)(month=[\d 1-12])/);
        const regexSearchEvents = new RegExp(/([\/api\/v1\/])(events:\D)/);
        const regexDate = new RegExp(/(\/api\/v1\/)(events\/\D)/);
        const regexDateSearch = new RegExp(/(\/api\/v1\/)(event\/)/);
        const date = new Date();
        const day = date.getDate();
        const monthNow = date.getMonth();
        const year = date.getFullYear();
        const EndPoint = new Endpoint(this.req, this.res, day, monthNow, year);
        let GET = this.req.method.toLowerCase();

        if (GET == 'get' && this.req.url == "/api/v1/months") EndPoint.allmonths(this.result);
        if (GET == 'get' && regex.test(this.req.url)) EndPoint.oneMonth(this.req.url, this.result);
        if (GET == 'get' && this.req.url == "/api/v1/events") EndPoint.EventsToday(this.result);
        if (GET == 'get' && regexSearchEvents.test(this.req.url)) EndPoint.searchEventsToday(this.req.url, this.result);
        if (GET == 'get' && regexDate.test(this.req.url)) EndPoint.eventsDate(this.req.url, this.result);
        if (GET == 'get' && regexDateSearch.test(this.req.url))  EndPoint.searchEventDate(this.req.url, this.result)
    }

    DELETE(collection, client) {
        this.collection = collection;
        this.client = client;
        let regex = new RegExp(/(\/day=)/)
        let dataString = "";
        if (this.req.method === "DELETE" || regex.test(this.req.url)) {
            const str = this.req.url;
            const outputt = str.split("/");
            const word = (outputt[1]);
            let i = querystring.parse(word);
            this.collection.update({ "mes": i.mes }, { $pull: { "events": { "name": i.name } } }, { multi: true }, (err, resultaado) => {
                if (err) throw err;
                console.log('deleted')
                this.client.close()
            })
        }
    }

    POST(collection, client) {
        this.collection = collection;
        this.client = client;
        let dataString = "";
        if (this.req.method == 'POST' && this.req.url == "/newDate") {
            this.req.on("data", chunk => dataString += chunk)
            this.req.on("end", chunk => {
                const dataPost = JSON.parse(dataString);
                let newdate = JSON.parse(dataString);
                let u = newdate.events
                let i = newdate.object.mes
                this.collection.update(
                    {
                        "mes": i
                    },
                    {
                        $push: {
                            "events": u
                        }
                    }, (err, resultaado) => {
                        if (err) throw err;
                        console.log(resultaado)
                        this.client.close()
                    })
            })
        }
    }

    PUT(collection, client) {
        this.collection = collection;
        this.client = client;
        let regex = new RegExp(/(\/day=)/)
        let dataString = "";
        if (this.req.method === "PUT") {
            this.req.on("data", chunk => dataString += chunk)
            this.req.on("end", chunk => {
                const dataPost = JSON.parse(dataString);
                let newdate = JSON.parse(dataString);
                let u = newdate.events
                let i = newdate.object.mes
                this.collection.update(
                    {
                        "mes": i
                    },
                    {
                        $push: {
                            "events": u
                        }
                    }, (err, resultaado) => {
                        if (err) throw err;
                        console.log(resultaado)
                        this.client.close()
                    })
            })
        }
    }
}