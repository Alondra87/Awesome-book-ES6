/* eslint-disable class-methods-use-this */
import BookView from './BookView.js';

const BOOKS_LIST_ID = 'books-list';

export default class BooksListView {
  constructor(books, removeBookCallback) {
    this.id = BOOKS_LIST_ID;
    this.books = books;
    this.removeBookCallback = removeBookCallback;
  }

  render(parentElemId) {
    const parentElem = document.getElementById(parentElemId);
    const booksListElem = document.createElement('ul');
    booksListElem.className = 'books-list';
    booksListElem.id = this.id;
    this.books.forEach((book) => {
      const bookView = new BookView(book, this.removeBookCallback);
      const bookElem = bookView.createElem();
      booksListElem.appendChild(bookElem);
    });
    parentElem.appendChild(booksListElem);
  }

  renderNewBook(newBook) {
    const bookView = new BookView(newBook, this.removeBookCallback);
    bookView.render(this.id);
  }

  removeBookFromScreen(bookId) {
    const bookElem = document.getElementById(`${BookView.BASE_ID}-${bookId}`);
    bookElem.remove();
  }
}
