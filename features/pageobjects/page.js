const URI = require("urijs");

module.exports = class Page {
  static get baseUrl() {
    return process.env.CM_INTEG_BASEURL;
  }

  open(url) {
    return browser.url(url);
  }
};
