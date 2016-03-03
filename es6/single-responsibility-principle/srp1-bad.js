class Book {
  constructor ({ author, title }) {
    console.log(author, title)
  	Object.assign(this, { author, title })
  }

  getAuthor() {
    console.log('Author is ' + this.author);
  }

  getTitle() {
    console.log('Title is ' + this.title);
  }

  print() {
  	console.log('Page is printed');
  }
}

var myBook = new Book({ author: 'Joanne "Jo" Rowling', title: 'Harry Potter' });
myBook.print()
