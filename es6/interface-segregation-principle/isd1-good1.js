class Chair {
  constructor(id) {
  	this.id = id;
  }

  setProductOptions(weight, height) {
  	this.weight = weight;
  	this.height = height;
  }

  get price() {
    return this.weight * this.height;
  }

  sell() {
  	console.log(this.id + '-id is sold with price ' + this.price);
  }
}

var ChairBuilder = (attributes) => {
  var chair = new Chair(attributes.id);

  chair.setProductOptions(attributes.weight, attributes.height);

  return chair;
}

var chair = ChairBuilder({ id: '1111', weight: 4, height: 5 });
chair.sell()
