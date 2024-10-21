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