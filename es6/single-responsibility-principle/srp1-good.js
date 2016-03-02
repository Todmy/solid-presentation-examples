function User(name) {
  this.name = name;
  this.services = {};
}

User.prototype.addService = function(Service) {
  var serviceName = Service.name;

  this.services[serviceName] = new Service(this.name);

  return this.services[serviceName];
};

function service(serviceName, options) {
  return serviceName.bind(null, options);
}

function MailBox(emailName, ownerName) {
  this.email = emailName;
  this.owner = ownerName;
};

MailBox.prototype.addLetter = function(draft) {
  this.letters = this.letters || [];
  this.letters.push(draft);
  draft.sender = this.email;
  draft.name = this.owner;

  return draft;
};

MailBox.prototype.send = function(letter) {
  console.log('send letter ---> ', letter.data)
};

function Draft(attributes) {
  this.title = attributes.title;
  this.text = attributes.text;
}

Object.defineProperties(Draft.prototype, {
  'data': {
    get: function() {
      return { sender: this.sender,
        recipient: this.recipient,
        title: this.title,
        text: this.text  + ' from ' + this.name
      }
    }
  }
});

Draft.prototype.to = function(recipient) {
  this.recipient = recipient;

  return this;
};

var user = new User('Bob');
var userMailBox = user.addService(service(MailBox, 'bob@test.com'));
var blankLetter = new Draft({ title: 'title', text: 'text' });
var letter = userMailBox.addLetter(blankLetter).to('Bill@doom.com');
userMailBox.send(letter);
