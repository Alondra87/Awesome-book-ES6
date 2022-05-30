/* eslint-disable class-methods-use-this */
const NAV_LINK_ACTIVE_CLASS = 'user-nav__link--active';

export default class NavigationViewManager {
  constructor(navLinksSelector) {
    this.navLinks = Object.values(document.querySelectorAll(navLinksSelector));
  }

  getNavLinkFromPointedElemId(pointedElemId) {
    return this.navLinks.find((navLink) => navLink.hash.split('#')[1] === pointedElemId);
  }

  setLinkStateToActive(pointedElemId) {
    const linkElem = this.getNavLinkFromPointedElemId(pointedElemId);
    linkElem.classList.add(NAV_LINK_ACTIVE_CLASS);
  }

  setLinkStateToDefault(pointedElemId) {
    const linkElem = this.getNavLinkFromPointedElemId(pointedElemId);
    if (linkElem.classList.contains(NAV_LINK_ACTIVE_CLASS)) {
      linkElem.classList.remove(NAV_LINK_ACTIVE_CLASS);
    }
  }

  addEventHandler(callback) {
    this.navLinks.forEach((navLink) => {
      navLink.addEventListener('click', callback);
    });
  }
}
