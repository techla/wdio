const Page = require("./page");

class DashboardPage extends Page {
  //elements
  get activities() {
    return $$(".ServiceBlock");
  }

  get linkSpaPicto() {
    return $("a[href*=WELLNESS]");
  }

  get btnAcceptCookies() {
    return $("#didomi-notice-agree-button");
  }

  // features
  get path() {
    return "account";
  }

  acceptCookies() {
    this.btnAcceptCookies.click();
  }

  openSpaLayer() {
    this.linkSpaPicto.scrollIntoView();
    this.linkSpaPicto.click();
  }
}

module.exports = new DashboardPage();
