import createNodeElem from '../utils/createElem.utils.js';

const BOOK_BASE_ID = 'book';

export default class BookView {
  static BASE_ID = BOOK_BASE_ID;

  constructor(book, removeCallback) {
    this.id = `${BookView.BASE_ID}-${book.id}`;
    this.book = book;
    this.removeCallback = removeCallback;
  }

  createElem() {
    const { id, title, author } = this.book;
    const bookItem = document.createElement('li');
    bookItem.className = 'book';
    bookItem.id = this.id;
    const bookInfo = createNodeElem({
      tag: 'div',
      className: 'book-info',
    });
    const bookTitle = createNodeElem({
      tag: 'h3',
      text: title,
    });
    const bookAuthor = createNodeElem({
      tag: 'p',
      text: `by ${author}`,
    });

    bookInfo.appendChild(bookTitle);
    bookInfo.appendChild(bookAuthor);
    bookItem.appendChild(bookInfo);

    const removeBtn = createNodeElem({
      tag: 'button',
      text: 'Remove',
      className: 'btn btn--remove',
    });
    removeBtn.type = 'button';
    removeBtn.addEventListener('click', () => { this.removeCallback(id); });
    bookItem.appendChild(removeBtn);
    return bookItem;
  }

  render(parentElemId) {
    const parentElem = document.getElementById(parentElemId);
    const bookElem = this.createElem();
    parentElem.appendChild(bookElem);
  }
}
