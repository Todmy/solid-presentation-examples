function Rectangle(){
  this.height = 0;
  this.width = 0;
}

Rectangle.prototype.setHeight = function(height){
  this.height = height;
};

Rectangle.prototype.setWidth = function(width){
  this.width = width;
};

Rectangle.prototype.area = function(){
  return this.height * this.width;
};

var Square = function(){};
Square.prototype = Object.create(Rectangle.prototype);

Square.prototype.setHeight = function(height){
  this.setSize(height);
};

Square.prototype.setWidth = function(width){
  this.setSize(width);
};

Square.prototype.setSize = function(size){
  this.height = size;
  this.width = size;
};
