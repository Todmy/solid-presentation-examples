class Player {
  constructor(songType) {
    this.song = new songType();
  }

  play() {
  	console.log('"' + this.song.getWords() + '" is played!');
  }
}

class IndieRock {
  getWords() {
  	return 'Indie Rock is good!';
  }
}

class Classic {
  getWords() {
  	return 'Be calm, everything fine!';
  }
}

var player1 = new Player(Classic);
player1.play();
var player2 = new Player(IndieRock);
player2.play();
