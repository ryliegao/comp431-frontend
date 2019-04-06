import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toContain('Welcome!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

  it('should log in as test user', () => {
    browser.get(browser.baseUrl + '/auth/login');
    element(by.id('login_username')).sendKeys('yg38');
    element(by.id('last_field')).sendKeys('qwe123');
    element(by.id('login_submit')).click();

    expect(page.getTitleText()).toContain('Your');
    expect(page.getTitleText()).toContain('Profile');
    expect(page.getTitleText()).toContain('Log');
    expect(page.getTitleText()).toContain('Out');
  });
});
