var mySingleton = class {
  static instace = null
  constructor(name) {
    this.name = name
    if (!mySingleton.instace) return mySingleton.instace = this;
    else return mySingleton.instace;
  }
  publicMethod() {
    console.log(this.name)
  }

  privatMethod() {
    return "I'm private method"
  }
}

const h23_8 = new mySingleton('jimmy');
const i23_8 = new mySingleton('compita');

