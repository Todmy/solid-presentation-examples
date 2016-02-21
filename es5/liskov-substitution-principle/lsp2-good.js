function Shape(){}
Shape.prototype.area = function(){};

function Rectangle(){}
Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.setHeight = function(height){
  this.height = height;
};

Rectangle.prototype.setWidth = function(width){
  this.width = width;
};

Rectangle.prototype.area = function(){
  return this.height * this.width;
};

function Square(){}
Square.prototype = Object.create(Shape.prototype);

Square.prototype.setSize = function(size){
  this.size = size;
};

Square.prototype.area = function(){
  return this.size * this.size;
};
