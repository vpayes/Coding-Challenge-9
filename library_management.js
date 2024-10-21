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

// Task 4 Create a VIPPatron Class that Inherits from Patron 
class VIPPatron extends Patron {
    constructor(name, priority) {
        super(name);
        this.priority = priority;
    }

    borrowBook(book) {
        if (this.priority) {
            console.log(`VIP patron ${this.name} has priority for borrowing ${book.title}.`);
        }
        super.borrowBook(book);
    }
}
// Task 5 Handle Books Borrowing and Returning 
// Use Example Sections
const fiction = new Section("Fiction");
const science = new Section("Science");

// Use Example Books
const book1 = new Book("1984", "George Orwell", "1234567890");
const book2 = new Book("Brave New World", "Aldous Huxley", "0987654321");
const book3 = new Book("The Selfish Gene", "Richard Dawkins", "1122334455");

// Example Books to Sections
fiction.addBook(book1);
fiction.addBook(book2);
science.addBook(book3);

// Eample Patrons 
const regularPatron = new Patron("John Doe");
const vipPatron = new VIPPatron("Jane Smith", true);

// Using Example
regularPatron.borrowBook(book1);

vipPatron.borrowBook(book1);

regularPatron.returnBook(book1);

fiction.listBooks();

console.log(`Total available books in Fiction: ${fiction.getAvailableBooks()}`);
console.log(`Total available books in Science: ${science.getAvailableBooks()}`);

// Task 6 Create and Manage Sections and Patrons
calculateTotalBooksAvailable() {
    return this.getAvailableBooks();
}
