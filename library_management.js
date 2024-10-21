// Task 1 Create a Book Class
class Book{
    constructor(title, author, ISBN) {
        this. title = title;
        this. author = author;
        this.ISBN = ISBN;
        this._isAvailable = true; //(default)
    }

    getDetails() {
        return (`Book Title: ${this.title} Author: ${this.author} ISBN: $${this.ISBN}`);
    }

    get isAvailable() {
        return this._isAvailable;
    }

    set isAvailable(borrowed) {
        this._isAvailable = borrowed; //if false
    }
}

// Task 2 Create a Section Class 
class Section {
    constructor(name) {
        this.name = name;
        this.book = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable).length;
    }

    listBooks() {
        this.books.forEach(book => {
            console.log(`${book.title} - ${book.isAvailable ? "Available" : "Borrowed"}`);
        });
   }

}

// Task 3 Create a Patron Class
class Patron {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }

    borrowBook(book) {
        if (book.isAvailable) {
            book.isAvailable = false;
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed ${book.title}`);
        } else {
            console.log(`${book.title} is not available.`);
        }
    }

    returnBook(book) {
        const bookIndex = this.borrowedBooks.indexOf(book);
        if (bookIndex > -1) {
            book.isAvailable = true;
            this.borrowedBooks.splice(bookIndex, 1);
            console.log(`${this.name} returned ${book.title}`);
        }
    }
}