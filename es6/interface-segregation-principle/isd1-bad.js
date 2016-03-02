class Chair {
  constructor(id) {
  	this.id = id;
  }

  setProductOptions(weight, height) {
  	this.weight = weight;
  	this.height = height;
  }

  calculatePrice() {
    this.price = this.weight * this.height;
  }

  sell() {
  	console.log(this.id + '-id is sold with price ' + this.price);
  }
}


var chair = new Chair('1111');
chair.setProductOptions(4, 5);
chair.calculatePrice();
chair.sell()
