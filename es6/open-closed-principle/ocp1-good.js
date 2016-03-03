class Abilities {
  constructor(hero) {
    hero.action();
  }
}

class Hero {
  constructor() {
    var self = this;
    var abstractMethods = [ 'action' ];

    if(new.target === Hero) {
      throw new TypeError('Cannot construct Abstract instances directly');
    }

    abstractMethods.forEach(function(method) {
      if(self[method] === undefined) {
        throw new TypeError('Class ' + self.constructor.name + ' must have ' + method + ' method');
      }
    });
  }
}

class Superman extends Hero {
  action() {
    console.log('Look at my biceps!');
  }
}

class Flash extends Hero {
  action() {
    console.log('I am the fastest!');
  }
}

var showTime1 = new Abilities(new Superman());
var showTime2 = new Abilities(new Flash());
