import NavigationViewManager from '../views/NavigationViewManager.js';
import ScreenViewManager from '../views/ScreenViewManager.js';

export default class NavigationController {
  constructor(navLinksSelector, initialActiveSectionId) {
    this.currActiveSectionId = initialActiveSectionId;
    this.navigationViewManager = new NavigationViewManager(navLinksSelector);
    this.screenViewManager = new ScreenViewManager();
  }

  navigateTo(elemId) {
    this.screenViewManager.hide(this.currActiveSectionId);
    this.navigationViewManager.setLinkStateToDefault(this.currActiveSectionId);

    this.screenViewManager.show(elemId);
    this.navigationViewManager.setLinkStateToActive(elemId);

    this.currActiveSectionId = elemId;
  }

  handleNavigation = (event) => {
    const navLinkElem = event.target;
    const elemToNavigateId = navLinkElem.hash.split('#')[1];
    this.navigateTo(elemToNavigateId);
  };

  init() {
    this.navigationViewManager.addEventHandler(this.handleNavigation);
    this.navigationViewManager.setLinkStateToActive(this.currActiveSectionId);
  }
}
