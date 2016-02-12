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
  this.html = html;
}

htmlEditor.prototype.splitIntoRows = function() {
  return this.text.split(/\<\/?\w*\>/);
};

var someTextOrHtml = '<p>Make it <br> perfect</p>';
var myEditor1 = new PlaneTextEditor(someTextOrHtml);
var myEditor2 = new htmlEditor(someTextOrHtml);

// myEditor1 and myEditor2 make different things so they did not inherited from each other
