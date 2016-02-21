function Song(name) {
  this.name = name;
}

function Player(song) {
  this.song = new Song('loading song');
}

Player.prototype.play = function() {
  console.log('"' + this.song.name + '" is played!')
};

var player = new Player();
player.play();
