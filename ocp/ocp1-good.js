function User(userPlan) {
  this.plan = userPlan;
}

User.prototype.printRules = function () {
  console.log(this.plan.rules);
};

function BronzePlan() {
  this.rules = [ 'view', 'comment' ];
};
function SilverPlan() {
  this.rules = [ 'view', 'comment', 'write', 'send' ];
  this.friendsAmount = 2;
};

function GoldPlan() {
  this.rules = [ 'view', 'write', 'edit', 'sell' ];
  this.friendsAmount = 4;
  this.admin = true;
};

var user = new User(new GoldPlan());
user.printRules();
