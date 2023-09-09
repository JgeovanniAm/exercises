'use strict'
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
// paquete npm
const mongoDB = require('mongodb').MongoClient;
//my url local database
const url = "mongodb://localhost:27017";
let dataString = ""

http.createServer(webServer).listen(5000);

function webServer(req, res) {
    if (req.url == "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream('./index.html').pipe(res)
    }
    if (req.method === "POST") {
        req.on("data", chunk => {
            dataString += chunk;
        })
        req.on("end", chunk => {
            /* conecto para acceder a mi collection por ejemplo:
            es lo mismo que decir en la consola 
            
            *show dbs ,
            *use names dbs,
            *db.hi,
            *db.hi.find(),
            *db.hi.insertOne()

            */
            mongoDB.connect(url, function (err, client) {
                if(err) throw err;
                const db = client.db('local');
                const data = querystring.parse(dataString);
                const collect = db.collection("hi");
                collect.insertOne(data , function(err , res){
                    if(err) throw err;
                    console.log("data success")
                    client.close()
                })
            })
        })
    }
}
console.log('hola jimmy')