class Abilities {
  constructor(hero) {
    switch(hero.type) {
      case 'strangth':
        this.showPower(hero);
        break;
      case 'speed':
        this.runFasterThanLight(hero);
        break;
    }
  }

  showPower(hero) {
  	hero.showBiceps();
  }

  runFasterThanLight(hero) {
  	hero.overtakeTheCar();
  }
}

class Superman {
  constructor() {
    this.type = 'strangth';
  }

  showBiceps() {
    console.log('Look at my biceps!');
  }
}

class Flash {
  constructor() {
    this.type = 'speed';
  }

  overtakeTheCar() {
    console.log('I am the fastest!');
  }
}

var showTime1 = new Abilities(new Superman());
var showTime2 = new Abilities(new Flash());
