function PlaneTextEditor(text) {
  this.text = text;
}

PlaneTextEditor.prototype.splitIntoRows = function() {
  return this.text.split('\n');
};

PlaneTextEditor.prototype.parseToJson = function () {
  return JSON.parse(this.text);
};

function htmlEditor(html) {
  PlaneTextEditor.call(this, html);
}

htmlEditor.prototype = Object.create(PlaneTextEditor.prototype);

htmlEditor.prototype.splitIntoRows = function() {
  return this.text.split(/\<\/?\w*\>/);
};

var someTextOrHtml = '<p>Make it <br> perfect</p>';
var myEditor1 = new PlaneTextEditor(someTextOrHtml);
var myEditor2 = new htmlEditor(someTextOrHtml);

console.log(myEditor1.splitIntoRows() !== myEditor2.splitIntoRows());
