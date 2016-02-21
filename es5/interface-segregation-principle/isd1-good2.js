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

function ChairBuilder(attributes) {
  var chair = new Product(attributes.id);

  chair.setProductOptions(attributes.weight, attributes.height);
  chair.calculatePrice();

  return chair;
}

var chair = ChairBuilder({ id: '1111', weight: 4, height: 5 });
chair.sell()
