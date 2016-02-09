function Song(name) {
  this.name = name;
}

function Player(song) {
  this.song = song;
}

Player.prototype.play = function() {
  console.log('"' + this.song.name + '" is played!')
};

var song = new Song('Habanot Nehama – So far');
var player = new Player(song);
player.play();
