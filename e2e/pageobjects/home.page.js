const Page = require("./page");

class HomePage extends Page {
  // elements
  get btnMenuSignIn() {
    return $('[title="Se connecter"]');
  }

  get btnFullLogin() {
    return $('[data-testid="member-nav-signIn"]');
  }
  get btnQuickLogin() {
    return $('[data-testid="member-nav-quickLogin"]');
  }

  get btnAcceptCookies() {
    return $("#didomi-notice-agree-button");
  }
  // features
  acceptCookies() {
    this.btnAcceptCookies.click();
  }

  signIn(type) {
    this.btnMenuSignIn.click();
    switch (type) {
      case "full":
        this.btnFullLogin.click();
        break;
      case "quick":
        this.btnQuickLogin.click();
      default:
        break;
    }
  }

  open() {
    return super.open(
      `https://${process.env.CM_INTEG_LOGIN}:${process.env.CM_INTEG_PASS}@${process.env.CM_INTEG_DOMAIN}`
    );
  }
}

module.exports = new HomePage();
