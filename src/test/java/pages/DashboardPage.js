const { BasePage } = require('./BasePage');

class DashboardPage extends BasePage {
  constructor(page) {
    super(page);
    this.welcomeText = page.getByText('Welcome to the Secure Area.');
  }

  async getWelcomeMessage() {
    return await this.welcomeText.textContent();
  }
}

module.exports = { DashboardPage };

