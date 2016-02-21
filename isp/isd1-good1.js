function Product(attributes) {
  this.id = attributes.id;
  this.weight = attributes.weight;
  this.height = attributes.height;
}

Product.prototype.setProductOptions = function() {
  this.weight = 4;
  this.height = 5;
};

Object.defineProperties(Product.prototype, {
  price: {
    get: function() {
      return this.weight * this.height;
    }
  }
});

Product.prototype.sell = function() {
  console.log(this.id + '-id is sold with price ' + this.price);

  return this;
};

var chair = new Product({ id: '1111', weight: 4, height: 5 }).sell()
