// Subscribe Publish
const Mediator = function () {
  const TOPICS = {};
  return {
    Subscribe: function (topic, callback) {
      if (!topic) console.log('Invalid topic');
      if (!callback || typeof callback !== 'function') console.log('Invalid callback');
      // topics does not exists
      if (!TOPICS[topic]) TOPICS[topic] = [];
      // register the callback
      TOPICS[topic].push(callback);
    },
    Publish: function (topic, data) {
      if (!TOPICS[topic]) {
        console.log('Invalid topic')
        return false
      };
      TOPICS[topic].forEach(callback => callback(data));
    }
  }
};
Mediator.Subscribe('persona', (data) => {
  console.log(data)
});

Mediator.Subscribe('que paso', (data) => {
  console.log(data)
});


window.onclick = () => {
  Mediator.Publish('persona', { name: 'jimmy', age: 38 })
}

window.onload = () => {
  Mediator.Publish('que paso', { name: 'eva', age: 13 })
}