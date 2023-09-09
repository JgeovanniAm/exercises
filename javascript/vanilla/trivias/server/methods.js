const fs = require('fs'),
  userapi = require('./user.json'),
  questionsApi = require('./question.json');

module.exports = class Methods {

  constructor(req, res) {
    this.req = req;
    this.res = res;
    this.POST();
    this.object;
  }

  GET(file) {
    this.file = file
    //const regex = new RegExp(/(\/imagenes\/id:\d)/);
    if (this.req.method.toLowerCase() == "get") {
      console.log('method get realizado')
      this.file.pipe(this.res)
    }
  }

  POST() {
    let dataString = "";
    if (this.req.method == 'POST' && this.req.url == "/register") {
      console.log('method post realizado "register" ')
      this.req.on("data", chunk => dataString += chunk)
      this.req.on("end", chunk => {
        const array = userapi.User.find(x => x.User == JSON.parse(dataString).User)
        if (array) this.filertdata(userapi);
        else {
          userapi.User.push(JSON.parse(dataString));
          this.filertdata(userapi);
        }
      })
    }

    if (this.req.method == 'POST' && this.req.url == "/myUser") {
      console.log('method post realizado "myUser" ')
      this.req.on("data", chunk => dataString += chunk)
      this.req.on("end", chunk => {
        const array = userapi.User.find(x => x.User == JSON.parse(dataString).User)
        if (array) {
          questionsApi.MyUser = array;
          this.filertdata(questionsApi);
        }
      })
    }

    if (this.req.method == 'POST' && this.req.url == "/questions") {
      console.log('method post realizado "Questions" ')
      this.req.on("data", chunk => dataString += chunk)
      this.req.on("end", chunk => {
        questionsApi.myQuestions.push(JSON.parse(dataString))
        this.filertdata(questionsApi);
      })
    }
  }

  filertdata(array) {
    if (array.User) {
      for (let index = 0; index < array.User.length; index++) {
        array.User[index].id = index;
      };
      const jsonString = JSON.stringify(array);
      fs.writeFileSync(`user.json`, jsonString);
    }
    else {
      for (let index = 0; index < array.myQuestions.length; index++) {
        array.myQuestions[index].id = index;
      };
      const jsonString = JSON.stringify(array);
      fs.writeFileSync('question.json', jsonString);
    }
  }
}
