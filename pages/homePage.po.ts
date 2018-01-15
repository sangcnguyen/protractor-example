import { browser, element, by } from 'protractor';

export class HomePage {

  // Web Element
  private txtUsername = element(by.id('username'));
  private txtPassword = element(by.id('password'));
  private btnLogin = element(by.css("#login > button"));
  private txtUser = element(by.xid('text'));
  private txtAlert = element(by.xpath('id("flashMessages")/div[@class="alert flash-message alert-danger"]/p[1]'));

  public navigateToLoginPage(): any {
    return browser.get('localhost:4200/login');
  }

  public logIn(username: string, password: string): void {
    this.txtUsername.clear();
    this.txtUsername.sendKeys(username);
    this.txtPassword.clear();
    this.txtPassword.sendKeys(username);
    this.btnLogin.click();
  }

  public getUser() {
    return this.txtUser.getText();
  }

  public getAlert() {
    return this.txtAlert;
  }
}