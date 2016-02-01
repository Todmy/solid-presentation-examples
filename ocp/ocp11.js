function User(type) {
  switch (type) {
    case 'bronze':
      this.rules = [ 'view', 'comment' ];

      break;
    case 'silver':
      this.rules = [ 'view', 'comment', 'write', 'send' ];
      this.friendsAmount = 2;

      break;
    case 'gold':
      this.rules = [ 'view', 'write', 'send', 'edit', 'sell' ];
      this.friendsAmount = 4;
      this.admin = true;

      break;
  }
}
