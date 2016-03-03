class Resource {
  constructor() {
  	  var self = this;
      var abstractMethods = [ 'load' ];

      if(new.target === Resource) {
        throw new TypeError('Cannot construct Abstract instances directly');
      }

      abstractMethods.forEach(function(method) {
        if(self[method] === undefined) {
          throw new TypeError('Class ' + self.constructor.name + ' must have ' + method + ' method');
        }
      });
  }
}

class Image extends Resource {
  load() {
    console.log('Image is loaded!');
  }

  display() {
    console.log('Image is displayed!');
  }
}

class Record extends Resource {
  load() {
    console.log('Record is loaded!');
  }
}

var resources = [ new Image(), new Record()]

resources.forEach(function(resource) {
  resource.load();
});
