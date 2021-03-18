const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OIDCPage extends Page {
  // elements
  get inputGmId() {
    return $("#email");
  }
  get inputPassword() {
    return $("#password");
  }
  get inputFullSubmit() {
    return $("#password-submit-button");
  }
  get inputBookingId() {
    return $("#booking");
  }
  get inputFirstName() {
    return $("#firstname");
  }
  get inputLastName() {
    return $("#lastname");
  }
  get inputQuickSubmit() {
    return $("#booking-submit-button");
  }

  // features
  login(type) {
    switch (type) {
      case "full":
        const { gmId, email, password } = this.credentials;
        this.inputGmId.setValue(gmId || email);
        this.inputPassword.setValue(password);
        this.inputFullSubmit.click();
        break;
      case "quick":
        const { bookingId, firstName, lastName } = this.credentials;
        this.inputBookingId.setValue(bookingId);
        this.inputFirstName.setValue(firstName);
        this.inputLastName.setValue(lastName);
        this.inputQuickSubmit.click();
      default:
        break;
    }
  }
}

module.exports = new OIDCPage();
