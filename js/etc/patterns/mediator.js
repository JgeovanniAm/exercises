// ---------------------------


class Participant {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }

  send(message, to) {
    this.chatroom.send(message, this, to);
  }

  receive(message, from) {
    console.log(from.name + " to " + this.name + ": " + message);
  }
}

let Chatroom = function () {
  let participants = {};

  return {
    register: function (participant) {
      participants[participant.name] = participant;
      participant.chatroom = this;
      console.log(this, participants)
    },

    send: function (message, from, to) {
      if (to) {                      // single message
        to.receive(message, from);
      } else {                       // broadcast message
        for (let key in participants) {
          if (participants[key] !== from) {
            participants[key].receive(message, from);
          }
        }
      }
    }
  };
};

function run() {
  let yoko = new Participant('Yoko'),
    ringo = new Participant('Ringo'),
    chatroom = new Chatroom();

  chatroom.register(yoko);
  chatroom.register(ringo);

  yoko.send('All you need is love.');
  yoko.send('I love you John.');
}

run()