function User(name) {
  this.name = name;
}

Object.defineProperties(User.prototype, {
  'name': {
    set: function(name) {
      this._name = name;
    },

    get: function() {
      return this._name;
    }
  },

  'mailBox': {
    set: function(email) {
      this._mailBox = email;
    },

    get: function() {
      return this._mailBox;
    }
  }
});

User.prototype.initEmailAddress = function (emailName) {
  this.mailBox = new MailBox(this, emailName);

  return this;
};

function MailBox(owner, emailName) {
  this.owner = owner
  this.email = emailName;
};

Object.defineProperties(MailBox.prototype, {
  'email': {
    set: function(emailName) {
      this._email = emailName;
    },

    get: function() {
      return this._email;
    }
  },

  'owner': {
    set: function(owner) {
      this._owner = {
        name: owner.name
      };
    },

    get: function() {
      return this._owner;
    }
  }
});

MailBox.prototype.letter = function (attributes) {
  attributes.sender = {
    email: this.email,
    name: this.owner.name
  };
  this._letter = new Letter(attributes);

  return this._letter;
};

MailBox.prototype.sendLetter = function () {
  console.log('send letter ---> ', this._letter.data)
};

function Letter(attributes) {
  this._data = {};
  this.sender = attributes.sender;
  this.title = attributes.title;
  this.text = attributes.text;
}

Object.defineProperties(Letter.prototype, {
  'sender': {
    set: function(sender) {
      this._sender = sender;
    },

    get: function() {
      return this._sender;
    }
  },

  'recipient': {
    set: function(recipient) {
      this._recipient = recipient;
    },

    get: function() {
      return this._recipient;
    }
  },

  'title': {
    set: function(title) {
      this._title = title;
    },

    get: function() {
      return this._title;
    }
  },

  'text': {
    set: function(text) {
      this._text = text;
    },

    get: function() {
      return this._text;
    }
  },

  'data': {
    get: function() {
      return { sender: this._sender.email,
        recipient: this._recipient,
        title: this._title,
        text: this._text  + ' from ' + this._sender.name
      }
    }
  }
});

Letter.prototype.to = function (recipient) {
  this.recipient = recipient;

  return this;
};

var user = new User('Bob').initEmailAddress('bob@test.com');
user.mailBox.letter({ title: 'title', text: 'text' }).to('Bill@doom.com');
user.mailBox.sendLetter();
