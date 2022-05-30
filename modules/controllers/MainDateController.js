import MainDateView from '../views/MainDateView.js';

export default class MainDateController {
  constructor(mainDateBoxId) {
    this.mainDateBoxId = mainDateBoxId;
    this.mainDateView = new MainDateView();
  }

  buildMainDate() {
    this.mainDateView.render(this.mainDateBoxId);
  }
}
