//example class http Angular

class Observer {
  topics = [];
  constructor(url) {
    this.api = url
  }

  process() {
    this.url
    // it take all url and process its response and notify the end response of my subscribe
  }

  subscribe(callback) {
    if (typeof callback === 'function') this.topics.push(callback);
    this.notifySubs();
  }

  unSubscribe() {
    this.topics.splice(this.topics.length);
  }

  notifySubs() {
    this.topics.forEach(subs => {
      typeof this.api === 'string' ? subs(true, 'success') : subs(false, 'err');
    })
  }
}

const urlAction = new Observer('hola');

urlAction.subscribe((boolean, res) => {
  console.log(boolean, res)
});

urlAction.subscribe((boolean, res) => {
  console.log(boolean, res)
})


urlAction.subscribe((boolean, res) => {
  console.log(boolean, res)
})

setInterval(() => {
  urlAction.unSubscribe()
}, 3000)
