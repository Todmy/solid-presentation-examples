function Product(id) {
  this.id = id;
}

Product.prototype.setProductOptions = function() {
  this.weight = 4;
  this.height = 5;
};

Product.prototype.calculatePrice = function () {
  this.price = this.weight * this.height;
};

Product.prototype.sell = function() {
  console.log(this.id + '-id is sold with price ' + this.price);
};

var chair = new Product('1111');
chair.setProductOptions();
chair.calculatePrice();
chair.sell();
