const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');

test('Valid login test using POM', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.navigate('https://the-internet.herokuapp.com/login');
  await loginPage.login('tomsmith', 'SuperSecretPassword!');

  const welcomeMsg = await dashboardPage.getWelcomeMessage();
  expect(welcomeMsg).toContain('Welcome');
  // Additional assertions can be added here
});
