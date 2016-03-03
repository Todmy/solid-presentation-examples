class Book {
  constructor ({ author, title }) {
  	Object.assign(this, { author, title })
  }

  getAuthor() {
    console.log('Author is ' + this.author);
  }

  getTitle() {
    console.log('Title is ' + this.title);
  }

  getCurrentPage() {
  	return 'Page';
  }
}

class Printer {
  printPage(book) {
    console.log('Printer response:' + book.author + ' of ' + book.title + ' is printed');
  }
}

var myBook = new Book({ author: 'Joanne "Jo" Rowling', title: 'Harry Potter' });
var printer = new Printer();
printer.printPage(myBook);
