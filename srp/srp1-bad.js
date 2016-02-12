function User(options) {
  this._name = options.name;
  this._email = options.email;
}

User.prototype.newLetter = function (attributes){
  this._recipient = attributes.recipient;
  this._title = attributes.title;
  this._text = attributes.text;
};

User.prototype.sendLetter = function () {
  console.log('send letter ---> ', {
    sender: this._email,
    recipient: this._recipient,
    title: this._title,
    text: this._text + ' from ' + this._name
  });
};

var user = new User({ name: 'Bob', email: 'bob@test.com' });
user.newLetter({ recipient: 'Bill@doom.com', title: 'title', text: 'text' });
user.sendLetter();
