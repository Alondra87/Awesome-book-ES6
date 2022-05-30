import { getIdsFromElemsArray } from '../utils/id.utils.js';
import BooksListView from '../views/BooksListView.js';
import BooksListStorageController from './BooksListStorageController.js';
import Book from '../models/Book.js';

export default class BooksListController {
  constructor(booksSectionId, initialBooks) {
    this.booksListStorageController = new BooksListStorageController();
    const booksStored = this.booksListStorageController.getBooksData();
    this.books = booksStored.length > 0
      ? [
        ...initialBooks,
        ...booksStored.filter(
          ({ id }) => !getIdsFromElemsArray(initialBooks).includes(id),
        ),
      ]
      : initialBooks;
    this.booksSectionId = booksSectionId;
    this.booksListView = new BooksListView(this.books, this.removeBook);
  }

  buildBooksList() {
    this.booksListView.render(this.booksSectionId);
  }

  addBook({ title, author }) {
    const newBook = new Book(title, author);
    this.booksListView.renderNewBook(newBook);
    this.books.push(newBook);
    this.booksListStorageController.storeBooksData(this.books);
  }

  removeBook = (bookId) => {
    this.booksListView.removeBookFromScreen(bookId);
    this.books = this.books.filter((book) => book.id !== bookId);
    this.booksListStorageController.storeBooksData(this.books);
  }
}
