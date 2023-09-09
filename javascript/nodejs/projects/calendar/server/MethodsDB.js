
module.exports = class MongoDB {

    constructor(collect , client , classRest) {
        this.collect = collect;
        this.client = client;
        this.classRest = classRest;
        this.findMonths();
        this.AddEvent();
        this.DeleteEvent();
    }

    findMonths() {
        this.collect.find().toArray((err, resultado) => {
            if (err) throw err;
            this.classRest.GET(resultado)
            this.client.close()
        })
    }

    AddEvent(){
        this.classRest.POST(this.collect , this.client);
    }

    DeleteEvent(){
        this.classRest.DELETE(this.collect , this.client);
    }
}