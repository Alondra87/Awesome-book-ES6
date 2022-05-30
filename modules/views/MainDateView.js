import createNodeElem from '../utils/createElem.utils.js';
import assignDate from '../utils/date.utils.js';

const MAIN_DATE_ID = 'main-date';

export default class MainDateView {
  constructor() {
    this.id = MAIN_DATE_ID;
  }

  createElem() {
    return createNodeElem({
      tag: 'p',
      id: this.id,
      text: assignDate(),
    });
  }

  render(parentElemId) {
    const parentElem = document.getElementById(parentElemId);
    parentElem.appendChild(this.createElem());
  }
}
