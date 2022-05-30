import createNodeElem from '../utils/createElem.utils.js';
import { luxon } from '../luxon/luxon.js';

const MAIN_DATE_ID = 'main-date';

export default class MainDateView {
  constructor() {
    this.id = MAIN_DATE_ID;
  }

  createElem() {
    return createNodeElem({
      tag: 'p',
      id: this.id,
      text: luxon.DateTime.now().toJSDate(),
    });
  }

  render(parentElemId) {
    const parentElem = document.getElementById(parentElemId);
    parentElem.appendChild(this.createElem());
  }
}
