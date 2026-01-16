const { BasePage } = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    //this.loginButton = page.locator('# Login');
    this.loginButton = page.getByRole('button', { name: ' Login' }); 

  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();  
  }
}

module.exports = { LoginPage };
