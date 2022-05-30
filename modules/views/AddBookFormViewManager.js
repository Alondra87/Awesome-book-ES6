const ADD_BOOK_FORM_ID = 'add-book-form';

export default class AddBookFormViewManager {
  static ID = ADD_BOOK_FORM_ID;

  constructor() {
    this.form = document.getElementById(AddBookFormViewManager.ID);
  }

  addEventHandler(callback) {
    this.form.addEventListener('submit', callback);
  }

  getInputTitleValue() {
    return this.form.elements.title.value;
  }

  getInputAuthorValue() {
    return this.form.elements.author.value;
  }

  getInputElems() {
    const inputsArr = [];
    Object.values(this.form.elements).forEach((formElem) => {
      if (formElem.nodeName !== 'BUTTON' && !inputsArr.includes(formElem)) {
        inputsArr.push(formElem);
      }
    });
    return inputsArr;
  }

  clearInputs() {
    const inputElems = this.getInputElems();
    inputElems.forEach((input) => { input.value = ''; });
  }
}
