class Player {
  constructor(songType) {
  	var songInstance = new songType();

    if(!(songInstance instanceof abstractSong)) {
      throw new TypeError('Wrong type! Class ' + songType.name + ' should be inherited from abstractSong class');
    }

    this.song = songInstance;
  }

  play() {
  	console.log('"' + this.song.words + '" is played!')
  }
}

class abstractSong {
  constructor() {
    var self = this;
    var abstractMethods = [ 'words' ];

    if(new.target === abstractSong) {
      throw new TypeError('Cannot construct Abstract instances directly');
    }

    abstractMethods.forEach(function(method) {
      if(self[method] === undefined) {
        throw new TypeError('Class ' + self.constructor.name + ' must have ' + method + ' method');
      }
    });
  }
}

class IndieRock extends abstractSong {
  get words() {
  	return 'Indie Rock is good!';
  }
}


class Classic extends abstractSong {
  get words() {
  	return 'Be calm, everything fine!';
  }
}

var player1 = new Player(Classic);
player1.play();
var player2 = new Player(IndieRock);
player2.play();
