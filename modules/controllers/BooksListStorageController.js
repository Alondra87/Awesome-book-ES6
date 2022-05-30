const BOOKS_LOCAL_STORAGE_KEY = 'books';

export default class BooksListStorageController {
  constructor() {
    this.key = BOOKS_LOCAL_STORAGE_KEY;
  }

  storeBooksData(books) {
    localStorage.setItem(this.key, JSON.stringify(books));
  }

  getBooksData() {
    const booksStored = localStorage.getItem(this.key);
    if (booksStored) {
      return JSON.parse(booksStored);
    }
    return [];
  }
}
