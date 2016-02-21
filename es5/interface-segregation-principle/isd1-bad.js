function Product(id) {
  this.id = id;
}

Product.prototype.setProductOptions = function(weight, height) {
  this.weight = weight;
  this.height = height;
};

Product.prototype.calculatePrice = function () {
  this.price = this.weight * this.height;
};

Product.prototype.sell = function() {
  console.log(this.id + '-id is sold with price ' + this.price);
};

var chair = new Product('1111');
chair.setProductOptions(4, 5);
chair.calculatePrice();
chair.sell();
