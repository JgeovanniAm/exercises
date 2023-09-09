'use strict'
const http = require('http');
const fs = require('fs');
const methods = require('./methods');
const userapi = require('./user.json');
const querystring = require('querystring');
const questionsApi = require('./question.json');
const PORT = process.env.PORT || 3000;

http.createServer(webserver).listen(PORT);

function Cors(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader('Access-Control-Allow-Methods', '*');

  res.setHeader('Access-Control-Allow-Headers', '*');
}

function webserver(req, res) {
  Cors(req, res)
  const MyMethods = new methods(req, res);
  const regex = new RegExp(/([\/score]:\w)/)

  // method GET
  if (req.url == '/dataUser') {
    res.writeHead(200, { 'Content-Type': 'text/json' });
    const json = fs.createReadStream('./user.json');
    MyMethods.GET(json)
  }

  if (req.url == '/myUser') {
    res.writeHead(200, { 'Content-Type': 'text/json' });
    const json = fs.createReadStream('./question.json');
    MyMethods.GET(json)
  }

  if (regex.test(req.url)) {
    const str = req.url;
    const outputt = str.split('/score:');
    const i = querystring.parse(outputt[1]);
    const array = userapi.User.find(x => x.User == i.User);
    const sum = parseFloat(i.newLevel) + array.Level;
    array.Level = sum;
    questionsApi.MyUser.Level = sum;
    const jsonString = JSON.stringify(userapi);
    const jsonString2 = JSON.stringify(questionsApi);
    fs.writeFileSync(`user.json`, jsonString);
    fs.writeFileSync('question.json', jsonString2)
  }
}
console.log('esta corriendo')