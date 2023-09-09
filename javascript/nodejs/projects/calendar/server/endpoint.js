const querystring = require('querystring');

module.exports = class EndPoint {
    constructor(req, res, day, monthNow, year) {
        this.req = req;
        this.res = res;
        this.day = day;
        this.monthNow = monthNow;
        this.year = year;
    }
    allmonths(dbs) {
        this.write_Headers(dbs)
    }

    oneMonth(url, dbs) {
        const str = url;
        const month = str.split("/api/v1/months/");
        const joinString = month[1].split('/').join('&');
        const object = querystring.parse(joinString.toString())
        if ([parseFloat(object.month)] >= 0 && [parseFloat(object.month)] <= 11) {
            dbs.forEach(element => {
                element == dbs[parseFloat(object.month)] ? this.write_Headers(element) : console.log('');
            })
        }
    }

    EventsToday(dbs) {
        dbs.forEach(element => {
            if (element == dbs[this.monthNow]) {
                const i = element.events.filter(item => item.day == this.day && item.year == this.year);
                this.write_Headers(i)
            }
        });
    }

    searchEventsToday(url, dbs) {
        const str = url;
        const outputt = str.split("/api/v1/events:");
        const word = (outputt[1]);
        let array;
        let filterArray;
        let newdata = [];
        dbs.forEach(element => {
            if (element == dbs[this.monthNow]) {
                filterArray = element.events.filter(item => item.day == this.day && item.year == this.year);
                array = filterArray.map(x => x.name);
            }
        });
        // search logic
        for (const item of array) {
            if (item.indexOf(word) > -1) {
                const searchString = array.indexOf(item);
                newdata.push(filterArray[searchString]);
            }
        }
        this.write_Headers(newdata)
    }

    eventsDate(url, dbs) {
        const str = url;
        const outputt = str.split("/api/v1/events/");
        const date = (outputt[1]);
        // http://localhost:3000/api/v1/events/day=31&month=7&year=2019
        let parse = querystring.parse(date);
        dbs.forEach(element => {
            if (element == dbs[parse.month]) {
                const filterArray = element.events.filter(item => item.day == parse.day && item.year == parse.year);
                this.write_Headers(filterArray);
            }
        })
    }

    searchEventDate(url, dbs) {
        const str = url;
        const outputt = str.split("/api/v1/event/");
        const date = (outputt[1]);
        // http://localhost:3000/api/v1/event/day=20&month=8&year=2019&search=z
        let parse = querystring.parse(date);
        console.log(parse)
        let array;
        let filterArray;
        let newdata = [];
        dbs.forEach(element => {
            if (element == dbs[parse.month]) {
                filterArray = element.events.filter(item => item.day == parse.day && item.year == parse.year);
                array = filterArray.map(x => x.name);
            }
        })
        console.log(array)
        // search logic
        for (const item of array) {
            if (item.indexOf(parse.search) > -1) {
                const searchString = array.indexOf(item);
                newdata.push(filterArray[searchString]);
            }
        }
        this.write_Headers(newdata)
    }

    write_Headers(data) {
        this.data = data;
        this.res.writeHead(200, { 'Content-Type': 'text/json' });
        this.res.end(JSON.stringify(this.data));
    }
    

}
