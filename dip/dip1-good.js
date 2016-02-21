function Song(name) {
  this.name = name;
}

function Player() {
  this.songs = [];
}

Player.prototype.addSong = function(song) {
  if (song.name) {
    this.songs.push(song);
  }
};

Player.prototype.play = function() {
  console.log('"' + this.songs.shift().name + '" is played!')
};

var song = new Song('Habanot Nehama – So far');
var player = new Player();
player.addSong(song);
player.play();
