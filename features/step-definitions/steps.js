const { Given, When, Then } = require("@cucumber/cucumber");

const Page = require("../pageobjects/page");
const HomePage = require("../pageobjects/home.page");
const OidcPage = require("../pageobjects/oidc.page");
const DashboardPage = require("../pageobjects/dashboard.page");

Given(/^I am on the (\w+) page$/, (page) => {
  switch (page) {
    case "home":
      HomePage.open();
    default:
      break;
  }
});

Given(/^The GMID (\d+) with password (.*)$/, (gmId, password) => {
  OidcPage.credentials = { gmId, password };
});

Given(
  /^The bookingId (\d+) for the user (\w+) (\w+)$/,
  (bookingId, firstName, lastName) => {
    OidcPage.credentials = { bookingId, firstName, lastName };
  }
);

When(/^I go (\w+) login$/, (type) => {
  if (!["full", "quick"].includes(type)) {
    should.fail(`Wrong login type ${type}`);
  }
  HomePage.signIn(type);
  OidcPage.login(type);
});

Then(/^I should access the CC$/, () => {
  expect(browser).toHaveUrl(`${Page.baseUrl}/${DashboardPage.path}`);
});
