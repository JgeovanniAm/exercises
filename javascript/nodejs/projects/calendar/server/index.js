'use strict'
const http = require('http'),
    fs = require('fs'),
    methods = require('./methods'),
    mongoDB = require('mongodb').MongoClient,
    MethodsDB = require('./MethodsDB'),
    url = "mongodb://localhost:27017";

http.createServer(webserver).listen(3000, 'localhost');
console.log('hi jimmy! node js /  port localhost:3000 ');

function Cores(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
}

function webserver(req, res) {
    Cores(req, res)
    const MyMethods = new methods(req, res);

    mongoDB.connect(url, (err, client) => {
        if (err) throw err;
        const db = client.db('Calendar'),
            collect = db.collection("events");
        new MethodsDB(collect, client, MyMethods);
    })
}
