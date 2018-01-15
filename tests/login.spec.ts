import { browser } from "protractor";
import { HomePage } from "../pages/homePage.po";

describe('Login', () => {

  const homePage = new HomePage;

  beforeEach(() => {
    // Setting for Angular Pages
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(true);
    homePage.navigateToLoginPage();
    expect(browser.getCurrentUrl()).toContain('/login');
  });

  it('Check when pass correct email and password', () => {
    homePage.logIn('admin', '123456');
  });

  it('Check when pass invalid user name', () => {
    homePage.logIn('admi', '123456');
  })

  it('Check when pass correct username and invalid password', () => {
    homePage.logIn('admin', '12345');
  })

  it('Check when empty username and empty password', () => {
    homePage.logIn('admin', '123456');
  })
});