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

function initProduct(id) {
  var chair = new Product(id);

  chair.setProductOptions();
  chair.calculatePrice();

  return chair;
}

var chair = initProduct('1111');
chair.sell()
