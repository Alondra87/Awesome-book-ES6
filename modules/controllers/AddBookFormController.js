import AddBookFormViewManager from '../views/AddBookFormViewManager.js';

export default class AddBookFormController {
  constructor(booksListController) {
    this.booksListController = booksListController;
    this.addBookFormViewManager = new AddBookFormViewManager();
  }

  init() {
    this.addBookFormViewManager.addEventHandler((event) => {
      event.preventDefault();
      const inputTitleValue = this.addBookFormViewManager.getInputTitleValue();
      const inputAuthorValue = this.addBookFormViewManager.getInputAuthorValue();
      this.booksListController.addBook({
        title: inputTitleValue,
        author: inputAuthorValue,
      });
      this.addBookFormViewManager.clearInputs();
    });
  }
}
