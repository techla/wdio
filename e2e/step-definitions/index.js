const { Given, When, Then } = require("@cucumber/cucumber");

const Page = require("../pageobjects/page");
const homePage = require("../pageobjects/home.page");
const oidcPage = require("../pageobjects/oidc.page");
const dashboardPage = require("../pageobjects/dashboard.page");

Given(/^une nouvelle session$/, () => {
  browser.reloadSession();
  browser.deleteCookies();
});

Given(/^je me trouve sur (.*)$/, (page) => {
  switch (page) {
    case "la page d'accueil":
      homePage.open();
      homePage.acceptCookies();
    default:
      break;
  }
});

Given(/^mes informations d'authentification sont les suivantes$/, (table) => {
  const {
    "GM ID": gmId,
    email,
    "mot de passe": password,
    "booking ID": bookingId,
    prénom: firstName,
    nom: lastName,
  } = table.rowsHash();
  oidcPage.credentials = {
    gmId,
    email,
    password,
    bookingId,
    firstName,
    lastName,
  };
});

When(/^je m'authentifie en (\w+) login$/, (type) => {
  if (!["full", "quick"].includes(type)) {
    should.fail(`Wrong login type ${type}`);
  }
  homePage.signIn(type);
  oidcPage.login(type);
});

Then(/^je dois être redirigé vers le compte client$/, () => {
  expect(browser).toHaveUrl(`${Page.baseUrl}/${dashboardPage.path}`);
});

Given(/^je suis connecté à mon compte client$/, () => {
  homePage.open();
  homePage.acceptCookies();
  homePage.signIn("full");
  oidcPage.login("full");
});

When(/^je click sur le picto SPA$/, () => {
  dashboardPage.openSpaLayer();
});

Then(
  /^je dois voir apparaitre le layer proposant tous les SPA disponibles en upsell$/,
  () => {
    expect(dashboardPage.activities).toHaveLength(3);
  }
);
