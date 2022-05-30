const U_HIDE_CLASS = 'is-hidden';

export default class ScreenViewManager {
  constructor() {
    this.utilHideClass = U_HIDE_CLASS;
  }

  hide(elementId) {
    const elem = document.getElementById(elementId);
    elem.classList.add(this.utilHideClass);
  }

  show(elementId) {
    const elem = document.getElementById(elementId);
    if (elem.classList.contains(this.utilHideClass)) {
      elem.classList.remove(this.utilHideClass);
    }
  }
}
